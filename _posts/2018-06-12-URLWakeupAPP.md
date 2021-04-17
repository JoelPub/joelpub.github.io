---
layout:     post   				    # 使用的布局（不需要改）
title:      URL wakeup APP 				# 标题 
subtitle:   用链接唤醒APP   #副标题
date:       2018-06-12				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---




# Deep-link out of Facebook

[Spencer Zeke Depas](https://clearfaun.medium.com/?source=post_page-----6c592ebaa40a--------------------------------) [Jun 12, 2018 ·2 min read](https://clearfaun.medium.com/android-deep-link-out-of-facebook-6c592ebaa40a?source=post_page-----6c592ebaa40a--------------------------------)

[Facebook's News Feed does not respect Universal Links](https://blog.branch.io/how-to-deep-link-off-of-facebook-in-2016/).
 This means you cant simply deep-link out. If you google Deep-link out
of Facebook, the first page of results on google has no options that are
 not facebooks SDK related or Branch.io. I do not want to use a facebook
 SDK in my app nor do I want to use Branch as it is a paid api. Ideally,
 I would use no SDK. I failed to find a complete SDK less solution.

My desired results a re
 to leave facebook from a comment link. If you have the app, deep-link
with xyz content if you do not have the app go to the Playstore. If you
are on a browser go to the Playstore website listing.
Quickly add deep-links to your app

# Firebase Dynamic Links

After
 looking around I found that Firebase Dynamic links work to deep-link
into your app from Facebook. The tutorial is self-explanatory and easy
to follow have a look [here](https://firebase.google.com/docs/dynamic-links/). You can get a free domain [here](https://my.freenom.com/)
to combine with the dynamic link to make it look shiny. With the free
domain forward all request to the Playstore listing so web users get
directed to the store. This will only happen when a **web** user clicks the link. A sloppy but effective tutorial for that can be found [here](https://www.youtube.com/watch?v=yxgHAT3_cYw).

If you would like some inspiration for what you can do with your shiny new deep-links you [can have a look here](https://medium.com/@clearfaun/unlock-mobile-app-growth-retention-and-engagement-with-triggers-dfd41b35b72e). Happy Deep-linking out of facebook.
[**Unlock mobile app growth, retention, and engagement with triggers****This is the first part of a series looking at the book Hooked and applying it to mobile apps. To maximize your apps...**

medium.com](https://medium.com/@clearfaun/unlock-mobile-app-growth-retention-and-engagement-with-triggers-dfd41b35b72e) [**Spencer Zeke Depas**](https://clearfaun.medium.com/?source=post_sidebar--------------------------post_sidebar-----------)

Freelance mobile app developer & mobile app designer @ [clearfaun.com](http://clearfaun.com/) App indie dev. Loves coffee, food and mobile apps.

* [Deep Linking](https://medium.com/tag/deep-linking)
* [Android App Development](https://medium.com/tag/android-app-development)
* [Mobile App Development](https://medium.com/tag/mobile-app-development)
* [App Business](https://medium.com/tag/business-apps)
* [Mobile Marketing](https://medium.com/tag/mobile-marketing)

** [More from Spencer Zeke Depas](https://clearfaun.medium.com/?source=follow_footer-------------------------------------)**

Freelance mobile app developer & mobile app designer @ clearfaun.com App indie dev. Loves coffee, food and mobile apps.
[Jun 6, 2018](https://clearfaun.medium.com/the-uks-top-mobile-apps-and-the-gdpr-dd05c87e6c80?source=follow_footer---------0----------------------------)

# [The UK's top mobile apps and the GDPR](https://clearfaun.medium.com/the-uks-top-mobile-apps-and-the-gdpr-dd05c87e6c80?source=follow_footer---------0----------------------------)

**Before creating this article**
I did the best I could to apply The General Data Protection Regulation
(GDPR) to my products. I created granular consent, age consent, an
option to delete all user data, a clear and explicit explanation of what
 data was being used, I removed libraries and changed features to adhere
 to GDPR. **After creating this article** my
strategy has changed and I think yours might too. Below I take a look at
 the UK's top downloaded apps in April 2018 and see how they handle
GDPR.

*Information was gathered on May 31st, 2018.

# No granular consent

One of the most...
[Read more · 7 min read](https://clearfaun.medium.com/the-uks-top-mobile-apps-and-the-gdpr-dd05c87e6c80?readmore=1&source=follow_footer---------0----------------------------)

[](https://clearfaun.medium.com/the-uks-top-mobile-apps-and-the-gdpr-dd05c87e6c80?responsesOpen=true&source=follow_footer---------0----------------------------)

***

[Dec 14, 2017](https://clearfaun.medium.com/the-aspiring-appreneur-f08dabc5d076?source=follow_footer---------1----------------------------)

# [The Aspiring Appreneur](https://clearfaun.medium.com/the-aspiring-appreneur-f08dabc5d076?source=follow_footer---------1----------------------------)

# **The beginning of my**  Appreneur **journey**

I
 am Zeke and I am an aspiring appreneur. I would like to document my
travels of how I reach appreneur success. What makes me so special?
Absolutely nothing but I want it and I am relentless. I have written two
 blogs prior to this, one on becoming a master in Starcraft II and the
other on being a self taught developer and getting an Android job. Both
of these goals were achieved. I hope to share the lessons I learn along
the way.

# **My current situation**

I have an app that has under 50 downloads with no business model. The app is...
[Read more · 3 min read](https://clearfaun.medium.com/the-aspiring-appreneur-f08dabc5d076?readmore=1&source=follow_footer---------1----------------------------)

**  More From Medium **** [Flutter Deep links: iOS (Universal links) and Android (App links)](https://appvesto.medium.com/flutter-deep-links-ios-universal-links-and-android-app-links-8207eea694fb?source=post_internal_links---------0----------------------------)** [AppVesto LLC](https://appvesto.medium.com/?source=post_internal_links---------0----------------------------)** [Animate with Jetpack Compose: Animate as State and Animation Specs](https://proandroiddev.com/animate-with-jetpack-compose-animate-as-state-and-animation-specs-ffc708bb45f8?source=post_internal_links---------1----------------------------)** [Andrew Khrystian](https://anhristyan.medium.com/?source=post_internal_links---------1----------------------------) in [ProAndroidDev](https://proandroiddev.com/?source=post_internal_links---------1----------------------------)** [Handle Deep linking with Chain of Responsibility Pattern](https://levelup.gitconnected.com/handle-deep-linking-with-chain-of-responsibility-pattern-815902a9dc50?source=post_internal_links---------2----------------------------)** [Ahmet Keskin](https://ahmetkeskin.medium.com/?source=post_internal_links---------2----------------------------) in [Level Up Coding](https://levelup.gitconnected.com/?source=post_internal_links---------2----------------------------)** [Building a multi-package project with flutter](https://rodrigolmti.medium.com/building-a-multi-package-project-with-flutter-6c547d18abd5?source=post_internal_links---------3----------------------------)** [Rodrigo Martins](https://rodrigolmti.medium.com/?source=post_internal_links---------3----------------------------)** [POC on FIDO2 API in Android](https://medium.com/swlh/poc-on-fido2-api-in-android-55026b15d51c?source=post_internal_links---------4----------------------------)** [Himanshu Choudhary](https://himanshufi.medium.com/?source=post_internal_links---------4----------------------------) in [The Startup](https://medium.com/swlh?source=post_internal_links---------4----------------------------)** [3 Amazing Ways of Using Python Syntax in Swift](https://levelup.gitconnected.com/3-amazing-ways-of-using-python-syntax-in-swift-9528dca09b2f?source=post_internal_links---------5----------------------------)** [Anupam Chugh](https://anupamchugh.medium.com/?source=post_internal_links---------5----------------------------) in [Level Up Coding](https://levelup.gitconnected.com/?source=post_internal_links---------5----------------------------)** [Comparing iOS TableView and Android RecyclerView](https://betterprogramming.pub/ios-tableview-and-android-recyclerview-4b7f1cdc25f9?source=post_internal_links---------6----------------------------)** [Elye](https://elye-project.medium.com/?source=post_internal_links---------6----------------------------) in [Better Programming](https://betterprogramming.pub/?source=post_internal_links---------6----------------------------)** [Do you use NFC HCE API in Android? Check your code twice.](https://medium.com/swlh/why-you-need-to-be-very-careful-while-working-with-nfc-hce-apis-in-android-9bde32cc7924?source=post_internal_links---------7----------------------------)** [Artem Gapchenko](https://medium.com/@artyomgapchenko?source=post_internal_links---------7----------------------------) in [The Startup](https://medium.com/swlh?source=post_internal_links---------7----------------------------)

[About](https://medium.com/about?autoplay=1&source=post_page-----6c592ebaa40a--------------------------------)

[Help](https://help.medium.com/hc/en-us?source=post_page-----6c592ebaa40a--------------------------------)

[Legal](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post_page-----6c592ebaa40a--------------------------------)

Get the Medium app
