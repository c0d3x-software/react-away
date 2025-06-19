import { isRouted } from './is-routed'
import { Address, IRouter } from '../typings'

const store = { }

class BrowserRouter implements IRouter {
   private routes: string[] = []
   private cursor: number = 0

   public get current() {
      const route = location ? location.pathname : global.own.url
      const param = global.ioc.param
      const state = store[route]

      return { route, param, state }
   }

   public get address() {
      const value: Address = {
         hash: window?.location.hash,
         host: window?.location.host,
         home: global.env.PREFIX_URL || '/'
      }

      return value
   }

   public get history() { return this.routes }

   public go(route: string, reload?: boolean, state?: object) {
      if (!route) return false
      if (reload) location.href = route
      else history.pushState(null, '', route)
      if (state) store[route] = state
      return true
   }

   public redo(count?: natural): boolean {
      if (this.cursor >= this.routes.length) return false;
      if (count === undefined) return this.redo(1)
      if (!count) return false

      this.cursor++
      this.go(this.routes[this.cursor])

      return true
   }

   public undo(count?: natural): boolean {
      if (count === undefined) return this.undo(1)
      if (!this.cursor) return false
      if (count < 1) return false

      this.cursor--
      this.go(this.routes[this.cursor])

      return true
   }

   public todo = (count: number) =>
      count > 0 ? this.redo(count as natural)
    : count < 0 ? this.undo((count * -1) as natural)
    : false

   public on = event => new Promise<any>((done, fail) => {
      if (!event) fail('invalid event')
      else done(true) // TODO
   })

   public is(route: string) {
      return isRouted(this.current.route, route)
   }
}

export const router = new BrowserRouter() as IRouter