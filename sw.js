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
    "url": "/_nuxt/7e10b717ec78ae012160.js",
    "revision": "667a493bca5c86dd11be74d9ad6f0e4c"
  },
  {
    "url": "/_nuxt/7f1d23bf585fe01c1db9.js",
    "revision": "4531b98ce9a9641b4dd94c8af3a4b70f"
  },
  {
    "url": "/_nuxt/c2b518526d22129cb6f1.js",
    "revision": "af027e8cf2725bd552f2b79382ff3b46"
  },
  {
    "url": "/_nuxt/d3c8009505af5dc9cc61.js",
    "revision": "9aa092c79cefd79ed0bafbec9300c233"
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
