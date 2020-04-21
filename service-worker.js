const CACHE_NAME = 'coronaHunter-2020-04-14b';

self.addEventListener("install", event => {
  this.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        caches.open(CACHE_NAME).then(function (cache) {
          return cache.addAll([
            '/',
            '/index.html',                
            '/offline.html',                
            '/manifest.json',
            '/static/assets/icon/flaticon.png',
            '/static/assets/icon/friend.png',
            '/static/assets/icon/icon-128x128.png',
            '/static/assets/icon/icon-256x256.png',
            '/static/assets/icon/icon-512x512.png',
            '/static/assets/icon/smart-tv.png',
            '/static/assets/images/tv.png',
            '/static/assets/icon/Thumbs.db',
            '/static/assets/images/background-nav-user.png',
            '/static/assets/images/download.png',
            '/static/assets/images/hand.png',
            '/static/assets/images/Thumbs.db',
            '/static/css/all.css',
            '/static/css/animate.css',
            '/static/css/bootstrap.css',
            '/static/css/bootstrap.map.css',
            '/static/css/corona_hunter.css',
            '/static/css/font-awesome.css',
            '/static/js/bootstrap.bundle.min.js',
            '/static/js/bootstrap.js',
            '/static/js/corona_hunter.js',
            '/static/js/jquery.min.js',
            '/static/webfonts/fa-brands-400.eot',
            '/static/webfonts/fa-brands-400.svg',
            '/static/webfonts/fa-brands-400.ttf',
            '/static/webfonts/fa-brands-400.woff',
            '/static/webfonts/fa-brands-400.woff2',
            '/static/webfonts/fa-regular-400.eot',
            '/static/webfonts/fa-regular-400.svg',
            '/static/webfonts/fa-regular-400.ttf',
            '/static/webfonts/fa-regular-400.woff',
            '/static/webfonts/fa-regular-400.woff2',
            '/static/webfonts/fa-solid-900.eot',
            '/static/webfonts/fa-solid-900.svg',
            '/static/webfonts/fa-solid-900.ttf',
            '/static/webfonts/fa-solid-900.woff',
            '/static/webfonts/fa-solid-900.woff2',
          ]);
        })
    })
  )
});


// Clear cache on activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith('coronaHunter-')))
          .filter(cacheName => (cacheName !== CACHE_NAME))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Serve from Cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match('/offline.html');
      })
  )
});