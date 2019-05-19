---
layout:     post   				    # 使用的布局（不需要改）
title:      Android simulator error				# 标题 
subtitle:   Android模拟器：HAX is not installed on this machine #副标题
date:       2016-09-19 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="AndroidHAX_is_not_installed_on_this_machine_1"></a>Android模拟器：HAX is not installed on this machine</h1>
<h1><a id="httpblogcsdnnetjianzhangerarticledetails47953227httpblogcsdnnetjianzhangerarticledetails47953227_3"></a><a href="http://blog.csdn.net/jianzhanger/article/details/47953227">http://blog.csdn.net/jianzhanger/article/details/47953227</a></h1>
<h1><a id="MacHAX_is_not_installed_on_this_machine_httpblogcsdnnetjianzhangerarticledetails47953227_5"></a><a href="http://blog.csdn.net/jianzhanger/article/details/47953227">Mac上HAX is not installed on this machine 的解决办法</a></h1>
<p>Mac更新了新一代操作系统Yosemite，突然间悲剧的发现Android Studio的AVD模拟器无法启动了，显示错误 HAX is not installed on this machine</p>
<p>打开SDK Manager发现明明状态是Installed</p>
<p>![](./Android模拟器：HAX is not installed on this machine – Joel’s blog_files/20150824163949436)</p>
<p>再打开Finder，找到HAXM的下载位置</p>
<p>sudo find / -name <em>HAXM</em></p>
<p>/usr/local/var/lib/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager/InterlHAXM_6.0.3.dmg</p>
<p>安装dmg，搞定。</p>
