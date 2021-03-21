(this["webpackJsonplearn-react-form-api-async"]=this["webpackJsonplearn-react-form-api-async"]||[]).push([[0],{10:function(e,t,n){e.exports={App:"App_App__1mjoX",container:"App_container__evflD"}},11:function(e,t,n){e.exports={card:"Card_card__2mVlQ",noData:"Card_noData__3tB3C"}},13:function(e,t,n){e.exports={h1:"Header_h1__1h9AH"}},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r,a,c,i=n(2),s=n(12),l=(n(18),n(3));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function j(e,t){var n=e.title,s=e.titleId,l=u(e,["title","titleId"]);return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#F9EBDE",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":s},l),n?i.createElement("title",{id:s},n):null,r||(r=i.createElement("circle",{cx:30,cy:50,fill:"#eba3b5",r:20},i.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"}))),a||(a=i.createElement("circle",{cx:70,cy:50,fill:"#815854b4",r:20},i.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"0s"}))),c||(c=i.createElement("circle",{cx:30,cy:50,fill:"#eba3b5",r:20},i.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"}),i.createElement("animate",{attributeName:"fill-opacity",values:"0;0;1;1",calcMode:"discrete",keyTimes:"0;0.499;0.5;1",dur:"1s",repeatCount:"indefinite"}))))}var b=i.forwardRef(j),d=(n.p,n(10)),h=n.n(d),m=n(8),p=n(11),f=n.n(p),O=n(0);function x(e){var t=e.data;return t?t.map((function(e){return Object(O.jsx)("li",{className:f.a.card,children:Object(O.jsxs)("figure",{children:[Object(O.jsx)("img",{src:e.medium_cover_image,alt:""}),Object(O.jsx)("figcaption",{children:Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title})})})]})},e.url)})):Object(O.jsxs)("figure",{className:f.a.noData,children:[Object(O.jsx)("img",{src:"assets/nodata.png",alt:"\uac80\uc0c9 \uacb0\uacfc \uc5c6\uc74c"}),Object(O.jsx)("figcaption",{children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4..\u3160"})]})}var v=n(13),g=n.n(v);function y(e){var t=e.link,n=e.children;return Object(O.jsx)("h1",{className:g.a.h1,children:Object(O.jsx)("a",{href:t,children:n})})}var _=n(5),k=n.n(_),w=n(9);function E(e){var t=e.children;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:k.a.container,children:Object(O.jsx)("div",{className:"search-form",children:t})})})}E.Input=function(e){var t=e.id,n=e.value,r=e.onChange,a=e.onKeyUp;return Object(O.jsx)("input",{type:"text",name:t,value:n,id:t,className:k.a.search,placeholder:"\uc601\ud654 \uc81c\ubaa9\uc73c\ub85c \uac80\uc0c9",onChange:r,onKeyUp:a})},E.Button=function(e){var t=e.onClick;return Object(O.jsx)("button",{className:k.a.searchBtn,type:"button",onClick:t,children:Object(O.jsx)(m.a,{icon:w.a})})};var N="https://yts.mx/api/v2/list_movies.json?limit=50&query_term=";var C=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(null),c=Object(l.a)(a,2),s=c[0],o=c[1],u=Object(i.useState)(!0),j=Object(l.a)(u,2),d=j[0],m=j[1],p=Object(i.useState)(""),f=Object(l.a)(p,2),v=f[0],g=f[1],_=Object(i.useState)(N),k=Object(l.a)(_,2),w=k[0],C=k[1],S=function(e){(e.target.matches("button")||"Enter"===e.key)&&""!==v&&(C(N+v),g(""),m(!0))};return Object(i.useEffect)((function(){fetch(w).then((function(e){return e.json()})).then((function(e){r(e.data.movies),m(!1)})).catch((function(e){o(e)}))}),[w]),d?Object(O.jsx)(b,{}):s?Object(O.jsx)("div",{role:"alert",children:s.message}):Object(O.jsxs)("div",{className:h.a.App,children:[Object(O.jsx)(y,{link:"/",children:"MY\uc601\ud654\uad00"}),Object(O.jsxs)(E,{children:[Object(O.jsx)(E.Input,{id:"searchMovie",value:v,onChange:function(e){g(e.target.value)},onKeyUp:S}),Object(O.jsx)(E.Button,{onClick:S})]}),Object(O.jsx)("div",{className:"movieArea",lang:"ko",children:Object(O.jsx)("ul",{className:h.a.container,children:Object(O.jsx)(x,{data:n})})})]})};Object(s.render)(Object(O.jsx)(i.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={container:"SearchForm_container__2lclL",search:"SearchForm_search__RtKhP",searchBtn:"SearchForm_searchBtn__2wf-U"}}},[[25,1,2]]]);
//# sourceMappingURL=main.f6e13969.chunk.js.map