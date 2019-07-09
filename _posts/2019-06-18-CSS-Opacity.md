---
layout:     post   				    # 使用的布局（不需要改）
title:      CSS Opacity			# 标题 
subtitle:   css设置div背景透明   #副标题
date:       2019-06-18 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	CSS							#标签
---

<a href="https://stackoverflow.com/questions/806000/how-do-i-give-text-or-an-image-a-transparent-background-using-css">How do I give text or an image a transparent background using CSS?</a>

使用Opacity会导致子元素也透明，避免的方法如下
<pre><code>
<p style="background-color:rgba(255,0,0,0.5);">
  <span>Hello world</span>
</p>
</code></pre>
