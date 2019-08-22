importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/180e7df94a6cc227874a.js",
    "revision": "c1fb356ae4d7354d7f90d45c21c3b850"
  },
  {
    "url": "/_nuxt/32fcff40b6353cff33ca.js",
    "revision": "581de9df4d45616ce1dbbe3dab9cacb1"
  },
  {
    "url": "/_nuxt/5327f82bb12beea55b11.js",
    "revision": "113db45d8da6cc388af9af07c77c6e7e"
  },
  {
    "url": "/_nuxt/59716c1294d8d99b52ca.js",
    "revision": "dec0c5124bb44ad1fef07b632e05cbcc"
  },
  {
    "url": "/_nuxt/677d3fe2da19bd3450c9.js",
    "revision": "e6f0b3b6d3058152d18ab99126c66314"
  },
  {
    "url": "/_nuxt/80fcb4385726fa894027.js",
    "revision": "a979f79f86290d982b401ccbad9d057b"
  },
  {
    "url": "/_nuxt/938cd28c0392ae11adf4.js",
    "revision": "71e0d9e41260aa853235181eea347d8a"
  },
  {
    "url": "/_nuxt/a080b06e86a8220a6d13.js",
    "revision": "fa2d983577c316540d52ee0fd6c8a514"
  },
  {
    "url": "/_nuxt/beb6cbc93d6c5907327b.js",
    "revision": "2d2ed3f8817d5496dd01d7548232ea9d"
  },
  {
    "url": "/_nuxt/d356d21aade0bee27fec.js",
    "revision": "9eafd7ebce01e75369e1fe32a6af0caa"
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
