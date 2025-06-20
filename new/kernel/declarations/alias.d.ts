import React from 'react'

declare global {
   type none = undefined | null
   type record = Record<Key, any>
   type primitive = string | number | boolean | none
   type Key = string | symbol | number
   type Class = { new() }
   type Type = 'string'|'number'|'boolean'|'object'|'function'|'class'|''
}

export { }