(this["webpackJsonpreact-simple-todo"]=this["webpackJsonpreact-simple-todo"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r,o=n(0),c=n.n(o),a=n(14),i=n.n(a),s=n(8),l=n(19),b=n(24),u=n(4),d=n(2),j=n(9),O=function(e){return function(t){var n=t.setSelf,r=t.onSet,o=localStorage.getItem(e);null!=o?n(JSON.parse(o)):console.log(o),r((function(t){localStorage.setItem(e,JSON.stringify(t))}))}},f=Object(s.b)({key:"categories",default:(r={},Object(j.a)(r,"TO_DO","TO_DO"),Object(j.a)(r,"DOING","DOING"),Object(j.a)(r,"DONE","DONE"),r),effects_UNSTABLE:[O("categories")]}),h=Object(s.b)({key:"category",default:"TO_DO"}),g=Object(s.b)({key:"toDo",default:[],effects_UNSTABLE:[O("toDoState")]}),m=Object(s.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(g),r=t(h);return n.filter((function(e){return e.category===r}))}}),p=n(6),x=n(18),y=n(3);var v=function(){var e=Object(s.f)(g),t=Object(s.e)(h),n=Object(x.a)(),r=n.register,o=n.handleSubmit,c=n.setValue;return Object(y.jsxs)("form",{onSubmit:o((function(n){var r=n.toDo;e((function(e){return[{text:r,id:Date.now(),category:t}].concat(Object(p.a)(e))})),c("toDo","")})),children:[Object(y.jsx)("input",Object(u.a)(Object(u.a)({},r("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(y.jsx)("button",{children:"Add"})]})};var S=function(e){var t=e.text,n=e.category,r=e.id,o=Object(s.e)(f),c=Object(s.f)(g),a=function(e){var n=e.currentTarget.name;c((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:t,id:r,category:n};return[].concat(Object(p.a)(e.slice(0,o)),[c],Object(p.a)(e.slice(o+1)))}))};return Object(y.jsxs)("li",{children:[Object(y.jsx)("span",{children:t}),Object.values(o).map((function(e){return n!==e&&Object(y.jsx)("button",{name:e,onClick:a,children:e},e)}))]})};var k=function(){var e=Object(s.f)(f),t=Object(x.a)(),n=t.register,r=t.handleSubmit,o=t.setValue;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("form",{onSubmit:r((function(t){var n=t.category;e((function(e){return Object(u.a)(Object(j.a)({},n,n),e)})),o("category","")})),children:[Object(y.jsx)("input",Object(u.a)(Object(u.a)({},n("category",{required:"Please write a New Category"})),{},{placeholder:"Write a New Category"})),Object(y.jsx)("button",{children:"Add"})]})})};var D,w=function(){var e=Object(s.e)(f),t=Object(s.e)(m),n=Object(s.d)(h),r=Object(d.a)(n,2),o=r[0],c=r[1];return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"To Dos"}),Object(y.jsx)("hr",{}),Object(y.jsx)("select",{value:o,onInput:function(e){c(e.currentTarget.value)},children:Object.keys(e).map((function(e){return Object(y.jsx)("option",{value:"".concat(e),children:e},e)}))}),Object(y.jsx)(v,{}),null===t||void 0===t?void 0:t.map((function(e){return Object(y.jsx)(S,Object(u.a)({},e),e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("h1",{children:"Create your own categories!!!"}),Object(y.jsx)(k,{})]})},q=Object(l.b)(D||(D=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var T=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(q,{}),Object(y.jsx)(w,{})]})};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(s.a,{children:Object(y.jsx)(l.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(y.jsx)(T,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ff39e26f.chunk.js.map