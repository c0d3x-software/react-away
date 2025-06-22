import '../shared'

declare global {
   type Launch = (settings: Settings) => Fluent  

   interface Fluent {
      inject<T extends HandlerType>(handler: Handler<T>): Fluent      

      /** root query and path to html
       * @param {string} root query selector to root element
       * @param {string} path file path to index html */
      server(root: string, path: string): Promise<void>
   }

   interface Settings {
      store?: object
      frest?: () => void
      logon?: () => object
      paths?: {
         assets: '/assets',
         routes: '/routes'
      }
      route?: {
         getRoutedParams(): Record<string, string>
         getCurrentRoute(): string
      }
   }
}

export { }

