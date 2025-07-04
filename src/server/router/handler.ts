import { Path } from "../shared"

type Delegate = (route: string) => any

export function handler(request: Request, routing: Delegate) {
   const pipes = global.own.handlers.requests || []
   
   for (const middleware of pipes) {
      const response = middleware(request)
      if (response) return response
   }
   
   const href = request.url
   const path = new Path(href)
   const model = new URL(request.url).searchParams.entries()
   const query = Object.fromEntries(model);

   global.ioc.query = query

   return routing(path.route)
}
