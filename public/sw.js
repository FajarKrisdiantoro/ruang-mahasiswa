if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_j30s3nYej6Pghz5fwU2v/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/_j30s3nYej6Pghz5fwU2v/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1430-86f52569c537cb45.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/1517-c5639e694a0a8567.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/1752-fa1444d101a25f3d.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/2439-022b7e46156153da.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/2901-a64ad85d0d8433c5.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/2972-5f0697fddca5dd9d.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/3683-11b90b4028a77da6.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/3999-fb3a6b388db2c99b.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/499-34db314268e4898d.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/5878-bdc9515a2709f721.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/602dbae6-4e45642eee377184.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/6157-9865126c22323378.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/6353-194fdc7d37a4653c.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/6729-a7be929f24b8aca9.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/6810-d22ca35553174d47.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/6928-f3f79c38a0b3c397.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/7272-b7bd35dc05a000f5.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/7939-9c261c77d1ba8929.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/8428-a70b6da4c5c8411e.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/8658-11c7bb8fbe36cc04.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/8995-28469850b19fb723.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/8e1d74a4-287d01e0fb09140d.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/94730671-12e45aac3c2cba37.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/9672-fafbbe9964cdcc97.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(auth)/layout-d1636c92e01a20a4.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(auth)/sign-in/page-c0f080c32356be2a.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(auth)/sign-up/page-38b28c372ddb4845.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(dashboard)/layout-2fa8d6c287ac35c4.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(dashboard)/page-922dd02a95f1c4ac.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(dashboard)/workspaces/%5BworkspaceId%5D/page-ed46a6c2bfefa285.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(dashboard)/workspaces/%5BworkspaceId%5D/projects/%5BprojectId%5D/page-bdac09f1cc3a3dfe.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(dashboard)/workspaces/%5BworkspaceId%5D/tasks/%5BtaskId%5D/page-3c4b7ed99fa775c2.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(dashboard)/workspaces/%5BworkspaceId%5D/tasks/page-475a31373fd19fc6.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(standalone)/layout-0728fecbe40dd6cc.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(standalone)/workspaces/%5BworkspaceId%5D/join/%5BinviteCode%5D/page-bac80af72959902c.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(standalone)/workspaces/%5BworkspaceId%5D/members/page-2afc73a5d1f41871.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(standalone)/workspaces/%5BworkspaceId%5D/projects/%5BprojectId%5D/settings/page-a769f7a71c86b256.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(standalone)/workspaces/%5BworkspaceId%5D/settings/page-07f82c7606185559.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/(standalone)/workspaces/create/page-9ff90abed2a8b23e.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/_not-found/page-caba8f935913bad9.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/error-4d1ac07af3e0f766.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/layout-1fcaca2dce1897ce.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/app/loading-54e89ee5a0ca8c19.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/e80c4f76-4e84b48bce91e1fc.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/eec3d76d-34eb7f522c81cc9a.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/fc2f6fa8-56ac70e9744682bb.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/fd9d1056-c1d3db0350f5323b.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/main-00fb5b6c9fe225c2.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/main-app-41d8f2d013b9b45d.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-3fb19d82edb9df30.js",revision:"_j30s3nYej6Pghz5fwU2v"},{url:"/_next/static/css/1237be18bcb760e6.css",revision:"1237be18bcb760e6"},{url:"/_next/static/css/643b12ad3fd2acf0.css",revision:"643b12ad3fd2acf0"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icons/icons-128.png",revision:"a709d84f65ea1287d7c0ba070d2d71d7"},{url:"/icons/icons-144.png",revision:"8ce2f9276cd48f73254a6684c297e2a0"},{url:"/icons/icons-152.png",revision:"aea47e1e172193fe1b82fe1fea934704"},{url:"/icons/icons-16.png",revision:"97f8c7f692d0d1ee7f4fe05a3048db4d"},{url:"/icons/icons-180.png",revision:"03ab5bd8ec367186b3b5abc8da341d85"},{url:"/icons/icons-192.png",revision:"b74ffa488918c96207a6284e329265bf"},{url:"/icons/icons-256.png",revision:"460ad0d9f1e0ea1a2e9873a4c7f6dc1c"},{url:"/icons/icons-48.png",revision:"bce16e396b16d1fed0b4378bb01517e0"},{url:"/icons/icons-512.png",revision:"acfd3de73374e2b823d650cfd69a102c"},{url:"/icons/icons-64.png",revision:"f3e7ba3a9890bfffacfd2b80dfa4c66b"},{url:"/icons/icons-72.png",revision:"6dc41c8c97a9eaa95fdbb2ce3d03d59d"},{url:"/icons/icons-96.png",revision:"b6d22e1368da8f15057d79b4599faa88"},{url:"/logo.svg",revision:"be88710a8e217353399faeb7d8e22e72"},{url:"/manifest.json",revision:"9abee2a77d916eb5e6a22d510ff8403b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));