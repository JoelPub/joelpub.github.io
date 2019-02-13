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
*   Intellij AEM Plugin: [https://github.com/headwirecom/aem-ide-tooling-4-intellij/blob/master/documenation/AEM%20Tooling%20Plugin%20for%20IntelliJ%20IDEA.md](https://github.com/headwirecom/aem-ide-tooling-4-intellij/blob/master/documenation/AEM%20Tooling%20Plugin%20for%20IntelliJ%20IDEA.md)
*   Using archetype         （[https://github.com/Adobe-Marketing-Cloud/aem-project-archetype](https://github.com/Adobe-Marketing-Cloud/aem-project-archetype)）
*   config settings.xml in .m2 folder ([https://helpx.adobe.com/experience-manager/using/first-osgi.html](https://helpx.adobe.com/experience-manager/using/first-osgi.html)）
*   *   create simple content pakcage archetype
    
*   _`mvn archetype:generate -DarchetypeGroupId=com.day.jcr.vault` `-DarchetypeArtifactId=simple-content-package-archetype` `-DarchetypeVersion=1.0.2` `-DarchetypeRepository=adobe-public-releases ``-DgroupId=my-group-``id``-Dversion=1.0-SNAPSHOT``-Dpackage=com.mycompany.myproject` ```-DappsFolderName=myproject`-DpackageGroup=``"My Company"` ````-DartifactId=myproject ``-DartifactName=``"My Project"`_
    
*   mvn clean install -PautoInstallPackage Clean: remove target folder created during mvn compile
    

*   _Settings.xml_
*   _<?xml_  _version="1.0"_  _encoding="UTF-8"?>_
    _<project_  _xmlns="_[_http://maven.apache.org/POM/4.0.0_](http://maven.apache.org/POM/4.0.0)_"_  _xmlns:xsi="_[_http://www.w3.org/2001/XMLSchema-instance_](http://www.w3.org/2001/XMLSchema-instance)_"_
    _    xsi:schemaLocation="_[_http://maven.apache.org/POM/4.0.0_](http://maven.apache.org/POM/4.0.0)  [_http://maven.apache.org/maven-v4\_0\_0.xsd_](http://maven.apache.org/maven-v4_0_0.xsd) _">_
    _    <modelVersion>4.0.0</modelVersion>_
    _    <!\-\- ====================================================================== -->_
    _    <!\-\- P A R E N T P R O J E C T D E S C R I P T I O N -->_
    _    <!\-\- ====================================================================== -->_
    _    <parent>_
    _        <groupId>com.adobe.cq</groupId>_
    _        <artifactId>key61</artifactId>_
    _        <version>1.0-SNAPSHOT</version>_
    _    </parent>_  _    <!\-\- ====================================================================== -->_
    _    <!\-\- P R O J E C T D E S C R I P T I O N -->_
    _    <!\-\- ====================================================================== -->_  _    <artifactId>key61-bundle</artifactId>_
    _    <packaging>bundle</packaging>_
    _    <name>My Project Bundle</name>_  _    <dependencies>_
    _        <dependency>_
    _            <groupId>org.osgi</groupId>_
    _            <artifactId>org.osgi.compendium</artifactId>_
    _        </dependency>_
    _        <dependency>_
    _            <groupId>org.osgi</groupId>_
    _            <artifactId>org.osgi.core</artifactId>_
    _        </dependency>_
    _        <dependency>_
    _            <groupId>org.apache.felix</groupId>_
    _            <artifactId>org.apache.felix.scr.annotations</artifactId>_
    _        </dependency>_
    _        <dependency>_
    _            <groupId>org.slf4j</groupId>_
    _            <artifactId>slf4j-api</artifactId>_
    _        </dependency>_
    _        <dependency>_
    _            <groupId>junit</groupId>_
    _            <artifactId>junit</artifactId>_
    _        </dependency>_
    _<dependency>_ 
    _<groupId>com.adobe.granite</groupId>_ 
    _            <artifactId>com.adobe.granite.fragment.xml</artifactId>_
    _<version>0.1.0</version>_ 
    _<scope>provided</scope>_ 
    _        </dependency>_
    _        <dependency>_
    _    <groupId>javax.mail</groupId>_
    _    <artifactId>javax.mail-api</artifactId>_
    _    <version>1.5.2</version>_
    _</dependency>_
    _    </dependencies>_  _    <!\-\- ====================================================================== -->_
    _    <!\-\- B U I L D D E F I N I T I O N -->_
    _    <!\-\- ====================================================================== -->_
    _    <build>_
    _        <plugins>_
    _            <plugin>_
    _                <groupId>org.apache.felix</groupId>_
    _                <artifactId>maven-scr-plugin</artifactId>_
    _                <executions>_
    _                    <execution>_
    _                        <id>generate-scr-descriptor</id>_
    _                        <goals>_
    _                            <goal>scr</goal>_
    _                        </goals>_
    _                    </execution>_
    _                </executions>_
    _            </plugin>_
    _            <plugin>_
    _                <groupId>org.apache.felix</groupId>_
    _                <artifactId>maven-bundle-plugin</artifactId>_
    _                <extensions>true</extensions>_
    _                <configuration>_
    _                    <instructions>_
    _                        <Bundle-SymbolicName>com.adobe.cq.key61-bundle</Bundle-SymbolicName>_
    _                    </instructions>_
    _                </configuration>_
    _            </plugin>_
    _            <plugin>_
    _                <groupId>org.apache.sling</groupId>_
    _                <artifactId>maven-sling-plugin</artifactId>_
    _                <configuration>_
    _                    <slingUrl>_[_http://_](http:)_${crx.host}:${crx.port}/apps/myproject/install</slingUrl>_
    _                    <usePut>true</usePut>_
    _                </configuration>_
    _            </plugin>_
    _            <plugin>_
    _                <groupId>org.apache.maven.plugins</groupId>_
    _                <artifactId>maven-javadoc-plugin</artifactId>_
    _                 <configuration>_
    _                    <excludePackageNames>_
    _                        *.impl_
    _                    </excludePackageNames>_
    _                 </configuration>_
    _            </plugin>_
    _        </plugins>_
    _    </build>_
    _</project>_
