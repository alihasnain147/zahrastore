jQuery.cookie=function(e,n,t){if(void 0!==n){t=t||{},null===n&&(n="",t.expires=-1);var o,i="";t.expires&&("number"==typeof t.expires||t.expires.toUTCString)&&("number"==typeof t.expires?(o=new Date).setTime(o.getTime()+864e5*t.expires):o=t.expires,i="; expires="+o.toUTCString());var r=t.path?"; path="+t.path:"",a=t.domain?"; domain="+t.domain:"",c=t.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(n),i,r,a,c].join("")}else{var s=null;if(document.cookie&&""!=document.cookie)for(var l=document.cookie.split(";"),p=0;p<l.length;p++){var u=jQuery.trim(l[p]);if(u.substring(0,e.length+1)==e+"="){s=decodeURIComponent(u.substring(e.length+1));break}}return s}},Shopify.Products=function(){var e={howManyToShow:3,howManyToStoreInMemory:10,wrapperId:"recently-viewed-products",templateId:"recently-viewed-product-template",onComplete:null},n=[],t=null,o=null,i=0,r={configuration:{expires:90,path:"/",domain:window.location.hostname},name:"shopify_recently_viewed",write:function(e){jQuery.cookie(this.name,e.join(" "),this.configuration)},read:function(){var e=[],n=jQuery.cookie(this.name);return null!==n&&(e=n.split(" ")),e},destroy:function(){jQuery.cookie(this.name,null,this.configuration)},remove:function(e){var n=this.read(),t=jQuery.inArray(e,n);-1!==t&&(n.splice(t,1),this.write(n))}},a=function(){if(t.show(),$(".section-recently-viewed").show(),e.onComplete)try{e.onComplete()}catch(n){}},c=function(){n.length&&i<e.howManyToShow?jQuery.ajax({dataType:"json",url:"/products/"+n[0]+".js",cache:!1,success:function(e){o.tmpl(e).appendTo(t),n.shift(),i++,c()},error:function(){r.remove(n[0]),n.shift(),c()}}):a()};return{resizeImage:function(e,n){if(null==n)return e;if("master"==n)return e.replace(/http(s)?:/,"");var t=e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i);if(null==t)return null;var o=e.split(t[0]),i=t[0];return(o[0]+"_"+n+i).replace(/http(s)?:/,"")},showRecentlyViewed:function(i){var i=i||{};jQuery.extend(e,i),n=r.read(),o=jQuery("#"+e.templateId),t=jQuery("#"+e.wrapperId),e.howManyToShow=Math.min(n.length,e.howManyToShow),e.howManyToShow&&o.length&&t.length&&c()},getConfig:function(){return e},clearList:function(){r.destroy()},recordRecentlyViewed:function(n){var n=n||{};jQuery.extend(e,n);var t=r.read();if(-1!==window.location.pathname.indexOf("/products/")){var o=window.location.pathname.match(/\/products\/([a-z0-9\-]+)/)[1],i=jQuery.inArray(o,t);-1===i?(t.unshift(o),t=t.splice(0,e.howManyToStoreInMemory)):(t.splice(i,1),t.unshift(o)),r.write(t)}}}}();