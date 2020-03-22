---
layout:     post   				    # 使用的布局（不需要改）
title:      react npm run build error 				# 标题 
subtitle:   Source and destination must not be the same   #副标题
date:       2020-03-21 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---


# react 项目，npm run build 构建失败，Source and destination must not be the same.
[https://www.jianshu.com/p/5b162c8a7b6d](https://www.jianshu.com/p/5b162c8a7b6d)   

[![](/img/blog/fs-extra-error_files/816134b5-acd5-41b7-a85c-f4172661afa6_004.jpg)jacky_8897](https://www.jianshu.com/u/d0984f76d9f0)

# react 项目，npm run build 构建失败，Source and destination must not be the same.

[jacky_8897](https://www.jianshu.com/u/d0984f76d9f0)<time>2019.11.18 23:49:05</time>字数 0 阅读 59

```undefined
看了好久才发现问题的关键词：Source and destination must not be the same.

```



![](/img/blog/fs-extra-error_files/12561655-c2bea4376d42a266.png)

```dart
在node_modules/.../fs-extra/....copy-sync.js 中有这个提示 注释掉，build成功。
无意中尝试删除目录下的build，然后重新构建，npm run build。成功。

然后对比了删除后重新生成的 build目录 和之前备份的build-bak目录发现目录权限不一样，
有问题的目录权限中有"@"，目前还不知道什么情况，但是问题可以这么去解决。
```


![](/img/blog/fs-extra-error_files/12561655-1c3941c54d234449.png)
1人点赞[随笔](https://www.jianshu.com/nb/26313512) "小礼物走一走，来简书关注我"共1人赞赏[jacky_8897](https://www.jianshu.com/u/d0984f76d9f0 "jacky_8897")总资产1 (约0.08元)共写了4096字获得3个赞共6个粉丝

### 全部评论1 只看作者 按时间倒序 按时间正序

[joelpub](https://www.jianshu.com/u/4002ae6218c1)2楼 <time>03.20 18:18</time> 谢谢，你的文章帮到我 赞 回复

### 推荐阅读[更多精彩内容](https://www.jianshu.com/)

* [cordova Source and destination must not be the ...](https://www.jianshu.com/p/29043d8299cb) 环境：quasar+cordova 错误现象：  1、启动手机app开发环境时（quasar dev -m cor... [![](/img/blog/fs-extra-error_files/620e3524-22ee-44e3-b155-cbe7d3466c9e.gif)工程师54](https://www.jianshu.com/u/1ad44747e16f)阅读 26 评论 0 赞 0
* [npm run build和npm run dev 报错 iview TypeError [E...](https://www.jianshu.com/p/a8612e0dc893) npm run build: npm run dev: 两者报错信息除了报错的js文件不同外，其他信息基本一致，根... [![](/img/blog/fs-extra-error_files/3468949d-1ba9-4785-8ecf-a541e09c2964.png)姜小姜小](https://www.jianshu.com/u/a6ba7e9e9fed)阅读 549 评论 0 赞 1
* [org.apache.ibatis.exceptions.PersistenceExcepti...](https://www.jianshu.com/p/ebfb0a838ef2) mysql服务端会默认检查每个连接connection，一旦发现connection被闲置8小时（wait_tim... [![](/img/blog/fs-extra-error_files/52767ad5-1740-49ad-84d0-b077c4741f41.jpg)毛仑上保罗先生](https://www.jianshu.com/u/4a1fba8a136e)阅读 1,390 评论 0 赞 2
* [xcode archive报错：bitcode bundle could not be gen...](https://www.jianshu.com/p/70a0db2f3f86) 问题描述：真机和模拟器测试都能编译安装，但是需要打包archive的时候 总是编译出错 打印出来的错误： Show... [![](/img/blog/fs-extra-error_files/f81e78cb-82e1-40a5-ba3e-441e492f2696.jpg)清蘂翅膀的技术](https://www.jianshu.com/u/28f4ab678f41)阅读 2,093 评论 0 赞 2
* [ERROR ITMS-90086: "Missing 64-bit support. iOS ...](https://www.jianshu.com/p/5bdc9b2eac66) 我现在的设置： 应该改成 这样的设置是正确的，还是会有一个arm64的错误。这是因为我使用的第三方库是zbar，这... [![](/img/blog/fs-extra-error_files/ff496becf108.jpg)shineDeveloper](https://www.jianshu.com/u/5a8b9af6cea9)阅读 437 评论 6 赞 2

评论1 赞1 1赞2赞 1 赞赏++++++++++++
