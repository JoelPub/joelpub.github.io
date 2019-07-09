---
layout:     post   				    # 使用的布局（不需要改）
title:      Cookie Replacement 				# 标题 
subtitle:   web存储方案比较   #副标题
date:       2019-05-07 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
**3 solutions for the alternative way instead of cookie.
1. localStorage/sessionStorage
complexibility: **
reliability: ****
impact: ***
lifecycle: permanent/session
compatibility: *****
limitation: same origin policy
2.IndexedDB/Web SQL
complexibility: ***
reliability: ****
impact: ****
lifecycle: permanent
compatibility: ****
limitation: same origin policy
3.Redux https://github.com/angular-redux/ng-redux
Redux is predictable state container for javascript apps, help connect angular components 
complexibility: ****
reliability: *****
impact: *****
lifecycle: session
compatibility: *****
limitation: only applicable in angularjs framework
