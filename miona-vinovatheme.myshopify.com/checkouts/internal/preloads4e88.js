
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.2f83dfa703a874490d7e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.baseline.en.068e7eb8ca4e48645f82.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.baseline.en.687c8daf2b1b9a4be4de.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.baseline.en.7ba6e4f965ef1ea332de.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.31e29030c7c4f0d6d727.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.baseline.en.9b24600641cb32831349.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.en.df5bf22ee90bdb044bb4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/472.baseline.en.78481792f5bbdd87330c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/44.baseline.en.aeece22cba81624a0248.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.5ca96d69b7faf389f546.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.baseline.en.04270ad3b1335258182d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.bd7e1a04a0d2456be516.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.en.2b60ccea73a26508dcab.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/457.baseline.en.8dc5b88647a6f73acb93.css"];
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
  