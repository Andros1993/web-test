(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-181ff708"],{"4a33":function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{class:{"signin-container":t.isPc,"signin-container-mb":!t.isPc}},[s("p",{staticClass:"title"},[t._v("登入")]),s("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:t.handleSubmit}},[s("a-form-item",[s("i",{staticClass:"input-icon",class:{"email-icon-normal":1===t.emailState,"email-icon-click":2===t.emailState,"email-icon-error":3===t.emailState}}),s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"郵箱格式錯誤"},{required:!0,message:"請輸入電郵"}]}],expression:"['email',{ rules: [{\n              type: 'email',\n              message: '郵箱格式錯誤',\n            },{ required: true, message: '請輸入電郵' }] }]"}],attrs:{placeholder:"電郵"},on:{focus:function(o){t.emailState=2,t.showError=0,t.iconLoading=!1},blur:function(o){t.emailState=1}}})],1),s("a-form-item",[s("i",{staticClass:"input-icon",class:{"password-icon-normal":1===t.passwordState,"password-icon-click":2===t.passwordState,"password-icon-error":3===t.passwordState}}),s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"請輸入密碼"}]}],expression:"['password',{ rules: [{ required: true, message: '請輸入密碼' }] }]"}],attrs:{type:t.passwordType,placeholder:"密碼"},on:{focus:function(o){t.passwordState=2,t.showError=0,t.iconLoading=!1},blur:function(o){t.passwordState=1}}}),s("i",{staticClass:"input-icon",class:{"password-show":!t.passwordShow,"password-hide":t.passwordShow},on:{click:t.showPassword}})],1),s("a-form-item",[s("a",{staticClass:"login-form-forgot",on:{click:t.goForgetPassword}},[t._v("忘記密碼?")]),s("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit",loading:t.iconLoading}},[t._v("登入")]),s("p",{staticClass:"error-mss",style:{opacity:t.showError}},[t._v(t._s(t.errorMss)+" ")])],1)],1),s("div",{staticClass:"signin-footer"},[s("span",{staticClass:"tip"},[t._v("還沒有帳號嗎？")]),s("a-button",{staticClass:"subscribe-btn",attrs:{type:"primary",ghost:""},on:{click:t.goQuickBuy}},[t._v("立即订阅")])],1)],1)},e=[],r=(s("28a5"),s("84c7")),i={name:"SignIn",components:{PublicHeader:r["a"]},beforeCreate:function(){this.form=this.$form.createForm(this)},data:function(){return{emailState:1,emailReg:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,passwordState:1,passwordShow:!1,passwordType:"password",errorMss:"",noAccountSignUp:"現在註冊",showError:0,iconLoading:!1,isPc:this.$isPc()}},created:function(){},mounted:function(){},methods:{handleSubmit:function(t){var o=this;t.preventDefault(),this.form.validateFields((function(t,s){t||(o.iconLoading=!0,o.$http.post("".concat("https://fatpipe.work","/api/v1/users/login"),s).then((function(t){o.iconLoading=!1,201===t.status?(localStorage.setItem("email",t.data.email),localStorage.setItem("token",t.data.token),window.zE((function(){localStorage.getItem("email")&&window.zE.identify({name:localStorage.getItem("email").split("@")[0],email:localStorage.getItem("email")}),window.zE.setLocale("zh-TW")})),o.$http.defaults.headers.common.Authorization="Bearer ".concat(t.data.token),o.$router.push({path:"/my/service",name:"service"})):(o.emailState=3,o.passwordState=3,o.showError=1,o.errorMss="電郵或密碼錯誤",o.noAccountSignUp="")})))}))},showPassword:function(){this.passwordShow=!this.passwordShow,this.passwordType=this.passwordShow?"text":"password"},goForgetPassword:function(){this.$router.push("forget-password")},goQuickBuy:function(){this.$router.push({path:"/order/place-order",name:"pay-order"})}}},n=i,c=(s("dd3b"),s("2877")),l=Object(c["a"])(n,a,e,!1,null,null,null);o["default"]=l.exports},c211:function(t,o,s){},dd3b:function(t,o,s){"use strict";var a=s("c211"),e=s.n(a);e.a}}]);
//# sourceMappingURL=chunk-181ff708.698d0f26.js.map