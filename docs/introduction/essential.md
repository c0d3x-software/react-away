<style>@import url(essential.css);</style> 

# Essentials

React Away is built with ultra-fast **bun** toolkit, supporting server rendering, static zero bundle, prefetch routing, partial hydration, streaming SSR and lazy loading.

<section style='margin:0 auto; display:flex; justify-self: center;'>

|                     |                                             |
| ------------------: | ------------------------------------------- |
|         modular CSS | fixed import CSS for standard SoC styling   |
|    reactive objects | classess and hookless stateful handling     |
|   properly handlers | injectable props transformation algorithm   |
|   dual data binding | two way data binding props handlers         |
| function decorators | standard metadata over private conventions  |
|   enhanced fetching | fetch API with with agnostic SWR extensions |
|      reactive forms | uncontrolled component as data binding      |

<!-- |                     |                                                              |
| ------------------: | ------------------------------------------------------------ |
|         modular CSS | modular CSS imports for standard SoC                         |
|    reactive objects | classess and hookless stateful handling design               |
|   properly handlers | injectable custom props transformation algorithm             |
|   dual data binding | two way data binding design using props handlers             |
| function decorators | decorator plugin to enable support decorators with functions |
|  object RESTful map | RESTful API mapping that abstracts fetching details          |
|     HTML+ container | lightweight HTML extension for micro-component tree          |
|      reactive forms | dual data binding for uncontrolled components                | -->

</section>


## Modular CSS

Fixed modular CSS imports and component-scoped style decorator.

```tsx
import 'modular-css-for-components-in-module.tss'
@style('./hello.css') const Hello = () => <h1>Hi!</h1>
```

## Hybrid renders

Full rendering with SSR, SSG and ISR with 'use' directives and function decorators.

```tsx
@client(true) const CSR = () => <>...</>
@server('static') const SSG = () => <>...</>
@server('dynamic') const SSR = () => <>...</>
@server('periodic', "36h")  const ISR = () => <>...</>
```

## Clean routing

Server with **/apis**, **/assets** and **/routes** with zero conventions.

<aside cols='3:5'>

|              |                                                  |
| ------------ | ------------------------------------------------ |
| **/**        | **/routes/index.tsx**  <br/> standard convention |
| **/about**   | **/routes/about.md** <br/> markdown support      |
| **/profile** | **/routes/profile.tsx** <br/> raw HTML support   |

```tsx
const Main = import('./main')
   .asLazyComponent('Sample')

@route('/dynamic/route/example/:id')
const User = (props, feeds) => feeds.param.i

export default const Menu = props => <>
   <div link='/main'>Main</div>
   <main route='/main'>...</main>
</>
```

</aside>

## Reactive objects

<aside cols='3:5'>

Reactive objects is a hookless stateful approach that encapsulates all state boilerplate codewith dual data binding props for clean minimalist components

```tsx
@client(true)
const Hello = props => <>
   <h1> Hello { props.name }!</h1>
   <input data={props} bind='name' />  
</>
```

</aside>

## Property handlers

Built-in framework props that encapsulates behavior by props transformation.

| **[data]** |  **[bind]**  |     **[link]**     |    **[route]**    |    **[grid]**     |
| :--------: | :----------: | :----------------: | :---------------: | :---------------: |
| data bound | data binding | declarative router | conditional route | grid layout props |

```tsx
// custom property handlers with DI.
const shown = p => ({ ...p, hidden: !props.shown })
export const Ok = prop => <p shown={true}>Show me!</p>
await launch("/routes").inject(shown).server("#root")
```

## Dependency injection

Dependency injection to handle props, requests and exceptions.

<aside cols='5:3'>

```tsx
import { launch } from '@c0d3x/reactful'

const shown = props => props...
const token = request => new Response(ok)
const error = exception => <p>My  error!</p>
const store = { hello: 'world' }
```

```tsx
// injecting dependencies 
await launch({ store })
     .inject(shown)  
     .inject(token)  
     .inject(error)  
     .server()
```

</aside>

## Function decorators

Function decorator as currying suggar syntax and function metadata.

```ts
const example = (args) => (meta, call) => call    
@example('testing') const someFunction = () => { }
````