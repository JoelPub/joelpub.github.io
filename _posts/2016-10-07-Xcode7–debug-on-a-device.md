---
layout:     post   				    # 使用的布局（不需要改）
title:      Xcode7–debug on a device 				# 标题 
subtitle:    #副标题
date:       2016-09-16 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="Xcode7debug_on_a_device_1"></a>Xcode7–debug on a device</h1>
<p>Xcode7之前，想要真机调试，必须花99刀购买开发者账号，而且步骤繁琐，需要下载证书。随着Xcode7的推出，大幅度的简化了真机调试的步骤，对ios开发工作者和正在学习ios开发的众多码农们，可以说是个不小的福利。现在，我就详细的向大家介绍一下如何免证书真机调试。</p>
<p>第一步：准备工作（Apple ID,<a href="http://ip.knowsky.com/">ip</a>hone手机,Xcode7)</p>
<p>Apple ID  申请网址：<a href="https://appleid.apple.com/cn%EF%BC%88Apple">https://appleid.apple.com/cn（Apple</a> ID作为在苹果官网执行任何操作的通行证，申请步骤非常简单）;</p>
<p>iphone手机  这个就不用多说了，真机调试没有手机就白谈了;</p>
<p>Xcode7  可以从AppStore中下载;</p>
<p>第二步：打开Xcode 选择屏幕左上角Xcode-&gt; <a href="http://pr.knowsky.com/">PR</a>eferencese</p>
<p>![](./Xcode7–debug on a device – Joel’s blog_files/gdxob0lds1j15.jpg)</p>
<p>第三部：选择Account 点击左下角的+按钮登陆Apple ID</p>
<p>![](./Xcode7–debug on a device – Joel’s blog_files/o45bugiycnc15.jpg)</p>
<p>第四步：登陆你的Apple ID</p>
<p>![](./Xcode7–debug on a device – Joel’s blog_files/1ur433cnzwh15.jpg)</p>
<p>第五步:登陆成功之后，在右侧会显示小伙伴的账号在iOS和Mac上都是free的，双击这一列（或者点击选择view details）</p>
<p>![](./Xcode7–debug on a device – Joel’s blog_files/xdsntp35coy15.jpg)</p>
<p>第五步：这里需要一定时间获取你的Apple ID的开发者信息，点击iOS Development 后面的create ，然后稍等片刻，直到create按钮不见了。</p>
<p>![](./Xcode7–debug on a device – Joel’s blog_files/tkqmkmgrd1b15.jpg)</p>
<p>第六步：到了这里基本上已经结束—-开始真机测试：打开需要真机测试的项目插上手机（Xcode第一次链接手机会很慢，可以选择Xcode菜单栏中的window-&gt;devices查看手机是否准备就绪了），选择项目文件-&gt; General – &gt; Team -&gt; 选择你属于你的Apple ID ，再点击Team 下面的fix issue修复Team 正下方的警告。</p>
<p>![](./Xcode7–debug on a device – Joel’s blog_files/uib4vbiir3g15.jpg)</p>
<p>第七步：最后一个问题，你最终会发现Xcode会弹出一个框（process launch failed: Security），这里需要打开你手机的设置-&gt;通用- &gt; 描述文件-&gt; 选择你的Apple ID – &gt; 点击信任</p>
<p>至此，真机调试的过程就搞好了，是不是比以前简单多了？？？</p>
