(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var i=c(1),n=c.n(i),s=c(7),a=c.n(s),o=(c(13),c(14),c(8)),d=c(6),l=c(3),r=c.p+"static/media/todo.d27aeb37.png",j=c(0),u=function(){var t=Object(i.useState)(""),e=Object(l.a)(t,2),c=e[0],n=e[1],s=Object(i.useState)(function(){var t=localStorage.getItem("todo-list");return t?JSON.parse(t):[]}()),a=Object(l.a)(s,2),u=a[0],b=a[1],f=Object(i.useState)(!1),m=Object(l.a)(f,2),O=m[0],h=m[1],p=Object(i.useState)(),x=Object(l.a)(p,2),g=x[0],v=x[1],N=function(){if(c)if(c&&O)b(u.map((function(t){return t.id===g?Object(d.a)(Object(d.a)({},t),{},{todo:c}):t}))),h(!0),n(""),v(null);else{var t={id:(new Date).getTime().toString(),todo:c};b([].concat(Object(o.a)(u),[t])),n("")}else alert("Please write something inside the input field")};return Object(i.useEffect)((function(){localStorage.setItem("todo-list",JSON.stringify(u))}),[u]),Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:r,alt:"todo-images"}),Object(j.jsx)("figcaption",{children:"Add Your List..."})]}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"Add items",value:c,onChange:function(t){n(t.target.value)}}),O?Object(j.jsx)("i",{className:"fas fa-edit",title:"Update item",onClick:N}):Object(j.jsx)("i",{className:"fas fa-plus",title:"Add item",onClick:N})]}),Object(j.jsx)("div",{className:"showItems",children:u.map((function(t){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:t.todo}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"fas fa-edit add-btn",title:"Edit item",onClick:function(){return function(t){var e=u.find((function(e){return e.id===t}));console.log(e),h(!0),n(e.todo),v(t)}(t.id)}}),Object(j.jsx)("i",{className:"fas fa-trash-alt add-btn",title:"Delete item",onClick:function(){return function(t){console.log(t);var e=u.filter((function(e){return t!==e.id}));b(e)}(t.id)}})]})]},t.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:Object(j.jsx)("span",{children:"Checklist"})})})]})})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(u,{})})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),i(t),n(t),s(t),a(t)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.116440bb.chunk.js.map