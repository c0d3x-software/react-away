import { FormEvent } from "react"
import { Props } from "../directives/form[data]"

export type SubmitReturn = { errors: Invalid[], inputs: HTMLInputElement[] }

export type SubmitEvent = FormEvent<HTMLFormElement> & {
   nativeEvent: { submitter: { onclick: string }}
   target: HTMLFormElement & { elements:any }
}

export interface UpdateArgs {
   inputs: HTML[]
   params: Params
   fetch?: OnFetchEvent
   submit?: OnSubmitEvent
   props: ServerActionProps 
}

export interface ServerActionProps extends Props {
   action?: `http://${string}`|`https://${string}`
   format?: "formData"|"json" // default=formData
   method?: "POST"|"PUT"|"PATCH"
   bearer?: string
}

export type HTML = HTMLInputElement

export interface ChildProps {
   bind?: string
   children?: record[]
   validate?: Function // in-element custom validation
}
