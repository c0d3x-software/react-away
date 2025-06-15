/** it loads the env file and sets to env object */
export async function load(that: any, loader: () => Promise<record>) {
   const record = await loader();

   Object.keys(record) // boolean
      .filter(k => record[k])
      .filter(k => record[k].match(/true|false/i))
      .forEach(k => record[k] = record[k].toLowerCase().trim() == 'true')

   Object.keys(record) // number
      .filter(k => !isNaN(parseFloat(record[k])))
      .forEach(k => record[k] = parseFloat(record[k]))

   Object.merge(that, record)

   validation(that)
}

/** validate if env file is ok */
export function validation(instance) {
   const requireds = {
      PORT: 3000,
      PREFIX_URL: '/'
   }

   for (const k of Object.keys(requireds)) {
      const done = Object.hasOwn(instance, k)
      const none = !(done && instance[k])

      if (!done) throw fail(k, 'field')
      if (none) instance[k] = requireds[k]
   }

   return true
}

/** env file error message */
const fail = (key, pre = '') => `Not found ${pre}'${key.trim()}' of .env file`