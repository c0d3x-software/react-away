"use server"

import { JSDOM } from 'jsdom'
import { marked } from 'marked'
import { JSXON, PREFIX_ERROR } from '../../kernel'
import { Path, File, logger as log } from '../shared'
import { renderToString } from 'react-dom/server'
import { throws } from '../../kernel'
import { JSX_IN_HTML } from './regex'
import { render } from '../render'
import { inject } from './inject'
import React from 'react'

declare class JSDOM {
   constructor(htmlString: string)
   window: { document: HTMLDocument }
}

const INTERPOLATION_RGX = /\$\{\s*(.+?)\s*\}/gmi
const LITERALS_ATTR_RGX = /([\w-]+)=(?!'|")([^\s>]+)/gmi
const COMPONENTS_RGX = /<([A-Z]+?\w+)([^\/]+?)\/>|<([A-Z]+?\w+)([^>]*?)>[^<]*?<\/[A-Z]+?[^>]+?>/gm

export function parseMD(route: RouteString, markdown: string, outerHTML: string): Promise<HTMLString>
export async function parseMD(route, md, html) {
   const REGEX_FIX = /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/
   const inner = await marked.parse(md.replace(REGEX_FIX, "")) as HTMLString
   return await parseHTML(route, inner, html)
}


export function parseHTML(route: RouteString, innerHTML: string, outerHTML: string): Promise<HTMLString> 
export async function parseHTML(route: RouteString, innerHTML: string, outerHTML: string) {
   if (!innerHTML.trim().toLowerCase().startsWith('<template'))   
      throw PREFIX_ERROR + `HTML in routes must starts with <template> in ${route}`

   const template = new JSDOM(innerHTML).window.document.querySelector(`template`) as HTMLElement   
   if (!template) throw PREFIX_ERROR + `template tag not found in container HTML ${route}`

   const src = template.getAttribute('src')
   const module = src && await import(src)
   const interpolateData = (html, data) => html.replace(data.old, data.new)
   const reduceToProps = (res, [key, val]) => res[key] = module[key] || tryParse(val) || val
   const convertToProps = attrs => attrs.split(' ').map(x => x.split('=')).reduce(reduceToProps, {})
   const generatePropsFromHTML = args => ({ ...args, props: convertToProps(args.attrs)})

   // convert attribute literals into interpolation syntax
   // attr=1 --> attr=${1}, attr2=true --> attr2=${true}, etc
   innerHTML = innerHTML.replace(LITERALS_ATTR_RGX,
      (_, key, value) => `${key}=\${${value}}`);

   // interpolate values
   innerHTML = innerHTML
      .matchAll(INTERPOLATION_RGX)
      .toArray().filter(x => x.length > 0)
      .map(x => ({ key: x[1], old: x[1] }))
      .map(x => ({ ...x, new: module[x.key] }))
      .reduce(interpolateData, innerHTML)
   
   // interpolate JSX
   innerHTML.matchAll(COMPONENTS_RGX)
      .map(x => ({ place: x[0], label: x[1] || x[3], attrs: x[2] || x[4] }))
      .filter(x => module[x.label] as RRE)
      .map(x => ({ ...x, func: module[x.label] as RFC }))
      .map(generatePropsFromHTML)
      .map(x => ({ ...x, node: x.func(x.props) }))
      .map(x => ({ ...x, html: renderToString(x.node) }))
      .reduce((html, args) => innerHTML.replace(args.place, args.html), innerHTML)
}

function tryParse(value) {
   try { return JSON.parse(value) }
   catch { return undefined }
}