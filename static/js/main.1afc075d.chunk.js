(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(83)},43:function(e,t,a){},44:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),c=a.n(r),l=(a(43),a(37)),d=a(4);a(44);var i=function(e,t){switch(t.type){case"add-todo":return{todos:e.todos.push(t.payload)};case"remove-todo":var a=e.todos.indexOf(t.payload);return{todos:e.todos.splice(a,1,t.payload)};default:throw new Error}},s=a(3),u=function(e){var t=e.todos,a=e.saveTodo,r=(e.deleteTodo,Object(n.useReducer)(i,{todos:["example task 1"]})),c=Object(d.a)(r,2),l=(c[0],c[1],Object(n.useState)("")),u=Object(d.a)(l,2),p=u[0],m=u[1],b=function(e){m(e.target.value)},f=function(){p&&(a(p),m(""))};return o.a.createElement(s.c,{droppableId:"active"},function(e,a){return o.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps,{className:"todo-list"}),o.a.createElement("h3",null,"Active"),o.a.createElement("ul",null,t.map(function(e,t){return o.a.createElement(s.b,{key:t,draggableId:t+1,index:t},function(t,a){return o.a.createElement("li",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),e)})})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",placeholder:"Add a todo...",onChange:b,value:p}),o.a.createElement("button",{onClick:f},"Add")))})},p=function(e){var t=e.completed,a=(e.saveTodo,e.deleteTodo,Object(n.useState)("")),r=Object(d.a)(a,2);r[0],r[1];return o.a.createElement(s.c,{droppableId:"completed"},function(e,a){return o.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps,{className:"todo-list"}),o.a.createElement("h3",null,"Completed"),o.a.createElement("ul",null,t.map(function(e,t){return o.a.createElement(s.b,{key:t,draggableId:t+1,index:t},function(t,a){return o.a.createElement("li",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),e)})})))})},m=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(d.a)(c,2),m=i[0];i[1];return o.a.createElement(s.a,{onDragEnd:function(e){if(null!=e.destination&&(console.log(e),e.source.droppableId!==e.destination.droppableId))switch(e.destination.droppableId){case"completed":console.log("dropped on completed");var t=a.splice(e.source.index,1);m.splice(e.destination.index,0,t);break;case"active":console.log("dropped on active");var n=m.splice(e.source.index,1);a.splice(e.destination.index,0,n)}}},o.a.createElement("div",{className:"App"},o.a.createElement(u,{saveTodo:function(e){var t=e.trim();t.length>0&&r([].concat(Object(l.a)(a),[t]))},todos:a}),o.a.createElement("div",{className:"dragdrop-cue"},"Drag & Drop",o.a.createElement("br",null),"<--\xa0\xa0\xa0\xa0\xa0--\x3e"),o.a.createElement(p,{completed:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.1afc075d.chunk.js.map