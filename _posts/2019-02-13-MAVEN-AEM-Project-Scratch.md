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
<ul>
<li>Intellij AEM Plugin:<a href="https://github.com/headwirecom/aem-ide-tooling-4-intellij/blob/master/documenation/AEM%20Tooling%20Plugin%20for%20IntelliJ%20IDEA.md">https://github.com/headwirecom/aem-ide-tooling-4-intellij/blob/master/documenation/AEM%20Tooling%20Plugin%20for%20IntelliJ%20IDEA.md</a></li>
<li>Using archetype         ��<a href="https://github.com/Adobe-Marketing-Cloud/aem-project-archetype">https://github.com/Adobe-Marketing-Cloud/aem-project-archetype</a>��</li>
<li>config settings.xml in .m2 folder (<a href="https://helpx.adobe.com/experience-manager/using/first-osgi.html">https://helpx.adobe.com/experience-manager/using/first-osgi.html</a>��</li>
<li>
<ul>
<li>create simple content pakcage archetype</li>
</ul>
</li>
<li></li>
</ul>
<pre><code>mvn archetype:generate -DarchetypeGroupId=com.day.jcr.vault -DarchetypeArtifactId=simple-content-package-archetype -DarchetypeVersion=1.0.2 -DarchetypeRepository=adobe-public-releases -DgroupId=my-group-id -Dversion=1.0-SNAPSHOT -Dpackage=com.mycompany.myproject -DappsFolderName=myproject -DpackageGroup=&quot;My Company&quot; -DpackageGroup=&quot;My Company&quot; -DartifactId=myproject -DartifactName=&quot;My Project&quot;
</code></pre>
<ul>
<li></li>
</ul>
<pre><code>mvn clean install -PautoInstallPackage Clean: remove target folder created during mvn compile
</code></pre>
<ul>
<li>&lt;i&gt;Settings.xml&lt;/i&gt;</li>
<li></li>
</ul>
<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd &quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;!-- ====================================================================== --&gt;
    &lt;!-- P A R E N T P R O J E C T D E S C R I P T I O N --&gt;
    &lt;!-- ====================================================================== --&gt;
    &lt;parent&gt;
        &lt;groupId&gt;com.adobe.cq&lt;/groupId&gt;
        &lt;artifactId&gt;key61&lt;/artifactId&gt;
        &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
    &lt;/parent&gt;
 
    &lt;!-- ====================================================================== --&gt;
    &lt;!-- P R O J E C T D E S C R I P T I O N --&gt;
    &lt;!-- ====================================================================== --&gt;
 
    &lt;artifactId&gt;key61-bundle&lt;/artifactId&gt;
    &lt;packaging&gt;bundle&lt;/packaging&gt;
    &lt;name&gt;My Project Bundle&lt;/name&gt;
 
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.osgi&lt;/groupId&gt;
            &lt;artifactId&gt;org.osgi.compendium&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.osgi&lt;/groupId&gt;
            &lt;artifactId&gt;org.osgi.core&lt;/artifactId&gt;
        &lt;/dependency&gt;
                 
        &lt;dependency&gt;
            &lt;groupId&gt;org.apache.felix&lt;/groupId&gt;
            &lt;artifactId&gt;org.apache.felix.scr.annotations&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.slf4j&lt;/groupId&gt;
            &lt;artifactId&gt;slf4j-api&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;junit&lt;/groupId&gt;
            &lt;artifactId&gt;junit&lt;/artifactId&gt;
        &lt;/dependency&gt;
             
            &lt;dependency&gt; 
            &lt;groupId&gt;com.adobe.granite&lt;/groupId&gt; 
            &lt;artifactId&gt;com.adobe.granite.fragment.xml&lt;/artifactId&gt;
            &lt;version&gt;0.1.0&lt;/version&gt; 
            &lt;scope&gt;provided&lt;/scope&gt; 
        &lt;/dependency&gt;
         
        &lt;dependency&gt;
    &lt;groupId&gt;javax.mail&lt;/groupId&gt;
    &lt;artifactId&gt;javax.mail-api&lt;/artifactId&gt;
    &lt;version&gt;1.5.2&lt;/version&gt;
&lt;/dependency&gt;
         
        
    &lt;/dependencies&gt;
 
    &lt;!-- ====================================================================== --&gt;
    &lt;!-- B U I L D D E F I N I T I O N --&gt;
    &lt;!-- ====================================================================== --&gt;
    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.felix&lt;/groupId&gt;
                &lt;artifactId&gt;maven-scr-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;id&gt;generate-scr-descriptor&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;scr&lt;/goal&gt;
                        &lt;/goals&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.felix&lt;/groupId&gt;
                &lt;artifactId&gt;maven-bundle-plugin&lt;/artifactId&gt;
                &lt;extensions&gt;true&lt;/extensions&gt;
                &lt;configuration&gt;
                    &lt;instructions&gt;
                        &lt;Bundle-SymbolicName&gt;com.adobe.cq.key61-bundle&lt;/Bundle-SymbolicName&gt;
                    &lt;/instructions&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.sling&lt;/groupId&gt;
                &lt;artifactId&gt;maven-sling-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;slingUrl&gt;http://${crx.host}:${crx.port}/apps/myproject/install&lt;/slingUrl&gt;
                    &lt;usePut&gt;true&lt;/usePut&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-javadoc-plugin&lt;/artifactId&gt;
                 &lt;configuration&gt;
                    &lt;excludePackageNames&gt;
                        *.impl
                    &lt;/excludePackageNames&gt;
                 &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;
</code></pre>
