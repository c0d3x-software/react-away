import { Settings } from "./global"

declare global {
   interface Env extends record {
      
      /** client-side or server-side */
      SIDE: Side
      
      /** site port number (default = 3000) */
      PORT: number
      
      /** debounce render delay in reactive objects */
      DELAY: number
      
      /** sets if bundle is zipped for transit */
      ZIPPED: boolean
      
      /** sets if all content is minified  */
      MINIFIED: boolean
      
      /** enviroment hostname */
      HOSTNAME: string

      /** prefix url (for microfrontend) */
      PREFIX_URL: string

      /** list secundaries sitemap */
      SITEMAPS: string[]

      /** robot.txt auto-generation by environment */
      ROBOT: { agent?: string, allow?: [], disallow?: [] }[]

      /** method to load the env file */
      load(file: () => Promise<object>)
   }
}

export { }