"use strict";(globalThis["webpackChunkalga"]=globalThis["webpackChunkalga"]||[]).push([[656],{5656:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var l=t(9835),s=t(6970);const r={class:"app-auth"},n={class:"app-auth__h1"},i={class:"app-auth__subtitle"},o={class:"tw-text-xxs"},p={class:"app-auth__h1"},u={class:"app-auth__subtitle"},d={class:"app-auth__links tw-mt-6"};function m(e,a,t,m,c,h){const w=(0,l.up)("AppInput"),b=(0,l.up)("AppLink"),_=(0,l.up)("AppCheckbox"),g=(0,l.up)("AppButton"),f=(0,l.up)("Form"),v=(0,l.up)("i18n-t"),W=(0,l.up)("AppStep"),k=(0,l.up)("FormVerify"),$=(0,l.up)("AuthCodeVerification"),y=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(y,{class:"tw-grid tw-container"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(W,{name:"registr"},{default:(0,l.w5)((()=>[(0,l._)("h1",n,(0,s.zw)(m.t("header")),1),(0,l._)("p",i,(0,s.zw)(m.t("subtitle")),1),(0,l.Wm)(f,{onSubmit:m.createUser,class:"app-auth__form"},{default:(0,l.w5)((({isSubmitting:a})=>[(0,l.Wm)(w,{name:"name",label:e.$t("inputs.name.label"),placeholder:e.$t("inputs.name.placeholder"),rules:"required"},null,8,["label","placeholder"]),(0,l.Wm)(w,{name:"email",rules:"required|email",type:"email",label:"E-mail",placeholder:"ivanov@domain.ru"}),(0,l.Wm)(w,{rules:"required|cellphone",name:"cellphone",label:e.$t("inputs.cellphone"),placeholder:"+123456789012345"},null,8,["label"]),(0,l.Wm)(_,{rules:"required",name:e.$t("landing.footer.serviceInfo"),class:"tw-text-left tw-mt-6",labelClass:"tw-text-xxs"},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.Uk)((0,s.zw)(e.$t("termBefore"))+" ",1),(0,l.Wm)(b,{to:e.$t("serviceInfoFile"),class:"term-link tw-text-xxs"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.$t("term-link")),1)])),_:1},8,["to"]),(0,l.Uk)(" "+(0,s.zw)(e.$t("termAfter")),1)])])),_:1},8,["name"]),(0,l.Wm)(g,{label:e.$t("buttons.registr"),fullWidth:"",type:"submit",disabled:a},null,8,["label","disabled"])])),_:1},8,["onSubmit"]),(0,l.Wm)(v,{class:"app-auth__links tw-mt-6",tag:"div",keypath:"actions.hasAccount",scope:"global"},{login:(0,l.w5)((()=>[(0,l.Wm)(b,{to:{name:"auth.login"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.$t("buttons.logIn")),1)])),_:1},8,["to"])])),_:1})])),_:1}),(0,l.Wm)(W,{name:"verifing"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{mail:m.mail,onEntered:m.handleCode},null,8,["mail","onEntered"])])),_:1}),(0,l.Wm)(W,{name:"password"},{default:(0,l.w5)((()=>[(0,l._)("h1",p,(0,s.zw)(m.t("passHeader")),1),(0,l._)("p",u,(0,s.zw)(e.$t("passRequired")),1),(0,l.Wm)(f,{class:"app-auth__form",onSubmit:m.setPassword},{default:(0,l.w5)((({isSubmitting:a})=>[(0,l.Wm)(w,{type:"password",name:"password",label:e.$t("inputs.password"),placeholder:e.$t("inputs.password"),rules:"required|password"},null,8,["label","placeholder"]),(0,l.Wm)(w,{type:"password",name:"pass2",label:e.$t("inputs.repeatPass"),placeholder:e.$t("inputs.password"),rules:"required|confirmed:@password"},null,8,["label","placeholder"]),m.invalidCode?((0,l.wg)(),(0,l.j4)($,{key:0,mail:m.mail},null,8,["mail"])):(0,l.kq)("",!0),(0,l.Wm)(g,{label:e.$t("actions.setPass"),fullWidth:"",type:"submit",disabled:a},null,8,["label","disabled"])])),_:1},8,["onSubmit"]),(0,l._)("div",d,[(0,l.Uk)((0,s.zw)(e.$t("actions.hasAccount"))+" ",1),(0,l.Wm)(b,{to:{name:"auth.login"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.$t("buttons.logIn")),1)])),_:1},8,["to"])])])),_:1})])])),_:1})}var c=t(3485),h=t(496),w=t(3038),b=t(3100),_=t(8874),g=t(6647),f=t(2163);const v={"ru-RU":{header:"Зарегистрируйтесь",subtitle:"Используя эл. почту и мобильный телефон",passHeader:"Установите пароль"},"en-US":{header:"Sign up",subtitle:"Using email and mobile phone",passHeader:"Set password"},de:{header:"Anmelden",subtitle:"Mit E-Mail und Handy",passHeader:"Passwort festlegen"},"zh-CN":{header:"注册",subtitle:"使用电子邮件和手机",passHeader:"设置密码"}},W={setup(){const e=(0,b.oR)(),{t:a}=(0,g.QT)({messages:v}),{changeStep:t,step:l}=(0,c.Z)("registr"),{setPassword:s,invalidCode:r,curCode:n,mail:i,getCode:o}=(0,w.Z)(),p=async({cellphone:a,name:t,email:l},{setErrors:s})=>{try{const s=localStorage.getItem("referral_code"),r=await e.dispatch("auth/registr",{cellphone:`+${a.replace("+","")}`,name:t,email:l,referral_code:s});i.value=r.email}catch(r){if(!r.response)throw r;if(422===r.response.status){(0,f.LC)({message:()=>e.password[0],type:"negative"});const{errors:e}=await r.response.json();throw s(e),{422:!0}}throw r}},u=async(...e)=>{try{await p(...e),t("verifing")}catch(a){if(422 in a)return;throw a}},d=e=>{n.value=e,t("password")};return{t:a,step:l,invalidCode:r,mail:i,handleCode:d,changeStep:t,createUser:u,setPassword:s}},components:{FormVerify:h.Z,AuthCodeVerification:_.Z}};var k=t(1639),$=t(9885),y=t(9984),C=t.n(y);const S=(0,k.Z)(W,[["render",m],["__scopeId","data-v-7b2b3930"]]),x=S;C()(W,"components",{QPage:$.Z})}}]);