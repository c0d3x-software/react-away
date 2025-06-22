import { IError } from "./errors";

export function throws(Exception: IError, message: string) {
   throw new Exception(message)
   return ''
}