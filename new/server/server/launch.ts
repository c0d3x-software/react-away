'use server'

import "./launch.d"

export const launch: Launch = (settings: Settings) => {
   global.own.settings = settings

   async function server(root: string, path: string) {
      // TODO: bundler + server 
   }

   function inject<T extends HandlerType>(handler: Handler<T>) {
      global.ioc.tasks.push(handler)
      return { inject, server }
   }

   return { inject, server }
}