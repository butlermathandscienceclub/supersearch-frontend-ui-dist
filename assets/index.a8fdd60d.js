import{S as e,i as s,s as a,e as t,t as l,a as o,c,b as n,d as r,f as d,g as i,h as p,j as m,k as u,l as h,m as y,n as f,r as w,o as k}from"./vendor.154442a7.js";function g(e){let s,a,k,g,v,E,I,C,M,R,S,N,T,$,O,q,U,x,A,F,j,P,D,H,V,_,z;return{c(){s=t("main"),a=t("div"),k=t("h1"),g=l("super search!"),v=o(),E=t("br"),I=o(),C=t("form"),M=t("input"),R=o(),S=t("br"),N=o(),T=t("button"),$=l("search!"),O=o(),q=t("iframe"),U=o(),x=t("footer"),A=t("p"),F=l("Made by "),j=t("a"),P=l("Butler Math and Science Club"),D=o(),H=t("button"),V=l("toggle dark"),this.h()},l(e){s=c(e,"MAIN",{class:!0});var t=n(s);a=c(t,"DIV",{class:!0});var l=n(a);k=c(l,"H1",{class:!0});var o=n(k);g=r(o,"super search!"),o.forEach(d),v=i(l),E=c(l,"BR",{class:!0}),I=i(l),C=c(l,"FORM",{name:!0,class:!0});var p=n(C);M=c(p,"INPUT",{name:!0,placeholder:!0,id:!0,class:!0}),p.forEach(d),R=i(l),S=c(l,"BR",{class:!0}),N=i(l),T=c(l,"BUTTON",{id:!0,class:!0});var m=n(T);$=r(m,"search!"),m.forEach(d),l.forEach(d),O=i(t),q=c(t,"IFRAME",{style:!0,id:!0,class:!0}),n(q).forEach(d),U=i(t),x=c(t,"FOOTER",{id:!0,class:!0});var u=n(x);A=c(u,"P",{class:!0});var h=n(A);F=r(h,"Made by "),j=c(h,"A",{href:!0,target:!0,class:!0});var y=n(j);P=r(y,"Butler Math and Science Club"),y.forEach(d),h.forEach(d),D=i(u),H=c(u,"BUTTON",{class:!0});var f=n(H);V=r(f,"toggle dark"),f.forEach(d),u.forEach(d),t.forEach(d),this.h()},h(){p(k,"class","svelte-wptako"),p(E,"class","svelte-wptako"),p(M,"name","in1"),p(M,"placeholder","search the web!"),p(M,"id","in1"),p(M,"class","svelte-wptako"),p(C,"name","in"),p(C,"class","svelte-wptako"),p(S,"class","svelte-wptako"),p(T,"id","b1"),p(T,"class","svelte-wptako"),p(a,"class","noif svelte-wptako"),m(q,"display","none"),p(q,"id","if"),p(q,"class","svelte-wptako"),p(j,"href","http://bmsc.ga/"),p(j,"target","_blank"),p(j,"class","svelte-wptako"),p(A,"class","svelte-wptako"),p(H,"class","svelte-wptako"),p(x,"id","foot"),p(x,"class","svelte-wptako"),p(s,"class","svelte-wptako")},m(e,t){u(e,s,t),h(s,a),h(a,k),h(k,g),h(a,v),h(a,E),h(a,I),h(a,C),h(C,M),h(a,R),h(a,S),h(a,N),h(a,T),h(T,$),h(s,O),h(s,q),h(s,U),h(s,x),h(x,A),h(A,F),h(A,j),h(j,P),h(x,D),h(x,H),h(H,V),_||(z=[y(T,"click",b),y(H,"click",B)],_=!0)},p:f,i:f,o:f,d(e){e&&d(s),_=!1,w(z)}}}function v(e){console.log(e)}function E(e,s=window.location.href){e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(s);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}function b(){var e=document.forms.in.in1.value;v(e),1==window.isd?(document.getElementById("if").src=`https://s-api.kellanb.repl.co/?search=${e}&dark=2`,document.getElementById("if").style.display="block"):(document.getElementById("if").src=`https://s-api.kellanb.repl.co/?search=${e}`,document.getElementById("if").style.display="block"),document.getElementsByClassName("noif")[0].style.display="none",document.getElementById("foot").style.display="none"}function B(){0==window.isd?(document.querySelector(":root").style.color="white",document.querySelector(":root").style.backgroundColor="black",window.isd=1):1==window.isd&&(document.querySelector(":root").style.color="black",document.querySelector(":root").style.backgroundColor="white",window.isd=0)}function I(e){return window.isd=0,console.log(E("in1")),null!=E("in1")&&k((async()=>{var e=E("in1");v(e),1==window.isd?(document.getElementById("if").src=`https://s-api.kellanb.repl.co/?search=${e}&dark=2`,document.getElementById("if").style.display="block"):(document.getElementById("if").src=`https://s-api.kellanb.repl.co/?search=${e}`,document.getElementById("if").style.display="block"),document.getElementsByClassName("noif")[0].style.display="none",document.getElementById("foot").style.display="none"})),[]}new class extends e{constructor(e){super(),s(this,e,I,g,a,{})}}({target:document.getElementById("app")});
