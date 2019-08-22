importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/37b62f9d93564981d0c3.js",
    "revision": "85a0d7de068b6a5e8f534eccb703edc3"
  },
  {
    "url": "/_nuxt/628ff5cfa4b60ec2b44b.js",
    "revision": "febb715b37d9db00f330e30bfe063025"
  },
  {
    "url": "/_nuxt/696721d59640b9c11ec0.js",
    "revision": "44b8ffc56280941000da043e7c747b6e"
  },
  {
    "url": "/_nuxt/a8c7ef0ed1712a86e69d.js",
    "revision": "946276fee568be7b297c1e9e23bc3a6b"
  },
  {
    "url": "/_nuxt/cccae878881a962159e6.js",
    "revision": "bcb034fc09a3a2a793cc301b0c886422"
  },
  {
    "url": "/_nuxt/ff0307585bb811688eda.js",
    "revision": "258683832530bb2b5506a04ad188f464"
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
