(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22b56f9e"],{"13eb":function(t,e,i){"use strict";var a=i("5315"),n=i.n(a);n.a},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},5315:function(t,e,i){},"6b54":function(t,e,i){"use strict";i("3846");var a=i("cb7c"),n=i("0bfb"),s=i("9e1e"),o="toString",c=/./[o],r=function(t){i("2aba")(RegExp.prototype,o,t,!0)};i("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?r((function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)})):c.name!=o&&r((function(){return c.call(this)}))},c428:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"whaleblue-loading",style:{backgroundImage:"url("+t.$assetsUrl+"loading.gif)"}})},n=[],s={name:"loading"},o=s,c=(i("13eb"),i("2877")),r=Object(c["a"])(o,a,n,!1,null,null,null);e["a"]=r.exports},cd5c:function(t,e,i){"use strict";var a=i("cf52"),n=i.n(a);n.a},cf52:function(t,e,i){},e772:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"interchange-container-pc":t.isPc,"interchange-container-mb":!t.isPc}},[i("div",{staticClass:"success-content"},[i("div",{class:{"steps-list":!t.isLogged,"steps-list-logged":t.isLogged}},[i("div",{staticClass:"steps-icon"},[i("div",{staticClass:"pay-radio hook"},[i("i",{style:{backgroundImage:"url("+t.$assetsUrl+"pay/hook-white.svg)"}})]),t.isLogged?t._e():i("div",{staticClass:"pay-radio hook"},[i("i",{style:{backgroundImage:"url("+t.$assetsUrl+"pay/hook-white.svg)"}})]),i("div",{staticClass:"pay-radio number"},[i("span",[t._v(t._s(t.isLogged?2:3))])])]),i("div",{staticClass:"steps-line"}),i("div",{staticClass:"steps-icon steps-tips"},[i("span",[t._v(t._s(t.$t("Choose Plan")))]),t.isLogged?t._e():i("span",[t._v(t._s(t.$t("Review Order")))]),i("span",[t._v(t._s(t.$t("Verify & Pay")))])])]),i("div",{staticClass:"pay-success"},[i("div",{staticClass:"card-wrap"},[i("div",{staticClass:"success-header-line"}),i("p",{staticClass:"success-title"},[t._v("支付訂單")]),i("p",{staticClass:"success-description"},[t._v("付款後，即刻交付服務")]),i("div",{staticClass:"card-detail"},[i("div",{staticClass:"pay-sync",attrs:{id:"pay-sync"}},[t.paySuccess||t.payFailed?t._e():i("a-spin",[i("a-icon",{staticStyle:{"font-size":"24px",color:"#138CFF"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1),t.paySuccess&&!t.payFailed?i("a-icon",{attrs:{type:"check-circle",theme:"twoTone",twoToneColor:"#44B496"}}):t._e(),t.payFailed?i("a-icon",{attrs:{type:"close-circle",theme:"twoTone",twoToneColor:"#F2585E"}}):t._e(),i("span",{staticClass:"sync-result"},[t._v(t._s(t.payStatus))])],1),i("div",{staticClass:"header"},[i("div",{staticClass:"btn-container",attrs:{id:"btn-container"}},[i("a-button",{staticClass:"submit-btn",attrs:{type:"primary",id:"submit-btn",disabled:!t.gotTheDetail},on:{click:function(e){return t.payNow()}}},[t._v("\n                "+t._s(t.btnTips)+"\n              ")]),i("a-button",{staticClass:"submit-btn2",attrs:{type:"primary",id:"submit-btn2",ghost:""},on:{click:function(e){return t.userPaid()}}},[t._v("\n                我已支付\n              ")])],1),t.payFailed?t._e():i("p",{staticClass:"header-tips-footer"},[t._v(t._s(t.footerText))]),t.payFailed?i("p",{staticClass:"header-tips-footer"},[t._v("支付遇到問題，"),i("a",{on:{click:function(e){return t.openZendesk()}}},[t._v("聯繫客服")])]):t._e()]),t.gotTheDetail?t._e():i("div",{staticClass:"package-list-loading"},[i("a-spin",[i("a-icon",{staticStyle:{"font-size":"30px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1),t.gotTheDetail?i("div",{staticClass:"package-list"},[i("p",{staticClass:"package-title"},[t._v(t._s(t.$t("Order Summary")))]),i("div",{staticClass:"list-item"},[i("p",[t._v("訂單號")]),i("p",[t._v(t._s(t.invoiceInfo.invoiceid))])]),i("div",{staticClass:"list-item"},[i("p",[t._v("套餐")]),i("p",[t._v(t._s(t.invoiceInfo.description))])]),i("div",{staticClass:"list-item"},[i("p",[t._v("總額")]),i("p",[t._v(t._s(t.invoiceInfo.balance)+" USD")])]),i("div",{staticClass:"list-item"},[i("p",[t._v("付款方式")]),i("p",[t._v(t._s(t.invoiceInfo.paymentMethod))])]),i("div",{staticClass:"list-item"},[i("p",[t._v("訂單日期")]),i("p",[t._v(t._s(t.invoiceInfo.duedate))])]),i("div",{staticClass:"list-item"},[i("p",[t._v("訂單狀態")]),i("p",[t._v(t._s(t.invoiceInfo.status))])])]):t._e()])])])]),t._m(0)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"none",visibility:"hidden"}},[i("script",{attrs:{type:"application/javascript",src:"https://a.exoclick.com/tag_gen.js","data-goal":"5f3934ee3fb895723593751c8889a35a"}})])}],s=(i("6b54"),i("ac6a"),i("7f7f"),i("7514"),i("28a5"),i("386d"),i("4917"),i("c428")),o=i("9225"),c={name:"interchange",components:{Loading:s["a"]},data:function(){return{loading:!1,resendTip:!1,secondNum:60,invoiceInfo:{invoiceid:"",description:"",balance:"",paymentMethod:"",duedate:"",status:"",paidDate:"",serviceId:"",datepaid:""},isAndroid:!1,isIos:!1,isPc:!0,isLogged:!1,isLogin:!1,btnTips:"立即支付",payStatus:"付款狀態同步中",paySuccess:!1,payFailed:!1,invoiceId:0,intervalId:"",footerText:"請勿關閉本頁面，否則支付可能失敗。",payMethodList:[{id:0,name:"支付寶",logo:["alipay"],type:"payssionalipaycn"},{id:1,name:"信用卡",logo:["visa","master","unionpay","amex"],type:"stripe3dsecure"},{id:2,name:"PayPal",logo:["paypal"],type:"paypalcheckout"},{id:3,name:"加密貨幣",logo:["btc","btc2","eth","eth2"],type:"coinpayments"}],isSentData:!1,payUrl:"",isPaying:!1,gotTheDetail:!1,userMaxRetry:1,retryCount:0,isUserRetry:!1}},created:function(){this.isPc=this.$isPc();var t=window.location.search.match(/code=(.*)/);if(null!==t&&t.length>1){var e=decodeURIComponent(t[1]),i=encodeURIComponent("".concat(window.location.origin,"/WHMCS")),a=this;this.$request.getVerifyQuickBuy(e,{redirectTo:i},(function(t){t&&200===t.status?(localStorage.setItem("token",t.data.token),localStorage.setItem("email",t.data.email),window.zE((function(){localStorage.getItem("email")&&window.zE.identify({name:localStorage.getItem("email").split("@")[0],email:localStorage.getItem("email")}),window.zE.setLocale("zh-TW")})),a.invoiceId=t.data.invoiceId,a.payUrl=decodeURIComponent(t.data.redirect),a.payUrl.indexOf("WHMCS")>-1&&a.payUrl.indexOf("?")>-1&&(a.payUrl=a.payUrl+"&language=chinese"),a.getInvoiceDetail(),window.dataLayer.push({event:"signUpCompleted"})):a.$notification.open({message:"郵件驗證碼已失效，請重新獲取",onClick:function(){}})}))}else 0!=this.$route.params.invoiceId&&(this.isLogin=!0,this.isLogged=!0,this.invoiceId=this.$route.params.invoiceId,this.payUrl=decodeURIComponent(this.$route.params.redirect),this.payUrl.indexOf("WHMCS")>-1&&this.payUrl.indexOf("?")>-1&&(this.payUrl=this.payUrl+"&language=chinese"),this.getInvoiceDetail())},mounted:function(){var t=document.createElement("div");t.setAttribute("style","display: none; visibility: hidden"),t.innerHTML='<script type="application/javascript" src="https://a.exoclick.com/tag_gen.js" data-goal="5f3934ee3fb895723593751c8889a35a"><\/script>',document.body.appendChild(t)},methods:{payNow:function(){if(0!=this.invoiceId){var t=this;this.isPaying?null!=t.payUrl&&(t.payUrl.indexOf("WHMCS")>-1?(localStorage.setItem("src",t.payUrl),window.open("".concat(window.location.origin,"/").concat(t.$i18n.locale,"/order/viewInvoice"),"_blank")):window.open(t.payUrl,"_blank"),t.isUserRetry&&(t.payStatus="付款狀態同步中",t.payFailed=!1,t.isUserRetry=!1,t.retryCount=0,t.intervalId=setInterval((function(){t.getInvoiceDetail()}),4e3))):this.paySuccess?window.open("".concat(window.location.origin,"/my/service"),"_blank"):0===this.intervalId.length?(this.isPaying=!0,TweenMax.fromTo(document.getElementById("btn-container"),.3,{marginTop:"0"},{css:{marginTop:t.isPc?"65px":"1.253rem"},onStart:function(){TweenMax.fromTo(document.getElementById("submit-btn"),.4,{width:t.isPc?"386px":"7.867rem",left:"0"},{width:t.isPc?"176px":"3.68rem",left:t.isPc?"210px":"4.187rem"}),TweenMax.fromTo(document.getElementById("submit-btn2"),.4,{width:t.isPc?"386px":"7.867rem"},{css:{width:t.isPc?"176px":"3.68rem"},onComplete:function(){t.btnTips="重新支付",null!=t.payUrl&&(t.payUrl.indexOf("WHMCS")>-1?(localStorage.setItem("src",t.payUrl),window.open("".concat(window.location.origin,"/").concat(t.$i18n.locale,"/order/viewInvoice"),"_blank")):window.open(t.payUrl,"_blank"))}})}}),TweenMax.fromTo(document.getElementById("pay-sync"),.4,{opacity:0},{opacity:1}),this.intervalId=setInterval((function(){t.getInvoiceDetail()}),4e3)):this.$notification.open({message:"郵件驗證碼已失效，請重新獲取",onClick:function(){}})}else this.$notification.open({message:"郵件驗證碼已失效，請重新獲取",onClick:function(){}})},userPaid:function(){this.payFailed?this.$notification.open({message:"支付失敗，請重新支付",onClick:function(){}}):(this.payStatus="檢測支付狀態中",this.getInvoiceDetail(),this.isUserRetry=!0)},getInvoiceDetail:function(){var t=this;this.$request.getUsersInvoiceDetail(this.invoiceId,(function(e){if(e&&200===e.status){t.gotTheDetail=!0,t.invoiceInfo.invoiceid=e.data.invoiceid;var i=e.data.items.item[0].description;t.invoiceInfo.description=i.substring(0,i.toLowerCase().indexOf("unlimited")+9),t.invoiceInfo.balance=e.data.total,t.invoiceInfo.duedate=e.data.duedate,t.invoiceInfo.status=o["b"].t("Paid"===e.data.status?"Paid":"Unpaid"),t.invoiceInfo.paidDate=e.data.paidDate,t.invoiceInfo.serviceId=e.data.items.item[0].relid,t.invoiceInfo.datepaid=e.data.datepaid;var a=t.payMethodList.find((function(t){return t.type===e.data.paymentmethod}));a&&a.length>0?t.invoiceInfo.paymentMethod=a[0].name:t.invoiceInfo.paymentMethod=e.data.paymentmethod,"Paid"===e.data.status?t.$http.get("".concat("https://fatpipe.work","/api/v1/services")).then((function(e){e&&200===e.status&&e.data.products.forEach((function(e,i){e.id===t.invoiceInfo.serviceId&&(window.clearInterval(t.intervalId),t.paySuccessAnimation(),t.isSentData?t.isAndroid&&setTimeout((function(){var e=document.createElement("a");e.target="_blank",e.href="whaleblue://test.com?data=".concat(t.invoiceInfo.toString()),e.click()}),2e3):(t.isSentData=!0,window.dataLayer.push({event:"purchase",ecommerce:{purchase:{actionField:{id:t.invoiceInfo.invoiceid,revenue:t.invoiceInfo.balance,coupon:""},products:[{name:e.name,id:e.productId,price:t.invoiceInfo.balance,quantity:1,coupon:""}]}}})))}))})):t.isUserRetry&&(t.retryCount>t.userMaxRetry&&(window.clearInterval(t.intervalId),t.payFailed=!0,t.payStatus="支付失敗，請重新支付"),t.retryCount++),t.isLogin&&(t.isLogin=!1,t.payNow())}}))},paySuccessAnimation:function(){var t=this;TweenMax.fromTo(document.getElementById("submit-btn"),.5,{width:t.isPc?"176px":"3.68rem",left:t.isPc?"210px":"4.187rem"},{width:t.isPc?"386px":"7.867rem",left:"0"}),TweenMax.fromTo(document.getElementById("submit-btn2"),.5,{width:t.isPc?"176px":"3.68rem"},{css:{width:t.isPc?"386px":"7.867rem"},onComplete:function(){t.isPaying=!1,t.paySuccess=!0,t.btnTips="查看服務",t.payStatus="支付成功",t.footerText="查看套餐信息與使用教程"}})},openZendesk:function(){window.zE("webWidget","toggle")}}},r=c,l=(i("cd5c"),i("2877")),d=Object(l["a"])(r,a,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-22b56f9e.bc02d833.js.map