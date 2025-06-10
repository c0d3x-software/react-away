import { GLOBAL_KEY } from '@c0d3x/reacful'
globalThis[GLOBAL_KEY].clients ||= {}


globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/counter'] = { off:false, tag:'CountButton' }
import('/mnt/b/Repositorios/react-away/prototype/routes/counter').then(x => x.CountButton).then(x => globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/counter'] = x);

globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/forms/form'] = { off:false, tag:'form' }
import('/mnt/b/Repositorios/react-away/prototype/routes/forms/form').then(x => x.default).then(x => globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/forms/form'] = x);

globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/hello'] = { off:false, tag:'Hello' }
import('/mnt/b/Repositorios/react-away/prototype/routes/hello').then(x => x.default).then(x => globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/hello'] = x);

globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/login'] = { off:false, tag:'login' }
import('/mnt/b/Repositorios/react-away/prototype/routes/login').then(x => x.default).then(x => globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/login'] = x);

globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/profile/detail'] = { off:false, tag:'Detail' }
import('/mnt/b/Repositorios/react-away/prototype/routes/profile/detail').then(x => x.Detail).then(x => globalThis[GLOBAL_KEY].clients['/mnt/b/Repositorios/react-away/prototype/routes/profile/detail'] = x);

await import('/mnt/b/Repositorios/react-away/node_modules/@c0d3x/reacful/renders/index').then(x => x.default());