(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(7),s=n.n(r),i=(n(12),n(4)),a=n(6),d=n(0);function l(e){var t=e.addTodo,n=c.a.useState(""),o=Object(a.a)(n,2),r=o[0],s=o[1];return Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(r),s("")},children:[Object(d.jsx)("input",{required:!0,type:"text",value:r,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{title:"Add task",children:"+"})]})}function j(e){var t=e.todo,n=e.index,o=e.completeTodo,c=e.removeTodo,r=e.text;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"todo-item-box",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(){return o(n)}}),Object(d.jsx)("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":"none",color:t.isCompleted?"green":""},children:t.text}),Object(d.jsx)("button",{onClick:function(){return c(n,r)},title:"Remove task from list",children:"X"})]})})}var u=function(){var e=function(e){var t=Object(i.a)(r);t.splice(e,1),s(t)},t=function(e){var t=Object(i.a)(r);t[e].isCompleted=!t[e].isCompleted,s(t)},n=c.a.useState([{text:"learn JS",isCompleted:!1},{text:"learn React",isCompleted:!1},{text:"learn Redux",isCompleted:!1}]),o=Object(a.a)(n,2),r=o[0],s=o[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("h1",{children:["You have ",r.length," Task"]}),Object(d.jsxs)("div",{className:"todo-list",children:[Object(d.jsx)(l,{addTodo:function(e){var t=[].concat(Object(i.a)(r),[{text:e}]);s(t)}}),Object(d.jsx)("ul",{children:r.map((function(n,o){return Object(d.jsx)("li",{className:"todo-item",style:{border:n.isCompleted?"1px solid green":""},children:Object(d.jsx)(j,{index:o,todo:n,completeTodo:t,removeTodo:e})},o)}))})]})]})};var x=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u,{})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.82dd23ea.chunk.js.map