---
layout:     post   				    # 使用的布局（不需要改）
title:      Enable HTTPs in AEM 6.1 				# 标题 
subtitle:    #副标题
date:       2018-12-09 				# 时间
author:     转载 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	AEM							#标签
---
[http://www.aemcq5tutorials.com/tutorials/enable-https-aem/](http://www.aemcq5tutorials.com/tutorials/enable-https-aem/)

<h1><a id="Enable_HTTPs_in_AEM_61_2"></a>Enable HTTPs in AEM 6.1</h1>
<p>++++++++++++</p>
<h4><a id="Enable_Https_for_specific_pages_is_a_major_challenge_with_most_of_the_CMS_but_AEM_has_encapsulated_all_the_complexity_Configuring_https_in_aem_is_very_easy_and_one_of_the_major_requirement_that_now_a_days_client_demands_6"></a>Enable Https for specific pages is a major challenge with most of the CMS, but AEM has encapsulated all the complexity. Configuring https in aem is very easy and one of the major requirement that now a days client demands.</h4>
<h4><a id="After_completing_this_tutorial_you_will_be_able_to_enable_https_on_entire_website or_for_specific_pages_of_your_website_8"></a>After completing this tutorial you will be able to enable https on entire website or for specific pages of your website.</h4>
<p>There are two ways to achieve it :-</p>
<ul>
<li><a href="http://www.aemcq5tutorials.com/tutorials/enable-https-aem/#Apache%20Felix%20Jetty%20Based%20Http%20Service">Through OSGI service <strong>Apache Felix Jetty Based Http</strong> Service. [Move entire author or publish instance to https]</a></li>
<li><a href="http://www.aemcq5tutorials.com/tutorials/enable-https-aem/#https-crxde-node-based">Through crxde by manually creating the node. [Move selected pages of author instance to https]</a></li>
</ul>
<p>Both options has itws own advantaes and it depends upon the requirement which approach you should follow .Personally i prefer option 1 lets see how to enable https in aem using both options:-</p>
<p>For both approaches we need to create key store file.</p>
<p><a href="http://www.aemcq5tutorials.com/tutorials/enable-https-aem/#create-ssl-credentials">How to create credential for ssl development</a>.</p>
<h4><a id="Through_OSGI_service_Apache_Felix_Jetty_Based_Http_Service_21"></a><strong>Through OSGI service Apache Felix Jetty Based Http Service</strong></h4>
<p>Through OSGI service  <strong>Apache Felix Jetty Based Http</strong> Service. [Move entire author or publish instance to https]</p>
<ul>
<li>
<p>Go to Felix console system configurations <strong><a href="http://localhost:4502/system/console/configMgr">http://localhost:4502/system/console/configMgr</a></strong></p>
</li>
<li>
<p>Search for <strong>Apache Felix Jetty Based Http Service.&lt;br&gt;&lt;br&gt;</strong></p>
</li>
<li>
<p>Open <strong>Apache Felix Jetty Based Http Service configuration.</strong></p>
</li>
<li>
<p>Enter below details</p>
</li>
<li>
<p>Click <strong>Save</strong>.</p>
</li>
</ul>
<p>**Note:-**If you get an ajax error on saving check error logs and make sure you are not getting error of port already in use. If port is not available try saving the configuration with some other port name.</p>
<p><strong>You will get Address bind already in use exception as shown below. If port is already in use:-</strong></p>
<p>![adress-bind-already-in-use](./Enable HTTPs in AEM 6.1 _ AEM CQ5 Tutorials_files/adress-bind-already-in-use.png)</p>
<p><strong>That’s it you are done, now you can open your author instance over ssl.</strong></p>
<h4><a id="Through_crxde_by_manually_creating_the_node___40"></a><strong>Through crxde by manually creating the node</strong>  .</h4>
<p>Through crxde by manually creating the node. [Move selected pages of author instance to https]</p>
<ul>
<li><a href="http://www.aemcq5tutorials.com/tutorials/enable-https-aem/#configure-ssl-author">How to configure SSL on Author Instance</a>.</li>
<li><a href="http://www.aemcq5tutorials.com/tutorials/enable-https-aem/#use-ssl-port-cq-aem">How to force cq to use ssl port</a>.</li>
</ul>
<p>Lets understand how to enable http over ssl in aem or how to enable https in aem with the help of a use case.</p>
<p><strong>Use Case:</strong> For example if you want all pages of Geometrix’s  outdoor to be open in http port but the pages under ‘men’ hierarchy to be open using secure https port.</p>
<p>This hierarchy illustrates the use case more clearly:</p>
<h4><a id="Create_Credentials_for_Development_53"></a><strong>Create Credentials for Development:</strong></h4>
<ul>
<li>Create a directory named ssl in the directory where the quickstart JAR file is located.</li>
<li>In the command prompt, type the following command to create the credential and keystore:</li>
</ul>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
</tr>
</tbody>
</table>
<ul>
<li>_<strong>Key_password</strong>_and _<strong>storepassword</strong>_are user defined password. Here I am taking password as <em>123456</em> . You command should look like below screenshot:</li>
</ul>
<p>![generate-keystore-certificate-aem](./Enable HTTPs in AEM 6.1 _ AEM CQ5 Tutorials_files/generate-keystore-certificate-aem.png)<br>
++++++++++++</p>
<p><em><strong>Note:</strong> It is not mandatory to create ssh in the crx-quickstart folder, you can create it anywhere, but in the command you need to specify the absolute path and the same path while configuring the SSL.</em></p>
<h4><a id="Configure_SSL_on_Author_Instance_69"></a><strong>Configure SSL on Author Instance:</strong></h4>
<ul>
<li>Go to crxde –&gt; create a folder under apps by
<ul>
<li><strong>Name</strong> – config.author</li>
<li><strong>Type:</strong> sling:folder</li>
</ul>
</li>
<li>Under this folder create a node with below details
<ul>
<li><strong>Name</strong> – org.apache.felix.http</li>
<li><strong>Type –</strong> sling:OsgiConfig</li>
</ul>
</li>
<li>Add the following properties in the node.</li>
</ul>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong>Name</strong></td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.debug</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.enable</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.keystore</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.keystore.key</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.keystore.key.password</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.keystore.password</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.nio</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.truststore</td>
</tr>
<tr>
<td style="text-align:center">org.apache.felix.https.truststore.password</td>
</tr>
<tr>
<td style="text-align:center">org.osgi.service.http.port.secure</td>
</tr>
</tbody>
</table>
<p><em><strong>Note:-</strong> In above screenshot also <strong>org.apache.felix.https.keystore</strong> and <strong>org.apache.felix.https.truststore</strong> value should be absolute path like:- <strong>C:/Ankur/AEM/crxquickstart/ssl/keystorename.keystore</strong></em></p>
<h4><a id="Forcing_the_Use_of_the_SSL_Port_95"></a><strong>Forcing the Use of the SSL Port</strong></h4>
<ul>
<li>Go to <em>/etc</em> folder.</li>
<li>Create a new <em>sling:folder</em> with name as <em>map</em>.</li>
<li>Now under <em>/etc/map</em> create <em>http</em> node of type <em>sling:folder</em>.</li>
<li>Under that create a node
<ul>
<li><strong>Name</strong> – localhost.4502</li>
<li><strong>Type</strong>– sling:mapping.</li>
</ul>
</li>
<li>Add below properties to this node:
<ul>
<li><strong>Name</strong>: sling:redirect  <strong>Type</strong> : String   <strong>Value</strong> : <a href="https://localhost:5404">https://localhost:5404</a></li>
<li><strong>Name</strong>: sling:match  <strong>Type</strong> : String   <strong>Value</strong> : content/geometrixx-outdoor/en/men/(.*).html</li>
</ul>
</li>
<li>Click **Save ALL ,**your all pages will be automatically open with https domain .</li>
</ul>
<p>Below hierarchy explains above steps more clearly:</p>
<p><em><strong>Note :</strong></em> <em>Sometimes it will not work and if you see logs it will show an error “port is already used”.So at this time just go for another port as i have taken 4000 port number here.</em></p>
<p><strong>Testing localhost is now moved to HTTPS or not:-</strong></p>
<p>![test-https-aem](./Enable HTTPs in AEM 6.1 _ AEM CQ5 Tutorials_files/test-https-aem.png)</p>
<p><strong>But question comes why we are doing all this? What’s the advantages of using http over ssl ?</strong></p>
<p>Its reason is very simple because Https is far more secure than http. If there is a usecase in which more secure data (e.g online transaction or confidential information) needs to transfer, then we can use ssl over http.</p>
<ul>
<li>HTTPS ensures integrity of your website.</li>
<li>HTTPS ensures the privacy and security of your users and their personal information.</li>
</ul>
