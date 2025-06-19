export interface IRouter {
   /** current route */
   current: Current

   /** route history */
   history: string[]

   /** context route */
   address: Address
   
   /** back to the last route */
   redo(): boolean

   /** back to the last counted routes  */
   redo(count: natural): boolean
   
   /** go to the next route history */
   undo(): boolean

   /** go to the counted next route */
   undo(count: natural): boolean
   
   
   /** go back or next, depending if
    * count is positive or negative */
   todo(count: number): boolean
   
   /** goto to the defined route */
   go(route: string): boolean

   /** goto to the defined route with optional page reload */
   go(route: string, reload: boolean): boolean
   
   /** check if route pattern is a real route */
   is(route: string): boolean

   /** get catch route, undo or redo changes */
   on<T = any>(event: string|'undo'|'redo'): Promise<T>
}

export interface Address {
   /** hash url */
   hash: string
   
   /** host address */
   host: string

   /** base url */
   home: string
}

export interface Current {
   route: string
   param: record
   state: object
}

export type RouteEvent = 'back' | 'goto'