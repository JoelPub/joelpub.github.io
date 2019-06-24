---
layout:     post   				    # 使用的布局（不需要改）
title:      React Native Error				# 标题 
subtitle:   Fetch—-Type Error: Network request failed #副标题
date:       2016-09-17 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="FetchType_Error_Network_request_failed_1"></a>Fetch—-Type Error: Network request failed</h1>
<p><a href="http://bbs.reactnative.cn/topic/1668/fetch-api%E6%8A%A5%E9%94%99-type-error-network-request-failed/7">http://bbs.reactnative.cn/topic/1668/fetch-api报错-type-error-network-request-failed/7</a></p>
<p>在 info.plist file 加入</p>
<pre><code>&lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;NSAllowsArbitraryLoads&lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;
&lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;true&lt;/span&gt;/&gt;&lt;/span&gt;
</code></pre>
<p>像这样</p>
<pre><code>    &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;NSAppTransportSecurity&lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;
    &lt;span class=&quot;hljs-comment&quot;&gt;&lt;!--See http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/ --&gt;&lt;/span&gt;
    &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;dict&lt;/span&gt;&gt;&lt;/span&gt;
        &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;NSAllowsArbitraryLoads&lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;
        &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;true&lt;/span&gt;/&gt;&lt;/span&gt;
        &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;NSExceptionDomains&lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;
        &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;dict&lt;/span&gt;&gt;&lt;/span&gt;
            &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;localhost&lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;
            &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;dict&lt;/span&gt;&gt;&lt;/span&gt;
                &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;NSTemporaryExceptionAllowsInsecureHTTPLoads&lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;key&lt;/span&gt;&gt;&lt;/span&gt;
                &lt;span class=&quot;hljs-tag&quot;&gt;&lt;&lt;span class=&quot;hljs-title&quot;&gt;true&lt;/span&gt;/&gt;&lt;/span&gt;
            &lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;dict&lt;/span&gt;&gt;&lt;/span&gt;
        &lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;dict&lt;/span&gt;&gt;&lt;/span&gt;
    &lt;span class=&quot;hljs-tag&quot;&gt;&lt;/&lt;span class=&quot;hljs-title&quot;&gt;dict&lt;/span&gt;&gt;
&lt;/span&gt;
</code></pre>
<pre><code></code></pre>
<p>添加这一栏,默认是NO, 改成YES即可</p>
<pre><code></code></pre>
