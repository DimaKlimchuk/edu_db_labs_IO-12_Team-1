/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5b9fa6842020c398a7988023109303a0"
  },
  {
    "url": "assets/css/0.styles.c37707bc.css",
    "revision": "c395cd49a8d794e2f200fc7ba3eac6f8"
  },
  {
    "url": "assets/img/CreateQuiz.68459d5a.png",
    "revision": "68459d5a29c5ae28be8dc83bbd0ef38b"
  },
  {
    "url": "assets/img/CreateUser.b5ce4a07.png",
    "revision": "b5ce4a076950a752fe038e1d06ba502b"
  },
  {
    "url": "assets/img/database_scheme.c83b138b.png",
    "revision": "c83b138b1622a9aafcfd014d26241091"
  },
  {
    "url": "assets/img/DeleteQuiz.075d5ba5.png",
    "revision": "075d5ba583c8eb4546237da81dec7ce0"
  },
  {
    "url": "assets/img/GetAllQuizes.5fe86ac6.png",
    "revision": "5fe86ac6bb4d0bfc73052091ef430b1c"
  },
  {
    "url": "assets/img/GetAllUsers.a7faf9da.png",
    "revision": "a7faf9da75f3df9dbfab18c005bb0ff9"
  },
  {
    "url": "assets/img/GetQuizById.bd9ecc12.png",
    "revision": "bd9ecc12cc493a01b7c8c29dbe107208"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e4a28a40.js",
    "revision": "80aaab96ad6ab18e96d46461012d792c"
  },
  {
    "url": "assets/js/11.cf54c000.js",
    "revision": "a1f338796abe60033184676c021a7852"
  },
  {
    "url": "assets/js/12.affbcd87.js",
    "revision": "6806e487ff88cbbae142fc792354a053"
  },
  {
    "url": "assets/js/13.2c9cfe3c.js",
    "revision": "02da0f34b8344b815dc2d513b96a1db4"
  },
  {
    "url": "assets/js/14.5d15890f.js",
    "revision": "28c010dcc5cfacf16ec296307e8343cf"
  },
  {
    "url": "assets/js/15.571bb6e1.js",
    "revision": "1f80b677ad03764f77945f6720b9a18f"
  },
  {
    "url": "assets/js/16.3ce862f8.js",
    "revision": "10a6d055d016aeed0a9a9c22a076836e"
  },
  {
    "url": "assets/js/17.cd4efd71.js",
    "revision": "909d437eb1fbdeeb15b8d8944bc70134"
  },
  {
    "url": "assets/js/18.acf373d3.js",
    "revision": "9512f0406ae97bb2f472d68bcbe1d0d4"
  },
  {
    "url": "assets/js/19.46d78138.js",
    "revision": "8d299a9c0e5af032c6f380c2e59d604e"
  },
  {
    "url": "assets/js/2.4465a62f.js",
    "revision": "25d972c91c77d23008ccf680a05c3d7a"
  },
  {
    "url": "assets/js/20.78289ecf.js",
    "revision": "5f98e42e2acfe3fc4b66b81b889bda4a"
  },
  {
    "url": "assets/js/21.921d1b69.js",
    "revision": "0bed55d9ec9beed9a54fc8d12c66b415"
  },
  {
    "url": "assets/js/22.ff5b56d5.js",
    "revision": "631774d27641016c768ae6b10ef0c32c"
  },
  {
    "url": "assets/js/23.77800db4.js",
    "revision": "7ab79d6f4953c613513f52a3245f22bd"
  },
  {
    "url": "assets/js/24.7399505c.js",
    "revision": "a6c1e44c452fae503f6a3993be89f86c"
  },
  {
    "url": "assets/js/26.e9b62908.js",
    "revision": "2325aeb3d4dd0e62a5f55331cd0e812f"
  },
  {
    "url": "assets/js/3.ff9f05dc.js",
    "revision": "5ee0ce758f1057626a45d993ca86f944"
  },
  {
    "url": "assets/js/4.81bf3497.js",
    "revision": "a5635cfd08f1bd732f118aeb604774a2"
  },
  {
    "url": "assets/js/5.c155ad95.js",
    "revision": "adf26fb7b36ed36e6f91a2bf61ee9257"
  },
  {
    "url": "assets/js/6.4c7fe830.js",
    "revision": "f58b295f22387533685932ade275d8f4"
  },
  {
    "url": "assets/js/7.3d113903.js",
    "revision": "faa3ee7ea8007be7245bd1a80ad61e9d"
  },
  {
    "url": "assets/js/8.f81b8f64.js",
    "revision": "b1a2c8e2d97148c40955a5644bb6db33"
  },
  {
    "url": "assets/js/9.d623da28.js",
    "revision": "8349caf903b696c3c5fc5d527b9633cc"
  },
  {
    "url": "assets/js/app.3f513bf5.js",
    "revision": "8ff09c747463adc96f72b42053e130cd"
  },
  {
    "url": "conclusion/index.html",
    "revision": "dbd550f524e92654f9cadcbcaf19043a"
  },
  {
    "url": "design/index.html",
    "revision": "712a53b38fda755ac03c97d47d6473c3"
  },
  {
    "url": "index.html",
    "revision": "df71cd95ad4de1fe4fd3e3b5043d5378"
  },
  {
    "url": "intro/index.html",
    "revision": "6f03d438c8673183f8b40a90ca788799"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "cf02e99d33798cc86c6d3b0568e57969"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4989b95faa8f39e612eb43113f348fba"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a1250f4f2269e268970e673bd1b06ccb"
  },
  {
    "url": "software/index.html",
    "revision": "16f32251ee921460fabe456a946df0da"
  },
  {
    "url": "test/index.html",
    "revision": "73e1e909edd1a9433b1657e4d49ad79e"
  },
  {
    "url": "use cases/index.html",
    "revision": "24e520601d4eccce12369d09fe499a73"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
