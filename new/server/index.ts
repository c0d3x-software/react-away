export const launch: Launch = (settings: Settings) => {
   global.own.settings = settings

   async function server(root: string, path: string) {
      if (!settings.build) throw 'Launch settings: build is undefined'
      else return await settings.build(path, root)
   }

   function inject<T extends HandlerType>(handler: Handler<T>) {
      global.ioc.tasks.push(handler)
      return { inject, server }
   }

   return { inject, server }
}