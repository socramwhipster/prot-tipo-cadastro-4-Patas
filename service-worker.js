const CACHE = 'amor4patas-v3.4.4';
const STATIC = [
  './',
  './index.html',
  './manifest.webmanifest',
  './amor de 4 patas.jpg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(STATIC))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Navegação/HTML: rede primeiro para pegar sempre a versão publicada mais recente.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request, { cache: 'no-store' });
        const cache = await caches.open(CACHE);
        await cache.put('./index.html', response.clone());
        return response;
      } catch (error) {
        return (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  // Arquivos estáticos: tenta a rede primeiro e usa o cache como fallback offline.
  event.respondWith((async () => {
    try {
      const response = await fetch(event.request, { cache: 'no-cache' });
      const cache = await caches.open(CACHE);
      await cache.put(event.request, response.clone());
      return response;
    } catch (error) {
      return (await caches.match(event.request)) || Response.error();
    }
  })());
});
