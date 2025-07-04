/// <reference lib='dom' />
/// <reference lib='esnext' />
/// <reference path="array.d.ts" />

Array.range = function(...args: any[]) {
   if (!args.length) return []
   const first = args.length == 2 ? args[0] : 0
   const final = args.length == 2 ? args[1] : args[0]
   
   return Array(final).fill(first).map((x,i) => x+i)
}

Array.prototype.first = function(predicate?) { 
   predicate ||= (x => x)
   return this.map(predicate).find(predicate) || undefined 
}

Array.prototype.distinct = function() { 
   return [ ...new Set<any>(this.flatMap(x => x ? [x] : [])) ]
}

Array.prototype.toObject = function() {
   if (this[0].length == 2)
      return Object.fromEntries(this)
   
   return {}
}

Array.prototype.pairs = function<T>() {
   const inner = x => this.flatMap(y => x !== y ? [[x, y]] : []).distinct()

   return this.flatMap(inner).filter(x => x).distinct() as [T,T][]
}

export { }