(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m=this||self;function n(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.M=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}};function q(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function r(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:q(a,"&dct=1"):2==b?q(a,"&ri=2"):q(a,"&ri=16"):a.j}var aa=class{constructor({url:a}){this.j=a;const b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}};function ba(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var t=class{constructor(a,b){this.g=b===ca?a:""}};t.prototype.i=!0;t.prototype.h=function(){return this.g.toString()};t.prototype.toString=function(){return this.g.toString()};function da(a){return a instanceof t&&a.constructor===t?a.g:"type_error:SafeUrl"}var ea=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ca={};var u;a:{var fa=m.navigator;if(fa){var ha=fa.userAgent;if(ha){u=ha;break a}}u=""};function ia(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function v(a,b){b instanceof t||b instanceof t||(b="object"==typeof b&&b.i?b.h():String(b),ea.test(b)||(b="about:invalid#zClosurez"),b=new t(b,ca));a.href=da(b)};function ka(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};function la(){return-1!=u.indexOf("iPhone")&&-1==u.indexOf("iPod")&&-1==u.indexOf("iPad")};function ma(a){ma[" "](a);return a}ma[" "]=function(){};var na=la(),oa=-1!=u.indexOf("iPad");var pa=la()||-1!=u.indexOf("iPod"),ra=-1!=u.indexOf("iPad");var sa={},ta=null;function ua(a){if(a.i){if(a.j){var b=a.g;for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)){var c=b[d].g;c&&c.m()}}}else{a.h.length=0;var d=y(a);d.sort();for(b=0;b<d.length;b++){let e=a.g[d[b]];(c=e.g)&&c.m();a.h.push([e.key,e.value])}a.i=!0}return a.h}function y(a){a=a.g;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function va(a,b){return a.j?(b.g||(b.g=new a.j(b.value),a.isFrozen()&&null(b.g)),b.g):b.value}
function wa(a,b){var c=y(a);c.sort();for(var d=0;d<c.length;d++){let e=a.g[c[d]];b.call(void 0,va(a,e),e.key,a)}}
class xa{constructor(a,b){this.h=a;this.j=b;this.g={};this.i=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];var c=b[0];this.g[c.toString()]=new ya(c,b[1])}this.i=!0}}isFrozen(){return!1}m(){return ua(this)}H(){return ua(this)}entries(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++){let d=this.g[b[c]];a.push([d.key,va(this,d)])}return new za(a)}keys(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.g[b[c]].key);return new za(a)}values(){var a=[],b=y(this);
b.sort();for(var c=0;c<b.length;c++)a.push(va(this,this.g[b[c]]));return new za(a)}set(a,b){var c=new ya(a);this.j?(c.g=b,c.value=b.H()):c.value=b;this.g[a.toString()]=c;this.i=!1;return this}get(a){if(a=this.g[a.toString()])return va(this,a)}has(a){return a.toString()in this.g}}class ya{constructor(a,b){this.key=a;this.value=b;this.g=void 0}}class za{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}}
"undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(za.prototype[Symbol.iterator]=function(){return this});function z(){}var Aa="function"==typeof Uint8Array;
function A(a,b,c,d,e,f){a.g=null;b||(b=c?[c]:[]);a.v=c?String(c):void 0;a.j=0===c?-1:0;a.h=b;a:{c=a.h.length;b=-1;if(c&&(b=c-1,c=a.h[b],!(null===c||"object"!=typeof c||Array.isArray(c)||Aa&&c instanceof Uint8Array))){a.l=b-a.j;a.i=c;break a}-1<d?(a.l=Math.max(d,b+1-a.j),a.i=null):a.l=Number.MAX_VALUE}a.u={};if(e)for(d=0;d<e.length;d++)b=e[d],b<a.l?(b+=a.j,a.h[b]=a.h[b]||B):(Ba(a),a.i[b]=a.i[b]||B);if(f&&f.length)for(let l=0;l<f.length;l++){d=e=void 0;b=a;c=f[l];for(var g=0;g<c.length;g++){var k=c[g],
h=C(b,k);null!=h&&(d=k,e=h,D(b,k,void 0))}d&&D(b,d,e)}}const B=[];function Ba(a){let b=a.l+a.j;a.h[b]||(a.i=a.h[b]={})}function C(a,b){if(b<a.l){b+=a.j;var c=a.h[b];return c!==B?c:a.h[b]=[]}if(a.i)return c=a.i[b],c===B?a.i[b]=[]:c}function E(a,b,c){a=C(a,b);return null==a?c:a}function H(a,b){return E(a,b,"")}function I(a,b){a=C(a,b);a=null==a?a:!!a;return null==a?!1:a}function L(a,b,c){a.g||(a.g={});if(b in a.g)return a.g[b];var d=C(a,b);d||(d=[],D(a,b,d));c=new xa(d,c);return a.g[b]=c}
function D(a,b,c){b<a.l?a.h[b+a.j]=c:(Ba(a),a.i[b]=c);return a}function M(a,b,c){a.g||(a.g={});if(!a.g[c]){var d=C(a,c);d&&(a.g[c]=new b(d))}return a.g[c]}function Ca(a){var b=Da;a.g||(a.g={});if(!a.g[7]){let e=C(a,7);for(var c=[],d=0;d<e.length;d++)c[d]=new b(e[d]);a.g[7]=c}b=a.g[7];b==B&&(b=a.g[7]=[]);return b}function Ea(a){if(a.g)for(var b in a.g){var c=a.g[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].m();else c&&c.m()}}z.prototype.m=function(){Ea(this);return this.h};
z.prototype.H=function(){Ea(this);return this.h};
z.prototype.o=Aa?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!ta){ta={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));sa[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===ta[k]&&(ta[k]=g)}}}b=sa[b];c=[];for(d=0;d<this.length;d+=3){var h=this[d],l=(e=d+1<this.length)?this[d+1]:0;k=(f=d+2<this.length)?this[d+2]:0;g=h>>
2;h=(h&3)<<4|l>>4;l=(l&15)<<2|k>>6;k&=63;f||(k=64,e||(l=64));c.push(b[g],b[h],b[l]||"",b[k]||"")}return c.join("")};try{return JSON.stringify(this.h&&this.m(),Ia)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.h&&this.m(),Ia)};function Ia(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}z.prototype.toString=function(){return this.m().toString()};
function Ja(a){const b=Ka(a.m()),c=A;A=function(d,e,f,g,k,h){c(d,b,f,g,k,h);A=c};a=new a.constructor(b);A!==c&&(A=c);return a}function Ka(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Ka(d):d)}return b}if(Aa&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Ka(d):d);return b};function La(a){A(this,a,0,-1,null,null)}n(La,z);function Ma(a){A(this,a,0,-1,null,null)}n(Ma,z);function Na(a){A(this,a,0,-1,Oa,null)}n(Na,z);function Da(a){A(this,a,0,-1,null,null)}n(Da,z);function N(a){A(this,a,0,-1,null,null)}n(N,z);function Pa(a){A(this,a,0,-1,null,null)}n(Pa,z);var Oa=[6,7];Da.prototype.s=function(){return H(this,3)};Da.prototype.G=function(a){D(this,5,a)};N.prototype.s=function(){return H(this,1)};N.prototype.G=function(a){D(this,2,a)};function Qa(a){A(this,a,0,-1,Ra,null)}n(Qa,z);var Ra=[17];class Sa{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};var Ta={capture:!0},Ua={passive:!0},Va=ia(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function Wa(a){return a?a.passive&&Va()?a:a.capture||!1:!1}function O(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Wa(d))}function Xa(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,Wa(void 0))};var Ya=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Za(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function $a(a,b){return b?a?a+"&"+b:b:a}function ab(a,b){if(!b)return a;a=Za(a);a[1]=$a(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function bb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function cb(a){var b=[],c;for(c in a)bb(c,a[c],b);return b.join("&")}function db(){var a=ka();a=null!=a?"="+encodeURIComponent(String(a)):"";return ab("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)}
function eb(a,b){a=Za(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=$a(d.join("&"),cb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function fb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{ma(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function gb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}let ib=[];const jb=()=>{const a=ib;ib=[];for(const b of a)try{b()}catch(c){}};
var kb=a=>{ib.push(a);1==ib.length&&(window.Promise?Promise.resolve().then(jb):window.setImmediate?setImmediate(jb):setTimeout(jb,0))},lb=a=>{var b=P;"complete"===b.readyState||"interactive"===b.readyState?kb(a):b.addEventListener("DOMContentLoaded",a)},nb=a=>{var b=window;"complete"===b.document.readyState?kb(a):b.addEventListener("load",a)};function Q(a,b,c=null){ob(a,b,c)}function ob(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);Xa(d,"load",e);Xa(d,"error",e)};O(d,"load",e);O(d,"error",e)}d.src=b;a.google_image_requests.push(d)};let pb=0;function qb(a){return(a=rb(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function rb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function sb(a){if(!(.01<Math.random())){a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${qb(a)}&sample=${.01}`;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Q(b,a)}};var P=document,R=window;var tb={};var ub=class{};class vb extends ub{constructor(a){super();if(tb!==tb)throw Error("Bad secret");this.g=a}toString(){return this.g}}var wb=new vb("about:invalid#zTSz");function xb(a){if(a instanceof ub)if(a instanceof vb)a=a.g;else throw Error("wrong type");else a=da(a);return a};class yb{constructor(a){this.L=a}}function S(a){return new yb(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const zb=new yb(a=>/^[^:]*([/?#]|$)/.test(a));var Ab=S("http"),Bb=S("https"),Cb=S("ftp"),Db=S("mailto");const Eb=[S("data"),Ab,Bb,Db,Cb,zb];function Fb(a,b=Eb){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof yb&&d.L(a))return new vb(a)}}function Gb(a,b=Eb){return Fb(a,b)||wb};const Hb=[Ab,Bb,Db,Cb,zb,S("market"),S("itms"),S("intent"),S("itms-appss")];function Ib(a,b){if(a instanceof t)return a;const c=Gb(a,Hb);c===wb&&b(a);return new t(xb(c),ca)}var Jb=a=>{var b=`${"http:"===R.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=cb({id:"unsafeurl",ctx:a,url:c});c=ab(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Ob=!!window.google_async_iframe_id;let T=Ob&&window.parent||window;var Pb=a=>{var b=P;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};const Qb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Rb=class{constructor(a,b){this.g=a;this.h=b}},Sb=class{constructor(a,b){this.url=a;this.F=!!b;this.depth=null}};function Tb(a,b){const c={};c[a]=b;return[c]}function Ub(a,b,c,d,e){const f=[];gb(a,function(g,k){(g=Vb(g,b,c,d,e))&&f.push(k+"="+g)});return f.join(b)}
function Vb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Vb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ub(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Wb(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function Xb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=Wb(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],k=a.h[g];for(let h=0;h<k.length;h++){if(!d){c=null==c?g:c;break}let l=Ub(k[h],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;b+=l;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class Yb{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function Zb(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof Yb?g=c:(g=new Yb,gb(c,(h,l)=>{var p=g,w=p.j++;h=Tb(l,h);p.g.push(w);p.h[w]=h}));const k=Xb(g,a.h,"/pagead/gen_204?id="+b+"&");k&&("undefined"!==typeof f?Q(m,k,f):Q(m,k))}catch(g){}}class $b{constructor(){this.h="http:"===R.location.protocol?"http:":"https:";this.g=Math.random()}};let ac=null;var bc=()=>{const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},cc=()=>{const a=m.performance;return a&&a.now?a.now():null};class dc{constructor(a,b){var c=cc()||bc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const U=m.performance,ec=!!(U&&U.mark&&U.measure&&U.clearMarks),V=ia(()=>{var a;if(a=ec){var b;if(null===ac){ac="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(ac=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=ac;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function fc(a){a&&U&&V()&&(U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class gc{constructor(){var a=X;this.h=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=V()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new dc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;U&&V()&&U.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(cc()||bc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;U&&V()&&U.mark(b);!this.g||2048<this.h.length||
this.h.push(a)}}};function hc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b}
function ic(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{fc(e),c=a.o(b,new Sa(f,{message:hc(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(c){let g,k;null==(g=window.console)||null==(k=g.error)||k.call(g,f)}else throw f;}return d}function jc(a,b){var c=kc;return(...d)=>ic(c,a,()=>b.apply(void 0,d))}
class lc{constructor(){var a=mc;this.i=Y;this.h=null;this.o=this.l;this.g=void 0===a?null:a;this.j=!1}pinger(){return this.i}l(a,b,c,d,e){e=e||"jserror";let f;try{const F=new Yb;var g=F;g.g.push(1);g.h[1]=Tb("context",a);b.error&&b.meta&&b.id||(b=new Sa(b,{message:hc(b)}));if(b.msg){g=F;var k=b.msg.substring(0,512);g.g.push(2);g.h[2]=Tb("msg",k)}var h=b.meta||{};b=h;if(this.h)try{this.h(b)}catch(J){}if(d)try{d(b)}catch(J){}d=F;h=[h];d.g.push(3);d.h[3]=h;d=m;h=[];b=null;do{var l=d;if(fb(l)){var p=
l.location.href;b=l.document&&l.document.referrer||null}else p=b,b=null;h.push(new Sb(p||""));try{d=l.parent}catch(J){d=null}}while(d&&l!=d);for(let J=0,Kb=h.length-1;J<=Kb;++J)h[J].depth=Kb-J;l=m;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==h.length-1)for(p=1;p<h.length;++p){var w=h[p];w.url||(w.url=l.location.ancestorOrigins[p-1]||"",w.F=!0)}var x=h;let qa=new Sb(m.location.href,!1);l=null;const Fa=x.length-1;for(w=Fa;0<=w;--w){var G=x[w];!l&&Qb.test(G.url)&&(l=
G);if(G.url&&!G.F){qa=G;break}}G=null;const Dc=x.length&&x[Fa].url;0!=qa.depth&&Dc&&(G=x[Fa]);f=new Rb(qa,G);if(f.h){x=F;var K=f.h.url||"";x.g.push(4);x.h[4]=Tb("top",K)}var Ga={url:f.g.url||""};if(f.g.url){var Ha=f.g.url.match(Ya),W=Ha[1],Lb=Ha[3],Mb=Ha[4];K="";W&&(K+=W+":");Lb&&(K+="//",K+=Lb,Mb&&(K+=":"+Mb));var Nb=K}else Nb="";W=F;Ga=[Ga,{url:Nb}];W.g.push(5);W.h[5]=Ga;Zb(this.i,e,F,this.j,c)}catch(F){try{Zb(this.i,e,{context:"ecmserr",rctx:a,msg:hc(F),url:f&&f.g.url},this.j,c)}catch(qa){}}return!0}}
;let Y,kc;if(Ob&&!fb(T)){let a="."+P.domain;try{for(;2<a.split(".").length&&!fb(T);)P.domain=a=a.substr(a.indexOf(".")+1),T=window.parent}catch(b){}fb(T)||(T=window)}const X=T,mc=new gc;var nc=()=>{if(!X.google_measure_js_timing){var a=mc;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(V()&&Array.prototype.forEach.call(a.h,fc,void 0),a.h.length=0)}};Y=new $b;"number"!==typeof X.google_srt&&(X.google_srt=Math.random());var oc=Y,pc=X.google_srt;0<=pc&&1>=pc&&(oc.g=pc);kc=new lc;
kc.h=a=>{const b=pb;0!==b&&(a.jc=String(b),a.shv=qb(b))};kc.j=!0;"complete"==X.document.readyState?nc():mc.g&&O(X,"load",()=>{nc()});var qc=(a,b)=>jc(a,b);var rc=(a,b)=>{b=H(a,2)||b;if(!b)return"";if(I(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];wa(L(a,4,null),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},sc=(a,b=[])=>{b=0<b.length?b:Pb("data-asoch-targets");a=L(a,1,Na);const c=[];for(let k=0;k<b.length;++k){var d=b[k].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let h of e)if(!a.has(h)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Ja(f).m();g=g.m();const h=Math.max(f.length,g.length);for(let l=0;l<h;++l)null==f[l]&&(f[l]=g[l]);f=new Na(f)}e=L(f,4,null);null!=C(f,5)&&e.set("nb",E(f,5,0).toString());c.push({element:b[k],data:f})}else Zb(Y,"gdn-asoch",{type:1,data:d},!0,void 0,void 0)}return c},tc=(a,b,c,d)=>{c=rc(b,c);0<c.length&&(v(a,Ib(c,Jb(d))),a.target||(a.target=null!=C(b,11)?H(b,11):"_top"),null!=C(b,18)&&(b=M(b,La,18),a.setAttribute("conversiondestination",H(b,2)),a.setAttribute("impressiondata",
H(b,1)),a.setAttribute("reportingorigin",H(b,3)),a.setAttribute("impressionexpiry",H(b,4))))},uc=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!I(a,1)){const c=b.element;tc(c,a,c.href,609)}},vc=a=>{const b=window.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&null!=C(a,8)&&(a=H(M(a,Pa,8),4))){b.fetchAppStoreOverlay(a);break}},wc=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&null!=C(a,12)&&(d.push(M(a,N,12)),c.push(M(a,N,12).s()));e=(f,g)=>{if(g)for(const k of d)k.G(g[k.s()]||
!1)};a=window.oneAfmaInstance;for(const f of c)a.canOpenAndroidApp(f,e,()=>{},b)},yc=(a,b,c,d,e)=>{if(a||!b||null==C(b,12))return!1;const f=M(b,N,12).s();a="";if(0<Ca(b).length)for(const g of Ca(b))a+=H(g,2)+" "+g.s()+" ";if(I(M(b,N,12),2))return xc({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var g={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};Z(eb(db(),
g))},1E3),!0;xc({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1},zc=(a,b,c,d,e,f)=>{if(!c||null==C(c,8))return!1;const g=M(c,Pa,8);let k=H(g,2);wa(L(c,10,null),(h,l)=>{var p=k;l=encodeURIComponent(l);const w=encodeURIComponent(h);h=new RegExp("[?&]"+l+"=([^&]+)");const x=h.exec(p);console.log(x);l=l+"="+w;k=x?p.replace(h,x[0].charAt(0)+l):p.replace("?","?"+l+"&")});xc({id:"gmob-apps",event:"och-try-u2-redirect",appId:H(g,4)||
"",isIos:a,isDeepLinkPath:!1,exptIds:f});return e.redirectForStoreU2({clickUrl:d,trackingUrl:H(g,3),finalUrl:k,pingFunc:e.click,openFunc:b?e.openStoreOverlay:e.openIntentOrNativeApp})},Ac=(a,b=null)=>{if(null!==b){const c=new aa({url:a});if(c.i&&c.h||c.l)return b(q(c,"&act=1&ri=1")),r(c,1)}else return b=new aa({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(q(b,"&act=1&ri=1"),"")?r(b,1):r(b,2):r(b,0):a;return a},xc=a=>{Z(eb(db(),a))},Z=(a,b=!0)=>{b&&R.fetch?R.fetch(a,{method:"GET",
keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Q(R,a)}):Q(R,a)};function Bc(a){A(this,a,0,-1,Cc,null)}n(Bc,z);var Cc=[6];const Ec=["platform","platformVersion","architecture","model","uaFullVersion"];var Fc=()=>{var a=window;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(Ec).then(b=>{var c=new Bc;c=D(c,1,b.platform);c=D(c,2,b.platformVersion);c=D(c,3,b.architecture);c=D(c,4,b.model);return D(c,5,b.uaFullVersion)}):null};function Gc(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null!=C(c,2)||D(c,2,a.href)}}function Hc(a,b){return ba(a,c=>c.element===b)}function Ic(a){lb(qc(556,()=>{new Jc(a||{})}))}
function Kc(a,b,c,d){if(!I(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(v(c,Ib(e[0],Jb(557)));!c.id;)if(f="asoch-id-"+ka(),!P.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,P.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?E(d,5,0):0);a.i&&"function"===typeof window.ss&&(a.C?window.ss(f,1,a.i):window.ss(a.i,
1));0<e.length&&(a=0<a.A.length?c.href+"&uach="+encodeURIComponent(a.A)+e[1]:c.href+e[1],v(c,Ib(a,Jb(557))))}}async function Lc(a,b,c,d){let e="";window.oneAfmaInstance&&(e=await window.oneAfmaInstance.appendClickSignalsAsync(c.href)||"");Mc(a,b,c,d,e)}
function Mc(a,b,c,d,e){const f=I(a.h,2),g=f&&Date.now()-a.B>a.J;if(window.oneAfmaInstance){b.preventDefault?b.preventDefault():b.returnValue=!1;var k=window.oneAfmaInstance;c=I(a.h,13)||a.l&&I(a.l,13);b=k.logScionEventAndAddParam(e);if(!yc(a.j,d,b,k,a.o)&&!zc(a.j,a.D,d,b,k,a.o)){e=c;c=a.j;var h=a.o;const l=I(d,15),p=!/[?&]dsh=1(&|$)/.test(b)&&/[?&]ae=1(&|$)/.test(b);!f||!g||l&&p||(b=Ac(b,k.click));b&&b.startsWith("intent:")?(k.openIntentOrNativeApp(b),d={id:"gmob-apps",event:"och-open-intent-or-native-app",
appId:null!=C(d,8)&&H(M(d,Pa,8),4)||"",isIos:c,isDeepLinkPath:!1,exptIds:h},Z(eb(db(),d))):e?k.openChromeCustomTab(b):k.openSystemBrowser(b,{useFirstPackage:!0,useRunningProcess:!0})}}else g&&(d=Ac(c.href),d!==c.href&&v(c,Ib(d,Jb(599))));g&&(a.B=Date.now());sb(a.I)}
var Jc=class{constructor(a){this.j=pa||na||ra||oa;var b=Pb("data-asoch-meta");if(1!==b.length)Zb(Y,"gdn-asoch",{type:2,data:b.length},!0,void 0,void 0);else{this.I=70;this.h=new Qa(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.l=a["extra-meta"]?new Qa(JSON.parse(a["extra-meta"])):null;this.D=this.j&&"true"===a["ios-store-overlay"];this.o=a["expt-ids"]||"";this.A="";b=Fc();null!=b&&b.then(c=>{this.A=c.o()});this.g=sc(this.h);this.J=Number(a["async-click-timeout"])||300;this.K=Number(a["deeplink-and-android-app-validation-timeout"])||
500;this.B=-Infinity;this.i=H(this.h,5)||"";this.C=I(this.h,11);this.l&&(this.C=I(this.l,11));this.v=this.u=null;I(this.h,3)||(uc(this.g),D(this.h,3,!0));Gc(this.g);!this.j&&window.oneAfmaInstance&&wc(this.g,this.K);if(window.oneAfmaInstance&&this.D&&"true"===a["prefetch-ios-store-overlay"])switch(b=()=>{setTimeout(()=>{vc(this.g)},Number(a["prefetch-delay-ms"]))},a["prefetch-after-onload"]){case "onshow":window.oneAfmaInstance.runOnOnShowEvent(b);break;case "onload":nb(b);break;default:vc(this.g)}O(P,
"click",qc(557,c=>{a:if(!c.defaultPrevented||this.u===c){for(var d,e,f=c.target;(!d||!e)&&f;){e||"A"!=f.tagName||(e=f);var g=f.hasAttribute("data-asoch-targets");!d&&("A"==f.tagName||g)&&(g=g&&"true"===f.getAttribute("data-asoch-is-dynamic")?sc(this.h,[f]):this.g,g=Hc(g,f))&&(d=g.data);f=f.parentElement}if(f=d&&!I(d,1)){if(c.defaultPrevented){var k=e;e=d;if(this.u===c&&this.v){var h=new Ma(this.v);d=H(e,9);f="";switch(E(h,4,1)){case 2:if(E(h,2,0))f="blocked_fast_click";else if(H(h,1)||H(h,7))f="blocked_border_click";
break;case 3:h=P,h=h.getElementById?h.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&h&&(e=Ja(e),D(e,5,12),L(e,4,null).set("nb",(12).toString()),(f=Hc(this.g,h))?f.data=e:this.g.push({element:h,data:e}),k&&(Kc(this,c,k,e),D(e,2,k.href)),window.copfcChm(c,rc(e,h.href))),f="onepointfiveclick_first_click"}d&&f&&Z(d+"&label="+f,!1);sb(this.I)}break a}g=d;for(h of C(g,6))Z(h)}if(e&&f){d=f?d:null;(h=Hc(this.g,e))?h=h.data:(h=new Na,D(h,2,e.href),D(h,11,e.target||"_top"),
this.g.push({element:e,data:h}));tc(e,d||h,H(h,2),557);Kc(this,c,e,d);for(k of C(this.h,17)){let l;h=k;f=P.body;g={};"function"===typeof window.CustomEvent?l=new CustomEvent(h,g):(l=document.createEvent("CustomEvent"),l.initCustomEvent(h,!!g.bubbles,!!g.cancelable,g.detail));f.dispatchEvent(l)}I(this.h,16)?Lc(this,c,e,d):(k="",window.oneAfmaInstance&&(k=window.oneAfmaInstance.appendClickSignals(e.href)),Mc(this,c,e,d,k))}}}),Ta);this.i&&"function"===typeof window.ss&&O(P.body,"mouseover",qc(626,()=>
{window.ss(this.i,0)}),Ua);b=window;b.googqscp&&"function"===typeof b.googqscp.registerCallback&&b.googqscp.registerCallback((c,d)=>{this.u=c;this.v=d})}}};var Nc=qc(555,a=>Ic(a));pb=70;const Oc=rb(70,document.currentScript);if(null==Oc)throw Error("JSC not found 70");const Pc={},Qc=Oc.attributes;for(let a=Qc.length-1;0<=a;a--){const b=Qc[a].name;0===b.indexOf("data-jcp-")&&(Pc[b.substring(9)]=Qc[a].value)}Nc(Pc);}).call(this);
