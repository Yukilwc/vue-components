import{d as s,f as a,p as e,g as t,r as c,h as n,o,c as l,i as d,w as i,j as r,F as u,k as v,l as h}from"./vendor.11d5ec03.js";var p=s({setup(){let s=a(!0);return{handleEventOutside:function(a){console.log("==========点击区域内部",a),s.value=!1},show:s}}});const f=v();e("data-v-7f8ef2e7");const w=d("div",{class:"c-h1"},"收录",-1),k={class:"container"},g=h("Swiper风格收录"),m=d("div",{class:"c-h2"},"outside指令测试",-1),_={class:"c-content"},b={key:0},j=d("div",{class:"c-h2"},"click-shadow指令测试",-1),x={class:"c-content"},y={class:""},E=d("div",{class:"",style:{"margin-top":"20px"}},[d("input",{value:"阴影输入框"})],-1);t();const O=f(((s,a,e,t,v,h)=>{const p=c("router-link"),O=n("event-outside"),F=n("click-shadow");return o(),l(u,null,[w,d("div",k,[d(p,{to:"/swiper",class:"c-h2"},{default:f((()=>[g])),_:1})]),m,d("div",_,[s.show?i((o(),l("button",b,"区域",512)),[[O,s.handleEventOutside]]):r("",!0)]),j,d("div",x,[d("div",y,[i(d("button",null,"阴影按钮",512),[[F]])]),E])],64)}));p.render=O,p.__scopeId="data-v-7f8ef2e7";export default p;