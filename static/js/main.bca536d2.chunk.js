(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(4),s=n.n(a),i=n(2),r=(n(11),n(5)),j=n(6),l=n.n(j),u=n(0);var d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),j=s[0],d=s[1],h=Object(c.useState)(!1),b=Object(i.a)(h,2),O=(b[0],b[1]);return Object(u.jsxs)("div",{className:"outer",children:[Object(u.jsxs)("div",{className:"inner",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{children:"Random Quote Generator"})}),Object(u.jsx)("div",{className:"btn-div",children:Object(u.jsx)("button",{className:"btn",onClick:function(){O(!0),fetch("https://api.quotable.io/random/").then((function(e){return e.json()})).then((function(e){console.log(e),console.log(e.content),console.log(e.author),o(e.content),d(e.author)})).catch((function(e){console.error(e)}))},children:"Get Quote"})}),function(){if(n)return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("div",{className:"quote",children:['" ',n,' "']}),Object(u.jsxs)("div",{className:"author",children:["~ ",j]})]})}()]}),Object(u.jsxs)("div",{className:"copyright",children:[Object(u.jsx)(r.Icon,{icon:l.a,id:"icon"}),Object(u.jsx)("a",{href:"https://github.com/TanvNaik",target:"_blank",children:"Tanvi Naik"})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.bca536d2.chunk.js.map