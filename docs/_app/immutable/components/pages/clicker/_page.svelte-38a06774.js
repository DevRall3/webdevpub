import{S as ge,i as ye,s as Ee,k as u,a as w,q as o,K as be,l as h,h as c,c as I,m as _,r as n,n as s,J as ze,p as me,H as e,b as ke,L as q,u as U,C as pe,M as Be}from"../../../chunks/index-539a10cc.js";function Pe(a){let y,l,t,C,f,D,v,m,k,r,E,N,V,L,G,b,he,W,p,z,X,A,Y,Z,B,x,K,$,ee,P,te,O,se,ae,M,le,S,re,T,oe,J,ce,fe;return{c(){y=u("link"),l=w(),t=u("html"),C=u("head"),f=u("link"),D=w(),v=u("a"),m=o("Home"),k=w(),r=u("main"),E=u("div"),N=o(a[0]),V=o(" Cookies"),L=w(),G=u("div"),b=u("img"),W=w(),p=u("div"),z=u("button"),X=o("Upgrade Click Power ("),A=o(a[1]),Y=o(" cookies)"),Z=w(),B=u("button"),x=o("Buy a Grandma ("),K=o(a[4]),$=o(" cookies)"),ee=w(),P=u("button"),te=o("Buy a Factory ("),O=o(a[5]),se=o(" cookies)"),ae=w(),M=u("div"),le=o("Grandmas: "),S=o(a[2]),re=w(),T=u("div"),oe=o("Factories: "),J=o(a[3]),this.h()},l(i){const d=be("svelte-1cu56wq",document.head);y=h(d,"LINK",{rel:!0,href:!0}),d.forEach(c),l=I(i),t=h(i,"HTML",{lang:!0,class:!0});var F=_(t);C=h(F,"HEAD",{});var de=_(C);f=h(de,"LINK",{rel:!0,type:!0,href:!0}),de.forEach(c),D=I(F),v=h(F,"A",{href:!0,class:!0});var _e=_(v);m=n(_e,"Home"),_e.forEach(c),k=I(F),r=h(F,"MAIN",{class:!0});var g=_(r);E=h(g,"DIV",{class:!0});var ne=_(E);N=n(ne,a[0]),V=n(ne," Cookies"),ne.forEach(c),L=I(g),G=h(g,"DIV",{class:!0});var ve=_(G);b=h(ve,"IMG",{src:!0,alt:!0,class:!0}),ve.forEach(c),W=I(g),p=h(g,"DIV",{class:!0});var H=_(p);z=h(H,"BUTTON",{class:!0});var j=_(z);X=n(j,"Upgrade Click Power ("),A=n(j,a[1]),Y=n(j," cookies)"),j.forEach(c),Z=I(H),B=h(H,"BUTTON",{class:!0});var Q=_(B);x=n(Q,"Buy a Grandma ("),K=n(Q,a[4]),$=n(Q," cookies)"),Q.forEach(c),ee=I(H),P=h(H,"BUTTON",{class:!0});var R=_(P);te=n(R,"Buy a Factory ("),O=n(R,a[5]),se=n(R," cookies)"),R.forEach(c),H.forEach(c),ae=I(g),M=h(g,"DIV",{class:!0,style:!0});var ie=_(M);le=n(ie,"Grandmas: "),S=n(ie,a[2]),ie.forEach(c),re=I(g),T=h(g,"DIV",{class:!0,style:!0});var ue=_(T);oe=n(ue,"Factories: "),J=n(ue,a[3]),ue.forEach(c),g.forEach(c),F.forEach(c),this.h()},h(){s(y,"rel","stylesheet"),s(y,"href","https://unpkg.com/@picocss/pico@latest/css/pico.min.css"),document.title="Clicker",s(f,"rel","stylesheet"),s(f,"type","text/css"),s(f,"href","style.css"),s(v,"href","http://localhost:5173/"),s(v,"class","home svelte-z8gc14"),s(E,"class","cookies svelte-z8gc14"),ze(b.src,he="cookie.png")||s(b,"src",he),s(b,"alt","cookie"),s(b,"class","cookieButton"),s(G,"class","upgrades svelte-z8gc14"),s(z,"class","upgradeButton svelte-z8gc14"),s(B,"class","upgradeButton svelte-z8gc14"),s(P,"class","upgradeButton svelte-z8gc14"),s(p,"class","upgrades svelte-z8gc14"),s(M,"class","grandmas svelte-z8gc14"),me(M,"color","white"),s(T,"class","factories svelte-z8gc14"),me(T,"color","white"),s(r,"class","svelte-z8gc14"),s(t,"lang","en"),s(t,"class","svelte-z8gc14")},m(i,d){e(document.head,y),ke(i,l,d),ke(i,t,d),e(t,C),e(C,f),e(t,D),e(t,v),e(v,m),e(t,k),e(t,r),e(r,E),e(E,N),e(E,V),e(r,L),e(r,G),e(G,b),e(r,W),e(r,p),e(p,z),e(z,X),e(z,A),e(z,Y),e(p,Z),e(p,B),e(B,x),e(B,K),e(B,$),e(p,ee),e(p,P),e(P,te),e(P,O),e(P,se),e(r,ae),e(r,M),e(M,le),e(M,S),e(r,re),e(r,T),e(T,oe),e(T,J),ce||(fe=[q(b,"click",a[10]),q(b,"keypress",a[11]),q(z,"click",a[7]),q(B,"click",a[8]),q(P,"click",a[9])],ce=!0)},p(i,[d]){d&1&&U(N,i[0]),d&2&&U(A,i[1]),d&16&&U(K,i[4]),d&32&&U(O,i[5]),d&4&&U(S,i[2]),d&8&&U(J,i[3])},i:pe,o:pe,d(i){c(y),i&&c(l),i&&c(t),ce=!1,Be(fe)}}}function we(a,y,l){var t=0,C=1,f=50,D=0,v=0,m=150,k=500;setInterval(function(){l(0,t+=D+v)},1e3);function r(){l(0,t+=C)}function E(){t>=f&&(l(0,t-=f),C*=2,l(1,f*=3),l(1,f=Math.floor(f)))}function N(){t>=m&&(l(0,t-=m),l(2,D+=1),l(4,m*=1.5),l(4,m=Math.floor(m)))}function V(){t>=k&&(l(0,t-=k),l(3,v+=5),l(5,k*=2),l(5,k=Math.floor(k)))}return[t,f,D,v,m,k,r,E,N,V,()=>r(),()=>r()]}class Ce extends ge{constructor(y){super(),ye(this,y,we,Pe,Ee,{})}}export{Ce as default};
