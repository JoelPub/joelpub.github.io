define("biz_common/tmpl.js",[],function(){
"use strict";
function e(e,n){
("undefined"==typeof n||null===n)&&(n=!0);
var t="";
return t=e.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
t=n?t.replace(/\t==(.*?)#>/g,"',typeof $1 !== 'undefined' ? $1 : '','").replace(/\t=(.*?)#>/g,"', String(typeof $1 !== 'undefined' ? $1 : '').replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):t.replace(/\t=(.*?)#>/g,"',typeof $1 !== 'undefined' ? $1 : '','"),
t=t.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
}
var n=function(n,t,p){
var r=e(n,p),i=function(){};
try{
i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+r+"');}return p.join('');");
}catch(u){
n=n.replace(/\'/g,"&#39;").replace(/'/g,"&#39;"),r=e(n,p),i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+r+"');}return p.join('');");
}
return i(t);
},t=function(e,t,p){
var r=document.getElementById(e);
return r?n(r.innerHTML,t,p):"";
};
return{
render:t,
tmpl:n
};
});define("new_video/ctl.js",["common/comm_report.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
var i,n=e("common/comm_report.js");
if(parent==window)i=window;else try{
{
parent.window.location.href;
}
i=parent.window;
}catch(r){
i=window;
}
var t=i.user_uin,a=Math.floor(i.user_uin/100)%20;
t||(a=-1);
var o=function(){
return a>=0;
};
i.__webviewid||(i.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var e=i.mid,n=i.idx,r="";
r=e&&n?e+"_"+n:"";
var a=i.__webviewid,o=[t,r,a].join("_");
return o;
},s=function(i){
if(20>a)try{
var n=i.vid||"",r={};
r.__biz=parent.window.biz||"",r.vid=n,r.clienttime=+new Date;
var t=parent.window.mid,s=parent.window.idx,p="";
p=t&&s?t+"_"+s:n,r.type="undefined"!=typeof i.type?i.type:t&&s?1:2,r.id=p,r.hit_bizuin=i.hit_bizuin||"",
r.hit_vid=i.hit_vid||"",r.webviewid=d(),r.step=i.step||0,r.orderid=i.orderid||0,
r.ad_source=i.ad_source||0,r.traceid=i.traceid||0,r.ext1=i.ext1||"",r.ext2=i.ext2||"",
r.r=Math.random(),r.devicetype=parent.window.devicetype,r.version=parent.window.clientversion,
r.is_gray=o()?1:0,r.mid=t||"",r.idx=s||"",r.url=parent.window.location.href,r.screen_num=i.screen_num||0,
r.screen_height=i.screen_height||0,r.ori_status=i.ori_status||3,r.fromid=i.fromid||0,
r.sessionid=window.sessionid||"",r.appmsg_scene=window.source||(window.cgiData?window.cgiData.scene:0)||0,
!r.appmsg_scene&&r.fromid?r.appmsg_scene=r.fromid:!r.fromid&&r.appmsg_scene&&(r.fromid=r.appmsg_scene),
r.total_range=i.total_range||0,r.current_range=i.current_range||0,r.duration=i.duration||0;
var c=e("biz_wap/utils/ajax.js");
c({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:r
});
}catch(w){}
},p=function(e){
try{
var i=e.vid||"",r={};
r.BizUin=parent.window.biz||"",r.Vid=i,r.ClientTime=+new Date;
var t=parent.window.mid,a=parent.window.idx,s="";
s=t&&a?t+"_"+a:i,r.Type="undefined"!=typeof e.type?e.type:t&&a?1:2,r.Id=s,r.HitBizUin=parseInt(e.hit_bizuin)||0,
r.HitVid=e.hit_vid||"",r.WebViewId=d(),r.Step=parseInt(e.step,10)||0,r.OrderId=(e.orderid||"").toString(),
r.AdSource=parseInt(e.ad_source,10)||0,r.TraceId=(e.traceid||"").toString(),r.Ext1=(e.ext1||"").toString(),
r.Ext2=(e.ext2||"").toString(),r.r=Math.random(),r.DeviceType=parent.window.devicetype,
r.ClientVersion=parseInt(parent.window.clientversion),r.IsGray=o()?1:0,r.msgid=parseInt(t,10)||0,
r.itemidx=parseInt(a,10)||0,r.Url=parent.window.location.href,r.ScreenNum=parseInt(e.screen_num,10)||0,
r.ScreenHeight=parseInt(e.screen_height,10)||0,r.OrStatus=parseInt(e.ori_status,10)||3,
r.Fromid=parseInt(e.fromid,10)||0,r.SessionId=(window.sessionid||"").toString(),
r.AppmsgScene=parseInt(window.source||(window.cgiData?window.cgiData.scene:0),10)||0,
!r.AppmsgScene&&r.Fromid?r.AppmsgScene=r.Fromid:!r.Fromid&&r.AppmsgScene&&(r.Fromid=r.AppmsgScene),
r.AppmsgScene=parseInt(r.AppmsgScene,10)||0,r.Fromid=parseInt(r.Fromid,10)||0,r.TotalRange=parseInt(e.total_range,10)||0,
r.CurrentRange=parseInt(e.current_range,10)||0,r.Duration=parseInt(e.duration,10)||0,
r.RemindTrafficSize=parseInt(e.remind_traffic_size,10)||0,r.TrafficReminderType=parseInt(e.traffic_reminder_type,10)||0,
n.report(12710,r);
}catch(p){}
};
return{
report:s,
getWebviewid:d,
showAd:o,
commReport:p
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("new_video/player.js",["page/pages/video_new.css","biz_common/utils/string/html.js","biz_wap/zepto/zepto.js","biz_wap/zepto/event.js","biz_wap/zepto/touch.js","biz_wap/jsapi/log.js","biz_common/dom/event.js","new_video/player.html.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","new_video/ctl.js","biz_common/tmpl.js","pages/iframe_communicate.js","a/a_utils.js","biz_common/utils/url/parse.js","pages/version4video.js","biz_wap/utils/wapsdk.js","biz_common/base64.js","biz_wap/jsapi/core.js","new_video/plugin/util.js","biz_wap/utils/jsmonitor_report.js","common/utils.js","biz_wap/utils/ajax.js","appmsg/set_font_size.js"],function(e){
"use strict";
function t(){
o(),i();
}
function i(){
S.on("onNetWorkChange",function(e){
if(console.log("networkchanged",e),e.networkType||(e.networkType=e.netType),e.networkType&&e.simType)try{
if(!parent.window.lastNetworkType&&window.networkType&&window.simType)parent.window.lastNetworkType={
networkType:window.networkType,
simType:window.simType
};else if(T.isObjectValueEqual(parent.window.lastNetworkType,e))return;
if(window.simType=e.simType,window.networkType=e.networkType,T.isMobileNetwork(e.networkType)&&1!==e.simType&&parent.window.lastNetworkType&&("wifi"===parent.window.lastNetworkType.networkType||T.isNoneNetwork(parent.window.lastNetworkType.networkType)))for(var t in parent.window.__MpPlayers){
var i=parent.window.__MpPlayers[t];
i._g.isUserPause=!1,i._g.pauseNetType=null,!i.isPlay()&&!i.isEnd()&&i.isPause()&&i.hasBeginPlay()?(i._g.isUserPause=!0,
i._g.pauseNetType=parent.window.lastNetworkType.networkType):i.isPlay()&&("wifi"===parent.window.lastNetworkType.networkType&&T.isVideoNeedFlowNotice(i.opt.flow,2)||T.isNoneNetwork(parent.window.lastNetworkType.networkType)&&T.isVideoNeedFlowNotice(i.opt.flow,4))&&i.__showFlowNotice_1();
}
parent.window.lastNetworkType=e;
}catch(o){}
});
}
function o(){
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",r,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",r,!1):document.visibilityState&&document.addEventListener("visibilitychange",r,!1);
try{
parent.window.__MpBindExitFullPage||(parent.window.__MpBindExitFullPage=!0,P.listenMpPageAction(function(e){
if(e&&"onExitMpVideoFullPage"===e.action)for(var t in parent.window.__MpPlayers)if(Object.prototype.hasOwnProperty.call(parent.window.__MpPlayers,t)){
var i=parent.window.__MpPlayers[t];
if(i&&i.__isInFullScreen){
var o=i.opt&&i.opt.extinfo&&i.opt.extinfo.vid?i.opt.extinfo.vid:"";
if(o&&o===e.videoVid){
if(i.__isInFullScreen=!1,!u.os.android){
var n=1*e.videoCurrTime;
n=-1===n?0/0:n;
var a=i.__getDuration();
parseInt(a,10)===parseInt(n,10)||n>a?i.videoEnd():i.play4outer(n,{
triggerEvent:!1
}),i.onFullScreenChange({
state:!1,
type:"jsapi"
});
}
break;
}
}
}
}));
}catch(e){
l.info("videoplayer jsapi ExitFullPage error:"+e);
}
}
function n(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function a(){
var e=n();
return e?document[e]:!1;
}
function s(e,t){
t?(e.setAttribute("muted",!0),e.muted=!0):(e.removeAttribute("muted"),e.muted=!1);
}
function r(){
if(a())try{
for(var e in parent.window.__MpPlayers){
var t=parent.window.__MpPlayers[e];
if(t.hasBeginPlay()&&t.isPlay()){
t._useWcSlPlayer()||(t.pause4outer(),F.visibilityPausePlayer=t);
break;
}
}
}catch(i){}else{
var o=F.visibilityPausePlayer;
o&&!o._useWcSlPlayer()&&o.hasBeginPlay()&&!o.isEnd()&&(o.play4outer(),F.visibilityPausePlayer=null);
}
}
e("page/pages/video_new.css"),e("biz_common/utils/string/html.js"),e("biz_wap/zepto/zepto.js"),
e("biz_wap/zepto/event.js"),e("biz_wap/zepto/touch.js");
var l=e("biz_wap/jsapi/log.js"),d=e("biz_common/dom/event.js"),_=e("new_video/player.html.js"),u=e("biz_wap/utils/device.js"),c=e("biz_wap/utils/mmversion.js"),h=e("new_video/ctl.js"),p=e("biz_common/tmpl.js"),g=e("pages/iframe_communicate.js"),f=e("a/a_utils.js"),v=e("biz_common/utils/url/parse.js"),m=e("pages/version4video.js"),y=e("biz_wap/utils/wapsdk.js"),w=e("biz_common/base64.js"),S=e("biz_wap/jsapi/core.js"),T=e("new_video/plugin/util.js"),b=e("biz_wap/utils/jsmonitor_report.js"),P=e("common/utils.js"),j=e("biz_wap/utils/ajax.js"),C=e("appmsg/set_font_size.js"),k=18e4,B=3e3,F={
visibilityPausePlayer:null,
wcSlPlayerSupport:!1,
wcSlPlayerAndroidSafeAreaInsets:{
top:0,
left:0,
right:0,
bottom:0
},
hasAutoFlag:!1
};
try{
F._debug=window.parent.window.location.href.indexOf("&_debug=1")>0;
}catch(I){
F._debug=!1;
}
var x=5e3;
t();
var R=c.getInner();
window.top===window&&c.isWechat&&!c.isInMiniProgram&&(u.os.iphone&&c.gtVersion("7.0.15",1)||u.os.android&&(R>"27001037"&&"27001060">R||R>="27001100"))&&(F.wcSlPlayerSupport=!0,
console.log("support wcslplayer"),u.os.iphone&&S.invoke("handleVideoAction",{
action:"insertSameLayerVideo"
},function(e){
"same layer switch is closed"===e.err_desc&&(b.setSum(221515,13,1),console.log("support wcslplayer but switch is closed"));
})),u.os.android&&S.invoke("handleDeviceInfo",{
action:"getSafeAreaInsets"
},function(e){
console.log("getSafeAreaInsets for wcslplayer",e),-1!==e.err_msg.indexOf(":ok")&&(F.wcSlPlayerAndroidSafeAreaInsets.top=e.top,
F.wcSlPlayerAndroidSafeAreaInsets.left=e.left,F.wcSlPlayerAndroidSafeAreaInsets.right=window.screen.width-e.right,
F.wcSlPlayerAndroidSafeAreaInsets.bottom=window.screen.height-e.bottom);
});
var E=function(e){
F._debug&&console.log(e);
},M=(navigator.userAgent,function(){
return!0;
}()),W=function(){
return!!u.browser.M1;
}(),D=function(e,t){
var i=document.createElement("div");
return e in i.style?(i.style[e]=t,i.style[e]===t):!1;
},N=function(e){
var t=0,i=0,o=0;
return.5>e&&(e=0),e=Math.ceil(e),t=Math.floor(e/3600),i=Math.floor((e-3600*t)/60),
o=e-3600*t-60*i,0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>i&&(i="0"+i),10>o&&(o="0"+o),
t+i+":"+o;
},L=!u.canSupportVideo,V=function(e){
var t=this,i=$(e.container);
"undefined"==typeof e.videoReportType&&(e.videoReportType=-1),e.width=e.width||300,
e.height=e.height||300,e.videoWidth=e.videoWidth||0,e.videoHeight=e.videoHeight||0,
e.duration=e.duration||0,e.formatDuration=N(e.duration),e.videoFit=!1,e.isVideoSharePage=e.isVideoSharePage||!1;
var o={
needToFit:!1,
supportObjectFit:!1,
os:u.os
};
if(e.width&&e.height&&e.videoWidth&&e.videoHeight){
var n=Math.abs(e.width/e.height-e.videoWidth/e.videoHeight);
.1>=n&&(o.needToFit=!0,D("objectFit","fill")&&(o.supportObjectFit=!0,e.videoFit=!0));
}
if(e.ratio=e.ratio||e.width/e.height,e.autoplay=!!e.autoplay||!1,e.flow=e.flow&&parseFloat(e.flow)||0,
this.opt=e,this.id=e.id=+new Date+"_"+Math.floor(Math.random()*Math.floor(+new Date)),
this.opt.jsapiFullScreen!==!0&&(this.opt.jsapiFullScreen=!1),this.opt.canShareVideo!==!0&&(this.opt.canShareVideo=!1),
this.opt.pauseShowControll!==!0&&(this.opt.pauseShowControll=!1),this.__iosPreloadPause=!1,
this.__iosPreloadPlayFlag=!1,this.__iosIsRealPreload=!1,this.__forcePause=!1,this.__hasFuncControllBar=!0,
this.__dragTimes=[],this.__play_total_time=0,this.__last_playtime=0,this.__always_hide_loading=e.always_hide_loading||!1,
this.__last_loadingtime=0,this.__loadingCountFlag=null,this.__loadingCountFlagAuto=null,
this.__userplaytime=!1,this._playingBufferingStartTime=null,this._g={
oriSrc:this.opt.src,
timeupdateCacheCount:3,
serialTimeupdateCache:[],
resetShowingLoadingTimeoutId:null,
showingLoadingTimeoutId:null,
statusDefine:{
init:1,
play:1,
pause:1,
loading:1,
end:1,
error:1
},
subStatusDefine:{
init:1,
play:1,
playing:1,
waiting:1,
stalled:1,
seeking:1,
seeked:1,
preload:1,
resolutionchange:1
},
status:"init",
subStatus:"init",
triggerTimeupdateLog:!0,
isUserPause:!1,
pauseNetType:null,
hasReportBeginPlay:!1,
coverBase64:"",
loadingCoverBase64:!1,
touchForwarding:!1,
jsapiFullScreenId:null,
jsapiFullScreenErrCnt:0,
jsapiFullScreenErrLimit:2,
iosPreloadTmpPlay:!1,
fallbackFromWcSlVideoToH5Player:!1,
playbackRateBtnInfoId:e.playbackRateBtnInfoDefaultId
},e._mustHideFullScreen=W,e.display=e.autoHide?"none":"block",e.ad_muted_btn=e.ad_muted_btn||!1,
e.videoCrossOrigin=e.jsapiFullScreen&&u.os.ios?!0:!1,P.__useWcSlPlayer=e._initUseWcSlPlayer=this._useWcSlPlayer(),
console.log("use wcslplayer",P.__useWcSlPlayer),this._useWcSlPlayer()){
if(e.resolutionInfo&&e.resolutionInfo.length){
for(var a=0;a<e.resolutionInfo.length;a++){
var s=e.resolutionInfo[a];
if(s.src===e.src){
s.initCurrent=!0,e.initResolutionName=s.name;
break;
}
}
e.initResolutionName||(e.initResolutionName="清晰度");
}
if(e.playbackRateInfo&&e.playbackRateInfo.length){
e.width>e.height&&(e.playbackRateInfo=[].concat(e.playbackRateInfo),e.playbackRateInfo.reverse());
for(var a=0;a<e.playbackRateInfo.length;a++){
var s=e.playbackRateInfo[a];
if(1===s.rate){
s.initCurrent=!0,e.initPlaybackRateName=s.name;
break;
}
}
e.initPlaybackRateName||(e.initPlaybackRateName="倍速");
}
}
e.extinfo&&e.extinfo.vid&&(e.src=e.src+"&vid="+e.extinfo.vid+"&format_id="+e.formatId);
var r=p.tmpl(_,e,!1);
i.append(r);
var l=this.container=$("#js_mpvedio_"+this.id);
this._useWcSlPlayer()?(this.$video=l.find("wx-open-video"),this.__initFullProfile(),
b.setSum(221515,1,1),b.setSum(221515,u.os.android?6:5,1)):this.$video=l.find("video");
var d=this.video=this.$video[0];
this.__initData(),this.__initVideo();
var c=e.src;
if(!c)return this.changeStatus({
status:"error",
subStatus:"5"
}),void this.__triggerOutside("error",{
errorcode:5
});
if(this._useWcSlPlayer()||d.setAttribute("origin_src",c),L)return l.find(".js_btn_play").attr("href",c).show(),
this.__loadedHandler(),void this.__bindBtnEvent();
parent.window&&!parent.window.lastNetworkType&&window.networkType&&window.simType&&(parent.window.lastNetworkType={
networkType:window.networkType,
simType:window.simType
});
var h=e.plugins||[];
this._blockPlugin={};
for(var a=0,g=h.length;g>a;++a){
var f=h[a];
f.setPlayer(this),!!f.init&&f.init();
}
this.plugins=h,this._trigger("afterCheckVideoFit",o),this._trigger("loading",e),
this.__defineEvent(),this.__bindBtnEvent(),this.__bindVideoEvent(),this.__preventFontSizeChange(),
this.__addPostmessageListener();
try{
parent.window.__MpPlayers||(parent.window.__MpPlayers={}),parent.window.__MpPlayers[this.id]=this;
}catch(v){}
this.opt.canShareVideo&&setTimeout(function(){
t.getCoverBase64({
callback:function(){}
});
},1e3);
};
return $.extend(V.prototype,{
_jsapiLog:function(e){
var t=["vid:","videosrc:"];
this.opt&&this.opt.extinfo&&this.opt.extinfo.vid&&(t[0]+=this.opt.extinfo.vid),this.$video&&this.$video[0]&&this.$video[0].src&&(t[1]+=this.$video[0].src),
l.info("videoplayer "+e+";"+t.join(";"));
},
__triggerOutside:function(){
var e=this.opt,t=arguments,i=t[0],o=this,n=this.video;
if(i){
i=i.substr(0,1).toUpperCase()+i.substr(1);
var a=e["on"+i];
"function"==typeof a&&a.apply(this,t),this._useWcSlPlayer()||"BeginPlay"!=i||null!=o.__replaySec&&0!=o.__replaySec||!u.os.ios||(n.currentTime=.1);
}
},
__errorHandler:function(){
this.video.removeAttribute("src");
},
__loadingHandler:function(e){
this.showLoading(),this._trigger("ready",e);
},
__readyHandler:function(e){
var t=this.opt.src;
m.proxyPreloadExper()&&m.proxyPreloadExper().isUsePreload&&this.setSrc(t),this._trigger("loaded",e);
},
__loadedHandler:function(e){
return(e&&e.autoplay||this.opt.autoplay||window.__auto_play__)&&m.device.inWechat?(window.__auto_play__=!1,
this.videoCtlReport({
step:15
}),this._g.hasReportBeginPlay=!0,void this._trigger("readyBeginPlay",e)):void this._setBeginPlayStatus();
},
__readyBeginPlayHandler:function(e){
m.proxyPreloadExper()&&m.proxyPreloadExper().isUsePreload||this.dontReset||this.setSrc(this.opt.src),
this.dontReset&&(this.dontReset=!1),this._trigger("beginPlay",e);
},
__beginPlayHandler:function(e){
function t(e,t){
e.__firstPlayStart=+new Date,e.__userplaytime=!0,e._useWcSlPlayer()||(t.find(".js_video_poster").show(),
e.showControllBar()),e.showCover(),t.find(".js_video_play_controll").hide(),e.__hasBeginPlay=!0,
e.showLoading("firstTime"),e.opt.flowNotice&&e.__firstLoadedFlowNoticeJudge();
}
L&&(location.href=this.opt.src);
var i=this.container,o=this,n=this.video,a=void 0;
setTimeout(function(){
try{
o.__continueSec&&(o.__replaySec=o.__continueSec,o.__continueSec=null),o._jsapiLog("set continue:"+o.__replaySec),
o._useWcSlPlayer()?(e&&e.replay?(o.__canplay=!0,n.currentTime=0,setTimeout(function(){
o.showControllBar(),o.__hideControllTimeout();
},500)):o.opt.autoplay||(o.__canplay=!0,n.play()),t(o,i)):(a=n.play(),"object"===("undefined"==typeof a?"undefined":_typeof(a))?a.then(function(){
t(o,i);
}).catch(function(e){
("AbortError"===e.name||"NotAllowedError"===e.name)&&(o._setBeginPlayStatus(),o.dontReset=!0,
b.setSum(114217,16,1));
}):t(o,i));
}catch(s){
o._jsapiLog("play error");
}
},1);
},
__replayHandler:function(){
if(this.videoCtlReport({
step:9
}),!this._useWcSlPlayer()){
var e=this.video.muted;
this.setSrc(this.src,this.video.preload,!0),this.triggerMuted(e);
}
this._afterReplay();
},
__endHandler:function(){
this.container.find(".js_btn_play_aria").data("status","3").removeClass("video_playing"),
this.container.find(".js_play_bar_wrapper").hide(),this.hideControllBar(),this.hideTouchForward(),
this._hidePlayControllBar(),this.__hasBeginPlay=!1,this.__canplay=!1,this.isInFullScreen()&&this.showWcSlFullEndExitBtn(),
this.__hideSubSettingTimeout();
},
__hideControllTimeoutCallback:function(){
return this.__onTouch?void this.__hideControllTimeout():void(this.isPlay()&&this.hideControllBar());
},
__touchVideoHandler:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(this.opt.blockTouchVideo||this.__onTouch||this.opt.pauseShowControll&&this.isPause()||this.__userplaytime)return!1;
if(!this.__canplay||this.isEnd()&&this.opt.hideControllBarAtEnd)return void this.hideControllBar();
var t=this.container.find(".js_controll");
e.isShow===!0||"none"==t.css("display")?this.showControllBar():this.hideControllBar();
var i=this.container.find(".js_video_flow");
"none"!==i.css("display")&&this._g.isUserPause===!1&&this.__hideFlowNotice(),this.__hideControllTimeout(),
this.__hideSubSettingTimeout();
},
__hideControllTimeout:function(){
var e=this;
this.__touchVideoTimeoutHandler&&clearTimeout(this.__touchVideoTimeoutHandler),this.__touchVideoTimeoutHandler=setTimeout(function(){
e.__hideControllTimeoutCallback();
},x);
},
__hideSubSettingTimeout:function(){
var e=this;
this._useWcSlPlayer()&&(this.__hideSubSettingTimeoutHandler&&clearTimeout(this.__hideSubSettingTimeoutHandler),
this.container.find(".js_sub_setting").addClass("hide"),this.__hideSubSettingTimeoutHandler=setTimeout(function(){
delete e.__hideSubSettingTimeoutHandler;
var t=e.container.find(".js_play_mode_select"),i=e.container.find(".js_playback_mode_select");
t.length&&"flex"===t.css("display")?e._trigger("resolutionChange",{
action:"hide"
}):i.length&&"flex"===i.css("display")&&e._trigger("rateChange",{
action:"hide"
}),e.container.find(".js_play_mode_select").css("display","none"),e.container.find(".js_playback_mode_select").css("display","none");
},500));
},
__initData:function(){
this.log={
hasended:0,
lastsec:0,
duration:0,
video_error:0
},this.__hasBeginPlay=!1,this.__canplay=!1,this._playingBufferingStartTime=null,
this.__userplaytime=!1,this.__hasscroll=!1,this.__replaySec=null,this.__playQueue=[];
},
__initVideo:function(){
var e=this.opt,t=this.video;
t.addEventListener("contextmenu",function(e){
e.preventDefault();
},!1),t.hasAttribute("controls")&&t.removeAttribute("controls"),this._useWcSlPlayer()||(t.setAttribute("webkit-playsinline","isiPhoneShowPlaysinline"),
t.setAttribute("playsinline","isiPhoneShowPlaysinline")),e.loop&&t.setAttribute("loop",e.loop),
e.muted&&s(t,!0),this.$video.off("loadedmetadata durationchange"),this.__hasVideoDurationchange=!1;
},
__initFullProfile:function(){
var e=this,t=this.opt,i=this.container.find(".js_video_fullscreen_profile");
d.tap(i.find(".js_video_fullscreen_profile_exit")[0],function(){
e.exitFullScreen();
}),1!==window.isprofileblock&&d.tap(i.find(".js_video_fullscreen_go_profile")[0],function(){
u.os.iphone&&e.isInFullScreen()&&e.opt.width>e.opt.height?(e.exitFullScreen(),setTimeout(function(){
S.invoke("profile",{
username:t.bizUserName,
tabType:2
},function(){
e._trigger("profileJump",{
scene:"fullscreen"
});
});
},250)):S.invoke("profile",{
username:t.bizUserName,
tabType:2
},function(){
e._trigger("profileJump",{
scene:"fullscreen"
});
});
}),t.videoTitle&&i.find(".js_video_fullscreen_title").text(t.videoTitle),t.headImgUrl&&i.find(".js_video_fullscreen_head").css("background","url("+t.headImgUrl+") no-repeat center / cover;"),
t.bizNickName&&i.find(".js_video_fullscreen_name").text(t.bizNickName);
},
__getDuration:function(){
var e=this.opt,t=this.video,i=t?t.duration:null;
return i&&1!=i?i:e.duration;
},
__videoDurationchange:function(){
var e=this;
if(!e.__hasVideoDurationchange){
var t=this.video,i=this.opt,o=this.container;
if(1/0!=t.duration&&t.duration>0&&1!=t.duration)e.duration=t.duration,e.__hasVideoDurationchange=!0;else{
if(!i.duration)return!1;
e.duration=i.duration,e.__hasVideoDurationchange=!0;
}
e.log.duration=e.duration,e.duration>>=0,o.find(".js_total_time").text(N(e.duration)),
this.__hasFuncControllBar&&o.find(".js_progress_bar").show();
var n=+new Date,a=n-e.log.loadwait_start;
e.log.loadwait=a,e._trigger("durationchange",{
loadwait:a
});
}
},
__startCountTime:function(){
var e=this,t=this.video;
t&&null===e.__last_playtime&&(e.__last_playtime=t.currentTime);
},
__endCountTime:function(){
var e=this,t=this.video;
t&&t.currentTime>e.__last_playtime&&null!==e.__last_playtime&&(e.__play_total_time+=t.currentTime-e.__last_playtime,
e.__last_playtime=null);
},
__bindVideoEvent:function(){
var e=this.$video,t=this,i=this.container,o=i.find(".js_switch"),n=this.video;
e.off("timeupdate").on("timeupdate",function(){
if(t.__forcePause===!0)return void E(t.id+":timeupdate __forcePause return");
if(t.__hasBeginPlay&&!t.__canplay)return t.showLoading(),!1;
n=t.video,null!=t.__replaySec&&(E(t.id+":timeupdate __replaySec"),n.pause(),n.currentTime=t.__replaySec,
t.__last_playtime=t.__replaySec,n.play(),t.__replaySec=null),t.__videoDurationchange();
var e=n.currentTime;
if(e>0){
t.__startCountTime(),t._addSerialTimeupdate(),"loading"===t._g.status&&"seeking"===t._g.subStatus||!t._checkPlayBySerialTimeupdate()||(t.hideLoading(),
t._g.touchForwarding||t.hideTouchForward());
var i=t.__getDuration();
t.__onTouch||(t.__setControllBar(e/i),t.__setPlayTime(e>>0)),t.hideCover(),t._trigger("timeupdate",{
currentTime:e
}),t.afterFirstLoaded();
}
}),e.off("canplay").on("canplay",function(){
null!=t.__replaySec&&(n.currentTime=1*(1*t.__replaySec).toFixed(4),t.__last_playtime=t.__replaySec,
t.__replaySec=null),t.__canplay=!0,t._trigger("canplay");
}),e.off("ended").on("ended",function(){
E("player inner isend:"+t.isEnd()),t.isEnd()&&t.videoEnd();
}),e.off("emptied").on("emptied",function(){}),t.waitingHandlerTimer=null,e.off("stalled").on("stalled",function(){
if(this.__hasBeginPlay&&!t.waitingHandlerTimer){
t.changeStatus({
status:"loading",
subStatus:"stalled"
}),t.showLoading();
var e=n.src,i=n.readyState,o=n.error;
0!=i||o&&0!=o.code||(clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null,
t.showLoading(),t.showCover(),n.pause(),n.src=e,n.load(),n.play(),E(t.id+":stalled"));
}
}),e.on("seeked",function(){
t.__onTouch||t.opt.jsapiFullScreen&&t.__isInFullScreen||(t.changeStatus({
status:"loading",
subStatus:"seeked"
}),t.__isPauseBeforeSeek?t.hideLoading():n.play(),delete t.__isPauseBeforeSeek),
E("video seeked event");
}),e.off("seeking").on("seeking",function(){
E("seeking,__hasBeginPlay:"+t.__hasBeginPlay),t.__hasBeginPlay&&(t.changeStatus({
status:"loading",
subStatus:"seeking"
}),t.showLoading());
}),e.off("waiting").on("waiting",function(){
if(E("waiting,__hasBeginPlay:"+t.__hasBeginPlay),t.__hasBeginPlay){
t.changeStatus({
status:"loading",
subStatus:"waiting"
}),t.showLoading(),t._jsapiLog("waiting counting begin"),t.loadingCountFlag||clearTimeout(t.loadingCountFlag),
t.__last_loadingtime=n.currentTime,t.loadingCountFlag=setTimeout(function(){
if(n.currentTime===t.__last_loadingtime){
if(t._useWcSlPlayer())return void b.setSum(221515,u.os.android?15:14,1);
t.changeStatus({
status:"error",
subStatus:"6"
}),t.__triggerOutside("error",{
errorcode:6
});
}
},k),clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null;
var e=0;
try{
for(var i in parent.window.__MpPlayers)if(parent.window.__MpPlayers.hasOwnProperty(i)&&e++,
e>1)break;
}catch(o){}
e>1&&t.__forcePause===!1&&(t.waitingHandlerTimer=setTimeout(function(){
if(t.__forcePause!==!0){
var e=n.error;
if(0==n.readyState&&(!e||0==e.code)){
clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null;
var i=n.src;
t.showLoading(),t.showCover(),n.pause(),n.src=i,tryReload++,n.load(),n.play(),E(t.id+":waitingHandlerTimer");
}
}
},1e4)),F.hasAutoFlag?(t.__loadingCountFlagAuto||clearTimeout(t.__loadingCountFlagAuto),
t.__loadingCountFlagAuto=setTimeout(function(){
n.currentTime===t.__last_loadingtime&&t._trigger("waiting",{
action:"changeToAuto"
});
},B),t._trigger("waiting",{
action:"normalLoading"
})):t._trigger("waiting");
}
}),e.off("play playing").on("play playing",function(e){
return t.__forcePause===!0||t._g.iosPreloadTmpPlay?void E(t.id+":play playing __forcePause return"):(t.changeStatus({
status:"play",
subStatus:e.type
}),setTimeout(function(){
t.adVideoStatus="play";
},10),E(t.id+":play playing"),o.removeClass("switch_on"),o.addClass("switch_off"),
t._hidePlayControllBar(),t.__startCountTime(),t._trigger("play"),t._useWcSlPlayer()&&t.__canplay&&(t.hideLoading(),
u.os.android&&!t.__hasFixedAndroidWebviewControllerReinitBug&&(t.__hasFixedAndroidWebviewControllerReinitBug=!0,
t.__fixAndroidWebviewControllerReinitBug())),void(o.find(".btn_opr")[0].innerHTML="暂停"));
}),e.off("pause").on("pause",function(){
t._g.iosPreloadTmpPlay||(E(t.id+":video pause event"),t.changeStatus({
status:"pause",
subStatus:""
}),setTimeout(function(){
t.adVideoStatus="pause";
},10),o.addClass("switch_on"),o.removeClass("switch_off"),!t.__canplay||t.isEnd()||t.__onTouch?t._hidePlayControllBar():(t.hideControllBar(),
t._showPlayControllBar()),t.__endCountTime(),t._trigger("pause"),o.find(".btn_opr")[0].innerHTML="播放");
}),e.off("error").on("error",function(e){
if(t._useWcSlPlayer())return t.changeStatus({
status:"error",
subStatus:"3",
errorMsg:e.detail
}),b.setSum(221515,3,1),b.setSum(221515,u.os.android?10:9,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:Error",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail)),
void t._trigger("error",{
errorcode:3,
error:e.detail
});
var i=void 0,o=void 0;
t.video.error&&(i=t.video.error.code,o=t.video.error.message),t.changeStatus({
status:"error",
subStatus:i||"",
errorMsg:o||""
});
var n="/mp/ad_video_report?action=report_video_play_error",a=encodeURIComponent(t.video.baseURI);
j({
type:"GET",
dataType:"json",
timeout:3e4,
url:n+"&errorCode="+i+"&videoUrl="+a+"&errorMsg="+o,
success:function(){},
error:function(){}
}),t._trigger("error",{
errorcode:i
});
}),e.off("webkitbeginfullscreen webkitendfullscreen webkitfullscreenchange mozfullscreenchange fullscreenchange").on("webkitbeginfullscreen webkitendfullscreen webkitfullscreenchange mozfullscreenchange fullscreenchange",function(e){
var i=void 0;
i=t._useWcSlPlayer()?e.detail.fullscreen:"webkitbeginfullscreen"==e.type?!0:"webkitendfullscreen"==e.type?!1:document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen,
t.onFullScreenChange({
state:i,
type:"h5"
});
}),this._useWcSlPlayer()&&(e.off("binderror").on("binderror",function(e){
t.__fallbackFromWcSlVideoToH5Player(),b.setSum(221515,4,1),b.setSum(221515,u.os.android?12:11,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:BindError",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail)),
t._trigger("bindError",{
error:e.detail
});
}),e.off("resolutionchange").on("resolutionchange",function(){
t.changeStatus({
status:"loading",
subStatus:"resolutionchange"
});
var e=t.opt.resolutionInfo.filter(function(e){
return e.src===t.video.resolutionSrc;
})[0];
t._trigger("resolutionChange",{
action:"changed",
infoBefore:t.__resolutionInfoBeforeChange,
infoAfter:e
});
}),e.off("ratechange").on("ratechange",function(){
t._trigger("rateChange",{
action:"changed",
rateBefore:t.__playbackRateBeforeChange,
rateAfter:t.video.playbackRate
});
}),e.off("processstatechange").on("processstatechange",function(e){
t._trigger("processStateChange",{
event:e.detail.event,
playerType:e.detail.playerType,
timeStamp:e.detail.__timestamp,
data:e.detail
});
}));
},
__preventFontSizeChange:function(){
var e=this;
u.os.iphone?this.container.css("-webkit-text-size-adjust","none"):u.os.android?C.keepNormalFontSizeForAndroid(this.container[0]):u.os.ipad&&(u.os.getNumVersion()>=13?C.onFontScaleChange(function(){
return C.setFontSize(e.container[0],1);
}):this.container.css("-webkit-text-size-adjust","none"));
},
__fixAndroidWebviewControllerReinitBug:function(){
var e=this;
u.os.android&&c.ltVersion("7.0.19")&&this._useWcSlPlayer()&&!function(){
var t=function(){
S.invoke("handleMPPageAction",{
action:"hasActivity"
},function(e){
e&&e.err_msg&&-1!==e.err_msg.indexOf(":ok")?++i>=10&&clearInterval(n):o.video&&(console.warn("handleMPPageAction:hasActivity check failed, pause video"),
l.info("handleMPPageAction:hasActivity check failed, pause video"),clearInterval(n),
o.video.pause(),b.setSum(221515,2,1));
});
},i=0,o=e,n=setInterval(t,1e3);
}();
},
__defineEvent:function(){
var e=this;
this._event={
progressBarMousemove:function(t){
e.__hasFuncControllBar&&e.__onTouch&&e._pointerMoveHandler({
x:t.pageX||t.clientX,
y:t.pageY||t.clientY,
e:t
});
},
progressBarMouseup:function(t){
return e.__hasFuncControllBar&&e.__onTouch?(e._pointerUpHandler({
x:t.pageX||t.clientX,
y:t.pageY||t.clientY,
e:t
}),!1):void 0;
},
progressBarTouchmove:function(t){
if(e.__hasFuncControllBar&&e.__onTouch){
var i=t.changedTouches[0];
e._pointerMoveHandler({
x:i.pageX,
y:i.pageY,
e:t
});
}
},
progressBarTouchend:function(t){
if(e.__hasFuncControllBar&&e.__onTouch){
var i=t.changedTouches[0];
return e._pointerUpHandler({
x:i.pageX,
y:i.pageY,
e:t
}),!1;
}
},
broadcastPlay:function(t){
t.id!==e.id&&e.__hasBeginPlay&&!e.isEnd()&&e.pause4outer();
}
};
},
__addPostmessageListener:function(){
g.addListener({
type:"broadcastPlay",
func:this._event.broadcastPlay
});
},
__bindBtnEvent:function(){
var e=this,t=this,i=this.opt,o=this.container,n=o.find(".js_btn_play"),a=o.find(".js_btn_play_aria"),s=o.find(".js_video_poster"),r=o.find(".js_switch"),l=o.find(".js_progress_bar"),_=o.find(".js_controll"),h=o.find(".js_page_video"),p=o.find(".js_full_mask"),g=o.find(".js_video_pause_controll"),f=o.find(".js_full_screen_control"),v=o.find(".js_share_btn"),m=o.find(".js_sub_setting");
if(this.opt.canShareVideo&&(v[0]&&d.on(v[0],"click",function(){
t.callJsapiShareVideo({
action:"shareEmbedMpVideo"
});
}),d.longtap(this.container[0],function(e){
_[0].contains(e.target)||e.target===_[0]||l[0].contains(e.target)||e.target===l[0]||t.callJsapiShareVideo({
action:"longPressEmbedMpVideo"
});
})),d.on(g[0],"tap",".js_btn_pause",function(){
t.play4outer();
}),t._useWcSlPlayer()){
var y=o.find(".js_video_fullscreen_menu_more");
((u.os.iphone||u.os.ipad)&&c.isWechat&&c.gtVersion("7.0.16",1)||u.os.android&&c.isWechat&&c.gtVersion("7.0.18",1))&&(y.css("display",""),
d.tap(y[0],function(){
t.isInFullScreen()&&(S.invoke("handleMPPageAction",{
action:"showMenu",
forbidFlag:3
},function(){}),console.log("======== _trigger showMenu"),t._trigger("showMenu",{
fullScreen:1
}));
}));
}
var w=void 0,T=void 0,P=0,j=0,C=0,k=t.__getDuration(),B=0,I=0,x=1,R=window.user_uin||0,E=0!==R&&Math.floor(R/100)%1e3<x,W=!1,D=void 0,N=void 0,L=0,V=!0,H=!1,A=!1,z=null,U=this.opt.width/this.opt.height,O=function(e,i){
return c.isIOS&&(!t.isInFullScreen()&&(30>e||e>window.innerWidth-30)||t.isInFullScreen()&&(50>i||i>window.innerHeight-50))?!0:!1;
};
h.on("touchstart",function(e){
1==e.targetTouches.length&&(t.isEnd()||$(e.changedTouches[0].target).parents("div.js_progress_bar,div.js_controll,div.js_video_fullscreen_profile").length||i.blockTouchVideo||(z&&(clearTimeout(z),
z=null),D=w=new Date,N=T={
x:e.targetTouches[0].clientX,
y:e.targetTouches[0].clientY
},t._g.touchForwarding=!1,A=!0,V=!0,I=B=t.getCurTime()));
}),h.on("touchmove",function(e){
if(!t.opt.isTLpage&&V&&1==e.targetTouches.length&&!(t.isEnd()||$(e.changedTouches[0].target).parents("div.js_progress_bar,div.js_controll,div.js_video_fullscreen_profile").length||O(e.targetTouches[0].clientX,e.targetTouches[0].clientY)||i.blockTouchVideo)){
var o=new Date,n=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,s=Math.abs(n-N.x),r=Math.abs(a-N.y);
if(H||A&&(r>=20||r>s))return t._useWcSlPlayer()&&t.isInFullScreen()?!function(){
H=!0,t._g.touchForwarding=!0;
var i=(U>1?Math.max:Math.min)(window.screen.height,window.screen.width),o=parseInt(2*(T.y-a)/i*100);
o&&(o/=100,N.x<i/2?(o=t.video.brightness+o,t.video.brightness=o,t.__setUpperBar("亮度",o),
t.__setBrightnessChangeEventEmitTimer&&clearTimeout(t.__setBrightnessChangeEventEmitTimer),
t.__setBrightnessChangeEventEmitTimer=setTimeout(function(){
t.__setBrightnessChangeEventEmitTimer=null,t._trigger("brightnessChange",{
value:o,
touch:!0
});
},1e3)):(o=t.video.volume+o,t.video.volume=o,t.__setUpperBar("音量",o),t.__setVolumeChangeEventEmitTimer&&clearTimeout(t.__setVolumeChangeEventEmitTimer),
t.__setVolumeChangeEventEmitTimer=setTimeout(function(){
t.__setVolumeChangeEventEmitTimer=null,t._trigger("volumeChange",{
value:o,
touch:!0
});
},1e3)),T={
x:n,
y:a
},e.preventDefault());
}():V=!1,void(A=!1);
if(e.preventDefault(),!(20>s)){
z&&(clearTimeout(z),z=null),A=!1,t._g.touchForwarding=!0;
var l=o-w,d=n-T.x,_=a-T.y,u=Math.sqrt(Math.pow(d,2)+Math.pow(_,2))+C,c=Math.min(Math.ceil(u/l),6);
j=Math.floor(.1*u+.2*c*c*c)*Math.ceil(k/500),C=0==j?u:0,0>d&&(j=-j);
var h=180*Math.atan2(_,d)/Math.PI;
t._g.touchForwarding||(h>=-30&&30>=h&&++P,(h>=150&&180>=h||h>=-180&&-150>=h)&&--P,
(P>=4||-4>=P)&&(5>=u?P=0:(L=Math.max(L,c),t._g.touchForwarding=!0))),t._g.touchForwarding&&(B+=j,
0>B&&(B=0),B>k&&(B=1*k),t.__setForwardBar(B)),T={
x:n,
y:a
},w=o;
}
}
}),h.on("touchend",function(e){
if(t._g.touchForwarding&&!H){
if(z=setTimeout(function(){
t.play(B);
},0),E&&(b.setSum(28307,29,1),!W)){
var i=(new Date,{
x:e.changedTouches[0].clientX,
y:e.changedTouches[0].clientY
}),o=i.x-N.x,n=i.y-N.y,a=parseInt(Math.sqrt(Math.pow(o,2)+Math.pow(n,2))),s=parseInt(180*Math.atan2(n,o)/Math.PI);
s>=-30&&30>=s||s>=150&&180>=s||s>=-180&&-150>=s||b.setSum(28307,35,1),b.setSum(28307,31,1),
b.setSum(28307,33,a),b.setSum(28307,34,L),W=!0;
}
t._seekReport(),t._trigger("handDragComplete",{
playTime:B,
startDragVideoTime:I
}),e.preventDefault();
}
t.hideTouchForward(),j=0,A=!1,t._g.touchForwarding=!1,V=!0,H=!1,P=0;
}),h.on("touchmove MSPointerMove pointermove mousemove",function(e){
t.isInFullScreen()&&!M&&e.preventDefault();
}),d.tap(h[0],function(e){
if(e.target!==_[0]&&!_[0].contains(e.target)&&e.target!==v[0]&&!(t._useWcSlPlayer()&&(e.target===m[0]||m[0].contains(e.target))||t.isEnd()||t._g.touchForwarding)){
if(t.__last_touchvideo&&Date.now()-t.__last_touchvideo<300)return t.playSwitch(!0),
void delete t.__last_touchvideo;
t.__last_touchvideo=Date.now(),e.preventDefault(),t.isPause()?t._useWcSlPlayer()&&(t.showControllBar(),
t.__hideSubSettingTimeout()):t._trigger("touchVideo");
}
}),d.tap(p[0],function(){
t.isEnd()||t._trigger("touchVideo");
}),p.on("touchmove MSPointerMove pointermove mousemove",function(e){
t.isInFullScreen()&&!M&&e.preventDefault();
}),d.on(a[0],"click",function(){
var e=$(a[0]),i=1*e.data("status");
0==i?(e.addClass("video_playing").data("status","1"),t.firstPlay()):1==i?(e.removeClass("video_playing").data("status","2"),
t.playSwitch(void 0,!1)):2==i?(e.addClass("video_playing").data("status","1"),t.playSwitch()):3==i&&(e.addClass("video_playing").data("status","1"),
t._trigger("ariaReplay"));
}),d.on(n[0],"click",function(){
t.firstPlay();
}),d.tap(n[0],function(){
t.firstPlay();
}),d.tap(r[0],function(){
t.playSwitch();
}),t.__onTouch=!1,l.on("mousedown",function(e){
t.__hasFuncControllBar&&(_.off("mousemove",t._event.progressBarMousemove).on("mousemove",t._event.progressBarMousemove),
s.off("mousemove",t._event.progressBarMousemove).on("mousemove",t._event.progressBarMousemove),
$(document.body).off("mouseup").on("mouseup",t._event.progressBarMouseup),t._pointerDownHandler({
x:e.pageX||e.clientX,
y:e.pageY||e.clientY,
e:e
}));
}),l.on("touchstart",function(e){
if(t.__hasFuncControllBar){
l.off("touchmove",t._event.progressBarTouchmove).on("touchmove",t._event.progressBarTouchmove),
l.off("touchend",t._event.progressBarTouchend).on("touchend",t._event.progressBarTouchend);
var i=e.changedTouches[0];
t._pointerDownHandler({
e:e,
x:i.pageX,
y:i.pageY
});
}
}),d.tap(f[0],function(e){
return t._useWcSlPlayer()?void(t.isInFullScreen()?t.exitFullScreen():t.enterFullScreen()):(t.isInFullScreen()?M&&t.exitFullScreen():M&&(b.setSum(28307,56,1),
t.enterFullScreen()),e.preventDefault(),!1);
}),this._useWcSlPlayer()&&!function(){
var i=o.find(".js_play_mode_select"),n=o.find(".js_playback_mode_select"),a=o.find(".js_playback_mode_change");
if(e.opt.resolutionInfo&&e.opt.resolutionInfo.length&&!function(){
var a=o.find(".js_play_mode_change");
d.tap(a[0],function(){
t.hideControllBar(),"flex"!==i.css("display")&&(t.__hideSubSettingTimeoutHandler&&clearTimeout(t.__hideSubSettingTimeoutHandler),
m.removeClass("hide"),i.css("display","flex"),n.length&&"flex"===n.css("display")&&n.css("display","none"),
t._trigger("resolutionChange",{
action:"show"
}));
});
for(var s=function(n){
var s=o.find(".js_resolution_"+n);
if(e.opt.resolutionInfo[n].src.indexOf("m3u8")>-1){
F.hasAutoFlag=!0;
var r=$(".js_auto_change_tip")[0];
d.tap(r,function(){
t.hideControllBar(),t._setResolution(n),$(".js_auto_change_tip")[0].style.display="none",
a.text(s.text()),i.find(".video_full-screen__sub-setting__item").removeClass("current"),
s.addClass("current"),t._trigger("resolutionChange",{
action:"select"
}),t.isPause()&&t.showControllBar();
});
}
d.tap(s[0],function(){
t._setResolution(n),t.__hideSubSettingTimeout(),i.find(".video_full-screen__sub-setting__item").removeClass("current"),
a.text(s.text()),s.addClass("current"),t._trigger("resolutionChange",{
action:"select"
}),t.isPause()&&t.showControllBar();
});
},r=0;r<e.opt.resolutionInfo.length;r++)s(r);
}(),d.tap(a[0],function(){
if(t.__isInFullScreen)t.hideControllBar(),"flex"!==n.css("display")&&(t.__hideSubSettingTimeoutHandler&&clearTimeout(t.__hideSubSettingTimeoutHandler),
m.removeClass("hide"),n.css("display","flex"),i.length&&"flex"===i.css("display")&&i.css("display","none"),
t._trigger("rateChange",{
action:"show"
}));else{
var e=t.opt.playbackRateInfo,o=t._g.playbackRateBtnInfoId;
t.video.playbackRate<e[t.opt.playbackRateBtnInfoDefaultId].rate||o>=e.length-1||0>=o?o=t.opt.playbackRateBtnInfoDefaultId:t.opt.width>t.opt.height?o--:o++;
var a=e[o].rate;
t._g.playbackRateBtnInfoId=o,t.showControllBar(),t.__hideControllTimeout(),t._trigger("rateChange",{
action:"show"
}),t._setPlaybackRate(a),t._trigger("rateChange",{
action:"select"
}),t._changePlaybackRateBtn(a);
}
}),e.opt.playbackRateInfo&&e.opt.playbackRateInfo.length)for(var s=function(e){
var i=o.find(".js_playback_"+e);
d.tap(i[0],function(){
var i=t.opt.playbackRateInfo[e].rate;
t._setPlaybackRate(i),t.__hideSubSettingTimeout(),t._changePlaybackRateList(i,e),
t._trigger("rateChange",{
action:"select"
}),t.isPause()&&t.showControllBar();
});
},r=0;r<e.opt.playbackRateInfo.length;r++)s(r);
}();
},
firstPlay:function(){
function e(){
if(L)return location.href=t.opt.src,!1;
t.changeStatus({
status:"loading",
subStatus:"preload"
});
var e=2;
t._g.hasReportBeginPlay?e=9:window.cgiData&&"0"==window.cgiData.media_source&&(e=11),
t.videoCtlReport({
step:e
}),t._g.hasReportBeginPlay=!0,t._trigger("readyBeginPlay");
}
var t=this,i=t.opt.canMePlay;
"function"==typeof i?i(e):e();
},
hideTouchForward:function(){
this.container.find(".js_forward").addClass("none");
},
playSwitch:function(e,t){
this.isPlay()?(e||this.videoCtlReport({
step:12
}),this.pause4outer({
doubleTap:e,
triggerEvent:t
})):this.play4outer(0/0,{
doubleTap:e
});
},
__firstLoadedFlowNoticeJudge:function(){
if(m.device.inWechat&&parent.window.lastNetworkType&&parent.window.lastNetworkType.networkType&&parent.window.lastNetworkType.simType&&T.isMobileNetwork(parent.window.lastNetworkType.networkType)&&1!==parent.window.lastNetworkType.simType){
var e=void 0;
e=this.opt.flow<100&&this.opt.flow>0?T.isVideoNeedFlowNotice(this.opt.flow,1):T.isVideoNeedFlowNotice(this.opt.flow,5),
e&&(this.opt.flow<100&&this.opt.flow>0?this.__showFlowNotice_1():this.__showFlowNotice_2(this.opt.flow));
}
},
__showFlowNotice_1:function(){
this.videoCtlReport({
step:16,
noticeType:1
}),this._trigger("flowNotice",{
flow:parseInt(1024*this.opt.flow),
noticeType:1
}),this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null);
var e=this.container.find(".js_video_flow").removeClass("flow_fade_out");
this.container.find(".js_flow_notice_1").show(),this.container.find(".js_flow_notice_2").hide(),
e.show(),e.addClass("flow_fade_out");
},
__showFlowNotice_2:function(e){
this.videoCtlReport({
step:16,
noticeType:2
}),this._trigger("flowNotice",{
flow:parseInt(1024*this.opt.flow),
noticeType:2
}),this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null),
this.container.find(".js_flow_notice_2").show(),this.container.find(".js_flow_notice_1").hide(),
this.container.find(".js_video_flow_num").html(e+"M"),this.container.find(".js_video_flow").removeClass("flow_fade_out").show(),
this.container.find(".js_video_flow").addClass("flow_fade_out");
},
__hideFlowNotice:function(){
this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null),
this.container.find(".js_video_flow").hide();
},
_pointerDownHandler:function(e){
this.__onTouch=!0,this.showControllBar(),this.container.find(".js_progress_bar").addClass("wrp_progress__draging"),
this.__isPauseBeforeSeek=this.isPause(),this.progressBarSeekData={
x1:e.x,
y1:e.y,
startTime:this.video.currentTime
},this.pause(),e.e.preventDefault();
},
_pointerMoveHandler:function(e){
var t=this.container.find(".js_played_bar"),i=this.container.find(".js_progress_bar");
this.__onTouch=!0,this.__has_drag=!0,this.progressBarSeekData.x2=e.x,this.progressBarSeekData.y2=e.y;
var o=t.offset(),n=i.width(),a=(e.x-o.left)/n,s=this.__getDuration(),r=1*(s*a).toFixed(4);
r>s&&(r=s-1);
var l=!1;
"undefined"==typeof this.progressBarSeekData.dragTime&&(l=!0);
var d=Math.abs(1*r-1*this.progressBarSeekData.dragTime);
(l||d>=.5)&&(this.progressBarSeekData.dragTime=r,E("_pointerMoveHandler set currentTime, dragTime:"+this.progressBarSeekData.dragTime+" currentTime:"+this.video.currentTime),
this._useWcSlPlayer()||(this.video.currentTime=this.progressBarSeekData.dragTime),
this.__setPlayTime(this.progressBarSeekData.dragTime>>0)),this.__setControllBar(a),
e.e&&e.e.preventDefault();
},
_pointerUpHandler:function(e){
var t=this;
e.e.preventDefault(),this.container.find(".js_controll").off("mousemove",t._event.progressBarMousemove),
this.container.find(".js_video_poster").off("mousemove",t._event.progressBarMousemove),
$(document.body).off("mouseup",t._event.progressBarMouseup),this.container.find(".js_progress_bar").off("touchmove",t._event.progressBarTouchmove).off("touchend",t._event.progressBarTouchend),
this.container.find(".js_progress_bar").removeClass("wrp_progress__draging"),"undefined"==typeof this.progressBarSeekData.dragTime&&this._pointerMoveHandler({
x:e.x,
y:e.y
});
var i=this.progressBarSeekData.dragTime,o=this.progressBarSeekData.startTime;
i==this.video.currentTime&&(i-=.1),this.progressBarSeekData.startTime&&t.__dragTimes.push(Math.round(1e3*this.progressBarSeekData.startTime)+":#:"+Math.round(1e3*i)),
this.progressBarSeekData=null,E("_pointerUpHandler dragTime:"+i+" currentTime:"+this.video.currentTime),
setTimeout(function(){
t.__onTouch=!1,t.__forcePause=!1,t.isEnd()||(t.showLoading(),t.play(i),t._seekReport(),
t._trigger("barDragComplete",{
playTime:i,
startDragVideoTime:o
}));
},0),this.__hideControllTimeout();
},
_seekReport:function(){
this.videoCtlReport({
step:13
});
},
_hidePlayControllBar:function(){
this.container.find(".js_video_pause_controll").hide(),this._g.isUserPause&&m.device.inWechat&&("wifi"===this._g.pauseNetType&&T.isVideoNeedFlowNotice(this.opt.flow,3)||T.isNoneNetwork(this._g.pauseNetType)&&T.isVideoNeedFlowNotice(this.opt.flow,4)?this.__showFlowNotice_1():(this._g.isUserPause=!1,
this._g.pauseNetType=null)),this.__hideControllTimeout();
},
_showPlayControllBar:function(){
var e=this.container.find(".js_video_pause_controll");
this.isEnd()||(this.opt.pauseShowControll?(e.hide(),this.showControllBar()):(this.hideControllBar({
showShareBtn:!!this.opt.canShareVideo
}),e.show(),this.container.find(".js_video_play_controll").hide(),this.container.find(".js_play_bar_wrapper").hide()));
},
_addSerialTimeupdate:function(){
var e=this.video.currentTime,t=this._g.serialTimeupdateCache.length;
e>0&&(0==t||this._g.serialTimeupdateCache[t-1].currentTime!=e)&&(this._g.serialTimeupdateCache.length>=this._g.timeupdateCacheCount&&this._g.serialTimeupdateCache.shift(),
this._g.serialTimeupdateCache.push({
currentTime:e,
timeStamp:+new Date
}));
},
_checkPlayBySerialTimeupdate:function(){
if(this._g.serialTimeupdateCache.length<this._g.timeupdateCacheCount)return!1;
var e=this._g.serialTimeupdateCache.length,t=this._g.serialTimeupdateCache[e-1],i=this._g.serialTimeupdateCache[e-this._g.timeupdateCacheCount];
return t.timeStamp-i.timeStamp<2500?!0:!1;
},
_showPlayer:function(){
var e=this.container.find(".js_page_video");
e.show();
},
_hidePlayer:function(){
var e=this.container.find(".js_page_video");
e.hide();
},
__setPlayTime:function(e){
return this.opt.isTLpage?(this.container.find(".js_remain_time").text(N(this.opt.duration-e)),
void(this.container.find(".js_remain_time")[0].dataset.playDuration=e)):void this.container.find(".js_now_play_time").text(N(e));
},
__setControllBar:function(e){
e=Math.ceil(100*e),0>e&&(e=0),e>100&&(e=100),this.__setBufferBar(e),e+="%";
var t=this.container;
t.find(".js_played_bar").css({
width:e
}),t.find(".js_played_speed_cnt").css({
left:e
});
},
__setForwardBar:function(e){
var t=this.container,i=this.__getDuration(),o=e/i;
t.find(".js_forward").removeClass("none"),t.find(".js_forward_seperator").text("/"),
t.find(".js_forward_total_time").text(N(i>>0)),t.find(".js_forward_bar").css("width",100*o+"%"),
t.find(".js_forward_play_time").text(N(e));
},
__setUpperBar:function(e,t){
var i=this.container;
t=Math.min(t,1),t=Math.max(t,0),i.find(".js_forward").removeClass("none"),i.find(".js_forward_seperator").text(":"),
i.find(".js_forward_total_time").text(parseInt(100*t)+"%"),i.find(".js_forward_bar").css("width",100*t+"%"),
i.find(".js_forward_play_time").text(e);
},
__setBufferBar:function(e){
var t=this.container,i=this.video,o=this.__getDuration(),n=i.currentTime;
e=e||n/o;
var a=e;
this._useWcSlPlayer()&&i.buffered?a=i.buffered.percent:i.buffered&&i.buffered.length>0&&i.buffered.end&&o&&(a=i.buffered.end(0)/o,
a=Math.max(e,Math.ceil(parseInt(100*a))),a>98&&(a=100)),t.find(".js_buffer_bar").css({
width:a+"%"
});
},
__resetVideo:function(){
this.$video.remove();
var e=this.container,t=e.find(".js_video_poster");
if(this._useWcSlPlayer()){
var i=this.video.src,o=this.video.width,n=this.video.height;
t.append('<wx-open-video src="'+i+'" style="display:block;" width="'+o+'" height="'+n+'"fullscreen-after-orientation-change hide-ios-exit-btn-when-fullscreen></wx-open-video>'),
this.$video=t.find("wx-open-video");
}else t.append("<video></video>"),this.$video=t.find("video");
this.video=this.$video[0],this.__canplay=!1,this.__forcePause=!1,this.__initVideo(),
this.__iosPreloadPause=!1,this.__iosPreloadPlayFlag=!1,this.__bindVideoEvent();
},
__fallbackFromWcSlVideoToH5Player:function(){
console.error("fallback from wcslplayer to h5player",this.video.error),this._jsapiLog("fallback from wcslplayer to h5player: "+this.video.error),
S.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
}),P.__useWcSlPlayer=!1,this._g.fallbackFromWcSlVideoToH5Player=!0,this.__resetVideo(),
this._trigger("loading"),this.container.find(".js_playback_mode_change").hide();
},
_trigger:function(e,t){
var i=this,o=this;
if("timeupdate"!==e||"timeupdate"===e&&this._g.triggerTimeupdateLog){
"timeupdate"===e&&(this._g.triggerTimeupdateLog=!1,setTimeout(function(){
i._g.triggerTimeupdateLog=!0;
},5e3));
try{
var n="",a=Object.prototype.toString.call(t);
n="[object String]"===a?t:"[object Object]"===a||"[object Array]"===a?JSON.stringify(t):"no params",
this._jsapiLog("trigger:"+e+";arg:"+n+";");
}catch(r){}
}
if("readyBeginPlay"==e&&(o.__iosPreloadPlayFlag=!1),"play"==e&&0==o.__iosPreloadPlayFlag){
if(o.__iosIsRealPreload&&s(o.video,!1),o.__forcePause=!1,o.opt.notPauseOtherVideoWhenPlay||g.broadcastMessage({
type:"broadcastPlay",
data:{
id:this.id
}
}),window.parent.originalVideoAdFrames&&0!=window.parent.originalVideoAdFrames.length)for(var l=0;l<window.parent.originalVideoAdFrames.length;l++)window.parent.originalVideoAdFrames[l].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");
f.postMessage(window.parent,"onVideoPlayV2",{
vid:v.getQuery("vid")
});
}
var d=this.plugins,_=this._blockPlugin[e]||this._blockPlugin.all,u=0;
if(_&&"function"==typeof _.recv&&(u|=_.recv(e,t),1&u))return!1;
for(var l=0,c=d.length;c>l&&(u|=d[l].recv(e,t),!(2&u));++l);
if(!(this._blockInnerHandler||4&u)){
var h=this["__"+e+"Handler"];
h&&h.call(this,t);
}
8&u||this.__triggerOutside(e,t);
},
_setBlockInnerHandler:function(e){
this._blockInnerHandler=e;
},
_setBlockPlugin:function(e,t){
this._blockPlugin[e]=t;
},
_getContainer:function(){
return this.container;
},
_setCover:function(e,t){
this.container.find(".js_poster_cover").css(t),this.opt.cover=e,this._g.coverBase64="";
},
_removeCover:function(e){
e=e||{
"background-image":"none"
},this.container.find(".js_poster_cover").css(e);
},
_afterReplay:function(){
this.__hasBeginPlay=!0,this.__userplaytime=!0,this.__firstPlayStart=+new Date,this.showLoading(),
this.play(),this._trigger("afterReplay");
},
_useWcSlPlayer:function(){
return this.opt.useWcSlPlayer&&this.supportWcSlPlayer();
},
_setResolution:function(e){
var t=this;
if(this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length){
var i=this.opt.resolutionInfo[e];
this.video.resolutionSrc!==i.src&&(this.__resolutionInfoBeforeChange=this.opt.resolutionInfo.filter(function(e){
return e.src===t.video.resolutionSrc;
})[0],this.video.resolutionSrc=i.src);
}
},
_setPlaybackRate:function(e){
this._useWcSlPlayer()&&this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length&&this.video.playbackRate!==e&&(this.__playbackRateBeforeChange=this.video.playbackRate,
this.video.playbackRate=e);
},
_changePlaybackRateList:function(e,t){
var i=this,o=function(t){
i.container.find(".js_playback_"+t).hasClass("current")||(i.container.find(".js_playback_mode_select .video_full-screen__sub-setting__item").removeClass("current"),
i.container.find(".js_playback_"+t).addClass("current"),$("#play_setting_mode__rate").text(1===e?"倍速":i.opt.playbackRateInfo[t].name));
};
if(t)o(t);else if(this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length)for(var n=this.opt.playbackRateInfo,a=0;a<n.length;a++)if(e===n[a].rate){
o(a);
break;
}
},
_changePlaybackRateBtn:function(e,t){
var i=this,o=this.opt.playbackRateInfo,n=function(){
$("#play_setting_mode__rate").text(t&&1===e?"倍速":o[i._g.playbackRateBtnInfoId].name);
};
if(o[this._g.playbackRateBtnInfoId].rate===e)n();else for(var a=0;a<o.length;a++){
var s=o[a];
if(e===s.rate){
this._g.playbackRateBtnInfoId=a,n();
break;
}
}
},
setPlaybackRate:function(e){
this._useWcSlPlayer()&&(this._setPlaybackRate(e),this._changePlaybackRateBtn(e),
this._changePlaybackRateList(e));
},
setSrc:function(e,t,i){
var o=this,n=this.$video,a=(this.opt,this.video);
this.src=e,(!o.__iosPreloadPause||i)&&o.__initData(),o.__initVideo(),this.showCover(),
o.log.loadwait_start=+new Date,(!n.attr("src")||i)&&(n.attr("src",e),m.proxyPreloadExper()&&m.proxyPreloadExper().isUsePreload&&u.os.ios&&!o.opt.ad_muted_btn&&!function(){
var e=function t(){
o.__iosPreloadPause=!0;
var e=function i(){
o._g.iosPreloadTmpPlay=!1,a.removeEventListener("pause",i,!1);
};
a.addEventListener("pause",e,!1),a.pause(),o._trigger("ready",o.opt),a.removeEventListener("canplay",t,!1);
};
a.addEventListener("canplay",e,!1),4!==a.readyState&&(o._g.iosPreloadTmpPlay=!0,
o.__iosPreloadPlayFlag=!0,o.__iosIsRealPreload=!0,s(a,!0),a.play());
}()),a.preload=t||"metadata",n.on("loadedmetadata",function(){
if(o.__videoDurationchange(),o.__playQueue&&o.__playQueue.length>0){
var e=o.__playQueue[0].sec;
o.__playQueue=[],o.play(e);
}
}),a.duration>0&&1!=a.duration&&o.__videoDurationchange();
},
videoCtlReport:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=this.opt.extinfo;
if(t){
var i={
step:e.step,
vid:t.vid,
hit_bizuin:t.hit_bizuin,
hit_vid:t.hit_vid,
traceid:t.pageplayer._getTraceId(),
orderid:t.pageplayer._getOrderid(),
ori_status:t.pageplayer._getOriStatus(),
type:this.opt.videoReportType,
fromid:t.pageplayer._getFromid()
};
e.step>=16?(i.remind_traffic_size=parseInt(1024*this.opt.flow),i.traffic_reminder_type=e.noticeType,
h.commReport(i)):h.report(i);
}
},
videoEnd:function(){
this.changeStatus({
status:"end",
subStatus:""
}),this.__endCountTime(),this._trigger("end");
},
replay:function(){
this.container.find(".js_video_play_controll").hide(),this._trigger("readyBeginPlay",{
replay:!0
}),this._trigger("replay"),this.hideWcSlFullEndExitBtn();
},
resetVideo:function(){
this.opt.autoReplay||(this.opt.autoplay=!1),this._useWcSlPlayer()||this.container.find(".js_video_poster").hide(),
this.showCover(),this.__resetVideo(),this.opt.isTLpage&&(this.container.find(".js_remain_time").text(this.opt.formatDuration),
this.container.find(".js_tlpage_loading").hide(),this.container.find(".js_tlpage_play").show()),
this._trigger("loading");
},
setSrcWithTime:function(e){
var t=this.video.currentTime;
this.resetVideo(),this.setSrc(e,!1,!0),this._jsapiLog("lastPlayTime:"+t),this.__continueSec=t;
},
changeStatus:function(e){
var t=this,i=this._g;
if(i.statusDefine[e.status]&&(!e.subStatus||i.subStatusDefine[e.subStatus]||"error"===e.status)&&(i.status!==e.status||i.subStatus!==e.subStatus)){
var o=0;
"end"===e.status||"error"===e.status?(this._playingBufferingStartTime=null,this.__userplaytime=!1):"pause"===e.status?this._playingBufferingStartTime=null:"play"===e.status&&"playing"===e.subStatus&&null!==this._playingBufferingStartTime?(o=+new Date-this._playingBufferingStartTime,
this._playingBufferingStartTime=null):!this.__hasBeginPlay||!this.__canplay||this.__userplaytime||"loading"!==e.status||"waiting"!==e.subStatus&&"seeking"!==e.subStatus||null!==this._playingBufferingStartTime||(this._playingBufferingStartTime=+new Date);
var n=i.status,a=i.subStatus;
i.status=e.status,i.subStatus=e.subStatus;
var s=["player statusChange, preStatus:",n,"; status:",i.status,"; preSubStatus:",a,"; subStatus:",i.subStatus,"; video_duration:",this.video?this.video.duration:"0","; getvinfo_duration:",this.opt.duration,"; current_time:",this.video?this.video.currentTime:"0","; play_total_time:",this.getPlayTotalTime()].join("");
this._jsapiLog(s),"error"===e.status&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&this.src&&(this._jsapiLog("client api get video begin: "+this.src),
S.invoke("request",{
url:this.src,
method:"GET",
data:{},
header:{
Range:"bytes=0-1"
}
},function(i){
t._jsapiLog("client api get video end: "+t.src);
var o=/^https?:\/\/\[/.test(t.src)?"Player ipv6: error":"Player ipv4: error",n="src: "+t.src+"; errorCode: "+e.subStatus+"; errorMsg: "+e.errorMsg+"; "+(window.__second_open__?"secopen":"h5")+"; res: "+JSON.stringify(i);
window.WX_BJ_REPORT.BadJs.report(o,n);
})),E(s),g.broadcastMessage({
type:"statusChange",
data:{
id:this.id,
preStatus:n,
preSubStatus:a,
status:i.status,
subStatus:i.subStatus
}
}),this._trigger("statusChange",{
currentTime:this.video.currentTime,
preStatus:n,
preSubStatus:a,
status:i.status,
subStatus:i.subStatus
}),o&&this._trigger("playingBufferingTime",{
bufferingTime:o
});
}
},
play:function(e){
var t=this.video,i=this;
if(!i.isEnd()){
if(this._useWcSlPlayer()&&null==t.readyState)return void("number"!=typeof this.opt.initialTime?this.__playQueue[0]={
sec:e
}:(this.__last_playtime=e,this.__setPlayTime(e)));
if(!t||0==t.readyState)return void(this.__playQueue[0]={
sec:e
});
e*=1;
try{
if(isNaN(e)||"number"!=typeof e)i.__canplay&&i.isPause()||0==t.currentTime?t.play():t.currentTime=0;else{
var o=this.__getDuration();
e>=o&&(e=o-1),0>e&&(e=0),e=1*(1*e).toFixed(4),i.__last_playtime=e,i.__setPlayTime(e),
t.currentTime==e?t.play():t.currentTime=e;
}
}catch(n){
0==t.currentTime?t.play():t.currentTime=0;
}
}
},
pause:function(){
var e=this.video;
e&&0==e.readyState||(this.__replaySec=null,this.waitingHandlerTimer&&(clearTimeout(this.waitingHandlerTimer),
this.waitingHandlerTimer=null),e.pause(),E(this.id+":pause function"));
},
getCoverBase64:function(){
var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this._g.coverBase64?"function"==typeof t.callback&&t.callback({
cover64:this._g.coverBase64||""
}):!function(){
var i=e,o=new Image;
o.crossOrigin="anonymous",o.onload=function(){
this.onload=null,this.onerror=null;
try{
var e=this.naturalWidth||this.width,o=this.naturalHeight||this.height,n=document.createElement("canvas"),a=n.getContext("2d");
n.style.width=e+"px",n.width=e,n.style.height=o+"px",n.height=o,a.drawImage(this,0,0,e,o),
i._g.coverBase64=n.toDataURL("image/jpeg",1);
}catch(s){
this._jsapiLog("jsapi shareEmbedMpVideo error:"+s),i._g.coverBase64="";
}
"function"==typeof t.callback&&t.callback({
cover64:i._g.coverBase64
});
},o.onerror=function(){
this.onload=null,this.onerror=null,"function"==typeof t.callback&&t.callback({
cover64:""
});
},o.src=e.opt.cover;
}();
},
callJsapiShareVideo:function(){
var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(this.opt.extinfo&&this.opt.extinfo.preview)return void g.postMessage({
type:"showTips",
data:{
msg:"预览图文中的视频不可分享"
}
});
if(!this._g.loadingCoverBase64){
var i=function(){
var i="",o="",n="";
try{
i=parent.window.msg_link.html(!1),o=parent.window.user_name||(window.cgiData?window.cgiData.username||window.cgiData.user_name:"")||"",
n=parent.window.nickname||(window.cgiData?window.cgiData.nick_name:"")||"";
}catch(a){
e._jsapiLog(t.action+" jsapi error:"+a);
}
var s=e.opt.extinfo,r="";
s&&(r=s.vid);
var l={
action:t.action,
mpUrl:i,
bizUsrName:o,
bizNickName:n,
videoVid:r,
videoUrl:v.addParam(e._g.oriSrc||e.src||e.opt.src,"video_md5",e.opt.videoMd5||""),
videoThumbUrl:e.opt.cover,
videoThumbData:e._g.coverBase64,
videoTitle:e.opt.videoTitle,
videoDuration:1*e.opt.duration
};
S.invoke("handleMPPageAction",l,function(){});
};
this._g.loadingCoverBase64=!0,this.getCoverBase64({
callback:function(){
e._g.loadingCoverBase64=!1,i();
}
});
}
},
onFullScreenChange:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.type,i=e.state,o=this.$video;
if(i?(o.parents(".js_inner").removeClass("not_fullscreen"),this.__isInFullScreen=!0,
this.showWcSlResolution(),this.isEnd()&&this.showWcSlFullEndExitBtn()):(o.parents(".js_inner").addClass("not_fullscreen"),
this.hideLoading(),this.__isInFullScreen=!1,this.hideWcSlResolution(),this.hideWcSlPlayback(),
this.isEnd()&&this.hideWcSlFullEndExitBtn()),this._useWcSlPlayer()){
var n=this.opt.width>this.opt.height?"page_video_skin-horizontal":"page_video_skin-vertical";
if(i){
if(this.container.find(".js_page_video").addClass(n),this.container.find(".js_full_screen_control").css("display","none"),
u.os.android)if(this.opt.width>this.opt.height){
var a=Math.max(F.wcSlPlayerAndroidSafeAreaInsets.top,F.wcSlPlayerAndroidSafeAreaInsets.bottom)+"px";
this.container.find(".js_page_video").find(".video_full-screen__head, .video_opr, .wrp_play_bar").css({
"padding-left":a,
"padding-right":a
}),this.container.find(".js_page_video").find(".js_sub_setting").css({
"padding-right":a
});
}else this.container.find(".js_page_video").find(".video_full-screen__head").css({
"padding-top":F.wcSlPlayerAndroidSafeAreaInsets.top+16+"px"
});
this._changePlaybackRateList(this.video.playbackRate);
}else{
if(this.container.find(".js_page_video").removeClass(n),this.container.find(".js_full_screen_control").css("display",null),
u.os.android)if(this.opt.width>this.opt.height){
var s=this.container.find(".js_page_video").find(".video_full-screen__head, .video_opr, .wrp_play_bar");
s.css("padding-left",null),s.css("padding-right",null);
}else this.container.find(".js_page_video").find(".video_full-screen__head").css("padding-top",null);
this._changePlaybackRateBtn(this.video.playbackRate,!0);
}
this.isEnd()||(this.showControllBar(),this.__hideControllTimeout());
}
this._trigger("fullscreenchange",{
state:i,
type:t
}),g.broadcastMessage({
type:"fullscreenchange",
data:{
fullScreen:this.__isInFullScreen,
type:t,
id:this.id
}
});
},
enterFullScreen:function(){
var e=this;
if(this._useWcSlPlayer()){
var t=this.opt.width>this.opt.height?90:0;
return void this.video.requestFullscreen(t);
}
var i=function(){
e._g.jsapiFullScreenId&&(clearTimeout(e._g.jsapiFullScreenId),e._g.jsapiFullScreenId=null);
var t=e.video;
t.requestFullscreen?(t.requestFullscreen(),e.__isInFullScreen=!0):t.mozRequestFullScreen?(t.mozRequestFullScreen(),
e.__isInFullScreen=!0):t.webkitRequestFullscreen?(t.webkitRequestFullscreen(),e.__isInFullScreen=!0):t.webkitEnterFullscreen&&(t.webkitEnterFullscreen(),
e.__isInFullScreen=!0);
};
if(this._g.jsapiFullScreenId&&(clearTimeout(this._g.jsapiFullScreenId),this._g.jsapiFullScreenId=null),
!this.opt.jsapiFullScreen||this._g.jsapiFullScreenErrCnt>=this._g.jsapiFullScreenErrLimit)return void i();
u.os.android||this.pause4outer({
triggerEvent:!1
});
var o="",n="",a="",s="",r="",l=this;
try{
if(r=parent.window.source||"",o=parent.window.msg_link.html(!1),n=parent.window.user_name||(window.cgiData?window.cgiData.username||window.cgiData.user_name:"")||"",
a=parent.window.nickname||(window.cgiData?window.cgiData.nick_name:"")||"",this.opt.videoCrossOrigin){
var d=document.createElement("canvas"),_=d.getContext("2d");
d.style.width=this.opt.videoWidth+"px",d.width=this.opt.videoWidth,d.style.height=this.opt.videoHeight+"px",
d.height=this.opt.videoHeight,_.drawImage(this.$video[0],0,0,this.opt.videoWidth,this.opt.videoHeight),
s=d.toDataURL("image/jpeg",1);
}
}catch(c){
this._jsapiLog("jsapi enterfullsrceen error:"+c);
}
var h=this.$video[0],p=null,g=null;
try{
for(g=h.getBoundingClientRect(),p={
left:g.left,
top:g.top,
height:g.bottom-g.top,
width:g.right-g.left
};h.ownerDocument.defaultView.parent!==window&&(h=h.ownerDocument.defaultView.frameElement);)g=h.getBoundingClientRect(),
p.left+=g.left,p.top+=g.top;
p.left=Math.round(p.left),p.top=Math.round(p.top),p.height=Math.round(p.height),
p.width=Math.round(p.width);
}catch(c){
this._jsapiLog("jsapi enterfullsrceen error:"+c),p={
left:0,
top:0,
height:0,
width:0
};
}
var f=this.opt.extinfo,m="";
f&&(m=f.vid);
var y={
action:"enterEmbedMpVideo",
mpBizUin:this.opt.__biz||"",
mpAppMsgId:this.opt.mid||"",
mpIndex:this.opt.idx||"",
mpUrl:o,
bizUsrName:n,
bizNickName:a,
videoUrl:v.addParam(this._g.oriSrc||this.src||this.opt.src,"video_md5",this.opt.videoMd5||""),
videoTitle:this.opt.videoTitle,
videoCurrTime:this.getCurTime(),
videoWidth:this.opt.videoWidth,
videoHeight:this.opt.videoHeight,
videoThumbUrl:this.opt.cover,
videoDuration:1*this.opt.duration,
videoVid:m,
playerX:p.left,
playerY:p.top,
playerWidth:p.width,
playerHeight:p.height,
subscene:1*r,
headImgUrl:this.opt.headImgUrl,
currFrameData:s,
forbidForward:this.opt.canShareVideo?0:1
};
this.__isInFullScreen=!0,s&&(this._g.jsapiFullScreenId=setTimeout(function(){
e.__isInFullScreen=!1;
},2e3)),S.invoke("handleMPPageAction",y,function(e){
l._g.jsapiFullScreenId&&(clearTimeout(l._g.jsapiFullScreenId),l._g.jsapiFullScreenId=null),
/:ok$/.test(e.err_msg)?(l.__isInFullScreen=!0,l.onFullScreenChange({
state:!0,
type:"jsapi"
})):(l.__isInFullScreen=!1,u.os.android||l.play4outer(0/0,{
triggerEvent:!1
}),l._g.jsapiFullScreenErrCnt++);
}),u.os.android&&(parent.window.CustomFullscreenApi&&"function"==typeof parent.window.CustomFullscreenApi._customEnterFullscreen&&parent.window.CustomFullscreenApi._customEnterFullscreen(!0),
i());
},
exitFullScreen:function(){
this.hideLoading(),this._useWcSlPlayer()?this.video.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),
this.__isInFullScreen=!1;
},
isInFullScreen:function(){
return!!this.__isInFullScreen;
},
play4outer:function(e){
var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
this.__forcePause=!1,this.play(e),t.triggerEvent!==!1&&this._trigger("userplay",{
doubleTap:t.doubleTap
}),this._hidePlayControllBar();
},
pause4outer:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this.hideLoading(),this.pause(),e.triggerEvent!==!1&&this._trigger("userpause",{
doubleTap:e.doubleTap
}),this.hideControllBar(),this._showPlayControllBar();
},
setWidth:function(e){
this.container.find(".js_page_video").css({
width:e
});
},
setHeight:function(e){
this.container.find(".js_page_video").css({
height:e
});
},
showCover:function(){
this.container.find(".js_poster_cover").show();
},
hideCover:function(){
this.container.find(".js_poster_cover").hide();
},
showFuncControllBar:function(){
this.container.find(".js_play_bar_wrapper").removeClass("wrp_play_bar_hide_speed-dot"),
this.container.find(".js_progress_bar,.js_full_screen_control").show(),this.__hasFuncControllBar=!0;
},
hideFuncControllBar:function(){
this.container.find(".js_play_bar_wrapper").addClass("wrp_play_bar_hide_speed-dot"),
this.container.find(".js_progress_bar,.js_full_screen_control").hide(),this.__hasFuncControllBar=!1;
},
showControllBar:function(){
this.__touchVideoTimeoutHandler&&clearTimeout(this.__touchVideoTimeoutHandler),this.__timerHideControll&&(clearTimeout(this.__timerHideControll),
this.__timerHideControll=null),this.__userplaytime||(this.container.find(".js_play_bar_wrapper").removeClass("opr_fade_out wrp_play_bar_hide_speed-dot").show(),
this.container.find(".js_played_speed_cnt").removeClass("opr_fade_out"),this.container.find(".js_controll").removeClass("opr_fade_out").show(),
this._useWcSlPlayer()&&this.container.find(".js_video_fullscreen_profile").removeClass("opr_fade_out").css("display",this.isInFullScreen()?null:"none")),
this.opt.canShareVideo&&(this.__userplaytime?this.container.find(".js_page_video").addClass("wx_video_status_initial"):this.container.find(".js_page_video").removeClass("wx_video_status_initial"),
this.container.find(".js_share_btn_contain").removeClass("opr_fade_out").show()),
this._trigger("showControllBar");
},
hideControllBar:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=this,i=t.container.find(".js_controll"),o=t.container.find(".js_play_bar_wrapper"),n=t.container.find(".js_played_speed_cnt"),a=t.container.find(".js_video_fullscreen_profile"),s=t.container.find(".js_share_btn_contain");
i.removeClass("opr_fade_in"),t.isInFullScreen()?(o.removeClass("opr_fade_in"),t._useWcSlPlayer()&&a.removeClass("opr_fade_in")):n.removeClass("opr_fade_in"),
t.__timerHideControll&&clearTimeout(t.__timerHideControll),i.addClass("opr_fade_out"),
t.isInFullScreen()?(o.addClass("opr_fade_out"),t._useWcSlPlayer()&&a.addClass("opr_fade_out")):n.addClass("opr_fade_out"),
e.showShareBtn!==!0?s.removeClass("opr_fade_in").addClass("opr_fade_out"):s.removeClass("opr_fade_out").show(),
t.__timerHideControll=setTimeout(function(){
t.isInFullScreen()?o.hide():o.addClass("wrp_play_bar_hide_speed-dot"),i.hide(),t._useWcSlPlayer()&&a.css("display","none"),
e.showShareBtn!==!0&&s.hide(),1===t.video.playbackRate&&$("#play_setting_mode__rate").text("倍速"),
t._trigger("hideControllBar");
},100);
},
showLoading:function(e){
var t=this;
this.__always_hide_loading||this.__isshowLoading&&this.video&&this.video.currentTime>1||(this.__isshowLoading=!0,
this._g.resetShowingLoadingTimeoutId&&(clearTimeout(this._g.resetShowingLoadingTimeoutId),
this._g.resetShowingLoadingTimeoutId=null),this._g.resetShowingLoadingTimeoutId=window.setTimeout(function(){
t.__isshowLoading=!1;
},1e3),this._g.showingLoadingTimeoutId&&(clearTimeout(this._g.showingLoadingTimeoutId),
this._g.showingLoadingTimeoutId=null),"firstTime"==e?this._useWcSlPlayer()?this._g.showingLoadingTimeoutId=setTimeout(function(){
t.container.find(".js_loading").addClass("start_loading").show();
},800):this.opt.isTLpage?(this.container.find(".js_tlpage_play").hide(),this.container.find(".js_tlpage_loading").show()):this.container.find(".js_loading").addClass("start_loading").show():this._g.showingLoadingTimeoutId=setTimeout(function(){
t.container.find(".js_loading").show();
},800));
},
hideLoading:function(){
this.opt.isTLpage?this.container.find(".js_tlpage_loading").hide():this.container.find(".js_loading").removeClass("start_loading").hide(),
this._g.showingLoadingTimeoutId&&(clearTimeout(this._g.showingLoadingTimeoutId),
this._g.showingLoadingTimeoutId=null);
},
showWcSlResolution:function(){
this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length&&this.container.find(".js_play_mode_change").css("display",null);
},
hideWcSlResolution:function(){
this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length&&(this.container.find(".js_play_mode_change").css("display","none"),
this.container.find(".js_play_mode_select").css("display","none"));
},
hideWcSlPlayback:function(){
this._useWcSlPlayer()&&this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length&&this.container.find(".js_playback_mode_select").css("display","none");
},
showWcSlFullEndExitBtn:function(){
var e=this;
if(this._useWcSlPlayer()){
var t=this.container.find(".js_video_fullscreen_end");
this.__hasBindWcSlFullEndExitBtnTapEvent||(this.__hasBindWcSlFullEndExitBtnTapEvent=!0,
d.tap(t.find(".js_video_fullscreen_end_exit")[0],function(){
e.exitFullScreen();
})),t.css("display",null);
}
},
hideWcSlFullEndExitBtn:function(){
this._useWcSlPlayer()&&this.container.find(".js_video_fullscreen_end").css("display","none");
},
triggerMuted:function(e){
e?(s(this.video,!0),this.container.find(".js_muted_btn").addClass("muting")):(s(this.video,!1),
this.container.find(".js_muted_btn").removeClass("muting"));
},
setVideoCSS:function(e){
var t=this,i=t.container,o=i.find(".js_page_video");
o.css(e);
},
afterFirstLoaded:function(){
this.__userplaytime&&(this.__userplaytime=!1,this.reportRealLoadingTime(),this._useWcSlPlayer()||this._trigger("touchVideo",{
isShow:!0
}));
},
reportRealLoadingTime:function(){
var e=this;
e.__firstPlayEnd=+new Date;
var t=parseInt(e.__firstPlayEnd-e.__firstPlayStart);
if(console.info("[视频点击播放耗时]",t),e._trigger("firstBufferingTime",{
bufferingTime:t,
initialTime:e.opt.initialTime
}),m.proxyPreloadExper()){
var i=w.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
1==m.proxyPreloadExper().experSet?y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:21,
time:t
},
user_define:i
}):2==m.proxyPreloadExper().experSet?y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:22,
time:t
},
user_define:i
}):3==m.proxyPreloadExper().experSet?y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:23,
time:t
},
user_define:i
}):4==m.proxyPreloadExper().experSet&&y.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(w.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:24,
time:t
},
user_define:i
}),y.send();
}
},
hasFullScreen:function(){
return this.isInFullScreen();
},
hasDrag:function(){
return!!this.__has_drag;
},
getCurTime:function(){
return this.video.currentTime;
},
getPlaybackRate:function(){
return this.video.playbackRate;
},
getResolutionInfo:function(){
var e=this;
return this._useWcSlPlayer()?this.opt.resolutionInfo?this.opt.resolutionInfo.filter(function(t){
return t.src===e.video.resolutionSrc;
})[0]:null:void 0;
},
getEndDom:function(){
return this.container.find(".js_end_dom");
},
getDrag:function(){
return this.__dragTimes;
},
getPlayTotalTime:function(){
return this.__endCountTime(),this.__play_total_time;
},
getWcSlPlayerAndroidSafeAreaInsets:function(){
return F.wcSlPlayerAndroidSafeAreaInsets;
},
supportWcSlPlayer:function(){
return window.__failConfigWxOpen?!1:this._g.fallbackFromWcSlVideoToH5Player?!1:F.wcSlPlayerSupport;
},
getLog:function(){
var e=this.log||{};
return{
hasended:e.hasended,
last_ms:Math.floor(1e3*(e.lastsec||0)),
duration_ms:Math.floor(1e3*(e.duration||0)),
video_error:e.video_error||0,
video_error_code:e.video_error_code||0,
loadwait:e.loadwait||0
};
},
isPlay:function(){
return!this.video.paused&&!this.isEnd();
},
isPause:function(){
return!!this.video.paused;
},
isEnd:function(){
return!!this.video.ended;
},
hasBeginPlay:function(){
return this.__hasBeginPlay;
},
destroy:function(){
g.removeListener({
type:"broadcastPlay",
func:this._event.broadcastPlay
});
try{
delete parent.window.__MpPlayers[this.id];
}catch(e){}
F.visibilityPausePlayer===this&&(F.visibilityPausePlayer=null);
},
_setBeginPlayStatus:function(){
var e=this;
this.hideLoading(),this.container.find(".js_video_play_controll").css({
display:"block"
});
var t=this.opt.duration;
t&&t>0&&this.container.find(".js_video_length").html(N(t)).show(),1==this.__iosPreloadPause&&!function(){
var t=e;
setTimeout(function(){
var e=t.container.find(".js_video_pause_controll");
e.hide();
var i=t.container.find(".js_video_play_controll");
i.show();
});
}();
},
showPlayBtn:function(){
this.container.find(".js_video_play_controll").show();
},
hidePlayBtn:function(){
this.container.find(".js_video_play_controll").hide();
},
autoChangeTip:function(e){
var t=this,i=void 0;
switch(e.type){
case"autoChange":
i=".js_auto_change_tip";
break;

case"autoSuc":
i=".js_auto_change_suc_tip";
break;

default:
i=null;
}
switch(e.option){
case"show":
this.container.find(".video__top-tips__mask").removeClass("video__top-tips__showOut").addClass("video__top-tips__showIn"),
this.container.find(".js_auto_change_tip_mask").show(),this.container.find(i).show();
break;

case"hide":
this.container.find(".video__top-tips__mask").removeClass("video__top-tips__showIn").addClass("video__top-tips__showOut"),
setTimeout(function(){
t.container.find(i).hide(),t.container.find(".js_auto_change_tip_mask").hide();
},500);
}
}
}),V._getFormatTime=N,V;
});define("new_video/plugin/danmu.js",["biz_wap/utils/ajax.js","new_video/plugin_base.js","new_video/plugin/danmu_util.js","pages/bottom_input_bar.js","biz_common/utils/url/parse.js","biz_common/utils/emoji_data.js","biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/storage.js","biz_wap/utils/jsmonitor_report.js","page/pages/video_mod/video_danmu.css"],function(t){
"use strict";
function i(t){
var i=this;
this.hasPlayerInit=!1,this._o={
bizUin:t.bizUin||0,
msgId:t.msgId||0,
idx:t.idx||0,
vid:t.vid||0
},this.LS=new d("video_danmu_plugin"),this._g={
step:1/0,
buffer:"",
inputTime:0,
switchOn:!1,
requestCnt:0
};
var n=setTimeout(function(){
return p.setSum(221764,4,1);
},5e3);
e({
type:"GET",
dataType:"json",
url:r.join("mp/danmu?action=get_danmu_info",{
__biz:this._o.bizUin,
vid:this._o.vid
}),
success:function(t){
t&&t.base_resp&&1*t.base_resp.ret===0?(i.danmuInfo={
isAllow:-1!==[9,70].indexOf(1*window.appmsg_type)&&!!t.is_allow_danmu,
isAllowPost:!!t.is_allow_post_danmu,
unitId:t.unit_id,
reasonId:t.reason_id
},console.log("[Danmu Plugin Get Info]",i._o,i.danmuInfo,t),i.hasPlayerInit&&i.init(),
p.setSum(221764,1,1)):(console.error("[Danmu Plugin Get Info Ret != 0]",t),p.setSum(221764,2,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:GetInfoRet!=0",JSON.stringify(t)));
},
error:function(t,i){
console.error("[Danmu Plugin Get Info Error]",i),p.setSum(221764,3,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:GetInfoError",JSON.stringify(i));
},
complete:function(){
return clearTimeout(n);
}
});
}
var e=t("biz_wap/utils/ajax.js"),n=t("new_video/plugin_base.js"),s=t("new_video/plugin/danmu_util.js"),a=t("pages/bottom_input_bar.js"),r=t("biz_common/utils/url/parse.js"),o=t("biz_common/utils/emoji_data.js"),u=t("biz_wap/utils/mmversion.js"),_=t("biz_common/dom/event.js"),l=t("biz_wap/jsapi/core.js"),d=t("biz_wap/utils/storage.js"),p=t("biz_wap/utils/jsmonitor_report.js"),m=3,c=6,h="xs",f="s",g=.6,w=.6,v=31536e7,y=2,b='<img src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single #name#" alt="" />',j='<div class="play_bullet-input__container js_danmu_invoke_input_container"><div class="play_bullet-input_mode js_danmu_invoke_input"><div class="play_bullet-input__wrapper"><div class="play_bullet-input">说点什么</div></div></div><div class="play_bullet-screen_mode js_danmu_switch"><a href="javascript:;" class="play_bullet-screen"></a></div></div>';
return n.inherit(i,n.Class),i.prototype.init=function(){
return this.hasPlayerInit=!0,this.danmuInfo&&(this.player._trigger("getDanmuInfo",this.danmuInfo),
this.danmuInfo.isAllow)?this.player._useWcSlPlayer()?void this.__init():void console.log("[Danmu Plugin Not Support]"):void 0;
},i.prototype.statusChangeHandler=function(t,i){
this._g.switchOn&&("loading"===i.status&&"seeked"===i.subStatus?(this._g.step=this.__parseTime(i.currentTime),
this.danmuUtil._clear(),this.danmuUtil.list.reset()):"play"===i.status?this.danmuUtil.switchOn():"pause"===i.status?this.danmuUtil.pause():"end"===i.status&&(this.danmuUtil.switchOff(),
this.danmuUtil.list.reset(),this._g.step=0));
},i.prototype.timeupdateHandler=function(t,i){
if(this._g.switchOn&&!this.player.__onTouch){
var e=parseInt(i.currentTime,10);
this.danmuUtil.updateTime(e),e>this._g.step-y&&(this.__requestDanmu(),this._g.step=this.__getCurTime(5));
}
},i.prototype.fullscreenchangeHandler=function(t,i){
this._g.switchOn&&(this.inputBar.hide(),this.danmuUtil.setLine(i.state?c:m),this.danmuUtil.setFont(i.state?f:h),
this.danmuUtil.setRate(i.state?w:g),this.player.opt.width>this.player.opt.height?this.inputBar.setFullscreenStyle(i.state):i.state?u.isIOS?this.player.container.find(".js_video_danmu").addClass("danmu_full_vertical"):this.player.container.find(".js_video_danmu .txp_barrage_external").css("top",this.player.getWcSlPlayerAndroidSafeAreaInsets().top+"px"):u.isIOS?this.player.container.find(".js_video_danmu").removeClass("danmu_full_vertical"):this.player.container.find(".js_video_danmu .txp_barrage_external").css("top","0px"));
},i.prototype.__init=function(){
var i=this;
this.player.container.find(".js_page_video .js_controll .opr_inner_fr").prepend(j),
_.tap(this.player.container.find(".js_danmu_switch")[0],function(t){
i.player.__hideControllTimeout(),i.__triggerDanmuSwitch(),t.preventDefault();
});
var e=this.player.container.find(".js_danmu_invoke_input");
if(this.inputBar=new a({
limit:30,
placeholder:"说点什么",
submitCallback:function(t){
return i.__submitDanmu(t);
}
}),this.inputBar.addListener("input",function(){
e.find(".play_bullet-input").text(i.inputBar.getContent()?"正在输入...":"说点什么");
}),this.inputBar.addListener("show",function(){
i.player.showControllBar(),i.inputBar.getContent()&&e.find(".play_bullet-input").text("正在输入...");
}),this.inputBar.addListener("hide",function(){
i.player.__hideControllTimeout(),e.find(".play_bullet-input").text("说点什么");
}),this.player.container.find(".js_page_video").append('<div class="js_video_danmu"></div>'),
this.danmuUtil=new s({
wrapper:this.player.container.find(".js_video_danmu")[0],
userNum:m,
rate:g
}),t("page/pages/video_mod/video_danmu.css"),this.danmuInfo.isAllowPost)_.tap(e[0],function(t){
window.is_temp_url?l.invoke("confirmDialog",{
title:"预览状态下无法操作",
contentDesc:"",
confirmText:"确定"
}):(i.inputTime=i.__getCurTime(),i.inputBar.show()),t.preventDefault();
});else{
var n={
"default":"无法发弹幕",
1:"关注可发",
2:"关注3天可发"
};
e.find(".play_bullet-input").text(n[this.danmuInfo.reasonId]||n.default);
}
this._g.switchOn="number"==typeof this.LS.get("switch")?1===this.LS.get("switch"):!0,
this.__triggerDanmuSwitch(!0);
},i.prototype.__triggerDanmuSwitch=function(t){
t||(this._g.switchOn=!this._g.switchOn,this.LS.set("switch",this._g.switchOn?1:2,Date.now()+v),
p.setSum(221764,this._g.switchOn?14:15,1)),this._g.switchOn?(this._g.step=this.__getCurTime(),
this.danmuUtil.switchOn(),this.player.isPause()&&this.danmuUtil.pause(),this.player.container.find(".js_danmu_switch .play_bullet-screen").addClass("active"),
this.player.container.find(".js_danmu_invoke_input").css({
position:"static"
}),t||this.player.container.find(".js_danmu_invoke_input_container").removeClass("unactive").addClass("active")):(this._g.step=1/0,
this.danmuUtil.switchOff(),this.danmuUtil.list.reset(),this.player.container.find(".js_danmu_switch .play_bullet-screen").removeClass("active"),
this.player.container.find(".js_danmu_invoke_input").css({
position:"relative",
left:"-9999px"
}),t?this.player.container.find(".js_danmu_invoke_input_container").addClass("close"):this.player.container.find(".js_danmu_invoke_input_container").removeClass("active").addClass("unactive"));
},i.prototype.__submitDanmu=function(t){
if(t&&this._g.switchOn){
this.danmuUtil.add({
html:'<div class="danmu_self">'+this.__decodeEmoji(t.html(!0))+"</div>",
contentLength:t.length,
mustShow:!0
});
var i=setTimeout(function(){
return p.setSum(221764,12,1);
},5e3);
e({
type:"POST",
url:"mp/danmu?action=post_danmu",
dataType:"json",
data:{
__biz:this._o.bizUin,
unit_id:this.danmuInfo.unitId,
content:t,
vid:this._o.vid,
time_point:this.inputTime,
video_duration:this.player.duration,
appmsgid:this._o.msgId,
idx:this._o.idx
},
success:function(t){
if(t&&t.base_resp){
var i=1*t.base_resp.ret;
switch(i){
case 0:
return void p.setSum(221764,9,1);

case 2:
p.setSum(221764,13,1);
}
}
console.error("[Danmu Plugin Submit Ret != 0]",t),p.setSum(221764,10,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:SubmitRet!=0",JSON.stringify(t));
},
error:function(t,i){
console.error("[Danmu Plugin Submit Error]",i),p.setSum(221764,11,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:SubmitError",JSON.stringify(i));
},
complete:function(){
return clearTimeout(i);
}
});
}
},i.prototype.__requestDanmu=function(){
var t=this;
if(this._g.switchOn){
var i=setTimeout(function(){
return p.setSum(221764,8,1);
},3e3),n=++this._g.requestCnt,s=[];
e({
type:"GET",
dataType:"json",
url:r.join("/mp/danmu?action=pull_danmu",{
__biz:this._o.bizUin,
unit_id:this.danmuInfo.unitId,
vid:this._o.vid,
buffer:this._g.buffer,
step:this._g.step
}),
success:function(i){
if(n!==t._g.requestCnt)return console.warn("[Danmu Plugin Abort Pull Resp]",n,t._g.requestCnt,i),
void p.setSum(221764,16,1);
if(console.log("[Danmu Plugin Pull Resp]",i),i&&i.base_resp&&1*i.base_resp.ret===0){
var e=void 0;
try{
e=JSON.parse(i.json);
}catch(a){
e={};
}
t._g.step=e.next_step||t._g.step,t._g.buffer=e.buffer||t._g.buffer;
var r=e.list||[];
if(r.length){
for(var o=t.__getCurTime(1),u=0;u<r.length;u++){
var _=r[u],l={
html:t.__decodeEmoji(_.content),
index:Math.max(_.time_point,o),
contentLength:_.content.length,
mustShow:!!_.is_self
};
l&&s.push(l);
}
s.length&&(t.danmuUtil.list.reset(),t.danmuUtil.add(s));
}
p.setSum(221764,5,1);
}else console.error("[Danmu Plugin Pull Ret != 0]",i),p.setSum(221764,6,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:PullRet!=0",JSON.stringify(i));
},
error:function(t,i){
console.error("[Danmu Plugin Pull Error]",i),p.setSum(221764,7,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:PullError",JSON.stringify(i));
},
complete:function(){
return clearTimeout(i);
}
});
}
},i.prototype.__decodeEmoji=function(t){
if(!/\[[^\[\]]+\]/.test(t))return t;
for(var i=0,e=o.length;e>i;i++){
var n=o[i],s=b.replace("#name#",n.style);
if(n.cn){
var a=new RegExp("\\["+n.cn.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(a,s);
}
if(n.hk){
var r=new RegExp("\\["+n.hk.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(r,s);
}
if(n.us){
var u=new RegExp("\\["+n.us.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(u,s);
}
}
return t;
},i.prototype.__getCurTime=function(){
var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];
return this.__parseTime((this.player&&this.player.video&&1*this.player.video.currentTime||0)+t);
},i.prototype.__parseTime=function(t){
return parseInt(1*t||0,10);
},i;
});define("new_video/plugin/ad.js",["biz_wap/zepto/zepto.js","biz_wap/zepto/event.js","biz_wap/zepto/touch.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/jsmonitor_report.js","new_video/plugin_base.js","new_video/ctl.js","a/a_utils.js","a/a_config.js","common/utils.js"],function(t){
"use strict";
function e(t){
a({
url:"/mp/ad_video_report?action="+(t.action||"exposure"),
type:"post",
data:{
step:t.step||"",
view_id:t.view_id||"",
traceid:t.traceid||"",
orderid:t.orderid||0,
ad_source:t.ad_source||0,
report_time:t.report_time,
devicetype:parent.window.devicetype,
version:parent.window.clientversion,
__biz:parent.window.biz||"",
lcount:1,
type:t.type
}
});
}
function i(t,e){
t=1e3*t|0,e.forEach(function(e){
1!=e.reported&&t>=e.report_time&&(e.reported=1,iframe&&iframe.contentWindow&&iframe.contentWindow.postMessage(JSON.stringify({
type:"report",
url:e.url
}),location.protocol+"//"+location.host));
});
}
t("biz_wap/zepto/zepto.js"),t("biz_wap/zepto/event.js"),t("biz_wap/zepto/touch.js");
var a=t("biz_wap/utils/ajax.js"),r=t("biz_wap/jsapi/core.js"),o=t("biz_wap/utils/jsmonitor_report.js"),d=t("new_video/plugin_base.js"),n=t("new_video/ctl.js"),s=t("a/a_utils.js"),p=t("a/a_config.js"),h=t("common/utils.js"),_=5,l=1515,c=888,u=function(t){
"undefined"==typeof t.videoReportType&&(t.videoReportType=-1),this.hasPlayAd=!1,
this.hasError=!1,this.vid=t.vid,this.oriVid=t.oriVid,this.opt=t,this.isMpVideo=t.isMpVideo,
console.log("init ad vid test: "+t.vid),this.initAd=!1;
var e=this;
this._ad_play_time=-1,this.__beforeplayHandler=[],e.__initAd();
};
return d.inherit(u,d.Class),u.prototype.__openWebview=function(t,e){
var i=this.adPlayer,a=this;
a.adData.jump_url=t,r.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(t){
t.err_msg.match(/\:ok$/)?(i.pause(),r.on("activity:state_change",function(t){
"onresume"==t.state.toLowerCase()&&i.play();
})):parent.window.location.hash="complain"==e?"adcomplain"+a.vid:"addetail"+a.vid;
});
},u.prototype.__clickreport=function(){
{
var t=this;
this.player;
}
e({
action:"click",
view_id:t.adData.view_id,
traceid:t.adData.traceid,
orderid:t.adData.orderid,
ad_source:t.adData.ad_source,
report_time:t.getAdPlaytime(),
type:t.opt.videoReportType
}),n.report({
vid:t.vid,
step:8,
ext1:t.getAdPlaytime(),
ext2:t.adData.jump_url,
ad_source:t.adData.ad_source,
orderid:t.getOrderid(),
traceid:t.getTraceId(),
type:t.opt.videoReportType,
fromid:t.opt.fromid
}),t.adData.report_3rd_click_url&&t.adData.report_3rd_click_url.forEach(function(t){
iframe&&iframe.contentWindow&&iframe.contentWindow.postMessage(JSON.stringify({
type:"report",
url:t
}),location.protocol+"//"+location.host);
});
},u.prototype.hasAd=function(t){
if(!t||!t.advertisement_info||!t.advertisement_info.length)return!1;
for(var e=0;e<t.advertisement_info.length;e++){
var i=t.advertisement_info[e];
i.pos_type===p.AD_POS.POS_AD_BEFORE_VIDEO&&1===i.is_mp_video&&i.vid===this.oriVid&&h.report120081(8);
}
for(var a=0;a<t.advertisement_info.length;a++){
var i=t.advertisement_info[a];
if(i.pos_type===p.AD_POS.POS_AD_BEFORE_VIDEO&&0===i.is_mp_video&&i.vid===this.oriVid)return!0;
}
return!1;
},u.prototype.newHasAd=function(){
try{
for(var t=window.parent.document.getElementsByTagName("iframe"),e=0;e<t.length;e++)(window===t[e].contentWindow&&t[e].adVidFromAppmsg||t[e].adVidFromAppmsg===window.realVid)&&s.report115849(67);
}catch(i){}
},u.prototype.newInitAd=function(){
var t=this,e=void 0;
s.listenMessage(window,function(i,a){
if(a.action===p.AD_VIDEO_FIN_ACTION)return t.hasPlayAd=!0,void t.player._trigger("beginPlay");
if(a.action===p.APPMSGAD_READY_ACTION){
if(s.report115849(37),t.initAd=!0,window.adVidFromAppmsg&&s.report115849(66),t.newHasAd(),
!t.hasAd(a.value))return;
s.report115849(36),t.hasError=!1;
}else!t.initAd&&s.postMessage(window.parent,p.GET_APPMSGAD_READY_STATUS_ACTION,"");
a.action!==p.SEND_AD_VID_ACTION||e?!e&&s.postMessage(window.parent,p.GET_AD_VID_ACTION,""):(a.value.adVidFromAppmsg&&!window.adVidFromAppmsg&&(window.adVidFromAppmsg=a.value.adVidFromAppmsg),
a.value.adVidFromAppmsg&&s.report115849(57),e=!0);
}),s.postMessage(window.parent,p.GET_APPMSGAD_READY_STATUS_ACTION,""),s.postMessage(window.parent,p.GET_AD_VID_ACTION,""),
t.readyBeginPlayHandler=function(){
return s.report115849(23),this.hasPlayAd||this.hasError||!window.adVidFromAppmsg?d.BASE_BITSET:(s.postMessage(window.parent,"onVideoPlayV2",{
vid:window.adVidFromAppmsg,
playAd:!0
}),this.player._trigger("preload"),8);
},t.beginPlayHandler=function(){
return this.hasPlayAd||this.hasError||!window.adVidFromAppmsg?d.BASE_BITSET:14;
},t.loadingHandler=function(){
if(this.hasSetAdSrc||this.hadPlayAd||this.hasError)return d.BASE_BITSET;
var t=this,e=t.player;
return t._whenGetAdSrc(function(){
s.report115849(65),!this.initAd||this.hasError||this.hasSetAdSrc||(this.hasSetAdSrc=!0,
this.setUnblockEvt("loading")),window.adVidFromAppmsg||(this.hasPlayAd=!0),e.hideLoading(),
e._trigger("loading"),window.adVidFromAppmsg&&s.report115849(50);
}),1;
};
},u.prototype.__initAd=function(){
var t=this;
return s.listenMessage(window,function(e,i){
i.action===p.AD_VIDEO_PLAY_ACTION&&t.player.pause();
}),this.isMpVideo?(t.newInitAd(),void s.report115849(74)):(s.report115849(24),void t.newInitAd());
},u.prototype.__initOriginalVideoAd=function(){
var t=this;
window.parent.postMessage({
action:"originalVideoAdNeedData",
vid:t.vid
},"*"),window.addEventListener("message",function(e){
e.data&&"receiveOriginalVideoData"==e.data.action&&e.data.vid==t.vid&&(t.initAd=!0,
t.hasError=!1,t.adData=e.data.adData,t.adData&&t.adData.vid?h.report120081(1):t.hasError=!0,
t.player&&t.player.hideLoading());
});
},u.prototype.getAdPlaytime=function(){
return this._ad_play_time;
},u.prototype.getTraceId=function(){
return this.adData&&this.adData.traceid?this.adData.traceid:0;
},u.prototype.getOrderid=function(){
return this.adData&&this.adData.orderid?this.adData.orderid:0;
},u.prototype.init=function(){
this.container=$(this.player.opt.container),0==this.hasError&&(this.player.showLoading(),
this.setBlockEvt("loading"));
},u.prototype.noop=function(){
return this.hasPlayAd||this.hasError?d.BASE_BITSET:10;
},u.prototype.loadingHandler=function(){
if(this.hasSetAdSrc||this.hadPlayAd||this.hasError)return d.BASE_BITSET;
var t=this,e=t.player;
return t._whenGetAdSrc(function(){
!this.initAd||this.hasError||this.hasSetAdSrc||(this.hasSetAdSrc=!0,this.setUnblockEvt("loading")),
e._trigger("loading");
}),1;
},u.prototype.readyBeginPlayHandler=function(){
var t=this.__beforeplayHandler;
if(t&&t.length>0)for(var i=null;i=t.shift();){
var a=i.func;
"function"==typeof a&&a.apply(this,i.arg||[]);
}
if(this.hasPlayAd||this.hasError)return d.BASE_BITSET;
{
var r=this,o=this.player,n=this.adPlayer,s=n._getContainer(),p=s.find(".js_ad_controll"),h=s.find(".js_video_poster");
r.adData;
}
return n.hideControllBar&&n.hideControllBar(),n._trigger("beginPlay"),n._showPlayer&&n._showPlayer(),
o._hidePlayer(),p.show(),h.on("touchend",function(){
e({
step:6,
view_id:r.adData.view_id,
traceid:r.adData.traceid,
orderid:r.adData.orderid,
ad_source:r.adData.ad_source,
report_time:r.getAdPlaytime(),
type:r.opt.videoReportType
});
}),o._trigger("preload"),8;
},u.prototype.beginPlayHandler=function(){
if(this.hasPlayAd||this.hasError){
{
var t=this;
t.player;
}
return d.BASE_BITSET;
}
return 14;
},u.prototype.canplayHandler=function(){
return this._adEndedTime&&!this._canplayTime&&(this._canplayTime=+new Date,this._canplayTime-this._adEndedTime>0&&o.setAvg(27822,35,this._canplayTime-this._adEndedTime)),
d.BASE_BITSET;
},u.prototype.timeupdateHandler=function(){
return(this.hasPlayAd||this.hasError)&&this.hasError&&1==this.adVideoRet&&this.adData.report_3rd&&i(0,this.adData.report_3rd),
this._adEndedTime&&this.hasPlayAd&&!this._timeupdateTime&&(this._timeupdateTime=+new Date,
this._timeupdateTime-this._adEndedTime>0&&o.setAvg(27822,37,this._timeupdateTime-this._adEndedTime)),
d.BASE_BITSET;
},u.prototype.timeupdate=function(t,a){
var r=a.currentTime,o=this,d=o.adData,s=d.creative_type,p=this.adPlayer,h=p._getContainer(),u=h.find(".js_btn_can_close_ad"),y=h.find(".js_can_close_time"),m=h.find(".js_btn_close_ad"),A=h.find(".js_play_time");
d.close_time>=0?r>=_?(o.__hasShowCanCloseAd||(o.__hasShowCanCloseAd=!0),u.hide(),
m.show()):(u.show(),m.hide(),y.text("("+Math.round(_-r)+"s)")):u.hide();
var w=this.duration;
o._ad_play_time=1e3*r|0,A.text("("+Math.max(1,Math.floor(w-r))+"s)"),(s==l||s==c)&&this.processWhenInAdTime(),
this.reportData.forEach(function(t){
1!=t.reported&&1e3*r>=t.time&&(t.reported=1,t.report_time=o.getAdPlaytime(),t.type=o.opt.videoReportType,
e(t));
}),this.reportData2.forEach(function(t){
1!=t.reported&&1e3*r>=t.time&&(t.reported=1,n.report({
vid:o.vid,
step:t.step,
ext2:o.adVideoRet,
ad_source:o.adData.ad_source,
orderid:o.getOrderid(),
traceid:o.getTraceId(),
type:o.opt.videoReportType,
fromid:o.opt.fromid
}));
}),i(r,this.adData.report_3rd);
},u.prototype.processWhenInAdTime=function(){
var t=this.adPlayer.video,e=t.currentTime;
t&&this.lastCurrentTime&&e!=this.lastCurrentTime&&Math.abs(e-this.lastCurrentTime)>3?t.currentTime=this.lastCurrentTime:this.lastCurrentTime=e;
},u.prototype.touchVideoHandler=function(){
return this.hasPlayAd||this.hasError?d.BASE_BITSET:14;
},u.prototype.end=function(){
e({
step:5,
view_id:this.adData.view_id,
traceid:this.adData.traceid,
orderid:this.adData.orderid,
ad_source:this.adData.ad_source,
report_time:this.getAdPlaytime(),
type:this.opt.videoReportType
}),this._whenEnded(!0);
},u.prototype._whenEnded=function(t){
var e=this,i=e.player,a=e.adPlayer;
this.hasPlayAd=!0,t&&(e._adEndedTime=+new Date),a&&a._hidePlayer&&a._hidePlayer(),
i._showPlayer(),t&&i._trigger("beginPlay");
},u.prototype._whenGetAdSrc=function(t){
var e=this;
setTimeout(function(){
e.initAd?!!t&&t.call(e):e._whenGetAdSrc(t);
},500);
},u.prototype.setSize=function(t){
var e=this,i=e.adPlayer;
i&&i.setVideoCSS(t);
},u;
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("new_video/plugin/proxy.js",["new_video/plugin_base.js","biz_wap/jsapi/core.js","pages/version4video.js"],function(e){
"use strict";
function i(e){
y.invoke("videoProxySetPlayerState",{
webviewVideoProxyPlayState:e
},function(){});
}
function o(e){
try{
1==parent.window.logs.video_cnt&&y.invoke("videoProxyStopPlay",{
webviewVideoProxyPlaydataId:e
},function(e){
console.log("videoProxyStopPlay resp: "+JSON.stringify(e));
});
}catch(i){}
}
function t(e,i,o){
i=i||"",i=["uin:"+parent.window.user_uin,"resp:"+i].join("|"),e=41>e&&u.device.is_ios?e+8:e;
try{
(o||w)&&((new window.Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random());
}catch(t){
if(window.__moon_report){
var r=[c.join(""),";userAgent:"+parent.window.navigator.userAgent];
window.__moon_report([{
offset:8,
log:r.join(""),
e:t
}]);
}
}
}
function r(e){
var i=u.device.is_ios?116:142,o=u.device.is_ios?x.ios:x.android;
y.invoke("reportIDKey",{
idKeyDataInfo:[{
id:i,
key:o[e],
value:"1"
}]
},function(){});
}
function n(e){
var i=0,o=+new Date-e;
o/=1e3,o>0&&1>=o?i=1:o>1&&3>=o?i=2:o>3&&7>=o?i=3:o>7&&15>=o?i=4:o>15&&(i=5),e&&i&&r(i);
}
function a(e){
if(e){
var i=0;
switch(e.code){
case S:
i=6;
break;

case h:
i=7;
break;

case m:
i=8;
break;

case I:
i=9;
}
i&&r(i);
}
}
function l(e){
b++,y.invoke("videoProxyInit",{},function(i){
try{
console.log("videoProxyInit callback,resp:"+JSON.stringify(i));
}catch(o){}
return 3>b&&u.device.is_android&&(!i.err_msg||-1==i.err_msg.indexOf("videoProxyInit"))?void l(e):void e(i);
});
}
var s,c=["modle_init_typeof_image:","undefined"==typeof Image?"undefined":_typeof(Image),";modle_init_typeof_winimage:",_typeof(window.Image),";modle_init_typeof_topwinimage:",_typeof(parent.window.Image)],d=e("new_video/plugin_base.js"),y=e("biz_wap/jsapi/core.js"),u=e("pages/version4video.js"),p=parent.window.navigator.userAgent.match(/MicroMessenger\/((\d+)(\.\d+)*)/),f=p&&p[1]||0,v=5,P=6,_=7,g=8,w=Math.random()>.75,x={
ios:[2,3,4,5,6,7,12,13,14,15],
android:[45,40,41,42,43,44,50,51,52,53]
},S=1,h=2,m=3,I=4,b=0;
s="object"==_typeof(parent.window._playerProxyPluginData)?parent.window._playerProxyPluginData:parent.window._playerProxyPluginData={
callbacks:[],
hasInited:!1,
initing:!1,
initResult:"default"
},!u.isUseProxy()||s.hasInited||s.initing||(s.initing=!0,t(32),l(function(e){
s.hasInited=!0,0==e.videoProxyInitResult?s.initResult="success":(s.initResult="fail",
u.modifyExper(!1,!0));
for(var i=s.callbacks,o=null;o=i.shift();)o&&"function"==typeof o._getLocalSrc&&o._getLocalSrc();
t(41),e.err_msg&&e.err_msg.indexOf("function_not_exist")>0&&t(28),e.err_msg&&-1!=e.err_msg.indexOf("function_not_exist")||0==e.videoProxyInitResult||t(29,JSON.stringify(e),!0);
}));
var T=function(e){
var i=this,o=e.data;
i.cdnUrl=e.cdn_url,i.fileId=e.vid+"."+o.formatid,i.fileSize=o.file_size,i.duration=1*o.time|0,
i.lastWaiting=0,i.useProxy=u.isUseProxy(),i._whenInit(),t(25),y.on("onH5VideoProxyReInit",function(e){
console.log("onH5VideoProxyReInit",e),0===e.videoProxyInitResult?y.invoke("videoProxyStartPlay",{
webviewVideoProxyCdnUrls:i.cdnUrl,
webviewVideoProxyFileId:i.fileId,
webviewVideoProxyFileSize:i.fileSize,
webviewVideoProxyFileDuration:i.duration,
webviewVideoProxyFileType:"1"
},function(e){
i.localSrc=e.videoProxyPlayLocalUrl,i.playId=e.videoProxyPlayDataId,i.player.setSrcWithTime(i.localSrc);
}):i.player.setSrcWithTime(i.cdnUrl);
});
};
return d.inherit(T,d.Class),T.prototype.init=function(){
this.hasInit=!1;
},T.prototype._getLocalSrc=function(){
var e=this;
"success"==s.initResult?(t(42),e._videoProxyStartPlayCallbacked=0,setTimeout(function(){
0==e._videoProxyStartPlayCallbacked&&t(43);
},2e3),y.invoke("videoProxyStartPlay",{
webviewVideoProxyCdnUrls:e.cdnUrl,
webviewVideoProxyFileId:e.fileId,
webviewVideoProxyFileSize:e.fileSize,
webviewVideoProxyFileDuration:e.duration,
webviewVideoProxyFileType:"1"
},function(i){
e.localSrc=i.videoProxyPlayLocalUrl,e.playId=i.videoProxyPlayDataId,e.useProxy=!!e.localSrc,
e.__getLocalSrcCallback&&e.__getLocalSrcCallback(),e.useProxy?t(26):t(30,JSON.stringify(i),!0),
e._videoProxyStartPlayCallbacked=1;
})):(e.useProxy=!1,e.__getLocalSrcCallback&&e.__getLocalSrcCallback());
},T.prototype._whenInit=function(){
var e=this;
s.hasInited?e._getLocalSrc():s.callbacks.push(e);
},T.prototype._whenGetLocalSrc=function(e){
var i=this;
i.localSrc||!i.useProxy?(e&&setTimeout(e,1),i.__getLocalSrcCallback=null):i.__getLocalSrcCallback=e;
},T.prototype.preload=function(e){
var i=this;
if(f>="6.3")y.invoke("videoProxyPreload",{
webviewVideoProxyPlaydataId:i.playId,
webviewVideoProxyPreloadTime:""+e
},function(o){
try{
console.log("videoProxyPreload callback,playId:"+i.playId+",sec:"+e+",resp:"+JSON.stringify(o));
}catch(t){}
o.err_msg.indexOf("videoProxyPreload:ok");
});else{
var o;
!function(){
var t=function r(){
o.buffered.length&&o.buffered.end(0)>e&&(o.removeEventListener("progress",r),o=null);
};
o=document.createElement("video"),o.setAttribute("src",i.localSrc||i.cdnUrl),o.setAttribute("preload","auto"),
o.addEventListener("progress",t);
}();
}
t(45);
},T.prototype.preloadHandler=function(){
var e=this;
return u.isUseAd()&&-1==parent.window.location.search.indexOf("&preload=0")&&e._whenGetLocalSrc(function(){
e.preload(10);
}),d.BASE_BITSET;
},T.prototype.loadingHandler=function(e,i){
var o=this,t=o.player;
return o.hasInit||!o.useProxy?d.BASE_BITSET:(o._whenGetLocalSrc(function(){
o.hasInit=!0,o.localSrc?(u.proxyPreloadExper()&&u.proxyPreloadExper().isUsePreload&&t.setSrc(o.localSrc),
t._trigger("loaded",{
autoplay:i&&i.autoplay
})):t._trigger("loading",i);
}),t.showLoading(),14);
},T.prototype.readyBeginPlayHandler=function(){
var e=this,i=this.player;
return e.useProxy?(i.setSrc(this.localSrc),i._trigger("beginPlay"),14):d.BASE_BITSET;
},T.prototype._getRemainTime=function(){
for(var e=this.player.video,i=e.currentTime,o=e.buffered,t=o&&o.length||0,r=0;t>r;r++){
var n=o.start(r),a=o.end(r);
if(i>=n&&a>=i){
var l=a-i;
return l;
}
}
},T.prototype._syncRemainTime=function(){
var e=this,i=0|e._getRemainTime();
y.invoke("videoProxySetRemainTime",{
webviewVideoProxyPlaydataId:e.playId,
webviewVideoProxyRemainTime:i||0
},function(){}),e.remainTimer=setTimeout(function(){
e._syncRemainTime();
},1e3);
},T.prototype.canplayHandler=function(){
return this.useProxy&&(this.canPlay=!0),d.BASE_BITSET;
},T.prototype.beginPlayHandler=function(){
{
var e=this,i=e.player;
i._getContainer(),i.video;
}
return e.useProxy&&(e.remainTimer=setTimeout(function(){
e._syncRemainTime();
},1e3),t(27),this.setPlayBufferCnt=0),d.BASE_BITSET;
},T.prototype.playHandler=function(){
return this.useProxy&&(i(P),this.canPlay&&n(this.lastWaiting),this.lastWaiting=0),
d.BASE_BITSET;
},T.prototype.replayHandler=function(){
var e=this;
return e.useProxy?(e.localSrc="",e._whenInit(),e._whenGetLocalSrc(function(){
e.player.setSrc(e.localSrc||e.cdnUrl),e.player._afterReplay();
}),14):d.BASE_BITSET;
},T.prototype.pauseHandler=function(){
return this.useProxy&&i(v),d.BASE_BITSET;
},T.prototype.waitingHandler=function(){
return this.useProxy&&this.canPlay&&(i(_),this.setPlayBufferCnt++,this.lastWaiting=+new Date,
r(0)),console.log("waiting event triggered in proxy plugin.",this.useProxy,this.canPlay),
d.BASE_BITSET;
},T.prototype.errorHandler=function(){
var e=this,r=this.player;
return this.useProxy&&(i(g),a(r.video&&r.video.error),t(31,null,!0),o(e.playId)),
d.BASE_BITSET;
},T.prototype.endHandler=function(){
{
var e=this;
e.player;
}
if(e.useProxy){
clearTimeout(e.remainTimer);
var i=this.setPlayBufferCnt+72;
i=i>78?78:i,t(i,null,!0);
}
return d.BASE_BITSET;
},T;
});define("pages/report.js",["biz_wap/utils/ajax.js","pages/version4video.js"],function(e){
"use strict";
function i(e){
var i=["/mp/pagereport?type=","undefined"==typeof e.type?1:e.type,"&comment_id=",e.comment_id||"","&voiceid=",e.voiceid||"","&action=",e.action,"&__biz=",parent.window.biz||"","&mid=",parent.window.mid||"","&idx=",parent.window.idx||"","&scene=",parent.window.scene||"","&t=",Math.random()].join("");
s({
type:"GET",
url:i,
timeout:2e4
});
}
function t(e){
s({
type:"POST",
url:"/mp/videoreport?#wechat_redirect",
timeout:5e3,
async:e.async===!0?!0:!1,
data:e.data
});
}
function o(e){
for(var i=JSON.parse(JSON.stringify(e.data)),t=[],o=0,n=i.seek_position.length;n>o;o++){
var a=i.seek_position[o];
if(a&&a.length>0){
var d=a.join("#");
t.push(d||"");
}else t.push("");
}
i.seek_position=t;
for(var r=[],o=0,n=i.seek_loaded.length;n>o;o++){
var a=i.seek_loaded[o];
if(a&&a.length>0){
var d=a.join(",");
r.push(d||"");
}else r.push("");
}
i.seek_loaded=r;
for(var p=[],c=30;i.musicid.length>0;){
var a={};
for(var o in i)i.hasOwnProperty(o)&&("[object Array]"==Object.prototype.toString.call(i[o])?(a[o]=i[o].splice(0,c),
a[o]=a[o].join("mtitle"==o?";#":";")):a[o]=i[o]);
p.push(a);
}
return p;
}
function n(e){
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(parent.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=1009&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",d(),"&val=","undefined"!=typeof e.val?e.val:"","&val1=","undefined"!=typeof e.val1?e.val1:"","&vurl=",encodeURIComponent(e.vurl),"&t=",Math.random(),"&url=",t,"&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
function a(e){
if(3==e.step||6==e.step||1999==e.step){
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(parent.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=",e.step,"&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",d(),"&loadwait=","undefined"!=typeof e.loadwait?e.loadwait:"","&val=","undefined"!=typeof e.val?e.val:"","&t=",Math.random(),"&url=",t,"undefined"!=typeof e.vt&&""!==e.vt&&6==e.step?"&vt="+e.vt:"","&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
}
function d(){
var e=_.device;
return e.ipad?60101:e.is_android_phone?60301:e.iphone?60401:e.is_android_tablet?60501:"";
}
function r(){
var e=_.device;
return e.ipad?"v4010":e.is_android_phone&&_.isUseProxy()?"v5060":e.is_android_phone?"v5060":e.iphone&&_.isUseProxy()?"v3060":e.iphone?"v3060":e.is_android_tablet?"v6010":"";
}
function p(e){
var i={
mid:window.mid||0,
__biz:window.biz||0,
idx:window.idx||0,
musicid:[],
hasended:[],
commentid:[],
scene_type:e.type||0,
mtitle:[],
detail_click:[],
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
errorcode:[],
seek:[],
seek_position:[],
duration2:[],
play_duration2:[],
play_last_time:[],
local_time:[],
seek_loaded:[]
};
return i;
}
function c(){
var e={
videoerror:0,
like_kv_vid:"",
like_click_vid:"",
like_kv_alginfo:"",
like_click_alginfo:"",
tad:"",
page:0,
like_click_type:0,
iplat:2,
ptype:1,
rtype:"",
getvinfo_ret:-1,
getvinfo_time:0,
v_err_code:0,
loadwait:0,
hasended:0,
last_ms:0,
duration_ms:0,
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
mid:"",
__biz:"",
idx:"",
detail_click:0,
vtitle:"",
vid:"",
commentid:"",
scene_type:0,
replay:0,
full_screen:0,
quick_play:0,
ad_play_time:-1,
video_play_time:-1,
click_play_button:0,
traceid:"",
webviewid:"",
orderid:0,
play_time:0,
client_time_when_play:Math.round(+new Date/1e3),
drag_times:"",
pause_num:0,
h5_profile:0,
to_article:0,
desc_more_click:0,
desc_more_show:0,
fromid:0,
openid:window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",
file_size:0,
rate:0,
resolution:0,
format:"",
vt:"",
video_ext:"unknown",
content_url:parent.window.location.href,
auto_play:0,
ori_status:3,
hit_bizuin:"",
sessionid:window.sessionid||"",
hit_vid:""
};
return e;
}
function l(e,i,t){
var o=0,n=[],a={};
if(i&&"[object String]"==Object.prototype.toString.call(i))o=1,"img"==t&&(i=encodeURIComponent(i)),
n.push("log0="+i),a.log0=i;else if(i&&"[object Array]"==Object.prototype.toString.call(i)){
o=i.length;
for(var d=0;o>d;d++){
var r="img"==t?encodeURIComponent(i[d]):i[d];
n.push("log"+d+"="+r),a["log"+d]=r;
}
}
if("img"==t){
var p=new Image,c="//mp.weixin.qq.com/mp/jsmonitor?idkey="+e;
o>0&&(c+="&lc="+o+"&"+n.join("&")),c+="&t="+Math.random(),p.src=c;
}else{
var l={};
o>0&&(l=a),l.idkey=e,l.lc=o,s({
type:"POST",
url:"//mp.weixin.qq.com/mp/jsmonitor?",
timeout:1e4,
data:l,
dataType:"json"
});
}
}
var s=e("biz_wap/utils/ajax.js"),_=e("pages/version4video.js");
return{
report:i,
videoreport:t,
getPlatformType:d,
getsdtfrom:r,
getinfoReport:n,
qqvideo_common_report:a,
musicreport:o,
getMusicReportData:p,
getVideoReportData:c,
logReport:l
};
});define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+d.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function o(){
return window.__second_open__?!0:-1!=p.indexOf("&_newvideoplayer=0")?!1:-1!=p.indexOf("&_newvideoplayer=1")?!0:1!=d.is_login?!1:d.use_tx_video_player?!1:_.canSupportVideo&&m.inWechat?m.is_ios||m.is_android?!0:!1:(d._hasReportCanSupportVideo||_.canSupportVideo||!m.inWechat||(d._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function n(){
{
var e=p,i=window.location.href;
d.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=d.sn&&"f62e1cb98630008303667f77c17c43d7"!=d.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=d.sn?f.isInMiniProgram?!1:-1!=e.indexOf("&_videoad=1")?!0:-1===e.indexOf("mp.weixin.qq.com/s")&&-1===e.indexOf("mp.weixin.qq.com/mp/appmsg/show")&&-1===e.indexOf("mp.weixin.qq.com/mp/authreadtemplate")?!1:"54"==d.appmsg_type?!1:-1!=i.indexOf("&xd=1")?!1:d.__appmsgCgiData&&d.__appmsgCgiData.can_use_page&&(m.is_ios||m.is_android)?!0:x.showAd()?!0:!1:!1;
}
function s(){
var e=p,i=t(),o=(new Date).getHours(),n=!1;
return d.user_uin?-1!=e.indexOf("&_proxy=0")?!1:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:(-1!=e.indexOf("&_proxy=1")&&(n=!0),
o>=9&&14>=o?!1:(m.inWechat&&m.is_android&&m.is_x5&&m.wechatVer>="6.2.2"&&(n=!0),
m.inWechat&&m.is_android&&m.is_xweb&&m.xweb_version>=16&&(n=!0),m.inWechat&&m.is_ios&&(-1!=u.indexOf("MicroMessenger/6.2.4")||m.wechatVer>="6.2.4")&&(n=!0),
n&&i&&i.isUseProxy?!0:!1)):!1;
}
function r(){
return y.networkType;
}
function t(){
var e={
isUseProxy:0,
isUsePreload:0,
experSet:0
},i=!1;
if(i||(e.experSet=1),e)switch(e.experSet){
case 1:
e.isUseProxy=0,e.isUsePreload=0;
break;

case 2:
e.isUseProxy=0,e.isUsePreload=1;
break;

case 3:
e.isUseProxy=1,e.isUsePreload=0;
break;

case 4:
e.isUseProxy=1,e.isUsePreload=1;
break;

default:
e=!1;
}
return 10>P&&a(l,!1),l||(e.isUseProxy=0),h||(e.isUsePreload=0),0==e.isUseProxy&&0==e.isUsePreload?e.experSet=1:0==e.isUseProxy&&1==e.isUsePreload?e.experSet=2:1==e.isUseProxy&&0==e.isUsePreload?e.experSet=3:1==e.isUseProxy&&1==e.isUsePreload&&(e.experSet=4),
g===!1&&(console.info("[视频代理实验]",e),g=!0),e;
}
function a(e,i){
l=e,h=i;
}
var d,p,w=e("biz_common/dom/event.js"),c=e("biz_wap/jsapi/core.js"),_=e("biz_wap/utils/device.js"),x=e("new_video/ctl.js"),f=e("biz_wap/utils/mmversion.js"),u=window.navigator.userAgent,y={
networkType:""
},m={},l=!0,h=!0,g=!1,v=function(){
var e=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
return e&&e[1]&&parseInt(e[1].split("_")[0],10);
},P=v();
if(parent==window)d=window,p=window.location.href;else try{
p=parent.window.location.href,d=parent.window;
}catch(b){
p=window.location.href,d=window;
}
return function(e){
var i=_.os;
m.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),m.is_android=!!i.android,m.is_wp=!!i.phone,
m.is_pc=!(i.phone||!i.Mac&&!i.windows),m.inWechat=/MicroMessenger/.test(e),m.inWindowWechat=/WindowsWechat/i.test(e),
m.inMacWechat=/wechat.*mac os/i.test(e),m.is_android_phone=m.is_android&&/Mobile/i.test(e),
m.is_android_tablet=m.is_android&&!/Mobile/i.test(e),m.ipad=/iPad/i.test(e),m.iphone=!m.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
m.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var o,n=/XWEB\/([\d\.]+)/i,s=e.match(n);
s&&s[1]&&(o=parseInt(s[1])),m.is_xweb=!!s,m.xweb_version=o;
var r=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
m.wechatVer=r&&r[1]||0,w.on(window,"load",function(){
if(""==y.networkType&&m.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
},i=["2g","3g","4g","2g/3g"];
c.invoke("getNetworkType",{},function(o){
y.networkType=e[o.err_msg]||"fail",window.networkType=y.networkType,("network_type:edge"==o.err_msg||"network_type:wwan"==o.err_msg)&&(o.detailtype&&i.indexOf(o.detailtype)>-1||o.subtype&&i.indexOf(o.subtype)>-1)&&(window.networkType=o.detailtype||o.subtype),
window.simType=o.simtype;
});
}
},!1);
}(window.navigator.userAgent),"undefined"==typeof d._hasReportCanSupportVideo&&(d._hasReportCanSupportVideo=!1),
{
device:m,
isShowMpVideo:o,
isUseProxy:s,
isUseAd:n,
getNetworkType:r,
proxyPreloadExper:t,
modifyExper:a
};
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
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
});define("pages/video_plugin/video_monitor.js",["pages/video_plugin/base.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js"],function(t){
"use strict";
function r(){
this._g={
reportData:{},
uid:+new Date,
random:Math.random(),
_debug:window.parent.window.location.href.indexOf("&vconsole=1")>0?!0:!1
};
}
var i=t("pages/video_plugin/base.js"),a=t("biz_wap/utils/jsmonitor_report.js"),o=t("appmsg/log.js");
return i.inherit(r,i.Class),r.prototype.init=function(){
this.setBlockEvt("initMonitor");
},r.prototype.getuid=function(){
return++this._g.uid;
},r.prototype.initDataByUid=function(t,r){
var i=this._g.reportData;
!r&&i[t]&&i[t].radio&&(r=i[t].radio),this._g.reportData[t]={
data:{},
radio:r||1
};
},r.prototype.initMonitorHandler=function(t,r,i){
var a=this.getuid()+"_"+r;
return this.initDataByUid(a,i),{
data:a,
code:7
};
},r.prototype.minusMonitorHandler=function(t,r,a){
var o=this._g.reportData[r];
if(!o||!a)return i.BASE_BITSET;
o=o.data;
for(var e in a){
var n=a[e];
a.hasOwnProperty(e)&&(o[e]||(o[e]={
key:e,
value:0
}),o[e].value=Math.max(0,o[e].value-n||1));
}
return i.BASE_BITSET;
},r.prototype.setMonitorHandler=function(t,r,a){
var o=this._g.reportData[r];
if(!o||!a)return i.BASE_BITSET;
o=o.data;
for(var e in a){
var n=a[e];
a.hasOwnProperty(e)&&(o[e]||(o[e]={
key:e,
value:0
}),o[e].value=n||1);
}
return i.BASE_BITSET;
},r.prototype.plusMonitorHandler=function(t,r,a){
var o=this._g.reportData[r];
if(!o||!a)return i.BASE_BITSET;
o=o.data;
for(var e in a)if(a.hasOwnProperty(e)){
var n=a[e];
o[e]||(o[e]={
key:e,
value:0
}),o[e].value=o[e].value+n||1;
}
return i.BASE_BITSET;
},r.prototype.clearMonitorHandler=function(t,r){
return this.initDataByUid(r),i.BASE_BITSET;
},r.prototype.sendMonitorHandler=function(t,r){
if(!r||-1==r.indexOf("_"))return i.BASE_BITSET;
var e=this._g.reportData[r];
if(!e)return i.BASE_BITSET;
if(this._g.random>e.radio&&!this._g._debug)return i.BASE_BITSET;
e=e.data;
var n=(r+"").split("_")[1];
for(var s in e)if(e.hasOwnProperty(s)){
var u=e[s];
u.value&&a.setSum(n,u.key,u.value);
}
return o("[Video] "+JSON.stringify(e)),this.initDataByUid(r),i.BASE_BITSET;
},r;
});define("pages/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n="number"!=typeof t.retry?1:t.retry,o=t.win||window,r=o.document,a=r.createElement("script"),i=t.type||"JSONP",d=r.head||r.getElementsByTagName("head")[0]||r.documentElement,l=t.callbackName,c="uninitialized",u="undefined"==typeof t.successCode?200:t.successCode,s="undefined"==typeof t.timeoutCode?500:t.timeoutCode,f="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,m=!1,p=null;
"JSONP"!=i&&"JS"!=i&&(i="JSONP");
var y="";
y="JSONP"==i?t.url+"&t="+Math.random():t.url;
var h=function(e){
a&&!m&&(m=!0,p&&(clearTimeout(p),p=null),a.onload=a.onreadystatechange=a.onerror=null,
d&&a.parentNode&&d.removeChild(a),a=null,l&&-1==l.indexOf(".")&&(window[l]=null),
"JS"==i&&e==u&&"loaded"==c&&"function"==typeof t.callback?t.callback():e!=u&&"loaded"!=c&&"function"==typeof t.onerror&&t.onerror(e));
};
if(l&&"function"==typeof t.callback&&"JSONP"==i){
var w=l;
-1==l.indexOf(".")&&(l=window[l]?l+e.counter++:l,window[l]=function(){
c="loaded",t.callback.apply(null,arguments);
}),y=y.replace("="+w,"="+l);
}
a.onload=a.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&("JS"==i&&(c="loaded"),
h("loaded"==c?u:f));
},a.onerror=function(){
return n>0?(t.retry=n-1,p&&(clearTimeout(p),p=null),void e(t)):void h(f);
},t.timeout&&(p=setTimeout(function(){
h(s);
},parseInt(t.timeout,10))),c="loading",a.charset="utf-8",setTimeout(function(){
a.src=y;
try{
d.insertBefore(a,d.lastChild);
}catch(e){}
},0);
}
return e;
});define("biz_wap/utils/ajax.js",["biz_common/utils/string/html.js","biz_common/utils/url/parse.js","biz_common/utils/respTypes.js","biz_wap/utils/ajax_wx.js"],function(require,exports,module,alert){
"use strict";
function reqType(e,t){
return e.url.indexOf(t)>-1&&-1===e.url.indexOf("action=")&&(!e.data||!e.data.action);
}
function logClientLog(e){
try{
var t;
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?t="writeLog":/(Android)/i.test(navigator.userAgent)&&(t="log"),
t&&doLog(t,e);
}catch(r){
throw console.error(r),r;
}
}
function doLog(e,t){
var r,o,a={};
r=top!=window?top.window:window;
try{
o=r.WeixinJSBridge,a=r.document;
}catch(n){}
e&&o&&o.invoke?o.invoke(e,{
level:"info",
msg:"[WechatFe][ajax]"+t
}):setTimeout(function(){
a.addEventListener?a.addEventListener("WeixinJSBridgeReady",function(){
doLog(e,t);
},!1):a.attachEvent&&(a.attachEvent("WeixinJSBridgeReady",function(){
doLog(e,t);
}),a.attachEvent("onWeixinJSBridgeReady",function(){
doLog(e,t);
}));
},0);
}
function reportRt(e,t,r){
var o="";
if(r&&r.length){
var a=1e3,n=r.length,s=Math.ceil(n/a);
o=["&lc="+s];
for(var i=0;s>i;++i)o.push("&log"+i+"=[rtCheckError]["+i+"]"+encodeURIComponent(r.substr(i*a,a)));
o=o.join("");
}
var p,c="idkey="+e+"_"+t+"_1"+o+"&r="+Math.random();
if(window.ActiveXObject)try{
p=new ActiveXObject("Msxml2.XMLHTTP");
}catch(d){
try{
p=new ActiveXObject("Microsoft.XMLHTTP");
}catch(u){
p=!1;
}
}else window.XMLHttpRequest&&(p=new XMLHttpRequest);
p&&(p.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),p.setRequestHeader("cache-control","no-cache"),
p.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.send(c));
}
function reportAjaxLength(e,t,r){
var o="";
if(r&&r.length){
var a=1e3,n=r.length,s=Math.ceil(n/a);
o=["&lc="+s];
for(var i=0;s>i;++i)o.push("&log"+i+"=[Ajax Length Limit]["+i+"]"+encodeURIComponent(r.substr(i*a,a)));
o=o.join("");
}
var p,c="idkey="+e+"_"+t+"_1"+o+"&r="+Math.random();
if(window.ActiveXObject)try{
p=new ActiveXObject("Msxml2.XMLHTTP");
}catch(d){
try{
p=new ActiveXObject("Microsoft.XMLHTTP");
}catch(u){
p=!1;
}
}else window.XMLHttpRequest&&(p=new XMLHttpRequest);
p&&(p.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),p.setRequestHeader("cache-control","no-cache"),
p.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.send(c),(new Image).src="/mp/jsmonitor?idkey="+e+"_"+t+"_1"+o+"&r="+Math.random());
}
function Ajax(obj){
var type=(obj.type||"GET").toUpperCase(),url;
url=obj.notJoinUrl?obj.url:ajaxWx.joinUrl(obj.url),"html"==obj.f&&(url=url.replace("&f=json",""));
var mayAbort=!!obj.mayAbort,async="undefined"==typeof obj.async?!0:obj.async,xhr=new XMLHttpRequest,timer=null,data=null;
if("object"==typeof obj.data){
var d=obj.data;
data=[];
for(var k in d)d.hasOwnProperty(k)&&data.push(k+"="+encodeURIComponent(d[k]));
data=data.join("&");
}else data="string"==typeof obj.data?obj.data:null;
xhr.open(type,url,async);
var _onreadystatechange=xhr.onreadystatechange;
try{
url&&url.length>LENGTH_LIMIT&&reportAjaxLength(27613,17,"ajax get limit[length: "+url.length+"]"+url.substring(0,1024));
}catch(e){}
xhr.onreadystatechange=function(){
if("function"==typeof _onreadystatechange&&_onreadystatechange.apply(xhr),3==xhr.readyState&&obj.received&&obj.received(xhr),
4==xhr.readyState){
reqType(obj,"/mp/getappmsgext")&&(window.receiveGetAppmsgExt=xhr.status+"|"+Date.now(),
logClientLog("receive appmsgext response, status: "+xhr.status)),reqType(obj,"/mp/getappmsgad")&&(window.receiveGetAppmsgAd=xhr.status+"|"+Date.now(),
logClientLog("receive appmsgad response, status: "+xhr.status)),xhr.onreadystatechange=null;
var status=xhr.status;
if(status>=200&&400>status)try{
var responseText=xhr.responseText,resp=responseText;
if("json"==obj.dataType)try{
resp=eval("("+resp+")");
var rtId=obj.rtId,rtKey=obj.rtKey||0,rtDesc=obj.rtDesc,checkRet=!0;
if(rtId&&rtDesc&&RespTypes&&!RespTypes.check(resp,rtDesc)&&reportRt(rtId,rtKey,RespTypes.getMsg()+"[detail]"+responseText+";"+obj.url),
resp&&resp.base_resp&&1*resp.base_resp.ret!==0&&"undefined"!=typeof window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&Math.random()<.001){
var reportUrl=url;
-1!==url.indexOf("?")&&(reportUrl=url.substr(0,url.indexOf("?")),Url.getQuery("action",url)&&(reportUrl=reportUrl+"?action="+Url.getQuery("action",url))),
("/mp/getappmsgext"!==reportUrl&&"/mp/getappmsgad"!==reportUrl||"undefined"!=typeof resp.base_resp.ret)&&window.WX_BJ_REPORT.BadJs.report(reportUrl,"ret="+resp.base_resp.ret,{
mid:window.PAGE_MID,
view:"wap_retcode"
});
}
}catch(e){
return void(obj.error&&obj.error(xhr,{
type:1,
error:e
}));
}
obj.success&&obj.success(resp);
}catch(e){
throw __moon_report({
offset:MOON_AJAX_SUCCESS_OFFSET,
e:e
}),e;
}else{
try{
obj.error&&obj.error(xhr,{
type:2,
error:"status error",
status:status
});
}catch(e){
throw __moon_report({
offset:MOON_AJAX_ERROR_OFFSET,
e:e
}),e;
}
if(status||!mayAbort){
var __ajaxtest=window.__ajaxtest||"0";
__moon_report({
offset:MOON_AJAX_NETWORK_OFFSET,
log:"ajax_network_error["+status+"]["+__ajaxtest+"]: "+url+";host:"+location.host,
e:""
});
}
}
clearTimeout(timer);
try{
obj.complete&&obj.complete();
}catch(e){
throw __moon_report({
offset:MOON_AJAX_COMPLETE_OFFSET,
e:e
}),e;
}
obj.complete=null;
}
},"POST"==type&&xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
obj.noXRequestedWidthHeader||xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),
"undefined"!=typeof obj.timeout&&(timer=setTimeout(function(){
xhr.abort("timeout");
try{
obj.complete&&obj.complete();
}catch(e){
throw __moon_report({
offset:MOON_AJAX_COMPLETE_OFFSET,
e:e
}),e;
}
obj.complete=null,__moon_report({
offset:MOON_AJAX_TIMEOUT_OFFSET,
log:"ajax_timeout_error: "+url,
e:""
});
},obj.timeout));
try{
xhr.send(data);
try{
data&&data.length>LENGTH_LIMIT&&reportAjaxLength(27613,18,"ajax post limit[length: "+data.length+"]"+data.substring(0,1024));
}catch(e){}
}catch(e){
obj.error&&obj.error(xhr,{
type:3,
error:e
});
}
return reqType(obj,"/mp/getappmsgext")&&(window.startGetAppmsgExtTime=Date.now(),
logClientLog("start get appmsgext, url: ",obj.url)),reqType(obj,"/mp/getappmsgad")&&(window.startGetAppmsgAdTime=Date.now(),
logClientLog("start get appmsgad, url: ",obj.url)),xhr;
}
require("biz_common/utils/string/html.js");
var Url=require("biz_common/utils/url/parse.js"),RespTypes=require("biz_common/utils/respTypes.js"),ajaxWx=require("biz_wap/utils/ajax_wx.js"),isx5=-1!=navigator.userAgent.indexOf("TBS/"),__moon_report=window.__moon_report||function(){},MOON_AJAX_SUCCESS_OFFSET=3,MOON_AJAX_NETWORK_OFFSET=4,MOON_AJAX_ERROR_OFFSET=5,MOON_AJAX_TIMEOUT_OFFSET=6,MOON_AJAX_COMPLETE_OFFSET=7,MOON_AJAX_GET_LIMIT_4K=17,MOON_AJAX_POST_LIMIT_4K=18,LENGTH_LIMIT=4096,doc={},isAcrossOrigin=!1;
try{
doc=top.window.document;
}catch(e){
isAcrossOrigin=!0;
}
return function(){
return window.__second_open__||!isAcrossOrigin&&top.window.__second_open__?ajaxWx.ajax.apply(ajaxWx,arguments):Ajax.apply(void 0,arguments);
};
});define("biz_common/utils/url/parse.js",[],function(){
"use strict";
function r(r){
var e=r.length,n=r.indexOf("?"),t=r.indexOf("#");
t=-1==t?e:t,n=-1==n?t:n;
var a=r.substr(0,n),i=r.substr(n+1,t-n-1),s=r.substr(t+1);
return{
host:a,
query_str:i,
hash:s
};
}
function e(e,n,t){
var a=r(e),i=a.query_str,s=[];
for(var o in n)n.hasOwnProperty(o)&&s.push(o+"="+(t?n[o]:encodeURIComponent(n[o])));
return s.length>0&&(i+=(""!=i?"&":"")+s.join("&")),a.host+(""!=i?"?"+i:"")+(""!=a.hash?"#"+a.hash:"");
}
function n(r,e,n,t){
r=r||location.href;
var a=r.indexOf("&"),i=r.length,s=r.replace(/^[\w\d]+:[\/\\]+/g,"").split("").reverse();
Array.prototype.indexOf||(Array.prototype.indexOf=function(r,e){
var n;
if(null==this)throw new TypeError('"this" is null or not defined');
var t=Object(this),a=t.length>>>0;
if(0===a)return-1;
var i=+e||0;
if(1/0===Math.abs(i)&&(i=0),i>=a)return-1;
for(n=Math.max(i>=0?i:a-Math.abs(i),0);a>n;){
if(n in t&&t[n]===r)return n;
n++;
}
return-1;
});
var o=i-1-s.indexOf("/");
-1!=a&&-1==r.indexOf("?")&&a>o&&(r=r.replace("&","?"));
var u=new RegExp("([\\?&]"+e+"=)[^&#]*");
if(!r.match(u)){
var h=r.indexOf("?");
return-1==h?r+"?"+e+"="+n:h==r.length-1?r+e+"="+n:r+"&"+e+"="+n;
}
return t===!0?r.replace(u,"$1"+n):r;
}
function t(r){
var e=arguments[1]||window.location.search,n=new RegExp("(^|&)"+r+"=([^&]*)(&|$)"),t=e.substr(e.indexOf("?")+1).match(n);
return null!=t?t[2]:"";
}
return{
parseUrl:r,
join:e,
addParam:n,
getQuery:t
};
});define("biz_wap/utils/mmversion.js",[],function(){
"use strict";
function n(){
for(var n=location.search.substring(1).split("&"),t={},i=0;i<n.length;i++){
var e=n[i].split("="),r=decodeURIComponent(e[0]);
"undefined"==typeof t[r]&&(t[r]=decodeURIComponent(e[1]));
}
return t;
}
function t(){
var n=/MicroMessenger\/([\d\.]+)/i,t=c.match(n);
return t&&t[1]?t[1]:!1;
}
function i(){
var t,i=/MicroMessenger\/[\d\.]+\(0x(.+?)\)/i,e=c.match(i);
return e&&e[1]&&null!=e[1]?e[1]:e&&e[1]&&null==e[1]&&(t=n(),t.version)?t.version:!1;
}
function e(n,i,e){
var r=t();
if(r){
r=r.split("."),n=n.split("."),/\d+/g.test(r[r.length-1])||r.pop();
for(var o,s,u=v["cp"+i],c=0,a=Math.max(r.length,n.length);a>c;++c){
o=r[c]||0,s=n[c]||0,o=parseInt(o)||0,s=parseInt(s)||0;
var d=v.cp0(o,s);
if(!d)return u(o,s);
}
return e||0==i?!0:!1;
}
}
function r(n){
return e(n,0);
}
function o(n,t){
return e(n,1,t);
}
function s(n,t){
return e(n,-1,t);
}
function u(){
return a?"ios":p?"android":g?"mac_os":l?"windows":"unknown";
}
var c=navigator.userAgent,a=/(iPhone|iPad|iPod|iOS)/i.test(c),d=/Windows\sPhone/i.test(c),p=/(Android)/i.test(c),f=/MicroMessenger\/([\d\.]+)/i.test(c),g=/mac\sos/i.test(c),l=/windows\snt/i.test(c)&&!d,m=p&&/miniprogram/.test(c.toLowerCase())||"miniprogram"==window.__wxjs_environment,w=f&&/wxwork/i.test(c),v={
"cp-1":function(n,t){
return t>n;
},
cp0:function(n,t){
return n==t;
},
cp1:function(n,t){
return n>t;
}
};
return{
get:t,
getInner:i,
cpVersion:e,
eqVersion:r,
gtVersion:o,
ltVersion:s,
getPlatform:u,
isWp:d,
isIOS:a,
isAndroid:p,
isInMiniProgram:m,
isWechat:f,
isMac:g,
isWindows:l,
is_wxwork:w
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("a/a_utils.js",["biz_wap/jsapi/core.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_common/dom/class.js","biz_common/utils/url/parse.js","biz_wap/utils/openUrl.js","biz_wap/utils/wapsdk.js","common/utils.js","a/a_config.js"],function(e){
"use strict";
function t(e,t){
w("/mp/ad_report?action=follow&type="+e+t);
}
function n(e,t){
h.jsmonitor({
id:115849,
key:e,
value:t
});
}
function r(e){
h.jsmonitor({
id:28307,
key:e
});
}
function i(e){
h.jsmonitor({
id:128729,
key:e
});
}
function o(e){
var t=j.AD_WEB_COMPT_REQ_PATH_WHITE_LIST.some(function(t){
return t.test(e);
});
return t;
}
function a(e){
if(!e)return"";
var t=document.createElement("a");
return t.href=e,t.hostname;
}
function s(e){
for(var t=[],n=0;n<e.length;++n){
var r=e[n],i="undefined"==typeof r?"undefined":_typeof(r);
r="string"===i?r.htmlDecode():r,"object"===i&&(r="[object Array]"===Object.prototype.toString.call(r)?s(r):p(r)),
t.push(r);
}
return t;
}
function p(e){
var t={};
for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){
var r=e[n],i="undefined"==typeof r?"undefined":_typeof(r);
r="string"===i?r.htmlDecode():r,"object"===i&&(r="[object Array]"===Object.prototype.toString.call(r)?s(r):p(r)),
t[n]=r;
}
return t;
}
function c(e,t){
var n=0;
g.isIOS?n=1:g.isAndroid&&(n=2);
var r={
creative_load_fail:[{
ts:parseInt(+new Date/1e3,10),
aid:parseInt(e.info.aid,10),
img_url:encodeURIComponent(t),
network_type:window.networkType,
errmsg:"",
os_type:n,
client_version:parseInt(window.clientversion,10),
traceid:e.info.traceid
}]
};
r=JSON.stringify(r),l({
url:"/mp/advertisement_report?action=extra_report&extra_data="+r+"&__biz="+window.biz,
timeout:2e3
});
}
function d(e,t){
var n={
ad_sign_data:t.adSignData,
ad_sign_k1:t.adSignK1,
ad_sign_k2:t.adSignK2,
ad_sign_md5:t.signMd5
};
return v.join(e,n,!0);
}
function u(e,t,n,r){
try{
e.postMessage(JSON.stringify({
action:t,
value:n
}),r||"*");
}catch(i){
console.log("postMessage error",i);
}
}
function m(e,t){
if(!e||!e.flow_exp_info)return"";
var n=e.flow_exp_info||"";
try{
n=JSON.parse(n.replace(/&quot;/g,'"'));
}catch(r){
return"";
}
if(!n.length)return"";
for(var i=0;i<n.length;i++)if(n[i].exp_para&&n[i].exp_para.length)for(var o=0;o<n[i].exp_para.length;o++)if(n[i].exp_para[o].name===t)return n[i].exp_para[o].value;
return null;
}
function _(e){
if(!e||!e.crt_exp_info)return{};
var t=e.crt_exp_info.htmlDecode(),n={};
try{
n=JSON.parse(t);
}catch(r){
n={},console.error("getCrtExpInfo fail: ",r);
}
return n;
}
var f=e("biz_wap/jsapi/core.js"),l=e("biz_wap/utils/ajax.js"),g=e("biz_wap/utils/mmversion.js"),w=e("biz_common/utils/report.js"),y=e("biz_common/dom/class.js"),v=e("biz_common/utils/url/parse.js"),b=e("biz_wap/utils/openUrl.js").openUrlWithExtraWebview,h=e("biz_wap/utils/wapsdk.js"),x=e("common/utils.js"),j=e("a/a_config.js"),z="pos_",S=[" ","-","(",":",'"',"'","：","（","—","－","“","‘"],O=["wximg.qq.com","wximg.gtimg.com","pgdt.gtimg.cn","mmsns.qpic.cn","mmbiz.qpic.cn","vweixinthumb.tc.qq.com","pp.myapp.com","wx.qlog.cn","mp.weixin.qq.com"],k=[350064395,3194181833,3191183081,3191008240,459315e3,2547206501,17516575,3194183798,3193008987,3191008237,3190008366,1314021127,3190008373,3192140177,3193183025,3191138746,3192008231,3191138747,3191138743,3193183023,3193183029,3192138635,3190138969,3192138631,3194182870,3192138630,3194182869,3192138629,3192138628,3193183024,3191138744,3192138627,3194182868,3193183031,3192138634,3190138972,3191138745,3192138633,3193183030,3190138971,3193183028,3193183027,3193183026,3190138970,3192138632,3192184240,3194248804,388382775,3193008989,3193008986,3194241008,3193240873,3193240874,3190179574],I={
report:t,
report115849:n,
report128729:i,
checkRequestUrlAllowed:o,
saveCopy:p,
saveCopyArr:s,
joinSignParam:d,
postMessage:u,
getCrtExpInfo:_,
getExpParaVal:m,
checkShowCpc:function(e,t,n,r){
if(t)return!0;
if(!e)return!1;
var i=x.getInnerHeight(),o=i/2,a=e.offsetTop,s=n.offsetHeight,p=void 0;
if(o>a?p=1:i>a&&(p=2),p&&r){
var c=JSON.stringify({
biz_middle_not_exp:[{
scene:p,
traceid:r.traceid,
aid:+r.aid,
appmsg_id:+window.appmsgid,
item_idx:+window.idx
}]
});
l({
url:"/mp/advertisement_report?action=extra_report&extra_data="+c+"&__biz="+window.biz,
timeout:2e3
});
}
return o>a||o>s-a?!1:!0;
},
openWebAppStore:function(e,t){
return x.getIosMainVersion()>=12?void f.invoke("launchApplication",{
schemeUrl:e
},function(){}):void f.invoke("downloadAppInternal",{
appUrl:e
},function(n){
n.err_msg&&-1!==n.err_msg.indexOf("ok")||b("/mp/ad_redirect?url="+encodeURIComponent(e)+"&ticket="+t);
});
},
adOptReport:function(e,t,n,r){
var i=v.join("/mp/ad_complaint",{
action:"report",
type:e,
pos_type:t,
trace_id:n,
aid:r,
__biz:window.biz,
r:Math.random()
},!0);
w(i);
},
checkAdImg:function(e){
if(e){
var t=e.image_url||"",n=a(t);
n&&-1===O.indexOf(n)&&r(58);
}
},
formName:function(e){
for(var t=-1,n=0,r=S.length;r>n;++n){
var i=S[n],o=e.indexOf(i);
-1!==o&&(-1===t||t>o)&&(t=o);
}
return-1!==t&&(e=e.substring(0,t)),e;
},
formSize:function(e){
return"number"!=typeof e?e:(e>=1024?(e/=1024,e=e>=1024?(e/1024).toFixed(2)+"MB":e.toFixed(2)+"KB"):e=e.toFixed(2)+"B",
e);
},
isItunesLink:function(e){
return/^https?:\/\/(itunes|apps)\.apple\.com\//.test(e);
},
extend:function(e,t){
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);
return e;
},
getPosKeyDesc:function(e,t){
var n=t?e+"_"+t:e;
return z+n;
},
openCanvasAd:function(e){
f.invoke("openADCanvas",{
canvasId:e.canvasId,
preLoad:0,
noStore:0,
extraData:JSON.stringify({
pos_type:e.pos_type
}),
adInfoXml:e.adInfoXml
},function(n){
0!==Number(n.ret)?(b(e.url),t(135,e.report_param)):t(134,e.report_param);
});
},
setBackgroundClass:function(){
window._has_comment||0!==window.adDatasRealNum||window._share_redirect_url||window.is_temp_url?y.removeClass(document.body,"rich_media_empty_extra"):y.addClass(document.body,"rich_media_empty_extra");
},
lazyLoadAdImg:function(e){
for(var t=document.getElementsByClassName("js_alazy_img"),n=function(n){
var i=t[n];
i.onload=function(){
r(54),i.src.indexOf("retry")>-1&&r(69);
},i.onerror=function(){
-1===i.src.indexOf("retry")?i.src=v.addParam(i.src,"retry",1):!function(){
r(98);
var t="other";
g.isIOS?t="iphone":g.isAndroid&&(t="android"),setTimeout(function(){
var n=window.networkType||"unknow",r=v.join("/tp/datacenter/report",{
cmd:"report",
id:900023,
uin:777,
os:t,
aid:e.aid,
image_url:encodeURIComponent(i.src),
type:e.type,
network:n
},!0);
l({
url:r,
async:!0
});
},500),c(e,i.src);
}(),r(57);
},i.src=i.dataset.src;
},i=0;i<t.length;i++)n(i);
},
reportUrlLength:function(e,t,r,i,o,a,s){
var p=d(s,{
adSignData:e,
adSignK1:t,
adSignK2:r,
signMd5:i,
viewidKeyObj:o
});
if(p.length>=4e3){
n(13);
var c=JSON.stringify({
biz_log_report:[{
pos_type:+a.pos_type,
traceid:a.tid,
aid:+a.aid,
log_type:1,
ext_info:"[url length:"+p.length+"]"+s.substring(0,2e3)
}]
});
l({
url:"/mp/advertisement_report?action=extra_report",
timeout:2e3,
data:{
extra_data:c,
__biz:window.biz
},
type:"post"
});
}
},
isVideoSharePageOnlyAd:function(){
return"5"===window.item_show_type&&"ad"===v.getQuery("render_type");
},
listenMessage:function(e,t,n){
arguments.length<3&&(n=t,t=null);
var r=function(e){
var r=void 0;
if(!t||e.origin===t){
if("object"!==_typeof(e.data))try{
r=JSON.parse(e.data);
}catch(i){
return;
}else r=e.data;
"function"==typeof n&&n(e,r);
}
};
return e.addEventListener("message",r),r;
},
removeListen:function(e,t){
e.removeEventListener("message",t);
},
isSample:function(e){
return k.indexOf(window.user_uin)>-1?!0:window.user_uin&&window.user_uin/100%1e3<=10*e?!0:!1;
},
broadcastFrame:function(e,t,n,r){
e=e||[];
for(var i=0;i<e.length;i++){
var o=e[i].src||e[i].getAttribute("data-realsrc");
(!r||r&&o.indexOf(r)>-1)&&u(e[i].contentWindow,t,n);
}
}
};
return I;
});