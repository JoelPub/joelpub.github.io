---
layout:     post   				    # 使用的布局（不需要改）
title:      NPM Cache Path 				# 标题 
subtitle:   更改npm全局模块和cache默认安装位置   #副标题
date:       2016-06-22 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---



# 更改npm全局模块和cache默认安装位置
[https://blog.csdn.net/friendan/article/details/51736231](https://blog.csdn.net/friendan/article/details/51736231)   

![](/img/blog/AC_files/original.png) [friendan](https://me.csdn.net/friendan)2016-06-22 18:13:34![](/img/blog/AC_files/articleReadEyes.png)36909<a name="blog_detail_zk_collection"> ![](/img/blog/AC_files/tobarCollect.png) ![](/img/blog/AC_files/tobarCollectionActive.png) 收藏  1  </a>分类专栏：[npm](https://blog.csdn.net/friendan/category_6131225.html)文章标签：[模块路径](https://so.csdn.net/so/search/s.do?q=%E6%A8%A1%E5%9D%97%E8%B7%AF%E5%BE%84&t=blog&o=vip&s=&l=&f=&viparticle=) [npm](https://www.csdn.net/gather_22/MtTaEg0sMTk4NjAtYmxvZwO0O0OO0O0O.html) [node](https://www.csdn.net/gather_28/MtTaEg0sMjAwNDItYmxvZwO0O0OO0O0O.html) [-g](https://so.csdn.net/so/search/s.do?q=-g&t=blog&o=vip&s=&l=&f=&viparticle=) [nodejs](https://www.csdn.net/gather_25/MtTaEg0sMjAwNDAtYmxvZwO0O0OO0O0O.html)最后发布:2016-06-22 18:13:34 首次发布:2016-06-22 18:13:34 版权声明：本文为博主原创文章，遵循[CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) 版权协议，转载请附上原文出处链接和本声明。
 本文链接：[https://blog.csdn.net/friendan/article/details/51736231](https://blog.csdn.net/friendan/article/details/51736231) [版权]() 参考文章：
<br>
[http://xiaoyaojones.blog.163.com/blog/static/28370125201351501113581/](http://xiaoyaojones.blog.163.com/blog/static/28370125201351501113581/)<br>
<br>
<br>
1、因为我安装的Node.js自带了npm，所以在nodejs文件夹里面新建以下两个目录：
<br>
node_global
<br>

node_cache

![](/img/blog/AC_files/20160622181918075.jpg)<br>

<br>
<br>
2、启动CMD依次执行以下两条命令
<br>
npm config set prefix "XXX\nodejs\node_global"
<br>
npm config set cache "XXX\nodejs\node_cache"
<br>
<br>
<br>
3、设置环境变量：
<br>
NODE_PATH = XXX\Node\nodejs
<br>
PATH = %NODE_PATH%\;%NODE_PATH%\node_modules;%NODE_PATH%\node_global;
<br>
<br>
<br>
4、重启系统或重启explorer.exe，使环境变量生效。
<br>
<br>
<br>
5、安装模块试试上面的设置是否生效
<br>

npm install express -g // -g意思是安装到global目录下，也就是上面设置的XXX\nodejs\node_global

<br>

<br>

<br>

