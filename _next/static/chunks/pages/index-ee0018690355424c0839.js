(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9302:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(9008),i=n(9002),o=n(1635),l=n(6664),s=n(1494),c=n(6570),u=n(4942),a=n(7294),d=n(5861),v=n(5671),f=n(3144),p=n(7757),m=n.n(p),h=n(9669),j=n.n(h),g={baseURL:"https://kitsu.io/api"},b=function(){return j().create({baseURL:g.baseURL})},x=n(129),y=n.n(x),O=new(function(){function e(){(0,v.Z)(this,e)}return(0,f.Z)(e,[{key:"get",value:function(){var e=(0,d.Z)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("qs.stringify(params)",y().stringify({page:{limit:null===t||void 0===t?void 0:t.limit,offset:null===t||void 0===t?void 0:t.offset},sort:null===t||void 0===t?void 0:t.sort})),n={params:{page:{limit:null===t||void 0===t?void 0:t.limit,offset:null===t||void 0===t?void 0:t.offset},sort:null===t||void 0===t?void 0:t.sort},paramsSerializer:function(e){return y().stringify(e)}},e.next=4,b().get("/edge/anime",n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),w=n(2982);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=n(6763),S=n(5675),k=n(5893),_=N.Z.Meta,E=function(e){var t,n,r,i,o,l,s,c,u,a,d,v,f,p,m,h,j=e.item;return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(N.Z,{hoverable:!0,style:{width:240},cover:(0,k.jsx)(S.default,{quality:40,loading:"lazy",placeholder:"blur",blurDataURL:null===j||void 0===j||null===(t=j.attributes)||void 0===t||null===(n=t.posterImage)||void 0===n?void 0:n.original,alt:null===j||void 0===j||null===(r=j.attributes.titles)||void 0===r?void 0:r.en_jp,width:(null===j||void 0===j||null===(i=j.attributes)||void 0===i||null===(o=i.posterImage)||void 0===o||null===(l=o.meta)||void 0===l||null===(s=l.dimensions)||void 0===s||null===(c=s.small)||void 0===c?void 0:c.width)||240,height:(null===j||void 0===j||null===(u=j.attributes)||void 0===u||null===(a=u.posterImage)||void 0===a||null===(d=a.meta)||void 0===d||null===(v=d.dimensions)||void 0===v||null===(f=v.small)||void 0===f?void 0:f.height)||340,src:null===j||void 0===j||null===(p=j.attributes)||void 0===p||null===(m=p.posterImage)||void 0===m?void 0:m.original}),children:(0,k.jsx)(_,{title:null===j||void 0===j||null===(h=j.attributes.titles)||void 0===h?void 0:h.en_jp,description:"www.instagram.com"})})})};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(){var e=(0,a.useState)(),t=(e[0],e[1],(0,a.useState)({limit:20,offset:0,sort:"-averageRating"})),n=t[0],r=t[1],l=function(e,t){var n=(0,a.useState)(!0),r=n[0],i=n[1],o=(0,a.useState)(!1),l=o[0],s=o[1],c=(0,a.useState)([]),u=c[0],v=c[1],f=(0,a.useState)(!1),p=f[0],h=f[1],j=function(){var n=(0,d.Z)(m().mark((function n(){var r,o,l;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),s(!1),n.next=4,t.get(P({},e));case 4:(r=n.sent)&&200===(null===r||void 0===r?void 0:r.status)?(v((function(e){var t;return(0,w.Z)(new Set([].concat((0,w.Z)(e),(0,w.Z)(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.data))))})),h((null===r||void 0===r||null===(o=r.data)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.length)>0),i(!1)):(v([]),h(!1),i(!1),s(!0));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,a.useEffect)((function(){j()}),[e,t]),{loading:r,error:l,data:u,hasMore:p}}(n,O),s=l.loading,c=(l.error,l.data),u=l.hasMore,v=(0,a.useRef)(null),f=(0,a.useCallback)((function(e){s||(v.current&&v.current.disconnect(),v.current=new IntersectionObserver((function(e){e[0].isIntersecting&&u&&r((function(e){return C(C({},e),{},{offset:e.offset+20})}))})),e&&v.current.observe(e))}),[s,u]);return(0,k.jsx)(k.Fragment,{children:(null===c||void 0===c?void 0:c.length)>0&&(0,k.jsx)(i.Z,{style:{width:"100%"},gutter:[15,15],justify:"center",children:null===c||void 0===c?void 0:c.map((function(e,t){return(null===c||void 0===c?void 0:c.length)===t+1?(0,k.jsx)(o.Z,{ref:f,children:(0,k.jsx)(E,{item:e})},t):(0,k.jsx)(o.Z,{children:(0,k.jsx)(E,{item:e})},t)}))})})},I=n(7724),L=n(8812),M=function(e){var t,n,r,i,o,l,s=e.handlePointerEvent,c=e.item,u=e.cardStyle;return(0,k.jsx)("article",{className:u,children:(0,k.jsxs)("div",{className:"card",onMouseDown:s,onTouchStart:s,children:[(0,k.jsx)("div",{className:"picture",children:(0,k.jsx)("img",{src:null===c||void 0===c||null===(t=c.attributes)||void 0===t||null===(n=t.posterImage)||void 0===n?void 0:n.original,alt:null===c||void 0===c||null===(r=c.attributes)||void 0===r||null===(i=r.titles)||void 0===i?void 0:i.en_jp})}),(0,k.jsx)("div",{className:"text",children:null===c||void 0===c||null===(o=c.attributes)||void 0===o||null===(l=o.titles)||void 0===l?void 0:l.en_jp})]})})};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){var e=(0,a.useState)(0),t=e[0],n=e[1],r=(0,a.useState)([]),i=r[0],o=r[1];(0,a.useEffect)((function(){l({limit:4,offset:0,sort:"-averageRating"})}),[]);var l=function(){var e=(0,d.Z)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get(T({},t));case 2:(n=e.sent)&&200===(null===n||void 0===n?void 0:n.status)&&o((function(e){var t;return(0,w.Z)(new Set((0,w.Z)(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data)))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){t-1>=0&&n(t-1)},c=function(){t+1<=i.length-1&&n(t+1)},u=function(e){var n="touchstart"===e.type,r=e.target,o=0,l=n?e.touches[0].clientX:e.clientX;function u(e){return(o=(n?e.touches[0].clientX:e.clientX)-l)<=-100?(c(),void(t===i.length-1?r.style.left=0:setTimeout((function(){r.style.left=0}),1e3))):o>=100?(s(),void(0===t?r.style.left=0:setTimeout((function(){r.style.left=0}),1e3))):void(r.style.left=o+"px")}function a(e){o<0&&o>-100&&(r.style.left=0),o>0&&o<100&&(r.style.left=0),document.onmousemove=null,document.onmouseup=null,document.ontouchmove=null,document.ontouchend=null}document.onmousemove=u,document.onmouseup=a,document.ontouchmove=u,document.ontouchend=a};return(0,k.jsxs)("div",{className:"container",children:[(0,k.jsx)(I.Z,{onClick:s,className:"leftBtn"}),(0,k.jsxs)("div",{className:"card-container",children:[(0,k.jsx)("div",{className:"background-block"}),i.map((function(e,n){var r=n>t?"nextCard":n===t?"activeCard":"prevCard";return(0,k.jsx)(M,{handlePointerEvent:u,item:e,cardStyle:r},n)}))]}),(0,k.jsx)(L.Z,{onClick:c,className:"rightBtn"})]})},U=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(r.default,{children:[(0,k.jsx)("title",{children:"Anime List"}),(0,k.jsx)("meta",{name:"description",content:"anime list next app"}),(0,k.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,k.jsx)("div",{className:"first-section",children:(0,k.jsxs)("div",{className:"demo-wrap",children:[(0,k.jsx)("img",{className:"demo-bg",src:"/ani-background.jpg",alt:""}),(0,k.jsxs)("div",{className:"demo-content",children:[(0,k.jsxs)(i.Z,{className:"nav-header",gutter:[15,15],align:"middle",children:[(0,k.jsx)(o.Z,{className:"web-name",flex:"auto",children:"MyAnimeList"}),(0,k.jsx)(o.Z,{children:"Anime"}),(0,k.jsx)(o.Z,{children:"Manga"}),(0,k.jsx)(o.Z,{children:"Community"}),(0,k.jsx)(o.Z,{children:"Industry"}),(0,k.jsx)(o.Z,{children:"Watch"}),(0,k.jsx)(o.Z,{children:"Read"}),(0,k.jsx)(o.Z,{children:"Help"}),(0,k.jsx)(o.Z,{children:(0,k.jsx)(l.Z,{shape:"circle",icon:(0,k.jsx)(c.Z,{})})}),(0,k.jsx)(o.Z,{children:(0,k.jsx)(s.C,{children:"P"})})]}),(0,k.jsx)(A,{})]})]})}),(0,k.jsxs)("div",{className:"second-section",children:[(0,k.jsx)(i.Z,{children:(0,k.jsx)(o.Z,{span:24,children:(0,k.jsx)("h1",{children:"Highest Rated Anime"})})}),(0,k.jsx)("br",{}),(0,k.jsx)(R,{})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9302)}])},4654:function(){}},function(e){e.O(0,[25,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);