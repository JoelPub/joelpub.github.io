---
layout:     post   				    # 使用的布局（不需要改）
title:      JavaScript dynamic load 				# 标题 
subtitle:   动态加载js文件   #副标题
date:       2019-06-18 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---




# [js怎么动态加载js文件（JavaScript性能优化篇）](https://www.cnblogs.com/telwanggs/p/11045773.html)

下面介绍一种JS代码优化的一个小技巧，通过动态加载引入js外部文件来提高网页加载速度

1. **【基本优化】** 将所有需要的<script>标签都放在</body>之前，确保脚本执行之前完成页面渲染而不会造成页面堵塞问题，这个大家都懂的。
2. **【合并JS代码，尽可能少的使用script标签】** 最常见的方式就是带代码写入一个js文件中，让页面只使用一次<script></script>标签来引入
3. **【无堵塞加载JS】** 通过给script标签增加 defer属性或者是 async 属性来实现 <script src="file.js" **defer**></script> 注解： **async**和 **defer**不同之处是 **async**加载完成后会自动执行脚本， **defer**加载完成后需要等待页面也加载完成才会执行代码
4. **【动态创建script来加载-推荐】** function loadJS( url, callback ){     var script = document.createElement('script'),         fn = callback || function(){};     script.type = 'text/javascript';     //IE     if(script.readyState){         script.onreadystatechange = function(){             if( script.readyState == 'loaded' || script.readyState == 'complete' ){                 script.onreadystatechange = null;                 fn();             }         };     }else{         //其他浏览器         script.onload = function(){             fn();         };     }     script.src = url;     document.getElementsByTagName('head')[0].appendChild(script); } //用法 loadJS('file.js',function(){     alert(1); });
5.谷歌浏览器运行效果，script被动态创建在head中
6.建议大家可以封装成类库，单独引入。 该原理实现的也有很多不错的js类库可以使用，如 **LazyLoad.js**，支持数组的形式引入，打开浏览器在network中可看到js是同步加载的
7. **【XHR加载】** 使用ajax方式加载 代码： var xhr = new XMLHttpRequest; xhr.open('get','file.js',true); xhr.onreadystatechange = function(){     if( xhr.readyState == 4 ){         if( xhr.status >=200 && xhr.status < 300 || xhr.status == 304 ){             var script = document.createElement('script');             script.type = 'text/javascript';             script.text = xhr.responseText;             document.body.appendChild(script);         }     } }; xhr.send(null);
8. 8 **【总结】** 最好的方式还是使用动态创建script的方式加载，当动态创建script，浏览器会分配一个线程去下载src指向的资源，多个script也是同步下载的

 
