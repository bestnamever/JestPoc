(this["webpackJsonpjest-react"]=this["webpackJsonpjest-react"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(16),o=a.n(i),u=(a(23),a(6)),r=a(2),l=a(5),s=a(17),d=a.n(s),m=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),i=a[0],o=a[1],u=e.addUndoItem;return c.a.createElement("div",null,c.a.createElement("div",{className:"header","data-testid":"header"},c.a.createElement("div",{className:"header-content"},"TodoList",c.a.createElement("input",{placeholder:"Add Todo",className:"header-input","data-testid":"header-input",value:i,onChange:function(e){return o(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&i&&(u(i),o(""))}}))))},v=function(e){var t=e.list,a=e.changeStatus,n=e.handleBlur,i=e.valueChange,o=e.deleteItem;return c.a.createElement("div",{className:"undo-list","data-testid":"list"},c.a.createElement("div",{className:"undo-list-title"},"In progess",c.a.createElement("div",{"data-testid":"count",className:"undo-list-count"},t.length)),c.a.createElement("ul",{className:"undo-list-content"},t.map((function(e,t){return c.a.createElement("li",{className:"undo-list-item","data-testid":"list-item",key:t,onClick:function(){a(t)}},"div"===e.status?e.value:c.a.createElement("input",{className:"undo-list-input","data-testid":"input",value:e.value,onBlur:function(){return n(t)},onChange:function(e){return i(t,e.target.value)}}),c.a.createElement("div",{className:"undo-list-delete","data-testid":"delete-item",onClick:function(e){e.stopPropagation(),o(t)}},"-"))}))))};a(41);var f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){d.a.get("/undoList.json").then((function(e){i(e.data.data)})).catch((function(e){}))}),[]),c.a.createElement("div",null,c.a.createElement(m,{addUndoItem:function(e){var t=[].concat(Object(u.a)(a),[{status:"div",value:e}]);i(t)}}),c.a.createElement(v,{list:a,deleteItem:function(e){var t=Object(u.a)(a);t.splice(e,1),i(t)},changeStatus:function(e){var t=a.map((function(t,a){return e===a?Object(r.a)(Object(r.a)({},t),{},{status:"input"}):Object(r.a)(Object(r.a)({},t),{},{status:"div"})}));i(t)},handleBlur:function(e){var t=a.map((function(t,a){return e===a?Object(r.a)(Object(r.a)({},t),{},{status:"div"}):t}));i(t)},valueChange:function(e,t){var n=a.map((function(a,n){return e===n?Object(r.a)(Object(r.a)({},a),{},{value:t}):a}));i(n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.04e92a4d.chunk.js.map