<style>@import url(main.css);</style> 

# React Away

Minimalist full-featured React meta-framework.

<center style='margin: 0 50px'>

<div dky why>

|    D R Y     |      K I S S      |    Y A G N I    |
| :----------: | :---------------: | :-------------: |
| web standard | minimalist coding | incremental components |

</div>

<div why style='margin-bottom:15px'>

| e x t e n s i v e | i n n o v a t i v e |
|-:|:-|
| SEO, CSR, SSR, ISR, SSG, SWR, streaming, partial hydration, pre-fetched route, nested route, server components, resumability, zero bundle.js | modular css imports, hookless states, props handlers, function decorators, fallback routing, dual binding, reactive forms, RESTful actions, fetch+ SWR |

</div>


</center>

<aside cols=2>

```tsx
@route('/routes/user/:id')
const User = (_, feeds) => 
   <h3>{ feeds.param.id }</h3>

@client(true)
const Hello = props = <p>
   <h1>Hello { props.name }</h1>
   <input data={props} data='name' />   
</p>

const Main = import('./main')
   .asLazyComponent('Sample')

```

```tsx
export const Menu = props => <p>
   <ul class='menu'>
      <li link='/dom'>Dom</li>
      <li link='/main'>Main</li>
      <li link='/user/1'>User</li>
   </ul> 
   <div class='outlet'>
      <div route='dom'>OK!</div>
      <Main route='/main' />
      <User route='/user/:id' />
   </div>
</p>
```

</aside>

<br>

---

**WARNING!** The project is yet in alpha test, due its scope and ambitious, we looking for financial support or corporate sponsonship to finishing and turn it in a full open source project.


