const CACHE_NAME = "spotlist-cache-v1";

const STATIC_ASSETS = [
  "/index.html",
  "/manifest.json",
  "/static/js/main.js",
  "/static/css/main.css",
  "/static/media/GTUltra-Regular.woff"
]

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        cache.addAll(STATIC_ASSETS);
      }
    )
  );
});