---
layout:     post   				    # 使用的布局（不需要改）
title:      Chrome Performance Tools				# 标题 
subtitle:   前端优化   #副标题
date:       2019-05-23 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
1.performance 工具栏（在network和memory中间）<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Screen Shot 2019-05-29 at 3.20.11 PM.png?raw=true" alt="image"><br>
这里可以查看具体js执行的时间和代码<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Screen Shot 2019-05-29 at 3.49.29 PM.png?raw=true" alt="image"><br>
除了dashboard之外，下面的子工具栏里coverage和Rendering也很有用（需要自行添加，在console/what's new/remote device之后）<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Screen Shot 2019-05-29 at 3.21.24 PM.png?raw=true" alt="image"><br>
2.Coverage 查看js的使用率也很有用<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Screen Shot 2019-05-29 at 3.46.02 PM.png?raw=true" alt="image"><br>
3.阻止第三方请求可以准确的帮助调优 （Request blocking to block 3rd party request）<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Screen Shot 2019-05-29 at 3.13.55 PM.png?raw=true" alt="image"><br>
不止阻止第三方请求，可以过滤一些东西便于查看这些东西占了多少时间<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Screen Shot 2019-05-29 at 3.46.46 PM.png?raw=true" alt="image"><br>
Performance 工具栏的使用方法
https://developers.google.com/web/tools/chrome-devtools/rendering-tools
https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool?hl=zh-CN#profile-js
https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/performance-reference
https://developers.google.com/web/tools/chrome-devtools/network/resource-loading

4. AEM调优建议
https://helpx.adobe.com/experience-manager/kb/optimize-aem-site-performance.html


另外几个有用的帮助测试性能的工具：
https://www.webpagetest.org/result/190517_87_05dca81e68ca59c41f0e498e836c652d/1/details/#waterfall_view_step1

docker-compose run sitespeed.io https://www.ford.com.cn/ --graphite.host=graphite

https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.india.ford%2F

https://yellowlab.tools/

https://gtmetrix.com/
