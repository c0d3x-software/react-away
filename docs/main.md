<style>@import url(main.css);</style> 

# React Away

<p style='zoom: 1.3'>Minimalist full-featured React meta-framework.</p>

<aside why cols=2 style='margin-top:-5px'>

|      |                                                                                    |
| ---- | ---------------------------------------------------------------------------------- |
| easy | low code, standard-driven, minimal config, intuitive api, dx-focus                 |
| fast | pre-rendered component, pre-fetching route, partial hydration, streaming SSR, bun tookit             |
| lean | static zero bundle, pre-render, pre-fetch, low dependencies, lazy loading, code splitting                              |
| edge | SSR, SSG, ISR, SEO, OOP, RSC, PWA, IOC, API, SWR                                   |
| bold | reactive objects, function decorators, props handler, container page, async states |
| flex | container x component page, inlet x pitçet routing, style x script CSS                    |
| nice | dry, kiss, yagni, low code, minimalist design, dx-focused                          |

<section code>

```tsx
const Main = import('./main')
   .asLazyComponent('Sample')

@client(true)
const Hello = props = <p>
   <h1>Hello { props.name }</h1>
   <input data={props} data='name' />   
</p>

@route('/routes/user/:id')
const User = (_, feeds) => 
   <h3>{ feeds.param.id }</h3>
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

</section>
</aside>
<br>

---

Leave your design review and first impressions <a onclick='window.parent.goto("research/review.html")' >here</a>!


