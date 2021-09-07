var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function h(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function f(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let p;function g(e){p=e}const w=[],x=[],z=[],b=[],$=Promise.resolve();let y=!1;function E(e){z.push(e)}let k=!1;const M=new Set;function A(){if(!k){k=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];g(t),C(t.$$)}for(g(null),w.length=0;x.length;)x.pop()();for(let e=0;e<z.length;e+=1){const t=z[e];M.has(t)||(M.add(t),t())}z.length=0}while(w.length);for(;b.length;)b.pop()();y=!1,k=!1,M.clear()}}function C(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const S=new Set;function T(e,t){e&&e.i&&(S.delete(e),e.i(t))}function O(e,t,n,s){if(e&&e.o){if(S.has(e))return;S.add(e),(void 0).c.push(()=>{S.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function _(e){e&&e.c()}function N(e,n,r,l){const{fragment:c,on_mount:i,on_destroy:a,after_update:h}=e.$$;c&&c.m(n,r),l||E(()=>{const n=i.map(t).filter(o);a?a.push(...n):s(n),e.$$.on_mount=[]}),h.forEach(E)}function R(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function j(e,t){-1===e.$$.dirty[0]&&(w.push(e),y||(y=!0,$.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,o,r,l,c,a,h,u=[-1]){const d=p;g(t);const f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||d.$$.root};h&&h(f.root);let v=!1;if(f.ctx=r?r(t,o.props||{},(e,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),v&&j(t,e)),n}):[],f.update(),v=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);f.fragment&&f.fragment.l(e),e.forEach(i)}else f.fragment&&f.fragment.c();o.intro&&T(t.$$.fragment),N(t,o.target,o.anchor,o.customElement),A()}g(d)}class I{$destroy(){R(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function L(e,t,n){const s=e.slice();return s[2]=t[n],s}function U(e){let t,n,s,o,r=e[2].toUpperCase()+"";return{c(){t=a("div"),n=a("h1"),s=u(r),o=d(),v(n,"class","svelte-17fnxuj"),v(t,"class","row svelte-17fnxuj")},m(e,r){c(e,t,r),l(t,n),l(n,s),l(t,o)},p(e,t){2&t&&r!==(r=e[2].toUpperCase()+"")&&m(s,r)},d(e){e&&i(t)}}}function H(t){let n,s,o,r,p,g,w,x,z,b,$,y,E,k=t[0].toUpperCase()+"",M=t[1],A=[];for(let e=0;e<M.length;e+=1)A[e]=U(L(t,M,e));return{c(){n=a("nav"),s=a("header"),o=a("h1"),r=u(k),p=d(),g=h("svg"),w=h("line"),x=h("line"),z=h("line"),b=d(),$=a("div");for(let e=0;e<A.length;e+=1)A[e].c();v(o,"class","svelte-17fnxuj"),v(w,"x1","3"),v(w,"y1","12"),v(w,"x2","21"),v(w,"y2","12"),v(x,"x1","3"),v(x,"y1","6"),v(x,"x2","21"),v(x,"y2","6"),v(z,"x1","3"),v(z,"y1","18"),v(z,"x2","21"),v(z,"y2","18"),v(g,"class","hamburger svelte-17fnxuj"),v(g,"xmlns","http://www.w3.org/2000/svg"),v(g,"width","40"),v(g,"height","40"),v(g,"viewBox","0 0 24 24"),v(g,"fill","none"),v(g,"stroke","currentColor"),v(g,"stroke-width","3"),v(g,"stroke-linecap","round"),v(g,"stroke-linejoin","round"),v(s,"class","svelte-17fnxuj"),v($,"class","dropdown svelte-17fnxuj"),v(n,"class","svelte-17fnxuj")},m(e,t){c(e,n,t),l(n,s),l(s,o),l(o,r),l(s,p),l(s,g),l(g,w),l(g,x),l(g,z),l(n,b),l(n,$);for(let e=0;e<A.length;e+=1)A[e].m($,null);y||(E=f(g,"click",D),y=!0)},p(e,[t]){if(1&t&&k!==(k=e[0].toUpperCase()+"")&&m(r,k),2&t){let n;for(M=e[1],n=0;n<M.length;n+=1){const s=L(e,M,n);A[n]?A[n].p(s,t):(A[n]=U(s),A[n].c(),A[n].m($,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=M.length}},i:e,o:e,d(e){e&&i(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(A,e),y=!1,E()}}}function D(){const e=document.querySelector(".dropdown");"flex"==e.style.display?e.style.display="none":e.style.display="flex"}function P(e,t,n){let{barTitle:s}=t,{barComponents:o}=t;return e.$$set=e=>{"barTitle"in e&&n(0,s=e.barTitle),"barComponents"in e&&n(1,o=e.barComponents)},[s,o]}class J extends I{constructor(e){super(),B(this,e,P,H,r,{barTitle:0,barComponents:1})}}function F(t){let n,s,o,r,f,p,g,w,x,z,b,$,y,E,k,M,A,C,S=t[0][Math.floor(Math.random()*t[0].length)]+"";return{c(){n=a("header"),s=a("div"),o=a("div"),r=d(),f=h("svg"),p=h("g"),g=h("path"),w=h("g"),x=h("path"),z=d(),b=a("h1"),b.textContent="ETEC JORNALISTA ROBERTO MARINHO",$=d(),y=a("h2"),E=u(S),k=d(),M=a("div"),M.innerHTML='<svg class="youtube svelte-h145wa" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> \n\n            <svg class="twitter svelte-h145wa" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> \n\n            <svg class="instagram svelte-h145wa" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> \n\n            <svg class="facebook svelte-h145wa" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',A=d(),C=a("div"),v(o,"class","separador separador1 svelte-h145wa"),v(g,"d","M477 965 c-9 -19 -19 -63 -23 -98 l-6 -64 -97 -17 c-116 -20 -114 -20 -173 -18 -41 2 -48 5 -48 22 0 25 44 125 59 134 17 11 13 26 -7 26 -38 0 -90 -49 -124 -117 -29 -59 -33 -77 -32 -141 1 -76 9 -92 47 -92 9 0 22 11 28 24 7 15 17 22 28 19 9 -2 77 -10 151 -17 l135 -12 -120 -8 c-119 -7 -244 -21 -277 -32 -24 -7 -23 -49 1 -60 17 -8 146 -163 334 -403 26 -33 47 -69 47 -81 0 -46 45 -4 55 52 7 36 9 38 45 38 36 0 38 -2 45 -37 10 -58 55 -99 55 -52 0 26 353 471 382 481 14 6 18 15 16 35 -3 27 -6 28 -83 40 -44 6 -136 15 -205 19 l-125 8 135 12 c74 7 143 15 153 18 12 3 21 -3 28 -20 7 -20 15 -25 36 -22 24 3 29 9 36 48 11 63 1 119 -34 190 -31 61 -85 110 -121 110 -20 0 -24 -15 -8 -25 16 -10 48 -77 55 -118 l7 -37 -48 -2 c-61 -2 -59 -2 -175 18 l-96 17 -6 56 c-7 63 -29 133 -43 138 -6 2 -18 -12 -27 -32z m-15 -236 c7 -50 69 -49 76 0 3 22 6 22 110 16 150 -8 212 -15 212 -24 0 -16 -60 -33 -204 -58 l-151 -25 -135 21 c-179 28 -246 48 -227 67 4 4 57 10 119 14 201 12 196 13 200 -11z m-350 -241 c8 -7 41 -51 73 -98 32 -47 72 -105 90 -130 37 -52 53 -80 38 -65 -9 9 -139 177 -207 268 -28 36 -25 49 6 25z m801 0 c-6 -7 -60 -79 -122 -160 -62 -82 -114 -148 -117 -148 -2 0 17 30 43 68 25 37 71 103 101 147 55 80 78 105 95 105 6 0 6 -5 0 -12z m-718 -30 c28 -39 165 -273 165 -281 0 -5 -45 60 -100 143 -55 82 -100 153 -100 155 0 13 21 3 35 -17z m560 -117 c-48 -72 -89 -131 -92 -131 -3 0 5 17 17 38 13 20 45 76 72 125 44 76 75 113 86 102 2 -1 -36 -62 -83 -134z m-428 102 l82 -17 21 -48 c20 -46 20 -49 4 -148 -10 -55 -21 -100 -26 -100 -4 0 -8 5 -8 12 0 6 -38 78 -85 160 -47 82 -85 151 -85 154 0 6 9 5 97 -13z m443 11 c0 -7 -156 -284 -174 -309 -12 -16 -14 -10 -25 59 -15 104 -14 149 5 189 15 31 23 35 88 49 80 18 106 21 106 12z m-240 -29 c0 -11 -24 -55 -31 -55 -4 0 -12 14 -18 30 -10 29 -9 30 20 30 16 0 29 -2 29 -5z m-11 -195 c6 -28 11 -53 11 -55 0 -7 -45 -6 -52 0 -7 8 13 105 22 105 5 0 13 -23 19 -50z"),v(p,"id","layer101"),v(p,"fill","#820024"),v(p,"stroke","none"),v(x,"d","M235 604 c-92 -9 -206 -25 -220 -30 -22 -9 -18 -49 4 -60 17 -8 146 -163 334 -403 26 -33 47 -69 47 -81 0 -46 45 -4 55 53 7 35 9 37 45 37 36 0 38 -2 45 -37 10 -58 55 -99 55 -52 0 26 353 471 382 481 14 6 18 15 16 35 -3 27 -7 29 -83 41 -77 12 -597 24 -680 16z m-123 -116 c8 -7 41 -51 73 -98 32 -47 72 -105 90 -130 37 -52 53 -80 38 -65 -9 9 -139 177 -207 268 -28 36 -25 49 6 25z m801 0 c-6 -7 -60 -79 -122 -160 -62 -82 -114 -148 -117 -148 -2 0 17 30 43 68 25 37 71 103 101 147 55 80 78 105 95 105 6 0 6 -5 0 -12z m-718 -30 c28 -39 165 -273 165 -281 0 -5 -45 60 -100 143 -55 82 -100 153 -100 155 0 13 21 3 35 -17z m560 -117 c-48 -72 -89 -131 -92 -131 -3 0 5 17 17 38 13 20 45 76 72 125 44 76 75 113 86 102 2 -1 -36 -62 -83 -134z m-428 102 l82 -17 21 -48 c20 -46 20 -49 4 -148 -10 -55 -21 -100 -26 -100 -4 0 -8 5 -8 12 0 6 -38 78 -85 160 -47 82 -85 151 -85 154 0 6 9 5 97 -13z m443 11 c0 -7 -156 -284 -174 -309 -12 -16 -14 -10 -25 59 -15 104 -14 149 5 189 15 31 23 35 88 49 80 18 106 21 106 12z m-240 -29 c0 -11 -24 -55 -31 -55 -4 0 -12 14 -18 30 -10 29 -9 30 20 30 16 0 29 -2 29 -5z m-11 -195 c6 -28 11 -53 11 -55 0 -7 -45 -6 -52 0 -7 8 13 105 22 105 5 0 13 -23 19 -50z"),v(w,"id","layer102"),v(w,"fill","#f68933"),v(w,"stroke","none"),v(f,"class","etecLogo svelte-h145wa"),v(f,"version","1.0"),v(f,"xmlns","http://www.w3.org/2000/svg"),v(f,"width","81"),v(f,"height","81"),v(f,"viewBox","0 0 1000 1000"),v(f,"preserveAspectRatio","xMidYMid meet"),v(b,"class","svelte-h145wa"),v(y,"class","svelte-h145wa"),v(M,"class","icons svelte-h145wa"),v(C,"class","separador separador2 svelte-h145wa"),v(s,"class","hero svelte-h145wa"),v(n,"class","svelte-h145wa")},m(e,t){c(e,n,t),l(n,s),l(s,o),l(s,r),l(s,f),l(f,p),l(p,g),l(f,w),l(w,x),l(s,z),l(s,b),l(s,$),l(s,y),l(y,E),l(s,k),l(s,M),l(s,A),l(s,C)},p(e,[t]){1&t&&S!==(S=e[0][Math.floor(Math.random()*e[0].length)]+"")&&m(E,S)},i:e,o:e,d(e){e&&i(n)}}}function q(e,t,n){let{frases:s}=t;return e.$$set=e=>{"frases"in e&&n(0,s=e.frases)},[s]}class Q extends I{constructor(e){super(),B(this,e,q,F,r,{frases:0})}}function V(t){let n,s,o,r,u,m,p,g,w,x,z,b,$,y,E,k,M,A,C,S,T,O,_,N,R,j,B,I,L,U,H,D,P,J,F,q,Q,V;return{c(){n=a("main"),s=a("h1"),s.textContent="INÍCIO",o=d(),r=a("div"),r.innerHTML='<svg class="virus svelte-53bruo" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fff" viewBox="0 0 24 24"><path d="M10.382 15.188c-.347.26-.769.401-1.202.401-.803 0-1.207-.981-.641-1.547.307-.307.702-.505 1.133-.566.811-.117 1.167-1.122.57-1.718-.596-.597-1.601-.24-1.718.571-.062.429-.261.827-.566 1.133-.569.568-1.548.164-1.548-.642 0-.435.141-.854.4-1.202.493-.656.032-1.618-.81-1.618s-1.303.961-.811 1.618c.259.347.4.769.4 1.202 0 .805-.979 1.21-1.548.641-.308-.307-.505-.702-.566-1.133-.117-.811-1.122-1.167-1.718-.571-.597.596-.24 1.601.57 1.718.428.062.826.26 1.133.566.569.569.165 1.547-.641 1.547-.435 0-.854-.14-1.202-.401-.655-.49-1.617-.029-1.617.813 0 .841.962 1.303 1.618.812.347-.26.769-.401 1.202-.401.805 0 1.21.978.641 1.547-.307.307-.702.505-1.133.566-.811.117-1.167 1.122-.57 1.718.596.597 1.601.24 1.718-.571.062-.429.261-.827.566-1.133.569-.568 1.548-.164 1.548.642 0 .435-.141.854-.4 1.202-.492.655-.034 1.618.81 1.618.839 0 1.306-.96.811-1.62-.26-.344-.4-.764-.4-1.195 0-.807.979-1.216 1.548-.647.308.308.505.703.566 1.134.117.811 1.122 1.167 1.718.571.596-.595.242-1.603-.572-1.718-.426-.061-.822-.258-1.127-.562-.572-.571-.169-1.551.637-1.551.435 0 .854.14 1.202.401.654.489 1.617.031 1.617-.813 0-.843-.963-1.303-1.618-.812zm-5.364 2.148c-.273 0-.495-.221-.495-.495 0-.273.222-.495.495-.495s.495.222.495.495c0 .274-.222.495-.495.495zm.63-1.571c-.429 0-.775-.348-.775-.776 0-.429.347-.777.775-.777s.777.348.777.777c.001.428-.348.776-.777.776zm1.464 1.484c-.363 0-.657-.294-.657-.657s.294-.658.657-.658.657.295.657.658-.293.657-.657.657zm16.888-14.249v11.535c0 4.603-3.203 5.804-9 9.465-1.318-.833-2.496-1.535-3.539-2.183.575-.481.894-1.055 1.021-1.726.731.456 1.564.962 2.519 1.551 5.313-3.281 7-4.065 7-7.107v-9.575c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v3.806c-.541-.484-1.244-.766-2.001-.766v-5c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-4 11.535c0 1.606-.415 1.935-5 4.76v-14.353c1.827 1.105 3.474 1.6 5 1.833v7.76z"></path></svg> \n        <h2 class="svelte-53bruo">PREVINA-SE.<br/>\n            FIQUE EM CASA. <br/>\n            USE MÁSCARA <br/></h2>',u=d(),m=a("hr"),p=d(),g=a("div"),g.innerHTML='<svg class="gift svelte-53bruo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"></path></svg> \n        <h1 class="svelte-53bruo">A ETEC JRM TE DESEJA BOAS FESTAS</h1> \n        <svg class="etecSvg svelte-53bruo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet"><g id="layer101" fill="#fff" stroke="none"><path d="M477 965 c-9 -19 -19 -63 -23 -98 l-6 -64 -97 -17 c-116 -20 -114 -20 -173 -18 -41 2 -48 5 -48 22 0 25 44 125 59 134 17 11 13 26 -7 26 -38 0 -90 -49 -124 -117 -29 -59 -33 -77 -32 -141 1 -76 9 -92 47 -92 9 0 22 11 28 24 7 15 17 22 28 19 9 -2 77 -10 151 -17 l135 -12 -120 -8 c-119 -7 -244 -21 -277 -32 -24 -7 -23 -49 1 -60 17 -8 146 -163 334 -403 26 -33 47 -69 47 -81 0 -46 45 -4 55 52 7 36 9 38 45 38 36 0 38 -2 45 -37 10 -58 55 -99 55 -52 0 26 353 471 382 481 14 6 18 15 16 35 -3 27 -6 28 -83 40 -44 6 -136 15 -205 19 l-125 8 135 12 c74 7 143 15 153 18 12 3 21 -3 28 -20 7 -20 15 -25 36 -22 24 3 29 9 36 48 11 63 1 119 -34 190 -31 61 -85 110 -121 110 -20 0 -24 -15 -8 -25 16 -10 48 -77 55 -118 l7 -37 -48 -2 c-61 -2 -59 -2 -175 18 l-96 17 -6 56 c-7 63 -29 133 -43 138 -6 2 -18 -12 -27 -32z m-15 -236 c7 -50 69 -49 76 0 3 22 6 22 110 16 150 -8 212 -15 212 -24 0 -16 -60 -33 -204 -58 l-151 -25 -135 21 c-179 28 -246 48 -227 67 4 4 57 10 119 14 201 12 196 13 200 -11z m-350 -241 c8 -7 41 -51 73 -98 32 -47 72 -105 90 -130 37 -52 53 -80 38 -65 -9 9 -139 177 -207 268 -28 36 -25 49 6 25z m801 0 c-6 -7 -60 -79 -122 -160 -62 -82 -114 -148 -117 -148 -2 0 17 30 43 68 25 37 71 103 101 147 55 80 78 105 95 105 6 0 6 -5 0 -12z m-718 -30 c28 -39 165 -273 165 -281 0 -5 -45 60 -100 143 -55 82 -100 153 -100 155 0 13 21 3 35 -17z m560 -117 c-48 -72 -89 -131 -92 -131 -3 0 5 17 17 38 13 20 45 76 72 125 44 76 75 113 86 102 2 -1 -36 -62 -83 -134z m-428 102 l82 -17 21 -48 c20 -46 20 -49 4 -148 -10 -55 -21 -100 -26 -100 -4 0 -8 5 -8 12 0 6 -38 78 -85 160 -47 82 -85 151 -85 154 0 6 9 5 97 -13z m443 11 c0 -7 -156 -284 -174 -309 -12 -16 -14 -10 -25 59 -15 104 -14 149 5 189 15 31 23 35 88 49 80 18 106 21 106 12z m-240 -29 c0 -11 -24 -55 -31 -55 -4 0 -12 14 -18 30 -10 29 -9 30 20 30 16 0 29 -2 29 -5z m-11 -195 c6 -28 11 -53 11 -55 0 -7 -45 -6 -52 0 -7 8 13 105 22 105 5 0 13 -23 19 -50z"></path></g><g id="layer102" fill="#fff" stroke="none"><path d="M235 604 c-92 -9 -206 -25 -220 -30 -22 -9 -18 -49 4 -60 17 -8 146 -163 334 -403 26 -33 47 -69 47 -81 0 -46 45 -4 55 53 7 35 9 37 45 37 36 0 38 -2 45 -37 10 -58 55 -99 55 -52 0 26 353 471 382 481 14 6 18 15 16 35 -3 27 -7 29 -83 41 -77 12 -597 24 -680 16z m-123 -116 c8 -7 41 -51 73 -98 32 -47 72 -105 90 -130 37 -52 53 -80 38 -65 -9 9 -139 177 -207 268 -28 36 -25 49 6 25z m801 0 c-6 -7 -60 -79 -122 -160 -62 -82 -114 -148 -117 -148 -2 0 17 30 43 68 25 37 71 103 101 147 55 80 78 105 95 105 6 0 6 -5 0 -12z m-718 -30 c28 -39 165 -273 165 -281 0 -5 -45 60 -100 143 -55 82 -100 153 -100 155 0 13 21 3 35 -17z m560 -117 c-48 -72 -89 -131 -92 -131 -3 0 5 17 17 38 13 20 45 76 72 125 44 76 75 113 86 102 2 -1 -36 -62 -83 -134z m-428 102 l82 -17 21 -48 c20 -46 20 -49 4 -148 -10 -55 -21 -100 -26 -100 -4 0 -8 5 -8 12 0 6 -38 78 -85 160 -47 82 -85 151 -85 154 0 6 9 5 97 -13z m443 11 c0 -7 -156 -284 -174 -309 -12 -16 -14 -10 -25 59 -15 104 -14 149 5 189 15 31 23 35 88 49 80 18 106 21 106 12z m-240 -29 c0 -11 -24 -55 -31 -55 -4 0 -12 14 -18 30 -10 29 -9 30 20 30 16 0 29 -2 29 -5z m-11 -195 c6 -28 11 -53 11 -55 0 -7 -45 -6 -52 0 -7 8 13 105 22 105 5 0 13 -23 19 -50z"></path></g></svg>',w=d(),x=a("div"),z=a("h1"),z.textContent="20",b=d(),$=a("h2"),$.textContent="SÁBADO",y=d(),E=a("div"),k=a("div"),M=d(),A=a("div"),C=a("div"),S=a("h1"),S.textContent="FÍSICA",T=d(),O=h("svg"),_=h("line"),N=h("line"),R=d(),j=a("div"),j.innerHTML='<h1 class="svelte-53bruo">ETEC JRM</h1> \n                    <svg class="etecSvg svelte-53bruo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet"><g id="layer101" fill="#820024" stroke="none"><path d="M477 965 c-9 -19 -19 -63 -23 -98 l-6 -64 -97 -17 c-116 -20 -114 -20 -173 -18 -41 2 -48 5 -48 22 0 25 44 125 59 134 17 11 13 26 -7 26 -38 0 -90 -49 -124 -117 -29 -59 -33 -77 -32 -141 1 -76 9 -92 47 -92 9 0 22 11 28 24 7 15 17 22 28 19 9 -2 77 -10 151 -17 l135 -12 -120 -8 c-119 -7 -244 -21 -277 -32 -24 -7 -23 -49 1 -60 17 -8 146 -163 334 -403 26 -33 47 -69 47 -81 0 -46 45 -4 55 52 7 36 9 38 45 38 36 0 38 -2 45 -37 10 -58 55 -99 55 -52 0 26 353 471 382 481 14 6 18 15 16 35 -3 27 -6 28 -83 40 -44 6 -136 15 -205 19 l-125 8 135 12 c74 7 143 15 153 18 12 3 21 -3 28 -20 7 -20 15 -25 36 -22 24 3 29 9 36 48 11 63 1 119 -34 190 -31 61 -85 110 -121 110 -20 0 -24 -15 -8 -25 16 -10 48 -77 55 -118 l7 -37 -48 -2 c-61 -2 -59 -2 -175 18 l-96 17 -6 56 c-7 63 -29 133 -43 138 -6 2 -18 -12 -27 -32z m-15 -236 c7 -50 69 -49 76 0 3 22 6 22 110 16 150 -8 212 -15 212 -24 0 -16 -60 -33 -204 -58 l-151 -25 -135 21 c-179 28 -246 48 -227 67 4 4 57 10 119 14 201 12 196 13 200 -11z m-350 -241 c8 -7 41 -51 73 -98 32 -47 72 -105 90 -130 37 -52 53 -80 38 -65 -9 9 -139 177 -207 268 -28 36 -25 49 6 25z m801 0 c-6 -7 -60 -79 -122 -160 -62 -82 -114 -148 -117 -148 -2 0 17 30 43 68 25 37 71 103 101 147 55 80 78 105 95 105 6 0 6 -5 0 -12z m-718 -30 c28 -39 165 -273 165 -281 0 -5 -45 60 -100 143 -55 82 -100 153 -100 155 0 13 21 3 35 -17z m560 -117 c-48 -72 -89 -131 -92 -131 -3 0 5 17 17 38 13 20 45 76 72 125 44 76 75 113 86 102 2 -1 -36 -62 -83 -134z m-428 102 l82 -17 21 -48 c20 -46 20 -49 4 -148 -10 -55 -21 -100 -26 -100 -4 0 -8 5 -8 12 0 6 -38 78 -85 160 -47 82 -85 151 -85 154 0 6 9 5 97 -13z m443 11 c0 -7 -156 -284 -174 -309 -12 -16 -14 -10 -25 59 -15 104 -14 149 5 189 15 31 23 35 88 49 80 18 106 21 106 12z m-240 -29 c0 -11 -24 -55 -31 -55 -4 0 -12 14 -18 30 -10 29 -9 30 20 30 16 0 29 -2 29 -5z m-11 -195 c6 -28 11 -53 11 -55 0 -7 -45 -6 -52 0 -7 8 13 105 22 105 5 0 13 -23 19 -50z"></path></g><g id="layer102" fill="#f68933" stroke="none"><path d="M235 604 c-92 -9 -206 -25 -220 -30 -22 -9 -18 -49 4 -60 17 -8 146 -163 334 -403 26 -33 47 -69 47 -81 0 -46 45 -4 55 53 7 35 9 37 45 37 36 0 38 -2 45 -37 10 -58 55 -99 55 -52 0 26 353 471 382 481 14 6 18 15 16 35 -3 27 -7 29 -83 41 -77 12 -597 24 -680 16z m-123 -116 c8 -7 41 -51 73 -98 32 -47 72 -105 90 -130 37 -52 53 -80 38 -65 -9 9 -139 177 -207 268 -28 36 -25 49 6 25z m801 0 c-6 -7 -60 -79 -122 -160 -62 -82 -114 -148 -117 -148 -2 0 17 30 43 68 25 37 71 103 101 147 55 80 78 105 95 105 6 0 6 -5 0 -12z m-718 -30 c28 -39 165 -273 165 -281 0 -5 -45 60 -100 143 -55 82 -100 153 -100 155 0 13 21 3 35 -17z m560 -117 c-48 -72 -89 -131 -92 -131 -3 0 5 17 17 38 13 20 45 76 72 125 44 76 75 113 86 102 2 -1 -36 -62 -83 -134z m-428 102 l82 -17 21 -48 c20 -46 20 -49 4 -148 -10 -55 -21 -100 -26 -100 -4 0 -8 5 -8 12 0 6 -38 78 -85 160 -47 82 -85 151 -85 154 0 6 9 5 97 -13z m443 11 c0 -7 -156 -284 -174 -309 -12 -16 -14 -10 -25 59 -15 104 -14 149 5 189 15 31 23 35 88 49 80 18 106 21 106 12z m-240 -29 c0 -11 -24 -55 -31 -55 -4 0 -12 14 -18 30 -10 29 -9 30 20 30 16 0 29 -2 29 -5z m-11 -195 c6 -28 11 -53 11 -55 0 -7 -45 -6 -52 0 -7 8 13 105 22 105 5 0 13 -23 19 -50z"></path></g></svg>',B=d(),I=a("div"),I.innerHTML='<h1 class="svelte-53bruo">11:30 - 12:30</h1>',L=d(),U=a("h1"),U.innerHTML="RECEBA JÁ NOSSAS LIÇÕES<br/> PERSONALIZADAS NO SEU EMAIL",H=d(),D=a("input"),P=d(),J=a("input"),F=d(),q=a("button"),q.textContent="QUERO RECEBER NOTIFICAÇÕES PERSONALIZADAS",v(s,"class","svelte-53bruo"),v(r,"class","widget-covid svelte-53bruo"),v(m,"id","separador"),v(m,"class","svelte-53bruo"),v(g,"class","widget-natal svelte-53bruo"),v(z,"class","svelte-53bruo"),v($,"class","svelte-53bruo"),v(k,"class","barra svelte-53bruo"),v(S,"class","svelte-53bruo"),v(_,"x1","18"),v(_,"y1","6"),v(_,"x2","6"),v(_,"y2","18"),v(N,"x1","6"),v(N,"y1","6"),v(N,"x2","18"),v(N,"y2","18"),v(O,"class","x svelte-53bruo"),v(O,"xmlns","http://www.w3.org/2000/svg"),v(O,"width","24"),v(O,"height","24"),v(O,"viewBox","0 0 24 24"),v(O,"fill","none"),v(O,"stroke","currentColor"),v(O,"stroke-width","2"),v(O,"stroke-linecap","round"),v(O,"stroke-linejoin","round"),v(C,"class","row row1 svelte-53bruo"),v(j,"class","row row2 svelte-53bruo"),v(I,"class","row row3 svelte-53bruo"),v(A,"class","content svelte-53bruo"),v(E,"class","card svelte-53bruo"),v(U,"class","licaoText svelte-53bruo"),v(D,"type","text"),v(D,"placeholder","Nome"),v(D,"class","svelte-53bruo"),v(J,"type","text"),v(J,"class","emailInput svelte-53bruo"),v(J,"placeholder","Email"),v(q,"type","submit"),v(q,"class","svelte-53bruo"),v(x,"class","licoes svelte-53bruo"),v(n,"class","index svelte-53bruo")},m(e,t){c(e,n,t),l(n,s),l(n,o),l(n,r),l(n,u),l(n,m),l(n,p),l(n,g),l(n,w),l(n,x),l(x,z),l(x,b),l(x,$),l(x,y),l(x,E),l(E,k),l(E,M),l(E,A),l(A,C),l(C,S),l(C,T),l(C,O),l(O,_),l(O,N),l(A,R),l(A,j),l(A,B),l(A,I),l(x,L),l(x,U),l(x,H),l(x,D),l(x,P),l(x,J),l(x,F),l(x,q),Q||(V=f(O,"click",Y),Q=!0)},p:e,i:e,o:e,d(e){e&&i(n),Q=!1,V()}}}function Y(){document.querySelector(".licoes .card").style.display="none"}class W extends I{constructor(e){super(),B(this,e,null,V,r,{})}}function X(t){let n,s,o,r,l,a;return n=new J({props:{barTitle:"início",barComponents:["história","espaço do aluno","cursos técnicos","fale conosco"]}}),o=new Q({props:{frases:["ATRÁVES DO CONHECIMENTO, CONSQUISTA-SE O MUNDO","EXEMPLO","MAIS UM EXEMPLO"]}}),l=new W({}),{c(){_(n.$$.fragment),s=d(),_(o.$$.fragment),r=d(),_(l.$$.fragment)},m(e,t){N(n,e,t),c(e,s,t),N(o,e,t),c(e,r,t),N(l,e,t),a=!0},p:e,i(e){a||(T(n.$$.fragment,e),T(o.$$.fragment,e),T(l.$$.fragment,e),a=!0)},o(e){O(n.$$.fragment,e),O(o.$$.fragment,e),O(l.$$.fragment,e),a=!1},d(e){R(n,e),e&&i(s),R(o,e),e&&i(r),R(l,e)}}}const Z=new class extends I{constructor(e){super(),B(this,e,null,X,r,{})}}({target:document.body,props:{}});return"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),Z}();
//# sourceMappingURL=bundle.js.map