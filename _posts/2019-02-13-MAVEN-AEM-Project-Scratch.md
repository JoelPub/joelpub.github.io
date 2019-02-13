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
*   Using archetype&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（[https://github.com/Adobe-Marketing-Cloud/aem-project-archetype](https://github.com/Adobe-Marketing-Cloud/aem-project-archetype)）
*   config settings.xml in .m2 folder ([https://helpx.adobe.com/experience-manager/using/first-osgi.html](https://helpx.adobe.com/experience-manager/using/first-osgi.html)）
*   <div class="line number1 index0 alt2">

    *   create simple content pakcage archetype
</div>

*   <pre class="line number1 index0 alt2"><span style="font-size: 10pt;">_`mvn archetype:generate -DarchetypeGroupId=com.day.jcr.vault ``-DarchetypeArtifactId=simple-content-package-archetype ``-DarchetypeVersion=1.0.2 ``-DarchetypeRepository=adobe-public-releases&nbsp;``-DgroupId=my-group-``id``&nbsp;``-Dversion=1.0-SNAPSHOT``&nbsp;``-Dpackage=com.mycompany.myproject ``-DappsFolderName=myproject<code class="shell spaces">&nbsp;``-DpackageGroup=``"My Company"`</code>`&nbsp;``-DartifactId=myproject&nbsp;``-DartifactName=``"My Project"`_</span></pre>

*   <div class="line number1 index0 alt2">mvn clean install -PautoInstallPackage<sup>&nbsp;Clean: remove target folder created during mvn compile</sup></div>

*   <span class="s2">_Settings.xml_</span>
*   <pre><span style="font-size: 8pt;"><span class="s2">_&lt;?xml_</span>_ _<span class="s2">_version="1.0"_</span>_ _<span class="s2">_encoding="UTF-8"?&gt;_</span>
<span class="s2">_&lt;project_</span>_ _<span class="s2">_xmlns="_[<span class="s4">_http://maven.apache.org/POM/4.0.0_</span>](http://maven.apache.org/POM/4.0.0)_"_</span>_ _<span class="s2">_xmlns:xsi="_[<span class="s4">_http://www.w3.org/2001/XMLSchema-instance_</span>](http://www.w3.org/2001/XMLSchema-instance)_"_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;xsi:schemaLocation="_[<span class="s4">_http://maven.apache.org/POM/4.0.0_</span>](http://maven.apache.org/POM/4.0.0)_ _[<span class="s4">_http://maven.apache.org/maven-v4_0_0.xsd_</span>](http://maven.apache.org/maven-v4_0_0.xsd)_ "&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- ====================================================================== --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- P A R E N T P R O J E C T D E S C R I P T I O N --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- ====================================================================== --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;com.adobe.cq&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;key61&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;/parent&gt;_</span><span class="s3">
_&nbsp;_
</span><span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- ====================================================================== --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- P R O J E C T D E S C R I P T I O N --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- ====================================================================== --&gt;_</span><span class="s3">
_&nbsp;_
</span><span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;key61-bundle&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;packaging&gt;bundle&lt;/packaging&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;name&gt;My Project Bundle&lt;/name&gt;_</span><span class="s3">
_&nbsp;_
</span><span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependencies&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.osgi&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;org.osgi.compendium&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.osgi&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;org.osgi.core&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.apache.felix&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;org.apache.felix.scr.annotations&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.slf4j&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;slf4j-api&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;junit&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;junit&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependency&gt; _</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;com.adobe.granite&lt;/groupId&gt; _</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;com.adobe.granite.fragment.xml&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.1.0&lt;/version&gt; _</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;scope&gt;provided&lt;/scope&gt; _</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;javax.mail&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;javax.mail-api&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;1.5.2&lt;/version&gt;_</span>
<span class="s2">_&lt;/dependency&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dependencies&gt;_</span><span class="s3">
_&nbsp;_
</span><span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- ====================================================================== --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- B U I L D D E F I N I T I O N --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- ====================================================================== --&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;build&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;plugins&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.apache.felix&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;maven-scr-plugin&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;executions&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;execution&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;id&gt;generate-scr-descriptor&lt;/id&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;goals&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;goal&gt;scr&lt;/goal&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/goals&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/execution&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/executions&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.apache.felix&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;maven-bundle-plugin&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;extensions&gt;true&lt;/extensions&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;configuration&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;instructions&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Bundle-SymbolicName&gt;com.adobe.cq.key61-bundle&lt;/Bundle-SymbolicName&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/instructions&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/configuration&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.apache.sling&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;maven-sling-plugin&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;configuration&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;slingUrl&gt;_[<span class="s4">_http://_</span>](http:)_${crx.host}:${crx.port}/apps/myproject/install&lt;/slingUrl&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;usePut&gt;true&lt;/usePut&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/configuration&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;maven-javadoc-plugin&lt;/artifactId&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;configuration&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;excludePackageNames&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*.impl_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/excludePackageNames&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/configuration&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/plugin&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/plugins&gt;_</span>
<span class="s2">_&nbsp;&nbsp;&nbsp;&nbsp;&lt;/build&gt;_</span>
<span class="s2">_&lt;/project&gt;_</span></span></pre>
