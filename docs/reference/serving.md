<style>@import url(serving.css);</style> 

# Serving

> hybrid render • server components • partial hydration • web apis • markdown • error handling • html+


## Server launcher

Framweork launcher serves api, files and routes that supports markdown, html and jsx.

<aside cols='3:5'>

```ts
import { launch } 
from 'react-away/server'
await launch({ settings })
     .server('#root')
```


```ts
interface Settings {
   store?: object  // injected global state
   paths?: Folders // custom system folders
}
```

</aside>

## RESTful server

Fullstack support with RESTFul api in `/apis` folder, it maps each function by its HTTP verb name, exposing the directory structure with `/api` prefix URL.

```ts
// /apis/sample.ts  ->  http://localhost:3000/api/sample
export const get = request => new Response('Hello World!')
```

## Launch injections

The React Away IoC supports store injection for SSOT global states and multiple handlers.

<aside cols='3:5'>
<section>

```ts
import store from './store'
import { pipe, fail, prop } 
from './handlers'

await launch({ store }) 
     .inject(prop)
     .inject(pipe)
     .inject(fail)
     .server()
```

</section>
<section handlers><div>

* **error handler**: catch error and returns JSX

```ts
function(e: Error): ReactElement
```

</div><div>

* **request handler**: catch request for middleware

```ts
function(r:Request): Response|void
```

</div><div>

* **request handler**: catch request for middleware

```ts
function(props: Props, param: Feeds): Props
```

</div>
</section>
</aside>

## Decorator renders

Rendering mode with 'use' directives and component-scoped metadata decorators.

```tsx
@client(true) export default const Client = props => <>...</>
@server('static') export default const Static = props => <>...</>
@server('dynamic') export default cont Dynamic = props => <>...</>
@server('periodic', "36h")  export default const Periodic = props => <>...</>
```

It server component and suspense API for server-side rendering.

```tsx
async function Async(props) {
   const text = await fetch(url).then(x => x.text())
   return <section>content response: { text }</section>
}

const SyspenseExample = async props => <>
   <Suspense fallback={<h1>loading...</h1>} />
</>
```

## SEO decorator

SEO with function decorator with string or metatatag object. The **sitemap** and **robot.txt** auto-generation is soft coded with **.env file** that was enhanced with complexy type support.

<aside cols='5:3'> 
 

```tsx
import { seo } from 'react-away'
 
@seo('title', 'description')  
function Home(props) { return <>Home</> }

const metas = { chartset:'UTF-8', etc... }

@seo('title', metas) 
const About = props => <>etc...</> 
```

```js
PORT=3333
ZIPPED=FALSE
MINIFIED=FALSE
PREFIX_URL=/  
SITEMAP=['www.site.com']
ROBOT=[{ 
   agent:'*',  
   allow: ['/'] 
}]
``` 

</aside>

It also supports dynamic SEO for dynamic routing with high-order functions.

```ts
@seo('title', params => ({ description: params.details }))
const Hello => (props, feeds) => <h1>{ feeds.params.details }/<h1>
```


## HTML+ containers

React Away uses html-container lib for micro-component architeture for JSX-in-HTML using .html+ extension and self object as template script context.

<aside cols='5:4'>

```html
<template src='code-behind.ts'>
   <h1>${ self.title }</h1>

   <Sample caption='ok' person={ name:'john' } 
      enable=true list=[1,2,3,4,5] value=123 />

   <button onclick='self.onClick()'>Ok</button> 

   <!-- template metatag overrides  -->
   <meta name='description' content='...'>
   
   <!-- html includes with embed -->
   <embed src='./layouts/footer.html'>    
</template>
```

```ts
// code-behind stript 
// loaded by template[src]

// component for JSX-in-HTML
export Sample from './components'

// variable for interpolation
export const title = 'HTML+'

// function with client-side call
export function onClick() {
   alert(document.title)
}
```

</aside>
