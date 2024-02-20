
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.de.88739619dc2adca27867.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.baseline.de.068e7eb8ca4e48645f82.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/12.baseline.de.cfa19a3fc45578ad66df.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.baseline.de.45bf80d3978193e708ed.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.de.64876a74207332fed5e2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.baseline.de.9b24600641cb32831349.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.de.df5bf22ee90bdb044bb4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/472.baseline.de.78481792f5bbdd87330c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/44.baseline.de.aeece22cba81624a0248.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.de.70b59d2d704024bfe72c.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.baseline.de.04270ad3b1335258182d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.de.bd7e1a04a0d2456be516.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.de.2b60ccea73a26508dcab.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/457.baseline.de.8dc5b88647a6f73acb93.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  