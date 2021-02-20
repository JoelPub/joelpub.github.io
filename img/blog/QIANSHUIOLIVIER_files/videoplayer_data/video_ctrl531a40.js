define("biz_wap/ui/weui.js",[],function(){
"use strict";
function e(){
for(var e=document.getElementsByTagName("link"),i=/^http(s)?:\/\/res\.wx\.qq\.com\/open\/libs\/weui\/([^\/]*)\/weui(\.min)?\.css$/,n=0;n<e.length;n++){
var t=(e[n].href.match(i)||[])[2];
if(t){
if("1"===t[0])return!0;
console.warn("Weui.css("+t+") in page is deprecated. Weui.css(1.0+) will be insert in page automatically.");
}
}
return!1;
}
function i(){
var e=["actionSheet","alert","confirm","dialog","validate","checkIfBlur","gallery","loading","picker","datePicker","searchBar","slider","tab","toast","topTips","uploader"];
window.weui={};
for(var i=0;i<e.length;i++)!function(i){
window.weui[e[i]]=function(){
a.push({
name:e[i],
args:arguments
}),console.info(e[i]+" will be executed after weui.js loaded.");
};
}(i);
}
function n(){
var e=document.createElement("script");
e.onload=function(){
for(var e=0;e<a.length;e++)window.weui[a[e].name].apply(window,a[e].args);
},e.onerror=function(){
throw new Error("weui.js loaded fail.");
},e.src=r,document.body.appendChild(e);
}
var t="https://res.wx.qq.com/open/libs/weui/2.4.2/weui.min.css",r="https://res.wx.qq.com/open/libs/weuijs/1.2.1/weui.min.js",a=[];
if(!e()){
var o=document.createElement("link");
o.href=t,o.rel="stylesheet",document.head.appendChild(o);
}
i(),n();
});define("biz_wap/zepto/touch.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function t(e,t,o,n){
return Math.abs(e-t)>=Math.abs(o-n)?e-t>0?"Left":"Right":o-n>0?"Up":"Down";
}
function o(){
p=null,g.last&&(g.el&&"function"==typeof g.el.trigger&&g.el.trigger("longTap"),g={});
}
function n(){
p&&clearTimeout(p),p=null;
}
function i(){
a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),p&&clearTimeout(p),a=l=c=p=null,
g={};
}
function r(e){
return("touch"==e.pointerType||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary;
}
function u(e,t){
return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t;
}
var a,l,c,p,s,g={},f=750;
e(document).ready(function(){
var w,y,T,h,d=0,m=0;
"MSGesture"in window&&(s=new MSGesture,s.target=document.body),e(document).bind("MSGestureEnd",function(e){
var t=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;
t&&g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t));
}).on("touchstart MSPointerDown pointerdown",function(t){
(!(h=u(t,"down"))||r(t))&&(T=h?t:t.touches[0],t.touches&&1===t.touches.length&&g.x2&&(g.x2=void 0,
g.y2=void 0),w=Date.now(),y=w-(g.last||w),g.el=e("tagName"in T.target?T.target:T.target.parentNode),
a&&clearTimeout(a),g.x1=T.pageX,g.y1=T.pageY,y>0&&250>=y&&(g.isDoubleTap=!0),g.last=w,
p=setTimeout(o,f),s&&h&&s.addPointer(t.pointerId));
}).on("touchmove MSPointerMove pointermove",function(e){
(!(h=u(e,"move"))||r(e))&&(T=h?e:e.touches[0],n(),g.x2=T.pageX,g.y2=T.pageY,d+=Math.abs(g.x1-g.x2),
m+=Math.abs(g.y1-g.y2));
}).on("touchend MSPointerUp pointerup",function(o){
(!(h=u(o,"up"))||r(o))&&(n(),g.x2&&Math.abs(g.x1-g.x2)>30||g.y2&&Math.abs(g.y1-g.y2)>30?c=setTimeout(function(){
g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t(g.x1,g.x2,g.y1,g.y2))),
g={};
},0):"last"in g&&(30>d&&30>m?l=setTimeout(function(){
var t=e.Event("tap");
t.cancelTouch=i,g.el&&"function"==typeof g.el.trigger&&g.el.trigger(t),g.isDoubleTap?(g.el&&g.el.trigger("doubleTap"),
g={}):a=setTimeout(function(){
a=null,g.el&&g.el.trigger("singleTap"),g={};
},250);
},0):g={}),d=m=0);
}).on("touchcancel MSPointerCancel pointercancel",i),e(window).on("scroll",i);
}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){
e.fn[t]=function(e){
return this.on(t,e);
};
});
}(Zepto);
});define("biz_wap/zepto/event.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function n(e){
return e._zid||(e._zid=d++);
}
function t(e,t,o,u){
if(t=r(t),t.ns)var a=i(t.ns);
return(g[n(e)]||[]).filter(function(e){
return!(!e||t.e&&e.e!=t.e||t.ns&&!a.test(e.ns)||o&&n(e.fn)!==n(o)||u&&e.sel!=u);
});
}
function r(e){
var n=(""+e).split(".");
return{
e:n[0],
ns:n.slice(1).sort().join(" ")
};
}
function i(e){
return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)");
}
function o(e,n){
return e.del&&!y&&e.e in E||!!n;
}
function u(e){
return b[e]||y&&E[e]||e;
}
function a(t,i,a,s,f,d,l){
var v=n(t),h=g[v]||(g[v]=[]);
i.split(/\s/).forEach(function(n){
if("ready"==n)return e(document).ready(a);
var i=r(n);
i.fn=a,i.sel=f,i.e in b&&(a=function(n){
var t=n.relatedTarget;
return!t||t!==this&&!e.contains(this,t)?i.fn.apply(this,arguments):void 0;
}),i.del=d;
var v=d||a;
i.proxy=function(e){
if(e=c(e),!e.isImmediatePropagationStopped()){
e.customData=s;
var n=v.apply(t,e._args==p?[e]:[e].concat(e._args));
return n===!1&&(e.preventDefault(),e.stopPropagation()),n;
}
},i.i=h.length,h.push(i),"addEventListener"in t&&t.addEventListener(u(i.e),i.proxy,o(i,l));
});
}
function s(e,r,i,a,s){
var c=n(e);
(r||"").split(/\s/).forEach(function(n){
t(e,n,i,a).forEach(function(n){
delete g[c][n.i],"removeEventListener"in e&&e.removeEventListener(u(n.e),n.proxy,o(n,s));
});
});
}
function c(n,t){
return(t||!n.isDefaultPrevented)&&(t||(t=n),e.each(_,function(e,r){
var i=t[e];
n[e]=function(){
return this[r]=P,i&&i.apply(t,arguments);
},n[r]=z;
}),(t.defaultPrevented!==p?t.defaultPrevented:"returnValue"in t?t.returnValue===!1:t.getPreventDefault&&t.getPreventDefault())&&(n.isDefaultPrevented=P)),
n;
}
function f(e){
var n,t={
originalEvent:e
};
for(n in e)w.test(n)||e[n]===p||(t[n]=e[n]);
return c(t,e);
}
var p,d=(e.zepto.qsa,1),l=Array.prototype.slice,v=e.isFunction,h=function(e){
return"string"==typeof e;
},g={},m={},y="onfocusin"in window,E={
focus:"focusin",
blur:"focusout"
},b={
mouseenter:"mouseover",
mouseleave:"mouseout"
};
m.click=m.mousedown=m.mouseup=m.mousemove="MouseEvents",e.event={
add:a,
remove:s
},e.proxy=function(t,r){
if(v(t)){
var i=function(){
return t.apply(r,arguments);
};
return i._zid=n(t),i;
}
if(h(r))return e.proxy(t[r],t);
throw new TypeError("expected function");
},e.fn.bind=function(e,n,t){
return this.on(e,n,t);
},e.fn.unbind=function(e,n){
return this.off(e,n);
},e.fn.one=function(e,n,t,r){
return this.on(e,n,t,r,1);
};
var P=function(){
return!0;
},z=function(){
return!1;
},w=/^([A-Z]|returnValue$|layer[XY]$)/,_={
preventDefault:"isDefaultPrevented",
stopImmediatePropagation:"isImmediatePropagationStopped",
stopPropagation:"isPropagationStopped"
};
e.fn.delegate=function(e,n,t){
return this.on(n,e,t);
},e.fn.undelegate=function(e,n,t){
return this.off(n,e,t);
},e.fn.live=function(n,t){
return e(document.body).delegate(this.selector,n,t),this;
},e.fn.die=function(n,t){
return e(document.body).undelegate(this.selector,n,t),this;
},e.fn.on=function(n,t,r,i,o){
var u,c,d=this;
return n&&!h(n)?(e.each(n,function(e,n){
d.on(e,t,r,n,o);
}),d):(h(t)||v(i)||i===!1||(i=r,r=t,t=p),(v(r)||r===!1)&&(i=r,r=p),i===!1&&(i=z),
d.each(function(p,d){
o&&(u=function(e){
return s(d,e.type,i),i.apply(this,arguments);
}),t&&(c=function(n){
var r,o=e(n.target).closest(t,d).get(0);
return o&&o!==d?(r=e.extend(f(n),{
currentTarget:o,
liveFired:d
}),(u||i).apply(o,[r].concat(l.call(arguments,1)))):void 0;
}),a(d,n,i,r,t,c||u);
}));
},e.fn.off=function(n,t,r){
var i=this;
return n&&!h(n)?(e.each(n,function(e,n){
i.off(e,t,n);
}),i):(h(t)||v(r)||r===!1||(r=t,t=p),r===!1&&(r=z),i.each(function(){
s(this,n,r,t);
}));
},e.fn.trigger=function(n,t){
return n=h(n)||e.isPlainObject(n)?e.Event(n):c(n),n._args=t,this.each(function(){
"dispatchEvent"in this?this.dispatchEvent(n):e(this).triggerHandler(n,t);
});
},e.fn.triggerHandler=function(n,r){
var i,o;
return this.each(function(u,a){
i=f(h(n)?e.Event(n):n),i._args=r,i.target=a,e.each(t(a,n.type||n),function(e,n){
return o=n.proxy(i),i.isImmediatePropagationStopped()?!1:void 0;
});
}),o;
},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.trigger(n);
};
}),["focus","blur"].forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.each(function(){
try{
this[n]();
}catch(e){}
}),this;
};
}),e.Event=function(e,n){
h(e)||(n=e,e=n.type);
var t=document.createEvent(m[e]||"Events"),r=!0;
if(n)for(var i in n)"bubbles"==i?r=!!n[i]:t[i]=n[i];
return t.initEvent(e,r,!0),c(t);
};
}(Zepto);
});define("biz_wap/zepto/zepto.js",[],function(){
"use strict";
var t=function(){
function t(t){
return null==t?String(t):J[W.call(t)]||"object";
}
function n(n){
return"function"==t(n);
}
function e(t){
return null!=t&&t==t.window;
}
function i(t){
return null!=t&&t.nodeType==t.DOCUMENT_NODE;
}
function r(n){
return"object"==t(n);
}
function o(t){
return r(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype;
}
function s(t){
return t instanceof Array;
}
function u(t){
return"number"==typeof t.length;
}
function c(t){
return P.call(t,function(t){
return null!=t;
});
}
function a(t){
return t.length>0?C.fn.concat.apply([],t):t;
}
function l(t){
return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase();
}
function f(t){
return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)");
}
function h(t,n){
return"number"!=typeof n||z[l(t)]?n:n+"px";
}
function p(t){
var n,e;
return j[t]||(n=L.createElement(t),L.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),
n.parentNode.removeChild(n),"none"==e&&(e="block"),j[t]=e),j[t];
}
function d(t){
return"children"in t?$.call(t.children):C.map(t.childNodes,function(t){
return 1==t.nodeType?t:void 0;
});
}
function g(t,n,e){
for(E in n)e&&(o(n[E])||s(n[E]))?(o(n[E])&&!o(t[E])&&(t[E]={}),s(n[E])&&!s(t[E])&&(t[E]=[]),
g(t[E],n[E],e)):n[E]!==x&&(t[E]=n[E]);
}
function m(t,n){
return null==n?C(t):C(t).filter(n);
}
function v(t,e,i,r){
return n(e)?e.call(t,i,r):e;
}
function y(t,n,e){
null==e?t.removeAttribute(n):t.setAttribute(n,e);
}
function b(t,n){
var e=t.className,i=e&&e.baseVal!==x;
return n===x?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n);
}
function w(t){
var n;
try{
return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(n=Number(t))?/^[\[\{]/.test(t)?C.parseJSON(t):t:n):t;
}catch(e){
return t;
}
}
function N(t,n){
n(t);
for(var e in t.childNodes)N(t.childNodes[e],n);
}
var x,E,C,O,T,S,A=[],$=A.slice,P=A.filter,L=window.document,j={},M={},z={
"column-count":1,
columns:1,
"font-weight":1,
"line-height":1,
opacity:1,
"z-index":1,
zoom:1
},Z=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,B=/^(?:body|html)$/i,R=/([A-Z])/g,V=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],H=L.createElement("table"),I=L.createElement("tr"),U={
tr:L.createElement("tbody"),
tbody:H,
thead:H,
tfoot:H,
td:I,
th:I,
"*":L.createElement("div")
},_=/complete|loaded|interactive/,D=/^[\w-]*$/,J={},W=J.toString,X={},Y=L.createElement("div"),G={
tabindex:"tabIndex",
readonly:"readOnly",
"for":"htmlFor",
"class":"className",
maxlength:"maxLength",
cellspacing:"cellSpacing",
cellpadding:"cellPadding",
rowspan:"rowSpan",
colspan:"colSpan",
usemap:"useMap",
frameborder:"frameBorder",
contenteditable:"contentEditable"
};
X.matches=function(t,n){
if(!n||!t||1!==t.nodeType)return!1;
var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;
if(e)return e.call(t,n);
var i,r=t.parentNode,o=!r;
return o&&(r=Y).appendChild(t),i=~X.qsa(r,n).indexOf(t),o&&Y.removeChild(t),i;
},T=function(t){
return t.replace(/-+(.)?/g,function(t,n){
return n?n.toUpperCase():"";
});
},S=function(t){
return P.call(t,function(n,e){
return t.indexOf(n)==e;
});
},X.fragment=function(t,n,e){
var i,r,s;
return q.test(t)&&(i=C(L.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(k,"<$1></$2>")),
n===x&&(n=Z.test(t)&&RegExp.$1),n in U||(n="*"),s=U[n],s.innerHTML=""+t,i=C.each($.call(s.childNodes),function(){
s.removeChild(this);
})),o(e)&&(r=C(i),C.each(e,function(t,n){
V.indexOf(t)>-1?r[t](n):r.attr(t,n);
})),i;
},X.Z=function(t,n){
t=t||[];
for(var e in C.fn)t[e]=C.fn[e];
return t.selector=n||"",t;
},X.isZ=function(t){
return t instanceof X.Z;
},X.init=function(t,e){
var i;
if(!t)return X.Z();
if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))i=X.fragment(t,RegExp.$1,e),
t=null;else{
if(e!==x)return C(e).find(t);
i=X.qsa(L,t);
}else{
if(n(t))return C(L).ready(t);
if(X.isZ(t))return t;
if(s(t))i=c(t);else if(r(t))i=[t],t=null;else if(Z.test(t))i=X.fragment(t.trim(),RegExp.$1,e),
t=null;else{
if(e!==x)return C(e).find(t);
i=X.qsa(L,t);
}
}
return X.Z(i,t);
},C=function(t,n){
return X.init(t,n);
},C.extend=function(t){
var n,e=$.call(arguments,1);
return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){
g(t,e,n);
}),t;
},X.qsa=function(t,n){
var e,r="#"==n[0],o=!r&&"."==n[0],s=r||o?n.slice(1):n,u=D.test(s);
return i(t)&&u&&r?(e=t.getElementById(s))?[e]:[]:1!==t.nodeType&&9!==t.nodeType?[]:$.call(u&&!r?o?t.getElementsByClassName(s):t.getElementsByTagName(n):t.querySelectorAll(n));
},C.contains=function(t,n){
return t!==n&&t.contains(n);
},C.type=t,C.isFunction=n,C.isWindow=e,C.isArray=s,C.isPlainObject=o,C.isEmptyObject=function(t){
var n;
for(n in t)return!1;
return!0;
},C.inArray=function(t,n,e){
return A.indexOf.call(n,t,e);
},C.camelCase=T,C.trim=function(t){
return null==t?"":String.prototype.trim.call(t);
},C.uuid=0,C.support={},C.expr={},C.map=function(t,n){
var e,i,r,o=[];
if(u(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&o.push(e);else for(r in t)e=n(t[r],r),
null!=e&&o.push(e);
return a(o);
},C.each=function(t,n){
var e,i;
if(u(t)){
for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t;
}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;
return t;
},C.grep=function(t,n){
return P.call(t,n);
},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){
J["[object "+n+"]"]=n.toLowerCase();
}),C.fn={
forEach:A.forEach,
reduce:A.reduce,
push:A.push,
sort:A.sort,
indexOf:A.indexOf,
concat:A.concat,
map:function(t){
return C(C.map(this,function(n,e){
return t.call(n,e,n);
}));
},
slice:function(){
return C($.apply(this,arguments));
},
ready:function(t){
return _.test(L.readyState)&&L.body?t(C):L.addEventListener("DOMContentLoaded",function(){
t(C);
},!1),this;
},
get:function(t){
return t===x?$.call(this):this[t>=0?t:t+this.length];
},
toArray:function(){
return this.get();
},
size:function(){
return this.length;
},
remove:function(){
return this.each(function(){
null!=this.parentNode&&this.parentNode.removeChild(this);
});
},
each:function(t){
return A.every.call(this,function(n,e){
return t.call(n,e,n)!==!1;
}),this;
},
filter:function(t){
return n(t)?this.not(this.not(t)):C(P.call(this,function(n){
return X.matches(n,t);
}));
},
add:function(t,n){
return C(S(this.concat(C(t,n))));
},
is:function(t){
return this.length>0&&X.matches(this[0],t);
},
not:function(t){
var e=[];
if(n(t)&&t.call!==x)this.each(function(n){
t.call(this,n)||e.push(this);
});else{
var i="string"==typeof t?this.filter(t):u(t)&&n(t.item)?$.call(t):C(t);
this.forEach(function(t){
i.indexOf(t)<0&&e.push(t);
});
}
return C(e);
},
has:function(t){
return this.filter(function(){
return r(t)?C.contains(this,t):C(this).find(t).size();
});
},
eq:function(t){
return-1===t?this.slice(t):this.slice(t,+t+1);
},
first:function(){
var t=this[0];
return t&&!r(t)?t:C(t);
},
last:function(){
var t=this[this.length-1];
return t&&!r(t)?t:C(t);
},
find:function(t){
var n,e=this;
return n="object"==typeof t?C(t).filter(function(){
var t=this;
return A.some.call(e,function(n){
return C.contains(n,t);
});
}):1==this.length?C(X.qsa(this[0],t)):this.map(function(){
return X.qsa(this,t);
});
},
closest:function(t,n){
var e=this[0],r=!1;
for("object"==typeof t&&(r=C(t));e&&!(r?r.indexOf(e)>=0:X.matches(e,t));)e=e!==n&&!i(e)&&e.parentNode;
return C(e);
},
parents:function(t){
for(var n=[],e=this;e.length>0;)e=C.map(e,function(t){
return(t=t.parentNode)&&!i(t)&&n.indexOf(t)<0?(n.push(t),t):void 0;
});
return m(n,t);
},
parent:function(t){
return m(S(this.pluck("parentNode")),t);
},
children:function(t){
return m(this.map(function(){
return d(this);
}),t);
},
contents:function(){
return this.map(function(){
return $.call(this.childNodes);
});
},
siblings:function(t){
return m(this.map(function(t,n){
return P.call(d(n.parentNode),function(t){
return t!==n;
});
}),t);
},
empty:function(){
return this.each(function(){
this.innerHTML="";
});
},
pluck:function(t){
return C.map(this,function(n){
return n[t];
});
},
show:function(){
return this.each(function(){
"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName));
});
},
replaceWith:function(t){
return this.before(t).remove();
},
wrap:function(t){
var e=n(t);
if(this[0]&&!e)var i=C(t).get(0),r=i.parentNode||this.length>1;
return this.each(function(n){
C(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i);
});
},
wrapAll:function(t){
if(this[0]){
C(this[0]).before(t=C(t));
for(var n;(n=t.children()).length;)t=n.first();
C(t).append(this);
}
return this;
},
wrapInner:function(t){
var e=n(t);
return this.each(function(n){
var i=C(this),r=i.contents(),o=e?t.call(this,n):t;
r.length?r.wrapAll(o):i.append(o);
});
},
unwrap:function(){
return this.parent().each(function(){
C(this).replaceWith(C(this).children());
}),this;
},
clone:function(){
return this.map(function(){
return this.cloneNode(!0);
});
},
hide:function(){
return this.css("display","none");
},
toggle:function(t){
return this.each(function(){
var n=C(this);
(t===x?"none"==n.css("display"):t)?n.show():n.hide();
});
},
prev:function(t){
return C(this.pluck("previousElementSibling")).filter(t||"*");
},
next:function(t){
return C(this.pluck("nextElementSibling")).filter(t||"*");
},
html:function(t){
return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(n){
var e=this.innerHTML;
C(this).empty().append(v(this,t,n,e));
});
},
text:function(t){
return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){
this.textContent=t===x?"":""+t;
});
},
attr:function(t,n){
var e;
return"string"==typeof t&&n===x?0==this.length||1!==this[0].nodeType?x:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:this.each(function(e){
if(1===this.nodeType)if(r(t))for(E in t)y(this,E,t[E]);else y(this,t,v(this,n,e,this.getAttribute(t)));
});
},
removeAttr:function(t){
return this.each(function(){
1===this.nodeType&&y(this,t);
});
},
prop:function(t,n){
return t=G[t]||t,n===x?this[0]&&this[0][t]:this.each(function(e){
this[t]=v(this,n,e,this[t]);
});
},
data:function(t,n){
var e=this.attr("data-"+t.replace(R,"-$1").toLowerCase(),n);
return null!==e?w(e):x;
},
val:function(t){
return 0===arguments.length?this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){
return this.selected;
}).pluck("value"):this[0].value):this.each(function(n){
this.value=v(this,t,n,this.value);
});
},
offset:function(t){
if(t)return this.each(function(n){
var e=C(this),i=v(this,t,n,e.offset()),r=e.offsetParent().offset(),o={
top:i.top-r.top,
left:i.left-r.left
};
"static"==e.css("position")&&(o.position="relative"),e.css(o);
});
if(0==this.length)return null;
var n=this[0].getBoundingClientRect();
return{
left:n.left+window.pageXOffset,
top:n.top+window.pageYOffset,
width:Math.round(n.width),
height:Math.round(n.height)
};
},
css:function(n,e){
if(arguments.length<2){
var i=this[0],r=getComputedStyle(i,"");
if(!i)return;
if("string"==typeof n)return i.style[T(n)]||r.getPropertyValue(n);
if(s(n)){
var o={};
return C.each(s(n)?n:[n],function(t,n){
o[n]=i.style[T(n)]||r.getPropertyValue(n);
}),o;
}
}
var u="";
if("string"==t(n))e||0===e?u=l(n)+":"+h(n,e):this.each(function(){
this.style.removeProperty(l(n));
});else for(E in n)n[E]||0===n[E]?u+=l(E)+":"+h(E,n[E])+";":this.each(function(){
this.style.removeProperty(l(E));
});
return this.each(function(){
this.style.cssText+=";"+u;
});
},
index:function(t){
return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0]);
},
hasClass:function(t){
return t?A.some.call(this,function(t){
return this.test(b(t));
},f(t)):!1;
},
addClass:function(t){
return t?this.each(function(n){
O=[];
var e=b(this),i=v(this,t,n,e);
i.split(/\s+/g).forEach(function(t){
C(this).hasClass(t)||O.push(t);
},this),O.length&&b(this,e+(e?" ":"")+O.join(" "));
}):this;
},
removeClass:function(t){
return this.each(function(n){
return t===x?b(this,""):(O=b(this),v(this,t,n,O).split(/\s+/g).forEach(function(t){
O=O.replace(f(t)," ");
}),void b(this,O.trim()));
});
},
toggleClass:function(t,n){
return t?this.each(function(e){
var i=C(this),r=v(this,t,e,b(this));
r.split(/\s+/g).forEach(function(t){
(n===x?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t);
});
}):this;
},
scrollTop:function(t){
if(this.length){
var n="scrollTop"in this[0];
return t===x?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){
this.scrollTop=t;
}:function(){
this.scrollTo(this.scrollX,t);
});
}
},
scrollLeft:function(t){
if(this.length){
var n="scrollLeft"in this[0];
return t===x?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){
this.scrollLeft=t;
}:function(){
this.scrollTo(t,this.scrollY);
});
}
},
position:function(){
if(this.length){
var t=this[0],n=this.offsetParent(),e=this.offset(),i=B.test(n[0].nodeName)?{
top:0,
left:0
}:n.offset();
return e.top-=parseFloat(C(t).css("margin-top"))||0,e.left-=parseFloat(C(t).css("margin-left"))||0,
i.top+=parseFloat(C(n[0]).css("border-top-width"))||0,i.left+=parseFloat(C(n[0]).css("border-left-width"))||0,
{
top:e.top-i.top,
left:e.left-i.left
};
}
},
offsetParent:function(){
return this.map(function(){
for(var t=this.offsetParent||L.body;t&&!B.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;
return t;
});
}
},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){
var n=t.replace(/./,function(t){
return t[0].toUpperCase();
});
C.fn[t]=function(r){
var o,s=this[0];
return r===x?e(s)?s["inner"+n]:i(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(n){
s=C(this),s.css(t,v(this,r,n,s[t]()));
});
};
}),F.forEach(function(n,e){
var i=e%2;
C.fn[n]=function(){
var n,r,o=C.map(arguments,function(e){
return n=t(e),"object"==n||"array"==n||null==e?e:X.fragment(e);
}),s=this.length>1;
return o.length<1?this:this.each(function(t,n){
r=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null,o.forEach(function(t){
if(s)t=t.cloneNode(!0);else if(!r)return C(t).remove();
N(r.insertBefore(t,n),function(t){
null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML);
});
});
});
},C.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){
return C(t)[n](this),this;
};
});
for(var K in C.fn)X.Z[K]=C.fn[K];
return X.uniq=S,X.deserializeValue=w,C.zepto=X,C;
}();
window.Zepto=t,void 0===window.$&&(window.$=t);
});define("pages/video_collection/weapp_channel.js",["appmsg/weapp_common.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
var s=e("appmsg/weapp_common.js"),o=e("biz_common/utils/url/parse.js"),a=e("biz_wap/jsapi/core.js"),n="wx792f0292c9a85439",i="gh_f92d56086797",p=!!o.getQuery("channel_session_id");
s.preloadMiniProgram(i);
var c=function(e,c,r){
p?a.invoke("closeWindow"):(r=void 0===r?1:r,s.jumpUrl({
options:{
appId:n,
userName:i,
relativeURL:e?o.addParam(e,"subScene",r):"pages/doubleVideos/doubleVideos.html?subScene="+r,
scene:c||1130,
sceneNote:r
},
appid:n
}));
};
return{
openChannel:c
};
});define("appmsg/like_and_share.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","pages/utils.js","appmsg/retry_ajax.js","appmsg/set_font_size.js","common/comm_report.js","appmsg/related_article.js","common/utils.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","appmsg/appmsg_report.js"],function(e,i,o,n){
"use strict";
var t=e("biz_common/dom/event.js"),s=e("biz_common/dom/class.js"),r=e("biz_wap/jsapi/core.js"),m=e("pages/utils.js"),a=m.formatReadNum,l=e("appmsg/retry_ajax.js"),d=e("appmsg/set_font_size.js"),p=e("common/comm_report.js"),w=e("appmsg/related_article.js"),c=e("common/utils.js"),_=e("biz_wap/utils/device.js"),u=e("biz_wap/utils/mmversion.js"),k=e("appmsg/appmsg_report.js"),g=function(e){
return document.getElementById(e);
},h=function(e){
e.style.display="block";
},j={
likeNum:0,
isLike:0,
likeDom:g("like_old"),
likeNumDom:g("likeNum_old"),
shareDom:g("js_bottom_share"),
collectDom:g("js_bottom_collect"),
oprRightDom:g("js_bottom_opr_right"),
shareBottomBtn:g("js_bottom_share_btn"),
likeBottomBtn:g("js_bottom_zan_btn"),
similarZanCard:g("js_similar_video_card"),
overflowFontScale:1
},f=function(){
var e=0;
try{
e=1*window.atob(window.biz);
}catch(i){}
var o={
BizUin:e,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
EventType:4
};
p.report(19048,o);
},v=function(){
setTimeout(function(){
s.removeClass(j.oprRightDom,"sns_opr_overflow");
var e=j.oprRightDom.querySelectorAll(".js_media_tool_meta"),i=g("js_toobar3").getBoundingClientRect().width,o=0;
if(e&&e.length){
g("js_like_wording").textContent="在看",g("js_parise_wording").textContent="赞";
for(var n=0;n<e.length;n++)o+=e[n].getBoundingClientRect().width;
if(console.log("benchmarkWidth",i,o),e.length>1&&(i-o)/(e.length-1)<20){
g("js_like_wording").textContent="",g("js_parise_wording").textContent="";
for(var t=0,n=0;n<e.length;n++)t+=e[n].getBoundingClientRect().width;
(i-t)/(e.length-1)<20&&s.addClass(j.oprRightDom,"sns_opr_overflow");
}
}
},50);
},D=function(){
s.addClass(j.likeDom,"praised"),j.likeNum++;
var e=j.likeNumDom.innerHTML;
("10万+"!==e||"100k+"!==e)&&(j.likeNumDom.innerHTML=a(j.likeNum)),j.likeNumDom.style.display="",
w&&w.render&&w.render("praise");
},b=function(){
s.removeClass(j.likeDom,"praised"),j.likeNum--;
var e=j.likeNumDom.innerHTML;
j.likeNum>=0&&"10万+"!==e&&"100k+"!==e&&(j.likeNumDom.innerHTML=a(j.likeNum)),0===j.likeNum&&(j.likeNumDom.style.display="none");
},y=[],B=function(e){
"function"==typeof e&&y.push(e);
},N=function(e){
j.isLike=j.isLike?0:1,j.isLike?D():b(),l({
url:"/mp/appmsg_like?__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&like="+j.isLike+"&f=json&appmsgid="+window.appmsgid+"&itemidx="+window.itemidx,
data:{
scene:window.source,
appmsg_like_type:1,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
is_temp_url:window.is_temp_url||0,
style:e||0,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST"
}),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
},z=function(e){
return j.likeBottomBtn&&j.likeBottomBtn.disabled===!0?void 0:window.is_temp_url?void("5"!==window.item_show_type||!c.isNativePage()||_.os.pc?window.weui.alert("预览状态下无法操作"):n("预览状态下无法操作")):void N(e);
};
t.on(j.likeDom,"click",function(){
return z();
}),t.on(j.shareDom,"click",function(){
j.shareBottomBtn&&j.shareBottomBtn.disabled===!0||(f(),r.invoke("handleMPPageAction",{
action:"share"
}));
}),t.on(j.collectDom,"click",function(){
r.invoke("handleMPPageAction",{
action:"doFavorite"
}),w&&w.render&&w.render("favorite"),k.shareReport({
link:window.msg_link||window.cgiData&&window.cgiData.msg_link,
action_type:24,
share_source:2
});
});
var I=function(){
v(),d.onFontScaleChange(v),window.addEventListener("resize",v);
},L=function(e){
var i=e.shareShow,o=e.likeShow,n=e.likeNum,t=e.isLike,r=e.shareGray,m=e.likeGray;
j.likeNum=n,j.isLike=t,i&&j.shareDom&&(_.os.pc?_.os.windows&&u.getInner()>="63010000"&&h(j.shareDom):h(j.shareDom)),
r&&j.shareBottomBtn&&(j.shareBottomBtn.disabled=!0),o&&j.likeDom&&h(j.likeDom),m&&j.likeBottomBtn&&(j.likeBottomBtn.disabled=!0),
o&&j.likeNumDom&&0!==n&&(j.likeNumDom.innerHTML=a(j.likeNum),j.likeNumDom.style.display="",
t&&s.addClass(j.likeDom,"praised")),(u.isWechat&&(_.os.iphone&&u.getInner()>"17001000"||_.os.android&&u.getInner()>"27001300")||_.os.windows&&u.getInner()>="63010000")&&h(j.collectDom),
I(),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
};
return{
initLikeShareDom:L,
triggerLike:z,
onLikeChange:B
};
});define("pages/video_collection/report.js",["pages/utils.js","biz_wap/jsapi/core.js","common/utils.js","biz_wap/utils/localstorage.js","biz_wap/utils/device.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/wapsdk.js","biz_common/base64.js"],function(e){
"use strict";
function i(e){
switch(e.EventType){
case 1:
y=e.StartTime;
break;

case 10:
k=e.StartTime;
break;

case 12:
b=e.StartTime;
break;

case 13:
f=e.StartTime;
break;

case 14:
T=e.StartTime;
break;

case 15:
if(!y)return;
var i=e.EndTime,n=k-y,t=i-y,o=i-k,a=e.extInfo,s=0===a.playCount&&a.previousCompletedSize>0,d=s?.2:g;
if(k&&n>0){
var r=window.__second_open__?21:24;
s&&(r=window.__second_open__?29:31),c.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:n
}
});
}
if(t>0){
var r=window.__second_open__?22:25;
s&&(r=window.__second_open__?27:28),c.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:t
}
}),console.log("[Video Save Speed] enterToPlayTime: "+t+" sid: "+r);
}
if(k&&o>0){
var r=window.__second_open__?23:26;
s&&(r=window.__second_open__?30:32),c.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:o
}
});
}
b&&k&&c.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:34,
time:b-k
}
}),f&&b&&c.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:35,
time:f-b
}
}),i&&T&&c.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:36,
time:i-T
}
}),c.send(),y=0,console.log("[system]","是否预加载: "+s),console.log("[system]","extInfo: "+JSON.stringify(a));
}
}
function n(e){
c.saveSpeeds({
sample:e.sample||g,
uin:l,
pid:v,
speeds:{
sid:e.sid,
time:e.time
}
});
}
function t(e){
"number"!=typeof e.StartTime&&(e.StartTime=Date.now()),"number"!=typeof e.EndTime&&(e.EndTime=Date.now()),
S.push({
type:5,
item:Object.keys(e).map(function(i){
return{
key:i,
val:e[i]+""
};
})
}),i(e);
}
function o(e){
j||(j=!0,t({
EventType:3
}),w.reportNow(function(i){
"function"==typeof e&&e(i),setTimeout(function(){
j=!1;
},1e3);
}));
}
var a=e("pages/utils.js"),s=e("biz_wap/jsapi/core.js"),d=e("common/utils.js"),r=e("biz_wap/utils/localstorage.js"),p=e("biz_wap/utils/device.js"),w=e("biz_wap/jsapi/leaveReport.js"),c=e("biz_wap/utils/wapsdk.js"),_=e("biz_common/base64.js").toBase64,m="function"==typeof window.btoa?window.btoa:_,l="";
try{
l=window.encodeURIComponent(m(window.user_uin));
}catch(u){
l="";
}
var v=2181,g=.02;
c.setBasicTime({
sample:g,
uin:l,
pid:v
});
var y=0,k=0,b=0,f=0,T=0,S=[],j=!1;
return s.invoke("handleMPPageAction",{
action:"getEnterTime"
},function(e){
var i=e.clickTimeMs,n=r.get("__get_enter_video_common_time__");
i+""!==n?(r.set("__get_enter_video_common_time__",i),console.log("[Video Enter Time]",i)):i=0,
t({
EventType:1,
MiaoKai:window.__second_open__?1:0,
StartTime:i||window.enter_time||Date.now(),
EndTime:i||window.enter_time||Date.now()
});
}),window.addEventListener("load",function(){
t({
EventType:7
});
}),window.top===window&&w.addReport(function(e){
if(!d.isWcSlPage())return!1;
window.__second_open_auth_time__&&t({
EventType:6,
StartTime:window.__second_open_auth_time__,
EndTime:window.__second_open_auth_time__
}),e||t({
EventType:2
});
var i=navigator.userAgent.match(/Mozilla.*?\((.*?)\)(\s|$)/),n=navigator.userAgent.match(/Language\/(.*?)(\s|$)/),o=0,s=window.networkType;
switch(s||(s=navigator.userAgent.match(/NetType\/(.*?)(\s|$)/),s=s&&s[1]&&s[1].toLowerCase()),
s){
case"wifi":
o=1;
break;

case"2g":
o=2;
break;

case"3g":
o=3;
break;

case"2g/3g":
o=3;
break;

case"4g":
o=4;
}
var r={
type:5,
item:[{
key:"DeviceModel",
val:i&&i[1]||"unknown"
},{
key:"DeviceBrand",
val:i&&i[1]||"unknown"
},{
key:"OsName",
val:["ios","android","windows","Mac"].filter(function(e){
return p.os[e];
})[0]||"unknown"
},{
key:"OsVersion",
val:p.os.version||"unknown"
},{
key:"LanguageVersion",
val:n&&n[1]||"unknown"
},{
key:"NetType",
val:o+""
},{
key:"EnterId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"EnterPageId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"AppMsgUrl",
val:window.location.href
},{
key:"Vid",
val:window.cgiData.vid
},{
key:"Scene",
val:1*(window.scene||window.cgiData.scene||a.getParam("scene"))+""
},{
key:"SubScene",
val:1*(window.subscene||window.cgiData.subscene||a.getParam("subscene"))+""
}]
},w=S;
return S=[],{
reportUrl:"https://mp.weixin.qq.com/mp/videoh5report",
reportData:JSON.stringify({
report:w,
comm_fields:r
}),
method:"POST"
};
}),{
add19735ExtData:t,
leaveReportNowForSwitchVideo:o,
saveSpeedsForVideo:n
};
});function _defineProperty(e,t,n){
return t in e?Object.defineProperty(e,t,{
value:n,
enumerable:!0,
configurable:!0,
writable:!0
}):e[t]=n,e;
}
function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);
}
return e;
};
define("video/video_tail_utils.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","a/a_config.js","biz_common/utils/url/parse.js","a/a_utils.js","biz_wap/utils/mmversion.js","pages/utils.js","common/comm_report.js","biz_common/dom/event.js","biz_common/dom/class.js","common/utils.js"],function(e){
"use strict";
function t(e,t,n){
if(H){
var i={
__videoTailPlayerId__:H,
action:e,
data:t
};
"function"==typeof n&&(i.callbackId=F+Q++,G[i.callbackId]=n),window.parent.postMessage(i,document.location.protocol+"//mp.weixin.qq.com");
}else"function"!=typeof n&&(n=function(){}),z.invoke(e,t,n);
}
function n(e,t){
"function"==typeof t&&(G[e]?G[e].push(t):G[e]=[t],z.on(e,t));
}
function i(e){
"object"===_typeof(e.data)&&"string"==typeof e.data.hostEnvEvent&&G[e.data.hostEnvEvent]&&G[e.data.hostEnvEvent].forEach(function(t){
return t(e.data.res);
});
}
function o(){
return C.cpVersion("7.0.9",1,!0);
}
function a(e){
X=_extends(X,e);
}
function s(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
for(var t in e)e[t]&&(ot[t]=e[t]);
}
function r(){
return R.hasClass(it,"has_ad")?1:0;
}
function d(){
return _extends({
ReportWithTailAd:r()
},ot);
}
function c(){
t("handleMPPageAction",{
action:"closeAdWebview"
});
}
function l(e){
return o()||X.hasAd&&!e?void(e?X.hidePanelAd&&X.hidePanelAd():X.showTailPanel&&X.showTailPanel(X)):void c();
}
function u(){
return H?q:window.innerWidth===screen.width&&window.innerHeight===screen.height||window.innerWidth===screen.height&&window.innerHeight===screen.width;
}
function p(e){
var t;
return M.join(location.origin+"/mp/authreadtemplate?t=pages/video_tail",(t={
vid:window.cgiData.vid,
item_show_type:window.item_show_type,
idx:window.idx,
mid:window.mid,
sn:window.sn,
scene:window.scene,
appmsg_type:window.appmsg_type,
msg_title:window.msg_title,
ct:window.ct,
send_time:window.send_time,
abtest_cookie:window.abtest_cookie,
msg_daily_idx:window.msg_daily_idx,
user_uin:window.user_uin,
__biz:window.biz,
pos_type_list:9,
get_ad_after_video:1
},_defineProperty(t,D.HAS_AD_DATA_QUERY_KEY,e?1:0),_defineProperty(t,"enterid",window.enterid),
_defineProperty(t,"subscene",window.subscene),_defineProperty(t,"oriStatus",window.cgiData.ori_status),
_defineProperty(t,"hitBizUin",window.cgiData.hit_bizuin),_defineProperty(t,"hitVid",window.cgiData.hit_vid),
_defineProperty(t,"sessionid",window.sessionid),_defineProperty(t,"devicetype",window.devicetype),
_defineProperty(t,"playerType",B.getPlayerType()),_defineProperty(t,"hasSubscribed",X.hasSubscribed?1:0),
_defineProperty(t,"continueid",window.continueid+""),_defineProperty(t,"continueseq",1*M.getQuery("continueseq")||1),
t));
}
function _(e){
at=e;
}
function f(e,t,n){
if(!Y||n){
var i=p(at)+"&wcslplayerId="+t;
window.__second_open__?W({
url:i,
type:"GET",
f:"html",
success:function(t){
e.setAttribute("src",i),e.contentWindow.document.open("text/html","replace"),e.contentWindow.document.write(t),
e.contentWindow.document.close(),e.contentWindow.history.replaceState(null,null,i);
}
}):e.setAttribute("src",i),U=e,Y=!0;
}
}
function m(e){
Y||z.invoke("handleMPPageAction",{
action:"createAdWebview",
adUrl:p(e)
},function(e){
return e.err_msg.indexOf("fail")>-1?void k.report115849(40):void(Y=!0);
});
}
function w(e){
a({
showTailPanel:e.showTailPanel,
hidePanelAd:e.hidePanelAd
}),n("onMPAdWebviewStateChange",function(e){
"appear"===e.state&&(e.forceNoAd&&a({
hasAd:!1
}),l(),X.hasAd&&setTimeout(function(){
X.showAd&&X.showAd();
},10));
});
}
function v(e){
function t(){
o=!0,setTimeout(function(){
return a?void(o=!1):(s+=d,(X.canCreateTailWebview||r>=i-s)&&m(),void t());
},1e3*d);
}
function n(){
z.invoke("handleMPPageAction",{
action:"getMPVideoState"
},function(n){
n.vid===e&&(s=parseInt(n.currentTime,10)>=parseInt(n.duration,10)?0:n.currentTime,
i=n.duration,"play"===n.state&&!o&&t());
});
}
var i=void 0,o=void 0,a=!1,s=0,r=10,d=.5;
z.on("onMPVideoStateChange",function(e){
"play"===e.state?(n(),a=!1):"enterFullScreen"!==e.state&&"exitFullScreen"!==e.state&&(a=!0);
}),n();
}
function y(e){
v(e),z.on("onMPAdWebviewStateChange",function(e){
"destroy"===e.state&&(Y=!1);
});
}
function b(e){
n("onReceiveMPPageData",function(t){
e&&e(t);
});
}
function g(e,n){
U&&"adWeb"===n?U.contentWindow.postMessage({
hostEnvEvent:"onReceiveMPPageData",
res:{
data:e
}
},document.location.protocol+"//mp.weixin.qq.com"):t("handleMPPageAction",{
action:"sendMPPageData",
data:e,
sendTo:n
});
}
function h(e){
var t=u(),n=void 0;
n=r()?t?184:183:t?181:180,V.report(17149,_extends({
EventType:t?46:47
},d())),e.dataset.scene=n;
}
function P(e){
Z&&(e?(et.style.display="none",tt.style.display="",!J&&(nt.style.display="")):(et.style.display="",
tt.style.display="none",nt.style.display="none"),J=e);
}
function T(){
if(Z){
var e=u();
e&&K||!e&&$||(V.report(17149,_extends({
EventType:e?70:71
},d())),e?K=!0:$=!0);
}
}
function j(){
V.report(17149,_extends({
EventType:u()?72:73
},d()));
}
function S(){
return J;
}
function I(e){
W({
url:"/mp/videochannel_profile_page?action=check_contact&biz_username="+e.userName+"&__biz="+e.biz,
dataType:"json",
success:function(t){
var n=1===t.subscribed;
e.success&&e.success(n);
}
});
}
function E(e){
function t(){
I({
userName:e.userName,
biz:e.biz,
success:function(e){
P(e),T(),e&&g("hasSubscribed","commshareWeb");
}
});
}
O.getId("js_tail_panel_account_name").innerHTML=e.nickname,O.getId("js_tail_panel_account_avatar").src=e.headImg,
e.subscribed||P(!1),e.notBindProfileEvt?!function(){
var e=it.getElementsByClassName("js_go_profile")[0];
N.tap(e,function(){
h(e);
});
}():O.go2ProfileEvent({
$container:it,
user_name:e.userName,
beforeGo2Profile:h,
tabType:2
}),Z&&(N.on(et,"tap",function(){
var t=void 0;
j(),t=u()?"186":"185",z.invoke("addContact",{
webtype:"1",
username:e.userName,
scene:t,
scenenote:e.pageUrl||""
},function(e){
e.err_msg.indexOf("ok")>-1&&(P(!0),g("hasSubscribed","commshareWeb"));
});
}),N.bindVisibilityChangeEvt(function(e){
if(e){
var n=3;
t();
for(var i=1;n>=i;i++)setTimeout(t,200*n);
}
}));
}
function A(){
N.tap(O.getId("js_tail_share_button"),function(){
V.report(17149,_extends({
EventType:u()?53:54
},d()));
});
}
function x(e){
if(!o()||!it)return void(e.fallback&&e.fallback());
e.reportData.PlayerType=1,s(e.reportData),it.style.display="",$=!1;
var t={
Vid:ot.VideoId,
BizUin:ot.BizUserName,
msgid:ot.MsgId,
itemidx:ot.Idx,
Type:1,
ClientTime:Date.now(),
Fromid:ot.Scene,
SessionId:ot.SessionIdStr,
Device:C.isIOS?1:2
};
e.isAppMsg?V.report(12710,_extends({},ot,t,{
Step:17,
ClientTime:Date.now()
})):(V.report(17149,_extends({
EventType:65
},ot)),V.report(17149,_extends({
EventType:67
},ot)),V.report(17149,_extends({
EventType:69
},ot)),(!e.subscribed&&!L||!J&&L)&&T()),L||(E(e),A(),N.tap(O.getId("js_replay"),function(){
it.style.display="none",e.replay&&e.replay(),e.isAppMsg?V.report(12710,_extends({},ot,t,{
Step:18,
ClientTime:Date.now()
})):V.report(17149,_extends({
EventType:52
},ot));
}),L=!0);
}
var W=e("biz_wap/utils/ajax.js"),z=e("biz_wap/jsapi/core.js"),D=e("a/a_config.js"),M=e("biz_common/utils/url/parse.js"),k=e("a/a_utils.js"),C=e("biz_wap/utils/mmversion.js"),O=e("pages/utils.js"),V=e("common/comm_report.js"),N=e("biz_common/dom/event.js"),R=e("biz_common/dom/class.js"),B=e("common/utils.js"),H=M.getQuery("wcslplayerId"),q=!1,U=null,F="video_tail_callback_",Q=0,G={};
H&&window.addEventListener("message",function(e){
"object"===_typeof(e.data)&&"string"==typeof e.data.callbackId&&e.data.callbackId.startsWith(F)?(G[e.data.callbackId]&&G[e.data.callbackId](e.data.res),
delete G[e.data.callbackId]):i(e);
});
var L=!1,Y=!1,K=!1,$=!1,J=!0,X={},Z=C.isIOS&&C.cpVersion("7.0.15",1,!0);
Z=Z||C.isAndroid&&C.cpVersion("7.0.17",1,!0);
var et=O.getId("js_btn_account_subscription"),tt=O.getId("js_profile_icon"),nt=O.getId("js_subscription_success"),it=O.getId("js_video_tail_panel"),ot={
EnterId:parseInt(Date.now()/1e3,10),
ItemShowType:5
};
H&&n("onWcSlPlayerFullscreenChange",function(e){
q=e.state,"string"==typeof e.padding&&(document.body.style.padding=e.padding);
});
var at=!1;
return{
createTailWebview:m,
initEvent4TailWebview:w,
listenAndCreateTailWebview:v,
onReceiveMPPageData:b,
setTailOpts:a,
showTailPanel:l,
sendMPPageData:g,
handleTailWebviewState:y,
closeTailWebview:c,
initProfile:E,
initWebTailPanel:x,
isFullScreen:u,
getSubscribedStatus:S,
reportSubscribeBtnExpose:T,
changeSubscribeStatus:P,
getSubscribedData:I,
supportTailPanel:o,
getReportData:d,
initShareBtnReport:A,
setReportData:s,
setHasAdData4WcSlPlayer:_,
initTailIframe4WcSlPlayer:f,
emitHostEnvEvent4WcSlPlayer:i,
sendMessageToHostEnv:t
};
});define("pages/video_plugin/base.js",[],function(){
"use strict";
var t=0,e=function(t,e){
var n=function(){};
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.uber=e.prototype;
},n=function(){
this.player=null;
};
return n.prototype.setPlayer=function(t){
this.player=t;
},n.prototype.setBlockEvt=function(t){
this.player._setBlockPlugin(t,this);
},n.prototype.setUnblockEvt=function(t){
this.player._setBlockPlugin(t,null);
},n.prototype.recv=function(e){
var n=this[e+"Handler"];
if("function"==typeof n){
var o=n.apply(this,arguments);
return"undefined"==typeof o||null===o?t:o;
}
return t;
},{
Class:n,
inherit:e,
BASE_BITSET:t
};
});define("common/comm_report.js",["biz_wap/utils/ajax.js","biz_wap/utils/ajax_wx.js","biz_common/utils/comm_report.js","biz_wap/jsapi/leaveReport.js"],function(t){
"use strict";
var o=t("biz_wap/utils/ajax.js"),r=t("biz_wap/utils/ajax_wx.js").joinUrl,e=t("biz_common/utils/comm_report.js"),a=t("biz_wap/jsapi/leaveReport.js");
return{
report:function(t,r,a){
e.report("wap",o,t,r,a);
},
leaveReport:function(t,o){
a.addReport(function(){
return"function"==typeof o&&(o=o()),o?{
reportUrl:r("https://mp.weixin.qq.com"+e.getUrl("wap","report")),
reportData:e.getData(t,o,!0),
method:"POST"
}:!1;
});
}
};
});define("biz_wap/utils/device.js",[],function(){
"use strict";
function s(s){
{
var e=s.match(/MQQBrowser\/(\d+\.\d+)/i),r=s.match(/QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i)||s.match(/V1_AND_SQ_([\d\.]+)/),i=s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)||s.match(/MicroMessenger\/((\d+)\.(\d+))/),t=s.match(/Mac\sOS\sX\s(\d+[\.|_]\d+)/),n=s.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/),a=s.match(/Linux\s/),d=s.match(/MiuiBrowser\/(\d+\.\d+)/i),h=s.match(/MI-ONE/),c=s.match(/MI PAD/),w=s.match(/UCBrowser\/(\d+\.\d+(\.\d+\.\d+)?)/)||s.match(/\sUC\s/),u=s.match(/IEMobile(\/|\s+)(\d+\.\d+)/)||s.match(/WPDesktop/),b=s.match(/(ipod).*\s([\d_]+)/i),p=s.match(/(ipad).*\s([\d_]+)/i),v=s.match(/(iphone)\sos\s([\d_]+)/i),m=s.match(/Chrome\/(\d+\.\d+)/),f=s.match(/Mozilla.*Linux.*Android.*AppleWebKit.*Mobile Safari/),l=s.match(/(android)\s([\d\.]+)/i);
s.indexOf("HTC")>-1;
}
if(o.browser=o.browser||{},o.os=o.os||{},window.ActiveXObject){
var M=6;
(window.XMLHttpRequest||s.indexOf("MSIE 7.0")>-1)&&(M=7),(window.XDomainRequest||s.indexOf("Trident/4.0")>-1)&&(M=8),
s.indexOf("Trident/5.0")>-1&&(M=9),s.indexOf("Trident/6.0")>-1&&(M=10),o.browser.ie=!0,
o.browser.version=M;
}else s.indexOf("Trident/7.0")>-1&&(o.browser.ie=!0,o.browser.version=11);
l&&(this.os.android=!0,this.os.version=l[2]),b&&(this.os.ios=this.os.ipod=!0,this.os.version=b[2].replace(/_/g,".")),
p&&(this.os.ios=this.os.ipad=!0,this.os.version=p[2].replace(/_/g,".")),v&&(this.os.iphone=this.os.ios=!0,
this.os.version=v[2].replace(/_/g,".")),n&&(this.os.windows=!0,this.os.version=n[2]),
t&&(this.os.Mac=!0,this.os.version=t[1]),a&&(this.os.Linux=!0),s.indexOf("lepad_hls")>0&&(this.os.LePad=!0),
c&&(this.os.MIPAD=!0),e&&(this.browser.MQQ=!0,this.browser.version=e[1]),r&&(this.browser.MQQClient=!0,
this.browser.version=r[1]),i&&(this.browser.WeChat=!0,this.browser.mmversion=this.browser.version=i[1]),
d&&(this.browser.MIUI=!0,this.browser.version=d[1]),w&&(this.browser.UC=!0,this.browser.version=w[1]||0/0),
u&&(this.browser.IEMobile=!0,this.browser.version=u[2]),f&&(this.browser.AndriodBrowser=!0),
h&&(this.browser.M1=!0),m&&(this.browser.Chrome=!0,this.browser.version=m[1]),this.os.windows&&(this.os.win64="undefined"!=typeof navigator.platform&&"win64"==navigator.platform.toLowerCase()?!0:!1),
(this.os.Mac||this.os.windows||this.os.Linux)&&(this.os.pc=!0);
var g={
iPad7:"iPad; CPU OS 7",
LePad:"lepad_hls",
XiaoMi:"MI-ONE",
SonyDTV:"SonyDTV",
SamSung:"SAMSUNG",
HTC:"HTC",
VIVO:"vivo"
};
for(var O in g)this.os[O]=-1!==s.indexOf(g[O]);
o.os.phone=o.os.phone||/windows phone/i.test(s),this.os.getNumVersion=function(){
return parseFloat(o.os.version,"10");
},this.os.hasTouch="ontouchstart"in window,this.os.hasTouch&&this.os.ios&&this.os.getNumVersion()<6&&(this.os.hasTouch=!1),
o.browser.WeChat&&o.browser.version<5&&(this.os.hasTouch=!1),o.browser.getNumVersion=function(){
return parseFloat(o.browser.version,"10");
},o.browser.isFFCanOcx=function(){
return o.browser.firefox&&o.browser.getNumVersion()>=3?!0:!1;
},o.browser.isCanOcx=function(){
return!(!o.os.windows||!o.browser.ie&&!o.browser.isFFCanOcx()&&!o.browser.webkit);
},o.browser.isNotIESupport=function(){
return!!o.os.windows&&(!!o.browser.webkit||o.browser.isFFCanOcx());
},o.userAgent={},o.userAgent.browserVersion=o.browser.version,o.userAgent.osVersion=o.os.version,
delete o.userAgent.version;
}
var o={};
s.call(o,window.navigator.userAgent);
var e=function(){
var s=window.navigator.userAgent,e=null;
if(o.os.android){
if(o.browser.MQQ&&o.browser.getNumVersion()>=4.2)return!0;
if(-1!=s.indexOf("MI2"))return!0;
if(o.os.version>="4"&&(e=s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/))&&e[1]>=4.2)return!0;
if(o.os.version>="4.1")return!0;
}
return!1;
}(),r=function(){
var s=document.createElement("video");
if("function"==typeof s.canPlayType){
if("probably"==s.canPlayType('video/mp4; codecs="mp4v.20.8"'))return!0;
if("probably"==s.canPlayType('video/mp4; codecs="avc1.42E01E"')||"probably"==s.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))return!0;
}
return!1;
}(),i=function(){
return console.info("[canSupportAutoPlay]",o.os.ios,o.os.getNumVersion()),o.os.ios&&o.os.getNumVersion()<10?!1:!0;
}();
return o.canSupportVideo=r||e,o.canSupportVideoMp4=r,o.canSupportH5Video=e,o.canSupportAutoPlay=i,
o;
});define("biz_common/dom/attr.js",[],function(){
"use strict";
function t(t,e,n){
return"undefined"==typeof n?t.getAttribute(e):t.setAttribute(e,n);
}
function e(t,e,n,r){
t.style.setProperty?(r=r||null,t.style.setProperty(e,n,r)):"undefined"!=typeof t.style.cssText&&(r=r?"!"+r:"",
t.style.cssText+=";"+e+":"+n+r+";");
}
return{
attr:t,
setProperty:e
};
});define("common/utils.js",["biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","biz_wap/utils/wapsdk.js","biz_wap/utils/storage.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/log.js","biz_wap/utils/jsmonitor_report.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(){
return"1"===i.getQuery("isNativePage")||"2"===i.getQuery("isNativePage");
}
function n(e){
var t=arguments.length<=1||void 0===arguments[1]?50:arguments[1],n=void 0;
return function(){
for(var i=arguments.length,o=Array(i),r=0;i>r;r++)o[r]=arguments[r];
var a=this,s=function(){
n=null,e.apply(a,o);
};
n||(n=setTimeout(s,t));
};
}
var i=e("biz_common/utils/url/parse.js"),o=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/wapsdk.js"),a=e("biz_wap/utils/storage.js"),s=e("biz_wap/utils/device.js"),c=e("biz_wap/utils/mmversion.js"),u=e("biz_wap/jsapi/log.js"),g=e("biz_wap/utils/jsmonitor_report.js"),l=e("biz_common/dom/event.js");
try{
"undefined"==typeof parent.window.hasListenMpPageAction&&(parent.window.hasListenMpPageAction=!1),
"undefined"==typeof parent.window.hasListenStateChange&&(parent.window.hasListenStateChange=!1);
}catch(p){}
var d=[],f=[],w=new a("history4secondopen"),m="from",h=!1,_={
status:"loading"
},v=[],y={
isNativePage:t,
isNewNativePage:function(){
return"2"===i.getQuery("isNativePage");
},
isOldNativePage:function(){
return"1"===i.getQuery("isNativePage");
},
__useWcSlPlayer:!1,
isWcSlPage:function(){
return y.__useWcSlPlayer;
},
getPlayerType:function(){
return y.isWcSlPage()?3:t()?2:1;
},
getParam:function(e){
if(!e)return null;
var t=location.href.match(new RegExp("(\\?|&)"+e+"=([^&]+)"));
return t?t[2]:null;
},
insertAfter:function(e,t){
var n=t.parentNode;
n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling);
},
getInnerHeight:function(){
var e=window.getInnerHeight&&window.getInnerHeight();
return e||window.innerHeight||document.documentElement.clientHeight;
},
getInnerWidth:function(){
return window.innerWidth||document.documentElement.clientWidth;
},
getScrollTop:function(){
return document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
},
getDocumentHeight:function(){
return document.body.scrollHeight;
},
getElementActualTop:function(e){
var t=e.getBoundingClientRect(),n=t.top-this.getScrollTop();
return n;
},
getElementTop:function(e){
return e.getBoundingClientRect().top;
},
getElementHeight:function(e){
return e.getBoundingClientRect().height;
},
isScrollEnd:function(e){
return this.getScrollTop()+this.getInnerHeight()+e>=this.getDocumentHeight();
},
listenStateChange:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
f.push(e.cb);
try{
if(parent.window.hasListenStateChange)return;
}catch(t){}
o.on("activity:state_change",function(e){
f.forEach(function(t){
t(e);
});
});
try{
parent.window.hasListenStateChange=!0;
}catch(t){}
},
listenMpPageAction:function(e){
d.push(e);
try{
if(parent.window.hasListenMpPageAction)return;
}catch(t){}
o.on("onMPPageAction",function(e){
d.forEach(function(t){
t(e);
});
});
try{
parent.window.hasListenMpPageAction=!0;
}catch(t){}
},
getIosMainVersion:function(){
var e=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
return e&&e[1]&&parseInt(e[1].split("_")[0],10);
},
report120081:function(e,t){
r.jsmonitor({
id:120081,
key:e,
value:t
});
},
loadNewPageKeepingHistoryStackIfSecOpen:function(e){
window.__second_open__&&"string"==typeof e&&/^https?:\/\/mp.weixin.qq.com\//.test(e)&&w.set(m,location.href,Date.now()+1e4),
location.href=e.replace(/#.*$/,"")+"#wechat_redirect";
},
initNewPageHistoryStackFromSecOpen:function(){
var e=w.get(m);
if(e&&"string"==typeof e&&/^https?:\/\/mp.weixin.qq.com\//.test(e)&&(w.remove(m),
history&&history.replaceState&&history.pushState)){
var t=location.href;
try{
history.replaceState({
__mock_secopen_history_stack_reload__:1
},"",e),history.pushState({
__mock_secopen_history_stack_reload__:1
},"",t);
}catch(n){
console.error("[initNewPageHistoryStackFromSecOpen]",n);
}
}
h||(h=!0,window.addEventListener("popstate",function(e){
e.state&&1===e.state.__mock_secopen_history_stack_reload__&&location.reload();
}));
},
initWebCompt:function(e,t){
var n=function(){
for(;v.length;){
var e=v.shift();
e(_);
}
};
if(s.os.iphone&&c.isWechat&&c.gtVersion("7.0.14",1)&&s.os.getNumVersion()>=10.3||s.os.android&&c.isWechat&&c.gtVersion("7.0.15",1)&&s.os.getNumVersion()>=5)document.addEventListener("WeixinOpenTagsReady",function(){
_={
status:"ready"
},n();
}),document.addEventListener("WeixinOpenTagsError",function(e){
_={
status:"error",
error:e&&e.detail&&e.detail.errMsg
},n();
}),o.invoke("handleMPPageAction",{
action:"wxConfig",
appid:"wxmpfakeid",
webComptList:e
},function(i){
console.log("wx config web compt result",e,i),u.info("wx config web compt result",e,JSON.stringify(i)),
i&&i.err_msg&&-1===i.err_msg.indexOf(":ok")&&(_={
status:"error",
error:i.err_msg
},n()),"function"==typeof t&&t(i);
});else{
var i={
err_msg:"handleMPPageAction:fail_webcompt unsupported"
};
console.log("wx config web compt result",e,i),u.info("wx config web compt result",e,JSON.stringify(i)),
_={
status:"error",
error:i.err_msg
},n(),"function"==typeof t&&t(i);
}
},
initWebComptForWcSlVideoSharePage:function(){
o.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
});
var e=function(e){
-1!==e.err_msg.indexOf(":ok")?y.initNewPageHistoryStackFromSecOpen():(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: res not ok"),g.setSum(221515,s.os.iphone?7:8,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:CfgError",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e)));
};
if(c.isAndroid){
var t=c.getInner();
t>"27001037"&&"27001060">t||t>="27001100"?y.initWebCompt(["wxOpen","wxAd"],e):c.gtVersion("7.0.15",1)?(y.initWebCompt(["wxAd"]),
window.__failConfigWxOpen=!0,u.info("failed to config wxopen: android version check failed (gt 7.0.15)")):(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: android version check failed"));
}else c.gtVersion("7.0.15",1)?y.initWebCompt(["wxOpen","wxAd"],e):(window.__failConfigWxOpen=!0,
u.info("failed to config wxopen: ios version check failed"));
},
getWebComptStatus:function(e){
return"function"!=typeof e?_:("loading"===_.status?v.push(e):e(_),!0);
},
debounce:n,
bindDebounceScrollEvent:function(e){
var t=arguments.length<=1||void 0===arguments[1]?window:arguments[1],i=arguments.length<=2||void 0===arguments[2]?50:arguments[2],o=n(e,i);
l.on(t,"scroll",o);
}
};
return y;
});define("biz_wap/jsapi/core.js",["biz_wap/utils/mmversion.js"],function(e,i,n,t){
"use strict";
var o=(e("biz_wap/utils/mmversion.js"),window.__moon_report||function(){}),r=8,d={},a=!1;
try{
d=top.window.document;
}catch(w){
a=!0;
}
var c={},f={
ready:function(e){
var i=function(){
try{
e&&(window.onBridgeReadyTime=window.onBridgeReadyTime||+new Date,e());
}catch(i){
throw o([{
offset:r,
log:"ready",
e:i
}]),i;
}
window.jsapiReadyTime=Date.now();
};
a||"undefined"!=typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?i():d.addEventListener?d.addEventListener("WeixinJSBridgeReady",i,!1):d.attachEvent&&(d.attachEvent("WeixinJSBridgeReady",i),
d.attachEvent("onWeixinJSBridgeReady",i));
},
invoke:function(e,i,n){
this.ready(function(){
return a?!1:"object"!=typeof top.window.WeixinJSBridge?(t("请在微信中打开此链接！"),!1):void top.window.WeixinJSBridge.invoke(e,i,function(i){
try{
if(n){
n.apply(window,arguments);
var t=i&&i.err_msg?", err_msg-> "+i.err_msg:"";
console.info("[jsapi] invoke->"+e+t);
}
}catch(d){
throw o([{
offset:r,
log:"invoke;methodName:"+e,
e:d
}]),d;
}
});
});
},
call:function(e){
this.ready(function(){
if(a)return!1;
if("object"!=typeof top.window.WeixinJSBridge)return!1;
try{
top.window.WeixinJSBridge.call(e);
}catch(i){
throw o([{
offset:r,
log:"call;methodName:"+e,
e:i
}]),i;
}
});
},
on:function(e,i){
this.ready(function(){
return a?!1:"object"==typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.on?(c[e]||(c[e]=[]),
c[e].push(i),void(c[e].length>1||top.window.WeixinJSBridge.on(e,function(){
try{
if(c[e]&&c[e].length){
for(var i,n=0;n<c[e].length;n++)i=c[e][n].apply(window,arguments);
return i;
}
}catch(t){
throw o([{
offset:r,
log:"on;eventName:"+e,
e:t
}]),t;
}
}))):!1;
});
},
remove:function(e,i){
if(!c[e])return!1;
for(var n=!1,t=c[e].length-1;t>=0;t--)c[e][t]===i&&(c[e].splice(t),n=!0);
return n;
}
};
return f;
});define("pages/video_ctrl.js",[],function(){
"use strict";
function i(i){
i=i||window;
var n=i.cgiData;
return n&&2==n.ori_status&&1==n.is_mp_video&&(n.nick_name||n.hit_username)?!0:!1;
}
function n(i){
return i=i||window,!1;
}
function e(){
return!1;
}
function t(){
return-1!=r.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var i;
if(parent==window)i=window;else try{
{
parent.window.__videoDefaultRatio;
}
i=parent.window;
}catch(n){
i=window;
}
var e=i.__videoDefaultRatio||16/9;
return"54"==i.appmsg_type?e:e;
}
var r=window.location.href;
return{
showPauseTips:t,
showVideoLike:e,
showVideoDetail:n,
showReprint:i,
getRatio:o
};
});