importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08c9bc45b008dcc092fa.js",
    "revision": "d8b3d38b5626cf77dde3403661bf52f2"
  },
  {
    "url": "/_nuxt/301d312cef78cb0d72e1.js",
    "revision": "725ab143d7da5d6067607a183105472b"
  },
  {
    "url": "/_nuxt/37b62f9d93564981d0c3.js",
    "revision": "85a0d7de068b6a5e8f534eccb703edc3"
  },
  {
    "url": "/_nuxt/628ff5cfa4b60ec2b44b.js",
    "revision": "febb715b37d9db00f330e30bfe063025"
  },
  {
    "url": "/_nuxt/b8d753ac3bfd3fcffab2.js",
    "revision": "c2907e76ee0435b0877e4aab578ff6c4"
  },
  {
    "url": "/_nuxt/d246ccad2c315bda83c4.js",
    "revision": "c605767125aec2459cdbcf85bf8fd267"
  }
], {
  "cacheId": "scan",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
