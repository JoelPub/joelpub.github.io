---
layout:     post   				    # 使用的布局（不需要改）
title:      Xcode7–debug on a device 				# 标题 
subtitle:    #副标题
date:       2016-09-16 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
[](https://blog.csdn.net/story51314/article/details/52316542)

# Xcode7 免证书/$99 真机调试教程

我们知道Xcode7之前我们需要去[Apple Developer](https://developer.apple.com/)花费 $99/年 注册成为开发者,并配置

* `Certificates`
* `APPID`
* `Devices`
* `Provisioning Profiles`

四步之后,我们才能真正的进行真机调试,太麻烦了

***

Xcode7 之后,苹果为开发者为了吸引更多的开发者,提供了免配置,免$99就能真机调试的功能.

如果我们只是单纯的进行一下项目练手,在真机上调试,这个还是不错的,免去了不少麻烦.

但是如果要发布应用到AppStore还是需要按以上的四步一个个来配置的,关于这些配置可以看本人的这篇文章 <br>

[《iOS真机调试详细图文教程》](http://blog.csdn.net/story51314/article/details/51332855)

***

下面我们正式进入教程,教程很简单

## 1.添加Apple账号

Xcode里按 `&#x2318;`+ `,`快捷键

打开Xcode配置面板

选择 Accounts栏目左下角的 `+`,并选择 `Add Apple ID...`

![Preferences](/img/blog/Xcode7_files/20160825164336858)

填入你的 `Apple ID`并点击 `Sign in`

![sign in](/img/blog/Xcode7_files/20160825165959929)

## 2.更改Bundle Identifier

进入到项目 `TARGETS`下的 `General`栏目下,修改你的 `Bundle Identifier`,我的项目中改为 `com.Story5.ARVR`

并选择 `Team`为刚才添加的 `Apple ID`

![BI](/img/blog/Xcode7_files/20160825170842539)

![fix issue](/img/blog/Xcode7_files/20160825171537533)

这个时候我们就发现会报 `No Code signing identities found`错误

这里,直接点击一下 `Fix issue`按钮,在弹出的窗口中继续选择对应的 `Apple ID`,点击Choose继续 <br>

![choose](/img/blog/Xcode7_files/20160825171835561)

等待几秒钟,你可能会遇到以下情况,直接 `reset` <br>

![reset](/img/blog/Xcode7_files/20160825171947968)

搞定!我们就可以在真机上调试了
