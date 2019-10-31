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
## 本地配置author和publisher并同步   
**启动author和publisher**   
```javascript
cd /users/nimda/documents/aem61/author   
java -jar cq5-author-p4502.jar

cd /users/nimda/documents/aem61/publish   
java -jar cq5-publish-p4503.jar -r publish
```
  
**编译代码**   
```javascript
cd /Users/nimda/Documents/wordpress-amazon/aem/amp_project/   
mvn clean install -PautoInstallPackage
```
  
**整体激活（页面激活页可以）**   
http://localhost:4502/etc/replication/treeactivation.html  
* 取消勾选选项    
Activate Tree
/apps/amp_app   
/content/amp_pages   
/etc/designs/amp_app   
* 依次点Dry Run/Activate   
* 查看是否已经同步
http://localhost:4503/crx/de  
以admin登陆就可以查看了   


## 相关资料：   
[http://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/](http://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/)

[https://docs.adobe.com/docs/en/aem/6-1/deploy/custom-standalone-install.html](https://docs.adobe.com/docs/en/aem/6-1/deploy/custom-standalone-install.html)

[https://docs.adobe.com/content/docs/en/aem/6-1/deploy/configuring/configure-runmodes.html](https://docs.adobe.com/content/docs/en/aem/6-1/deploy/configuring/configure-runmodes.html)
