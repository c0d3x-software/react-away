<style> @import url(example.css);</style>

# Example
> A client-side Todo List component example

##### /index.ts

```ts
import { launch } from 'react-away/server'
const store = { list:[], task:'', done:false }
await launch({ store }).server("#root") 
```
 
##### /routes/index.ts

```tsx
import './index.css'                        

export const TodoList = (props, ({ store })) => <div>
   <h1>Todo List</h1>
   <input data={store} bind='task'/>
   <button onChange={add(store)}>Add</button>      
   { store.list?.map(todoItem) }
</div> 
 
const todoItem = item = <li> 
   <label class={item.done && 'done'}>{ item.name }</label> | 
   <input type='checkbox' checked={item.done} />
</li>

const add = store = e => store.list
   .push({ task:props.task, done:false })
```
 
##### /routes/index.css

```css
.done { text-decoration: line-through }      
```