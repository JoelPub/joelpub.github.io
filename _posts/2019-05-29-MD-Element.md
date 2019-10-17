---
layout:     post   				    # 使用的布局（不需要改）
title:      MD element 				# 标题 
subtitle:   常用标签   #副标题
date:       2019-05-29 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	MarkDown							#标签
---
**MD 常用的一些元素**

## 锚点
<pre><code>
## 关键知识点
</code></pre>
## 大标题
<pre><code>
**MD 常用的一些元素**
</code></pre>
## 小标题
<pre><code>
* 如何在`MarkDown`中使用尖括号
</code></pre>
## 图片
<pre><code>
![mdimg](../../../../img/blog/X_files/5615034b2f6343828391206d43babe37_th.png)
</code></pre>
<pre><code>
&lt;img src="https://github.com/JoelPub/joelpub.github.io/blob/master/img/blog/Screen Shot 2019-05-29 at 3.20.11 PM.png?raw=true" alt="image"&gt;
</code></pre>
## PDF
<pre><code>
&lt;embed width="100%" min-height="540px" name="plugin" id="plugin" src="https://raw.githubusercontent.com/JoelPub/joelpub.github.io/master/img/blog/2.pdf" type="application/pdf" internalinstanceid="9"&gt;
</code></pre>
## 代码
<pre><code>
&lt;pre&gt;&lt;code&gt;
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
<pre><code>
```javascript
  var ihubo = {
    nickName  : "joel",
    site : "https://joelpub.github.io"
  }
```
</code></pre>
<pre><code>
> "...Only alphanumerics \[0-9a-zA-Z\], the special characters "$-_.+!*'()," **\[not including the quotes - ed\]**, and reserved characters used for their reserved purposes may be used unencoded within a URL."
</code></pre>

## 超链接
<pre><code>
&lt;a href="https://blog.csdn.net/xiangwanpeng/article/details/53149774"&gt;如何在MarkDown中使用尖括号&lt;/a&gt;
</code></pre>
<pre><code>
[SIPG](https://www.shobserver.com/toutiao/html/115104.html?group_id=6621114274582364680&app=) 
</code></pre>
<pre><code>
weibo: [@joelpub](http://weibo.com/joelpub)
</code></pre> 

## 序号
<pre><code>
1\.使用windows版的chrome版本
2\.右键另存为Y 网页，全部
3\.把Y_files文件夹放到`img\blog`
</code></pre> 

* 如何在`MarkDown`中使用尖括号  
仅当使用pre code的方法注释需要，使用三个点的注释就不用了
[MarkDown中使用尖括号]("https://blog.csdn.net/xiangwanpeng/article/details/53149774) 
<pre><code>
使用转义字符。使用 "& l t ;" 代替 “<” , 使用 "& g t ;" 代替 ">"(记得去掉空格）。 例如要输出<a>，则需要写为& l t ; a & g t ; 
</code></pre>
