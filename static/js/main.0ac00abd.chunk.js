(this.webpackJsonpaniflix=this.webpackJsonpaniflix||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(29),r=n.n(s),j=(n(37),n(2)),l=n(4),o=(n(38),function(e){var t=e.placeholder,n=e.handleSubmit,a=e.handleChange,i=e.value;return Object(c.jsx)("form",{onSubmit:n,children:Object(c.jsx)("input",{className:"search-box",type:"search",name:"search",placeholder:t,onChange:a,value:i})})}),u=n(6),b=(n(39),function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(j.f)();return Object(c.jsxs)("nav",{className:"header",children:[Object(c.jsx)(u.b,{to:"/",style:{textDecoration:"none"},children:Object(c.jsx)("h1",{style:{color:"red"},children:"AniFlix"})}),Object(c.jsx)(o,{placeholder:"search anime",handleChange:function(e){i(e.target.value)},handleSubmit:function(e){e.preventDefault(),s.push("/search/".concat(n))},value:n})]})}),d=n(11),h=n(12),m=n(9),O=n.n(m),p=(n(63),function(e){return Object(c.jsxs)(u.b,{to:"/detail/".concat(e.mal_id),className:"card",children:[Object(c.jsx)("img",{src:e.image_url,alt:"poster"}),Object(c.jsxs)("div",{className:"score",children:["\u2605 ",e.score]}),Object(c.jsx)("div",{className:"card-footer",children:Object(c.jsx)("span",{children:e.title})})]})}),x=(n(64),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){O.a.get("https://api.jikan.moe/v3/top/anime/1/airing").then((function(e){return i(e.data.top)})).catch((function(e){return console.error(e)}))}),[]),Object(c.jsxs)("div",{className:"top-airing-preview",children:[Object(c.jsx)(u.b,{style:{textDecoration:"none"},to:"/airing",children:Object(c.jsx)("h1",{className:"title",children:"Top Airing Anime"})}),Object(c.jsx)("div",{className:"container-preview",children:n.filter((function(e,t){return t<4})).map((function(e){var t=e.mal_id,n=Object(h.a)(e,["mal_id"]);return Object(c.jsx)("div",{className:"preview",children:Object(c.jsx)(p,Object(d.a)({mal_id:t},n))},t)}))})]})}),f=(n(65),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){O.a.get("https://api.jikan.moe/v3/top/anime/1/movie").then((function(e){return i(e.data.top)})).catch((function(e){return console.error(e)}))}),[]),Object(c.jsxs)("div",{className:"top-movie-preview",children:[Object(c.jsx)(u.b,{style:{textDecoration:"none"},to:"/movie",children:Object(c.jsx)("h1",{className:"title",children:"Top Movie Anime"})}),Object(c.jsx)("div",{className:"container-preview",children:n.filter((function(e,t){return t<4})).map((function(e){var t=e.mal_id,n=Object(h.a)(e,["mal_id"]);return Object(c.jsx)("div",{className:"preview",children:Object(c.jsx)(p,Object(d.a)({mal_id:t},n))},t)}))})]})}),v=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{}),Object(c.jsx)(f,{})]})},g=(n(66),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(j.g)().search;return Object(a.useEffect)((function(){O.a.get("https://api.jikan.moe/v3/search/anime?q=".concat(s)).then((function(e){return i(e.data.results)}))}),[]),console.log(s),Object(c.jsxs)("div",{className:"search-page",children:[Object(c.jsxs)("h1",{className:"title",children:['Result for : "',s,'"']}),Object(c.jsx)("div",{className:"container-anime",children:n.map((function(e){var t=e.mal_id,n=Object(h.a)(e,["mal_id"]);return Object(c.jsx)(p,Object(d.a)({className:"anime",mal_id:t},n),t)}))})]})}),N=n(19),_=n.n(N),S=n(31),w=(n(68),function(){var e=Object(j.g)().id,t=Object(a.useState)({}),n=Object(l.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)([]),o=Object(l.a)(r,2),u=o[0],b=o[1];return Object(a.useEffect)((function(){(function(){var t=Object(S.a)(_.a.mark((function t(){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://api.jikan.moe/v3/anime/".concat(e));case 3:return n=t.sent,t.abrupt("return",(s(n.data),b(n.data.genres)));case 7:t.prev=7,t.t0=t.catch(0),console.error("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{className:"detail-page",children:[null===i.trailer_url?Object(c.jsx)("div",{style:{textAlign:"center"},children:"Trailer Not Available"}):Object(c.jsx)("div",{className:"container-trailer",children:Object(c.jsx)("iframe",{className:"trailer",src:"".concat(i.trailer_url),frameBorder:"0",title:"Trailer Anime",allowFullScreen:!0})}),Object(c.jsxs)("div",{className:"image-title",children:[Object(c.jsx)("img",{src:"".concat(i.image_url),alt:"poster",className:"image"}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:i.title}),null===i.score?"":Object(c.jsxs)("h3",{children:[Object(c.jsx)("span",{className:"score",children:"\u2605"})," ",i.score]}),null===i.title_english||null===i.title_japanese?"":Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{children:[i.title_english," / ",i.title_japanese]}),Object(c.jsx)("br",{})]}),Object(c.jsxs)("span",{children:["Release : ",i.premiered]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Genre :",u.map((function(e,t){return Object(c.jsxs)("span",{children:[e.name," ",t<u.length-1?",\xa0":""]},e.mal_id)}))]}),Object(c.jsx)("br",{}),i.airing?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{children:["Episode : ",i.episodes]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Duration : ",i.duration]})]}):Object(c.jsx)("span",{children:i.status})]})]}),Object(c.jsxs)("div",{className:"synopsis",children:[Object(c.jsx)("h1",{children:"Synopsis"}),Object(c.jsx)("p",{children:i.synopsis})]})]})}),y=(n(69),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){O.a.get("https://api.jikan.moe/v3/top/anime/1/airing").then((function(e){return i(e.data.top)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)("div",{className:"top-airing-page",children:[Object(c.jsx)("h1",{className:"title",children:"Top 50 Airing Anime"}),Object(c.jsx)("div",{className:"container-anime",children:n.map((function(e){var t=e.mal_id,n=Object(h.a)(e,["mal_id"]);return Object(c.jsx)(p,Object(d.a)({className:"anime",mal_id:t},n),t)}))})]})}),A=(n(70),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){O.a.get("https://api.jikan.moe/v3/top/anime/1/movie").then((function(e){return i(e.data.top)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)("div",{className:"top-movie-page",children:[Object(c.jsx)("h1",{className:"title",children:"Top 50 Movie Anime"}),Object(c.jsx)("div",{className:"container-anime",children:n.map((function(e){var t=e.mal_id,n=Object(h.a)(e,["mal_id"]);return Object(c.jsx)(p,Object(d.a)({className:"anime",mal_id:t},n),t)}))})]})});n(71);var k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"navbar",children:Object(c.jsx)(b,{})}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:v}),Object(c.jsx)(j.a,{path:"/search/:search",component:g}),Object(c.jsx)(j.a,{path:"/detail/:id",component:w}),Object(c.jsx)(j.a,{path:"/airing",component:y}),Object(c.jsx)(j.a,{path:"/movie",component:A})]})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u.a,{children:Object(c.jsx)(k,{})})}),document.getElementById("root")),F()}},[[72,1,2]]]);
//# sourceMappingURL=main.0ac00abd.chunk.js.map