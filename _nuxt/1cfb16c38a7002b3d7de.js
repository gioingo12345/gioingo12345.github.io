(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,n){"use strict";n.r(e);n(28);var r,c=n(5),l={asyncData:(r=Object(c.a)(regeneratorRuntime.mark(function t(e){var n,r,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,t.next=3,n.$axios.$get("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=".concat("6484f0ff29a64f6bb2d2464d600ad378"));case 3:return r=t.sent,c=r.articles,t.abrupt("return",{articles:c});case 6:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)})},o=n(25),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.articles,function(article,e){return n("div",{key:e,staticClass:"column is-one-quarter"},[n("a",{attrs:{href:article.url,target:"_blank"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-3by2"},[n("img",{attrs:{src:article.urlToImage,alt:article.title}})])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[t._v(t._s(article.title))])])])])])}),0)])])},[],!1,null,null,null);e.default=component.exports}}]);