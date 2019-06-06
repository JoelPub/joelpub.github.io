---
layout:     post   				    # 使用的布局（不需要改）
title:      vConsole			# 标题 
subtitle:   微信H5移动端真机调试   #副标题
date:       2019-06-06 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---

<a href="https://blog.csdn.net/weixin_36934930/article/details/79870240">微信H5移动端真机调试--vConsole</a>

<h1><a id="H5vConsole_1"></a>微信H5移动端真机调试–vConsole</h1>
<p>在移动端实际开发中，还是会碰到一些棘手的bug，想看看到底哪里出了问题，苦于移动端不能F12啊。友好的微信给我们提供了这么一个入口，使开发者可以真机调试。给微信开发者点赞。然后就可以看到你打印的内容及其他的信息，比如cookie、LocalStorage,Network、Element…</p>
<p>微信打开这个网址 <a href="http://debugx5.qq.com/">http://debugx5.qq.com/</a> 暖心的我给你准备好了二维码，扫一扫吧（不要太感动…） &lt;br&gt;</p>
<p><img src="https://img-blog.csdn.net/20180409172942351?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjkzNDkzMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="这里写图片描述"> &lt;br&gt;</p>
<p>进去后，选择中间’‘信息’’，然后一直往下翻，把vConsole打开，把下面两个Content Cache关掉。 &lt;br&gt;</p>
<p><img src="https://img-blog.csdn.net/20180409172818400?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjkzNDkzMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="这里写图片描述"> &lt;br&gt;</p>
<p>然后打开你要调试的页面，你就你能看到右下角有个绿色按钮vConsole。点击就能查看你代码中console的内容了。 &lt;br&gt;</p>
<p><img src="https://img-blog.csdn.net/20180409174310701?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjkzNDkzMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="这里写图片描述"></p>
<p>其实还有一种方法是引入vConsole文件。就直接可以看到打印的东西了。他们讲的很明白，我就不多说了。 &lt;br&gt;</p>
