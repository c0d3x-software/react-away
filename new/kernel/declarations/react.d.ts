declare global {
   type Props<T = object> = T & { children?: any[] }

   type TypeJSX<P = Props> = string | FunctionJSX<P>

   interface FunctionJSX<P = Props> {
      (props: P, feeds: IoC): ReactNode
      (props: P): ReactNode
   }

   interface ObjectJSX<P = Props, T extends JSX = string> {
      type: T
      props: P
      key: string | null
   }

   type JSX<P = Props> = string | FunctionJSX<P> | ObjectJSX<P>
}

export { }