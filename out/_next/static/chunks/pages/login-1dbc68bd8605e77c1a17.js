_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{SGa5:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r);function u(t,e,n,r,o,u,a){try{var c=t[u](a),i=c.value}catch(s){return void n(s)}c.done?e(i):Promise.resolve(i).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){u(a,r,o,c,i,"next",t)}function i(t){u(a,r,o,c,i,"throw",t)}c(void 0)}))}}var c=n("rePB"),i=n("q1tI"),s=n.n(i),p=n("nOHt");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(){return(b=a(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(e,l(l({},n),{},{headers:l({"Content-Type":"application/json"},n.headers),body:n.body?JSON.stringify(n.body):null})).then(function(){var t=a(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.ok,t.t1=e.status,t.t2=e.statusText,t.next=5,e.json();case 5:return t.t3=t.sent,t.abrupt("return",{ok:t.t0,status:t.t1,statusText:t.t2,body:t.t3});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(t,e){return b.apply(this,arguments)},O={login:function(t){return a(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("".concat("https://api-auth-dev.azurewebsites.net","/Auth/Autenticar"),{method:"POST",body:t}).then(function(){var t=a(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=2;break}throw new Error("Usu\xe1rio ou senha inv\xe1lidos");case 2:return t.abrupt("return",{body:e.body});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},y=s.a.createElement;function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(t){var e=Object(p.useRouter)(),n=Object(i.useState)({email:"lucassanti_@hotmail.com",password:"#Santi123"}),r=n[0],u=n[1];function s(t){t.preventDefault();var e=t.target.name,n=t.target.value;u((function(t){return d(d({},t),{},Object(c.a)({},e,n))}))}function f(){return(f=a(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,O.login(r).then((function(){e.push("/home")})).catch((function(t){alert("Usu\xe1rio ou senha inv\xe1lidos")}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return y("div",null,y("h1",null,"P\xe1gina de Login"),y("form",{type:"submit",onSubmit:function(t){return f.apply(this,arguments)}},y("input",{name:"email",label:"E-mail",onChange:s,value:r.email}),y("input",{name:"password",label:"Senha",onChange:s,value:r.password}),y("button",null,"Entrar")),y("pre",null,JSON.stringify(r,null,4)))}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},u6Hu:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("SGa5")}])}},[["u6Hu",0,1,2]]]);