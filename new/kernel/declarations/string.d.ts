export { }

declare global {
   type URLString = `http://${string}` | `https://${string}` | `file://${string}` 
   type HTMLString = `<${string}>${string}</${string}>`
   type PathString = `/${string}/${string}` | `${string}:\\`
   type RouteString = `/${string}`
}