(this.webpackJsonpfcc2=this.webpackJsonpfcc2||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),r=(n(11),n(4)),o=n.n(r),l=n(6),j=n(2),p=(n(13),n(0)),u=function(e){var t=e.currentPage,n=e.pagesArray,c=e.onPageClick,a=e.onDirClick;return Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("div",{className:"pagination__item",onClick:function(){return a(t,"backwards")},children:"\xab"}),n.map((function(e){return Object(p.jsx)("div",{onClick:function(){return c(e)},className:e-1===t?"pagination__item current":"pagination__item",children:e},e)})),Object(p.jsx)("div",{className:"pagination__item",onClick:function(){return a(t)},children:"\xbb"})]})},d=(n(15),function(){return Object(p.jsx)("div",{className:"loaderWrap",children:Object(p.jsx)("div",{className:"loadingio-spinner-blocks-mty7grqp7kl",children:Object(p.jsxs)("div",{className:"ldio-qw2vmiyfhg",children:[Object(p.jsx)("div",{style:{left:"38px",top:"38px",animationDelay:"0s"}}),Object(p.jsx)("div",{style:{left:"80px",top:"38px",animationDelay:"0.125s"}}),Object(p.jsx)("div",{style:{left:"122px",top:"38px",animationDelay:"0.25s"}}),Object(p.jsx)("div",{style:{left:"38px",top:"80px",animationDelay:"0.875s"}}),Object(p.jsx)("div",{style:{left:"122px",top:"80px",animationDelay:"0.375s"}}),Object(p.jsx)("div",{style:{left:"38px",top:"122px",animationDelay:"0.75s"}}),Object(p.jsx)("div",{style:{left:"80px",top:"122px",animationDelay:"0.625s"}}),Object(p.jsx)("div",{style:{left:"122px",top:"122px",animationDelay:"0.5s"}})]})})})}),b="https://www.codewars.com/api/v1/users/catchaser/code-challenges/completed?page=",x="https://www.codewars.com/kata/",f="backwards";var m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(j.a)(s,2),r=i[0],m=i[1],O=Object(c.useState)(0),h=Object(j.a)(O,2),v=h[0],g=h[1];Object(c.useEffect)((function(){k().then()}),[r]);var y=Object(c.useRef)(),k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b).concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.data),g(n.totalPages);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){for(var e=[],t=1;t<=v;t++)e.push(t);return e}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u,{currentPage:r,pagesArray:w,onPageClick:function(e){y.current.scrollTo(0,0),m(e-1)},onDirClick:function(e,t){var n=t===f;switch(e){case 0:m(n?v-1:r+1);break;case v-1:m(n?r-1:0);break;default:m(n?r-1:r+1)}y.current.scrollTo(0,0)}}),Object(p.jsxs)("p",{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u044b\u0439 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c CodeWars Code Challenges API.",Object(p.jsx)("br",{})," \u041f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f \u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0437\u0430\u0434\u0430\u0447\u0438."]}),!n.length&&Object(p.jsx)(d,{}),Object(p.jsx)("div",{className:"listWrapper",ref:y,children:n.map((function(e){var t=e.id,n=e.completedAt,c=e.name,a=n.substring(0,n.indexOf("T")).split("-").reverse().join(".");return Object(p.jsxs)("div",{className:"listWrapper__item",children:[Object(p.jsx)("a",{target:"_blank",href:"".concat(x).concat(t),children:c}),Object(p.jsxs)("small",{children:["\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 ",a]})]},t)}))})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.3c79c821.chunk.js.map