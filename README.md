# @react-away

> **WARNING! This project is not fully open source.**

<p center>React Away solves stateful complexity in React with by stateful objects with function decorators and props handler; with support to server-side rendering with easy SEO and comprehensive routing.</p>

## Overview

Stateful objects evokes the component render when object fields is changed, being managed by a performatic batching algorithm to prevents multiple rendering.

```ts
import * from 'react-away'

const store = useStore({ hello: world })
store.hello = 'john' // setState behavior
```

Reactive objects embbeds state handling hooks has compreehensive states (local, global, partial), performatic algorithm (debounce algorithm) with 

Data binding is improved by `[data]` and `[bind]` directives.

```ts
@client(true, store)
const Hello = props => <>
   <h1>Hello { store.hello }</h1>
   <input data={store} bind='hello' />
</>
```

##  Documentation
More details in https://c0d3x-software.github.io/react-away