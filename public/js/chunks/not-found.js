"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8202],{6632:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(3645),r=n.n(a)()((function(t){return t[1]}));r.push([t.id,".sync-alt[data-v-0249f6ea]{-webkit-animation:spin-data-v-0249f6ea 1s linear infinite;animation:spin-data-v-0249f6ea 1s linear infinite}@-webkit-keyframes spin-data-v-0249f6ea{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-0249f6ea{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]);const i=r},2312:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(3645),r=n.n(a)()((function(t){return t[1]}));r.push([t.id,".auth-logo-text[data-v-261e507c]{display:block;font-size:1.375em;font-weight:800;margin-bottom:40px}.auth-form .additional-link a[data-v-261e507c]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-261e507c]{border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2);height:100px;margin-bottom:20px;-o-object-fit:cover;object-fit:cover;width:100px}.auth-form .block-form[data-v-261e507c]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-261e507c]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-261e507c]{width:100%}}@media only screen and (max-width:490px){.auth-form input[data-v-261e507c]{min-width:auto}.auth-form .additional-link[data-v-261e507c]{font-size:.9375em}}.dark .auth-form .additional-link[data-v-261e507c],.dark .auth-form h1[data-v-261e507c],.dark .auth-form h2[data-v-261e507c]{color:#bec6cf}",""]);const i=r},2276:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(9101);const r={name:"AuthContent",props:["loading","icon","text"],components:{ChevronRightIcon:a.XCv,RefreshCwIcon:a.Iyk},data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};var i=n(3379),o=n.n(i),s=n(6632),l={insert:"head",singleton:!1};o()(s.Z,l);s.Z.locals;const c=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"group mx-auto inline-block flex items-center whitespace-nowrap rounded-lg border-2 border-black px-7 py-2.5 dark:border-gray-300"},[n("span",{staticClass:"pr-1 text-lg font-extrabold"},[t._v("\n        "+t._s(t.text)+"\n    ")]),t._v(" "),t.loading?n("refresh-cw-icon",{staticClass:"vue-feather text-theme sync-alt -mr-1",attrs:{size:"20"}}):t._e(),t._v(" "),!t.loading&&t.icon?n("chevron-right-icon",{staticClass:"vue-feather text-theme -mr-1",attrs:{size:"20"}}):t._e()],1)}),[],!1,null,"0249f6ea",null).exports},4006:(t,e,n)=>{n.d(e,{Z:()=>r});const a={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};const r=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isVisible?n("div",{staticClass:"w-full max-w-xl text-center"},[t._t("default")],2):t._e()}),[],!1,null,null,null).exports},868:(t,e,n)=>{n.d(e,{Z:()=>r});const a={name:"AuthContentWrapper"};const r=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center px-2.5 md:px-6"},[t._t("default")],2)}),[],!1,null,null,null).exports},5434:(t,e,n)=>{n.d(e,{Z:()=>o});function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const i={name:"Headline",props:["description","title"],computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,n(629).Se)(["config"]))};const o=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-14"},[t._t("default"),t._v(" "),t.$slots.default?t._e():n("div",[t.config.app_logo?n("img",{staticClass:"mx-auto mb-6 w-28 md:w-32",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():n("b",{staticClass:"mb-10 block text-xl font-bold"},[t._v("\n            "+t._s(t.config.app_name)+"\n        ")])]),t._v(" "),n("h1",{staticClass:"mb-0.5 text-3xl font-extrabold md:text-4xl"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("h2",{staticClass:"text-xl font-normal md:text-2xl"},[t._v("\n        "+t._s(t.description)+"\n    ")])],2)}),[],!1,null,null,null).exports},542:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var a=n(868),r=n(4006),i=n(2276),o=n(5434);const s={name:"NotFound",components:{AuthContentWrapper:a.Z,AuthContent:r.Z,AuthButton:i.Z,Headline:o.Z}};var l=n(3379),c=n.n(l),d=n(2312),u={insert:"head",singleton:!1};c()(d.Z,u);d.Z.locals;const f=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AuthContentWrapper",{ref:"auth",staticClass:"h-screen"},[n("AuthContent",{attrs:{visible:!0}},[n("Headline",{attrs:{title:t.$t("page_shared_404.title"),description:t.$t("page_shared_404.subtitle")}}),t._v(" "),n("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_registration.have_an_account"))+"\n            "),n("router-link",{staticClass:"text-theme font-bold",attrs:{to:{name:"SignIn"}}},[t._v("\n                "+t._s(t.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)],1)],1)}),[],!1,null,"261e507c",null).exports}}]);