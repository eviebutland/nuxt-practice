import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ce6fac6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _62de93f2 = () => interopDefault(import('../pages/jokes/index.vue' /* webpackChunkName: "pages/jokes/index" */))
const _4e3f6006 = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _fafd151c = () => interopDefault(import('../pages/jokes/_id/index.vue' /* webpackChunkName: "pages/jokes/_id/index" */))
const _01445d62 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3ce6fac6,
    name: "about"
  }, {
    path: "/jokes",
    component: _62de93f2,
    name: "jokes"
  }, {
    path: "/todos",
    component: _4e3f6006,
    name: "todos"
  }, {
    path: "/jokes/:id",
    component: _fafd151c,
    name: "jokes-id"
  }, {
    path: "/",
    component: _01445d62,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
