---
layout:     post   				    # 使用的布局（不需要改）
title:      Disabling Chrome Autofill 				# 标题 
subtitle:   阻止浏览器提示输入历史   #副标题
date:       2019-09-17 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
# [https://stackoverflow.com/questions/15738259/disabling-chrome-autofill](https://stackoverflow.com/questions/15738259/disabling-chrome-autofill)  


HTML: 
<pre><code>
&lt;input autocomplete="${properties.ifDisableCompleteAuto ? 'off' : 'on'}"&gt;
</code></pre>  
 ```
Sometimes I notice this strange behavior on Chrome and Safari, when there are password fields in the same form.  
I guess, the browser looks for a password field to insert your saved credentials. Then it autofills username into the nearest textlike-input field , 
that appears prior the password field in DOM (just guessing due to observation). As the browser is the last instance and you can not control it,
 ```
注意这段话，遇到了同样的问题就是autocomplete='off'可以解决一般问题,但是最接近password的标签得通过添加一个不用的input来解决，
这个不用的input需要通过一下样式来隐藏
<pre><code>
style="${properties.isHidden&&!wcmmode.edit ? 'position: absolute;top: -9999px;left: -9999px;' : '' @context='html'}"
</code></pre> 
