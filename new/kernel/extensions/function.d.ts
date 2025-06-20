import '../extensions'

declare global {
   type Fn = Function

   interface Function {

      //** function metadata information */
      metadata: FunctionMetadata
   }

   interface FunctionMetadata {
      /** true if it is an async function  */
      readonly async: boolean

      /** module of the function */
      readonly module: Module

      /** related function decorators */
      readonly decorators: FunctionDecorator[]
   }

   interface FunctionDecorator<P extends object = any, F extends Fn = Fn> {
      (module: ImportMeta, target: Function): F

      /** decorated function */
      target: F

      /** decorator informations */
      params: P[]
   }
}

export { }

