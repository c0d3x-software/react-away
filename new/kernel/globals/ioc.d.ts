export { }

declare global {

   /** IoC container object  */
   interface IoC<P extends object = any, S extends object = record, L extends object = any> {      
      /** pending flag during request response */
      await: boolean

      /** HTML validation API array */
      fails: Invalid[]

      /** injected raw global state */
      store: S

      //** dynamic route argument */
      param: P | {}
      
      /** current route */
      route: RouteString | '/'

      /** imperative render */
      fresh: () => void

      /** current logon */
      logon: L

      /** injected handlers */
      tasks: IHandler[]

      /** legacy 2nd component arg */
      refer?: any
   }

   // IoC service provider object
   type Feeds = Omit<IoC, "tasks", "refer">
}