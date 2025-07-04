<style>
   
   @import url(../@assets/css/index.css);
   body { background: #333 !important; }
   code { font-family: agave !important; }
   
</style>

# Playground


```ts
export const metadata = {
  title: 'Some title example',
  description: 'My description'
};
```

```ts
import Script from 'next/script';

export default function HomePage() {
  const schemaData = JSON.stringify({
    "@type": "WebPage",
    "name": "My Minimal Page",
    "@context": "https://schema.org", 
    "description": "A simple page."
  });

  const spreadPropsJSON_LD = {
      dangerouslySetInnerHTML = {
         __html: schemaData
      }
  }

  return <p>
      <Script id="page-schema" 
         type="application/ld+json"
         {...spreadPropsJSON_LD} />
   </p>
}
```

```ts
@seo('title', 'description') 
export function Hi(props) {
   return <>Hello World!</>
}

const metatags: MetaTag = { 
   chartset: 'UTF-8', 
   keywords: 'a,b,etc' 
   og: { etc... }
}

@seo(metatags) 
export function Hello(props) {
   return <>Hello World!</>
}
```

```ts
const siteUrl = isProduction 
   ? 'https://www.site.com' 
   : 'http://localhost:3000'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: isProduction
      ? [{ userAgent: '*', allow: '/' }]
      : [{ userAgent: '*', disallow: '/' }],
    additionalSitemaps: isProd
      ? ['https://www.site.com/sitemap.xml']
      : [],
  },
};
```

```ts
const Component = props => <>
   <title>My title</title>
   <meta charset="UTF-16" />
   <div>Whatever...</div>
</>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>Document</title>
   <meta charset="UTF-8">
</head>
<body>
   <div id='root'></div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>My title</title>
   <meta charset="UTF-16" />
</head>
<body>
   <div id='root'></div>
</body>
</html>
```


```css
/* styles/hello.module.css */ 

.hello {
  color: whitesmoke;
  background: dimgrey;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
}
```

---


```tsx
/* components/hello.tsx */

import css from './hi.module.css'

export const Hello = () => <>
   <h1 className={css.hi}>
      Hello World!
   </h1>
</>
```

---


```tsx
const Title = styled.h1`
  color: whitesmoke;
  background: dimgrey;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;

export const Hello = () => <>
   <Title>Hello World!</Title>
</>
```

---

```tsx
export const Hello = () => (
  <h1 className="font-bold
      text-[whitesmoke] mt-4
      bg-[dimgrey] rounded-lg 
      shadow-md px-4 py-2">
    Hello World!
  </h1>
);

```


```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

```js
module.exports = {
  content: [ "**/*.{js,jsx}" ],
  theme: { extend: {}, },
  plugins: [],
}
```


<br/><br/><br/>