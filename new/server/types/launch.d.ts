declare global {
   interface Launch {
      (settings: Settings): FluentLaunch
   }

   interface FluentLaunch {
      inject: InjectLaunch
      server: ServerLaunch
   }

   interface InjectLaunch {
      <T extends HandlerType>(handler: Handler<T>): FluentLaunch
   }

   interface ServerLaunch {
      /** root query and path to html 
       * @param {string} root query selector to root element
       * @param {string} path file path to index html */
      (root: string, path: string): Promise<void>
   }
}

export { }

