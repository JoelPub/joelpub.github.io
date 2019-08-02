---
layout:     post   				    # 使用的布局（不需要改）
title:      login validation 				# 标题 
subtitle:   login validation #副标题
date:       2016-09-23 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---
<h1><a id="login_validation_1"></a>login validation</h1>
<p>邮箱不为空：</p>
<p>this.state.email.replace(/(^\s+)|(\s+$)/g,&quot;)==&quot;</p>
<p>密码不为空：</p>
<p>this.state.password.replace(/(^\s+)|(\s+$)/g,&quot;)==&quot;</p>

<p>手机格式：</p>
<pre><code>
/^[1][3,4,5,7,8][0-9]{9}$/.test($("#mobileNo-form input[name='mobile']").val())==false
</code><pre>
<p>邮箱格式：</p>
<p>/<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(this.state.email)==false</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1"  class="footnote-item"><p>A-Z0-9._%+- <a href="#fnref1" class="footnote-backref">↩</a></p>
</li>
</ol>
</section>
