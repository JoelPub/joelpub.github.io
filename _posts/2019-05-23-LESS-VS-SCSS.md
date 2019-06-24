---
layout:     post   				    # 使用的布局（不需要改）
title:      Less Sass是什么，如何使用 				# 标题 
subtitle:      #副标题
date:       2019-05-23 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
[https://www.cnblogs.com/hope666/p/6791790.html](https://www.cnblogs.com/hope666/p/6791790.html)


<h1><a id="lesssasshttpswwwcnblogscomhope666p6791790html_1"></a><a href="https://www.cnblogs.com/hope666/p/6791790.html">【less和sass的区别，你了解多少？】</a></h1>
<p>在介绍less和sass的区别之前，我们先来了解一下他们的定义：</p>
<p>一、Less、Sass/Scss是什么?</p>
<p>1、Less：</p>
<p>是一种动态样式语言. 对CSS赋予了动态语言的特性，如变量、继承、运算、函数。</p>
<p>Less 既可以在客户端上运行 (支持IE 6+, Webkit, Firefox)，也可在服务端运行。</p>
<p>2、Sass：</p>
<p>是一种动态样式语言，Sass语法属于缩排语法，</p>
<p>比css比多出好些功能(如变量、嵌套、运算,混入(Mixin)、继承、颜色处理，函数等)，更容易阅读。</p>
<p>Sass与Scss是什么关系?</p>
<p>Sass的缩排语法，对于写惯css前端的web开发者来说很不直观，也不能将css代码加入到Sass里面，因此sass语法进行了改良，Sass 3就变成了Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。</p>
<p>二、less和sass的相同之处</p>
<p>&lt;br&gt;<br>
Less和Sass在语法上有些共性，比如下面这些：</p>
<p>&lt;br&gt;<br>
1、混入(Mixins)——class中的class；&lt;br&gt;<br>
2、参数混入——可以传递参数的class，就像函数一样；&lt;br&gt;<br>
3、嵌套规则——Class中嵌套class，从而减少重复的代码；&lt;br&gt;<br>
4、运算——CSS中用上数学；&lt;br&gt;<br>
5、颜色功能——可以编辑颜色；&lt;br&gt;<br>
6、名字空间(namespace)——分组样式，从而可以被调用；&lt;br&gt;<br>
7、作用域——局部修改样式；&lt;br&gt;<br>
8、JavaScript 赋值——在CSS中使用JavaScript表达式赋值。</p>
<p>三、less和sass的区别</p>
<p>Less和Sass的主要不同就是他们的实现方式。</p>
<p>Less是基于JavaScript，是在客户端处理的。&lt;br&gt;<br>
Sass是基于Ruby的，是在服务器端处理的。</p>
<p>&lt;br&gt;<br>
关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$。</p>
<p>1、Less：</p>
<p>&lt;br&gt;<br>
【两种注释方式】&lt;br&gt;<br>
①//less中的注释，但这种不会被编译</p>
<p>②</p>
<p>/*&lt;br&gt;<br>
 * 这也是less中的注释，但是会被编译&lt;br&gt;<br>
 */</p>
<p>【less中的变量】&lt;br&gt;<br>
1、声明变量:@变量名:变量值;&lt;br&gt;<br>
使用变量: @变量名</p>
<blockquote>
<blockquote>
<blockquote>
<p>less中变量的类型：&lt;br&gt;<br>
①数字类  1 10px  &lt;br&gt;<br>
②字符串：无引号字符串 red ;有引号字符串  “haha”   &lt;br&gt;<br>
③颜色类：red #000000 rgb()    &lt;br&gt;<br>
④值列表类型：用逗号和空格分隔    10px solid red&lt;br&gt;<br>
eg:</p>
</blockquote>
</blockquote>
</blockquote>
<pre><code>1 @length: 100px;
 2 @color:red;
 3 @opa:0.5;
 4 @border:10px solid red;
 5 .borderRadius(@brWidth:10px){
 6 border-radius: @brWidth;
 7 }
 8 .setMargin(lefts,@width){
 9 margin-left:@width;
10 }
</code></pre>
<p>&lt;br&gt;<br>
&lt;br&gt;</p>
<blockquote>
<blockquote>
<blockquote>
<p>变量使用原则：&lt;br&gt;<br>
多次频繁出现的值、需要修改的值，设为变量</p>
</blockquote>
</blockquote>
</blockquote>
<p>2、混合(MiXins)&lt;br&gt;<br>
①无参混合&lt;br&gt;<br>
声明：.name{}  选择器中调用：.name;</p>
<p>②代参混合&lt;br&gt;<br>
无默认值声明：.name(@param){} 调用：.name(parValue);&lt;br&gt;<br>
有默认值声明：.name(@param:value){} &lt;br&gt;<br>
调用：.name(parValue);  parValue可省&lt;br&gt;</p>
<blockquote>
<blockquote>
<blockquote>
<p>如果声明时，参数没有默认值，则调用时必须赋值，否则报错！&lt;br&gt;<br>
无参混合，会在css中编译除同名的class选择器，有参的不会</p>
</blockquote>
</blockquote>
</blockquote>
<p>3、less的匹配模式：使用混合进行匹配，类似于if结构&lt;br&gt;<br>
声明：&lt;br&gt;<br>
.name(条件一，参数){} &lt;br&gt;<br>
.name(条件二，参数){} &lt;br&gt;<br>
.name(@_,参数){}&lt;br&gt;<br>
调用：.name(条件值，参数值);</p>
<p>匹配规则：根据调用时提供的条件值去寻找与之匹配的&quot;MiXins&quot;执行，其中@_表示永远需要执行的部分</p>
<p>4、less中的运算&lt;br&gt;</p>
<ul>
<li>
<ul>
<li>
<ul>
<li>/  可带、可不带单位&lt;br&gt;<br>
颜色运算时，红绿蓝分三组计算，组内可进位，组间互不干涉</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>5、包含了传进来的所有参数：border:@arguments;&lt;br&gt;<br>
6、less中的嵌套：保留HTML中的代码结构&lt;br&gt;<br>
①嵌套默认是后代选择器，如果需要子代选择器，则在子代前加&gt;&lt;br&gt;<br>
②.&amp;表示上一层       &amp;:表示上一层的hover事件&lt;br&gt;<br>
eg:</p>
<pre><code>1 section{
 2 p{
 3 color: red;
 4 background-color: yellowgreen;
 5 text-align: center;
 6 }
 7 ul{
 8 padding: 0px;
 9 list-style: none;
10 li{
11 float: left;
12 margin: 10px;
13 width: 100px;
14 text-align: center;
15 border: @border;
16 &amp;:hover{
17 background-color: yellow;
18 }
19 }
</code></pre>
<p>2、Sass：</p>
<p>1、Sass中的变量&lt;br&gt;<br>
使用   $变量名：变量值，声明变量；</p>
<p>如果变量需要在字符串中嵌套，则需使用#加大括号包裹；&lt;br&gt;<br>
border-#{$left}:10px solid blue;</p>
<p>2、Sass中的运算，会将单位也进行运算，使用时需注意最终单位&lt;br&gt;<br>
例：10px<em>10px=100px</em>px</p>
<p>3、sass中的嵌套：选择器嵌套，属性嵌套，伪类嵌套</p>
<p>选择器嵌套 ul{ li{} } 后代&lt;br&gt;<br>
           ul{ &gt;li{} }  子代&lt;br&gt;<br>
&amp;:表示上一层 div{ ul{ li{ &amp;==“div ul li” } } }</p>
<p>属性嵌套：属性名与大括号之间必须有:   &lt;br&gt;<br>
例如:border:{color:red;}</p>
<p>伪类嵌套：ul{li{ &amp;:hover{ “ul li:hover” } } }</p>
<p>4、混合宏、继承、占位符</p>
<p>①混合宏：声明：@mixin name($param:value){}&lt;br&gt;<br>
调用：@include name(value);&lt;br&gt;</p>
<blockquote>
<blockquote>
<blockquote>
<p>声明时，可以有参，可以无参；可带默认值，也可不带；但是，调用时，必须符合声明规范。同less&lt;br&gt;<br>
优点；可以传参，不会生成同名class；&lt;br&gt;<br>
缺点：会将混合宏中的代码，copy到对应的选择器中，产生冗余代码！</p>
</blockquote>
</blockquote>
</blockquote>
<p>②继承：声明：.class{} 调用：@extend .class;&lt;br&gt;</p>
<blockquote>
<blockquote>
<blockquote>
<p>优点：继承的相同代码，会提取到并集选择器中，减少冗余代码&lt;br&gt;<br>
缺点：无法进行传参，会在css中，生成一个同名class</p>
</blockquote>
</blockquote>
</blockquote>
<p>③占位符：声明：&amp;class{}  调用：@extend  %class;&lt;br&gt;</p>
<blockquote>
<blockquote>
<blockquote>
<p>优点：继承相同代码，会提前到并集选择器；不会生成同名的class选择器&lt;br&gt;<br>
缺点：无法进行传参</p>
</blockquote>
</blockquote>
</blockquote>
<p>综上所述：当需要传递参数时，用混合宏；当有现成的class时用继承；当不需要参数，也不需要class时，用占位符</p>
<p>5、if条件结构：&lt;br&gt;<br>
@if 条件{}&lt;br&gt;<br>
@else{}</p>
<p>6、for循环结构：&lt;br&gt;<br>
@for $i from 1 to 10{}  不包含10;&lt;br&gt;<br>
@for $i from 1 through 10{}  包含10;</p>
<p>7、while循环结构：&lt;br&gt;<br>
$j:1;&lt;br&gt;<br>
@while $j&lt;10{&lt;br&gt;<br>
.while#{$j}{&lt;br&gt;<br>
border:#{$j}px solid red;&lt;br&gt;<br>
}&lt;br&gt;<br>
$j:$j+1;&lt;br&gt;<br>
}</p>
<p>8、each循环遍历&lt;br&gt;<br>
@each item in a,b,c,d{&lt;br&gt;<br>
//item表示每一项&lt;br&gt;<br>
}</p>
<p>9、函数：&lt;br&gt;<br>
@function func($length){&lt;br&gt;<br>
$length1:$length*5;&lt;br&gt;<br>
@return $length1;&lt;br&gt;<br>
}&lt;br&gt;<br>
调用：func(10px);&lt;br&gt;<br>
10、使用…将传进来的所有参数，接收到一个变量中&lt;br&gt;<br>
@mixin bordeRadius($param1…){&lt;br&gt;<br>
//使用…将传进来的所有参数，接收到一个变量中&lt;br&gt;<br>
border-radius:$param1;&lt;br&gt;<br>
-webkit-border-radius:$param1;&lt;br&gt;<br>
}</p>
