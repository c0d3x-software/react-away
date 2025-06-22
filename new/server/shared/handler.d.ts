export { }

const HANDLER_TYPE = {
   load: 0,
   error: 1,
   render: 2,
   request: 3,
   property: 4
}


declare global {
   type Loader = "js" | "jsx" | "ts" | "tsx" | "json" | "toml" | "file" | "napi" | "wasm" | "text" | "css" | "html"
   type HandlerType = keyof typeof HANDLER_TYPE
   type RenderKind = 'component' | 'element' | 'fragment'

   interface IHandler<T extends HandlerType> { type?: T }

   interface ErrorHandler extends IHandler<'error'> {
      (error: Error): JSX
   }
   
   interface LoadHandler extends IHandler<'load'> {
      (path: string, code: string): { content: string, loader: Loader  }
   }
   
   interface RenderHandler extends IHandler<'render'> {
      (side: Side, kind: RenderKind, args: RenderArgs)
      (side: Side, kind: RenderKind, args: RenderArgs, fail: () => void)
   }
   
   interface PropertyHandler extends IHandler<'property'> {
      (side: Side, props: any, params: any): T
   }
   
   interface RequestHandler extends IHandler<'request'> {
      (request: Request): Response | void
   }
   
   type Handler<T extends HandlerType> =
        T extends 'load' ? LoadHandler
      : T extends 'error' ? ErrorHandler
      : T extends 'render' ? RenderHandler
      : T extends 'request' ? RequestHandler
      : T extends 'property' ? PropertyHandler
      : undefined   

   interface RenderArgs<P = Props> {
      /** current jsx in recursive loop render */
      jsx: JSX<P>

      /**  parent component tag of each element */
      own: string

      /** url component */
      url: RouteString

      /** directory component */
      dir: string   

      /** unique id of iterative calls  */
      uid: number   
   }

}

export { }