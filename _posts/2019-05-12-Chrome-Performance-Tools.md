---
layout:     post   				    # 使用的布局（不需要改）
title:      Chrome Performance Tools				# 标题 
subtitle:   常用命令   #副标题
date:       2019-05-23 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	web							#标签
---
1.performance 工具栏（在network和memory中间）
除了dashboard之外，下面的子工具栏里coverage和Rendering也很有用（需要自行添加，在console/what's new/remote device之后）
2.Coverage 查看js的使用率也很有用
3.阻止第三方请求可以准确的帮助调优 （Request blocking to block 3rd party request）

另外几个有用的帮助测试性能的工具：
https://www.webpagetest.org/result/190517_87_05dca81e68ca59c41f0e498e836c652d/1/details/#waterfall_view_step1

docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:8.15.2 -b chrome https://www.ford.com.cn/ -n 2 --mobile

 https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.india.ford%2F

https://yellowlab.tools/
