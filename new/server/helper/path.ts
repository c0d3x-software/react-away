/// <reference path="path.d.ts" />


import '../../kernel'
import path from 'path'
import { readdirSync } from 'fs'
import { InvalidError, IOError } from '../../kernel'
import { File } from "./file";

class PathClass implements IPath {
   public readonly isDirectory:boolean
   public readonly path: string
   public readonly mode: 'http' | 'file'

   constructor(meta: ImportMeta) 
   constructor(path: string)
   constructor(args: any) {
      if (typeof args == 'object') this.path = args.url
      else if (typeof args == 'string') this.path = args
      else throw new InvalidError('Invalid path argument')

      if (this.path == '.') this.path = PathClass.now

      if (this.path.startsWith('..')) 
         this.path = new PathClass(PathClass.now).resolve(this.path).path

      if (this.path.startsWith('/'))
         this.path = PathClass.cwd + this.path

      this.path = this.path.replace(/\/$/, '')
      this.path = this.path.replaceAll('\\', '/')
      this.mode = this.path.startsWith('http') ? 'http' : 'file'
      this.isDirectory = !this.path.match(/\.[a-zA-Z]{2-4}$/)
   }   

   get name() { return path.parse(this.path).name }  
   get filename() { return path.basename(this.path) }
   get pathname() {
      return path.dirname(this.path)
         .replaceAll(/^file:\/\//, '')
         .replaceAll(/^http:\/\//, '')
         .replaceAll(/\/$/, '') as RouteString
   }  

   get parent() { return new PathClass(path.dirname(this.path)) }
   get route() {
      const ends = this.path.split(global.own.directories.routes).at(1)
      if (!ends) throw new InvalidError('The path it out of route directory')
      return ends.replace('//', '').replace(/\/$/, '')
   }

   public resolve(relativePath: string) {
      if (this.mode == 'file') {
         const base = this.path.replace('file://', '')
         const done = path.resolve(base, relativePath)
         return new PathClass('file://' + done)
      } 
      else {
         const url = new URL(relativePath, this.path)
         return new PathClass(url.toString())
      }
   }

   public endsWith(...args: string[]): boolean {
      return args.some(x => this.path.endsWith(x))
   }

   static get cwd() { return `file://${process.cwd()}` }

   static get npm() { return `${PathClass.cwd}/node_modules` }

   static get now() { return import.meta.url }

   public backTo = (name: string, retry = 9) => 
      ! name || retry < 0 ? '/'
      : this.name == name ? this
      : this.parent.backTo.call(name, retry - 1)

   public toString() { return this.path }

   public get list() {
      return readdirSync(this.path, { withFileTypes: true })
         .map(x => `${this.path}/${x.name}`)
         .map(x => new PathClass(x))
   }

   public get file(): File {
      if (this.isDirectory)
         throw new IOError('Cannot turn a folder path in file in Path.file.')

      return new File(this.path)
   }   
}


export const Path: IPathConstructor = PathClass
