"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7980],{3187:(t,e,a)=>{a.d(e,{Z:()=>r});const n={name:"CardNavigation",props:["pages"],computed:{routeName:function(){return this.$route.name}},data:function(){return{fixedNav:!1}},created:function(){var t=this;window.addEventListener("scroll",(function(){var e=document.getElementById("card-navigation");t.fixedNav=e.getBoundingClientRect().top<0}))}};const r=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-7",staticStyle:{height:"62px"},attrs:{id:"card-navigation"}},[a("div",{class:{"fixed top-0 left-0 right-0 z-10 rounded-none bg-white bg-opacity-50 px-6 backdrop-blur-lg backdrop-filter dark:bg-dark-foreground":t.fixedNav}},[a("div",{staticClass:"overflow-x-auto whitespace-nowrap"},t._l(t.pages,(function(e,n){return a("router-link",{key:n,staticClass:"border-bottom-theme inline-block border-b-2 border-transparent px-4 py-5 text-sm font-bold",class:{"text-theme":t.routeName===e.route,"text-gray-600 dark:text-gray-100":t.routeName!==e.route},attrs:{to:{name:e.route},replace:""}},[t._v("\n                "+t._s(e.title)+"\n            ")])})),1)])])}),[],!1,null,null,null).exports},8143:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});const n={name:"PaymentSettings",components:{CardNavigation:a(3187).Z},data:function(){return{pages:[{title:this.$t("admin_settings.tabs.payments"),route:"AppPayments"},{title:this.$t("admin_settings.tabs.billings"),route:"AppBillings"}]}},mounted:function(){this.$router.replace({name:"AppPayments"})}};const r=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card z-10 shadow-card",staticStyle:{"padding-bottom":"0","padding-top":"0"}},[a("CardNavigation",{staticClass:"-mx-1",attrs:{pages:t.pages}})],1),t._v(" "),a("router-view")],1)}),[],!1,null,null,null).exports}}]);