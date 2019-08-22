importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01c0744157ae869ef3e8.js",
    "revision": "82f45459686643f45cbd8679923b105a"
  },
  {
    "url": "/_nuxt/063e6a03582c9a742a34.js",
    "revision": "acbff11fbe65df22dbe9f3c0d02dd021"
  },
  {
    "url": "/_nuxt/2484545aab52e7034844.js",
    "revision": "701699a89ddf57f7b5de8c98166dbeb8"
  },
  {
    "url": "/_nuxt/3a1a0f4acf3b12f9fd19.js",
    "revision": "abdc26c79244b29109fa8cc4c81f66db"
  },
  {
    "url": "/_nuxt/4715482da398d4da2d50.js",
    "revision": "f25b6375ad22e46d9b11f61b816c4a04"
  },
  {
    "url": "/_nuxt/4887b223f3920fed8bb6.js",
    "revision": "3fa98b4f3bd7a46269cfbbb4b439cdda"
  },
  {
    "url": "/_nuxt/8f4e6223a12de6306aa0.js",
    "revision": "2f124dea040720bb63a188340f3907f8"
  },
  {
    "url": "/_nuxt/caa327b24509d99d75e6.js",
    "revision": "d884f409d5408fce3d0a60761ec4c598"
  },
  {
    "url": "/_nuxt/d4b8a2e188548f2ce6a2.js",
    "revision": "d866d82fe32a147ac3a0778aaa29c78f"
  },
  {
    "url": "/_nuxt/ef1bc500c9528a3b5b77.js",
    "revision": "b6b6ed193032d8e5052ad9977bb6989a"
  },
  {
    "url": "/_nuxt/f3321b4f9bade12a3a44.js",
    "revision": "961639184b32bf0833cd9deee7aa6cc9"
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
