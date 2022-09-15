var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){return""===t?null:+t}function $(t,e){t.value=null==e?"":e}function g(t,e,n){t.classList[n?"add":"remove"](e)}let y;function v(t){y=t}function b(){if(!y)throw new Error("Function called outside component initialization");return y}function w(){const t=b();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const l=function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}(e,n,{cancelable:r});return o.slice().forEach((e=>{e.call(t,l)})),!l.defaultPrevented}return!0}}const _=[],x=[],k=[],E=[],C=Promise.resolve();let D=!1;function j(t){k.push(t)}const A=new Set;let z=0;function I(){const t=y;do{for(;z<_.length;){const t=_[z];z++,v(t),O(t.$$)}for(v(null),_.length=0,z=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];A.has(e)||(A.add(e),e())}k.length=0}while(_.length);for(;E.length;)E.pop()();D=!1,A.clear(),v(t)}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const R=new Set;let T;function U(t,e){t&&t.i&&(R.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),T.c.push((()=>{R.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function L(t){t&&t.c()}function S(t,n,l,s){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(n,l),s||j((()=>{const n=a.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(j)}function q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(_.push(t),D||(D=!0,C.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,o,l,s,c,i,u,f=[-1]){const d=y;v(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};u&&u(p.root);let m=!1;if(p.ctx=l?l(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&B(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();o.intro&&U(e.$$.fragment),S(e,o.target,o.anchor,o.customElement),I()}v(d)}class N{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n,r;return{c(){n=i("div"),m(n,"class",r="week "+e[1]+" svelte-11v4w6b"),g(n,"week--done_true",e[0])},m(t,e){c(t,n,e)},p(t,[e]){2&e&&r!==(r="week "+t[1]+" svelte-11v4w6b")&&m(n,"class",r),3&e&&g(n,"week--done_true",t[0])},i:t,o:t,d(t){t&&a(n)}}}function Y(t,e,n){let{done:r,class:o=""}=e;return t.$$set=t=>{"done"in t&&n(0,r=t.done),"class"in t&&n(1,o=t.class)},[r,o]}class K extends N{constructor(t){super(),M(this,t,Y,P,l,{done:0,class:1})}}function G(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var H,J,Q=function(t,e,n,r){e=e||"&",n=n||"=";var o={};if("string"!=typeof t||0===t.length)return o;var l=/\+/g;t=t.split(e);var s=1e3;r&&"number"==typeof r.maxKeys&&(s=r.maxKeys);var c=t.length;s>0&&c>s&&(c=s);for(var a=0;a<c;++a){var i,u,f,d,p=t[a].replace(l,"%20"),m=p.indexOf(n);m>=0?(i=p.substr(0,m),u=p.substr(m+1)):(i=p,u=""),f=decodeURIComponent(i),d=decodeURIComponent(u),G(o,f)?Array.isArray(o[f])?o[f].push(d):o[f]=[o[f],d]:o[f]=d}return o},V=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},W=function(t,e,n,r){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map((function(r){var o=encodeURIComponent(V(r))+n;return Array.isArray(t[r])?t[r].map((function(t){return o+encodeURIComponent(V(t))})).join(e):o+encodeURIComponent(V(t[r]))})).join(e):r?encodeURIComponent(V(r))+n+encodeURIComponent(V(t)):""},X=(function(t,e){e.decode=e.parse=Q,e.encode=e.stringify=W}(J={path:H,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&J.path)}},J.exports),J.exports);const Z=6048e5,tt=window.location.origin+window.location.pathname;function et(e){let n,o,l,y,v,b,w,_,x,k,E,C,D,j,A,z,I;return{c(){n=i("form"),o=i("label"),l=i("h3"),l.textContent="Birth date:",y=f(),v=i("input"),b=f(),w=i("label"),_=i("h3"),_.textContent="Years to show:",x=f(),k=i("input"),C=f(),D=i("button"),j=u("Show me!"),m(l,"class","data__title svelte-8v1r8z"),m(v,"type","text"),m(v,"placeholder","dd.mm.yyyy"),m(v,"class","svelte-8v1r8z"),g(v,"input--correct_false",e[4]),m(o,"class","data__item svelte-8v1r8z"),m(_,"class","data__title svelte-8v1r8z"),m(k,"type","number"),m(k,"min",E=0),m(w,"class","data__item svelte-8v1r8z"),m(D,"type","submit"),m(D,"class","button"),D.disabled=e[2],m(n,"class",A="data "+e[0]+" svelte-8v1r8z")},m(t,r){c(t,n,r),s(n,o),s(o,l),s(o,y),s(o,v),$(v,e[1]),s(n,b),s(n,w),s(w,_),s(w,x),s(w,k),$(k,e[3]),s(n,C),s(n,D),s(D,j),z||(I=[d(v,"input",e[7]),d(k,"input",e[8]),d(n,"submit",p(e[5]))],z=!0)},p(t,[e]){2&e&&v.value!==t[1]&&$(v,t[1]),16&e&&g(v,"input--correct_false",t[4]),8&e&&h(k.value)!==t[3]&&$(k,t[3]),4&e&&(D.disabled=t[2]),1&e&&A!==(A="data "+t[0]+" svelte-8v1r8z")&&m(n,"class",A)},i:t,o:t,d(t){t&&a(n),z=!1,r(I)}}}function nt(t,e,n){let r,o,l;const s=w(),c=t=>s("show",t);!function(t){b().$$.on_mount.push(t)}((()=>c({birthDate:r?null:l,years:p})));const a={birthDate:/\d{1,2}\.\d{1,2}\.\d{4}/};let{pageTitle:i}=e,{class:u=""}=e,f=X.parse(window.location.search.slice(1)),d=f.date||"",p=+f.years||1;return t.$$set=t=>{"pageTitle"in t&&n(6,i=t.pageTitle),"class"in t&&n(0,u=t.class)},t.$$.update=()=>{2&t.$$.dirty&&n(2,r=!a.birthDate.test(d)),6&t.$$.dirty&&n(4,o=d.length&&r),2&t.$$.dirty&&(l=new Date(d.split(".").reverse().join("-")))},[u,d,r,p,o,()=>{"file:"!==window.location.protocol&&window.history.pushState({pageTitle:i},"",`${tt}?${X.encode((({birthDate:t,years:e})=>({date:t,years:""+e}))({birthDate:d,years:p}))}`),c({birthDate:l,years:p})},i,function(){d=this.value,n(1,d)},function(){p=h(this.value),n(3,p)}]}class rt extends N{constructor(t){super(),M(this,t,nt,et,l,{pageTitle:6,class:0})}}function ot(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function lt(t){let e,n;return e=new K({props:{done:t[8]+1<=t[0],class:"calendar__item"}}),{c(){L(e.$$.fragment)},m(t,r){S(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.done=t[8]+1<=t[0]),e.$set(r)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function st(t){let e,n,o,l,u,d,p,h;document.title=e=ct,l=new rt({props:{pageTitle:ct,class:"form"}}),l.$on("show",t[2]);let $=Array(t[1]),g=[];for(let e=0;e<$.length;e+=1)g[e]=lt(ot(t,$,e));const y=t=>F(g[t],1,1,(()=>{g[t]=null}));return{c(){n=f(),o=i("div"),L(l.$$.fragment),u=f(),d=i("section");for(let t=0;t<g.length;t+=1)g[t].c();var t;m(d,"class",p=(null==(t="calendar")?"":t)+" svelte-1mrnnm"),m(o,"class","app svelte-1mrnnm")},m(t,e){c(t,n,e),c(t,o,e),S(l,o,null),s(o,u),s(o,d);for(let t=0;t<g.length;t+=1)g[t].m(d,null);h=!0},p(t,[n]){if((!h||0&n)&&e!==(e=ct)&&(document.title=e),3&n){let e;for($=Array(t[1]),e=0;e<$.length;e+=1){const r=ot(t,$,e);g[e]?(g[e].p(r,n),U(g[e],1)):(g[e]=lt(r),g[e].c(),U(g[e],1),g[e].m(d,null))}for(T={r:0,c:[],p:T},e=$.length;e<g.length;e+=1)y(e);T.r||r(T.c),T=T.p}},i(t){if(!h){U(l.$$.fragment,t);for(let t=0;t<$.length;t+=1)U(g[t]);h=!0}},o(t){F(l.$$.fragment,t),g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)F(g[t]);h=!1},d(t){t&&a(n),t&&a(o),q(l),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(g,t)}}}const ct="Life display";function at(t,e,n){let r,o,l,s,c;return t.$$.update=()=>{24&t.$$.dirty&&n(5,r=void 0===s||null==c?null:new Date(new Date(c).setFullYear(c.getFullYear()+s))),56&t.$$.dirty&&n(1,o=void 0===s||null==c||null===r?0:Math.ceil((+r-+c)/Z)),24&t.$$.dirty&&n(0,l=void 0===s||null==c?0:Math.ceil((+new Date-+c)/Z))},[l,o,({detail:t})=>{n(3,s=+t.years),n(4,c=t.birthDate)},s,c,r]}class it extends N{constructor(t){super(),M(this,t,at,st,l,{})}}function ut(e){let n,r;return n=new it({}),{c(){L(n.$$.fragment)},m(t,e){S(n,t,e),r=!0},p:t,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){F(n.$$.fragment,t),r=!1},d(t){q(n,t)}}}return new class extends N{constructor(t){super(),M(this,t,null,ut,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
