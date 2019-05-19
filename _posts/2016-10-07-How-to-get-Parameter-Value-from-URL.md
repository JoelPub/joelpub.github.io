---
layout:     post   				    # 使用的布局（不需要改）
title:      How to get Parameter Value from URL				# 标题 
subtitle:    #副标题
date:       2016-09-07 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
<h1><a id="How_to_get_Parameter_Value_from_URL_1"></a>How to get Parameter Value from URL</h1>
<p>获得url参数值</p>
<p>parameters=window.location.search.substr(1).match(/(<sup>|&amp;amp;)isSimplified=([</sup>&amp;]*)(&amp;|$)/i)&lt;br&gt;</p>
<p>isSimplified = !!parameters&amp;&amp;parameters.length&gt;2?parameters[2]:&quot;,</p>
