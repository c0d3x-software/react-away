<style>@import url(styling.css);</style> 

# Styling

> modular CSS • component-scoped CSS • style props • function decorator • SoC styling • vanilla-like CSS

## Classless CSS

React Way comes with minimal.css library, a classless CSS based in pico.css and semantic web. Enabling ready-to-use styled HTML with no CSS inside JSX.

## CSS className

React Away support the attribute class as alias for CSS className.

```tsx
export const Hello = () => <h1 class='hello'>Hello World!</h1>
```

## Modular CSS

React Away fixes the global leaking in CSS imports\*, enabling modular CSS.

<aside cols='2'><section>

```tsx
import './hello.css'
export const Hello = () => 
   <h1>Hello World!</h1>
```

</section><section>

```css
/* modular css sample */
/* file: ./hello.css */
h1 { color: black; }
```

</section></aside>

<div warning>
* <strong>WARNING</strong>: modular CSS does not support pseudo-selectors
</div>

## Style decorator

Style decorator enables a component-scoped CSS styling.

```tsx
@style('../styles/hello.css')
export default const Hello = () => <h1>Hello World!</h1>
```

## ClassName tag

In React Away, all component receives the component name as a CSS className, allowing component-scoped in style-side with classless CSS.

<aside cols='5:4' style='margin-top: 10px;'>

```tsx
import './hello.css'
export const Hello = () => <h1>Hi!</h1>
```

```css
* { background: green;  }
h1.Hello { color: red;  }
```

</aside>

## Routed style

React Away reserves a CSS class .routed for toggled state in component using `[link]` props router, enabling fast and easy toggle state for element.

<aside cols='2'>

```html
<button link='/'>Main</button>
```

```css
a.routed { filter:invert(1) }
```

</aside>

## CSS components

React Away enables vanilla CSS components with HTML+ including `page-container` lib.

<aside cols='2'>

```css
grid(cols, gap) {
   gap: ${gap};
   display: grid;
   grid-template-columns: ${cols};
}
```

```html
<template css='./styles.css'>
   <grid cols='1fr 1fr' gap='10px'>
      <p>column 1<p><p>column 2<p>
   </grid>
</template>
```

</aside>