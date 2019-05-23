---
layout:     post   				    # 使用的布局（不需要改）
title:      Less Sass是什么，如何使用 				# 标题 
subtitle:      #副标题
date:       2019-05-23 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	web							#标签
---
[https://www.jianshu.com/p/bf641d9d979a](https://www.jianshu.com/p/bf641d9d979a)


<h1><a id="sassless_1"></a>sass、less是什么，如何使用？</h1>
<p><a href="https://www.jianshu.com/u/52eae30447e9">远望的云</a> <a href="">关注</a><br>
0.8<br>
2017.06.21 10:49*字数 2112 阅读 17045 评论 3 喜欢 26</p>
<p>1.背景介绍</p>
<p>CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域），需要书写大量看似没有逻辑的代码，不方便维护及扩 展，不利于复用，尤其对于非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码。为了方便前端开发的工作量，出现了sass和less.</p>
<p>2.知识解剖</p>
<p>Sass背景介绍</p>
<p>Sass是对CSS（层叠样式表）的语法的一种扩充，诞生于2007年，最早也是最成熟的一款CSS预处理器语言，它 可以使用变量、常量、嵌套、混 入、函数等功能，可以更有效有弹性的写出CSS。Sass最后还是会编译出合法 的CSS让浏览器使用，也就是说它本身的语法并不太容易让浏览器识别，因为 它不是标准的CSS格式，在它的 语法内部可以使用动态变量等，所以它更像一种极简单的动态语言。 其实现在的Sass已经有了两套语法规则：一个依旧是用缩进作为分隔符来区分代码块的；另一套规则和CSS一 样采用了大括号（｛｝）作为分隔符。后一种语法规则又名SCSS，在Sass3之后的版本都支持这种语法规则。</p>
<p>SASS是什么？</p>
<p>Sass（Syntactically Awesome Style Sheets）是一个相对新的编程语言，Sass为web前端开发而生，可以用它来定 义一套新的语法规则和函数，以加强和提升CSS。通过这种新的编程语言，你可以使用最高效的方式，以少量的代 码创建复杂的设计。它改进并增强了CSS的能力，增加了变量，局部和函数这些特性。而这只使Sass一部分利器！</p>
<p>SASS的安装</p>
<p>SASS是Ruby语言写的，但是两者的语法没有关系。不懂Ruby，照样使用。只是必须先安装Ruby，然后再安装SASS。</p>
<p><a href="https://link.jianshu.com/?t=https%3A%2F%2Frubyinstaller.org%2Fdownloads%2F">WINDOW下安装RUBY</a>链接</p>
<p>在系统上运行来安装Ruby。添加Ruby的bin文件夹到PATH用户变量和系统变量以使用 gem 命令工作，第二个和第三个框去要打勾。</p>
<p>在系统中打开命令提示符，然后输入以下命令行</p>
<p>gem source -ahttp://rubygems.org/</p>
<p>gem sources -ahttp://ruby.taobao.org/</p>
<p>gem install sass</p>
<p>出现屏幕下方信息，表示SASS 安装成功，(国内线路不稳定，需要多试几次)。</p>
<p>SASS使用-文件明后缀</p>
<p>sass有两种后缀名文件：一种后缀名为sass，不使用大括号和分号；另一种就是我们这里使用的scss文件，这种和 我们平时写的css文件格式差不多，使用大括号和分号。而本教程中所说的所有sass文件都指后缀名为scss的文件。 在此也建议使用后缀名为scss的文件，以避免sass后缀名的严格格式要求报错。</p>
<p>sass的导入</p>
<p>sass的导入(@import)规则和CSS的有所不同，编译时会将@import的scss文件合并进来只生成一个CSS文件。但是如 果你在sass文件中导入css文件如@import ‘reset.css’，那效果跟普通CSS导入样式文件一样，导入的css文件不会 合并到编译后的文件中，而是以@import方式存在。 所有的sass导入文件都可以忽略后缀名.scss。一般来说基础的文件命名方法以_开头，如_mixin.scss。这种文件在 导入的时候可以不写下划线，可写成@import “mixin”</p>
<p>sass的导入</p>
<p>sass的注释</p>
<p>LESS的背景介绍</p>
<p>（2009年开源的一个项目，受Sass的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手。LESS提供了 多种方式能平滑的将写好的代码转化成标准的CSS代码。</p>
<p>LESS的介绍</p>
<p>第一个，less是单独的一种文件，可以理解为css的升级版，完全按照css写也没问题，不过它提供了很多便利的东 西， 可以省好多代码量。第二个，html只认css,所以需要配套一些软件将less解析成css,引用时候，直接引用css 就好。gulp,koala 都是常用的，Koala好像简单且方便一点。 多种方式能平滑的将写好的代码转化成标准的CSS代码。</p>
<p>LESS的安装</p>
<p>LESS的安装和Sass安装有所不同，他不需要依赖于Ruby环境，就能直接安装使用。不过LESS安装分为两种：客户端和 服务器端安装。</p>
<p>less客户端安装</p>
<p>我们可以直接在客户端使用&quot;.less&quot;（LESS源文件），只需要在官网载一个Javascript脚本文件主&quot;less.js&quot;，然后 在我们需要引入LESS源文件的HTML的中加入如下代码。</p>
<p>需要注意的是：在引入&quot;.less&quot;文件中，“link&quot;的&quot;rel&quot;属性要设置为&quot;stylesheet/less”。还有更重要的一 点需要注意的是：LESS源文件一定要在&quot;less.js&quot;引入之前引入，这样才能保证LESS源文件正确编译解析。到这里就已经安装好了。</p>
<p>less的使用</p>
<p>使用less，css文件的后缀名需要改为.less在html页面中加入下面代码。</p>
<p>less定义变量</p>
<p>less样式嵌套</p>
<p>less嵌套规则</p>
<p>名称更为简短，并修改时易查找。</p>
<p><a href="https://link.jianshu.com/?t=http%3A%2F%2Fblog.csdn.net%2Fwebxiaoma%2Farticle%2Fdetails%2F72768170">less样式的运算</a></p>
<p>less样式的传参</p>
<p>4.常见问题</p>
<p>SASS/SCSS、LESS有什么区别?</p>
<p>4.解析问题</p>
<p>1.编译环境不一样</p>
<p>Sass的安装需要Ruby环境，是在服务端处理的，而Less是需要引入less.js来处理Less代码输出css到浏览器，也可 以在开发环节使用Less，然后编译成css文件，直接放到项目中，也有 Less.app、SimpleLess、CodeKit.app这样 的工具，也有在线编译地址。</p>
<p>2.变量符不一样，LESS是@，而SCSS是$，而且变量的作用域也不一样。</p>
<p>3.输出设置，LESS没有输出设置，SASS提供4中输出选项：NESTED, COMPACT, COMPRESSED 和 EXPANDED。</p>
<p>输出样式的风格可以有四种选择，默认为nested</p>
<p>nested：嵌套缩进的css代码</p>
<p>expanded：展开的多行css代码</p>
<p>compact：简洁格式的css代码</p>
<p>compressed：压缩后的css代码</p>
<p>4.SASS支持条件语句，可以使用IF{}ELSE{},FOR{}循环等等。而LESS不支持。</p>
<p>5.引用外部CSS文件。</p>
<p>scss引用的外部文件命名必须以_开头, 如下例所示:其中_test1.scss、_test2.scss、_test3.scss文件分别设置 的h1 h2 h3。文件名如果以下划线_开头的话，Sass会认为该文件是一个引用文件，不会将其编译为css文件。</p>
<p>6.SASS和LESS的工具库不同。</p>
<p>Sass有工具库Compass, 简单说，Sass和Compass的关系有点像Javascript和jQuery的关系,Compass是Sass的工具库。 在它的基础上，封装了一系列有用的模块和模板，补充强化了Sass的功能。 Less有UI组件库Bootstrap,Bootstrap是web前端开发中一个比较有名的前端UI组件库，Bootstrap的样式文件部分 源码就是采用Less语法编写。</p>
<p>5.参考文献</p>
<p>参考一：<a href="https://link.jianshu.com/?t=http%3A%2F%2Fwww.haorooms.com%2Fpost%2Fsass_css">SASS入门教程及用法指南</a></p>
<p>参考二：<a href="https://link.jianshu.com/?t=http%3A%2F%2Fwww.51xuediannao.com%2Fhtml%2Bcss%2Fhtmlcssjq%2Fccc-block-inline.html">深入理解CSS块级(block)元素和内联(inline)元素</a></p>
<p>参考三：<a href="https://link.jianshu.com/?t=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Fcn%2Fweb%2F1207_shenyi_lesscss%2F">初步认识 LESS</a></p>
<p>参考四：<a href="https://link.jianshu.com/?t=http%3A%2F%2Fcaibaojian.com%2Fsass-less-stylus.html">sass、less和stylus的安装使用和入门实践</a></p>
<p>参考五：<a href="https://link.jianshu.com/?t=http%3A%2F%2Fwww.w3cplus.com%2Fsassguide%2Fsyntax.html">sass语法</a></p>
<p>参考六：<a href="https://link.jianshu.com/?t=http%3A%2F%2Fwww.cnblogs.com%2Fgrey-zhou%2Fp%2F5796496.html">less的一些用法整理</a></p>
<p>参考七：<a href="https://link.jianshu.com/?t=http%3A%2F%2Fwww.jsann.com%2Fpost%2Fless_introduction.html">LESS使用简介</a></p>
