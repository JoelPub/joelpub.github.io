define("appmsg/emotion/selection.js",[],function(e,n){
"use strict";
function t(e,n,t){
if(!t&&e===n)return!1;
if(e.compareDocumentPosition){
var o=e.compareDocumentPosition(n);
if(20===o||0===o)return!0;
}else if(e.contains(n))return!0;
return!1;
}
function o(e,n){
var o=n.commonAncestorContainer||n.parentElement&&n.parentElement()||null;
return o?t(e,o,!0):!1;
}
n.getSelection=function(){
return document.selection?document.selection:(window.getSelection||document.getSelection)();
},n.getRange=function(e){
var n=getSelection();
if(!n)return null;
var t=void 0;
return n.getRangeAt&&n.rangeCount?t=n.getRangeAt(0):n.getRangeAt||(t=n.createRange()),
t?e&&o(e,t)?t:e?null:t:null;
},n.setCursorToEnd=function(e){
if(e){
var n=getSelection();
n.extend&&(n.extend(e,e.length),n.collapseToEnd&&n.collapseToEnd());
}
},n.contains=t;
});define("appmsg/comment/comment_dialog/comment_dialog.html.js",[],function(){
return'<# if (deviceIsPc) { #>\n  <!-- PC自己写一个dialog并追加到body -->\n  <div class="discuss_more_pc_dialog_wrp js_comment_dialog_pc" style="display: none;">\n    <div class="discuss_more_pc_dialog">\n      <div class="discuss_more_pc_dialog_hd">\n        <strong class="discuss_more_pc_dialog_title">留言</strong>\n        <button class="discuss_more_pc_dialog_close_btn reset_btn js_close">\n          <i class="weui-icon-close"></i>\n        </button>\n      </div>\n      <div class="discuss_more_pc_dialog_bd js_bd">\n        <div class="js_bd_main">\n          <div class="discuss_media_current js_comment_list"></div> <!-- 留言列表 -->\n          <div class="discuss_more_list_area">\n            <div class="discuss_more_list_title">全部回复</div>\n            <ul class="discuss_more_list js_reply_list"></ul> <!-- 回复列表 -->\n\n            <div class="js_loading" style="display: none;">\n              <div class="weui-loadmore weui-loadmore_default">\n                <i class="weui-primary-loading"></i>\n                <span class="weui-loadmore__tips">正在加载</span>\n              </div>\n            </div>\n\n            <!-- 结束线 -->\n            <div style="display: none;">\n              <div class="weui-loadmore weui-loadmore_default weui-loadmore_line weui-loadmore_dot">\n                <span class="weui-loadmore__tips"></span>\n              </div>\n            </div>\n\n            <div class="js_empty" style="display: none;">\n              <div class="weui-loadmore weui-loadmore_default">\n                <span class="weui-loadmore__tips">暂无回复</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="weui-mask"></div>\n  </div>\n<# } else { #>\n  <!-- 手机端基于bottom_modal组件 -->\n  <div class="js_bd">\n    <div class="discuss_media_current js_comment_list"></div> <!-- 留言列表 -->\n\n    <div class="discuss_more_list_area">\n      <div class="discuss_more_list_wrp">\n        <div class="discuss_more_list_title">全部回复</div>\n        <div class="discuss_more_list js_reply_list"></div> <!-- 回复列表 -->\n      </div>\n\n      <div class="js_loading" style="display: none;">\n        <div class="weui-loadmore weui-loadmore_default">\n          <i class="weui-primary-loading"></i>\n          <span class="weui-loadmore__tips">正在加载</span>\n        </div>\n      </div>\n\n      <!-- 结束线 -->\n      <div class="js_end" style="display: none;">\n        <div class="weui-loadmore weui-loadmore_default weui-loadmore_line weui-loadmore_dot">\n          <span class="weui-loadmore__tips"></span>\n        </div>\n      </div>\n\n      <!-- 无回复 -->\n      <div class="js_empty" style="display: none;">\n        <div class="tips_global_primary discuss_more_empty_tips">\n          暂无回复        </div>\n      </div>\n    </div>\n  </div>\n<# } #>';
});define("appmsg/comment/comment_dialog/c2c_not_support_dialog.html.js",[],function(){
return'<!-- 不支持c2c回复弹窗，基于bottom_modal组件 -->\n\n<!-- bd部分 -->\n<div class="js_bd discuss_more_guide">\n  <p class="discuss_more_guide_tips">更新微信到最新版本，可以回复他人留言</p>\n  <img class="pic_discuss_more_guide" src="<#= comment_c2c_not_support_img #>" alt="">\n</div>\n\n<!-- ft部分 -->\n<div class="js_ft">\n  <a href="javascript:;" class="weui-btn weui-btn_default js_close">知道了</a>\n  <a href="javascript:;" class="weui-btn weui-btn_primary js_update">去更新</a>\n</div>\n';
});function _classCallCheck(t,o){
if(!(t instanceof o))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function t(t,o){
for(var e=0;e<o.length;e++){
var i=o[e];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);
}
}
return function(o,e,i){
return e&&t(o.prototype,e),i&&t(o,i),o;
};
}();
define("appmsg/emotion/emotion_pc.js",["biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","biz_common/dom/event.js","appmsg/emotion/emotion.js","common/utils.js","biz_wap/utils/mmversion.js","pages/utils.js","biz_common/tmpl.js","appmsg/emotion/emotion_pc.html.js"],function(t,o,e){
"use strict";
var i=t("biz_common/utils/emoji_data.js"),n=t("biz_common/utils/emoji_panel_data.js"),s=t("biz_common/dom/event.js"),a=t("appmsg/emotion/emotion.js").encode,m=t("common/utils.js"),l=t("biz_wap/utils/mmversion.js"),c=t("pages/utils.js"),r=t("biz_common/tmpl.js"),d=t("appmsg/emotion/emotion_pc.html.js"),h="js_emotion_item",u=m.getInnerHeight(),p=13,v=13,f=25.5,j=function(){
function t(o){
_classCallCheck(this,t),this.edata=[],this.emojiText={},this.isShow=!1,this.onSelect=o.onSelect,
this.initEmotionData();
var e=document.createElement("div");
e.innerHTML=r.tmpl(d,{
list:this.edata
},!1);
var i=c.qs(".js_emotion_panel",e);
document.body.appendChild(i),this.dom={
emotionSwitch:o.emotionSwitch,
emotionPanel:i,
emotionList:c.qs(".js_emotion_list",i),
input:o.input,
submit:o.submit,
tool:o.tool
},this.bindEvent();
}
return _createClass(t,[{
key:"initEmotionData",
value:function(){
var t=this,o=[];
n.forEach(function(t,e){
i.some(function(i){
return i.id===t?(o[e]=i,!0):!1;
});
});
for(var e=0;v>e;e++)for(var s=0;p>s;s++){
var a=e*p+s;
o[a]&&this.edata.push({
name:o[a].style,
title:o[a].emoji?o[a].emoji:o[a].cn,
bp:"background-position: 0 -"+a*f+"px;",
id:o[a].id
});
}
o.forEach(function(o){
t.emojiText[o.style]=o.emoji||o.cn;
});
}
},{
key:"bindEvent",
value:function(){
var t=this;
s.on(window,"resize",this.emotionPanelMove),s.tap(this.dom.emotionSwitch,function(){
t[t.isShow?"hide":"show"]();
}),s.tap(this.dom.emotionList,function(o){
for(var e=o.target;e&&e!==t.dom.emotionList&&!e.classList.contains(h);)e=e.parentNode;
e.classList.contains(h)&&"function"==typeof t.onSelect&&t.onSelect(t.edata[e.dataset.index]);
});
}
},{
key:"show",
value:function(){
this.isShow=!0;
var t=this.dom.emotionPanel;
t.style.display="",this.zoomEmotionPanel();
var o=t.getBoundingClientRect();
o.top+o.height>=u&&window.scrollTo(0,window.scrollY+o.height);
}
},{
key:"hide",
value:function(){
this.isShow=!1,this.dom.emotionPanel.style.display="none";
}
},{
key:"zoomEmotionPanel",
value:function(){
var t=this.dom.emotionPanel,o=window.getComputedStyle(c.qs(".rich_media_tool")).zoom,e=this.dom.tool.getBoundingClientRect();
t.style.left=e.right*o+"px",t.style.transform="translateX(-100%)",l.isWindows?t.style.top=window.scrollY+e.top*o+e.height*o+"px":l.isMac&&(t.style.top=(window.scrollY+e.top+e.height)*o+"px");
}
},{
key:"emotionPanelMove",
value:function(){
this.isShow&&this.zoomEmotionPanel();
}
},{
key:"textFilter",
value:function(t){
var o=document.createElement("div");
o.innerHTML=t;
for(var e="",i="",n=[],s=void 0,a=0;a<o.childNodes.length;a++){
var m=o.childNodes[a];
1===m.nodeType&&("IMG"===m.nodeName.toUpperCase()||"I"===m.nodeName.toUpperCase())&&(i=m.getAttribute("class"),
i&&(n=i.split(" "),n.length>1&&"icon_emotion_single"===n[0]&&(e=this.emojiText[n[1]],
s=document.createTextNode(e),o.replaceChild(s,m))));
}
return o.innerHTML.replace(/<br.*?>/gi,"\n").replace(/<.*?>/g,"");
}
}]),t;
}();
e.exports={
Emotion:j,
encode:a
};
});define("appmsg/comment/comment_list/item.html.js",[],function(){
return'<div class="discuss_media js_item <# if (itemType === \'reply\') { #> js_reply_item <# } else { #> js_comment_main <# } #>\n  <# if (!item.is_from_author) { #> discuss_media_user<# } #>\n  <# if (canC2CReply || (!canC2CReply && itemType === \'comment\' && item.is_from_me == 1)) { #> js_can_reply<# } #>\n  "\n\n  <# if (isOversize) { #> style="display: none;" <# } #>\n\n  <# if (itemType === \'comment\') { #>\n    data-my-id="<#=item.my_id#>"\n    data-content-id="<#=item.content_id#>"\n  <# } else { #>\n    data-my-id="<#=my_id#>"\n    data-content-id="<#=content_id#>"\n    data-reply-id="<#=item.reply_id#>"\n  <# } #>\n>\n  <div class="discuss_hd">\n    <img class="discuss_user_avatar" src="<#=item.logo_url#>">\n  </div>\n  <div class="discuss_bd">\n    <div class="weui-flex weui-flex_align-center">\n      <div class="weui-flex__item discuss_user_info <# if (item.is_from_author) { #> discuss_author_info <# } #>">\n        <div class="discuss_user_nickname"><#=item.nick_name#><# if (item.is_from_friend == 1) { #>(朋友)<# } #></div>\n        <# if (item.is_from_author) { #>\n          <i class="icon_appmsg_tag">作者</i>\n        <# } #>\n        <# if (typeof item.is_top === \'number\' && item.is_top == 1) { #><span class="icon_appmsg_tag">置顶</span><# } #>\n        <# if (!(type === \'mine\' && itemType === \'reply\' && canC2CReply) && deviceIsPc && !(item.is_elected == 1 || item.reply_is_elected == 1)) { #><span class="tips_global_primary">未精选</span><# } #>\n      </div>\n\n      <# if (!isWxWork) { #>\n        <# if (deviceIsPc) { #>\n          <!-- pc留言操作-->\n          <div class="discuss_opr discuss_opr_pc">\n            <# if (supportReply && (canC2CReply || (!canC2CReply && itemType === \'comment\' && item.is_from_me == 1))) { #>\n              <!-- 留言 输入框聚焦的时候discuss_opr_meta加commenting-->\n              <span title="回复" class="discuss_opr_meta discuss_opr_meta_comment">\n                <button class="sns_opr_btn sns_comment_btn js_<#=itemType#>_reply_pc"></button>\n              </span>\n            <# } #>\n\n            <!-- 更多 展开的时候discuss_opr_meta加openning -->\n            <span title="更多操作" class="discuss_opr_meta discuss_opr_meta_more">\n              <button class="sns_opr_btn sns_more_btn js_dropdown"></button>\n              <div class="discuss_dropdown <# if (type === \'mine\') { #>discuss_dropdown_pos_top_right<# } else { #>discuss_dropdown_pos_top_center<# } #>">\n                <# if (item.is_from_me == 1) { #>\n                  <div class="discuss_dropdown_item js_<#=itemType#>_del">删除</div>\n                <# } #>\n                <div class="discuss_dropdown_item js_<#=itemType#>_complain">投诉</div>\n              </div>\n            </span>\n\n            <# if (!(type === \'mine\' && itemType === \'reply\' && canC2CReply) && (item.is_elected == 1 || item.reply_is_elected == 1)) { #>\n              <span title="<# if ((itemType === \'comment\' && item.like_status == 1) || (itemType === \'reply\' && item.reply_like_status == 1)) { #>取消点赞<# } else { #>点赞<# } #>" class="discuss_opr_meta js_<#=itemType#>_praise <# if ((itemType === \'comment\' && item.like_status == 1) || (itemType === \'reply\' && item.reply_like_status == 1)) { #>praised<# } #>">\n                <button class="sns_opr_btn sns_praise_btn">\n                  <# if (itemType === \'comment\' && item.like_num_format !== 0) { #>\n                    <span class="sns_opr_num sns_opr_gap praise_num"><#=item.like_num_format#></span>\n                  <# } else if (itemType === \'reply\' && item.reply_like_num_format !== 0) { #>\n                    <span class="sns_opr_num sns_opr_gap praise_num"><#=item.reply_like_num_format#></span>\n                  <# } else { #>\n                    <span class="sns_opr_num sns_opr_gap praise_num"></span>\n                  <# } #>\n                </button>\n              </span>\n            <# } #>\n          </div>\n        <# } else { #>\n          <!-- 移动端留言操作-->\n          <div class="discuss_opr">\n            <# if (item.is_from_me == 1) { #>\n              <a class="discuss_opr_meta discuss_del js_<#=itemType#>_del">删除</a>\n            <# } #>\n\n            <# if (supportReply && (canC2CReply || (!canC2CReply && itemType === \'comment\' && item.is_from_me == 1))) { #>\n              <a class="discuss_opr_meta">回复</a>\n            <# } #>\n\n            <# if (!(type === \'mine\' && itemType === \'reply\' && canC2CReply)) { #>\n              <# if (item.is_elected == 1 || item.reply_is_elected == 1) { #>\n                <span class="discuss_opr_meta js_<#=itemType#>_praise <# if ((itemType === \'comment\' && item.like_status == 1) || (itemType === \'reply\' && item.reply_like_status == 1)) { #>praised<# } #>">\n                  <button class="sns_opr_btn sns_praise_btn">\n                    <# if (itemType === \'comment\' && item.like_num_format !== 0) { #>\n                      <span class="sns_opr_num sns_opr_gap praise_num"><#=item.like_num_format#></span>\n                    <# } else if (itemType === \'reply\' && item.reply_like_num_format !== 0) { #>\n                      <span class="sns_opr_num sns_opr_gap praise_num"><#=item.reply_like_num_format#></span>\n                    <# } else { #>\n                      <span class="sns_opr_num sns_opr_gap praise_num"></span>\n                    <# } #>\n                  </button>\n                </span>\n              <# } else { #>\n                <span class="discuss_opr_meta">未精选</span>\n              <# } #>\n            <# } #>\n          </div>\n        <# } #>\n      <# } #>\n    </div>\n\n    <div class="discuss_message">\n      <span class="discuss_status"><#=item.status#></span>\n      <div class="discuss_message_content"><#=item.content#></div>\n    </div>\n\n    <!-- 预览上次回复内容 -->\n    <# if (item.to_nick_name && item.to_content) { #>\n      <div class="discuss_reply_primary">\n        <div class="discuss_reply_primary_inner">\n          <# if (item.to_reply_del_flag === 0) { #>\n            <strong class="discuss_reply_nickname"><#=item.to_nick_name#>: </strong>\n            <p class="discuss_reply_content js_to_content"><#=item.to_content#></p>\n          <# } else { #>\n            <p class="discuss_reply_content">回复已删除</p>\n          <# } #>\n        </div>\n      </div>\n    <# } #>\n\n    <# if (type === \'comment\' || type === \'reply\') { #>\n      <div class="discuss_extra_info discuss_extra_info_primary">\n        <#=item.time#>\n      </div>\n    <# } #>\n\n    <!-- pc回复留言输入框 -->\n    <div class="discuss_reply_form_area js_input_pc"></div>\n  </div>\n</div>\n';
});define("appmsg/comment/comment_list/comment_item.html.js",[],function(){
return'<li class="js_comment_item discuss_item cid<# if (item.is_from_me == 1) { #><#=item.my_id#><# } else { #><#=item.content_id#><# } #>"\n  id="cid<# if (item.is_from_me == 1) { #><#=item.my_id#><# } else { #><#=item.content_id#><# } #>"\n  data-elected="<#=item.report_elected#>"\n  data-friend="<#=item.report_friend#>"\n  data-my-id="<#=item.my_id#>"\n  data-content-id="<#=item.content_id#>"\n\n  <# if (isOversize) { #> style="display: none;" <# } #>\n>\n  <mp-comment-item></mp-comment-item> <!-- 这里只是一个占位符而已（即虚拟节点），最终会被替换成留言节点DOM（./item.html），由于是全匹配，所以不要随便改这个虚拟节点 -->\n\n  <# if (type !== \'comment\') { #>\n    <div class="discuss_reply_area">\n      <div class="discuss_reply js_reply_list">\n        <# if (item.reply_new && item.reply_new.reply_list && item.reply_new.reply_list.length > 0) { #>\n          <mp-reply-list></mp-reply-list> <!-- 这里只是一个占位符而已（即虚拟节点），最终会被替换成多个回复节点DOM（./item.html），由于是全匹配，所以不要随便改这个虚拟节点 -->\n        <# } #>\n      </div>\n\n      <# if (type !== \'mine\') { #>\n        <div class="discuss_extra_info js_more_reply" <# if (item.reply_new.reply_total_cnt === 0 || item.reply_new.reply_total_cnt === item.reply_new.reply_list.length) { #> style="display: none;" <# } #>>\n          <a href="javascript:;" class="js_extend_comment">共<span class="js_reply_length"><#=item.reply_new.reply_total_cnt#></span>条回复</a>\n        </div>\n      <# } #>\n    </div>\n  <# } #>\n</li>';
});define("common/actionSheet.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","common/navShadow.js","biz_wap/utils/mmversion.js"],function(n){
"use strict";
n("biz_wap/ui/weui.js");
var i=n("biz_wap/jsapi/core.js"),o=n("common/navShadow.js"),e=n("biz_wap/utils/mmversion.js"),t=e.isAndroid,c=function(n){
o.show(),window.weui.actionSheet(n.buttons,[{
label:"取消",
onClick:function(){
"function"==typeof n.cancel&&n.cancel();
}
}],{
onClose:function(){
o.hide();
}
});
};
return{
show:function(n){
if(!t)return void c(n);
var o={};
i.invoke("handleMPPageAction",{
action:"showActionSheet",
buttons:n.buttons.map(function(n,i){
var e=""+i;
return o[e]=n.onClick,{
id:e,
label:n.label
};
})
},function(i){
/:ok$/.test(i.err_msg)?"function"==typeof o[i.id]&&o[i.id]():/:canceled$/.test(i.err_msg)?"function"==typeof n.cancel&&n.cancel():"action isn't supported"===i.err_desc||"action not support"===i.err_desc?c(n):"function"==typeof n.fail&&n.fail(i.err_msg);
});
}
};
});var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var i=arguments[e];
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);
}
return t;
};
define("pages/bottom_input_bar.js",["biz_wap/zepto/zepto.js","page/pages/bottom_input_bar.css","biz_wap/jsapi/log.js","biz_wap/jsapi/core.js","biz_common/utils/emoji_panel_data.js","biz_common/utils/emoji_data.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","biz_common/dom/event.js","appmsg/set_font_size.js"],function(require,exports,module,alert){
"use strict";
function BottomInputBar(t){
this.opt={
placeholder:"",
limit:0
},this.opt=_extends(this.opt,t),this.state={
inChooseEmoji:!1,
listener:{},
limit:this.opt.limit,
show:!1,
keyboardHeight:0,
androidTriggeringEmoji:!1,
androidShowingKeybroad:!1,
androidOriWinInnerHeight:window.innerHeight,
androidMinWinInnerHeight:window.innerHeight
},this.__isComposition=!1,this.__mount(),this.__bindEvent();
}
require("biz_wap/zepto/zepto.js"),require("page/pages/bottom_input_bar.css");
var Log=require("biz_wap/jsapi/log.js"),JSAPI=require("biz_wap/jsapi/core.js"),panelData=require("biz_common/utils/emoji_panel_data.js"),emojiData=require("biz_common/utils/emoji_data.js"),mmversion=require("biz_wap/utils/mmversion.js"),Device=require("biz_wap/utils/device.js"),DomEvent=require("biz_common/dom/event.js"),fontSize=require("appmsg/set_font_size.js"),getEmojiText=function getEmojiText(emoji){
for(var i=0;i<emojiData.length;i++){
var e=emojiData[i];
switch(emoji){
case e.cn:
return e.emoji||e.cn;

case e.hk:
return e.emoji||e.hk;

case e.us:
return e.emoji||e.us;

case e.emoji:
return e.emoji;

case e.code:
return e.emoji||e.cn;

default:
if(!mmversion.isIOS&&e.code.startsWith("\\ue"))try{
var c=eval("'"+e.code+"'");
if(emoji===c)return e.emoji||e.cn;
}catch(err){}
}
}
return"";
},getRealHeightOfIOSNativePanel=function(t,e){
JSAPI.invoke("handleDeviceInfo",{
action:"getUIParams"
},function(i){
var n=t;
i.isShowBottomBar&&(n-=i.bottomBarHeight),n=Math.max(n,0),"function"==typeof e&&e(n);
});
},androidNavigationBarHeight=0;
mmversion.isAndroid&&!function(){
var t=function(){
JSAPI.invoke("handleMPPageAction",{
action:"getNavigationBarHeight"
},function(t){
androidNavigationBarHeight=t.height||0;
});
};
t(),document.addEventListener("visibilitychange",function(){
!document.hidden&&t();
});
}();
var tpl='<div class="comment__push__container"><div class="js_bottom_input_mask comment__push__mask" style="display: none;"></div><div class="js_bottom_input_wrapper comment__push" style="opacity: 0;"><div class="comment__push__wrp"><div class="js_bottom_input_faker comment__push__input__faker"></div><textarea class="js_bottom_input comment__push__input"></textarea></div><div class="comment__push__extend"><a href="javascript:;" class="js_bottom_input_emoji comment__push__emoji"></a><a href="javascript:;" class="js_bottom_input_submit comment__push__send">发送</a></div></div></div>';
return BottomInputBar.prototype.__mount=function(){
this.$el=$(tpl),mmversion.isAndroid&&fontSize.keepNormalFontSizeForAndroid(this.$el[0]),
this.inputEle=this.$el.find(".js_bottom_input")[0],this.$mask=this.$el.find(".js_bottom_input_mask"),
this.$inputWrapper=this.$el.find(".js_bottom_input_wrapper"),0!==this.state.limit&&this.inputEle.setAttribute("maxlength",this.state.limit),
this.inputEle.setAttribute("placeholder",this.__filterContent(this.opt.placeholder)),
mmversion.isIOS||this.__initEmojiPanel(),document.body.append(this.$el[0]);
},BottomInputBar.prototype.__bindEvent=function(){
var t=this;
DomEvent.tap(this.$inputWrapper[0],function(e){
e.target!==t.inputEle&&e.preventDefault();
}),DomEvent.tap(this.$mask[0],function(e){
console.log("hide[mask tap]"),Log.info("hide[mask tap]"),t.hide(),e.preventDefault();
}),DomEvent.tap(this.inputEle,function(e){
t.state.inChooseEmoji&&(t.__triggerEmojiPanel(),e.preventDefault());
}),DomEvent.on(this.inputEle,"focus",function(){
t.__emit("focus");
}),DomEvent.on(this.inputEle,"compositionstart",function(){
t.__isComposition=!0;
}),DomEvent.on(this.inputEle,"compositionend",function(){
t.__isComposition=!1,t.__emit("input",{
data:t.getContent(),
inputType:"setContent"
});
}),DomEvent.on(this.inputEle,"blur",function(){
mmversion.isIOS&&!t.state.inChooseEmoji&&(console.log("hide[input blur]"),Log.info("hide[input blur]"),
t.hide()),t.__emit("blur");
}),DomEvent.on(this.inputEle,"input",function(e){
t.__emit("input",{
data:e.target.value,
inputType:"inputContent"
});
}),DomEvent.tap(this.$el.find(".js_bottom_input_submit")[0],function(e){
t.__onSend(),e.preventDefault();
}),DomEvent.tap(this.$el.find(".js_bottom_input_emoji")[0],function(e){
t.__triggerEmojiPanel(),e.preventDefault();
}),window.addEventListener("resize",function(){
t.state.androidTriggeringEmoji?(t.state.androidTriggeringEmoji=!1,t.state.keyboardHeight=Math.max(window.innerHeight-t.state.keyboardHeight,0),
t.$el.find(".js_bottom_input_emoji_panel").css({
height:t.state.keyboardHeight
}),t.$inputWrapper.css({
opacity:1,
bottom:t.state.keyboardHeight
})):t.state.androidShowingKeybroad?(clearTimeout(t.__failToShowChecker),t.$inputWrapper.css({
opacity:1,
bottom:0,
left:-90===window.orientation?androidNavigationBarHeight:0,
right:90===window.orientation?androidNavigationBarHeight:0
}),t.state.show=!0,t.state.androidShowingKeybroad=!1,t.state.androidMinWinInnerHeight=window.innerHeight,
t.__emit("show")):mmversion.isIOS?(console.log("hide[resize]"),Log.info("hide[resize]"),
t.hide()):t.state.show&&(window.innerHeight>t.state.androidOriWinInnerHeight-10?(console.log("hide[resize]"),
Log.info("hide[resize]"),t.hide()):(t.state.androidMinWinInnerHeight>window.innerHeight&&(t.state.androidMinWinInnerHeight=window.innerHeight),
t.$inputWrapper.css({
bottom:window.innerHeight-t.state.androidMinWinInnerHeight
})));
}),this.__bindAppEvent();
},BottomInputBar.prototype.__bindAppEvent=function(){
var t=this;
mmversion.isIOS&&(window.addEventListener("scroll",function(){
"showing"!==t.state.show&&(console.log("hide[scroll]"),Log.info("hide[scroll]"),
t.hide());
}),JSAPI.on("onGetKeyboardHeight",function(e){
e.height&&"none"!==t.$inputWrapper.css("transform")&&(clearTimeout(t.__failToShowChecker),
getRealHeightOfIOSNativePanel(e.height,function(e){
t.state.keyboardHeight=e,t.state.show&&(t.state.show=!0,t.$inputWrapper.css({
opacity:1,
transition:"",
bottom:e,
transform:"translate3d(0, 0, 0)"
}));
}));
}),JSAPI.on("onGetSmiley",function(e){
if("[DELETE_EMOTION]"===e.smiley)return void t.delContent();
if("[DONE_EMOTION]"===e.smiley)return console.log("hide[onGetSmiley]"),Log.info("hide[onGetSmiley]"),
void t.hide();
var i=getEmojiText(e.smiley);
i&&t.insertContent(i);
}));
},BottomInputBar.prototype.__emit=function(t){
if("string"!=typeof t)return void console.error("[bottomInputBar] event must be a string");
if("input"===t&&this.__onInput(),"function"==typeof this.state.listener[t]){
for(var e,i=arguments.length,n=Array(i>1?i-1:0),o=1;i>o;o++)n[o-1]=arguments[o];
(e=this.state.listener)[t].apply(e,n);
}
},BottomInputBar.prototype.__onSend=function(){
var t=this.__filterContent(this.getContent());
t=t.replace(/\n/g," "),this.__emit("submit",t),console.log("hide[submit]"),Log.info("hide[submit]"),
this.hide(),this.clear();
},BottomInputBar.prototype.__triggerEmojiPanel=function(){
var t=this;
if(this.state.inChooseEmoji=!this.state.inChooseEmoji,mmversion.isIOS)if(this.state.inChooseEmoji)this.$el.find(".js_bottom_input_emoji").removeClass("comment__push__emoji").addClass("comment__push__keyboard"),
this.inputEle.blur(),JSAPI.invoke("showSmileyPanel",{
hidden:!1,
duration:.01
},function(e){
getRealHeightOfIOSNativePanel(e.height,function(e){
var i=parseFloat(t.$inputWrapper.css("bottom")),n=i-e;
t.$inputWrapper.css("transform","translate3d(0, "+n+"px, 0)");
});
});else{
this.$el.find(".js_bottom_input_emoji").removeClass("comment__push__keyboard").addClass("comment__push__emoji"),
JSAPI.invoke("showSmileyPanel",{
hidden:!0
},function(){});
var e=this.$inputWrapper.css("bottom"),i=this.$inputWrapper.css("transform"),n=(window.innerHeight-this.state.keyboardHeight)/2-1;
Device.os.getNumVersion()<13&&(this.state.show="showing",n=(window.innerHeight+this.state.keyboardHeight-this.$inputWrapper.offset().height)/2),
this.$inputWrapper.css({
opacity:0,
transition:"none",
bottom:n,
transform:"translate3d(0, 0, 0)"
}),this.inputEle.focus(),this.$inputWrapper.css({
bottom:e,
transform:i
}),setTimeout(function(){
t.$inputWrapper.css({
opacity:1,
transition:"",
bottom:t.state.keyboardHeight,
transform:"translate3d(0, 0, 0)"
});
});
}else this.state.androidTriggeringEmoji=!0,this.state.keyboardHeight=window.innerHeight,
this.state.inChooseEmoji?(this.$el.find(".js_bottom_input_emoji").removeClass("comment__push__emoji").addClass("comment__push__keyboard"),
this.inputEle.blur(),JSAPI.invoke("handleDeviceInfo",{
action:"hideKeyBoard"
},function(){}),setTimeout(function(){
t.$el.find(".js_bottom_input_emoji_panel").css("display","");
},200)):(this.$el.find(".js_bottom_input_emoji").removeClass("comment__push__keyboard").addClass("comment__push__emoji"),
this.$el.find(".js_bottom_input_emoji_panel").css("display","none"),this.inputEle.focus());
},BottomInputBar.prototype.__onInput=function(){
var t=this.__filterContent(this.getContent());
return this.__isComposition?void $(".js_bottom_input_faker").html(t.replace(/\n/g,"<br/>")):void this.setInputValue(t);
},BottomInputBar.prototype.__filterContent=function(t){
var e=t;
return e;
},BottomInputBar.prototype.__filterWordsLimit=function(t){
var e=t;
return e;
},BottomInputBar.prototype.addListener=function(t,e){
return"string"!=typeof t?void console.error("[BottomInputBar] event must be a string"):void(this.state.listener[t]=e);
},BottomInputBar.prototype.show=function(){
var t=this;
if(!this.state.show){
if(this.$mask.css("display",""),this.__failToShowChecker=setTimeout(function(){
t.hide(),t.__emit("fail");
},1e3),mmversion.isIOS){
JSAPI.invoke("handleMPPageAction",{
action:"opInputAccessoryView",
show:!1
},function(){});
var e=0;
Device.os.getNumVersion()<13&&(e=this.state.keyboardHeight?(window.innerHeight+this.state.keyboardHeight-this.$inputWrapper.offset().height)/2:window.innerHeight-this.$inputWrapper.offset().height),
this.$inputWrapper.css({
opacity:0,
bottom:e,
transform:"translate3d(0, 10px, 1px)"
}),this.inputEle.focus(),this.__emit("show"),this.state.show=Device.os.getNumVersion()<13?"showing":!0;
}else this.$inputWrapper.css({
opacity:0,
bottom:window.innerHeight
}),this.inputEle.focus(),this.state.androidShowingKeybroad=!0,this.state.androidOriWinInnerHeight=window.innerHeight;
var i=this.inputEle.value.length;
this.inputEle.setSelectionRange(i,i);
}
},BottomInputBar.prototype.hide=function(){
this.state.show&&(this.state.inChooseEmoji&&(this.state.inChooseEmoji=!1,this.$el.find(".js_bottom_input_emoji").removeClass("comment__push__keyboard").addClass("comment__push__emoji"),
mmversion.isIOS?JSAPI.invoke("showSmileyPanel",{
hidden:!0
},function(){}):this.$el.find(".js_bottom_input_emoji_panel").css("display","none")),
mmversion.isIOS?JSAPI.invoke("handleMPPageAction",{
action:"opInputAccessoryView",
show:!0
},function(){}):JSAPI.invoke("handleDeviceInfo",{
action:"hideKeyBoard"
},function(){}),this.$inputWrapper.attr("style","opacity: 0;"),this.$mask.css("display","none"),
this.state.show=!1,this.inputEle.blur(),this.__emit("hide"));
},BottomInputBar.prototype.setFullscreenStyle=function(t){
t?this.$el.addClass("comment__push__container__horizontal"):this.$el.removeClass("comment__push__container__horizontal");
},BottomInputBar.prototype.clear=function(){
this.setInputValue("");
},BottomInputBar.prototype.getContent=function(t,e){
return this.inputEle.value.substring(t,e);
},BottomInputBar.prototype.setLimit=function(t){
this.state.limit=t,0!==this.state.limit?this.inputEle.setAttribute("maxlength",this.state.limit):this.inputEle.removeAttribute("maxlength");
},BottomInputBar.prototype.setPlaceholder=function(t){
this.opt.placeholder=t,this.inputEle.setAttribute("placeholder",this.__filterContent(this.opt.placeholder));
},BottomInputBar.prototype.setInputValue=function(t){
this.inputEle.value=t,$(".js_bottom_input_faker").html(t.replace(/\n/g,"<br/>"));
},BottomInputBar.prototype.setContent=function(t){
var e=this.__filterContent(t);
this.setInputValue(e),this.__emit("input",{
data:t,
inputType:"setContent"
});
},BottomInputBar.prototype.insertContent=function(t){
var e=this.getContent(0,this.inputEle.selectionStart),i=this.getContent(this.inputEle.selectionEnd);
if(!(0!==this.state.limit&&t.length+e.length+i.length>this.state.limit)){
var n=this.inputEle.selectionStart+t.length,o=this.__filterContent(e+t+i);
this.setInputValue(o),this.inputEle.setSelectionRange(n,n),this.__emit("input",{
data:t,
inputType:"insertContent"
});
}
},BottomInputBar.prototype.delContent=function(){
var t=this.getContent(0,this.inputEle.selectionStart),e=this.getContent(this.inputEle.selectionEnd),i=void 0,n=void 0,o=void 0;
if(this.inputEle.selectionStart===this.inputEle.selectionEnd){
for(var s=0;s<emojiData.length;s++){
var a=emojiData[s];
if(a.cn&&t.endsWith(a.cn)){
i=t.substring(0,t.length-a.cn.length)+e,n=t.substring(t.length-a.cn.length,t.length),
o=this.inputEle.selectionStart-a.cn.length;
break;
}
if(a.hk&&t.endsWith(a.hk)){
i=t.substring(0,t.length-a.hk.length)+e,n=t.substring(t.length-a.hk.length,t.length),
o=this.inputEle.selectionStart-a.hk.length;
break;
}
if(a.us&&t.endsWith(a.us)){
i=t.substring(0,t.length-a.us.length)+e,n=t.substring(t.length-a.us.length,t.length),
o=this.inputEle.selectionStart-a.us.length;
break;
}
if(a.emoji&&t.endsWith(a.emoji)){
i=t.substring(0,t.length-a.emoji.length)+e,n=t.substring(t.length-a.emoji.length,t.length),
o=this.inputEle.selectionStart-a.emoji.length;
break;
}
}
"string"!=typeof i&&(i=t.substring(0,t.length-1)+e,n=t[t.length-1],o=this.inputEle.selectionStart-1);
}else i=t+e,n=this.getContent(this.inputEle.selectionStart,this.inputEle.selectionEnd),
o=this.inputEle.selectionStart;
i=this.__filterContent(i),this.setInputValue(i),this.inputEle.setSelectionRange(o,o),
this.__emit("input",{
data:n,
inputType:"delContent"
});
},BottomInputBar.prototype.__initEmojiPanel=function(){
for(var t=this,e=16,i=7,n=34,o=[],s={},a=[],r=0;r<panelData.length;r++)for(var p=0;p<emojiData.length;p++)if(emojiData[p].id===panelData[r]){
a[r]=emojiData[p];
break;
}
for(var r=0;i>r;r++)for(var p=0;e>p;p++){
var h=r*e+p;
a[h]&&o.push({
name:a[h].style,
title:a[h].emoji?a[h].emoji:a[h].cn,
bp:"background-position: 0 -"+h*n+"px;",
id:a[h].id
});
}
for(var r=0;r<a.length;r++)s[a[r].style]=a[r].emoji||a[r].cn;
var m=document.createDocumentFragment();
o.forEach(function(t,e){
var i=document.createElement("li"),n=document.createElement("span");
i.className="comment_primary_emotion_item js_emotion_item",i.setAttribute("data-index",e),
n.className="comment_primary_emotion",n.setAttribute("style",t.bp),n.setAttribute("text-name",t.name),
i.appendChild(n),m.appendChild(i);
}),this.$el.append('<div class="js_bottom_input_emoji_panel comment__emoji__panel" style="display: none;"></div>'),
this.$el.find(".js_bottom_input_emoji_panel").append(m);
var u=void 0;
DomEvent.on(this.$el.find(".js_bottom_input_emoji_panel")[0],"touchstart",function(t){
u=t.changedTouches[0].clientY;
}),DomEvent.on(this.$el.find(".js_bottom_input_emoji_panel")[0],"touchmove",function(e){
var i=e.changedTouches[0].clientY,n=t.$el.find(".js_bottom_input_emoji_panel")[0].scrollTop,o=t.$el.find(".js_bottom_input_emoji_panel")[0].scrollHeight,s=t.$el.find(".js_bottom_input_emoji_panel")[0].clientHeight;
(.5>n&&i>u||.5>o-n-s&&u>i)&&e.preventDefault();
}),DomEvent.tap(this.$el.find(".js_bottom_input_emoji_panel")[0],function(e){
if("comment_primary_emotion"===e.target.className){
var i=s[e.target.getAttribute("text-name")];
i&&t.insertContent(i);
}
});
},BottomInputBar;
});define("a/appdialog_confirm.html.js",[],function(){
return'<div class="wx_profile_dialog_primary">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog weui-skin_android">\n        <div class="weui-dialog__hd"><strong class="weui-dialog__title">是否立即下载该应用</strong></div>\n        <div class="weui-dialog__bd">\n            <div class="weui-flex">\n                <div class="wx_profile_info_avatar_wrp">\n                    <span class="wx_profile_info_avatar">\n                        <img src="<#=app_img_url#>" alt="">\n                    </span>\n                </div>\n                <div class="weui-flex__item">\n                    <strong class="wx_profile_info_title"><#=app_name#></strong>\n                </div>\n            </div>\n        </div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:;" class="js_cancel weui-dialog__btn weui-dialog__btn_default">取消</a>\n            <a href="javascript:;" class="js_ok weui-dialog__btn weui-dialog__btn_primary">下载</a>\n        </div>\n    </div>\n</div>\n';
});;define('widget/wx_profile_dialog_primary.css', [], function(require, exports, module) {
	return ".radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.wx_profile_dialog_primary .weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.wx_profile_dialog_primary .weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.wx_profile_dialog_primary .weui-dialog__hd{position:relative;padding:20px 20px 10px;text-align:left}.wx_profile_dialog_primary .weui-dialog__hd:after{content:\" \";position:absolute;left:20px;right:20px;bottom:0;height:1px;border-bottom:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__title{font-weight:400;font-size:17px}.wx_profile_dialog_primary .weui-dialog__bd{padding:16px 20px;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;color:#999}.wx_profile_dialog_primary .weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.wx_profile_dialog_primary .weui-dialog__ft{position:relative;line-height:44px;font-size:17px;display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.wx_profile_dialog_primary .weui-dialog__btn:active{background-color:#eee}.wx_profile_dialog_primary .weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0.5);transform:scaleX(0.5)}.wx_profile_dialog_primary .weui-dialog__btn:first-child:after{display:none}.wx_profile_dialog_primary .weui-dialog__btn_default{color:#353535}.wx_profile_dialog_primary .weui-dialog__btn_primary{color:#1aad19}.wx_profile_dialog_primary .weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,0.1)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__title{font-size:21px}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd{text-align:left;padding:1.3em 1.6em 1.2em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd{color:#999;padding:0 1.6em 1.4em;font-size:17px;text-align:left}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:active{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:last-child{margin-right:-0.8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn_default{color:#808080}@media screen and (min-width:1024px){.wx_profile_dialog_primary .weui-dialog{width:35%}}.wx_profile_dialog_primary .weui-flex{display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-flex__item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wx_profile_dialog_primary .weui-flex{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wx_profile_dialog_primary .weui-flex__item{word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.wx_profile_info_avatar_wrp{padding-right:10px}.wx_profile_info_avatar{width:50px;height:50px;padding:0;display:inline-block;background-color:#fff;vertical-align:middle}.wx_profile_info_avatar img{display:block;width:100%;border-radius:10px}.wx_profile_info_title{display:block;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:16px;font-weight:400;text-align:left}";
});define("appmsg/emotion/emotion.html.js",[],function(){
return'<# (function() { #>\n  <# for (var pageIdx = 0, count = 1; pageIdx < pageCount; pageIdx++) { #>\n    <ul class="emotion_list" style="float: left; width: <#=width#>px; padding-left: <#=gap#>px; padding-right: 0;">\n      <# for (var emotionIdx = 0; emotionIdx < onePageCount; emotionIdx++, count++) { #>\n        <# if (count > emotionsCount) break; #>\n        <li class="emotion_item js_emotion_item" data-index="<#=count#>" style="width: <#=emotionLiSize#>px; height: <#=emotionLiSize#>px;">\n          <i class="icon_emotion icon<#=count#>" style="background-position: 0px <#=(1 - count) * emotionSize#>px;"></i>\n        </li>\n      <# } #>\n\n      <li class="emotion_item del js_emotion_item" data-index="-1" style="width: <#=emotionLiSize#>px; height: <#=emotionLiSize#>px; right: <#=gap#>px;">\n        <i class="icon_emotion del"></i>\n      </li>\n    </ul>\n  <# } #>\n<# })(); #>';
});define("biz_common/utils/emoji_panel_data.js",[],function(){
"use strict";
return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"17_1",18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,300,301,302,303,304,305,306,307,204,205,202,206,212,211,313,314,315,316,317,318,319,320,321,322,323,330,329,328,327,326,325,65,66,67,78,79,80,81,82,83,84,85,89,309,310,56,57,60,68,63,64,55,70,74,75,76,311,77,209,324,215,62,308,92,93,94,95];
});function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function e(e,t){
for(var n=0;n<t.length;n++){
var a=t[n];
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);
}
}
return function(t,n,a){
return n&&e(t.prototype,n),a&&e(t,a),t;
};
}();
define("appmsg/emotion/textarea.js",["appmsg/emotion/dom.js","appmsg/emotion/caret.js","biz_common/dom/class.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js"],function(e){
"use strict";
function t(e){
for(var t=0,n=l.length;n>t;t++)if(l[t]===e)return!0;
return!1;
}
for(var n=e("appmsg/emotion/dom.js"),a=e("appmsg/emotion/caret.js"),i=e("biz_common/dom/class.js"),s=e("biz_common/utils/emoji_data.js"),r=e("biz_common/utils/emoji_panel_data.js"),o={},l=[],u=0;u<s.length;u++){
var c=s[u];
o[c.id]=c;
}
for(var u=0;u<r.length;u++)l.push(o[r[u]].cn);
var m=function(){
function e(t){
_classCallCheck(this,e),this.textarea=t.inputArea,this.submitBtn=t.submitBtn,this.makeTextAreaFast(),
this.listenDelete();
}
return _createClass(e,[{
key:"insertEmotion",
value:function(e){
var t=this.textarea.el[0],i=a.get(t),s=t.value;
s=s.slice(0,i)+e+s.slice(i),t.value=s,a.set(t,i+e.length+1),t.blur(),n.later(function(){
t.blur();
}),this.setBtn(s);
}
},{
key:"makeTextAreaFast",
value:function(){
var e="translate3d(0, 0, 0)";
this.textarea.css({
webkitTransform:e,
transform:e
});
}
},{
key:"listenDelete",
value:function(){
var e=this,t=8;
this.textarea.on("keydown",function(n){
n.keyCode===t&&e.deleteEmotion(!0)&&n.preventDefault();
});
}
},{
key:"deleteEmotion",
value:function(e){
function i(){
var e=r-1;
0>e&&(e=0);
var t=o.slice(0,e),n=o.slice(r);
s.value=t+n,a.set(s,e);
}
var s=this.textarea.el[0],r=a.get(s),o=s.value,l=4,u=r-l;
0>u&&(u=0,l=r-u);
var c=o.slice(u,r),m=c.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);
if(m){
var f=m[0],v=l-f.length,h=f.replace("[","").replace("]","");
if(t(h)){
var b=c.replace(f,""),d=o.slice(0,u)+b+o.slice(r);
s.value=d,a.set(s,u+v);
}else{
if(e)return!1;
i();
}
}else{
if(e)return!1;
i();
}
return e?(s.focus(),n.later(function(){
s.focus();
})):(s.blur(),n.later(function(){
s.blur();
})),this.setBtn(s.value),!0;
}
},{
key:"setBtn",
value:function(e){
if(this.submitBtn){
var t=this.submitBtn.el[0];
e.length<1?i.addClass(t,"btn_disabled"):i.removeClass(t,"btn_disabled");
}
}
},{
key:"inputEmotion",
value:function(e,t){
-1===e?this.deleteEmotion(t):this.insertEmotion(l[e-1]);
}
}]),e;
}();
return m;
});