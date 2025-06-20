"use server"

import { JSXON } from "../../kernel"
import { Path, File, queriefy, response } from "../shared"
import { fallbackHTML, hasFallbackRouting } from "./fallback"
import { mounter } from "../runner"
import  { render } from '../render'

type ImportType = "component"|"stream"|"html"

interface StreamArgs {
   type: ImportType 
   path: string
   name: string
   base: string
}

export const isStream = (request: Request) => 
   Object.keys(queriefy(request).query).includes("jsx")

export async function stream(request: Request)   
export async function stream(route: string, type: ImportType, name: string, base?: string)
export async function stream(args, type: ImportType="html", name='default', base='') {  
   return args instanceof Request ? await streamByRequest(args)
      : await streamByArgument({ path: args, type, name, base })
}

async function streamByRequest(request: Request) {
   if (!isStream(request)) return undefined

   const type = "stream"
   const href = new Path(request.url).route
   const name = queriefy(request).query.tag || 'default'
   const args: StreamArgs = { path: href, type, name, base: '' }

   return await streamByArgument(args)
}

async function streamByArgument(args: StreamArgs) {
   const [namedPath, indexPath] = ['', '/index']
      .map(x => `${Path.routes}${args.path}${x}.tsx`)

   const have = async x => await new File(x).exists()

   const path = await have(args.path) ? args.path
              : await have(namedPath) ? namedPath
              : await have(indexPath) ? indexPath
              : undefined

   if (!path) return response(404, 'not found: ' + args)

   const mergingHTML = ([ jsx, html ]) => 
      path ? mounter(jsx, path, html) : ''
   
   const importComponent = x => x
      .then(x => x[args.name || 'default'])
      .then(x => render(x, path))

   const streamPipeline = x => importComponent(x)
      .then(jsx => jsx ? JSXON.htmlfy(jsx) : '')

   const servingPipeline = x => importComponent(x)
      .then(jsx => [jsx, JSXON.htmlfy(jsx)])
      .then(mergingHTML)

   const pipeline = args.type == "stream" ? streamPipeline
                  : args.type == "html" ? servingPipeline
                  : importComponent

   const html = await pipeline(import(path))
   const mime = args.type == "html" ? "text/html" : "text/plain"
   const fall = hasFallbackRouting(path as RouteString)

   return args.base && fall
      ? fallbackHTML(html, args.base, path)
      : response(200, html, mime)
}