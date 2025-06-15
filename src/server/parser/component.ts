"use server"

import { JSXON } from '../../kernel'
import { Path, File } from '../shared'
import { throws } from '../../kernel'
import { render } from '../render'
import { inject } from './inject'

export async function parseComponent(component: RFC, path: string)
export async function parseComponent(component: RFC, path: string, html: string)
export async function parseComponent(component, path, html?, done = []) {
   path ||= component.path

   try {
      const error = /<!--\$!-->([\s\S]+)<!--\/\$-->/
      const route = new Path(path).route

      if (done.includes(route)) return ''

      const url = `${Path.builds}${route}.html`
      const jsx = await render(component, route)
      const jms = jsx ? JSXON.htmlfy(jsx) : ''
      const htm = await inject(jsx, route, jms, html)
      const out = jms.replaceAll("'", '"')
      const err = htm.match(error)
      const get = global.own.routes[path]

      get.cache = encodeURI(out) as HTMLString

      if (!!err) throw err[1]
      await new File(url).save(htm)
      return done.push(route) && htm as HTMLString
   }
   catch (ex: any) {
      throws<boolean>(ex, import.meta)
      throw ex
   }
}