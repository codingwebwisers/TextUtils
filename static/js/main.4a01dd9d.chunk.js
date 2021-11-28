(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));var i=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})};function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control my-4",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"#042743"},value:n,onChange:function(e){s(e.target.value)},id:"myTextArea",rows:"8"})}),Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-primary  mx-3",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to Uppercase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to Lowercase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(t){s(t.target.value=""),e.showAlert("Text has been cleared!","success")},children:"Clear all"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(t){var a=document.getElementById("myTextArea");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Text is copied to clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Removed extra spaces!","success")},children:"Remove Spaces"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var t=n.slice(0,1).toUpperCase()+n.slice(1,n.length);s(t),e.showAlert("First letter is converted to Capital!","success")},children:"First Letter Capital"})]})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes to read."]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter Something in the textbox to preview here."})]})]})}b.defaultProps={title:"Set Your Title Here..",aboutText:"Default about text"};var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),u=r[0],h=r[1],j=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"TextUtils",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",j("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(o.jsx)(i,{alert:u}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:j,heading:"Enter the text to analyze",mode:a})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.4a01dd9d.chunk.js.map