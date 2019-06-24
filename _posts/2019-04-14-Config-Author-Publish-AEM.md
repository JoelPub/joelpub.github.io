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

cd /users/nimda/documents/aem61/author
java -jar cq5-author-p4502.jar

/Users/nimda/documents/aem61/publisher
java -jar cq5-publish-p4503.jar -r publish

cd /Users/nimda/Documents/wordpress-amazon/aem/amp_project/
mvn clean install -PautoInstallPackage

http://localhost:4502/etc/replication/treeactivation.html
Activate Tree
/apps/amp_app
/content/amp_pages


相关资料：
[http://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/](http://www.tothenew.com/blog/configuring-dispatcher-author-and-publish-instance-of-adobe-experience-manager-aem/)

[https://docs.adobe.com/docs/en/aem/6-1/deploy/custom-standalone-install.html](https://docs.adobe.com/docs/en/aem/6-1/deploy/custom-standalone-install.html)

[https://docs.adobe.com/content/docs/en/aem/6-1/deploy/configuring/configure-runmodes.html](https://docs.adobe.com/content/docs/en/aem/6-1/deploy/configuring/configure-runmodes.html)
