declare global {
   interface CacheData {
      /** list of route metatags */
      meta?: MetaTag

      /** HTML rendered cached */
      html?: HTMLString

      /** HTML for suspense await */
      wait?: HTMLString

      /** false for fallback routing  */
      same?: boolean

      /** crashed JSX when try to render in server-side */
      fail?: RFE
   }
}

export { }