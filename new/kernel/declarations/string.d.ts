export { }

declare global {
   type URLString = `http://${string}` | `https://${string}`
   type URIString = URLString | `file://${string}` 
   type HTMLString = `<${string}>${string}</${string}>`
   type PathString = `/${string}/${string}` | `${string}:\\`
   type RouteString = `/${string}`
}