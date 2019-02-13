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
<div class="entry-content">

*   Intellij AEM Plugin: [https://github.com/headwirecom/aem-ide-tooling-4-intellij/blob/master/documenation/AEM%20Tooling%20Plugin%20for%20IntelliJ%20IDEA.md](https://github.com/headwirecom/aem-ide-tooling-4-intellij/blob/master/documenation/AEM%20Tooling%20Plugin%20for%20IntelliJ%20IDEA.md)
*   Using archetype         （[https://github.com/Adobe-Marketing-Cloud/aem-project-archetype](https://github.com/Adobe-Marketing-Cloud/aem-project-archetype)）
*   config settings.xml in .m2 folder ([https://helpx.adobe.com/experience-manager/using/first-osgi.html](https://helpx.adobe.com/experience-manager/using/first-osgi.html)）
*   <div class="line number1 index0 alt2">

    *   create simple content pakcage archetype
</div>

*   

<span style="font-size: 10pt;">*<code class="shell plain">mvn archetype:generate -DarchetypeGroupId=com.day.jcr.vault </code><code class="shell plain">-DarchetypeArtifactId=simple-content-package-archetype </code><code class="shell plain">-DarchetypeVersion=1.0.2 </code><code class="shell plain">-DarchetypeRepository=adobe-public-releases </code><code class="shell plain">-DgroupId=my-group-</code><code class="shell functions">id</code><code class="shell spaces"> </code><code class="shell plain">-Dversion=1.0-SNAPSHOT</code><code class="shell spaces"> </code><code class="shell plain">-Dpackage=com.mycompany.myproject </code><code class="shell spaces"></code><code class="shell plain">-DappsFolderName=myproject<code class="shell spaces"> </code><code class="shell plain">-DpackageGroup=</code><code class="shell string">"My Company"</code></code><code class="shell spaces"> </code><code class="shell plain">-DartifactId=myproject </code><code class="shell plain">-DartifactName=</code><code class="shell string">"My Project"</code>*</span>

*   <div class="line number1 index0 alt2"><code class="shell string"></code>mvn clean install -PautoInstallPackage<sup> Clean: remove target folder created during mvn compile</sup></div>

*   <span class="s2">*Settings.xml*</span>
*   

<span style="font-size: 8pt;"><span class="s2">*<?xml*</span>* *<span class="s2">*version="1.0"*</span>* *<span class="s2">*encoding="UTF-8"?>*</span>
    <span class="s2">*<project*</span>* *<span class="s2">*xmlns="*[<span class="s4">*http://maven.apache.org/POM/4.0.0*</span>](http://maven.apache.org/POM/4.0.0)*"*</span>* *<span class="s2">*xmlns:xsi="*[<span class="s4">*http://www.w3.org/2001/XMLSchema-instance*</span>](http://www.w3.org/2001/XMLSchema-instance)*"*</span>
    <span class="s2">*    xsi:schemaLocation="*[<span class="s4">*http://maven.apache.org/POM/4.0.0*</span>](http://maven.apache.org/POM/4.0.0)* *[<span class="s4">*http://maven.apache.org/maven-v4_0_0.xsd*</span>](http://maven.apache.org/maven-v4_0_0.xsd)* ">*</span>
    <span class="s2">*    <modelVersion>4.0.0</modelVersion>*</span>
    <span class="s2">*    <!-- ====================================================================== -->*</span>
    <span class="s2">*    <!-- P A R E N T P R O J E C T D E S C R I P T I O N -->*</span>
    <span class="s2">*    <!-- ====================================================================== -->*</span>
    <span class="s2">*    <parent>*</span>
    <span class="s2">*        <groupId>com.adobe.cq</groupId>*</span>
    <span class="s2">*        <artifactId>key61</artifactId>*</span>
    <span class="s2">*        <version>1.0-SNAPSHOT</version>*</span>
    <span class="s2">*    </parent>*</span><span class="s3">
        * *
    </span><span class="s2">*    <!-- ====================================================================== -->*</span>
    <span class="s2">*    <!-- P R O J E C T D E S C R I P T I O N -->*</span>
    <span class="s2">*    <!-- ====================================================================== -->*</span><span class="s3">
        * *
    </span><span class="s2">*    <artifactId>key61-bundle</artifactId>*</span>
    <span class="s2">*    <packaging>bundle</packaging>*</span>
    <span class="s2">*    <name>My Project Bundle</name>*</span><span class="s3">
        * *
    </span><span class="s2">*    <dependencies>*</span>
    <span class="s2">*        <dependency>*</span>
    <span class="s2">*            <groupId>org.osgi</groupId>*</span>
    <span class="s2">*            <artifactId>org.osgi.compendium</artifactId>*</span>
    <span class="s2">*        </dependency>*</span>
    <span class="s2">*        <dependency>*</span>
    <span class="s2">*            <groupId>org.osgi</groupId>*</span>
    <span class="s2">*            <artifactId>org.osgi.core</artifactId>*</span>
    <span class="s2">*        </dependency>*</span>
    <span class="s2">*                 *</span>
    <span class="s2">*        <dependency>*</span>
    <span class="s2">*            <groupId>org.apache.felix</groupId>*</span>
    <span class="s2">*            <artifactId>org.apache.felix.scr.annotations</artifactId>*</span>
    <span class="s2">*        </dependency>*</span>
    <span class="s2">*        <dependency>*</span>
    <span class="s2">*            <groupId>org.slf4j</groupId>*</span>
    <span class="s2">*            <artifactId>slf4j-api</artifactId>*</span>
    <span class="s2">*        </dependency>*</span>
    <span class="s2">*        <dependency>*</span>
    <span class="s2">*            <groupId>junit</groupId>*</span>
    <span class="s2">*            <artifactId>junit</artifactId>*</span>
    <span class="s2">*        </dependency>*</span>
    <span class="s2">*             *</span>
    <span class="s2">*            <dependency> *</span>
    <span class="s2">*            <groupId>com.adobe.granite</groupId> *</span>
    <span class="s2">*            <artifactId>com.adobe.granite.fragment.xml</artifactId>*</span>
    <span class="s2">*            <version>0.1.0</version> *</span>
    <span class="s2">*            <scope>provided</scope> *</span>
    <span class="s2">*        </dependency>*</span>
    <span class="s2">*         *</span>
    <span class="s2">*        <dependency>*</span>
    <span class="s2">*    <groupId>javax.mail</groupId>*</span>
    <span class="s2">*    <artifactId>javax.mail-api</artifactId>*</span>
    <span class="s2">*    <version>1.5.2</version>*</span>
    <span class="s2">*</dependency>*</span>
    <span class="s2">*         *</span>
    <span class="s2">*        *</span>
    <span class="s2">*    </dependencies>*</span><span class="s3">
        * *
    </span><span class="s2">*    <!-- ====================================================================== -->*</span>
    <span class="s2">*    <!-- B U I L D D E F I N I T I O N -->*</span>
    <span class="s2">*    <!-- ====================================================================== -->*</span>
    <span class="s2">*    <build>*</span>
    <span class="s2">*        <plugins>*</span>
    <span class="s2">*            <plugin>*</span>
    <span class="s2">*                <groupId>org.apache.felix</groupId>*</span>
    <span class="s2">*                <artifactId>maven-scr-plugin</artifactId>*</span>
    <span class="s2">*                <executions>*</span>
    <span class="s2">*                    <execution>*</span>
    <span class="s2">*                        <id>generate-scr-descriptor</id>*</span>
    <span class="s2">*                        <goals>*</span>
    <span class="s2">*                            <goal>scr</goal>*</span>
    <span class="s2">*                        </goals>*</span>
    <span class="s2">*                    </execution>*</span>
    <span class="s2">*                </executions>*</span>
    <span class="s2">*            </plugin>*</span>
    <span class="s2">*            <plugin>*</span>
    <span class="s2">*                <groupId>org.apache.felix</groupId>*</span>
    <span class="s2">*                <artifactId>maven-bundle-plugin</artifactId>*</span>
    <span class="s2">*                <extensions>true</extensions>*</span>
    <span class="s2">*                <configuration>*</span>
    <span class="s2">*                    <instructions>*</span>
    <span class="s2">*                        <Bundle-SymbolicName>com.adobe.cq.key61-bundle</Bundle-SymbolicName>*</span>
    <span class="s2">*                    </instructions>*</span>
    <span class="s2">*                </configuration>*</span>
    <span class="s2">*            </plugin>*</span>
    <span class="s2">*            <plugin>*</span>
    <span class="s2">*                <groupId>org.apache.sling</groupId>*</span>
    <span class="s2">*                <artifactId>maven-sling-plugin</artifactId>*</span>
    <span class="s2">*                <configuration>*</span>
    <span class="s2">*                    <slingUrl>*[<span class="s4">*http://*</span>](http:)*${crx.host}:${crx.port}/apps/myproject/install</slingUrl>*</span>
    <span class="s2">*                    <usePut>true</usePut>*</span>
    <span class="s2">*                </configuration>*</span>
    <span class="s2">*            </plugin>*</span>
    <span class="s2">*            <plugin>*</span>
    <span class="s2">*                <groupId>org.apache.maven.plugins</groupId>*</span>
    <span class="s2">*                <artifactId>maven-javadoc-plugin</artifactId>*</span>
    <span class="s2">*                 <configuration>*</span>
    <span class="s2">*                    <excludePackageNames>*</span>
    <span class="s2">*                        *.impl*</span>
    <span class="s2">*                    </excludePackageNames>*</span>
    <span class="s2">*                 </configuration>*</span>
    <span class="s2">*            </plugin>*</span>
    <span class="s2">*        </plugins>*</span>
    <span class="s2">*    </build>*</span>
    <span class="s2">*</project>*</span></span>

	</div>
