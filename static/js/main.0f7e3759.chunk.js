(this["webpackJsonpUchi-ru-challenge"]=this["webpackJsonpUchi-ru-challenge"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(17),s=a.n(i),r=a(11),l=a(9),d=a(7),u=a(2),o=a(18),h=(a(26),a(19)),j=a(20),b={Accept:"application/json","Content-Type":"application/json","x-api-key":"fe7a77c9-2ba0-4e7e-9fc8-f59582c8a99a"},f=new(function(){function e(t){var a=t.baseUrl,c=t.headers;Object(h.a)(this,e),this._baseURL=a,this._headers=c}return Object(j.a)(e,[{key:"getCats",value:function(e){return fetch("".concat(this._baseURL,"?limit=").concat(15,"&page=").concat(e),{headers:this._headers}).then((function(e){return 200===e.status?e.json():Promise.reject("\u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})).then((function(e){return e}))}}]),e}())({baseUrl:"https://api.thecatapi.com/v1/images/search",headers:b}),O=(a(27),a(28),a(29),a(1));var k=function(e){var t=e.activeState,a=e.itemText,c=e.handleClick,n=t?"nav__item_active":"";return Object(O.jsx)("button",{className:"nav__item ".concat(n),onClick:c,children:a})};var p=function(e){var t=e.handleAllCatsClick,a=e.handleLikedCatsClick,n=Object(u.h)(),i=Object(c.useState)(!1),s=Object(d.a)(i,2),r=s[0],l=s[1],o=Object(c.useState)(!1),h=Object(d.a)(o,2),j=h[0],b=h[1],f=Object(c.useCallback)((function(){switch(n.pathname){case"/all-cats":l(!0),b(!1);break;case"/liked-cats":b(!0),l(!1);break;case"/not-found":b(!1),l(!1);break;default:b(!1),l(!1)}}),[n]);return Object(c.useEffect)((function(){f()}),[f]),Object(O.jsxs)("nav",{className:"nav",children:[Object(O.jsx)(k,{activeState:r,handleClick:t,itemText:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"}),Object(O.jsx)(k,{activeState:j,handleClick:a,itemText:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})]})};var v=function(e){var t=e.handleAllCatsClick,a=e.handleLikedCatsClick;return Object(O.jsx)("header",{className:"header",children:Object(O.jsx)(p,{handleAllCatsClick:t,handleLikedCatsClick:a})})};a(36),a(37),a(38),a(39);var m=function(e){var t=e.handleLike,a=e.isLiked,c=e.isDisabled,n=a?"like-button_active":"";return Object(O.jsx)("button",{className:"like-button ".concat(n),onClick:t,disabled:!!c})};var C=function(e){var t=e.cardItem,a=e.handleLike,n=e.handleDislike,i=e.savedCards,s=e.path,r=e.isDisabled,l=Object(c.useState)(!1),u=Object(d.a)(l,2),o=u[0],h=u[1],j=Object(c.useCallback)((function(){var e=i.some((function(e){return e.id===t.id}));h(!!e)}),[i]);return Object(c.useEffect)((function(){j()}),[j,s]),Object(O.jsx)("li",{className:"card",style:{backgroundImage:"url(".concat(t.url,")")},children:Object(O.jsx)(m,{isDisabled:r,handleLike:function(){o?(n(t),h(!1)):(a(t),h(!0))},isLiked:o})})};a(40);var g=function(){return Object(O.jsx)("p",{className:"more-cats-loading",children:"... \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0435\u0449\u0435 \u043a\u043e\u0442\u0438\u043a\u043e\u0432 ..."})},x=n.a.forwardRef((function(e,t){var a=e.allCards,c=e.handleLike,n=e.handleDislike,i=e.savedCards,s=e.path,r=e.isDisabled;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{className:"card-list",children:a.images.map((function(e,t){return Object(O.jsx)(C,{isDisabled:r,path:s,cardItem:e,handleLike:c,handleDislike:n,savedCards:i},t)}))}),a.fetching&&Object(O.jsx)(g,{}),Object(O.jsx)("div",{className:"card-list__bottom-boundary",ref:t})]})})),_=n.a.forwardRef((function(e,t){var a=e.allImages,c=e.handleLike,n=e.handleDislike,i=e.savedCards,s=e.path,r=e.isDisabled;return Object(O.jsx)(x,{path:s,handleLike:c,handleDislike:n,allCards:a,ref:t,savedCards:i,isDisabled:r})}));a(41);var D=function(e){var t=e.header,a=e.description;return Object(O.jsxs)("div",{className:"notfound",children:[Object(O.jsx)("h2",{className:"notfound__heading",children:t}),Object(O.jsx)("p",{className:"notfound__paragraph",children:a}),Object(O.jsx)("div",{className:"notfound__image"})]})};var E=function(e){var t=e.path,a=e.catData,c=e.handleLike,n=e.handleDislike,i=e.savedCards,s=e.isDisabled;return a.length>0?Object(O.jsx)("ul",{className:"card-list card-list__liked",children:a.map((function(e,a){return Object(O.jsx)(C,{isDisabled:s,path:t,cardItem:e,handleLike:c,handleDislike:n,savedCards:i},a)}))}):Object(O.jsx)(D,{header:"\u043c\u044f\u0443",description:"\u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043a\u043e\u0442\u0438\u043a\u043e\u0432"})};var I=function(){var e=Object(u.g)(),t=Object(c.useState)("/"),a=Object(d.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)([]),r=Object(d.a)(s,2),h=r[0],j=r[1],b=Object(c.useState)(!1),k=Object(d.a)(b,2),p=k[0],m=k[1],C=new o.a("savedCatsDB");C.version(1).stores({cats:"++id, catId, url"}),C.open().catch((function(e){console.log(e)}));var g,x,I=Object(c.useCallback)((function(){C.cats.toArray().then((function(e){j(e)}))}),[n]),L=function(e){if(m(!0),!h.find((function(t){return t.id===e.id}))){var t={id:e.id,catId:e.id,url:e.url};C.cats.add(t).then((function(){I(),m(!1)}))}},N=function(e){m(!0),h.find((function(t){return t.id===e.id}))&&C.cats.delete(e.id).then((function(){I(),m(!1)}))},S=Object(c.useReducer)((function(e,t){switch(t.type){case"NEXT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{page:e.page+1});default:return e}}),{page:0}),A=Object(d.a)(S,2),y=A[0],T=A[1],G=Object(c.useReducer)((function(e,t){switch(t.type){case"STACK_IMAGES":return Object(l.a)(Object(l.a)({},e),{},{images:e.images.concat(t.images)});case"FETCHING_IMAGES":return Object(l.a)(Object(l.a)({},e),{},{fetching:t.fetching});default:return e}}),{images:[],fetching:!0}),w=Object(d.a)(G,2),F=w[0],R=w[1],M=Object(c.useRef)(null);return g=y,x=R,Object(c.useEffect)((function(){x({type:"FETCHING_IMAGES",fetching:!0}),f.getCats(g.page).then((function(e){x({type:"STACK_IMAGES",images:e}),x({type:"FETCHING_IMAGES",fetching:!1})})).catch((function(e){return x({type:"FETCHING_IMAGES",fetching:!1}),e}))}),[x,g.page]),function(e,t,a){var n=Object(c.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&t({type:"NEXT_PAGE"})}))})).observe(e)}),[t]);Object(c.useEffect)((function(){e.current&&n(e.current)}),[n,e,a])}(M,T,n),Object(c.useEffect)((function(){I()}),[I]),Object(c.useEffect)((function(){i(e.location.pathname)}),[e,n]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(v,{handleAllCatsClick:function(){e.push("/all-cats"),i("/all-cats")},handleLikedCatsClick:function(){e.push("/liked-cats"),i("/liked-cats")}}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.a,{exact:!0,from:"/",to:"/all-cats"}),Object(O.jsx)(u.b,{path:"/all-cats",children:Object(O.jsx)(_,{path:n,allImages:F,ref:M,handleLike:L,handleDislike:N,savedCards:h,isDisabled:p})}),Object(O.jsx)(u.b,{path:"/liked-cats",children:Object(O.jsx)(E,{path:n,handleLike:L,handleDislike:N,savedCards:h,catData:h,isDisabled:p})}),Object(O.jsx)(u.b,{push:!0,path:"/not-found",children:Object(O.jsx)(D,{header:"404",description:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430, \u043f\u043b\u0430\u043a"})}),Object(O.jsx)(u.a,{from:"*",to:"/not-found"})]})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(r.a,{basename:"/",children:Object(O.jsx)(I,{})})}),document.getElementById("root")),L()}},[[42,1,2]]]);
//# sourceMappingURL=main.0f7e3759.chunk.js.map