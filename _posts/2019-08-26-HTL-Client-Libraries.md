---
layout:     post   				    # 使用的布局（不需要改）
title:      HTML Template Language and Client Libraries 				# 标题 
subtitle:   核心代码：/libs/granite/sightly/templates/clientlib.html   #副标题
date:       2019-08-26 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	AEM							#标签
---
# [Common Patterns with HTL](https://docs.adobe.com/content/help/en/experience-manager-htl/using/getting-started/getting-started.html) 

当仅在wcmmode=disabled的模式下（6.4only)遇到 
```
org.apache.sling.api.SlingException: Cannot get DefaultSlingScript:  
org.apache.sling.api.SlingException: Cannot get DefaultSlingScript:  
org.apache.sling.api.scripting.ScriptEvaluationException: 
Cannot serve request to /content/ford/cn/zh_cn/home/Copy%20of%20ttt.html on this server 
```

首先查看
<pre><code>
data-sly-use.clientlib="/libs/granite/sightly/templates/clientlib.html"
</code><pre>

This declares a “clientlib” object, which is imple­ment­ed as a tem­plate.

