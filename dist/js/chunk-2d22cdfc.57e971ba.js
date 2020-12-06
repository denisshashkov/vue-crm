(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cdfc"],{f4a9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[t._v(t._s(t._f("localize")("Bill")))]),r("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:t.refresh}},[r("i",{staticClass:"material-icons"},[t._v("refresh")])])]),t.loading?r("loader"):r("div",{staticClass:"row"},[r("HomeBill",{attrs:{rates:t.currency.rates}}),r("HomeCurrency",{attrs:{rates:t.currency.rates,date:t.currency.date}})],1)],1)},s=[],a=(r("96cf"),r("1da1")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col s12 m6 l4"},[r("div",{staticClass:"card light-blue bill-card"},[r("div",{staticClass:"card-content white-text"},[r("span",{staticClass:"card-title"},[t._v(t._s(t._f("localize")("BillInCurrency")))]),t._l(t.currencies,(function(e){return r("p",{key:e,staticClass:"currency-line"},[r("span",[t._v(" "+t._s(t._f("currency")(t.getCurrency(e),e))+" ")])])}))],2)])])},i=[],l={props:["rates"],data:function(){return{currencies:["RUB","USD","EUR"]}},computed:{base:function(){return this.$store.getters.info.bill/(this.rates["RUB"]/this.rates["EUR"])}},methods:{getCurrency:function(t){return Math.floor(this.base*this.rates[t])}}},u=l,o=r("2877"),d=Object(o["a"])(u,c,i,!1,null,null,null),f=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col s12 m6 l8"},[r("div",{staticClass:"card  green bill-card"},[r("div",{staticClass:"card-content white-text"},[r("div",{staticClass:"card-header"},[r("span",{staticClass:"card-title"},[t._v(t._s(t._f("localize")("CurrencyAmountTitle")))])]),r("table",[r("thead",[r("tr",[r("th",[t._v(t._s(t._f("localize")("Currency")))]),r("th",[t._v(t._s(t._f("localize")("CurrencyType")))]),r("th",[t._v(t._s(t._f("localize")("Date")))])])]),r("tbody",t._l(t.currencies,(function(e){return r("tr",{key:e},[r("td",[t._v(t._s(e))]),r("td",[t._v(t._s(t.rates[e].toFixed(2)))]),r("td",[t._v(t._s(t._f("date")(t.date,"date")))])])})),0)])])])])},_=[],v={props:["rates","date"],data:function(){return{currencies:["RUB","USD","EUR"]}}},p=v,m=Object(o["a"])(p,h,_,!1,null,null,null),C=m.exports,y={name:"home",metaInfo:function(){return{title:this.$title("Menu_Bill")}},data:function(){return{loading:!0,currency:null}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchCurrency");case 2:t.currency=e.sent,t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:{refresh:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("fetchCurrency");case 3:t.currency=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}},components:{HomeBill:f,HomeCurrency:C}},b=y,w=Object(o["a"])(b,n,s,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d22cdfc.57e971ba.js.map