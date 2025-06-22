import { ERROR_PREFIX } from "./constants"

export interface IError {
   new(message: string)
}

abstract class BaseError extends Error {
   constructor(message: string, public status: number) {
      super(`${ERROR_PREFIX} ${message}`)
   }
}

export class InvalidError extends BaseError {
   constructor(message: string) { super(message, 400) }
}

export class IOError extends BaseError{
   constructor(message: string) { super(message, 500) }
}
