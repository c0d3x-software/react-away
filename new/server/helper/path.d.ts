export { }

declare global {
   interface IPath {
      isDirectory: boolean
      name: string
      path: string
      mode: 'file'|'http'
      pathname: RouteString
      filename: string
      parent: Path
      route: string
      list: Path[]

      toString()
      backTo(name: string): Path
      resolve(relativePath: string): Path
      endsWith(...args: string[]): boolean
   }

   interface IPathConstructor {    
      new(path: string): IPath
      new(meta: ImportMeta): IPath

      /** project root folder */
      cwd: string

      /** node_modules folder */
      npm: string

      /** current module path */
      now: string
   }
}