export { }

declare global { 
   interface Settings {
      store?: object
      frest?: () => void
      logon?: () => object
      build?: (path: string, root: string) => Promise<void>
      route?: {
         getRoutedParams(): Record<string, string>
         getCurrentRoute(): string
      }
   }
}
