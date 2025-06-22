"use server"

import { IOError } from "kernel";
import { log, Path, File } from "../helper";

/** build the application using bun 
 * @param {boolean} indexOnly only seeks to build the index page */
export async function bundler(indexOnly: boolean): Promise<true> {
   log(`\nBUILDING...`, "FG_YELLOW")

   const indexHTML = await loadIndexHTML()
   
   await cleanupBuildFolder()
   await validateConflictRoutes()   
   await renderRouteFiles(indexHTML)



   const list = await folder(indexOnly)

   for (const [path, file] of routePathList)
      await build(indexHTML, file, path)

   await generateSiteMap()
   await createBundle(indexHTML)

   return true
}

/** load the index.html starter of application */
async function loadIndexHTML() {
   const file = new File(`${Path.cwd}/index.html`)

   if (await file.exists() == false)
      throw new IOError('index.html not found in root folder')

   else return await file.load() as HTMLString
}

async function renderRouteFiles(wrap: HTMLString) {
   const routePath = global.own.directories.routes
   const routePathList = new Path(routePath).list
   const renders = global.own.getHandlers<'render'>()
   

   for (const path of routePathList) {
      if (path.endsWith('.md')) generateMarkdown()
      if (path.endsWith('.html')) generateHTMLContainer()
      if (path.endsWith('.jsx', '.tsx')) {
         const jsx = renders.reduce((last, next) => next(), {})
      }
   }
}

/** iterates each file to specific build */
async function build(html, data, path) {
   try {
      
      if (typeof data == "function")
         await createJSX(data, html, path)

      else if (path.endsWith(".md"))
         await createMD(path, data, html)

      else await createHTML(path, data, html)

   } catch (error) {
      throw <BuildError>{
         args: { html, data, path},
         function: loadIndexHTML.name,
         module: 'bundler.ts',
         exception: error,
         message: '',
      } 
   }
}

/** cleans the current builds folder content */
export async function cleanupBuildFolder() {
   try {

      for (const entry of await Path.from("builds").browser()) {
         if (!entry.name || !entry.file) continue
         else fs.unlinkSync(entry.path)
      }

   } catch (error) {
      throw <BuildError>{
         args: {},
         function: cleanupBuildFolder.name,
         module: 'bundler.ts',
         exception: error,
         message: '',
      }
   }
}

/** generating javascript bundle for partial hydration */
async function createBundle(html: HTMLString) {    
   try {

      logger.insert(`\nBUNDLING...`, "FG_YELLOW")
   
      global.own.is.build = true 
   
      await createBundleScript()   
      await buildingBundler()
   
      global.own.is.build = false
      
      await bundleValidation()
      await periodicRebuilds(html)

   } catch (error) {
      throw <BuildError>{
         args: { html },
         function: createBundle.name,
         module: 'bundler.ts',
         exception: error,
         message: '',
      }
   }
}

async function buildingBundler() {
   try {
      
      const built = await Bun.build({
         entrypoints: [`${Path.builds}/bundle.ts`],
         external: ['jsdom', 'bun', 'os', 'fs', 'marked', 'pretty-data', 'css'],
         minify: global.env.MINIFY,
         target: "browser",
         plugins,
      })
   
      if (!built.success) throw errors(built.logs)
      
      const mini = global.env.ZIPPED
      const text = await built.outputs[0].text()
      const file = mini ? await Zlib.deflateSync(text) : text // TODO: ?
      const path = `${Path.builds}/bundle.${mini ? 'zip' : 'js'}`
   
      await Bun.write(path, file)

   } catch (error) {
      throw <BuildError>{
         args: {},
         function: buildingBundler.name,
         module: 'bundler.ts',
         exception: error,
         message: '',
      }
   }
}

/** ISR: Incremental Static Regeneration algorithm */
async function periodicRebuilds(html: HTMLString) {   
   try {

      intervals.forEach(t => clearInterval(t))
   
      const periodics = global.own.functions
         .flatMap(x => x.decorators)
         .filter(x => x.name == 'server')
         .map(x => x as ServerDecoratorInfo<RFC>)
         .filter(x => x.mode == "periodic")
   
      const build = async (render: ServerDecoratorInfo<RFC>) =>
         await createJSX(render.target, html, '')
   
      for (const periodic of periodics) {
         const time = periodic.time
         const call = () => build(periodic)
         const bind = setInterval(call, time)
         intervals.push(bind)
      }

   } catch (error) {
      throw <BuildError>{
         args: {},
         function: periodicRebuilds.name,
         module: 'bundler.ts',
         exception: error,
         message: '',
      }
   }
}

/** check if current bundle is ok */
async function bundleValidation() {   
   try {

      const mini = global.env.ZIPPED  ? 'zip' : 'js'
      const fail = `\n\nServer-side content inside bundle.${mini}`
      const file = new File(`${Path.cwd}/builds/bundle.${mini}`)
      const size = file.size.toString().split(".")[0].toNumber().format(true)
      const text = await file.load().then(x => x || '')
      const line = text.split('\n').length.format(true)
      
      logger.itemfy(`bundle.${mini}`)
      logger.append(`${size} kb`, "FG_GRAY")
      logger.append(` | `)
      logger.append(`${line} lines`, "FG_GRAY")   
      logger.append('\n')
   
      if (text.includes("Bun.plugin")) throws(fail, import.meta)
      if (text.match(/['"]use server[;]*['"]/)) console.error(fail);

   } catch (error) {
      throw <BuildError>{
         args: {},
         function: bundleValidation.name,
         module: 'bundler.ts',
         exception: error,
         message: '',
      }
   }
}

/** error building logs */
function errors(logs: (BuildMessage | ResolveMessage)[]) {
   try {

      const list = ['\n\n !!!!!!! ==== react-away build errors ==== !!!!!!!']
   
      for (const log of logs) {
         const line = log.position?.line
         const cols = log.position?.column
         const file = log.position?.file
         const text = log.message
   
         list.push(`- ${text} in ${file} (${line},${cols})`)
      }
   
      return list.join('\n')

   } catch (error) {
      throw <BuildError>{
         args: {},
         function: errors.name,
         module: 'bundler.ts',
         exception: error,
         message: '',
      }
   }   
}