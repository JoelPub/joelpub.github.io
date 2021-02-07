---
layout:     post   				    # 使用的布局（不需要改）
title:      img撑满全屏 				# 标题 
subtitle:   的方法   #副标题
date:       2020-07-13 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	CSS							#标签
---





# img撑满全屏的方法（img非背景图）

![](/img/blog/img-full-screen_files/original.png) [小丫007](https://blog.csdn.net/xiaoya_syt)2017-07-13 10:45:50![](/img/blog/img-full-screen_files/articleReadEyes.png)25758<a name="blog_detail_zk_collection"> ![](/img/blog/img-full-screen_files/tobarCollect.png) ![](/img/blog/img-full-screen_files/tobarCollectionActive.png) 收藏  5  </a>分类专栏：[css](https://blog.csdn.net/xiaoya_syt/category_6768970.html)文章标签：[img css](https://so.csdn.net/so/search/s.do?q=img%20css&t=blog&o=vip&s=&l=&f=&viparticle=)最后发布:2017-07-13 10:45:50 首次发布:2017-07-13 10:45:50 版权声明：本文为博主原创文章，遵循[CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) 版权协议，转载请附上原文出处链接和本声明。
 本文链接：[https://blog.csdn.net/xiaoya_syt/article/details/75045505](https://blog.csdn.net/xiaoya_syt/article/details/75045505) [版权]()

我有一个模板，想按常规做一个div里面放置一个img图片，并且让图片铺满容器，自适应容器大小。HTML结构代码如下（在这个盒模型上，我已经放置了一些不重要的样式）。

```
<ol class="hljs-ln"><li><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag"><</span><span class="hljs-selector-tag" style="font-weight:bold"><span class="hljs-tag"><span class="hljs-name">div</span></span></span><span class="hljs-tag"> <span class="hljs-attr">style</span>=</span><span class="hljs-string" style="color:rgb(221,17,68)"><span class="hljs-tag"><span class="hljs-string">"height:270px;width:400px;border:2px black solid;"</span></span></span><span class="hljs-tag">></span></div></div></li><li><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag"><</span><span class="hljs-selector-tag" style="font-weight:bold"><span class="hljs-tag"><span class="hljs-name">a</span></span></span><span class="hljs-tag"> <span class="hljs-attr">href</span>=</span><span class="hljs-string" style="color:rgb(221,17,68)"><span class="hljs-tag"><span class="hljs-string">"http://www.paipk.com"</span></span></span><span class="hljs-tag">></span><span class="hljs-tag"><</span><span class="hljs-selector-tag" style="font-weight:bold"><span class="hljs-tag"><span class="hljs-name">img</span></span></span><span class="hljs-tag"> <span class="hljs-attr">src</span>=</span><span class="hljs-string" style="color:rgb(221,17,68)"><span class="hljs-tag"><span class="hljs-string">"..."</span></span></span><span class="hljs-tag"> <span class="hljs-attr">alt</span>=</span><span class="hljs-string" style="color:rgb(221,17,68)"><span class="hljs-tag"><span class="hljs-string">"&#x62CD;&#x62CD;&#x770B;&#x79D1;&#x6280;"</span></span></span><span class="hljs-tag">></span><span class="hljs-tag"></<span class="hljs-name">a</span>></span></div></div></li><li><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag"></<span class="hljs-name">div</span>></span></div></div></li></ol>
```

现在我初步想了两个方案，但都不是太完善的，想请高手帮忙参考下：

## object-fit解决方法：

直接给img套用一个object-fit:cover;让img填满盒模型。

```css
div img{    width: 100%;    height: 100%;    object-fit:cover;}
```

这个方法很简单也很实用，也符合理论上对盒模型和IMG容器的解释。因为img本来也是一个容器，只不过它是公认的用来引导图片的容器，用替换法把图片替
换成覆盖的尺寸就是我要的效果。这个思路在理论上都是正确的。但由于是新代码，在一些浏览器上还不兼容。回退机制上，如果浏览器不认识object-
fit，那整个图片就会被强制拉伸成容器的尺寸。所以在回退机制上有待解决！

min方法:

这是我这两天思考出来的，是通过对img元素垂直居中，并将它的高度和宽度设置一个最小满屏值，这样，也能让图片铺满容器：

```css
div{    position:relative;    overflow:hidden;}div img{    position: absolute;    top: 50%;    left: 50%;    display: block;    min-width: 100%;    min-height: 100%;    transform:translate(-50%,-50%);}
```

图片高度或宽度任意一尺寸小于容器时，这个情况是正常的，但如果图片的高度和宽度尺寸都大于容器，图片也能铺满，但容器就只显示大图的中间部分。这就是这个方法的缺陷。
last 如果不需要支持IE老版本的话，可以使用background-size属性cover进行设置。如：（背景图img撑满全屏）<br>

```javascript
<div class="img"></div>
```

```css
div.img {            width: 400px;            height: 200px;            background-image: url(http://img5.imgtn.bdimg.com/it/u=4021999557,1995524928&fm=11&gp=0.jpg);            -webkit-background-size:cover;            -moz-background-size: cover;            -o-background-size: cover;            background-size: cover;        }
```

<br>

* [![](/img/blog/img-full-screen_files/tobarThumbUpactive.png) ![](/img/blog/img-full-screen_files/tobarThumbUpactive.png) ![](/img/blog/img-full-screen_files/tobarThumbUp.png) 
