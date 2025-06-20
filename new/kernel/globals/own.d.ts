/// <reference path="own.route.d.ts" />

declare global {
   interface Own {
      is: Status,
      url: string
      root: HTMLQuery
      tasks: Record<HandlerType, IHandler[]> | null
      caches: Record<RouteString, CacheData>
      modules: Module[]
      settings: Settings
      functions: Function[]
      hydrations: Hydration[]
      directories: Record<string, RouteString>
   }

   interface Status {
      debug: boolean;
      build: boolean;
      serve: boolean;
      fails: boolean;
   }
}

export { }