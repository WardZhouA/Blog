importScripts('https://g.alicdn.com/kg/workbox/3.6.3/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.6.3/' });

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      var validSets = ["is-sw-a3e96a","is-html-a3e96a","is-jsdelivr-a3e96a","is-gtm-a3e96a","is-gravatar-a3e96a","is-theme-a3e96a","is-cdn-a3e96a","is-json-a3e96a","is-custom-a3e96a","is-img-a3e96a"];
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
  cacheName: 'is-sw-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.jsdelivr\\.net'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-jsdelivr-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('https://www\\.googletagmanager\\.com\?id=.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gtm-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('https://www\\.gravatar\\.com'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-gravatar-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('/.*\\.(?:js|css|woff2|png|jpg|gif)$'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-theme-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.wardzhou\\.art'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-cdn-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('your_data_prefix/.*\\.json'), workbox.strategies.cacheFirst({
  cacheName: 'is-json-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('/custom/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-custom-a3e96a',
}));
workbox.routing.registerRoute(new RegExp('/img/.*'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-img-a3e96a',
}));

workbox.routing.registerRoute(new RegExp('/.*(:?/[^\\.]*/?)$'), function(context) {
  var url = context.url.pathname;
  if (!url.endsWith('/')) url += '/';
  return fetch(url);
});