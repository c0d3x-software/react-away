# 🗺️ React Away Project Roadmap

Welcome to the roadmap of **React Away**, a fullstack React meta-framework.

## ✓ | Milestones

- **framework architecture**: monorepo repository structure  
- **proof of concept**: feaseability of all features was tested
- **hybrid rendering**: support to SSR, SSG and ISR 
- **create CLI tool**: template generator with `create-react-away` 
- **dependency injection**: IoC container resolved in 2nd component argument 
- **function decorator**: adecorator for functions 
- **function extensions**: metadata to functions 
- **modular CSS**: fixed CSS modular import bug 
- **dual data biding**: two-way data binding design for React 
- **reactive forms**: dual binding for uncontrolled components submit 
- **directory routing**: static routing with zero conventions 
- **context globals**: env, ioc and own as new global contexts 
- **action binding**: form[action] as a serialized fetch request 
- **prefetched routing**: cached HTML routes in client-side
- **webapi folder**: RESTful API supported in /apis folder 
- **fallback routing**: retry not-found routing with upper route 
- **partial hydration**: JS hydration only in interactive content 
- **streaming SSR**: JSX is streamed with Suspense API support 
- **route validator**: It prevents ambiguos like /about.jsx and /about.md 
- **declarative routing**: Client-side prosp handler for routing as [route] and[link] 
- **Validation API** | ◕ | ProblemDetails interface
- **dommunication**: Documentation site, marp slides and youtube videos 

## ○◔◐◕  | Pendings 
- **zipped response** | ◕ | unit tests, client-side unzip
- **GitHub Sponsors page launched** | ◔
- **SEO sitemap + robot + .env (tests)**: | ◐
- **prefix_url context (tests)** | ◔
- **SEO HTML metatags transfer (tests)** | ◔
- **[auth]** + **@auth** | ◔ : [auth] authenticator + @auth authorizator
- **HTML+**: container page architecture | test
- Zero bundle.js for full static content
- html string import
- performance: benchmarks and docs
- preact support abstration
- new template CLI
- [type=file] binding
- template error default
- outlet props
- e2e test coverage 
- JSON-LD design
- kickistart | : proof of concept
- presentation | : remake   
- support to React native
- class + style binding support
- syncher lib for syncing features
- validation form[data] only after first render
- ambigous fragment children behavior: array x not-array
- attribute styles (declare + params + props handler)
- articles: reactive object, functional decorators, restful synchers
- breaking framework in micro-libs (reactive-obj, props-handlers, etc)
- extracting reactive objects to a lib
- tree shaking
- hot reload
 
## △ | Warnings

- CSS modular imports does not support pseudo-selector (yet)
- prototype project is outdated (update is pending)
- custom decorators does not support import
- inner component must preceed outer components
- no intelissense for function decorators
- form biding is coupled to dom

## @ | Want to contribute?

Check out [CONTRIBUTING.md](./CONTRIBUTING.md) or suggest a feature in [Discussions](https://github.com/your-repo/discussions) or [Issues](https://github.com/your-repo/issues).

---

_This roadmap is a living document and may change based on community feedback and priorities._
