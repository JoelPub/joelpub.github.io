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


# 微信H5移动端真机调试--vConsole

2018年04月09日 17:56:34 [Shuah153](https://me.csdn.net/weixin_36934930)阅读数 12152 <svg>  </svg>

在移动端实际开发中，还是会碰到一些棘手的bug，想看看到底哪里出了问题，苦于移动端不能F12啊。友好的微信给我们提供了这么一个入口，使开发者可以真机调试。给微信开发者点赞。然后就可以看到你打印的内容及其他的信息，比如cookie、LocalStorage,Network、Element......

微信打开这个网址 [http://debugx5.qq.com/](http://debugx5.qq.com/) 暖心的我给你准备好了二维码，扫一扫吧（不要太感动......） 

![这里写图片描述](/img/blog/vConsole_files/20180409172942351) 

进去后，选择中间''信息''，然后一直往下翻，把vConsole打开，把下面两个Content Cache关掉。 

![这里写图片描述](/img/blog/vConsole_files/20180409172818400) 

然后打开你要调试的页面，你就你能看到右下角有个绿色按钮vConsole。点击就能查看你代码中console的内容了。 

![这里写图片描述](/img/blog/vConsole_files/20180409174310701)

其实还有一种方法是引入vConsole文件。就直接可以看到打印的东西了。他们讲的很明白，我就不多说了。 

[https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md](https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md) 


