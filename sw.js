importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/' });

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      var validSets = ["is-sw-9df5bf","is-html-9df5bf","is-jsdelivr-9df5bf","is-gtm-9df5bf","is-gravatar-9df5bf","is-theme-9df5bf","is-cdn-9df5bf","is-json-9df5bf","is-custom-9df5bf","is-img-9df5bf"];
      return Promise.all(
        names
          .filter(function (name) { return !~validSets.indexOf(name); })
          .map(function (name) {
            indexedDB && indexedDB.deleteDatabase(name);
            return caches.delete(name);
          })
      ).then(function() { self.skipWaiting() });
    })
  );
});

workbox.routing.registerRoute(new RegExp('sw\\.js'), workbox.strategies.networkOnly({
  cacheName: 'is-sw-9df5bf',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.jsdelivr\\.net'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-jsdelivr-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('https://www\\.googletagmanager\\.com\?id=.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gtm-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('https://www\\.gravatar\\.com'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gravatar-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('/.*\\.(?:js|css|woff2|png|jpg|gif)$'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-theme-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.wardzhou\\.art'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-cdn-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('your_data_prefix/.*\\.json'), workbox.strategies.cacheFirst({
  cacheName: 'is-json-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('/custom/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-custom-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('/img/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-img-9df5bf',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));

workbox.routing.registerRoute(new RegExp('/.*(:?/[^\\.]*/?)$'), function(context) {
  var url = context.url.pathname;
  if (!url.endsWith('/')) url += '/';
  return fetch(url);
});