define("biz_wap/utils/log.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js"],function(i){
"use strict";
var s=i("biz_wap/utils/mmversion.js"),e=i("biz_wap/jsapi/core.js");
return function(i,n,o){
"string"!=typeof i&&(i=JSON.stringify(i)),n=n||"info",o=o||function(){};
var t;
s.isIOS?t="writeLog":s.isAndroid&&(t="log"),t&&e.invoke(t,{
level:n,
msg:"[WechatFe]"+i
},o);
};
});define("biz_wap/utils/localstorage.js",[],function(){
"use strict";
var t={};
return t=window.localStorage?{
set:function(t,e){
null!==this.get(t)&&this.remove(t),localStorage.setItem(t,e);
},
get:function(t){
var e=localStorage.getItem(t);
return void 0===e?null:e;
},
remove:function(t){
localStorage.removeItem(t);
},
clear:function(){
localStorage.clear();
},
each:function(t){
for(var e,o=localStorage.length,n=0,t=t||function(){};o>n&&(e=localStorage.key(n),
t.call(this,e,this.get(e))!==!1);n++)localStorage.length<o&&(o--,n--);
}
}:{
set:function(){},
get:function(){},
remove:function(){},
clear:function(){},
each:function(){}
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
});define("sougou/index.js",["appmsg/emotion/emotion.js","biz_common/tmpl.js","appmsg/emotion/dom.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/utils/string/html.js","sougou/a_tpl.html.js","appmsg/cmt_tpl.html.js","appmsg/my_comment_tpl.html.js"],function(e){
"use strict";
function t(e){
var t=document.getElementById("js_cover"),o=[];
t&&o.push(t);
var n=document.getElementById("js_content");
if(n)for(var m=n.getElementsByTagName("img")||[],s=0,r=m.length;r>s;s++)o.push(m.item(s));
for(var a=[],s=0,r=o.length;r>s;s++){
var p=o[s],l=p.getAttribute("data-src")||p.getAttribute("src");
l&&(a.push(l),function(t){
i.on(p,"click",function(){
return"ios"==e?window.JSInvoker&&window.JSInvoker.openImageList&&window.JSInvoker.openImageList(JSON.stringify({
index:t,
array:a
})):window.JSInvoker&&JSInvoker.weixin_openImageList&&window.JSInvoker.weixin_openImageList(JSON.stringify({
index:t,
array:a
})),!1;
});
}(s));
}
}
var o=e("appmsg/emotion/emotion.js"),n=e("biz_common/tmpl.js"),m=e("appmsg/emotion/dom.js"),i=(e("biz_wap/utils/ajax.js"),
e("biz_common/dom/event.js"));
e("biz_common/utils/string/html.js");
e("sougou/a_tpl.html.js"),e("appmsg/cmt_tpl.html.js");
if(document.getElementById("js_report_article3")&&(document.getElementById("js_report_article3").style.display="none"),
document.getElementById("js_toobar3")&&(document.getElementById("js_toobar3").style.display="none"),
function(){
var t=e("appmsg/my_comment_tpl.html.js"),o=document.createElement("div");
o&&(o.innerHTML=n.tmpl(t,{}),document.body.appendChild(o));
}(),new o.Emotion({
emotionPanel:m("#js_emotion_panel"),
inputArea:m("#js_cmt_input"),
emotionPanelArrowWrp:m("#js_emotion_panel_arrow_wrp"),
emotionSwitcher:m("#js_emotion_switch"),
emotionSlideWrapper:m("#js_slide_wrapper"),
emotionNavBar:m("#js_navbar"),
submitBtn:m("#js_cmt_submit")
}),navigator.userAgent.toLowerCase().match(/ios/)){
var s=navigator.userAgent.toLowerCase().match(/(?:sogousearch\/ios\/)(.*)/);
if(s&&s[1]){
var r=s[1].replace(/\./g,"");
parseInt(r)>422&&t("ios");
}
}else t("android");
window.onerror=function(e){
var t=new Image;
t.src="/mp/jsreport?key=86&content="+e+"&r="+Math.random();
};
});define("biz_wap/safe/mutation_observer_report.js",[],function(){
"use strict";
window.addEventListener&&window.addEventListener("load",function(){
window.__moonsafe_mutation_report_keys||(window.__moonsafe_mutation_report_keys={});
var e=window.moon&&moon.moonsafe_id||29715,o=window.moon&&moon.moonsafe_key||0,t=[],n={},r=function(e){
return"[object Array]"==Object.prototype.toString.call(e);
},s=function(e,o,s){
s=s||1,n[e]||(n[e]=0),n[e]+=s,o&&(r(o)?t=t.concat(o):t.push(o)),setTimeout(function(){
a();
},1500);
},a=function(){
var r=[],s=t.length,i=["r="+Math.random()];
for(var c in n)n.hasOwnProperty(c)&&r.push(e+"_"+(1*c+1*o)+"_"+n[c]);
for(var c=0;s>c&&!(c>=10);++c)i.push("log"+c+"="+encodeURIComponent(t[c]));
if(!(0==r.length&&i.length<=1)){
var _,d="idkey="+r.join(";")+"&lc="+(i.length-1)+"&"+i.join("&");
if(window.ActiveXObject)try{
_=new ActiveXObject("Msxml2.XMLHTTP");
}catch(w){
try{
_=new ActiveXObject("Microsoft.XMLHTTP");
}catch(f){
_=!1;
}
}else window.XMLHttpRequest&&(_=new XMLHttpRequest);
_&&(_.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),_.setRequestHeader("cache-control","no-cache"),
_.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
_.setRequestHeader("X-Requested-With","XMLHttpRequest"),_.onreadystatechange=function(){
4===_.readyState&&(t.length>10?(t=t.slice(10),a()):(t=[],n={}));
},t=[],n={},_.send(d));
}
};
try{
if(!window.__observer)return;
var i=window.__observer_data;
if(window.__observer.takeRecords){
var c=window.__observer.takeRecords();
if(c&&c.length){
i.count++;
var _=new Date;
c.forEach(function(e){
for(var o=e.addedNodes,t=0;t<o.length;t++){
var n=o[t];
if("SCRIPT"===n.tagName){
var r=n.src;
!r||/qq\.com/.test(r)||/weishi\.com/.test(r)||i.list.push(r);
}
}
}),i.exec_time+=new Date-_;
}
}
window.__observer.disconnect();
for(var d=window.__moonsafe_mutation_report_keys.observer||2,w=window.__moonsafe_mutation_report_keys.script_src||8,f=window.__moonsafe_mutation_report_keys.setattribute||9,u=window.__moonsafe_mutation_report_keys.ajax||10,m=25,v=0;v<i.list.length;v++){
var l=i.list[v],h=["[moonsafe][observer][url]:"+location.href,"[moonsafe][observer][src]:"+l,"[moonsafe][observer][ua]:"+navigator.userAgent];
i.list.length==v+1&&(h.push("[moonsafe][observer][count]:"+i.count),h.push("[moonsafe][observer][exec_time]:"+i.exec_time+"ms")),
s(d,h),"inlinescript_without_nonce"==l&&s(m,h);
}
var p=window.__danger_src;
if(p)for(var y=[{
key:"xmlhttprequest",
idkey:u
},{
key:"script_src",
idkey:w
},{
key:"script_setAttribute",
idkey:f
}],v=0;v<y.length;v++){
var b=y[v].key,g=p[b];
if(g&&g.length)for(var k=0;k<g.length;k++){
var h=["[moonsafe]["+b+"][url]:"+location.href,"[moonsafe]["+b+"][src]:"+g[k],"[moonsafe]["+b+"][ua]:"+navigator.userAgent];
s(y[v].idkey,h);
}
}
}catch(q){
var R=3,h=["[moonsafe][observer][exception]:"+q];
s(R,h);
}
},!1);
});define("appmsg/fereport.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,n=e.timing,o=0,r=0,u=window.location.protocol,p=Math.random(),_=1>2*p,c=1>25*p,l=1>100*p,g=1>250*p,f=1>1e3*p,v=1>1e4*p,S=!0;
"https:"==u?(o=18,r=27,S=!1):"http:"==u&&(o=9,r=19);
var B=window.__wxgspeeds||{};
if(B&&B.moonloadtime&&B.moonloadedtime){
var h=B.moonloadedtime-B.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
s.saveSpeeds({
sample:21==i||22==i&&f?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:h
},
user_define:m
});
}
B&&B.mod_downloadtime&&s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:24,
time:B.mod_downloadtime
},
user_define:m
});
var b=n.domContentLoadedEventStart-n.navigationStart;
if(b>3e3&&(s.setBasicTime({
sample:l&&S||c&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:r
}),w.setLogs({
id:28307,
key:28,
value:1,
lc:1,
log0:window.encodeURIComponent(location.href)
})),0==window.optimizing_flag?s.setBasicTime({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:467
}):1==window.optimizing_flag?s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:468
}):2==window.optimizing_flag&&s.setBasicTime({
sample:l,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:469
}),s.setBasicTime({
sample:g&&S||l&&!S?1:0,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o
}),t.htmlSize){
var I=t.htmlSize/(n.responseEnd-n.connectStart);
s.saveSpeeds({
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:25,
time:Math.round(I)
},
user_define:m
});
}
if(B&&B.combo_times)for(var R=1;R<B.combo_times.length;R++)s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:26,
time:B.combo_times[R]-B.combo_times[R-1]
},
user_define:m
});
if(B&&B.mod_num){
var C=B.hit_num/B.mod_num;
s.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:[{
sid:27,
time:Math.round(100*C)
},{
sid:28,
time:Math.round(1e3*C)
}],
user_define:m
});
}
var U=window.logs.pagetime.jsapi_ready_time-n.navigationStart;
s.saveSpeeds(156==o||155==o?{
sample:_,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}:{
sample:f,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:31,
time:U
},
user_define:m
}),s.send(),window.setTimeout(function(){
window.__moonclientlog&&d("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
s.saveSpeeds({
sample:v,
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:o,
speeds:{
sid:i,
time:window.onBridgeReadyTime-n.navigationStart
},
user_define:m
}),s.send());
},5e3);
}
}
function n(e){
for(var i=[],n=new DataView(e),o=0;o<n.byteLength;o+=4){
var s=n.getUint32(o),t=s.toString(16),d="00000000",a=(d+t).slice(-d.length);
i.push(a);
}
return i.join("");
}
function o(e,i){
var o=new TextEncoder("utf-8").encode(e),s=crypto.subtle||crypto.webkitSubtle;
return s.digest(i,o).then(function(e){
return n(e);
});
}
var s=e("biz_wap/utils/wapsdk.js"),t=e("biz_common/utils/http.js"),d=e("appmsg/log.js"),a=e("biz_common/base64.js"),w=e("biz_wap/utils/jsmonitor_report.js"),m=a.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
i(),function(){
try{
var e=Math.random(),i=window.localStorage,n=[],t=[];
for(var d in i)-1!=d.indexOf("__MOON__")&&window.moon_map[d.substr(8)]&&n.push(i[d]);
if(window.crypto){
var w="";
w=.5>e?"SHA-256":"SHA-1";
for(var r=(new Date).getTime(),u=0;u<n.length;u++)t.push(o(n[u],w));
Promise.all(t).then(function(){
var i=(new Date).getTime(),n=i-r;
s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:.5>e?21:23,
time:n
},
user_define:m
}),s.send();
});
}else s.saveSpeeds({
uin:window.encodeURIComponent(a.toBase64(window.user_uin))||uin,
pid:108,
speeds:{
sid:24,
time:1
},
user_define:m
}),s.send();
}catch(p){}
}();
});define("appmsg/fereport_without_localstorage.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,m=e.timing,w=0,p=0,u=window.location.protocol,r=Math.random(),_=1>2*r,l=1>25*r,c=1>100*r,g=1>250*r,f=1>1e3*r,S=1>1e4*r,B=!0;
"https:"==u?(w=462,p=464,B=!1):"http:"==u&&(w=417,p=463);
var v=window.__wxgspeeds||{};
if(v&&v.moonloadtime&&v.moonloadedtime){
var I=v.moonloadedtime-v.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
o.saveSpeeds({
sample:21==i||22==i&&f?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:i,
time:I
},
user_define:a
});
}
v&&v.mod_downloadtime&&o.saveSpeeds({
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:24,
time:v.mod_downloadtime
},
user_define:a
});
var R=m.domContentLoadedEventStart-m.navigationStart;
if(R>3e3&&(o.setBasicTime({
sample:c&&B||l&&!B?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:p
}),t.setLogs({
id:28307,
key:28,
value:1,
lc:1,
log0:encodeURIComponent(location.href)
})),0==window.optimizing_flag?o.setBasicTime({
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:473
}):1==window.optimizing_flag?o.setBasicTime({
sample:c,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:474
}):2==window.optimizing_flag&&o.setBasicTime({
sample:c,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:475
}),o.setBasicTime({
sample:g&&B||c&&!B?1:0,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w
}),n.htmlSize){
var b=n.htmlSize/(m.responseEnd-m.connectStart);
o.saveSpeeds({
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:25,
time:Math.round(b)
},
user_define:a
});
}
if(v&&v.combo_times)for(var h=1;h<v.combo_times.length;h++)o.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:26,
time:v.combo_times[h]-v.combo_times[h-1]
},
user_define:a
});
if(v&&v.mod_num){
var j=v.hit_num/v.mod_num;
o.saveSpeeds({
sample:g,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:[{
sid:27,
time:Math.round(100*j)
},{
sid:28,
time:Math.round(1e3*j)
}],
user_define:a
});
}
var C=window.logs.pagetime.jsapi_ready_time-m.navigationStart;
o.saveSpeeds(156==w||155==w?{
sample:_,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:31,
time:C
},
user_define:a
}:{
sample:f,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:31,
time:C
},
user_define:a
}),o.send(),window.setTimeout(function(){
window.__moonclientlog&&s("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
o.saveSpeeds({
sample:S,
uin:window.encodeURIComponent(d.toBase64(window.user_uin))||uin,
pid:w,
speeds:{
sid:i,
time:window.onBridgeReadyTime-m.navigationStart
},
user_define:a
}),o.send());
},5e3);
}
}
var o=e("biz_wap/utils/wapsdk.js"),n=e("biz_common/utils/http.js"),s=e("appmsg/log.js"),d=e("biz_common/base64.js"),t=e("biz_wap/utils/jsmonitor_report.js"),a=d.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
i();
});define("appmsg/report.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","common/utils.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function t(){
var t=(e("biz_wap/utils/mmversion.js"),e("biz_common/utils/report.js"),e("biz_wap/utils/jsmonitor_report.js")),r=!1,s=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),s&&s.timing&&s.timing.navigationStart?(r=s.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=window.performance&&window.performance.timing,a=write_sceen_time-r,s=first_sceen__time-r,d=page_endtime-r,g=(window.onload_endtime||+new Date)-r;
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(a=real_show_page_time-r,s=real_show_page_time-r);
var m=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-r:void 0,p=window.logs.a8key_ready_time?window.logs.a8key_ready_time-r:void 0,w=i&&i.connectEnd-i.connectStart,c=i&&i.secureConnectionStart&&i.connectEnd-i.secureConnectionStart,u=i&&i.domainLookupEnd&&i.domainLookupStart&&i.domainLookupEnd-i.domainLookupStart;
if(window.logs.pagetime.wtime=a,window.logs.pagetime.ftime=s,window.logs.pagetime.ptime=d,
window.logs.pagetime.onload_time=g,window.logs.pagetime.jsapi_ready_time=m,window.logs.pagetime.a8key_ready_time=p,
need_report_cost?o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1|1|"+d,"1|2|"+s,"1|3|"+g,"1|4|"+m,"1|5|"+p,"1|6|"+w,"1|7|"+c,"1|8|"+u].join(";")
}
}):Math.random()<.01&&o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["#1|1|"+d,"1|2|"+s,"1|3|"+g,"1|4|"+m,"1|5|"+p,"1|6|"+w,"1|7|"+c,"1|8|"+u].join(";")
}
}),need_report_cost&&s>3e3){
var _=new Image,l=(new Date).getTime();
_.onload=function(){
var e=(new Date).getTime()-l,t=(new Date).getTime(),i=new Image;
i.onload=function(){
var i=(new Date).getTime()-t;
o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["^2|1|"+e,"2|2|"+i].join(";")
}
});
},i.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
},_.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
}
if(!(Math.random()>.2||0>g||0>a||0>s||0>d)){
if(m&&t.setAvg(27822,15,m),p&&t.setAvg(27822,17,p),d>=15e3)return void t.setAvg(27822,29,d);
t.setAvg(27822,1,d).setAvg(27822,3,g).setAvg(27822,5,s),window.isWeixinCached&&t.setAvg(27822,19,d),
e()?(t.setAvg(27822,9,d),window.isWeixinCached&&t.setAvg(27822,23,d)):"wifi"==networkType?(t.setAvg(27822,7,d),
window.isWeixinCached&&t.setAvg(27822,21,d)):"2g/3g"==networkType?(t.setAvg(27822,11,d),
window.isWeixinCached&&t.setAvg(27822,25,d)):"4g"==networkType?(t.setAvg(27822,14,d),
window.isWeixinCached&&t.setAvg(27822,26,d)):(t.setAvg(27822,13,d),window.isWeixinCached&&t.setAvg(27822,28,d)),
window.moon&&moon.clearSample&&(t.setAvg(27822,71,d),e()?t.setAvg(27822,73,d):"wifi"==networkType?t.setAvg(27822,75,d):"2g/3g"==networkType?t.setAvg(27822,77,d):"4g"==networkType?t.setAvg(27822,78,d):t.setAvg(27822,79,d)),
w&&t.setAvg(27822,65,w),c&&t.setAvg(27822,67,c),u&&t.setAvg(27822,69,u);
}
}(),function(){
window.logs.jsapi_ready_fail&&t.setSum(24729,55,window.logs.jsapi_ready_fail);
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content");
if(t&&!(Math.random()>.1)){
var n=function o(){
var n=window.pageYOffset||document.documentElement.scrollTop,r=e.offsetTop;
if(n+a.getInnerHeight()>=r){
for(var d,g,m=t.getElementsByTagName("img"),p={},w=[],c=0,u=0,_=0,l=0,f=m.length;f>l;++l){
var v=m[l];
d=v.getAttribute("data-src")||v.getAttribute("src"),g=v.getAttribute("src"),d&&(d.isCDN()?u++:_++,
c++,p[g]={});
}
if(w.push("1="+1e3*c),w.push("2="+1e3*u),w.push("3="+1e3*_),s.getEntries){
var y=s.getEntries(),h=window.logs.img.download,k=[0,0,0],A=[0,0,0];
c=u=0;
for(var l=0,j=y.length;j>l;++l){
var T=y[l],b=T.name;
b&&"img"==T.initiatorType&&p[b]&&(b.isCDN()&&(A[0]+=T.duration,u++),k[0]+=T.duration,
c++,p[b]={
startTime:T.startTime,
responseEnd:T.responseEnd
});
}
k[0]>0&&c>0&&(k[2]=k[0]/c),A[0]>0&&u>0&&(A[2]=A[0]/u);
for(var l in h)if(h.hasOwnProperty(l)){
for(var M=h[l],x=0,E=0,C=0,z=0,S=0,f=M.length;f>S;++S){
var d=M[S];
if(p[d]&&p[d].startTime&&p[d].responseEnd){
var D=p[d].startTime,I=p[d].responseEnd;
x=Math.max(x,I),E=E?Math.min(E,D):D,d.isCDN()&&(C=Math.max(x,I),z=E?Math.min(E,D):D);
}
}
k[1]+=Math.round(x-E),A[1]+=Math.round(C-z);
}
for(var W=4,N=7,l=0;3>l;l++)k[l]=Math.round(k[l]),A[l]=Math.round(A[l]),k[l]>0&&(w.push(W+l+"="+k[l]),
"wifi"==networkType?w.push(W+l+6+"="+k[l]):("2g/3g"==networkType||"4g"==networkType)&&w.push(W+l+12+"="+k[l])),
A[l]>0&&(w.push(N+l+"="+A[l]),"wifi"==networkType?w.push(N+l+6+"="+A[l]):("2g/3g"==networkType||"4g"==networkType)&&w.push(N+l+12+"="+A[l]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",n,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("biz_common/dom/event.js"),n=navigator.userAgent,o=e("biz_wap/utils/ajax.js"),a=e("common/utils.js");
e("appmsg/cdn_img_lib.js"),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],("network_type:edge"==i.err_msg||"network_type:wwan"==i.err_msg)&&(i.detailtype&&"4g"==i.detailtype||i.subtype&&"4g"==i.subtype)&&(networkType="4g"),
t();
});
}else t();
},!1);
});define("appmsg/report_and_source.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","appmsg/articleReport.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","appmsg/log.js","appmsg/open_url_with_webview.js","biz_wap/jsapi/core.js"],function(e,i,o,t){
"use strict";
function n(){
var e=window.location.protocol+"//",i=_.indexOf("://")<0?e+_:_;
if(-1!=i.indexOf("mp.weixin.qq.com/s")||-1!=i.indexOf("mp.weixin.qq.com/mp/appmsg/show")||-1!=i.indexOf("mp.weixin.qq.com/mp/homepage")){
var o=i.split("#");
i=r.addParam(o[0],"scene",25,!0)+(o[1]?"#"+o[1]:""),i=i.replace(/#rd$/g,"#wechat_redirect");
}else i=e+"mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(_);
try{
if("mp.weixin.qq.com"!=top.window.location.host)return window.top.open(i,"_blank"),
!1;
}catch(t){}
var n=location.search.replace("wx_header","del_wx_header"),s={
url:"/mp/advertisement_report"+n+"&report_type=3&action_type=0&url="+encodeURIComponent(_)+"&ascene="+encodeURIComponent(window.ascene||-1)+"&__biz="+biz+"&r="+Math.random()+"&exptype="+window.exptype+"&expsessionid="+window.expsessionid,
type:"GET",
mayAbort:!0,
async:!1
},p=c.isInMiniProgram?0:1;
return s.timeout=2e3,s.complete=function(){
d(i,{
sample:p,
scene:60,
user_name:user_name,
reject:function(){
location.href=i;
}
});
},m(s),!1;
}
e("biz_common/utils/string/html.js");
var s=e("biz_common/dom/event.js"),r=e("biz_common/utils/url/parse.js"),p=e("appmsg/articleReport.js"),m=e("biz_wap/utils/ajax.js"),c=e("biz_wap/utils/mmversion.js"),a=e("appmsg/log.js"),l=msg_title.htmlDecode(),_=msg_source_url.htmlDecode(),d=e("appmsg/open_url_with_webview.js"),w=e("biz_wap/jsapi/core.js");
p.init({
dom:document.getElementById("js_report_article3"),
title:l,
link:window.msg_link
});
var u=document.getElementById("js_view_source");
s.on(u,"click",function(e){
var i=u.getBoundingClientRect();
return a("[Appmsg viewsource location] top: "+i.top+" left: "+i.left+" bottom: "+i.bottom+" right: "+i.right),
a("[Appmsg viewsource click] clientX: "+e.clientX+" clientY: "+e.clientY),n(),!1;
});
});define("appmsg/appmsg_copy_report.js",["biz_wap/utils/ajax.js","biz_common/dom/event.js"],function(t){
"use strict";
var e=t("biz_wap/utils/ajax.js"),n=t("biz_common/dom/event.js"),o=function(t,e){
var n=!1,o=t;
if(t===e)n=!0;else for(;o.parentNode&&(o=o.parentNode,1!==o.nodeType||"body"!==o.tagName.toLowerCase());)if(o===e){
n=!0;
break;
}
return n;
},i=function(t){
this.biz=t.biz,this.logid=t.logid,this.baseData=t.baseData,this.isPaySubscribe=t.isPaySubscribe,
this.container=t.container,this.totalLength=this.container.innerText.length,this.initEvent();
};
return i.prototype.initEvent=function(){
var t=this;
n.on(document,"copy",function(){
console.log(t.getContentData());
var e=[].concat(t.baseData),n=t.getContentData().trim();
n.length&&(e.push(t.totalLength),e.push(n),e.push(n.length),e.push(t.isPaySubscribe),
t.report(e.join(",")));
});
},i.prototype.getContentData=function(){
var t=document.getSelection(),e=this.container,n="";
if(t&&t.rangeCount){
var i=t.getRangeAt(0);
if(!i.collapsed){
var a=i.startContainer,r=i.startOffset,s=i.endContainer,c=i.endOffset,p=o(a,e),u=o(s,e);
if(p&&u)n=i.toString();else if(p||u){
var f=document.createRange();
f.setStart(a,r),f.setEnd(s,c),!u&&f.setEndAfter(e),!p&&f.setStartBefore(e),n=f.toString();
}else if(t.containsNode&&t.containsNode(e,!0)){
var f=document.createRange();
f.setEndAfter(e),f.setStartBefore(e),n=f.toString();
}
}
}
return n;
},i.prototype.report=function(t){
var n=this.biz,o=this.logid;
e({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+n,
type:"POST",
data:{
logid:o,
buffer:t
},
async:!1,
timeout:2e3
});
},i;
});define("appmsg/cdn_speed_report.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function t(){
function e(e){
var t=[];
for(var n in e)t.push(n+"="+encodeURIComponent(e[n]||""));
return t.join("&");
}
if(networkType){
var t=window.performance||window.msPerformance||window.webkitPerformance;
if(t&&"undefined"!=typeof t.getEntries){
var n,i,a=100,o=document.getElementsByTagName("img"),p=o.length,s=navigator.userAgent,g=!1;
/micromessenger\/(\d+\.\d+)/i.test(s),i=RegExp.$1;
for(var w=0,m=o.length;m>w;w++)if(n=parseInt(100*Math.random()),!(n>a)){
var d=o[w].getAttribute("src");
if(d&&!(d.indexOf("mp.weixin.qq.com")>=0)){
for(var f,_=t.getEntries(),u=0;u<_.length;u++)if(f=_[u],f.name==d){
var c=o[w].getAttribute("data-fail");
r({
type:"POST",
url:"/mp/appmsgpicreport?__biz="+biz+"#wechat_redirect",
data:e({
rnd:Math.random(),
uin:uin,
version:version,
client_version:i,
device:navigator.userAgent,
time_stamp:parseInt(+new Date/1e3),
url:d,
img_size:o[w].fileSize||0,
user_agent:navigator.userAgent,
net_type:networkType,
appmsg_id:window.appmsgid||"",
sample:p>100?100:p,
delay_time:parseInt(f.duration),
from:window.isSg?"sougou":"",
fail:c
})
}),g=!0;
break;
}
if(g)break;
}
}
}
}
}
var n=e("biz_common/dom/event.js"),i=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/ajax.js"),a={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
i.invoke("getNetworkType",{},function(e){
networkType=a[e.err_msg],("network_type:edge"==e.err_msg||"network_type:wwan"==e.err_msg)&&(e.detailtype&&"4g"==e.detailtype||e.subtype&&"4g"==e.subtype)&&(networkType="4g"),
t();
}),n.on(window,"load",t,!1);
});define("appmsg/wxtopic.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","appmsg/topic_tpl.html.js"],function(t){
"use strict";
function e(t){
t.parentNode.removeChild(t);
}
function i(t,e){
var i=c;
e.img_url||(e.img_url=topic_default_img);
for(var o in e){
var a=new RegExp("{"+o+"}","g");
i=i.replace(a,e[o]);
}
var p=document.createElement("span");
p.className="db topic_area",p.innerHTML=i,t.parentNode.insertBefore(p,t),t.parentNode.removeChild(t),
r.tap(p,function(){
var e=location.protocol+"//mp.weixin.qq.com/mp/topic?action=topic_detail_page&topic_id="+t.getAttribute("data-topic-id")+"&topic_type="+t.getAttribute("data-topic-type")+"&sn="+t.getAttribute("data-topic-sn")+"&scene=101#wechat_redirect";
n.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t&&-1!==t.err_msg.indexOf(":ok")||(location.href=e);
});
});
}
function o(t){
var o={
topic_id:t.getAttribute("data-topic-id"),
topic_type:t.getAttribute("data-topic-type"),
sn:t.getAttribute("data-topic-sn"),
biz:biz
};
p({
url:"/mp/topic?action=get_topic_info",
type:"post",
data:o,
success:function(o){
if(console.log(o),o=JSON.parse(o),0!=o.base_resp.ret)return void e(t);
var a={
title:o.title,
author:o.author||(o.leading_actor?o.leading_actor.replace(/\$\$/g," / "):"-"),
img_url:o.img_url,
msg_num:o.msg_num
};
i(t,a);
},
error:function(){
e(t);
}
});
}
function a(){
var t=document.getElementsByTagName("wxtopic");
t[0]&&o(t[0]);
}
var p=t("biz_wap/utils/ajax.js"),n=t("biz_wap/jsapi/core.js"),r=t("biz_common/dom/event.js"),c=t("appmsg/topic_tpl.html.js");
a();
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var o=arguments[t];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);
}
return e;
};
define("appmsg/live.js",["biz_common/dom/event.js","appmsg/weapp_common.js","biz_common/moment.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","appmsg/appmsg_live_tpl.html.js","biz_wap/utils/wapsdk.js","common/utils.js","biz_common/dom/offset.js","common/comm_report.js"],function(e){
"use strict";
function t(e,t){
g.jsmonitor({
id:223326,
key:e,
value:t
});
}
function o(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
f.report(21032,_extends({
MsgId:1*z.mid,
ItemIdx:1*z.idx,
BizUin:z.biz,
PreScene:1*z.scene,
ActionType:1e4
},e));
}
function n(e){
var t=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
return e=Number(e),null===e?0:isNaN(e)?"-":((isNaN(t)||null===t)&&(t=1),e>9999e8?"9990%s".replace("%s","亿+"):e>99999499?Number((e/1e8).toFixed(t))+"亿":e>=1e4?Number((e/1e4).toFixed(t))+"万":e);
}
function s(){
function e(){
if(h.length)for(var e=0;e<h.length;e++){
var n=h[e];
if(!n.cardExposed){
var s=_.getOffset(n).offsetTop,i=v.getScrollTop();
i+v.getInnerHeight()>=s&&i<=s+n.offsetHeight&&(t(9),o({
SubActionType:1,
RoomId:n.liveInfo.room_id
}),n.cardExposed=!0);
}
}
}
m.on(document.body,"tap","."+j,function(e){
var n=e.delegatedTarget.liveInfo,s=encodeURIComponent(location.href);
t(10),o({
SubActionType:2,
RoomId:n.room_id
}),107!==n.status&&r.jumpUrl({
options:{
userName:"gh_9dcc2ce385c1",
appId:"wx60422b707e49ff2e",
relativeURL:"pages/player/player?roomId="+n.room_id+"&roomAppId="+n.room_appid+"&sceneNote="+s+"&preScene="+z.scene,
openType:2
}
});
}),v.bindDebounceScrollEvent(e),e();
}
function i(){
for(var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=0;t<e.length;t++){
var o="",i="",a="",m="",r=e[t],d=r.status;
if(104!==d){
var c=101===d||105===d||106===d,g=103===d||107===d;
if(c)o="直播中",i="正在直播: ",a="进入直播";else if(0===d||102===d){
o="直播",i="即将直播: ",a="开播提醒";
var v=z.svrTime?new Date(1e3*z.svrTime):new Date,_=v.getFullYear(),f=v.getMonth(),j=v.getDate(),h=new Date(_,f,j,0,0,0).getTime(),w=h+864e5,y=1e3*r.begin_time,I=new Date(y).getFullYear()!==_,x=y>=h&&w>y,T=y>=w&&w+864e5>y,N=void 0;
N=x?"今天":T?"明天":I?"YYYY年M月D日":"M月D日";
var S=l(y).format(N+" HH:MM");
m=S+" 开播";
}else g&&(o="直播结束",i="直播已结束: ",a="查看直播");
(c||g)&&(m=n(r.view_count)+" 观看");
var D=document.getElementsByClassName(""+b+r.room_id)[0];
D&&(D.liveInfo=r,D.innerHTML=p.tmpl(u,{
tagStatusWord:o,
liveStatusWord:i,
btnStatusWord:a,
statusInfoWord:m,
showEntryBtn:107!==d,
title:""+i+r.room_name,
desc:r.nickname+"的直播",
cover:r.cover,
isInLive:c,
isEnd:g,
likeCount:n(r.like_count),
liveDeleted:1===r.room_status
}));
}
}
s();
}
function a(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(h.length){
_extends(z,e);
for(var t=[],o=0;o<h.length;o++)t.push(h[o].dataset.id),d.addClass(h[o],j),d.addClass(h[o],""+b+h[o].dataset.id);
c({
url:"/mp/getappmsglive",
type:"POST",
dataType:"json",
data:{
__biz:e.biz,
mid:e.mid,
idx:e.idx,
scene:e.scene,
live_id:t.join(",")
},
success:function(e){
e&&e.live_info&&e.live_info.length&&i(e.live_info);
}
});
}
}
var m=e("biz_common/dom/event.js"),r=e("appmsg/weapp_common.js"),l=e("biz_common/moment.js"),d=e("biz_common/dom/class.js"),c=e("biz_wap/utils/ajax.js"),p=e("biz_common/tmpl.js"),u=e("appmsg/appmsg_live_tpl.html.js"),g=e("biz_wap/utils/wapsdk.js"),v=e("common/utils.js"),_=e("biz_common/dom/offset.js"),f=e("common/comm_report.js"),j="js_live_card",b="js_live_card_",h=document.getElementsByTagName("mplive"),z={};
return{
init:a
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("appmsg/profile/mp_insert_profile.js",["biz_common/tmpl.js","appmsg/profile/mp_profile_tpl.html.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","common/utils.js","common/comm_report.js","appmsg/profile/ban_alert_tpl.html.js","appmsg/appmsg_card.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js"],function(e){
"use strict";
function i(e){
try{
return 1*window.atob(e);
}catch(i){}
return 0;
}
function n(e,n,t){
l.report(22316,{
BizUin:i(window.biz),
AppMsgID:window.parseInt(window.mid,10)||0,
ItemIndex:window.parseInt(window.idx,10)||0,
Itemshowtype:0,
SessionId:window.sessionid+"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:1*window.source,
Subscene:1*window.subscene,
ActionType:e,
toBizuin:i(n),
isBizBan:1*t
});
}
function t(){
if(w&&w.length&&g.length===w.length)return void p.off(window,"scroll",t);
for(var e=0;e<w.length;e++){
var i=w[e],o=i.querySelector(".js_wx_profile_card");
if(o&&o.getBoundingClientRect().top>0&&o.getBoundingClientRect().top+o.getBoundingClientRect().height/2<=m.getInnerHeight()){
var r=o.getAttribute("data-id"),s=o.getAttribute("data-index");
if(-1===g.indexOf(s)){
g.push(s);
var a=o.getAttribute("data-isban");
n(0,r,a);
}
}
}
}
function o(e,i,t,o){
var r="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+t+"&scene=124#wechat_redirect";
e.addEventListener("click",function(){
if(n(1,t,o),o){
var e=function(){
var e=document.getElementById("js_profile_ban");
return"none"===e.style.display&&(e.style.display="block",setTimeout(function(){
e.style.display="none";
},2e3)),{
v:void 0
};
}();
if("object"===("undefined"==typeof e?"undefined":_typeof(e)))return e.v;
}
!_.isWechat||_.is_wxwork?window.weui.alert("请在微信内打开"):f.os.pc?d.invoke("openUrlWithExtraWebview",{
url:r
}):d.invoke("profile",{
username:i,
scene:"200"
});
});
var s=e.querySelector(".js_wx_profile_card");
u.addAppmsgCardTouchEvent(s);
}
function r(){
var e=document.getElementById("js_content");
if(e){
w=document.getElementsByTagName("mpprofile")||[];
for(var i=window.mp_profile,n=0;n<w.length;n++){
var r=w[n],d=r.getAttribute("data-id"),p=i[n],m=document.querySelector('[data-preloadingid="'+d+'"]');
m&&r.parentNode.removeChild(m),p?(r.innerHTML=s.tmpl(a,{
index:n,
id:p.fakeid,
round_head_img:p.round_head_img,
nickname:p.nickname.htmlDecode(),
alias:p.alias.htmlDecode(),
signature:p.signature.htmlDecode(),
original_num:p.original_num,
isban:p.is_biz_ban
}),o(r,p.username,p.fakeid,p.is_biz_ban)):r.innerHTML="";
}
t();
var l=document.createElement("div");
l.innerHTML=s.tmpl(c,{}),document.body.appendChild(l);
}
}
var s=e("biz_common/tmpl.js"),a=e("appmsg/profile/mp_profile_tpl.html.js"),d=e("biz_wap/jsapi/core.js"),p=e("biz_common/dom/event.js"),m=e("common/utils.js"),l=e("common/comm_report.js"),c=e("appmsg/profile/ban_alert_tpl.html.js"),u=e("appmsg/appmsg_card.js"),_=e("biz_wap/utils/mmversion.js"),f=e("biz_wap/utils/device.js"),w=[],g=[];
p.on(window,"scroll",t),r();
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);
}
return e;
};
define("appmsg/channel/channels.js",["biz_common/tmpl.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","appmsg/appmsg_card.js","appmsg/channel/video_snap_tpl.html.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","pages/utils.js","common/utils.js","common/comm_report.js","appmsg/channel/time_format.js","appmsg/channel/report_live.js","biz_common/dom/class.js"],function(e,t,n,i){
"use strict";
function a(){
return!F.isWechat||q.os.pc||F.is_wxwork?!1:F.isIOS&&F.ltVersion("7.0.15",!1)?!1:F.isAndroid&&window.clientversion<="27001337"?!1:F.isAndroid&&window.clientversion>"2700135F"&&window.clientversion<"27001400"?!1:!0;
}
function o(){
return!F.isWechat||q.os.pc||F.is_wxwork?!1:F.isAndroid&&window.clientversion<"2700143c"?!1:F.isIOS&&window.clientversion<"17001228"?!1:!0;
}
function r(e,t,n){
W.report(21146,{
BizUin:K,
AppMsgID:window.parseInt(window.mid,10)||0,
ItemIndex:window.parseInt(window.idx,10)||0,
ExportId:t||"",
Action:e,
Username:n||"",
Scene:window.parseInt(window.scene,10)||0,
Subscene:window.parseInt(window.subscene,10)||0,
EnterId:window.parseInt(window.enterid,10)||0
});
}
function s(e){
return"live"===e?void((F.isAndroid&&window.clientversion<"2700143c"||F.isIOS&&window.clientversion<"17001228")&&window.weui.alert("请升级微信客户端版本后查看")):F.isAndroid&&window.clientversion>"2700135F"&&window.clientversion<"27001400"?void window.weui.alert("当前版本暂不支持查看"):(F.isWechat&&q.os.pc?window.weui.alert("当前版本暂不支持查看，请在手机上查看"):(!F.isWechat||F.is_wxwork)&&i("请在微信内打开"),
void(!F.isWechat||q.os.pc||F.is_wxwork||U.jumpUrl("https://support.weixin.qq.com/update/",!0)));
}
function d(e){
if(o()){
var t={
action:"openFinderProfile",
finderUserName:e,
commentScene:5,
reportExtraInfo:JSON.stringify({
scenenote:{
bizUin:K,
msgid:window.parseInt(window.mid,10)||0,
idx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.scene,10)||0,
enterid:window.parseInt(window.enterid,10)||0,
action:5,
status:G,
actionTS:Math.ceil(Date.now()/1e3)
}
})
};
E.invoke("openFinderView",{
extInfo:t
},function(e){
console.log("openFinderView",e);
});
}else s("live");
}
function c(e){
o()?E.invoke("openFinderView",{
extInfo:{
action:"autoOpenFinderLive",
finderUserName:e,
commentScene:5,
reportExtraInfo:JSON.stringify({
scenenote:{
bizUin:K,
msgid:window.parseInt(window.mid,10)||0,
idx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.scene,10)||0,
enterid:window.parseInt(window.enterid,10)||0,
action:4,
status:G,
actionTS:Math.ceil(Date.now()/1e3)
}
})
}
},function(e){
console.log("openFinderLive",e);
}):s("live");
}
function u(e,t,n,i){
if(r(2,e,n),a()){
var o={
action:"openFinderFeed",
feedID:e,
nonceID:t,
notGetReleatedList:9===i?"1":0,
shareScene:11,
requestScene:16,
reportExtraInfo:JSON.stringify({
mp:{
scene:1
}
})
};
E.invoke("openFinderView",{
extInfo:o
},function(e){
console.log("openFinderDetailView",e);
});
}else r(3,e,n),s(i);
}
function l(e){
return P.filter(function(t){
return t.export_id===e;
});
}
function p(e){
return R.filter(function(t){
return t.notice_id===e;
});
}
function w(e){
var t=e.parentNode;
if(t){
var n=t.getAttribute("data-id"),i=l(n),a=void 0;
i&&i.length>0&&(a=i[0]);
var o=a&&a.nonce_id?a.nonce_id:t.getAttribute("data-nonceid"),r=a&&a.flag||0,s=a&&a.username?a.username:t.getAttribute("data-username"),d=a&&a.media_type?a.media_type:t.getAttribute("data-mediatype");
0===r&&u(n,o,s,d);
}
}
function m(){
for(var e=document.getElementsByClassName("js_wechannel_img_card"),t=function(t){
var n=e[t];
z.on(n,"tap",function(){
w(n);
}),T.addAppmsgCardTouchEvent(n);
},n=0;n<e.length;n++)t(n);
}
function _(){
for(var e=document.getElementsByClassName("js_wechannel_video_card"),t=function(t){
var n=e[t];
z.on(n,"tap",function(){
w(n);
}),T.addAppmsgCardTouchEvent(n);
},n=0;n<e.length;n++)t(n);
}
function g(e){
var t=p(e);
t&&t.length>0&&(t=t[0]);
var n=t.status,i=t.reservation;
return 0===n?0===i?1:2:1===n?5:2===n?3:3===n?4:1;
}
function v(){
for(var e=document.getElementsByClassName("js_wechannel_live_card"),t=function(e){
var t=e.currentTarget,n=t.getAttribute("data-username"),i=t.getAttribute("data-noticeid");
M.report(5,i,n,g(i)),G=g(i),d(n);
},n=0;n<e.length;n++){
var i=e[n];
z.on(i,"tap",t),T.addAppmsgCardTouchEvent(i,".js_channel_btn_operation");
}
}
function f(e,t,n){
return F.is_wxwork||!F.isWechat?void window.weui.alert("请在微信内操作"):F.isInMiniProgram&&q.os.pc?void window.weui.alert("请在手机微信内操作"):void N({
url:"/mp/appmsg_video_snap?action=reserve_live",
type:"POST",
dataType:"json",
async:!0,
data:{
username:e,
notice_id:t,
reserve_status:n
},
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret){
for(var i=document.querySelectorAll('.js_channel_btn_operation[data-noticeid="'+t+'"]'),a=0;a<i.length;a++){
var o=i[a];
o.setAttribute("data-reservation",1===n?1:0),o.querySelector(".js_channel_btn_operation_wording").innerHTML=1===n?"已预约":"预约",
1===n?L.addClass(o,"weui-btn_disabled"):L.removeClass(o,"weui-btn_disabled");
}
var r=p(t);
r&&r.length>0&&r.forEach(function(e){
e.reservation=1===n?1:0;
});
}else window.weui.alert("系统繁忙，请稍后再试");
},
error:function(){
window.weui.alert("操作失败");
}
});
}
function b(){
for(var e=document.getElementsByClassName("js_channel_btn_operation"),t=function(e){
var t=e.currentTarget,n=t.getAttribute("data-noticeid"),i=t.getAttribute("data-username");
return M.report(4,n,i,g(n)),G=g(n),c(i),!1;
},n=function(n){
var i=e[n],a=parseInt(i.getAttribute("data-status"),10);
2===a?z.on(i,"tap",t):0===a&&z.on(i,"tap",function(){
if(window.is_temp_url)return window.weui.alert("预览状态下无法操作"),!1;
var e=i.getAttribute("data-noticeid"),t=i.getAttribute("data-reservation"),n=i.getAttribute("data-username");
return"0"===t?M.report(2,e,n,g(e)):M.report(3,e,n,g(e)),f(n,e,"0"===t?1:2,i),!1;
});
},i=0;i<e.length;i++)n(i);
}
function h(){
if(V&&V.length&&H.length===V.length)return void z.off(window,"scroll",h);
for(var e=0;e<V.length;e++){
var t=V[e],n=t.firstChild;
if(n&&n.getBoundingClientRect().top>0&&n.getBoundingClientRect().top+n.getBoundingClientRect().height/2<=B.getInnerHeight()){
var i=t.getAttribute("data-id")||t.getAttribute("data-noticeid"),a=t.getAttribute("data-username"),o=t.getAttribute("data-type");
-1===H.indexOf(i)&&(H.push(i),"live"===o?M.report(1,i,a,g(i)):r(1,i,a));
}
}
}
function j(e,t,n,i){
for(var a=document.querySelectorAll('.js_wechannel_live_card[data-noticeid="'+e+'"]'),o=0;o<a.length;o++){
var r=a[o],s=r.querySelector('.js_channel_btn_operation[data-noticeid="'+e+'"]'),d=D.getStatusWording(t,n),c=D.getStatusDesc(i,t);
s&&(s.querySelector(".js_channel_btn_operation_wording").innerHTML=d,s.setAttribute("data-reservation",n),
s.setAttribute("data-status",t),r.querySelector(".js_wechannel_live_desc").innerHTML=c,
0!==t&&2!==t||0!==n?L.addClass(s,"weui-btn_disabled"):L.removeClass(s,"weui-btn_disabled"),
s.querySelector(".js_wechannnel_live").style.display=2===t?"block":"none");
}
}
function y(){
for(var e={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.uin||"",
key:window.key||"",
pass_ticket:window.pass_ticket||"",
video_snap_num:R.length
},t=0;t<R.length;t++){
var n=R[t].notice_id,i=R[t].username;
e["notice_id_"+t]=n,e["username_"+t]=i;
}
var a="/mp/appmsg_video_snap?action=batch_get_flag_info";
for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a+="&"+o+"="+encodeURIComponent(e[o]));
N({
url:a,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
if(e&&e.base_resp&&0===e.base_resp.ret&&e.live_info&&e.live_info.length>0)for(var t=0;t<e.live_info.length;t++){
var n=e.live_info[t],i=p(n.notice_id);
if(i&&i.length>0){
var a=i[0];
(n.status!==a.status||n.reservation!==a.reservation)&&(a.reservation=n.reservation,
a.status=n.status,j(n.notice_id,n.status,n.reservation,a.start_time));
}
}
},
error:function(){}
});
}
function A(){
z.bindVisibilityChangeEvt(function(e){
e&&y();
});
}
function I(){
m(),_(),b(),v(),A(),z.on(window,"scroll",h);
}
function x(){
var e=document.getElementById("js_content");
if(e){
V=e.getElementsByTagName("mpvideosnap")||[];
for(var t=0;t<V.length;t++){
var n=V[t],i=n.getAttribute("data-id")||n.getAttribute("data-noticeid")||"",a=n.getAttribute("data-type")||"video",o=void 0;
if("live"===a){
var r=n.getAttribute("data-noticeid")||"",s=p(r),d=s.length>0?s[0]:{};
o={
snapType:"live",
headImgUrl:d.head_url||n.getAttribute("data-headimgurl")||"",
nickname:d.nickname||n.getAttribute("data-nickname")||"",
desc:D.getStatusDesc(d.start_time,d.status)||n.getAttribute("data-desc")||"",
reservation:d.reservation||0,
status:d.status||0,
username:d.username||n.getAttribute("data-username")||"",
noticeid:d.notice_id||n.getAttribute("data-noticeid")||"",
liveWording:D.getStatusWording(d.status||0,d.reservation||0),
flag:1===d.spam_flag||2===d.spam_flag?1:0
},J.push({
noticeid:d.notice_id||n.getAttribute("data-noticeid")||"",
status:d.status||0
});
}else{
var s=l(i),c=s.length>0?s[0]:{},u=4===c.media_type||9===c.media_type?"video":"image";
o={
snapType:c&&c.media_type?u:n.getAttribute("data-type"),
url:c.feed_cover_url||c.feed_thumb_url||n.getAttribute("data-url")||"",
headImgUrl:c.head_url||n.getAttribute("data-headimgurl")||"",
nickname:c.nickname||n.getAttribute("data-nickname")||"",
desc:c.feed_desc||n.getAttribute("data-desc")||"",
flag:c.flag||0
},"image"===o.snapType&&(o=_extends(o,{
imgCount:parseInt(c.media_num||"0",10)||parseInt(n.getAttribute("data-imgcount")||"0",10)||0
}));
}
var w=document.createElement("div");
w.innerHTML=C.tmpl(O,o),w.firstElementChild&&n.appendChild(w.firstElementChild);
var m=document.querySelector('[data-preloadingid="'+i+'"]');
m&&n.parentNode.removeChild(m);
}
h(),I();
}
}
function S(){
var e=[];
try{
e=JSON.parse(window.video_snap_json).list;
}catch(t){
console.log(t);
}
for(var n={},i={
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.uin||"",
key:window.key||"",
pass_ticket:window.pass_ticket||""
},a=0;a<e.length;a++){
var o=e[a].export_id||e[a].notice_id,r=e[a].username;
n[o]?n[o].push(a):(n[o]=[a],e[a].export_id?i["exportid_"+a]=o:e[a].notice_id&&(i["notice_id_"+a]=o),
i["username_"+a]=r);
}
i.video_snap_num=Object.keys(n).length;
var s="/mp/appmsg_video_snap?action=batch_get_video_snap";
for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(s+="&"+d+"="+encodeURIComponent(i[d]));
N({
url:s,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
e&&e.base_resp&&0===e.base_resp.ret&&(P=e.video_snap_info||[],R=e.live_info||[]),
x();
},
error:function(){
x();
}
});
}
function k(){
S();
}
var C=e("biz_common/tmpl.js"),z=e("biz_common/dom/event.js"),E=e("biz_wap/jsapi/core.js"),T=e("appmsg/appmsg_card.js"),O=e("appmsg/channel/video_snap_tpl.html.js"),N=e("biz_wap/utils/ajax.js"),F=e("biz_wap/utils/mmversion.js"),q=e("biz_wap/utils/device.js"),U=e("pages/utils.js"),B=e("common/utils.js"),W=e("common/comm_report.js"),D=e("appmsg/channel/time_format.js"),M=e("appmsg/channel/report_live.js"),L=e("biz_common/dom/class.js"),V=[],P=[],R=[],H=[],J=[],G=1,K=0;
try{
K=1*window.atob(window.biz);
}catch(Q){}
k();
});