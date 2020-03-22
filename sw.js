const name = 'bcalou';
console.log(`Hello ${name}`);

addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline').then((cache) => {
            cache.add('offline.html');
        })
    );
});

addEventListener('fetch', (event) => {
    console.log(event);
    event.respondWith(
        fetch(event.request).catch(() => caches.match('offline.html')),
    );
});