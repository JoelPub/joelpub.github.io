---
layout:     post   				    # 使用的布局（不需要改）
title:      Mac OS Andorid adb 				# 标题 
subtitle:   Mac OS X 下部分Android手机无法连接adb问题 #副标题
date:       2016-09-19 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Infra							#标签
---
<h1><a id="Mac_OS_X_Androidadb_1"></a>Mac OS X 下部分Android手机无法连接adb问题</h1>
<p><a href="http://blog.csdn.net/artwebs/article/details/20716431">Mac OS X 下部分Android手机无法连接adb问题之解决方案</a></p>

# Mac OS X 下部分Android手机无法连接adb问题之解决方案

时至当今，Android山寨手机厂商已如此之多，能修改和个性化定制Android OS的能人已是多如牛毛，有的牛人修改Android系统只会影响所修改的点，不会影响其它，然后还有的就不多说了，总之做的修改会造成很多影响其它方面功能的问题。对Android APP开发者来说最常见的就是adb(Android Debug Bridge)连接问题，HTC就不说了，是和Google合作的，Android前几代系统版本刚出来时，Google都是首先从HTC出相应新Android版本的产品，所以新产品的很多Android新特性代表的就是Google的原始意愿的。所以HTC的手机相应问题会少很多。 **说了点儿废话，下面进入正题：** Mac OS X下和Windows（XP、７）下adb连接Android手机，有一点不同就是Mac OX X下没有所谓的Android usb adb驱动，只需要下载Google官方的sdk开发包，指定android-sdk-macosx/platform-tools/路经到系统当前用户的环境变量即可。

```java
-MacBook-Pro:~ user$ Vim /Users/user/.profileexport PATH=$PATH:/Android-SDK/android-sdk-macosx/platform-toolsexport PATH=$PATH:/Android-SDK/android-sdk-macosx/tools
```

 前期adb之类工具放在tools目录下面，后期统一放到platform-tools目录下面去了。 此后，打开终端，在任意当前路经下都可以直接执行adb命令，通过USB线将Android手机和Mac　PC连接后，adb devices，没有相应设备的列表。下面是解决办法： １.　打开终端，输入：system_profiler SPUSBDataType ，查看Mac系统所有USB设备信息，找到相应的厂商Vender ID 。 查到相应连有Android手机设备的usb hub，找到相应的厂商Vender ID,比如，我的测试机K-Touch T619天语手机就无法连接adb，查到的相应信息片段如下：

```java
----------------- Spreadtrum phone:              Product ID: 0x5d04              Vendor ID: 0x1782              ...　　　　　　　Serial Number: T619　　　　　　　...-----------------
```


 ２.　终端进入/Users/user/.android，应该有一个adb_usb.ini文件，如果没有就创建，然后将上面的Vender ID "0x1782"单独一行加入到该文件，然后退出。

```java
# ANDROID 3RD PARTY USB VENDOR ID LIST -- DO NOT EDIT.# USE 'android update adb' TO GENERATE.# 1 USB VENDOR ID PER LINE.0x1782
```


 ３．　重启adb server进程。 终端依次执行下面命令：

```java
adb kill-serveradb start-server
```

 然后通过adb devices命令就可以查看到以相应设备Serial Number为名字的设备。如：

```java
-MacBook-Pro:.android user$ adb devicesList of devices attached emulator-5554	deviceT619	device
```


**PS：** １.　有时 adb devices不能显示连接设备，需要拔掉数据线，多插几次，并且退出终端，然后重新打开，再输入命令就能发现连接的设备，再无法连接请重启电脑，等待系统初始化环境设置。 需要注意的是并不是所有的android机器都能解决，比如有的手机有供应商ID，缺少产品ID，依然无法识别，这种奇葩形的就只能找其它方法了。 ２.　Windows（XP、７）下面也可以同样的方法解决。但是前提也是已经指定了adb环境变量并且安装了相应Android手机设备的adb usb驱动，判断有没有装通过将手机和Windows连接，设备管理器里面没有发现显示有问号的设备就说明装了，有就说明没有安装。然后在C:\Users\username\.android目录下面也有一个adb_usb.ini文件，像前面那样别起一行添加相应设备的Vender
 ID，重启adb server进程即可。Reference:


