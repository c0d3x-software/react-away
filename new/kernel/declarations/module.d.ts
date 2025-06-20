export { }

declare global {
   interface Module {
      /** active use side of module */
      use: Side

      /** module path */
      path: PathString

      /** imports and exports */
      ports: {
         imports: object[]
         exports: object[]
      }
   }
}