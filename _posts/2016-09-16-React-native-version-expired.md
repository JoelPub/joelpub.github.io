---
layout:     post   				    # 使用的布局（不需要改）
title:      React native version expired				# 标题 
subtitle:   处理React native 项目版本过期 #副标题
date:       2016-09-16 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="React_native__1"></a>处理React native 项目版本过期</h1>
<p>转载自【黑米GameDev街区】 原文链接: <a href="http://www.himigame.com/react-native/2288.html">http://www.himigame.com/react-native/2288.html</a><br>
注意：升级前请先备份项目，以免造成一些文件丢失或者被覆盖的情况</p>
<p>一：先到项目下打开 package.json 文件，将dependencies下的react-native版本号改成最新（0.33.0）如下图：</p>
<p>二：打开终端,以此输入如下命令进行操作：</p>
<ol>
<li>cd /Users/Himi/xxxxxx</li>
</ol>
<p>先cd到你项目的根目录下</p>
<ol start="2">
<li>npm install</li>
</ol>
<p>安装最新的React Native版本,成功后可能会出现如下类似警告：</p>
<p>| 1 |npm WARN react –native @0.26.2 requires a peer of react @15.0.2 but none was installed . |</p>
<ol start="3">
<li>npm install –save react@15.3.1</li>
</ol>
<p>更新最新的React且项目下package.json 的 dependencies下的react版本会被修改为 15.3.1</p>
<p>4. react-native upgrade</p>
<p>升级项目模板文件，过程中如果提示是否覆盖，可以键盘输入’Y’，回车进行覆盖即可。</p>
<p>5. react-native -v</p>
<p>通过如上命令来看最新的版本，检测是否升级成功！</p>
<p>到此升级过程将结束，那么下面对已有的项目要重新build，方式如下几种：</p>
<p>1：升级完成后，请重新clean项目，重新build</p>
<ol start="2">
<li>
<p>用最新的RN命令init一个新项目，将自己的工程文件copy到新项目中</p>
</li>
<li>
<p>直接通过下载官方最新的纯净项目：</p>
</li>
</ol>
<p><a href="http://bbs.reactnative.cn/topic/11/react-native%E4%B8%AD%E6%96%87%E7%BD%91%E5%AE%98%E6%96%B9%E5%8F%91%E5%B8%83%E5%AE%8C%E6%95%B4%E6%96%B0%E9%A1%B9%E7%9B%AE%E5%8C%85-%E6%97%A0%E9%9C%80init">http://bbs.reactnative.cn/topic/11/react-native中文网官方发布完整新项目包-无需init</a></p>
<p>将自己的工程文件copy到这个纯净的项目中</p>
<p>由于Himi经历的版本更新有语法变更，因此还要注意如下两点：</p>
<p>备注1：import导入方式更改为最新方式 （如果没有版本更新没有语法变更，请无视）</p>
<p>备注2：导出一个类给别的模块用，也要改为用export default的方式 （如果没有版本更新没有语法变更，请无视）</p>
