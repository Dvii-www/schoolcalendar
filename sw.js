// Sube este número cada vez que subas cambios de index.html — así los
// celulares que ya tienen la app instalada descargan la versión nueva
// en vez de quedarse con la copia guardada en caché.
const VERSION = 'v2';

const CACHE_NAME = 'mi-horario-' + VERSION;
const ARCHIVOS_A_GUARDAR = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS_A_GUARDAR))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(
        nombres
          .filter((nombre) => nombre !== CACHE_NAME)
          .map((nombre) => caches.delete(nombre))
      )
    )
  );
  self.clients.claim();
});

// Estrategia: intenta la red primero (para tener siempre lo más nuevo si
// hay internet), y si falla (sin conexión) usa lo guardado en caché.
self.addEventListener('fetch', (evento) => {
  evento.respondWith(
    fetch(evento.request)
      .then((respuesta) => {
        const copia = respuesta.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(evento.request, copia));
        return respuesta;
      })
      .catch(() => caches.match(evento.request))
  );
});
