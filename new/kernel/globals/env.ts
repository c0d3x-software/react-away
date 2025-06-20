/// <reference path="env.d.ts" />

import { load } from "./env.load"

export const env: Env = {
   PORT: 0,
   DELAY: 33,
   ZIPPED: false,
   MINIFIED: true,
   PREFIX_URL: '/',
   HOSTNAME: 'http://locahost',
   load: () => load(this, () => Promise.resolve({})),
   ROBOT: [],
   SITEMAPS: [],
   get SIDE(): "client" | "server" {
      return !!globalThis.document ? "client" : "server"
   },
}