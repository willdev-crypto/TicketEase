const CACHE_NAME = "ticketease-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/assets/web-app-manifest-192x192.png",
  "/assets/web-app-manifest-512x512.png"
];

// Instalar o Service Worker e armazenar os arquivos no cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativar o Service Worker e remover caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptar requisições e buscar no cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
