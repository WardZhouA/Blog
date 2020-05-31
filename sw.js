importScripts('https://g.alicdn.com/kg/workbox/3.6.3/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.6.3/' });

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      var validSets = ["is-sw-ff92b5","is-html-ff92b5","is-jsdelivr-ff92b5","is-gtm-ff92b5","is-gravatar-ff92b5","is-theme-ff92b5","is-cdn-ff92b5","is-json-ff92b5","is-custom-ff92b5","is-img-ff92b5"];
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
  cacheName: 'is-sw-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.jsdelivr\\.net'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-jsdelivr-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('https://www\\.googletagmanager\\.com\?id=.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gtm-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('https://www\\.gravatar\\.com'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gravatar-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('/.*\\.(?:js|css|woff2|png|jpg|gif)$'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-theme-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.wardzhou\\.art'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-cdn-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('your_data_prefix/.*\\.json'), workbox.strategies.cacheFirst({
  cacheName: 'is-json-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('/custom/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-custom-ff92b5',
}));
workbox.routing.registerRoute(new RegExp('/img/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-img-ff92b5',
}));

workbox.routing.registerRoute(new RegExp('/.*(:?/[^\\.]*/?)$'), function(context) {
  var url = context.url.pathname;
  if (!url.endsWith('/')) url += '/';
  return fetch(url);
});