---
layout:     post   				    # 使用的布局（不需要改）
title:      Useful GIT Command 				# 标题 
subtitle:   (常用Git命令)   #副标题
date:       2019-04-30 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Git							#标签
---
**查看最近一次提交的所有文件名(不包括comment)**
<pre><code>
git diff --name-only HEAD~ HEAD
</code></pre>
**查看两个版本之间变动的文件名(不包括comment)**
<pre><code>
git diff --name-only OLD_COMMIT_ID_HERE NEW_COMMIT_ID_HERE
</code></pre>
**查看指定提交的所有文件名(包括comment)**
<pre><code>
git show  COMMIT_ID_HERE --name-only
</code></pre>
**将指定文件回滚到指定的版本（消灭修改的痕迹）
<pre><code>
git checkout COMMIT_ID_HERE <filename>
</code></pre>
**跨repo做cherry pick(命令后用Tower查看)
<pre><code>
git remote add projectB ~/Documents/Ford/LincolnAEM
git fetch projectB
</code></pre>
