/// <reference path="own.d.ts" />

const status = {
   debug: false,
   build: false,
   serve: false,
   fails: false
}

export const own: Own = {
   is: status,
   url: '/',
   root: '#root',
   tasks: null,
   caches: {},
   modules: [],
   settings: {},
   functions: [],
   hydrations: [],
   directories: {}
}