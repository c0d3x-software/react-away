const features = [
   'modular CSS',
   'reactive objects',
   'property handlers',
   'dual data binding',
   'function decorators',
   'object RESTful map',
   'HTML+ container']


const options = ['better', 'same', 'worse']

setTimeout(() => startup(), 300)

function startup() {
   const identity = document.querySelector('[identity]')
   const nameInput = identity.querySelector('#name')
   const mailInput = identity.querySelector('#mail')

   const params = new URLSearchParams(window.location.search);
   const name = params.get('fname')
   const mail = params.get('email')

   nameInput.value = name || ''
   mailInput.value = mail || ''

   listingQuestions()

   window.parent.document.querySelector('footer').style.visibility = 'hidden'

   document.querySelector('form')
      .querySelectorAll('input, select, textarea')
      .forEach(el => 
         el.addEventListener('input', checkFields) ||
         el.addEventListener('change', checkFields)
      );
}

function listingQuestions() {
   const featuresDiv = document.querySelector('[features]')
   
   features.forEach(addFeatureQuestion)

   function addFeatureQuestion(feature) {
      const name = feature.replace(' ', '-')
      const question = `<h2>What about <b>${feature}</b>?</h2>`
      const options = createOptions(name)

      const div = document.createElement('div')
      div.innerHTML = question + options

      featuresDiv.append(div)
   }

   document.querySelectorAll('[listing]').forEach(function (select) {
      select.name = select.id
      features.forEach(addFeatureOption)
      function addFeatureOption(feature) {
         const option = `<option name='${select.id}' value='${feature}'>${feature}</option>`
         select.innerHTML += option
      }

      select.innerHTML = `<option name='${select.id}' value='' disabled selected></option>` + select.innerHTML
   })
   
   document.querySelector('form').onsubmit = onSubmit
}

function checkFields() {
   const form = document.querySelector('form')

   const atLeastOneRadio = elm =>
      [...form.querySelectorAll(`input[name="${elm.name}"]`)]
         .some(r => r.checked);
   
   const atLeatOnChecked = elm =>
      [...form.querySelectorAll(`input[name="${elm.name}"]`)]
         .some(r => r.checked);
   
   const enabled = [...form.elements].every(isEnable)

   function isEnable(elm) {
      if (elm.disabled || elm.type === 'submit' || elm.type === 'button') console.log('button', true)
      if (elm.type === 'checkbox') console.log('checkbox', atLeatOnChecked(elm))
      if (elm.type === 'radio') console.log('radio', atLeastOneRadio(elm))
      else console.log('...', elm.value.trim() !== '')

      if (elm.disabled || elm.type === 'submit' || elm.type === 'button') return true
      if (elm.type === 'checkbox') return atLeatOnChecked(elm)
      if (elm.type === 'radio') return atLeastOneRadio(elm)
      else return elm.value.trim() !== ''
   }

   console.log({ enabled }) 
   // document.querySelector('button').disabled = !enabled
}

function createOptions(name) {
   const template = (name, data) =>
      `<input name='${name}' value='${data}' type='radio' required>${data}</input>`

   return options
      .map(x => template(name, x))
      .join('\n')
}


function onSubmit(e) {
   e.preventDefault()

   const SERVICE_ID = 'service_5x1js7s'
   const PUBLICK_KEY = 'pC_QRVGa3CtXY7xpv'
   const TEMPLATE_ID = 'template_qvb7fpm'

   const args = new URLSearchParams(window.location.search);
   const name = args.get('fname')
   const mail = args.get('email')

   const form = document.querySelector('form')
   const data = new FormData(form);
   const full = Object.fromEntries(data.entries());

   full.dky = data.getAll('dky').join(',')
   full.way = data.getAll('way').join(',')

   const message = JSON.stringify(full, null, 2);

   const fname = document.querySelector('#name')
   const email = document.querySelector('#mail')

   fname.value ||= name || ''
   email.value ||= mail || ''

   if (!fname.value?.trim()) return alert('name is required')
   if (!email.value?.trim()) return alert('email is required')

   onFinnaly(true)

   const params = {
      from_email: mail,
      from_name: name,
      message
   }

   emailjs.init(PUBLICK_KEY);
   emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
      .then(onSuccess, onFailure)

   function onSuccess() {
      alert('Thanks for your participation!')
      textarea.value = ''
      email.value = ''
      onFinnaly()
   }

   function onFailure(ex) {
      alert("The email was not sent!")
      console.error(ex)
      onFinnaly()
   }

   function onFinnaly(disable = false) {
      document.querySelector('form')
         .querySelectorAll('input,select,textarea')
         .forEach(x => x.disabled = disable)
   }
}