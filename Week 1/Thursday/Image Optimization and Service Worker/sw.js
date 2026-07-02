const CACHE_NAME = 'cache_v5'; // Remaned it for 3rd version
const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/assets/elytra_studios_logo.jpg',
    '/assets/Expense_Tracker.webp',
    '/assets/NYC_Taxi_Warehouse.webp',
    '/assets/Speech_Emotion_Recognition.webp'
];

self.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_ASSETS))
    );
    self.skipWaiting();
})

self.addEventListener('fetch', (event) =>{
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});