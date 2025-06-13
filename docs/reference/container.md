<style>@import url(container.css);</style> 

# Container
> JSX in HTML • code behind • reactive self • interpolation syntax • semantic attributes

## Conception

Container page is a low HTML+ extension design for YAGNI componentization with vanilla interpolation, JSX in HTML and semantic attributes. It enables a web standard approach to deal with pages, reserving components for its DRY proposal.

<img src='../@assets/img/container-page.png'>

## HTML+ template

HTML template is inner HTML with small extension to support JSX embedment. Script code behind is called by template, consuming its export members.

<aside cols='4:5' >

```html
<template src='index.ts'>
   <h1>${ self.title }</h1> 
   <Hello name='world '/>
</template>
```

```ts
// template code-behind index.ts
export { Hello } from '../components'
export const title: string = 'title'
const notVisibleInTemplate = 'private'
```

</aside>

## MetaTag transfers

All metatags inside a template is realocated into HTML head.

<aside cols='3:5'>

```html
<template>
   <title>Title</title>
   <h1>Subtitle</h1>
</template>
```

```html
<html>
   <head><title>Title</title></head>
   <body><h1>Subtitle</h1></body>
</html>
```

</aside>

## Vanilla interpolation

For interpoaltion, HTML+ uses just vanilla interpolation syntax.

```html
<template src='index.ts'>
   <h1>${ self.title }</h1> 
   <h2>${ self.subtitle }</h2>
</template>
```

## HTML merging

Simple HTML merging with HTML exports and interpolation.

<aside cols='2'>

```html
<template src='index.ts'>
   ${ header } <br/> ${ footer } 
</template>
```

```ts
export header from './header.html'
export footer from './footer.html'
```

</aside>

## Semantic attributes

Attributes receives literals values and refererences, not just string, as a vanilla javascript semantics to interpolation syntax

```html
<template src='index.ts'>
   <!-- vanilla interpolation syntax -->
   <Sample number=${1} string=${''} boolean=${true} 
      object=${{}} array=${[]} reference=${self.test} />

   <!-- semantic attribute alternative -->
   <Sample number=1 string='' boolean=true 
      object={} array=[] reference=self.test />
</template>
```

## Two-Way data binding

The self is a reactive object of all exported code-behind content. The template will render in every change, but only its value is read in template.

```html
<template src='index.ts'>
   <h1>${ self.title }</h1>

   <!-- this will trigger the container render -->
   <input onchange='self.title=event.target.value' />

   <!-- this will not trigger the container render -->
   <input onchange='self.subtitle=event.target.value' />
</template>
```