---
layout:     post   				    # 使用的布局（不需要改）
title:      APPLE STORE 				# 标题 
subtitle:   苹果测试和上架   #副标题
date:       2020-08-10				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---

## 注册付费:
* [https://developer.apple.com/](https://developer.apple.com/ ) 
* [https://appstoreconnect.apple.com/](https://appstoreconnect.apple.com/ ) 
* [Deploy a React Native App to TestFlight](https://joelpub.github.io/2019/10/07/RN-TestFlight/ )  

```javascript
Bundle ID - Choose “Explicit” and create bundle ID com.haidanmm.video
App Icons and Launch Images - You’ll need to add an app icon, otherwise you’ll run into an error later on. You can use https://makeappicon.com/  
将生成的AppIcon.appiconset拷贝到Images.xcassets下，拖动图标直到没有黄色提示
Xcode Setup - 
    You can find the file inside the /ios folder name of yourprojectname.xcworkspace(prevent YogaKit.modulemap' not found error).   
    Identity - Update the Bundle Identifier with the bundle ID that we created earlier com.haidanmm.video.  
      
```  

## ios-certification:
* [ios-certification](https://dev-yakuza.github.io/en/react-native/ios-certification/ ) 

```javascript
    this certification is for development. if you already have this one, you need to create production certification
    if you want to create a production certification, click App Store and ad Hoc in Production section
    after Keychain Access is executed, click My certificates on the left bottom of the screen and drag your certification which you made via Apple Developer site before to here for adding
    we need development Provisioing Profile and production Provisioning Profile. so do below procedure double times for development and production    
  
```  
## iOS TestFlight:
* [iOS TestFlight](https://dev-yakuza.github.io/en/react-native/ios-testflight/ ) 

```javascript
     如果这里有缺少出口合规证明的警告,只需要在Xcode的info.plist中增加键值对，ITSAppUsesNonExemptEncryption 设置为NO即可.
     或者点警告，回答问题后警告消失。
  
```  



