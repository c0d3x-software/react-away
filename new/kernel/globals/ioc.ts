/// <reference path="ioc.d.ts" />

const setttingsError = (name: string) =>
     `Launch settings: undefined ${name} in launch settings. `
   + `Define a ${name} in launch({ settings }) to enable it for `
   + `to be use in DI provider resolution.`

export const ioc: IoC = {
   await: false, 
   refer: undefined,
   tasks: null,
   fresh: () => { throw setttingsError('fresh function')  },
   fails: [], 
   store: {},    

   get param() {
      if (!global.own.settings?.route)
         throw setttingsError('route object')

      return global.own.settings.route.getRoutedParams()
   },
      
   get route() {
      if (!global.own.settings?.route)
         throw setttingsError('route object')
      
      return global.own.settings.route.getCurrentRoute() as RouteString
   },

   get logon() {
      if (!global.own.settings?.logon)
         throw setttingsError('logon function')

      return global.own.settings.logon()      
   }
}