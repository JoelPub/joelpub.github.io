---
layout:     post   				    # 使用的布局（不需要改）
title:      AppRegistry.registerComponent 				# 标题 
subtitle:   AppRegistry.registerComponent #副标题
date:       2016-09-24 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="AppRegistryregisterComponent_1"></a>AppRegistry.registerComponent</h1>
<p><a href="http://www.jianshu.com/p/82a09063e61c">http://www.jianshu.com/p/82a09063e61c</a></p>
<h1><a id="ReactNative1Invariant_ViolationApplication__has_not_been_registered_5"></a>React-Native坑1：Invariant Violation:Application 项目名 has not been registered.</h1>
<p>字数347 阅读1715 评论4 喜欢7</p>
<h1><a id="bb_9"></a>前言</h1>
<p>在学习一门新技术的你也许有跟我一样的困惑，照着书上或者视频上的敲了。但是就是有各种问题没有出来自己想要的结果。我会将自己在这个过程中遇到的坑都记录下来，不一定全覆盖，但希望这些文章可以解决你的问题。</p>
<h1><a id="bb_13"></a>错误提示</h1>
<p>Invariant Violation:Applicaction 项目名 has not been registered.This is either due to a require() error during initialization or failure to call AppRegistry.registerCommponent.</p>
<p>&lt;i&gt;这个错误的根本原因是根目录./index.ios.js中</p>
<blockquote>
<p>&lt;i&gt;AppRegistry.registerComponent(‘项目名’,() =&gt; …);</p>
</blockquote>
<p>与./ios/项目名/appDelegate.m中的</p>
<blockquote>
<p>RCTRootView*rootView = [[RCTRootViewalloc]initWithBundleURL:jsCodeLocation<br>
moduleName:@“项目名” launchOptions:launchOptions];</p>
</blockquote>
<p>或是./android/app/src/main/java/com/项目名/MainActivity.java中的</p>
<blockquote>
<p>mReactRootView.startReactApplication(mReactInstanceManager, “项目名”, null);</p>
</blockquote>
<p>没有保持一致，解决方法很简单。编辑成相同的参数即可。</p>
<h1><a id="_32"></a>但是，还有一种情况！</h1>
<p>即便你确保一致了但还是出现相同的错误提示，这又是怎么搞得呢？这个时候你可以检查一下你的命令行。有可能你同时在运行一个以上的程序，像我。如果你的react-native在运行程序A而你打开了程序B，也会出现相同的问题。解决方法很简单，关掉命令行运行程序。ctrl+c,运行你想运行的程序。</p>
