declare global {
   interface IFile {

      /** file directory */
      path: string

      /** mime type */
      mime: string

      /** binary blog Bun File */
      blob: IBunFile

      /** load file content */
      load<T = string>(): Promise<T>

      /** load file content passing error message if fails */
      load<T = string>(error: string): Promise<T>

      /** load file content passing error message if fails 
       * and check if it will cast by decodedURI */
      load<T = string>(error: string, decode: boolean): Promise<T>

      /** saving file */
      save(text: string): Promise<any>

      /** check if current path file exists */
      exists(): Promise<boolean>
   }

   interface IBunFile {
      exists(): Promise<boolean>
      text(): Promise<string>
      type: string
      size: number
   }
}

export {}