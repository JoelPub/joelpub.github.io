define("pages/audition_tpl.html.js",[],function(){
return'<div id="js_music_dialog">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog">\n        <div class="weui-dialog__bd"><#=msg#></div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:void(0);" class="weui-dialog__btn weui-dialog__btn_primary js_submit">我知道了</a>\n        </div>\n    </div>\n</div>';
});define("pages/player_tips.js",["biz_common/tmpl.js","pages/audition_tpl.html.js","biz_common/dom/event.js"],function(t){
"use strict";
function i(t){
this.parent=document.body,this.opt=t||{},this.init();
}
var n=t("biz_common/tmpl.js"),e=t("pages/audition_tpl.html.js"),o=t("biz_common/dom/event.js");
return i.prototype.init=function(){
var t=document.createElement("div");
t.innerHTML=n.tmpl(e,this.opt,!1),this.parent.appendChild(t),this.dom=document.getElementById("js_music_dialog");
var i=this;
o.on(i.dom.getElementsByClassName("js_submit")[0],"click",function(){
i.parent.removeChild(t),"function"==typeof i.opt.onClick&&i.opt.onClick();
});
},i;
});define("biz_common/utils/emoji_panel_data.js",[],function(){
"use strict";
return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"17_1",18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,300,301,302,303,304,305,306,307,204,205,202,206,212,211,313,314,315,316,317,318,319,320,321,322,323,330,329,328,327,326,325,65,66,67,78,79,80,81,82,83,84,85,89,309,310,56,57,60,68,63,64,55,70,74,75,76,311,77,209,324,215,62,308,92,93,94,95];
});define("pages/video_communicate_adaptor.js",["pages/player_tips.js"],function(t){
"use strict";
function e(){
window.addEventListener("message",i,!1),p();
}
function i(t){
var e;
if(t.origin?e=t.origin:t.originalEvent&&(e=t.originalEvent.origin),/^http(s)?\:\/\/mp\.weixin\.qq\.com$/.test(e)&&t.source){
var i=t.data;
if(i&&i.type){
if(!/^mpvideo_/.test(i.type))return;
var o=i.type.replace(/^mpvideo_/,"");
/^broadcast_/.test(o)?u.postMessageEvt.broadcast({
data:i.data,
type:o
}):u.postMessageEvt[o]&&u.postMessageEvt[o](i.data);
}
}
}
function o(t){
var e=t.type.replace(/^broadcast_/,""),i=d();
if(i.length>0)for(var o=0,a=i.length;a>o;o++){
var r=i[o];
n({
win:r.contentWindow,
type:e,
data:t.data
});
}
n({
win:window,
type:e,
data:t.data
});
}
function n(t){
var e=t.type;
/^mpvideo_/.test(e)||(e="mpvideo_"+e);
var i={
data:t.data,
type:e
};
t.win.postMessage(i,document.location.protocol+"//mp.weixin.qq.com");
}
function a(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
t.msg&&new f({
msg:t.msg
});
}
function r(t){
for(var e=d({
vid:t.vid
}),i=0,o=e.length;o>i;i++){
var a=e[i];
a.style.display="";
var r=a.parentNode,s=r.querySelectorAll('.js_img_loading[data-vid="'+t.vid+'"]');
if(s&&s.length>0)for(var i=0,o=s.length;o>i;i++)r.removeChild(s[i]);
n({
type:"afterRemoveLoading",
win:a.contentWindow
});
}
}
function d(t){
t=t||{};
for(var e=document.getElementsByTagName("iframe"),i=[],o=0,n=e.length;n>o;o++){
var a=e[o],r=a.getAttribute("src");
if(window.__second_open__&&(r=a.getAttribute("data-realsrc")),r&&-1!=r.indexOf("/mp/videoplayer")){
if("undefined"!=typeof t.vid){
var d=r.match(/[\?&]vid\=([^&]*)/);
if(!d||!d[1]||d[1]!=t.vid)continue;
}
i.push(a);
}
}
return i;
}
function s(t){
if(t.height){
var e=d({
vid:t.vid
});
if(0!=e.length){
var i=e[0],o=i.offsetHeight+1*t.height;
i.setAttribute("height",o),i.setAttribute("data-additionalheight",t.height),i.style.setProperty&&i.style.setProperty("height",o+"px","important");
}
}
}
function v(t){
u.videoInfo[t.vid]||(u.videoInfo[t.vid]={}),u.videoInfo[t.vid].ori_status=t.ori_status,
u.videoInfo[t.vid].hit_bizuin=t.hit_bizuin,u.videoInfo[t.vid].hit_vid=t.hit_vid;
}
function p(){
"function"==typeof window.__getVideoWh&&window.addEventListener("resize",function(){
for(var t=d(),e=0,i=t.length;i>e;e++){
var o=t[e];
setTimeout(function(t){
return function(){
var e=window.__getVideoWh(t),i=e.w,o=e.h,n=1*t.getAttribute("data-additionalheight");
n&&(o+=n),t.setAttribute("width",i),t.setAttribute("height",o),t.style.setProperty&&(t.style.setProperty("width",i+"px","important"),
t.style.setProperty("height",o+"px","important"));
};
}(o),50);
}
},!1);
}
function g(){
return u.videoInfo;
}
var f=t("pages/player_tips.js"),u={
videoInfo:{},
postMessageEvt:{
broadcast:o,
removeVideoLoading:r,
addVideoIframeHeight:s,
videoInited:v,
showTips:a
}
};
return e(),{
getVideoInfo:g
};
});define("pages/scrollY.js",["pages/utils.js"],function(n){
"use strict";
var e=n("pages/utils.js"),t=window.requestAnimationFrame,o=0;
["webkit","moz","ms","o"].some(function(n){
return t?!0:(t=t||window[n+"RequestAnimationFrame"],!1);
}),t||(t=function(n){
var e=(new Date).getTime(),t=Math.max(0,16-(e-o));
return o=e+t,window.setTimeout(function(){
return n(e+t);
},t);
});
var i={
easeOutSine:function(n){
return Math.sin(n*(Math.PI/2));
},
easeInOutSine:function(n){
return-.5*(Math.cos(Math.PI*n)-1);
},
easeInOutQuint:function(n){
return n/=.5,1>n?.5*Math.pow(n,5):.5*(Math.pow(n-2,5)+2);
},
easeInOutCubic:function(n){
return.5>n?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1;
}
},r=function(n,e){
void 0===e?(document.documentElement.scrollTop=n,document.body.scrollTop=n):e.scrollTop=n;
},u=function(n){
return void 0===n?e.getScrollTop():n.scrollTop;
};
return function(n){
var e=n.el,o=n.y,a=n.distance,s=n.speed,c=n.duration,d=n.easing,f=void 0===d?"easeOutSine":d,l=n.begin,m=n.end;
"function"==typeof l&&l();
var v=u(e),p=0;
if(void 0!==o)a=o-v;else{
if(void 0===a)return void console.error("need param `y` or `distance`.");
o=a+v;
}
void 0===s&&(s=void 0!==c?a/c:2e3);
var h=Math.max(.1,Math.min(Math.abs(v-o)/s,.8)),w=function M(){
p+=1/60;
var n=p/h,u=i[f](n);
1>n?(t(M),r(v+(o-v)*u,e)):(r(o,e),"function"==typeof m&&m());
};
w();
};
});define("appmsg/related_article_feedback.js",["biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","common/utils.js"],function(e){
"use strict";
function t(e,t){
for(;!e.parentNode.className.match(t);)e=e.parentNode;
return e.parentNode||"";
}
function i(e){
this.container=e.container,this.biz=e.biz,this.mid=e.mid,this.idx=e.idx,this.vid=e.vid,
this.isVideo=e.isVideo,this.dislikeCb=e.dislikeCb,s["top"===e.position?"addClass":"removeClass"](this.container.querySelector(".js_dialog_wrp"),"feedback_dialog_pos_top"),
this.bindEvent();
}
function a(e){
var a=e.container;
n.on(a,"touchstart",".js_feedback_btn",function(e){
e.stopPropagation();
},!0),n.on(a,"touchend",".js_feedback_btn",function(e){
e.stopPropagation();
},!0),n.on(a,"click",".js_feedback_btn",function(a){
a.stopPropagation();
var o=a.delegatedTarget,s=t(o,"js_related_item"),n=268;
l=new i({
container:s,
biz:e.biz,
mid:e.mid,
idx:e.idx,
isVideo:e.isVideo,
vid:e.vid,
position:r.getInnerHeight()-s.getBoundingClientRect().bottom<n?"top":"bottom",
dislikeCb:e.dislikeCb
}),l.show();
},!0);
}
var o=e("biz_wap/utils/ajax.js"),s=e("biz_common/dom/class.js"),n=e("biz_common/dom/event.js"),d=e("biz_common/utils/url/parse.js"),r=e("common/utils.js"),l=null;
return i.prototype.bindEvent=function(){
var e=this,i=this.container,a=this.biz,r=this.mid,l=this.idx,c=i.getAttribute("data-url"),u=new Set,_=new Set,m=i.querySelector(".js_submit");
this.tabClickEventHandler=function(e){
e.stopPropagation(),e.preventDefault();
var t=e.delegatedTarget,i=t.getAttribute("data-value");
s.hasClass(t,"js_reason")&&(i*=1),s.hasClass(t,"feedback_tag_selected")?(s.removeClass(t,"feedback_tag_selected"),
s.hasClass(t,"js_reason")?u.delete(i):_.delete(i)):(s.addClass(t,"feedback_tag_selected"),
s.hasClass(t,"js_reason")?u.add(i):_.add(i)),0===u.size&&0===_.size?s.addClass(m,"weui-btn_disabled"):s.removeClass(m,"weui-btn_disabled");
},this.submitDataHandler=function(n){
n.stopPropagation(),n.preventDefault();
var m=n.target;
if(!s.hasClass(m,"weui-btn_disabled")){
var h={
tacitly:Array.from(u),
keyword:Array.from(_)
},b={
biz_from:a,
mid_from:r,
idx_from:l,
recommended_biz:d.getQuery("__biz",c),
mid:d.getQuery("mid",c),
idx:d.getQuery("idx",c),
reason:JSON.stringify(h)
},p="/mp/relatedarticle?action=dislike";
e.isVideo&&(b.vid_from=e.vid,b.vid=i.getAttribute("data-vid"),p="/mp/video_similar?action=dislike"),
o({
type:"POST",
url:p,
dataType:"json",
data:b,
success:function(i){
if(console.log(i),i&&i.base_resp&&0===i.base_resp.ret){
e.hide(m);
var a=t(m,"js_related_item");
e.dislikeCb(a);
}else window.weui.alert("系统错误，请稍后重试");
}
});
}
},this.maskHandler=function(t){
t.stopPropagation(),t.preventDefault(),e.hide(t.target);
},this.maskTouchMoveHandler=function(e){
e.stopPropagation(),e.preventDefault();
},this.stopPropagationHandler=function(e){
e.stopPropagation();
},n.on(i,"click",".js_tag_item",this.tabClickEventHandler,!0),n.on(m,"click",this.submitDataHandler,!0),
n.on(i,"click",".js_mask",this.maskHandler,!0),n.on(i,"touchmove",".js_mask",this.maskTouchMoveHandler,!0),
n.on(i,"touchmove",".js_dialog_wrp",this.maskTouchMoveHandler,!0),n.on(i,"click",".js_dialog_wrp",this.maskTouchMoveHandler,!1),
n.on(i,"touchstart",".js_feedback_dialog",this.stopPropagationHandler,!0),n.on(i,"touchend",".js_feedback_dialog",this.stopPropagationHandler,!0);
},i.prototype.show=function(){
this.container.querySelector(".js_feedback_dialog").style.display="",s.addClass(this.container.querySelector(".js_feedback_dialog"),"feedback_dialog_show");
},i.prototype.hide=function(){
var e=this.container,t=e.querySelector(".js_submit");
n.off(e,"click",this.tabClickEventHandler,!0),n.off(t,"click",this.submitDataHandler,!0),
n.off(e,"click",this.maskHandler,!0),n.off(e,"touchmove",this.maskTouchMoveHandler,!0),
n.off(e,"click",this.maskTouchMoveHandler,!1),s.removeClass(this.container.querySelector(".js_feedback_dialog"),"feedback_dialog_show");
},{
init:a
};
});define("appmsg/related_article_item.html.js",[],function(){
return'<# list.forEach(function(item, idx) { #>\n  <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg js_related_item"\n    data-index="<#=begin+idx#>"\n    data-url="<#=item.url#>"\n    data-time="<#=item.send_time#>"\n    data-recalltype="<#=item.recall_type#>"\n    data-isreaded="<#=item.is_readed#>"\n    data-bizuin="<#=item.bizuin#>"\n    data-mid="<#=item.mid#>"\n    data-idx="<#=item.idx#>"\n    data-item_show_type="<#=item.item_show_type#>"\n    data-exptype="<#=item.exptype#>"\n    data-ext_info="<#=item.ext_info#>"\n  >\n    <div class="weui-media-box__bd">\n      <!---\n      原生省略号无法实现多行省略号后接其它信息的效果\n      模拟省略号组件：style/widget/ellipsis.less\n      为了实现标题在省略号后显示标签，要做份假数据用来获取相同位置\n      另增加两种状态：省略号后不带标签、三个字标签\n      -->\n      <div class="ellipsis_relate_title weui_ellipsis_mod_wrp\n        <# if (item.is_pay_subscribe) { #>\n          <# if (item.is_paid) { #>\n          relate_article_pay\n          <# } else { #>\n          <# } #>\n        <# } else { #>\n          relate_article_default\n        <# } #>\n      ">\n        <div class="weui_ellipsis_mod">\n          <div class="weui_ellipsis_mod_inner">\n            <#=item.title#>\n            <# if (item.is_pay_subscribe) { #>\n              <# if (item.is_paid) { #>\n                <span class="pay__tag">已付费</span>\n              <# } else { #>\n                <span class="unpay__tag">付费</span>\n              <# } #>\n            <# } #>\n          </div>\n        </div>\n        <div class="weui_ellipsis_fake_mod">\n          <div class="weui_ellipsis_fake_inner">\n            <#=item.title#>\n            <# if (item.is_pay_subscribe) { #>\n              <# if (item.is_paid) { #>\n                <span class="pay__tag">已付费</span>\n              <# } else { #>\n                <span class="unpay__tag">付费</span>\n              <# } #>\n            <# } #>\n          </div>\n          <div class="weui_ellipsis_fake_placeholder"></div>\n          <div class="weui_ellipsis_fake_extra">...\n            <# if (item.is_pay_subscribe) { #>\n              <# if (item.is_paid) { #>\n                <span class="pay__tag">已付费</span>\n              <# } else { #>\n                <span class="unpay__tag">付费</span>\n              <# } #>\n            <# } #>\n          </div>\n        </div>\n      </div>\n      <div class="weui-media-box__info">\n        <div class="weui-media-box__info__inner">\n          <div class="weui-media-box__info__meta">\n            <# if (item.old_like_num >= 10) { #>\n              赞 <#=item.like_num_wording#>            <# } else if (item.is_pay_subscribe && item.pay_cnt) { #>\n              付费 <#=item.pay_cnt_wording#>            <# } else if (item.read_num) { #>\n              阅读 <#=item.read_num_wording#>            <# } #>\n          </div>\n          <div class="js_profile relate_profile relate_article_panel_active" data-username="<#=item.username#>">\n            <div class="weui-media-box__info__meta">\n              <span class="relate_profile_nickname">\n                <#=item.nickname#>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class="relate_article_opr">\n          <button type="button" class="reset_btn dislike_btn js_feedback_btn">不喜欢</button>\n        </div>\n        <!-- 去掉display:none;改用样式默认隐藏，加classnamme:feedback_dialog_show显示 -->\n        <div class="feedback_dialog_wrp js_feedback_dialog">\n          <div class="weui-mask js_mask"></div>\n          <!-- 底部时弹窗向上，加.feedback_dialog_pos_top -->\n          <div class="feedback_dialog js_dialog_wrp">\n            <div class="feedback_dialog_hd weui-flex">\n              <div class="weui-flex__item feedback_dialog_title">不看的原因</div>\n              <button type="button" class="weui-btn weui-btn_primary weui-btn_mini weui-btn_disabled js_submit">确定</button>\n            </div>\n            <div class="feedback_dialog_bd">\n              <ul class="feedback_tag_list">\n                <!-- 选中时tag加.feedback_tag_selected -->\n                <# reason.forEach(function(r) { #>\n                  <li class="feedback_tag_item js_reason js_tag_item" data-value="<#=r.value#>"><#=r.name#></li>\n                <# }); #>\n                <# item.keyword.forEach(function(k,i) { #>\n                  <# if (i<2) { #>\n                    <li class="feedback_tag_item js_keyword js_tag_item" data-value="<#=k#>">对<#=k#>不感兴趣</li>\n                  <# } #>\n                <# }); #>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="weui-media-box__ft" style="background-image:url(<#=item.cover#>)"></div>\n  </a>\n<# }); #>';
});define("appmsg/related_article_tpl.html.js",[],function(){
return'<div class="relate_mod_transition function_mod js_related_area" style="opacity: 1; overflow: hidden; height: 0;">\n  <div class="function_mod_index js_related_main">\n      <div class="function_hd js_related_title">\n        <# if (type === \'share\') { #> <!-- 分享 -->\n          分享此内容的人还喜欢        <# } else if (type === \'favorite\') { #> <!-- 收藏 -->\n          收藏此内容的人还喜欢        <# } else if (type === \'praise\' || type === \'like\') { #> <!-- 点赞/在看 -->\n          喜欢此内容的人还喜欢        <# } else { #> <!-- 其它 -->\n          喜欢此内容的人还喜欢        <# } #>\n      </div>\n      <div class="function_bd">\n          <div class="relate_article_list relate_article_placeholder js_related_placeholder">\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n              <div class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box_placeholder"></div></div>\n          </div>\n          <div class="relate_article_index_list relate_article_list js_related_list" style="height: auto;"></div>\n      </div>\n  </div>\n</div>\n';
});define("appmsg/i18n.js",[],function(e,n){
"use strict";
n.dealLikeReadShow_en=function(e){
if("undefined"==typeof LANG||!LANG)return 0===parseInt(e)?"":e;
if("en"==LANG){
var n="";
if(parseInt(e)>1e5)n="100k+";else if(parseInt(e)>1e4&&parseInt(e)<=1e5){
var r=""+parseInt(e)/1e3,t=r.indexOf(".");
n=-1===t?r+"k":r.substr(0,t)+"."+r.charAt(t+1)+"k";
}else n=0===parseInt(e)?"":e;
return n;
}
return"";
};
});define("album/utils/report.js",["common/comm_report.js"],function(e){
"use strict";
var i=e("common/comm_report.js"),o=window.WX_BJ_REPORT||{},r=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r={
BizUin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
ItemShowType:1*window.item_show_type||0,
SessionId:window.sessionid+"",
EnterId:1*window.enterid,
Scene:1*window.source,
SubScene:1*window.subscene,
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
Vid:e.vid,
Audioid:e.audioid||"",
Title:e.title||""
};
i.report(19647,r,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19647",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:r,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},n=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r={
BizUin:window.biz,
Scene:1*window.source,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SceneNote:e.sceneNote+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
IfSubscription:1*e.isSubscribed===1?2:1,
NewTagId:e.tagId+"",
ShowTag:e.showTag+"",
InsideTag:e.insideTag+"",
Cate1:e.c1+"",
Cate2:e.c2+"",
StayTime:e.stayTime?1*e.stayTime:0,
NetworkType:1*e.networkType
};
i.report(19648,r,{
async:e.async||!0,
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19648",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:r,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},d=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r={
BizUin:window.biz,
MsgId:1*e.msgid,
ItemIdx:1*e.itemidx,
Pos:1*e.pos,
Scene:178,
SubScene:1*window.subscene,
EnterId:1*window.enterid,
SceneNote:e.sceneNote+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
EventType:1*e.eventType,
Vid:e.vid,
IfSubscription:1*e.isSubscribed===1?2:1,
NewTagId:e.tagId+"",
ShowTag:e.showTag+"",
InsideTag:e.insideTag+"",
Cate1:e.c1+"",
Cate2:e.c2+"",
ArticleSource:1
};
i.report(19649,r,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 19649",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:r,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
}),1*e.eventType===1&&!function(){
var r={
BizUin:window.biz,
MsgId:1*e.msgid,
ItemIdx:1*e.itemidx,
AppMsgUrl:e.url,
Title:e.title,
IsReaded:1*e.isRead,
Scene:1*window.source,
SubScene:1*window.subscene
};
i.report(20805,r,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 20805",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:r,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
}();
},t=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r={
bizuin:window.biz,
url:e.url+"",
ActionType:1*e.actionType,
Scene:1*window.source,
Network:window.__networkType+"",
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
ExpType:window.exptype||"",
ExpSessionIdStr:window.expsessionid||""
};
i.report(10380,r,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 10380",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:r,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
},s=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r={
BizUin:window.biz,
Action:1*e.action,
AppMsgLikeType:window.appmsg_like_type,
Scene:1*window.source,
SubScene:1*window.subscene,
AlbumId:e.albumId+"",
AlbumType:1*e.albumType,
ExpType:window.exptype||"",
ExpSessionIdStr:window.expsessionid||""
};
i.report(14299,r,{
success:function(e){
1*e.err_code!==0&&"undefined"!=typeof o&&o.BadJs&&o.BadJs.report("mmdata report failed","log_id: 14299",{
mid:"mmbizwap:album_Monitor",
_info:{
postData:r,
errCode:e.err_code,
errMsg:e.err_msg
}
});
}
});
};
return{
cardReport:r,
albumActionReport:n,
articleActionReport:d,
shareReport:t,
likeReport:s
};
});define("biz_common/utils/wxgspeedsdk.js",[],function(){
"use strict";
function e(e){
if(!e.pid||!e.speeds)return-1;
if(!e.speeds.length>0){
var n=e.speeds;
e.speeds=[],e.speeds.push(n);
}
e.user_define&&(p=e.user_define);
for(var t=d(e),o=0;o<e.speeds.length;o++){
var r=e.speeds[o];
r.time=parseInt(r.time),r.sid>20&&r.time>=0&&i(t,r.sid,r.time);
}
}
function n(){
s(function(){
setTimeout(function(){
for(var e in u)r({
pid_uin_rid:e,
speeds:u[e],
user_define:p
},c);
u={};
},100);
});
}
function t(e){
s(function(){
if(!e.pid||!e.time)return-1;
var n=d(e);
i(n,9,e.time);
});
}
function o(e){
s(function(){
var n=d(e);
u[n]||(u[n]=[]);
var t=window.performance||window.msPerformance||window.webkitPerformance||{};
if(t&&t.timing){
var o=t.timing||{};
i(n,1,o.domainLookupEnd-o.domainLookupStart),i(n,2,"https:"==location.protocol&&0!=o.secureConnectionStart?o.connectEnd-o.secureConnectionStart:0),
i(n,3,o.connectEnd-o.connectStart),i(n,4,o.responseStart-o.requestStart),i(n,5,o.responseEnd-o.responseStart),
i(n,6,o.domContentLoadedEventStart-o.domLoading),i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),
i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart),function(){
setTimeout(function(){
o.loadEventEnd&&(i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart));
},0);
}(u),u[n][9]||i(n,9,o.domContentLoadedEventStart-o.navigationStart),i(n,10,o.redirectEnd-o.redirectStart),
i(n,11,o.domainLookupStart-o.fetchStart),i(n,12,o.domLoading-o.responseStart);
}
});
}
function i(e,n,t){
u[e]=u[e]||[],u[e][n]=u[e][n]||[],0>t||(21>n?u[e][n][0]=t:u[e][n].push(t));
}
function d(e){
return e&&e.pid?e.pid+"_"+(e.uin||0)+"_"+(e.rid||0):void(console&&console.error("Must provide a pid"));
}
function r(e,n){
var t=e.pid_uin_rid.split("_");
if(3!=t.length)return void(console&&console.error("pid,uin,rid, invalid args"));
var o="pid="+t[0]+"&uin="+t[1]+"&rid="+t[2];
e.user_define&&(o+="&user_define="+e.user_define);
for(var i=n+o+"&speeds=",d="",r=[],s=1;s<e.speeds.length;s++)if(e.speeds[s]){
for(var a=0;a<e.speeds[s].length;a++){
var p=s+"_"+e.speeds[s][a];
i.length+d.length+p.length<1024?d=d+p+";":(d.length&&r.push(i+d.substring(0,d.length-1)),
d=p+";");
}
s==e.speeds.length-1&&r.push(i+d.substring(0,d.length-1));
}
for(var s=0;s<r.length;s++)(new Image).src=r[s];
}
function s(e){
"complete"==document.readyState?e():f.push(e);
}
function a(){
for(var e=0;e<f.length;e++)f[e]();
f=[];
}
var p,u={},c="https://badjs.weixinbridge.com/frontend/reportspeed?",f=[];
return window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent&&window.attachEvent("onload",a),
{
saveSpeeds:e,
send:n,
setFirstViewTime:t,
setBasicTime:o
};
});define("biz_wap/jsapi/app.js",["biz_wap/jsapi/core.js"],function(n){
"use strict";
var a=n("biz_wap/jsapi/core.js"),o={
getInstallState:function(n,o){
a.invoke("getInstallState",n,o);
},
launch3rdApp:function(n,o){
a.invoke("launch3rdApp",n,o);
},
addDownloadTask:function(n,o){
a.invoke("addDownloadTask",n,o);
},
cancelDownloadTask:function(n,o){
a.invoke("cancelDownloadTask",n,o);
},
queryDownloadTask:function(n,o){
a.invoke("queryDownloadTask",n,o);
},
installDownloadTask:function(n,o){
a.invoke("installDownloadTask",n,o);
},
downloadStateChange:function(n){
a.on("wxdownload:state_change",n);
}
};
return o;
});define("biz_wap/utils/log.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js"],function(i){
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
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
function t(t,r){
if(null===t)return{};
for(var o={},e=Object.keys(t),n=0;n<e.length;n++){
var i=e[n];
r.indexOf(i)>=0||(o[i]=t[i]);
}
return o;
}
function r(t){
var r=[],o=null;
for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.push(o+"="+encodeURIComponent(t[o]));
return r.join("&");
}
var o=[],e="/mp/jsmonitor?#wechat_redirect",n={};
return window.__monitor?window.__monitor:(n._reportOptions={
idkey:{}
},n.getReportData=function(t){
t=t||{};
var r,e,i=n._reportOptions.idkey||{},p=null;
try{
for(p in i)Object.prototype.hasOwnProperty.call(i,p)&&i[p]&&o.push(p+"_"+i[p]);
}catch(a){
return!1;
}
if(0===o.length)return!1;
try{
var c=n._reportOptions;
if(null!==c&&void 0!==c)for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(r[e]=c[e]);
}catch(a){
r={};
}
return r.idkey=o.join(";"),r.t=Math.random(),t.remove!==!1&&(o=[],n._reportOptions={
idkey:{}
}),r;
},n.setLogs=function(r){
var o=r.id,e=r.key,i=r.value,p=t(r,["id","key","value"]),a=n._reportOptions.idkey||{},c=o+"_"+e;
a[c]?a[c]+=i:a[c]=i,n._reportOptions.idkey=a;
try{
if(null!==p&&void 0!==p)for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(n._reportOptions[s]=p[s]);
}catch(u){
console.log(u);
}
return n;
},n.setAvg=function(t,r,o){
var e=n._reportOptions.idkey||{},i=t+"_"+r,p=t+"_"+(r-1);
return e[i]?e[i]+=o:e[i]=o,e[p]?e[p]+=1:e[p]=1,n._reportOptions.idkey=e,n;
},n.setSum=function(t,r,o){
var e=n._reportOptions.idkey,i=t+"_"+r;
return e[i]?e[i]+=o:e[i]=o,n._reportOptions.idkey=e,n;
},n.send=function(t,o){
t!==!1&&(t=!0);
var i=n.getReportData();
i&&(o&&o instanceof Function?o({
url:e,
type:"POST",
mayAbort:!0,
data:i,
async:t,
timeout:2e3
}):(new Image).src=location.origin+"/mp/jsmonitor?"+r(i)+"#wechat_redirect");
},window.__monitor=n,n);
});define("biz_wap/utils/ajax_load_js.js",["biz_wap/utils/ajax.js","biz_wap/utils/localstorage.js"],function(e){
"use strict";
function n(e){
var n=d(e.url,e.version),o=function(){},i=function(){};
if("function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(i=e.onError),
c(e.win,n))return void o({
code:1,
queueIndex:0
});
if(e.useCache){
var a=u(e.url,e.version);
if(a&&t({
win:e.win,
funcStr:a,
useCache:!1,
url:e.url,
version:e.version
}),c(e.win,n))return void o({
code:2,
queueIndex:0
});
}
if(S.callbackQueue.push({
options:e,
onSuccess:o,
onError:i
}),"undefined"==typeof S.jsLoadState[n]&&(S.jsLoadState[n]=-1),-1==S.jsLoadState[n]){
var s=e.url;
s+=-1==s.indexOf("?")?"?"+S.customerParam+"="+e.version:"&"+S.customerParam+"="+e.version,
r({
originUrl:e.url,
version:e.version,
url:s,
key:n
});
}
}
function r(e){
S.jsLoadState[e.key]=1,w({
url:e.url,
notJoinUrl:!0,
timeout:1e4,
type:"POST",
dataType:"text",
noXRequestedWidthHeader:!0,
success:function(n){
if(1==S.jsLoadState[e.key]){
S.jsLoadState[e.key]=-1;
var r=!0;
r=n?t({
win:null,
funcStr:n,
useCache:!0,
url:e.originUrl,
version:e.version
}):!1,o(r?{
code:3,
type:"suc",
funcStr:n
}:{
code:51,
type:"err"
});
}
},
error:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:52,
type:"err"
}));
},
complete:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:53,
type:"err"
}));
}
});
}
function t(e){
var n=e.win||window,r=!0;
try{
n.eval(e.funcStr),r=!0;
}catch(t){
r=!1;
}
return r?(s({
url:e.url,
version:e.version,
win:n
}),e.useCache&&a(e.url,e.version,e.funcStr),!0):(l({
url:e.url,
version:e.version,
win:n
}),i(e.url),!1);
}
function o(e){
for(var n=0,r=S.callbackQueue.length;r>n;n++){
var o=S.callbackQueue[n],u=o.options,i=u.win,a=d(u.url,u.version);
"suc"==e.type?(e.funcStr&&!c(i,a)&&t({
win:i,
funcStr:e.funcStr,
useCache:!1,
url:u.url,
version:u.version
}),o.onSuccess({
code:e.code,
queueIndex:n
})):o.onError({
code:e.code,
queueIndex:n
});
}
S.callbackQueue=[];
}
function u(e,n){
var r=f(e),t=y.get(r);
if(!t)return null;
var o;
try{
o=JSON.parse(t);
}catch(u){}
if(o){
var a=+new Date,c=1*o.time;
return a-c>S.lsTimeout||o.version!=n||!o.func?(i(e),null):o.func;
}
}
function i(e){
var n=f(e);
y.remove(n);
}
function a(e,n,r){
var t={
version:n,
func:r,
time:+new Date
},o=f(e);
try{
y.set(o,JSON.stringify(t));
}catch(u){}
}
function c(e,n){
return e=e||window,e[S.winCacheKey]&&e[S.winCacheKey][n]&&e[S.winCacheKey][n].state===!0?!0:!1;
}
function s(e){
var n=d(e.url,e.version),r=e.win||window;
r[S.winCacheKey]||(r[S.winCacheKey]={}),r[S.winCacheKey][n]||(r[S.winCacheKey][n]={}),
r[S.winCacheKey][n].state=!0;
}
function l(e){
var n=d(e.url,e.version),r=e.win||window;
if(r[S.winCacheKey]&&r[S.winCacheKey][n])try{
delete r[S.winCacheKey][n];
}catch(t){}
}
function f(e){
return encodeURIComponent(e);
}
function d(e,n){
return encodeURIComponent(e)+"_"+n||"";
}
function v(e){
l(e),i(e.url);
}
var w=e("biz_wap/utils/ajax.js"),y=e("biz_wap/utils/localstorage.js"),S={
jsLoadState:{},
winCacheKey:"__loadExternalJsStates__",
lsTimeout:1728e5,
customerParam:"wxv",
callbackQueue:[]
};
return{
ClearCache:v,
Load:n
};
});