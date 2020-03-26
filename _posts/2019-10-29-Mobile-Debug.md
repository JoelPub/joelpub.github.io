---
layout:     post   				    # 使用的布局（不需要改）
title:      Mobile Debug 				# 标题 
subtitle:   真机调试   #副标题
date:       2019-10-29				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
## 可调式微信/安卓/苹果
1\.[Mobile Debug（可调试https，安装证书指导）](https://www.mobiledebug.com/Help/help_10055.shtml?invoke=MD_Mac&ver=3.6.467.0)  
绑定代理端口并启用调试功能（端口： 9973） → 打开调试界面 → 添加调试注入规则 → 打开调试界面（匹配值192.168.43.63）     

## 微信网页调试方法   
1\.[微信web开发者工具（不可调试https，可编辑dom）](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Web_Developer_Tools.html#5 )       
移动调试 → 普通调试  → 设置手机代理（http://192.168.43.63 端口： 9973） → 微信打开（http://192.168.43.63:8080/）    
2\.TBS Studio    

## IOS 
**网页调试方法**   
[Testing Web Applications Running on Localhost With an iPhone](https://ebaytech.berlin/testing-web-applications-running-on-localhost-with-an-iphone-7db6258b8f2)   


* 调试工具 Safari  （可调试https）
1\.Develop → {{NAME_OF_YOUR_IPHONE}} and select “Connect via Network”     
2\.Develop → {{NAME_OF_YOUR_IPHONE}}  → Safari → URL    
3\.微信打开local的IP      

## Android 
* 调试工具   
1\.Chrome chrome://inspect/#devices   
(连模拟器无法调试；连真机需要翻墙，否则会报http错误）

**利用Android Studio自带的模拟器联网**   
* 使用外网时可以直接联网/使用内网时只能访问内网网址/所以一般用不到

* [Mac OS X下Android系统无法连接问题之解决方案](https://www.jianshu.com/p/8c19fb78a680)   

```javascript
system_profiler SPUSBDataType
Vendor ID："0x2717"
echo "0x2717" > ~/.android/adb_usb.ini
adb kill-server
adb start-server
adb devices
```
* [方案二](https://blog.csdn.net/qq_33945246/article/details/79908298)   

[建议换到8.0及以下](https://blog.csdn.net/weixin_42306122/article/details/82563925)  

```javascript
cd /Users/nimda/Library/Android/sdk/emulator
emulator @Pixel_2_API_26 -dns-server 192.168.43.1
```
* 获得当前网络的DNS（192.168.43.1）   

![DNS of MAC](/img/blog/NETWORKINOUT_files/1.png)


