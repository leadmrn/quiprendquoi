const name = 'bcalou';
console.log(`Hello ${name}`);

addEventListener('install', (event) => {
    console.log('Hello from the service worker')
});

addEventListener('fetch', (event) => {
    console.log(event);
    event.respondWith(fetch(event.request));
});