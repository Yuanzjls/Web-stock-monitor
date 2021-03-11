(this["webpackJsonpweek2-stock"]=this["webpackJsonpweek2-stock"]||[]).push([[0],{27:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(21),s=c.n(a),r=(c(27),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))}),i=c(3),l=c(10),o=c(4),u=c(6),b=c.n(u),d=c(11),j=c(0),p=c(12);c(49);function h(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],h=Object(n.useState)({priceChange:0,priceChangePercentage:0}),f=Object(o.a)(h,2),m=f[0],O=f[1],x=Object(n.useRef)(null),v=Object(n.useRef)(null),g=Object(n.useState)({currentPrice:0,highestPrice:0,lowestPrice:0,openPrice:0,previousPrice:0}),k=Object(o.a)(g,2),N=k[0],y=k[1],P=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(a),C="".concat("https://finnhub.io/api/v1/quote?symbol=").concat(e.name,"&token=").concat("c1433cn48v6s4a2e39q0");Object(n.useEffect)((function(){!P&&a&&x.current.focus(),P&&!a&&v.current.focus()}),[P,a]),Object(n.useEffect)(Object(d.a)(b.a.mark((function e(){var t,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return(c=Object(d.a)(b.a.mark((function e(){var t,c,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(C);case 3:n=e.sent,a={currentPrice:n.data.c,highestPrice:n.data.h,lowestPrice:n.data.l,openPrice:n.data.o,previousPrice:n.data.pc},y(a),t=a.currentPrice-a.previousPrice,c=Math.abs(t/a.previousPrice*100),O({priceChange:t,priceChangePercentage:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)},(t=function(){return c.apply(this,arguments)})(),n=setInterval((function(){t()}),6e4),e.abrupt("return",(function(){return clearInterval(n)}));case 5:case"end":return e.stop()}}),e)}))),[C]);var w=Object(j.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,l),u(""),s(!1)},ref:x,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"todo-label",htmlFor:e.id,children:"Input a stock name:"}),Object(j.jsx)("input",{id:e.id,className:"todo-text",type:"text",value:l,onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){s(!1)},children:["Cancel",Object(j.jsx)("span",{className:"visually-hidden",children:"Input a stock name:"})]}),Object(j.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(j.jsx)("span",{className:"visually-hidden",children:"Input a stock name:"})]})]})]}),S=Object(j.jsxs)("div",{className:"stack-small",children:[Object(j.jsxs)("div",{className:"c-cb",children:[Object(j.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name}),Object(j.jsx)("span",{className:"stock-price",children:N.currentPrice}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"stock-price",style:{color:m.priceChange>0?"green":"red"},children:[Number(m.priceChange).toFixed(2),"(",Number(m.priceChangePercentage).toFixed(2),"%)"]})]}),Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsxs)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},ref:v,children:["Edit ",Object(j.jsxs)("span",{className:"visually-hidden",children:[e.name," "]})]}),Object(j.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){e.deleteTask(e.id)},children:["Delete ",Object(j.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(j.jsx)("li",{className:"todo",children:a?w:S})}function f(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addTask(a),s("")},children:[Object(j.jsx)("h2",{className:"label-wrapper",children:Object(j.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"What stock do you want to add?"})}),Object(j.jsx)("input",{type:"text",placeholder:"Input a new stock",id:"new-todo-input",required:!0,className:"input input__lg",name:"text",autoComplete:"off",value:a,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"})]})}var m=c(22);c(12);var O=function(e){var t=Object(n.useState)(e.tasks),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)("All"),u=Object(o.a)(r,2),b=(u[0],u[1],function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(a.length)),d=Object(n.useRef)(null),p=a.map((function(e){return Object(j.jsx)(h,{id:e.id,name:e.name,deleteTask:v,editTask:g},e.id)})),O=1!==p.length?"stocks":"stock",x="".concat(p.length," ").concat(O);function v(e){var t=a.filter((function(t){return e!==t.id}));s(t)}function g(e,t){var c=a.map((function(c){return e===c.id?Object(l.a)(Object(l.a)({},c),{},{name:t}):c}));s(c)}return Object(n.useEffect)((function(){p.length-b===-1&&d.current.focus()}),[a.length,b]),Object(j.jsxs)("div",{className:"todoapp stack-large",children:[Object(j.jsx)("h1",{children:"Stock Prices"}),Object(j.jsx)(f,{addTask:function(e){var t={id:"todo-"+Object(m.a)(),name:e};s([].concat(Object(i.a)(a),[t]))}}),Object(j.jsx)("div",{className:"filters btn-group stack-exception"}),Object(j.jsx)("h2",{id:"list-heading",tabIndex:"-1",ref:d,children:x}),Object(j.jsx)("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:p})]})};s.a.render(Object(j.jsx)(O,{tasks:[{id:"todo-0",name:"STM"},{id:"todo-1",name:"TXN"}]}),document.getElementById("root")),r()}},[[48,1,2]]]);
//# sourceMappingURL=main.3c77b594.chunk.js.map