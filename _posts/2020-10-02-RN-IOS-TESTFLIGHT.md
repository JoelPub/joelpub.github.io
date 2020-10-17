---
layout:     post   				    # 使用的布局（不需要改）
title:      RN iOS TestFlight 				# 标题 
subtitle:   iOS TestFlight   #副标题
date:       2020-10-02				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---

# iOS TestFlight
[https://dev-yakuza.github.io/en/react-native/ios-testflight/](https://dev-yakuza.github.io/en/react-native/ios-testflight/)   

iOS TestFlight
==============

2020-10-02 ![hit count image](/img/blog/AN_files/a.svg)

let's test the app by tester via TestFlight..
---------------------------------------------

[Github Sponsor](https://github.com/sponsors/dev-yakuza) .bmc-button img { width: 27px !important; margin-bottom: 1px !important; border: none !important; vertical-align: middle !important; } .bmc-button { line-height: 36px !important; height: 37px !important; text-decoration: none !important; display: inline-block !important; color: #ffffff !important; background-color: #ff813f !important; border-radius: 3px !important; border: 1px solid transparent !important; padding: 0px 9px !important; font-size: 17px !important; letter-spacing: -0.08px !important; margin: 10px !important; font-family: 'Lato', sans-serif !important; -webkit-box-sizing: border-box !important; box-sizing: border-box !important; -o-transition: 0.3s all linear !important; -webkit-transition: 0.3s all linear !important; -moz-transition: 0.3s all linear !important; -ms-transition: 0.3s all linear !important; transition: 0.3s all linear !important; } .bmc-button:hover, .bmc-button:active, .bmc-button:focus { -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; text-decoration: none !important; box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; opacity: 0.85 !important; color: #ffffff !important; }[![Buy me a coffee](/img/blog/AN_files/BMC-btn-logo.svg)Buy me a coffee](https://www.buymeacoffee.com/j0cXhWiza)

(adsbygoogle=window.adsbygoogle||\[\]).push({});

1.  [Home](https://dev-yakuza.github.io/en/)
2.  [react-native](https://dev-yakuza.github.io/en/react-native)
3.  [iOS TestFlight](https://dev-yakuza.github.io/en/react-native/ios-testflight/)

(adsbygoogle=window.adsbygoogle||\[\]).push({});

Content
-------

1.  [outline](#outline)
2.  [create App](#create-app)
3.  [build app](#build-app)
4.  [upload app](#upload-app)
5.  [create test group](#create-test-group)
6.  [add build file](#add-build-file)
7.  [add Tester](#add-tester)
8.  [public link](#public-link)
9.  [completed](#completed)

outline
-------

iOS has `TestFlight` system that you can test your app by your tester or public test URL. in here, we introduce how to use `TestFlight` for the app test.

this blog post is a series. it’s better to see below together.

*   [iOS device test](https://dev-yakuza.github.io/en/react-native/ios-test-on-device/)
*   [iOS build and test](https://dev-yakuza.github.io/en/react-native/ios-running-on-device/)
*   [enroll iOS developer](https://dev-yakuza.github.io/en/react-native/ios-enroll-developer-program/)
*   [iOS Certification](https://dev-yakuza.github.io/en/react-native/ios-certification/)
*   [register iOS App store](https://dev-yakuza.github.io/en/react-native/ios-app-store/)
*   [Deploy automatically applications via Fastlane](https://dev-yakuza.github.io/en/react-native/fastlane/)

if you don’t know how to enroll Apple Developer Program or how to configure certification, see above blogs firts.

create App
----------

we need to create new App to Apple Store Connect to use `TestFlight`. click below link to go to Apple Store Connect.

*   App Store Connect: [https://appstoreconnect.apple.com/](https://appstoreconnect.apple.com/)

![App Store Connect](/img/blog/AN_files/app-store-connect.jpg)

sign in with Developer Account which you enroll Apple Developer Program. if you don’t enroll Apple Developer Program, see [enroll iOS developer](https://dev-yakuza.github.io/en/react-native/ios-enroll-developer-program/) blog and enroll.

after login, you can see below screen. click `My Apps` to go to app management page.

![app store connect main](/img/blog/AN_files/en-app-store-connect-main.jpg)

click `+` button on the left top of the page and select `New App` menu.

![app list](/img/blog/AN_files/en-app-list.jpg)

if you see app registration screen, insert your app information. if you don’t know exactly what it is, click `?` mark to see details. you can change `Name` and `Primary Language` afterwards.

![Create new App](/img/blog/AN_files/en-new-app.jpg)

*   Bundle ID: when you developed the app, you used `bundle ID` in xcode. if you don’t know where it is, check previous blog [iOS device test](https://dev-yakuza.github.io/en/react-native/ios-test-on-device/).
*   SKU: a unique ID for your app that is not visible on the App Store. normally use URL pattern.(ex> io.github.dev-yakuza.blaboo)

![app menu](/img/blog/AN_files/en-app-menu.jpg)

after creating new app, you can see above screen. click `TestFlight` menu.

now we need to upload production build app to App Store Connect for using `TestFlight`.

build app
---------

let’s see how to build and upload the app to App Store Connect. if you have already production build app, it’s better to skip this section.

execute `ios/projectname.xcodeproj` file in RN(react native) project folder.

![build for production](/img/blog/AN_files/build-for-production.jpg)

after xcode is exectued, click `Product` > `Archive` menu on the top of the screen. if you don’t enroll Apple Developer Program or connect certification, see previous blogs([enroll iOS developer](https://dev-yakuza.github.io/en/react-native/ios-enroll-developer-program/), [iOS Certification](https://dev-yakuza.github.io/en/react-native/ios-certification/)).

after building, you can see below screen.

![build for production](/img/blog/AN_files/distribute-app.jpg)

(adsbygoogle=window.adsbygoogle||\[\]).push({});

upload app
----------

if you close the window which is appeared after building or if you have already production build file, click `Window` > `Organizer` menu on the top of xcode.

![organizer menu](/img/blog/AN_files/organizer-menu.jpg)

you can see below screen after building or clicking the menu.

![build for production](/img/blog/AN_files/distribute-app.jpg)

click `Distribute App` on the right side. this button doesn’t deploy the app, just upload the app to App Store Connect.

![select platfom](/img/blog/AN_files/select-platform.jpg)

select the platform of the app. we selected `iOS App Store` in here.

![upload or export](/img/blog/AN_files/upload-export.jpg)

you can see the choice screen for uploading to App Store Connect or exporting ipa file. we will upload to App Store Connect, so select `Upload`.

![options](/img/blog/AN_files/options.jpg)

next is option selection screen. just click `Next` with all checked status. select your certification and Provisioning Profile created before. if you don’t have certification or Provisioning Profile, see previous blog [iOS Certification](https://dev-yakuza.github.io/en/react-native/ios-certification/).

if xcode ready to upload, you can see below screen. click `Upload` button to upload the build app to App Store Connect.

![upload](/img/blog/AN_files/upload.jpg)

completed to upload the app to App Store Connect. if uploaded file is ready to use, you can get email from Apple. It takes a time from upload to arrival of mail.

create test group
-----------------

after getting email from Apple, go to `TestFlight` page on App Store Connect.

![build file list](/img/blog/AN_files/en-testflight-build-file-list.jpg)

you can see the uploaded app on `TestFlight` screen. click `Add External Testers` button on the left side.

![create test group](/img/blog/AN_files/en-create-test-group.jpg)

after creating new test group, you can see test group name on the left side menu. click group name.

![test group](/img/blog/AN_files/en-test-group.jpg)

completed to create new test group. we will add build file and tester for testing.

(adsbygoogle=window.adsbygoogle||\[\]).push({});

add build file
--------------

select `builds` tab on the top of the screen

![select build tab](/img/blog/AN_files/en-build-tab.jpg)

click `+` button on the beside of `Builds(0)`. select build file you want to test and click `Next` button.

![select build](/img/blog/AN_files/en-select-build.jpg)

if your app need to signing for test, select `Sign-in required` and insert login info. click `Next` button.

![sign-in required](/img/blog/AN_files/en-need-login.jpg)

if you see below screen, insert a message to tester or how to test the app and click `Submit for Review` button.

![insert message](/img/blog/AN_files/en-test-message.jpg)

it is a simple Apple review procedure in `TestFlight` even if `TestFlight` is for your testers. after Apple’s review, you can test your app.

(adsbygoogle=window.adsbygoogle||\[\]).push({});

add Tester
----------

Apple’s `TestFlight` has two big features. add testers you already know or create public test URL. first, we will introduce how to add testers. click `test group` on `TestFlight` page and click `+` button on the beside of `Testers(0)`. select `Add New Testers` menu.

![add new tester](/img/blog/AN_files/en-add-new-tester.jpg)

insert tester’s email and name. click `Add` button. tester’s email sould be App Store ID which testers download the app on their phone.

![completed to add new tester](/img/blog/AN_files/en-added-new-tester.jpg)

completed to add new testers. new testers will get email from `TestFlight`.

![testflight email](/img/blog/AN_files/testflight-email.jpg)

testers should search and donwload `TestFlight` app from App store and test the app.

public link
-----------

if you create public link, you can see the link from `TestFlight` page. copy and share public link for testing.

completed
---------

we saw how to test the app using `TestFlight`. next, we will introduce how to public your app.

[Github Sponsor](https://github.com/sponsors/dev-yakuza) .bmc-button img { width: 27px !important; margin-bottom: 1px !important; border: none !important; vertical-align: middle !important; } .bmc-button { line-height: 36px !important; height: 37px !important; text-decoration: none !important; display: inline-block !important; color: #ffffff !important; background-color: #ff813f !important; border-radius: 3px !important; border: 1px solid transparent !important; padding: 0px 9px !important; font-size: 17px !important; letter-spacing: -0.08px !important; margin: 10px !important; font-family: 'Lato', sans-serif !important; -webkit-box-sizing: border-box !important; box-sizing: border-box !important; -o-transition: 0.3s all linear !important; -webkit-transition: 0.3s all linear !important; -moz-transition: 0.3s all linear !important; -ms-transition: 0.3s all linear !important; transition: 0.3s all linear !important; } .bmc-button:hover, .bmc-button:active, .bmc-button:focus { -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; text-decoration: none !important; box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; opacity: 0.85 !important; color: #ffffff !important; }[![Buy me a coffee](/img/blog/AN_files/BMC-btn-logo.svg)Buy me a coffee](https://www.buymeacoffee.com/j0cXhWiza)

`Was my blog helpful? Please leave a comment at the bottom. it will be a great help to me!`

(adsbygoogle=window.adsbygoogle||\[\]).push({});

(adsbygoogle=window.adsbygoogle||\[\]).push({});

Posts

Search

[

Admob Native Advanced on React Native

Let's see how to use react-native-admob-native-ads to display Admob Native Advanced on React Native.

](https://dev-yakuza.github.io/en/react-native/react-native-admob-native-ads/)[

Play Youtube on React Native

To play Youtube video on React Native, let's see how to use react-native-youtube!

](https://dev-yakuza.github.io/en/react-native/react-native-youtube/)[

react-native-firebase V6 Admob

Let's how to use react-native-firebase(V6) for Firebase Admob.

](https://dev-yakuza.github.io/en/react-native/react-native-firebase-v6-admob/)[

react-native-firebase V6 Crashlytics

Let's see how to use react-native-firebase(V6) for Firebase Crashlytics.

](https://dev-yakuza.github.io/en/react-native/react-native-firebase-v6-crashlytics/)[

react-native-firebase V6 installation

To use Firebase on React Native, Let's see how to install react-native-firebase(V6).

](https://dev-yakuza.github.io/en/react-native/react-native-firebase-v6-installation/)[

Configure Multidex on React Native

Let's see how to configure Multidex on Android in React Naitve project.

](https://dev-yakuza.github.io/en/react-native/react-native-multidex/)[

Make Opensource for React Native

Let's see how to make an opensource for React Naitve.

](https://dev-yakuza.github.io/en/react-native/make-opensource-library/)[

Push message via react-native-firebase(V5)

Let's see how to use FCM(Firebase Cloud Messaging) via react-native-firebase(V5) to implement Push message on React Native.

](https://dev-yakuza.github.io/en/react-native/react-native-firebase-fcm/)

[

react-native-image-picker

Let's see how to take a photo and how to get the image from the Camera-roll via react-native-image-picker.

](https://dev-yakuza.github.io/en/react-native/react-native-image-picker/)[

react-native-image-modal

let's see how to use react-native-image-modal to show full size image modal and pinch zoom in/out.

](https://dev-yakuza.github.io/en/react-native/react-native-image-modal/)[

Deploy automatically applications via Fastlane

Let's see how to deploy automatically React Native application via Fastlane

](https://dev-yakuza.github.io/en/react-native/fastlane/)[

Show Map on React Native

Let's see how to use react-native-maps to display a map on React Native

](https://dev-yakuza.github.io/en/react-native/react-native-maps/)[

Geolocation in React Native

Let's see how to get user current geolocation to use react-native-geolocation-service library in React Native.

](https://dev-yakuza.github.io/en/react-native/react-native-geolocation-service/)[

App icon & Splash image in React Native

Let's see how to make App icon and Splash image via react-native-make library in React Native.

](https://dev-yakuza.github.io/en/react-native/react-native-make/)[

Local Push Notificatoin

let's see how to implement Local Push Notification by using react-native-push-notification.

](https://dev-yakuza.github.io/en/react-native/react-native-push-notification/)[

Open the app with the specific file

this blog post is about how to open RN(React Native) app with the specific file(like excel, powerpoint, etc).

](https://dev-yakuza.github.io/en/react-native/open-file-with-app/)

[

Make Import path based on Root in RN(React Native)

let's make Import path based on Root in RN(React Native)

](https://dev-yakuza.github.io/en/react-native/root-import/)[

Apply custom font to RN(Reacct Native)

let's see how to apply custom font to RN(React Native) and how to use custom font.

](https://dev-yakuza.github.io/en/react-native/react-native-custom-font/)[

How to use sqlite in RN(Reacct Native)

let's see how to use sqlite database in RN(React Native).

](https://dev-yakuza.github.io/en/react-native/react-native-sqlite-storage/)[

RN(React Naitve) Support Tablets

let's see how to make RN(React Native) project support tablets

](https://dev-yakuza.github.io/en/react-native/react-native-support-tablet/)[

Control StatusBar

let's see how to control the StatusBar in RN(React Native)

](https://dev-yakuza.github.io/en/react-native/react-native-status-bar/)[

iTunes file sharing feature

let's see how to share files via iTunes on RN(React Native) project.

](https://dev-yakuza.github.io/en/react-native/react-native-itunes-share-file/)[

App Store Rating

let's see how to induce users to give the rating by react-native-rate library on RN(React Native) project.

](https://dev-yakuza.github.io/en/react-native/react-native-rate/)[

App Splash Screen

let's make Splash screen end at the desired time by using react-native-splash-screen on RN(React Native) project.

](https://dev-yakuza.github.io/en/react-native/react-native-splash-screen/)

[

Gradient

let's see how to use react-native-linear-gradient to make the gradient background on RN(React Native) project.

](https://dev-yakuza.github.io/en/react-native/react-native-linear-gradient/)[

Swipe Detection

let's see how to use react-native-swipe-gestures to detect user swipe event on RN(React Native) project

](https://dev-yakuza.github.io/en/react-native/react-native-swipe-gestures/)[

use After Effects

let's see how to apply the animation created by Adobe After Effects, to RN(React Native) project.

](https://dev-yakuza.github.io/en/react-native/react-native-lottie/)[

Use Filesystem

let's read and write the file by react-native-fs on RN(React Native) project.

](https://dev-yakuza.github.io/en/react-native/react-native-fs/)[

sending email feature

let's see how to execute the email app installed basically on the phone at RN(React Native) project.

](https://dev-yakuza.github.io/en/react-native/react-native-mail/)[

recognize user voice

let's see how to add the feature to recognize user voice and transform to text by react-native-voice on RN(React Native)

](https://dev-yakuza.github.io/en/react-native/react-native-voice/)[

register Android App store

we'll introduce how to register RN(React Native) Android App to Android App store(Google Play).

](https://dev-yakuza.github.io/en/react-native/android-google-play/)[

enroll Android developer

let's enroll Android developer to register Android App to Google Playstore.

](https://dev-yakuza.github.io/en/react-native/android-enroll-google-play-developer/)

[

react-native-animatable

let's see how to use react-native-animatable to add simply animations to RN(react native).

](https://dev-yakuza.github.io/en/react-native/react-native-animatable/)[

Firebase Crashlytics

let's see how to use react-native-firebase to gather crash logs on Filebase Crashlytics.

](https://dev-yakuza.github.io/en/react-native/firebase-crashlytics/)[

iOS App crash analysis

let's see how to analyze iOS App crash log.

](https://dev-yakuza.github.io/en/react-native/ios-app-crash-debugging/)[

Firebase Analytics

let's analyze the app more detail using react-native-firebase.

](https://dev-yakuza.github.io/en/react-native/react-native-firebase-analytics/)[

change simulator on iOS

let's see how to change the simulator on iOS when we test RN(react native) on iOS.

](https://dev-yakuza.github.io/en/react-native/ios-change-simulator/)[

Android build and test

introduce how to build and test RN(react native) project on Android device.

](https://dev-yakuza.github.io/en/react-native/android-running-on-device/)[

Android device test

let's test RN(react native) project on Android devices

](https://dev-yakuza.github.io/en/react-native/android-test-on-device/)[

Firebase Admob

let's use react-native-firebase library to display Google Admob.

](https://dev-yakuza.github.io/en/react-native/react-native-firebase-admob/)

[

Google Analytics

let's analyze RN(react native) app using Google Analytics.

](https://dev-yakuza.github.io/en/react-native/react-native-analytics-bridge/)[

register iOS App store

let's see what we need to register iOS App Store.

](https://dev-yakuza.github.io/en/react-native/ios-app-store/)[

iOS TestFlight

let's test the app by tester via TestFlight..

](https://dev-yakuza.github.io/en/react-native/ios-testflight/)[

iOS Certification

if you enrolled Apple Developer Program, let's see how to configure iOS developer Certification.

](https://dev-yakuza.github.io/en/react-native/ios-certification/)[

enroll iOS developer

let's see how to enroll Apple Developer Program for registering RN(react native) app to iOS App store.

](https://dev-yakuza.github.io/en/react-native/ios-enroll-developer-program/)[

iOS build and test

let's build RN(react native) for iOS production and test it on the device.

](https://dev-yakuza.github.io/en/react-native/ios-running-on-device/)[

iOS device test

let's test RN(react native) project on iOS devices

](https://dev-yakuza.github.io/en/react-native/ios-test-on-device/)[

Google Admob

use react-native-admob to add google admob advertisement to react-native.

](https://dev-yakuza.github.io/en/react-native/react-native-admob/)

[

react-native-tts

implement text-to-speech to use react-native-tts

](https://dev-yakuza.github.io/en/react-native/react-native-tts/)[

react-native-device-info

use react-native-device-info for getting user's device informations.

](https://dev-yakuza.github.io/en/react-native/react-native-device-info/)[

react-native-vector-icons

let's display icons to use react-native-vector-icons library.

](https://dev-yakuza.github.io/en/react-native/react-native-vector-icons/)[

NativeBase

use NativeBase library for basic component UI.

](https://dev-yakuza.github.io/en/react-native/nativebase/)[

Splash image

generate and apply splash image by using generator-rn-toolbox

](https://dev-yakuza.github.io/en/react-native/splash-image/)[

App icon

try to make app icon by using generator-rn-toolbox

](https://dev-yakuza.github.io/en/react-native/app-icon/)[

react-navigation V5

Let's see how to install react-navigaion V5 and how to use it.

](https://dev-yakuza.github.io/en/react-native/react-navigation-v5/)[

react-navigation

use react-navigation for developing an application.

](https://dev-yakuza.github.io/en/react-native/react-navigation/)

[

styled-components

this blog is about how to use styled-component library for react-native styling.

](https://dev-yakuza.github.io/en/react-native/styled-components/)[

Use ESLint, Prettier like Pro on React Native

Let's see how to use ESLint and Prettier on React Native project, and Let's see how to use Husky and lint-staged to use ESLint and Prettier like Pro.

](https://dev-yakuza.github.io/en/react-native/eslint-prettier-husky-lint-staged/)[

typescript

create react-native project and develop it by applying typescript.

](https://dev-yakuza.github.io/en/react-native/typescript/)[

RN installation

install react-native and check how to make a project.

](https://dev-yakuza.github.io/en/react-native/installation/)[

How to install React Native on Windows

Let's see how to install and configure react-native development environment on Windows, and create react native project to check the environment is set well.

](https://dev-yakuza.github.io/en/react-native/install-on-windows/)[

How to install React Native on Mac

Let's see how to install and configure react-native development environment on Mac, and create react native project to check the environment is set well.

](https://dev-yakuza.github.io/en/react-native/install-on-mac/)

*   «Previous
    
*   1
    
*   2
    
*   3
    
*   4
    
*   5
    
*   6
    
*   7
    
*   8
    
*   »Next
    

document.addEventListener("DOMContentLoaded",function(){function e(e,a){$(".page").remove(),$(".page-item--link").remove();var t=$(".post-list-container .body .list-group");e.forEach(function(e,i){var s=Math.floor(i/8)+1,n=t.find(".page-"+s),o=!1===a&&e.url.indexOf(location.pathname)>=0?"active":"",l="";if(l+='<a href="'+e.url+'" class="list-group-item list-group-item-action flex-column align-items-start '+o+'">',l+=' <div class="d-flex w-100 justify-content-between">',l+=' <div class="mb-1">'+e.title+"</div>",l+=" </div>",l+=' <div class="body-text">'+e.description+"</div>",l+="</a>",n.length>0)n.addClass(!0===a&&1===s?"active":o),n.append(l);else{var p="";p+='<div class="page page-'+s+" "+(!0===a&&1===s?"active":o)+'">',p+=l,p+="</div>",t.append(p)}var d="";d+='<li class="page-item page-item--link '+o+'" data-page="'+s+'">',d+=' <div class="page-link" data-page="'+s+'">',d+=s,d+=" </div>",d+="</li>",0===$('.post-list-container .footer .page-item\[data-page="'+s+'"\]').length&&$(".post-list-container .footer .page-item--next").before(d),!0===a?$("li\[data-page=1\]").addClass("active"):"active"===o&&$("li\[data-page="+s+"\]").addClass(o),s>1&&$(".footer").css("display","flex")})}var a=\[\];$.get("/en/api/react-native/posts.json",function(t){a=t,t.length>0&&($(".post-list-container").show(),e(t,!1))}),$("body").on("click",".page-link",function(){var e=$(".post-list-container .body .list-group"),a=$(".footer .pagination"),t=a.find(".page-item.active"),i=t.find(".page-link").data("page"),s=$(this).data("page");if($(this).closest(".page-item").hasClass("page-item--previous"))s=i>1?i-1:1;else if($(this).closest(".page-item").hasClass("page-item--next")){var n=a.find(".page-item--link").length;s=i<n?i+1:n}else var s=$(this).data("page");e.find(".page").removeClass("active"),e.find(".page-"+s).addClass("active"),a.find(".page-item").removeClass("active"),a.find('.page-link\[data-page="'+s+'"\]').closest(".page-item").addClass("active")}),$("#search").on("keyup",function(){var t=this.value.toLowerCase(),i=\[\];if($(".footer .pagination"),t.length>0){for(var s=0;s<a.length;s++){var n=a\[s\];(n.title.toLowerCase().indexOf(t)>=0||n.description.toLowerCase().indexOf(t)>=0)&&i.push(n)}e(i,!0)}else e(a,!1)})});

* * *

var disqus\_config=function(){this.page.url="https://dev-yakuza.github.io/react-native/ios-testflight/",this.page.identifier="https://dev-yakuza.github.io/react-native/ios-testflight/"};!function(){var t=document,e=t.createElement("script");e.src="https://https-dev-yakuza-github-io-en.disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}();

Please enable JavaScript to view the [comments powered by Disqus.](https://disqus.com/?ref_noscript)

SHARE

*   [
    
    Twitter
    
    ](https://twitter.com/intent/tweet?text=iOS%20TestFlight&url=https://dev-yakuza.github.io/react-native/ios-testflight/)
*   [
    
    Facebook
    
    ](https://www.facebook.com/sharer/sharer.php?u=https://dev-yakuza.github.io/react-native/ios-testflight/)
*   [
    
    RSS
    
    ](https://dev-yakuza.github.io/en/feed.xml)

Copyright © dev.yakuza@gmail.com 2020