---
layout:     post   				    # 使用的布局（不需要改）
title:      Build AEM project by Maven from scratch 				# 标题 
subtitle:   ( Archetype )   #副标题
date:       2019-02-13 				# 时间
author:     转载 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	web							#标签
---

* Intellij AEM Plugin: 
* Using archetype         （）
* config settings.xml in .m2 folder (）
*     * create simple content pakcage archetype
*     _mvn archetype:generate -DarchetypeGroupId=com.day.jcr.vault -DarchetypeArtifactId=simple-content-package-archetype -DarchetypeVersion=1.0.2 -DarchetypeRepository=adobe-public-releases -DgroupId=my-group-id -Dversion=1.0-SNAPSHOT -Dpackage=com.mycompany.myproject -DappsFolderName=myproject -DpackageGroup="My Company" -DartifactId=myproject -DartifactName="My Project"_
* ``mvn clean install -PautoInstallPackage Clean: remove target folder created during mvn compile
* _Settings.xml_
*     __
    __
    _    4.0.0_
    _    _
    _    _
    _    _
    _    _
    _        com.adobe.cq_
    _        key61_
    _        1.0-SNAPSHOT_
    _    _
    _ _
    _    _
    _    _
    _    _
    _ _
    _    key61-bundle_
    _    bundle_
    _    My Project Bundle_
    _ _
    _    _
    _        _
    _            org.osgi_
    _            org.osgi.compendium_
    _        _
    _        _
    _            org.osgi_
    _            org.osgi.core_
    _        _
    _                 _
    _        _
    _            org.apache.felix_
    _            org.apache.felix.scr.annotations_
    _        _
    _        _
    _            org.slf4j_
    _            slf4j-api_
    _        _
    _        _
    _            junit_
    _            junit_
    _        _
    _             _
    _             _
    _            com.adobe.granite _
    _            com.adobe.granite.fragment.xml_
    _            0.1.0 _
    _            provided _
    _        _
    _         _
    _        _
    _    javax.mail_
    _    javax.mail-api_
    _    1.5.2_
    __
    _         _
    _        _
    _    _
    _ _
    _    _
    _    _
    _    _
    _    _
    _        _
    _            _
    _                org.apache.felix_
    _                maven-scr-plugin_
    _                _
    _                    _
    _                        generate-scr-descriptor_
    _                        _
    _                            scr_
    _                        _
    _                    _
    _                _
    _            _
    _            _
    _                org.apache.felix_
    _                maven-bundle-plugin_
    _                true_
    _                _
    _                    _
    _                        com.adobe.cq.key61-bundle_
    _                    _
    _                _
    _            _
    _            _
    _                org.apache.sling_
    _                maven-sling-plugin_
    _                _
    _                    [__http://_][3]_${crx.host}:${crx.port}/apps/myproject/install_
    _                    true_
    _                _
    _            _
    _            _
    _                org.apache.maven.plugins_
    _                maven-javadoc-plugin_
    _                 _
    _                    _
    _                        *.impl_
    _                    _
    _                 _
    _            _
    _        _
    _    _
    __
