export { }

declare global {
   type Loader = "js" | "jsx" | "ts" | "tsx" | "json" | "toml" | "file" | "napi" | "wasm" | "text" | "css" | "html"
   type HandlerType = 'loader' | 'exception' | 'render' | 'request' | 'property'

   interface IHandler<T extends HandlerType> { type?: T }

   interface ExceptionHandler extends IHandler<'exception'> {
      (error: Error): JSX
   }
   
   interface LoaderHandler extends IHandler<'loader'> {
      (path: string, code: string): { content: string, loader: Loader  }
   }
   
   interface RenderHandler extends IHandler<'render'> {
      (props, feeds): JSX
   }
   
   interface PropertyHandler extends IHandler<'property'> {
      (props: any, params: any): T
   }
   
   interface RequestHandler extends IHandler<'request'> {
      (request: Request): Response | void
   }
   
   type Handler<T extends HandlerType> =
        T extends 'loader' ? LoaderHandler
      : T extends 'render' ? RenderHandler
      : T extends 'request' ? RequestHandler
      : T extends 'property' ? PropertyHandler
      : T extends 'exception' ? ExceptionHandler
      : undefined   
}

export { }