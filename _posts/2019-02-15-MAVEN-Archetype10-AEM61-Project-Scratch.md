---
layout:     post   				    # 使用的布局（不需要改）
title:      Creating your first Adobe Experience Manager 6.1 Project using Adobe Maven Archetype 10 				# 标题 
subtitle:   ( Archetype )   #副标题
date:       2019-02-15 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	AEM							#标签
---
<h1><a id="Creating_your_first_Adobe_Experience_Manager_61_Project_using_Adobe_Maven_Archetype_10_1"></a>Creating your first Adobe Experience Manager 6.1 Project using Adobe Maven Archetype 10</h1>
<p><a href="https://helpx.adobe.com/experience-manager/using/first-arch10.html">https://helpx.adobe.com/experience-manager/using/first-arch10.html</a></p>
<p>Another guide with java class create</p>
<p><a href="https://helpx.adobe.com/experience-manager/using/htl_61.html">https://helpx.adobe.com/experience-manager/using/htl_61.html</a></p>
<ol>
<li>
<p>Open the command prompt and go to your working directory (for example, /var/www/html/aem).</p>
</li>
<li>
<p>Run the following Maven command:</p>
</li>
</ol>
<p><code>mvn archetype:generate -DarchetypeGroupId=com.adobe.granite.archetypes -DarchetypeArtifactId=aem-project-archetype -DarchetypeVersion=10 -DarchetypeRepository=https://repo.adobe.com/nexus/content/groups/public/</code></p>
<ol start="3">
<li>When prompted, specify the following information:</li>
</ol>
<p><strong>groupId</strong>– io.github.joelpub</p>
<p>maven group id : for me it’s io.github.joelpub <br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-300x59.png?raw=true" alt="image"><br>
<strong>artifactId</strong>– amp_project</p>
<p>1. created folder name</p>
<p>2. maven project artifactid<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-1-300x65.png?raw=true" alt="image"><br>
<strong>version</strong>– 1.0-SNAPSHOT</p>
<p><strong>package</strong>– io.github.joelpub</p>
<p>java class package name</p>
<p><strong>appsFolderName</strong>– amp_app</p>
<p>/apps folder name and /etc/designs folder name<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-2-188x300.png?raw=true" alt="image"><br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-3-208x300.png?raw=true" alt="image"><br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-7.png?raw=true" alt="image"><br>
<strong>artifactName</strong>– AMPProject</p>
<p>maven project description<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-4-300x60.png?raw=true" alt="image"><br>
<strong>componentGroupName</strong>– amp_components</p>
<p>AEM component group name , for the value of property ‘component’ in some nodes, for details to be continue…<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-5-300x56.png?raw=true" alt="image"><br>
<strong>contentFolderName</strong>– amp_pages</p>
<p>/content folder name<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-6.png?raw=true" alt="image"><br>
<strong>cssId</strong>– ampcss</p>
<p>define name of client lib category css <br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-8-300x45.png?raw=true" alt="image"><br>
<strong>packageGroup</strong>-amp_package</p>
<p>maven configuration for vlt? to be continue<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-9-300x267.png?raw=true" alt="image"><br>
<strong>siteName</strong>– amp_site</p>
<p>for value of property ‘title’ in some nodes<br>
<img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Capture-10-300x35.png?raw=true" alt="image"></p>
<ol start="4">
<li>
<p>When prompted, specify Y.</p>
</li>
<li>
<p>Once done, you will see a message like:</p>
</li>
</ol>
<pre><code>[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:42 min
[INFO] Finished at: 2016-04-25T14:34:19-04:00
[INFO] Final Memory: 16M/463M
[INFO] ------------------------------------------------------------------------
</code></pre>
<ol start="6">
<li>Add the following POM dependencies to the POM file located at /var/www/html/aem/amp_project</li>
</ol>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;com.adobe.aem&lt;/groupId&gt;
    &lt;artifactId&gt;uber-jar&lt;/artifactId&gt;
    &lt;version&gt;6.1.0&lt;/version&gt;
    &lt;classifier&gt;obfuscated-apis&lt;/classifier&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;org.apache.geronimo.specs&lt;/groupId&gt;
    &lt;artifactId&gt;geronimo-atinject_1.0_spec&lt;/artifactId&gt;
    &lt;version&gt;1.0&lt;/version&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre>
<ol start="7">
<li>To build the OSGi bundle by using Maven, perform these steps:</li>
</ol>
<p>a. Open the command prompt and go to the /var/www/html/aem/amp_project folder.</p>
<p>b. Run the following maven command:<br>
<code>mvn -PautoInstallPackage install</code></p>
<p>c. The OSGi component can be found in the following folder: /var/www/html/aem/amp_project\core\target. The file name of the OSGi component is <em>echo62.core-1.0-SNAPSHOT.jar</em>.</p>
<p>Note:</p>
<p>The command -PautoInstallPackage automatically deploys the OSGi bundle to AEM.</p>
