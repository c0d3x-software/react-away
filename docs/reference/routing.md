<style>@import url(routing.css);</style>

# Routing

> file-base routes • route decorator • dynamic route • props routing •  markdown support • lazy load • nested routes

## Static routes

Static routes uses directory routing with zero conventions and **nested routes**.

| model     | route   | resolution          | context     |
| --------- | ------- | ------------------- | ----------- |
| indexing  | /routes | /routes/index.tsx   | /routes     |
| prefixing | /admin  | /routes/admin.tsx   | /routes     |
| nesting   | ./top   | /routes/sub/top.tsx | /routes/sub |


## Dynamic routes

Dynamic route decorator has priority over directory routing. 

```tsx
@route('/profile/:id')
export default const User = (p, feeds) =>
   <h1>User id: { feeds.param.id }</h1>
```

## Props routing

<a onclick='goto("review/structure.html#props-routing")'>Route directives</a> with conditional `[route]` and clickable router `[link]`. Outlet and mappings is replaced in a more transparent way by route props.

<aside cols='2'>

```tsx
const Menu = props => <>
   <div link='/main'>Main</div>    
   <div link='/hello'>Hello</div>     
</>
```

```tsx
const Main = props => <>
   <Hello route='/hello'/>         
   <p route='/main'>Main...</p>  
</>
```

</aside>


## Lazy loading

<a onclick='goto("review/structure.html#lazy-loading")'>Lazy routing</a> using `asLazyComponent` promise extension. 

<aside cols='2'>

```tsx
// a non-default lazy component
// named Sample (code splitting)
const Sample = import('./main')
   .asLazyComponent('Sample')
```

```tsx
const Menu = props => <>
   <a link='/sample'>Sample</a>
   <Sample route='/sample' />
</>
```

</aside>

## Fallback routing

Fallback routing retries not found routes, going up until the root (/), avoiding not found error (as a fault tolerance pattern for routing for certain scenarios).

```ts
@route('/path/to/:id', true) // true = fallback routing
```


## Authorization roles

Function decorator for role authorization based on `feeds.logon.role` (experimental).

```tsx
@auth(['manager','admin'])
const Admin = props => <h1>Admin...</h1>
```

## imperative routing

Abstract router object for cross-platform routing (browser, desktop, etc).

<aside cols='2'>

```ts
router.go('/about')    // route
router.is('/tag/:id')  // check
router.on('/go', call) // event
```

```ts
router.undo(n=1)  // back
router.redo(n=1)  // next
router.todo(n|-n) // both
```

</aside>

```ts
router.current // route | param | state
router.address // hast | host | home (base dir)
router.history // list of routes
```

Is possible to pass state between routes.

<aside cols='2'>

```ts
// state into /aid route
router.go('/aid', { ok:true }) 
```

```ts
// get the route state
router.current.state 
```

</aside>