(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c69f020"],{"1dde":function(e,t,a){var n=a("d039"),c=a("b622"),r=a("2d00"),o=c("species");e.exports=function(e){return r>=51||!n((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,a){"use strict";var n=a("a04b"),c=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var o=n(t);o in e?c.f(e,o,r(0,a)):e[o]=a}},"99af":function(e,t,a){"use strict";var n=a("23e7"),c=a("da84"),r=a("d039"),o=a("e8b5"),i=a("861d"),s=a("7b0b"),l=a("07fa"),d=a("8418"),u=a("65f0"),b=a("1dde"),f=a("b622"),v=a("2d00"),p=f("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",g=c.TypeError,m=v>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=b("concat"),N=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},V=!m||!h;n({target:"Array",proto:!0,forced:V},{concat:function(e){var t,a,n,c,r,o=s(this),i=u(o,0),b=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?o:arguments[t],N(r)){if(c=l(r),b+c>O)throw g(j);for(a=0;a<c;a++,b++)a in r&&d(i,b,r[a])}else{if(b>=O)throw g(j);d(i,b++,r)}return i.length=b,i}})},c6e3:function(e,t,a){"use strict";var n=function(e){return{all:e=e||new Map,on:function(t,a){var n=e.get(t);n?n.push(a):e.set(t,[a])},off:function(t,a){var n=e.get(t);n&&(a?n.splice(n.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var n=e.get(t);n&&n.slice().map((function(e){e(a)})),(n=e.get("*"))&&n.slice().map((function(e){e(t,a)}))}}},c=n();t["a"]=c},d504:function(e,t,a){"use strict";a.r(t);var n=a("7a23");function c(e,t,a,c,r,o){var i=Object(n["resolveComponent"])("Navbar"),s=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i),Object(n["createVNode"])(s)],64)}var r={class:"navbar navbar-expand-lg navbar-light bg-light"},o={class:"container-fluid"},i=Object(n["createElementVNode"])("a",{class:"navbar-brand",href:"#"},"螞蟻人甜點",-1),s=Object(n["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarNav"},d={class:"navbar-nav"},u={class:"nav-item"},b=Object(n["createTextVNode"])("產品列表"),f={class:"nav-item"},v=Object(n["createTextVNode"])("購物車"),p={class:"nav-item"},O=Object(n["createTextVNode"])("後台管理"),j={class:"bi bi-cart-fill fs-3 position-relative"},g={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6"},m=Object(n["createElementVNode"])("span",{class:"visually-hidden"},"unread messages",-1);function h(e,t,a,c,h,N){var V=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",r,[Object(n["createElementVNode"])("div",o,[i,s,Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("ul",d,[Object(n["createElementVNode"])("li",u,[Object(n["createVNode"])(V,{class:"nav-link",to:"/products"},{default:Object(n["withCtx"])((function(){return[b]})),_:1})]),Object(n["createElementVNode"])("li",f,[Object(n["createVNode"])(V,{class:"nav-link",to:"/cart"},{default:Object(n["withCtx"])((function(){return[v]})),_:1})]),Object(n["createElementVNode"])("li",p,[Object(n["createVNode"])(V,{class:"nav-link",to:"/admin/products"},{default:Object(n["withCtx"])((function(){return[O]})),_:1})])])]),Object(n["createElementVNode"])("a",{href:"#",onClick:t[0]||(t[0]=Object(n["withModifiers"])((function(){}),["prevent"]))},[Object(n["createElementVNode"])("i",j,[Object(n["createElementVNode"])("span",g,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(h.cartData.carts.length)+" ",1),m])])])])])}a("99af");var N=a("c6e3"),V={data:function(){return{cartData:{carts:[]}}},methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("clara-vue3","/cart")).then((function(t){e.cartData=t.data.data}))}},mounted:function(){var e=this;this.getCart(),N["a"].on("get-cart",(function(){e.getCart()}))}},x=a("6b0d"),E=a.n(x);const w=E()(V,[["render",h]]);var k=w,C={components:{Navbar:k}};const T=E()(C,[["render",c]]);t["default"]=T}}]);
//# sourceMappingURL=chunk-6c69f020.87f797ae.js.map