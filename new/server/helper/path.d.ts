export { }

declare global {
   interface Path {
      url: string
      uri: string
      dir: string
      top: Path
      sub: Path[]
      now: Path
   }
}