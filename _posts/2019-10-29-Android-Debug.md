---
layout:     post   				    # 使用的布局（不需要改）
title:      Android Debug 				# 标题 
subtitle:   真机调试   #副标题
date:       2019-10-29				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	App							#标签
---
## 利用Android Studio自带的模拟器联网   
[Mac OS X下Android系统无法连接问题之解决方案](https://www.jianshu.com/p/8c19fb78a680)   

```javascript
system_profiler SPUSBDataType
Vendor ID："0x2717"
echo "0x2717" > ~/.android/adb_usb.ini
adb kill-server
adb start-server
adb devices
```

## 利用Android Studio自带的模拟器联网   
[方案二](https://blog.csdn.net/qq_33945246/article/details/79908298)   

[建议换到8.0及以下](https://blog.csdn.net/weixin_42306122/article/details/82563925)  

```javascript
cd /Users/nimda/Library/Android/sdk/emulator
emulator @Pixel_2_API_26 -dns-server 192.168.43.1
```
**获得当前网络的DNS（192.168.43.1）**   

![DNS of MAC](/img/blog/NETWORKINOUT_files/1.png)


## 微信网页调试方法   
[官方链接](https://developers.google.com/web/tools/chrome-devtools/remote-debugging)   
[微信H5移动端真机调试--vConsole](https://blog.csdn.net/weixin_36934930/article/details/79870240)  
![http://debugx5.qq.com/](/img/blog/NETWORKINOUT_files/2.png)  


**调试工具**  
1\.Chrome chrome://inspect/#devices   
2\.TBS Studio  
3\.微信web开发者工具  

