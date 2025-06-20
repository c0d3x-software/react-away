declare global {
   interface IBuilder {
      new(folder: string, index: string): IBuilder
      traverse(file: string, fn: Function)
      generate<T = string>(html: string, data: T, path: Path)
      validade(html: string, bundle: string, paths: Path[]): () => Promise<void>
   }
}

export { }

