(this["webpackJsonplot-app"]=this["webpackJsonplot-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(60)},23:function(e,t,a){},24:function(e,t,a){},45:function(e,t){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(23),a(10)),i=a(11),s=a(15),u=a(12),d=a(16),m=(a(24),a(17)),f=a(13),p=a(14),h=(a(25),function(e){var t=["card"];return"show"===e.cardState.visible&&t.push("is-flipped"),!0===e.cardState.special&&t.push("is-flipped-special"),r.a.createElement("div",{className:"scene"},r.a.createElement("div",{className:t.join(" "),onClick:function(){return e.flipCard(e.index)}},r.a.createElement("div",{className:"card__face card__face--front"},r.a.createElement("span",{role:"img","aria-label":"good"},"\ud83e\udd14")),r.a.createElement("div",{className:"card__face card__face--back"},r.a.createElement("span",{role:"img","aria-label":"cool"}))))}),v=function(e){return r.a.createElement("div",{className:" cards-count"},r.a.createElement("button",{className:" btn__count",onClick:function(){return e.removeCard("-")}},"mns -"),r.a.createElement("span",{className:"count-val"},e.count," "),r.a.createElement("button",{className:"btn__count",onClick:function(){return e.addCard("+")}},"pls+"),r.a.createElement("button",{className:" btn__reload",onClick:e.restartCards},"reload"))},b=a(27);console.log(b.int(1,5));var E=function(){var e=function(e){var t=0;return t=2===e?Math.random()>.5?1:2:Math.ceil(Math.random()*(e-1)+1),Array.from({length:e},(function(e,a){return{visible:"hide",special:a===t-1}}))},t=Object(n.useState)(e(2)),a=Object(p.a)(t,2),c=a[0],o=a[1],l=function(e){return o(c.map((function(t,a){return a===e?Object(m.a)({},t,{},{visible:"show"}):t})))},i=c.map((function(e,t){return r.a.createElement(h,{cardState:c[t],flipCard:l,key:t,index:t,value:e})}));return r.a.createElement("div",{className:"container"},r.a.createElement(v,{count:c.length,addCard:function(){return o([].concat(Object(f.a)(c),[{visible:"hide",special:!1}]))},removeCard:function(){return c.length>2?o(c.splice(1)):null},restartCards:function(){return o(e(c.length))}}),r.a.createElement("div",{className:"cards-container"},i))},_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null)}}]),t}(r.a.Component);o.a.render(r.a.createElement(_,null),document.querySelector("#root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bfc94659.chunk.js.map