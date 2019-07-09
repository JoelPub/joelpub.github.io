---
layout:     post   				    # 使用的布局（不需要改）
title:      How to change url without leave a history by using replacestate				# 标题 
subtitle:   使用replaceState不跳转改变url #副标题
date:       2016-09-07				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---
<h1><a id="How_to_change_url_without_leave_a_history_by_using_replacestate_1"></a>How to change url without leave a history by using replacestate</h1>
<p>使用replaceState不跳转改变url</p>
<pre><code>
var state={time:new Date().getTime()};
if(history.replaceState) {&lt;br&gt;
history.replaceState(state,&quot;,$(e.target).attr(‘href’));&lt;br&gt;
}
</code><pre>
