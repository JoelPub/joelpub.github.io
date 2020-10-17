---
layout:     post   				    # 使用的布局（不需要改）
title:      RN iOS Certification 				# 标题 
subtitle:   iOS Certification   #副标题
date:       2020-10-02				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---

# iOS Certification
[https://dev-yakuza.github.io/en/react-native/ios-certification/](https://dev-yakuza.github.io/en/react-native/ios-certification/)   

iOS Certification
=================

2020-10-02 ![hit count image](AM_files/a.svg)

if you enrolled Apple Developer Program, let's see how to configure iOS developer Certification.
------------------------------------------------------------------------------------------------

[Github Sponsor](https://github.com/sponsors/dev-yakuza) .bmc-button img { width: 27px !important; margin-bottom: 1px !important; border: none !important; vertical-align: middle !important; } .bmc-button { line-height: 36px !important; height: 37px !important; text-decoration: none !important; display: inline-block !important; color: #ffffff !important; background-color: #ff813f !important; border-radius: 3px !important; border: 1px solid transparent !important; padding: 0px 9px !important; font-size: 17px !important; letter-spacing: -0.08px !important; margin: 10px !important; font-family: 'Lato', sans-serif !important; -webkit-box-sizing: border-box !important; box-sizing: border-box !important; -o-transition: 0.3s all linear !important; -webkit-transition: 0.3s all linear !important; -moz-transition: 0.3s all linear !important; -ms-transition: 0.3s all linear !important; transition: 0.3s all linear !important; } .bmc-button:hover, .bmc-button:active, .bmc-button:focus { -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; text-decoration: none !important; box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; opacity: 0.85 !important; color: #ffffff !important; }[![Buy me a coffee](AM_files/BMC-btn-logo.svg)Buy me a coffee](https://www.buymeacoffee.com/j0cXhWiza)

(adsbygoogle=window.adsbygoogle||\[\]).push({});

1.  [Home](https://dev-yakuza.github.io/en/)
2.  [react-native](https://dev-yakuza.github.io/en/react-native)
3.  [iOS Certification](https://dev-yakuza.github.io/en/react-native/ios-certification/)

(adsbygoogle=window.adsbygoogle||\[\]).push({});

Content
-------

1.  [outline](#outline)
2.  [donwload certification](#donwload-certification)
3.  [create certification](#create-certification)
4.  [register certification](#register-certification)
5.  [configure Apple Developer account](#configure-apple-developer-account)
6.  [create Provisioning Profiles](#create-provisioning-profiles)
7.  [connect Provisioning Profiles](#connect-provisioning-profiles)
8.  [completed](#completed)

outline
-------

this blog post is for developers who already enrolled Apple Developer Program. if you don’t enroll Apple Developer Program, see previous blog post [enroll iOS developer](https://dev-yakuza.github.io/en/react-native/ios-enroll-developer-program/) and enroll Apple Developer Program.

this blog post is a series. it’s better to see below together.

*   [iOS device test](https://dev-yakuza.github.io/en/react-native/ios-test-on-device/)
*   [iOS build and test](https://dev-yakuza.github.io/en/react-native/ios-running-on-device/)
*   [enroll iOS developer](https://dev-yakuza.github.io/en/react-native/ios-enroll-developer-program/)
*   [iOS TestFlight](https://dev-yakuza.github.io/en/react-native/ios-testflight/)
*   [register iOS App store](https://dev-yakuza.github.io/en/react-native/ios-app-store/)
*   [Deploy automatically applications via Fastlane](https://dev-yakuza.github.io/en/react-native/fastlane/)

let’s see how to create iOS developer certification and configure it.

donwload certification
----------------------

if you get purchase approved email from Apple after buying Apple Developer Program, go to `Account` page on Apple Developer site([https://developer.apple.com/](https://developer.apple.com/))

![apple developer site after enrolling](AM_files/apple-developer-site-after-enrolling.jpg)

you can see different screen before you enroll Apple Developer Program. click `Certificates, IDs & Profiles` to go to the certification page.

![download certification](AM_files/download-certification.jpg)

you have already one certification. select the certification and click `Download` button and save it on your PC. if you don’t have the certification, create it by following create certification section.

this certification is for development. if you already have this one, you need to create production certification. so create it by following create certification section.

(adsbygoogle=window.adsbygoogle||\[\]).push({});

create certification
--------------------

execute `Keychain Access` program on your Mac.

![Keychain Access](AM_files/en-keychain.jpg)

after Keychain is executed, click `Keychain accesss` > `Certification Assistant` > `Request a Certificate From a Certificate Authority...` on the left top of the PC screen.

![Request a Certificate From a Certificate Authority...](AM_files/en-request-certification.jpg)

if you click `Request a Certificate From a Certificate Authority...` menu, you can see `Certificate Assistant` like below screen.

![insert certification info to Keychain access](AM_files/en-certification-info.jpg)

inser `User Email Address` and `Common Name`. select `Saved to disk` and `Let me specify key pair information`. click `Continue` button and save the file to your PC.

![Keychain Access select key](AM_files/en-certification-key.jpg)

click `Continue` if you are same value in `Key Size` and `Algorithm`.

![completed to creact keychain](AM_files/en-certification-completed.jpg)

completed to create KeyChain Certification file.

![download certification](AM_files/download-certification.jpg)

go to `Account` page in Apple Developer site([https://developer.apple.com/](https://developer.apple.com/)) and select `Certificates, IDs & Profiles` menu. click `+` button on the right top of the screen.

![certification selection](AM_files/select-certification.jpg)

click `iOS App Development`. scroll down and click `Continue` button in `Select Type` page.

if you want to create a production certification, click `App Store and ad Hoc` in `Production` section.

next screen is detail about how to create certification file(CSR file). we already created this file by `Keychain Access` so just scroll down and click `Continue`.

![create csr file](AM_files/create-csr-file.jpg)

click `Choose File` to select certification file(CSR file) created by `Keychain Access` and click \`\`\`Continue\`\` to go to the next page.

![choose csr file](AM_files/choose-csr-file.jpg)

completed to create certification. click `Download` to save certification to your PC.

![complete create certification file](AM_files/complete-create-certification.jpg)

register certification
----------------------

we need to insert certification created above to `Keychain Access`. execute `Keychain Access` program.

![keychain acceess](AM_files/en-keychain.jpg)

after `Keychain Access` is executed, click `My certificates` on the left bottom of the screen and drag your certification which you made via Apple Developer site before to here for adding.

![Keychain Access my certificates](AM_files/en-keychain-certification.jpg)

(adsbygoogle=window.adsbygoogle||\[\]).push({});

configure Apple Developer account
---------------------------------

we need to connect Apple Developer Account to the iOS project. execute `iOS/projectname.xcodeproj` in RN(react native) project folder.

after xcode is executed, click `projectname` on the left top and select `General` tab.

![xcode certification](AM_files/xcode-certification.jpg)

click `Team` dropdown menu in `Signing` on above screen.

![xcode certification add new](AM_files/xcode-certification-add-new.jpg)

if you have already connected Apple Developer Account, just select that account. if you don’t have connected, select `Add an Account`.

![xcode certification login](AM_files/xcode-certification-login.jpg)

login Apple Developer account. if you don’t have Apple Developer account, see [iOS device test](https://dev-yakuza.github.io/en/react-native/ios-test-on-device/) blog post and create Apple Developer account.

![xcode certification add new](AM_files/xcode-certification-add-new.jpg)

click dropdown menu beside `Team` and select Apple Developer account we created above.

connet also Apple Developer account to Test section.

![xcode certification add test](AM_files/xcode-certification-add-test.jpg)

completed to connect Apple Developer account. let’s see about how to make Provisioning Profiles for production build.

(adsbygoogle=window.adsbygoogle||\[\]).push({});

create Provisioning Profiles
----------------------------

scroll down `Account` page in Apple Developer site and click `Provisioning Profiles` menu.

we need development Provisioing Profile and production Provisioning Profile. so do below procedure double times for development and production.

![provisioning profiles](AM_files/provisioning-profiles.jpg)

select `All` menu in Provisioning Profiles section.

![provisioning profiles detail](AM_files/provisioning-profiles-detail.jpg)

you can see above screen. click `+` button for adding new Provisioning Profile

![provisioning profiles ios](AM_files/provisioning-profiles-ios.jpg)

select `iOS App Development` and click `Continue`.

if you want to create Production Provisioning Profiles, select `App Store` in `Distribution` section.

![provisioning profiles app id](AM_files/provisioning-profiles-app-id.jpg)

select `Bundle Identifier` when we use in development. you can find `Bundle Identifier` in `Identity` section on xcode `General` tab.

![xcode bundle identifier](AM_files/xcode-certification.jpg)

click `Continue` button and select Apple Develop account and test device.

![provisioning profiles name](AM_files/provisioning-profiles-name.jpg)

insert Provisioning Profile name and click `Continue`.

completed to create Provisioning Profile. click `Download` and save it on your PC.

(adsbygoogle=window.adsbygoogle||\[\]).push({});

connect Provisioning Profiles
-----------------------------

xcode has default setting which manage automatically `Signing`(`Automatically manage signing` in `Signing` section)

![xcode bundle identifier](AM_files/xcode-certification.jpg)

if you don’t have any problem in this status, you develop and build in this status.(you don’t have any red error text in `Signing` section) we have Provisioning Profile connection error so we unchecked this option and connect Provisioning Profile manually.

below is about how to connect Provisioning Profile manually.

![xcode bundle identifier](AM_files/xcode-certification.jpg)

uncheck `Automatically manage signing` in `Signing` section.

![disable automatically manage signing](AM_files/disable_auto.jpg)

you can see `Signing(Debug)` and `Signing(Release)` after unchecking. click `Provision Profile` and select `Import Profile` and choose Provisioning Profile created above in both. in Test, do same procedure.

![disable automatically manage signing test](AM_files/disable_auto_test.jpg)

completed
---------

completed all settings. we are ready to develop and release. next, we will introduce how to use `TestFlight` and release.

[Github Sponsor](https://github.com/sponsors/dev-yakuza) .bmc-button img { width: 27px !important; margin-bottom: 1px !important; border: none !important; vertical-align: middle !important; } .bmc-button { line-height: 36px !important; height: 37px !important; text-decoration: none !important; display: inline-block !important; color: #ffffff !important; background-color: #ff813f !important; border-radius: 3px !important; border: 1px solid transparent !important; padding: 0px 9px !important; font-size: 17px !important; letter-spacing: -0.08px !important; margin: 10px !important; font-family: 'Lato', sans-serif !important; -webkit-box-sizing: border-box !important; box-sizing: border-box !important; -o-transition: 0.3s all linear !important; -webkit-transition: 0.3s all linear !important; -moz-transition: 0.3s all linear !important; -ms-transition: 0.3s all linear !important; transition: 0.3s all linear !important; } .bmc-button:hover, .bmc-button:active, .bmc-button:focus { -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; text-decoration: none !important; box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important; opacity: 0.85 !important; color: #ffffff !important; }[![Buy me a coffee](AM_files/BMC-btn-logo.svg)Buy me a coffee](https://www.buymeacoffee.com/j0cXhWiza)

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

var disqus\_config=function(){this.page.url="https://dev-yakuza.github.io/react-native/ios-certification/",this.page.identifier="https://dev-yakuza.github.io/react-native/ios-certification/"};!function(){var t=document,i=t.createElement("script");i.src="https://https-dev-yakuza-github-io-en.disqus.com/embed.js",i.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(i)}();

Please enable JavaScript to view the [comments powered by Disqus.](https://disqus.com/?ref_noscript)

SHARE

*   [
    
    Twitter
    
    ](https://twitter.com/intent/tweet?text=iOS%20Certification&url=https://dev-yakuza.github.io/react-native/ios-certification/)
*   [
    
    Facebook
    
    ](https://www.facebook.com/sharer/sharer.php?u=https://dev-yakuza.github.io/react-native/ios-certification/)
*   [
    
    RSS
    
    ](https://dev-yakuza.github.io/en/feed.xml)

Copyright © dev.yakuza@gmail.com 2020