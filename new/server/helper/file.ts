/// <reference path="./file.d.ts" />

"use server"

import { BunFile } from 'bun'
import { IOError, throws } from 'kernel'

export class File implements IFile {
   public readonly blob: BunFile
   public readonly mime: string
   public readonly path: string
   public readonly size: number // kbytes
   public readonly name: string

   constructor(path: string) { 
      try {
         this.path = path
         this.blob = path ? Bun.file(path) : ({} as any)
         this.mime = path ? this.blob.type : ''
         this.size = path ? this.blob.size / 1000 : 0
         this.name = path ? path.split('/').at(-1) || '' : ''
      }
      catch(ex) {
         console.log(`react-away file.ts contructor (${path})`)
         throw ex
      }
   }

   public exists() { return this.blob.exists ? this.blob.exists() : Promise.resolve(false) }
   
   public async save(text: string) { 
      const result = await Bun.write(this.path, text) 
      await new Promise(resolve => setTimeout(resolve, 9))
      return result
   }

   public async load()
   public async load(failure: string)
   public async load(failure: string, decode: boolean)
   public async load(failure?: string, decode?: boolean) {   
      if (!this.path) return ''

      const content = await this.blob.exists() 
                    ? await this.blob.text()
                    : throws(IOError, failure || '') 

      return decode ? decodeURI(content) : content
   }
}