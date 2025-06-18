<style>@import url(container.css);</style> 

# Container
> JSX in HTML • code behind • reactive self • interpolation syntax • typed attributes • two way data binding

## Conception

Page container is a low HTML+ extension design for minimal componentization with JSX-in-HTML, data interpolation, typed attributes, metatags replacement and data binding. 

<img src='../@assets/img/container-page.png'>

## HTML+ template

HTML+ page container supports JSX component exported by `template[src]` script. 

<aside cols='4:5' >

```html
<template src='index.ts'>
   <Hello name='world'/>
</template>
```

```ts
export { Hello } from '../components'
// code-behind script in template[src] where
// exported members in visible in self object
```

</aside>

## Typed attributes

Typed attributes in component call with vanilla javascript syntax.
 
```html 
<Sample number=1 string='' boolean=true object={} array=[] reference=self.ref />
```

## Data binding

Simple two-way data binding for interpolated data with micro Virtual DOM with self object changes.
  
```html
<template src='index.ts'>
   <label>My full name is ${ self.fullname }</label>   
   <input oninput='self.fullname = event.target.value' />
</template>
```

## Data interpolation

HTML+ supports data interpolation with EcmaScript string literal syntax.

<aside cols='4:5' >

```html
<template src='index.ts'>
   <h1>${ self.title }</h1> 
   <h2>${ self.subtitle }</h2>
</template>
```

```ts
export const title = 'HTML+' 
export const subtitle = 'Minimalist SPA' 
export const style = { color: 'whitesmoke' }
const content = '...' // non-exported = private
```

</aside>

## MetaTag transfers

All metatags in the template are relocated to the HTML head for simple SEO.

<aside cols='4:5'>

```html
<template>
   <title>Title</title>
   <h1>Subtitle</h1>
</template>
```

```html
<html lang='en-US'>
   <head><title>Title</title></head>
   <body><h1>Subtitle</h1></body>
</html>
```

</aside>

## HTML merging

HTML inclusive with server-side embed[src] for internal or external HTML URL.

<aside cols='2'>

```html
<template src='index.ts'>
   <embed src='./layouts/header.html' />
</template>
```

```html 
<template src='index.ts'>
   <header>Sample Header<header>
</template>
```