---
layout:     post   				    # 使用的布局（不需要改）
title:      Config-Author-Publish-AEM 				# 标题 
subtitle:   (并使两个instance同步)   #副标题
date:       2019-04-14 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	AEM							#标签
---
## 配置Dispatcher   
[https://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/](https://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/)
[https://www.adobeaemcloud.com/content/companies/public/adobe/dispatcher/dispatcher.html](https://www.adobeaemcloud.com/content/companies/public/adobe/dispatcher/dispatcher.html)
[https://docs.adobe.com/content/help/en/experience-manager-dispatcher/using/dispatcher.html](https://docs.adobe.com/content/help/en/experience-manager-dispatcher/using/dispatcher.html)

**配置dispatcher**  
**下载** 
```javascript
cd /home/ec2-user/haidan/AEM/dispatcher 
wget  https://www.adobeaemcloud.com/content/companies/public/adobe/dispatcher/dispatcher/_jcr_content/top/download_8/file.res/dispatcher-apache2.4-linux-x86-64-4.2.3.tar.gz
tar -xvf dispatcher-apache2.4-linux-x86-64-4.2.3.tar.gz
sudo cp dispatcher-apache2.4-4.2.3.so /etc/httpd/modules/mod_dispatcher.so
cd conf
sudo cp dispatcher.any /etc/httpd/conf/dispatcher.any
/usr/sbin/setsebool httpd_can_network_connect true
```

**编辑/etc/httpd/conf/httpd.conf** 
```javascript
LoadModule dispatcher_module /etc/httpd/modules/mod_dispatcher.so
<IfModule disp_apache2.c>
 DispatcherConfig conf/dispatcher.any
 DispatcherLog logs/dispatcher.log
 DispatcherLogLevel 3
 DispatcherNoServerHeader 0
 DispatcherDeclineRoot 0
 DispatcherUseProcessedURL 0
 DispatcherPassError 0
 DispatcherKeepAliveTimeout 60
</IfModule>
 
<Directory />
 <IfModule disp_apache2.c>
 SetHandler dispatcher-handler
 </IfModule>
 Options FollowSymLinks
 AllowOverride None
</Directory>
<Directory />
 <IfModule disp_apache2.c>
 SetHandler dispatcher-handler
 ModMimeUsePathInfo On
 </IfModule>
 Options FollowSymLinks
 AllowOverride None
</Directory>
```

**编辑/etc/httpd/conf/dispatcher.any** 
```javascript
/virtualhosts {
  "*:80"
}

/renders {
  /rend01 {
    # Hostname or IP of the render
    /hostname "127.0.0.1"
    # Port of the render
    /port "4503”
  }
}
```

**编辑/var/www/html/index.html跳转首页** 
```javascript
<head>
<meta http-equiv="refresh" content="0;url=/content/amp_pages/en/amp_home.html">
</head>
```
## 本地配置author和publisher   
**启动author和publisher**   
```javascript
cd /users/nimda/documents/aem61/author 
cd /home/ec2-user/haidan/AEM/author   
java -jar cq5-author-p4502.jar
cd crx-quickstart/bin
./start

cd /users/nimda/documents/aem61/publish   
cd /home/ec2-user/haidan/AEM/publish   
java -jar cq5-publish-p4503.jar -r publish
cd crx-quickstart/bin
CQ_PORT=4503 ./start  

```
  
**编译代码**   
```javascript
cd /Users/nimda/Documents/wordpress-amazon/aem/amp_project/   
cd /var/www/html/aem/amp_project   
mvn clean install -PautoInstallPackage
```
  
## author和publisher并同步   
**replication工具激活**   
http://localhost:4502/etc/replication/treeactivation.html  
* 取消勾选选项    
Activate Tree   
/apps/amp_app   
/content/amp_pages   
/etc/designs/amp_app   
/content/dam/amp_pages   
* 依次点Dry Run/Activate   
* 查看是否已经同步   
http://localhost:4503/crx/de  
以admin登陆就可以查看了   

**单个页面激活** 
* 前端   
AEM Sidekick-->Page-->Activate Page   
* 后端   
http://localhost:4502/crx/de/index.jsp#/apps/amp_app/install/amp_project.core-1.0-SNAPSHOT.jar    
Replication-->Replicate   

**包激活**   
http://localhost:4502/crx/packmgr/index.jsp   
* 前端  
amp_project.ui.content-1.0-SNAPSHOT.zip   
* 后端  
amp_project.ui.apps-1.0-SNAPSHOT.zip   
More-->Replicate   

## 相关资料：   
[http://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/](http://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/)

[https://docs.adobe.com/docs/en/aem/6-1/deploy/custom-standalone-install.html](https://docs.adobe.com/docs/en/aem/6-1/deploy/custom-standalone-install.html)

[https://docs.adobe.com/content/docs/en/aem/6-1/deploy/configuring/configure-runmodes.html](https://docs.adobe.com/content/docs/en/aem/6-1/deploy/configuring/configure-runmodes.html)
