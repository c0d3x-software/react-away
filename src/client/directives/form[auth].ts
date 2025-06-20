import { throws } from '../../kernel'
import { ServerActionProps } from "../typings/form"

/** experimental authentication binding using basic authentication and jwt bearer */
export function authenticate<T extends record = record>(props: ServerActionProps): RequestInit{
   if (global.env.SIDE == "server") return throws<Response>('formProps only support client-side')
   
   const body = props.data ? JSON.stringify(props.data) : undefined
   const method = props.method || 'POST'
   const headers = new Headers()

   if (props.data && props.data['password'] && props.data['username']) {
      const { username, password } = (props.data as any)
      const encoded = btoa(`${username}:${password}`)
      headers.set('Authorization', `Basic ${encoded}`)
      sessionStorage.removeItem('token')
   }

   else if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token')
      headers.set('Authorization', `Bearer ${token}`)
   }   

   return { body, method, headers, }
}

export async function authorize(response: Response, props?: ServerActionProps) {
   if (response.status == 401) sessionStorage.removeItem('token')   

   if (props?.bearer && response.ok) {
      const value = await response.json()
      const token = value[props.bearer]

      if (token) sessionStorage.setItem('token', token)
   }
}