import { PREFIX_ERROR } from "../../kernel"
import { Path, File, response } from '../shared'

export async function serve(request: Request) {  
   const path = new URL(request.url).pathname
   const fail = `${PREFIX_ERROR}not found in ${path}`
   const pres = ['', Path.cwd, Path.assets, Path.builds, Path.routes]
    
   if (path.startsWith("/api/"))
      return webapi(path, request)

   for (const directory of pres) {
      const file = new File(`${directory}${path}`)
      const have = await file.exists()
      if(have) return new Response(file.blob)
   }
   
   return response(404, fail)
}

export async function webapi(path: string, request: Request) {   
   const name = path.replace("/api/", "/")
   const verb = request.method.toLowerCase()
   const fail = `${PREFIX_ERROR}not found ${verb} verb`

   try {
      const url = `${Path.apis}${name}`
      const api = await import(url).then(x => x[verb])

      if (api) return await api(request)
      else throw fail + ' in ' + url
   }
   catch(ex) {
      return response(404, ex)
   }
}