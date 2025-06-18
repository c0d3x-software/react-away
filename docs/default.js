const wait = (timeout, action) => setTimeout(action, timeout)

const groups = ['introduction', 'reference', 'architecture']
const menus = []
const names = {}

var menuHamburguer = {}

function startup() {
   const frame = document.querySelector("iframe")
   groups.forEach(g => createLinks(g))   
   resize(frame)
   createLogo(document)
   createMenuHamburguer()

   const args = new URLSearchParams(location.search)
   const name = args.get('name')
   const mail = args.get('mail')

   if (name && mail)
      goto(`research/review.html?name=${name}&mail=${mail}`)
}

function compare(old, NEW) {
   const x = parseInt((old || '0').replace('px', ''))
   const y = parseInt((NEW || '0').replace('px', ''))
   return x - y
}

function resize(iframe, remake) {
   const repeat = () => resize(iframe, true)   
   const target = iframe.contentWindow.document.body
   const height = (target?.scrollHeight + 15)+ 'px'
   const equals = compare(iframe?.style?.height, height) == 0

   if (!iframe || equals) return
   else iframe.style.height = height
   if (!remake) setTimeout(repeat, 777)
}
 
function createLinks(group) {
   function forEachLink(a) {
      const address = `${group}/${a.id}.html`
      a.onclick = () => goto(address, true)
      menus.push(address)
      names[address] = capitalizeFirst(a.innerText)
   }

   document
      .querySelectorAll(`#${group} a`)
      .forEach(forEachLink)

   clearHash()
}

function createMenuHamburguer() {
   const template = m => `<a onclick='goto("${m}")'>${names[m]}</a><br>`
   const div = document.createElement('div')   
   
   div.className = 'menu-show-hamburguer'   
   div.style.display = 'none'
   menus.forEach(m => div.innerHTML += template(m))

   document.body.append(div)
}


function onMenu(e) {
   const check = document.querySelector('#menu-toggle')
   const hmenu = document.querySelector('.menu-show-hamburguer')
   hmenu.style.display = check.checked ? 'none' : 'block'
}

async function goto(address, manual) {   
   loading(true)
   footer(address)
   
   const menu = address.split('/').at(-1).split('.')[0]
   const main = document.querySelector('iframe')

   if (document.querySelector('.menu-show-hamburguer')) {
      document.querySelector('#menu-toggle').checked = false
      document.querySelector('.menu-show-hamburguer').style.display = 'none'
   }

   select(menu)

   main.src = address
   main.style.height = 'auto'

   wait(333, () => resize(main))
   wait(555, () => loading(false))

   if (manual) return
   if (address.split('#').length < 2) return 

   const hash = '#' + address.split('#').at(-1).trim()     

   wait(999, () => gotoHash(main, hash))
}

function loading(ok) {
   const display = ok ? 'flex' : 'none'
   document.querySelectorAll('.loading')
      .forEach(x => x.style.display = display)
}

function select(label) {
   document.querySelectorAll('.active')
      .forEach(x => x.classList.remove('active'))
   
   if (label == 'index') return
   const child = document.querySelector(`#${label}`)
   if (!child?.classList) return
   child.classList.add('active')
} 

function gotoHash(iframe, hash) {
   const target = iframe.contentWindow.document.querySelector(hash);   
   if (target) target.scrollIntoView({ behavior: 'smooth' })
}

function clearHash() {
   const route = window.location.pathname
   const query = window.location.search
   const value = route + query
   const clear = () => history.replaceState(null, '', value)

   wait(999, clear)    
}

function footer(address) {
   if (!address) return location.reload()

   const index = menus.indexOf(address)
   const last = index == menus.length - 1
   const previousUrl = index > 0 && menus[index - 1]
   const nextUrl = !last && menus[index + 1]
   
   document.querySelector('footer').style.visibility = 'visible'

   const preivousB = `<b>< </b>`
   const nextB = `<b> ></b>`
   
   const previousLnk = document.getElementById('previous')
   const nextLnk = document.getElementById('next')
   
   previousLnk.innerHTML = preivousB + (names[previousUrl] || 'Home')
   nextLnk.innerHTML = (names[nextUrl] || 'Home') + nextB
   
   previousLnk.onclick = () => goto(previousUrl || '')
   nextLnk.onclick = () => goto(nextUrl || '')

   console.log({ previousUrl, previous: names[previousLnk]})
}

function capitalizeFirst(str) {
   if (typeof str !== 'string' || str.length === 0)  return ''
   return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

window.addEventListener("popstate", function (event) {
   console.log("popstate", window.history) 
});

window.addEventListener('hashchange', () => {
   console.log('hashchange', window.location.hash);
});

window.addEventListener('message', function(event) {
   if (event.data.command != 'update-path') return
   const path = JSON.parse(event.data.text)?.path?.pathname
   const name = path?.split('/').at(-1)?.split('.')[0]
   const node = this.document.querySelector('iframe')
   // console.log(name, { path, name })     
   select(name)
   resize(node)
   window.scrollTo({ top: 0, behavior: 'smooth' });
});

