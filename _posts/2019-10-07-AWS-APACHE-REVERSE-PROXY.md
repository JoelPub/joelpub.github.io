---
layout:     post   				    # 使用的布局（不需要改）
title:      AWS Apache Reverse Proxy using mod_proxy 				# 标题 
subtitle:   通过反向代理将二级域名指向不同的端口实现https访问api   #副标题
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

* 重装Apache服务器+mod以开启https
```javascript  
sudo yum remove httpd24
sudo yum install -y httpd24
sudo yum install -y mod24_ssl
sudo service httpd start
sudo service httpd restart
sudo service httpd stop  
```  
[在 Amazon Linux 上配置 SSL/TLS](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-ami.html)
* 将ssl证书放到指定位置  
```javascript  
sudo cp 2903423_evw.wiki_public.crt /etc/pki/tls/certs
sudo cp 2903423_evw.wiki_chain.crt /etc/pki/tls/certs
sudo cp 2903423_evw.wiki.key /etc/pki/tls/private
cd /etc/pki/tls/certs
sudo chown root.root 2903423_evw.wiki_public.crt
sudo chown root.root 2903423_evw.wiki_chain.crt
sudo chmod 600 2903423_evw.wiki_public.crt
sudo chmod 644  2903423_evw.wiki_chain.crt
cd /etc/pki/tls/private
sudo chown root.root 2903423_evw.wiki.key
sudo chmod 600 2903423_evw.wiki.key
sudo nano /etc/httpd/conf.d/ssl.conf  
SSLCertificateFile /etc/pki/tls/certs/2903423_evw.wiki_public.crt
SSLCertificateKeyFile /etc/pki/tls/private/2903423_evw.wiki.key
sudo service httpd restart
```  
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
ProxyPass /litemallsl http://localhost:8080/
ProxyPassReverse /litemallsl http://localhost:8080/
```  
* 访问
http://18.215.228.3:8080/wx/index/index
http://18.215.228.3/litemallsl/wx/index/index 
https://www.evw.wiki/litemallsl/wx/index/index