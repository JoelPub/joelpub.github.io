---
layout:     post   				    # 使用的布局（不需要改）
title:      AWS Apache Reverse Proxy using mode_proxy 				# 标题 
subtitle:   通过设置AWS Apache反向代理将二级域名指向不同的端口   #副标题
date:       2019-10-07				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Infra							#标签
---

[Apache 反向代理（实现将tomcat 8080端口转化为80端口）](https://blog.csdn.net/a249130/article/details/81476454)
* 给后台api用可以，给前台做域名url转发不行，因为前台资源会找不到  
## 准备APACHE
[准备 LAMP 服务器](https://docs.amazonaws.cn/AWSEC2/latest/UserGuide/install-LAMP.html#prepare-lamp-server-alami)

* 查看Apache版本  
```javascript  
apachetl -v
httpd -v
  
```  
* 使用 chkconfig 命令配置 Apache Web 服务器，使其在每次系统启动时启动   
```javascript  
sudo chkconfig httpd on
chkconfig --list httpd
  
```  
在运行级别 2、3、4 和 5 下，httpd 为 on (您希望看到的状态) 

## 通过设置AWS Apache反向代理将二级域名指向不同的端口 
```javascript
sudo nano /etc/httpd/conf/httpd.conf
```  
**在文件的最后加入** 
```javascript
# Apache HTTP Server As Reverse-Proxy Using mod_proxy
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_connect_module modules/mod_proxy_connect.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule proxy_ftp_module modules/mod_proxy_ftp.so
ProxyPass /litemallsl http://localhost:8080/
ProxyPassReverse /litemallsl http://localhost:8080/
```  
* 访问http://18.215.228.3/litemallsl/wx/index/index