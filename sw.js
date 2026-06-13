const CACHE_NAME = 'shiv-jobs-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/js/theme.js',
    '/assets/js/app.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
});