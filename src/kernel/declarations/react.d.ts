export { }

declare global {
   type Invalid<T = any> = { error: string, field: string, value: T }
   type OnValidateEvent = (invalids: Invalid[]) => Promise<void>
   type OnSubmitEvent = (value: any, feeds: IoC) => void
   type OnFetchEvent = (response: Response) => void
   type Validate = (value: string) => string|''
   
   interface Bind { bind?: string }
   interface Data<T extends Object = record> { data?: T }
   interface FormAuth { bearer?: string }
   interface DataBind extends Data, Bind { validate?: Validate }
   interface OnValidate { onValidate?: OnValidateEvent }
   interface OnSubmit { onSubmit?: OnSubmitEvent }

}

declare module "react" {
   // bindProps + formProps
   interface FormHTMLAttributes<T> extends Data, FormAuth, OnSubmit, OnValidate { }
   interface InputHTMLAttributes<T> extends DataBind { }
   interface SelectHTMLAttributes<T> extends DataBind { }
   interface TextareaHTMLAttributes<T> extends DataBind { }   

   // routeProps
   interface HTMLAttributes<T> { link?: string, route?: string }
   
   // [await] server props
   interface HTMLAttributes<T> { await?: (props, feeds) => Promise<RFE> }

   // css props
   interface HTMLAttributes<T> {  
      grid?: boolean
      cols?: number|string
      gaps?: number|string
      range?: [number, number]
      theme?: "dark"|"light"
      media?: string
   }
}