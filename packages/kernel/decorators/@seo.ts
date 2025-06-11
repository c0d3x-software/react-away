/// <reference path="@seo.d.ts" />

import { getComponentName } from '../helpers'

const charsets = ["UTF-8", "UTF-16"]

/** SEO decorator for title + description */
export function seo(title: string, description: string): Decorator<RFC>

/** SEO decorator for title + charset */
export function seo(title: string, charset: "UTF-8"|"UTF-16"): Decorator<RFC>

/** SEO decorator for title with MetaTag type */
export function seo(title: string, metadata: MetaTag): Decorator<RFC>

/** SEO decorator for dynamic route with high-order functions */
export function seo(title: string, action: <T=record>(params: T) => MetaTag): Decorator<RFC>

/** SEO decorator for title + metatags object */
export function seo(title: string, args: string|MetaTag|Function): Decorator<RFC> {
   const isString = typeof args === "string"
   const isFunction = typeof args == "function"
   const isCharSet = isString && charsets.includes(args)

   if (isString) return seo(title, { description: args })
   if (isCharSet) return seo(title, { charset: args })   
   if (isFunction) return seo(title, args(global.ioc.param))
   
   return function (meta: ImportMeta, call: RFC) {
      const info: SeoDecoratorInfo = {
         ...args,
         tag: getComponentName(meta, call),
         name: seo.name,
         title,
         route: new URL(meta.url).pathname,
         target: call
      }

      call.decorators.push(info)

      return call
   }
}

export interface SeoDecoratorInfo extends DecoratorInfo, MetaTag {
   tag: string
   route: string
}