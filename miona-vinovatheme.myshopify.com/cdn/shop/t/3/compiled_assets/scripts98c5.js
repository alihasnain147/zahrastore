/** Shopify CDN: Minification failed

Line 20:2 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 21:15 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 23:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 29:12 Transforming const to the configured target environment ("es5") is not supported yet
Line 31:12 Transforming const to the configured target environment ("es5") is not supported yet

**/
(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["nov-product-recommendations"]) return;
  try {
    
  class ProductRecommendations extends HTMLElement {
    constructor() {
      super();
      const handleIntersection = (entries, observer) => {
        if (!entries[0].isIntersecting) return;
        observer.unobserve(this);
        fetch(this.dataset.url)
          .then(response => response.text())
          .then(text => {
            const html = document.createElement('div');
            html.innerHTML = text;
            const recommendations = html.querySelector('product-recommendations');
            if (recommendations && recommendations.innerHTML.trim().length) {
              this.innerHTML = recommendations.innerHTML;
            }
            jdgm.customizeBadges();
            Currency.convertAll(shopCurrency, $('#currencies span.selected').attr('data-currency'));
          })
          .catch(e => {
            console.error(e);
          });
      }
      new IntersectionObserver(handleIntersection.bind(this), {rootMargin: '0px 0px 200px 0px'}).observe(this);
    }
  }
  customElements.define('product-recommendations', ProductRecommendations);

  } catch(e) { console.error(e); }
})();

})();
