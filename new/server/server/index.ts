import { launch } from "./launch";

const awaitProps = props => props

await launch({ store: { ok: true } })
   .inject<'property'>(awaitProps)
   .inject<'property'>(bindingProps)
   .inject<'render'>(renderJSX)
   .inject<'property'>(awaitProps)
   .server('#root', '/')

