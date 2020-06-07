importScripts('https://g.alicdn.com/kg/workbox/3.6.3/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.6.3/' });

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      var validSets = ["is-sw-3b0094","is-html-3b0094","is-jsdelivr-3b0094","is-gtm-3b0094","is-gravatar-3b0094","is-theme-3b0094","is-cdn-3b0094","is-json-3b0094","is-custom-3b0094","is-img-3b0094"];
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
  cacheName: 'is-sw-3b0094',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.jsdelivr\\.net'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-jsdelivr-3b0094',
}));
workbox.routing.registerRoute(new RegExp('https://www\\.googletagmanager\\.com\?id=.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gtm-3b0094',
}));
workbox.routing.registerRoute(new RegExp('https://www\\.gravatar\\.com'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gravatar-3b0094',
}));
workbox.routing.registerRoute(new RegExp('/.*\\.(?:js|css|woff2|png|jpg|gif)$'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-theme-3b0094',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.wardzhou\\.art'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-cdn-3b0094',
}));
workbox.routing.registerRoute(new RegExp('your_data_prefix/.*\\.json'), workbox.strategies.cacheFirst({
  cacheName: 'is-json-3b0094',
}));
workbox.routing.registerRoute(new RegExp('/custom/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-custom-3b0094',
}));
workbox.routing.registerRoute(new RegExp('/img/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-img-3b0094',
}));

workbox.routing.registerRoute(new RegExp('/.*(:?/[^\\.]*/?)$'), function(context) {
  var url = context.url.pathname;
  if (!url.endsWith('/')) url += '/';
  return fetch(url);
});