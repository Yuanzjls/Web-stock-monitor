(this["webpackJsonpweek2-stock"]=this["webpackJsonpweek2-stock"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},61:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(10),r=c.n(s),i=(c(34),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))}),o=c(5),l=(c(35),c(9)),u=c(28),b=c(12),d=c(29),p=Object(b.b)({name:"stock",initialState:[{id:"stock-0",symbol:"STM",priceInfo:{pricePre:0,priceCur:0}},{id:"stock-1",symbol:"TXN",priceInfo:{pricePre:0,priceCur:0}},{id:"stock-2",symbol:"AMD",priceInfo:{pricePre:0,priceCur:0}},{id:"stock-3",symbol:"MSFT",priceInfo:{pricePre:0,priceCur:0}},{id:"stock-4",symbol:"INTC",priceInfo:{pricePre:0,priceCur:0}}],reducers:{addStock:function(e,t){return[].concat(Object(u.a)(e),[{id:"stock-"+Object(d.a)(),symbol:t.payload.symbol,priceInfo:t.payload.priceInfo}])},deleteStock:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},editStock:function(e,t){return e.map((function(e){return e.id===t.payload.id?Object(l.a)(Object(l.a)({},e),{},{symbol:t.payload.symbol,priceInfo:t.payload.priceInfo}):e}))},updateStock:function(e,t){return e.map((function(e,c){return Object(l.a)(Object(l.a)({},e),{},{priceInfo:t.payload[c].priceInfo})}))}}}),j=p.actions,m=j.addStock,f=j.deleteStock,h=j.editStock,O=j.updateStock,k=function(e){return e.stock},y=p.reducer,x=c(4),v=c(6),g=c.n(v);function N(e){return"".concat("https://finnhub.io/api/v1/quote?symbol=").concat(e,"&token=").concat("c1433cn48v6s4a2e39q0")}var I=c(1);function C(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(x.b)();return Object(I.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),r((t=a,function(e,c){c().stock.map((function(e){return e.symbol})).includes(t)?alert(t+" is already on the watch list"):g.a.get(N(t),{timeout:500}).then((function(c){var n={symbol:t,priceInfo:{pricePre:c.data.pc,priceCur:c.data.c}};e(m(n))})).catch((function(e){"ECONNABORTED"===e.code&&alert("The "+t+" is not a stock symbol"),console.log(e)}))})),s("")},children:[Object(I.jsx)("h2",{className:"label-wrapper",children:Object(I.jsx)("label",{htmlFor:"new-stock-input",className:"label__lg",children:"What stock do you want to add?"})}),Object(I.jsx)("input",{type:"text",placeholder:"Input a new stock",id:"new-stock-input",required:!0,className:"input input__lg",name:"text",autoComplete:"off",value:a,onChange:function(e){s(e.target.value)}}),Object(I.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"})]})}c(61);function S(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],b=Object(n.useState)(!0),d=Object(o.a)(b,2),p=d[0],j=d[1],m=Object(x.b)(),O=Object(n.useMemo)((function(){var t=e.priceInfo.priceCur-e.priceInfo.pricePre;return{priceChange:t,priceChangePercentage:Math.abs(t/e.priceInfo.pricePre*100)}}),[e.priceInfo.priceCur,e.priceInfo.pricePre]),k=O.priceChange,y=O.priceChangePercentage;var v=Object(I.jsxs)("form",{className:"stack-small",onSubmit:function(t){var c;t.preventDefault(),m((c={id:e.id,symbol:l},function(e,t){t().stock.map((function(e){return e.symbol})).includes(c.symbol)?alert(c.symbol+" is already on the watch list"):g.a.get(N(c.symbol),{timeout:500}).then((function(t){var n={id:c.id,symbol:c.symbol,priceInfo:{pricePre:t.data.pc,priceCur:t.data.c}};e(h(n))})).catch((function(e){"ECONNABORTED"===e.code&&alert("The "+c.symbol+" is not a stock symbol"),console.log(e)}))})),u(""),s(!1)},children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{className:"stock-label",htmlFor:e.id,children:"Input a stock name:"}),Object(I.jsx)("input",{id:e.id,className:"stock-text",type:"text",value:l,onChange:function(e){u(e.target.value)}})]}),Object(I.jsxs)("div",{className:"btn-group",children:[Object(I.jsxs)("button",{type:"button",className:"btn stock-cancel",onClick:function(){s(!1)},children:["Cancel",Object(I.jsx)("span",{className:"visually-hidden",children:"Input a stock name:"})]}),Object(I.jsxs)("button",{type:"submit",className:"btn btn__primary stock-edit",children:["Save",Object(I.jsx)("span",{className:"visually-hidden",children:"Input a stock name:"})]})]})]}),C=Object(I.jsxs)("div",{className:"stack-small",onMouseOver:function(){j(!1)},onMouseOut:function(){j(!0)},children:[Object(I.jsx)("div",{className:"c-cb",children:Object(I.jsxs)("div",{className:"stock-container",children:[Object(I.jsx)("label",{className:"stock-label",htmlFor:e.id,children:e.symbol}),Object(I.jsxs)("div",{children:[Object(I.jsx)("span",{className:"stock-price",children:e.priceInfo.priceCur}),Object(I.jsx)("br",{}),Object(I.jsxs)("span",{className:"stock-price",style:{color:k>0?"green":"red"},children:[k>0?"+":"",Number(k).toFixed(2)," (",Number(y).toFixed(2),"%)",Object(I.jsx)("br",{})]})]})]})}),Object(I.jsxs)("div",{className:"btn-group",style:{visibility:p?"hidden":"visible"},children:[Object(I.jsxs)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},children:["Edit ",Object(I.jsxs)("span",{className:"visually-hidden",children:[e.symbol," "]})]}),Object(I.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){m(f({id:e.id}))},children:["Delete ",Object(I.jsx)("span",{className:"visually-hidden",children:e.name})]})]}),Object(I.jsx)("hr",{})]});return Object(I.jsx)("li",{className:"stock",children:a?v:C})}var P=c(27),w=c.n(P);var _=function(){var e=Object(n.useState)(w()().format("LT")),t=Object(o.a)(e,2),c=t[0],a=(t[1],Object(x.c)(k)),s=a.length,r=s>1?"stocks":"stock",i="".concat(s," ").concat(r),l=Object(x.b)();return function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e})),Object(n.useEffect)((function(){function e(){c.current()}if(null!==t){e();var n=setInterval(e,t);return function(){return clearInterval(n)}}}),[t])}((function(){return l((e=a,function(t,c){var n=e.map((function(e){return{apiUrl:N(e.symbol)}})).map((function(e){return g()(e.apiUrl)}));g.a.all(n).then(g.a.spread((function(){for(var e=arguments.length,c=new Array(e),n=0;n<e;n++)c[n]=arguments[n];var a=c.map((function(e){return{priceInfo:{pricePre:e.data.pc,priceCur:e.data.c}}}));console.log("fetch success"),t(O(a))}))).catch((function(e){console.log(e)}))}));var e}),1e4),Object(I.jsxs)("div",{className:"stockapp stack-large",children:[Object(I.jsx)("h1",{children:"Stock Prices"}),Object(I.jsxs)("p",{style:{textAlign:"center"},children:["Update at ",c]}),Object(I.jsx)(C,{}),Object(I.jsx)("div",{className:"filters btn-group stack-exception"}),Object(I.jsx)("h2",{id:"list-heading",tabIndex:"-1",children:i}),Object(I.jsx)("ul",{role:"list",className:"stock-list stack-large stack-exception",children:a.map((function(e){return Object(I.jsx)(S,{id:e.id,symbol:e.symbol,priceInfo:e.priceInfo},e.id)}))})]})},T=c(8),F=Object(b.a)({reducer:{stock:y},middleware:[T.a]});r.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(x.a,{store:F,children:Object(I.jsx)(_,{})})}),document.getElementById("root")),i()}},[[65,1,2]]]);
//# sourceMappingURL=main.3d7ae23c.chunk.js.map