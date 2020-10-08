---
layout:     post   				    # 使用的布局（不需要改）
title:      RN Splash Screen 				# 标题 
subtitle:   How to Add a Splash Screen to a React Native App   #副标题
date:       2018-02-27				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---


# How to Add a Splash Screen to a React Native App (iOS and Android)

[Spencer Carli](https://medium.com/@spencer_carli?source=post_page-----30a3cec835ae--------------------------------) [May 3, 2017](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae?source=post_page-----30a3cec835ae--------------------------------) · 9 min read

**Updated:**February 27, 2018

I'm
 often asked about that last mile of developing a React Native app
(actually getting it into the app store). There's more to it than just
building your app and sending it off to Apple/Google — you've got to add
 icons, splash screens, write descriptions, and more before sending it
off for review.

Today we'll cover splash screens on iOS and Android.

> Using Expo or Create React Native App? No need to go through all of this — you can [follow their docs](https://docs.expo.io/versions/latest/guides/splash-screens.html) and be set up in no time.

In
 this tutorial we'll be working in the platform IDEs and writing a bit
of native code. Don't worry, I'll walk you through everything. The final
 code is [available on Github](https://github.com/spencercarli/react-native-splash-screen-demo).

I'll be starting by creating a new React Native app `react-native init SplashExample`.

> Protip:
 Set up source control before following along! Not only is it a good way
 to revert changes when you make a mistake but it's also a great way to
see exactly what changed to enable the splash screen.

# Splash Screen Assets

In
 a previous version of this tutorial I showed how to simply use a large
image to create the splash screen. This can have issues scaling between
the ever growing number of screen resolutions.

So, instead, we'll start with a single image that looks a lot like our icon. The idea here is two fold:

1. Make it look like the icon the user taps grows to fill the entire screen making for a seamless transition.
2. Keep it simple. A splash screen should only show for a few milliseconds. It shouldn't have a lot of information on it — it is, after all, a dreaded loading screen.

With all of this in mind we'll start with a a square image at three sizes (@1x = 200px, @2x = 400px, @3x = 600px).

You can get those [images from Github](https://github.com/spencercarli/react-native-splash-screen-demo/tree/master/icon).

# Preparing the App

If
 you've tried to set up a splash screen in React Native then you may
have experience a white screen flash before your content loads. If your
app has a white background this is often not very noticable, but it's
still a pain. Today we're going to make it very noticable if we have any
 flashes of white. To do that we'll set a dark background color in our
app.

Replace `App.js` with

All this did was set the background color to `#4F6D7A`, the text color to `#F5FCFF`, and use light text in the status bar.
The basic app

# Adding Splash Screens (iOS)

If you're new to Xcode the video may help you more easily follow along.

First open the project in Xcode.

```
open ios/SplashExample.xcodeproj
```

We
 then want to add a new image asset inside of Xcode. You can access that
 in the left navigator — SplashExample > SplashExample >
Imagex.xcassets and then pressing the "+" in the second left most
navigator. Call it "SplashIcon"
Add image assets

Then
 go ahead and add the three images you downloaded earlier. They'll
automatically attach themselves to the right pixel density.
Image assets

You can then open `LaunchScreen.xib`, again available in the left most navigator. You should see this.
LaunchScreen.xib

Select the two text elements ("SplashExample" and "Powered by React Native") and delete them.

Next
 we'll set the background color of the View. Select "View" in the second
 left most navigator. Then, in the right most navigator, choose
"Background" which will pop up a picker dialog.
Background color picker
> Protip:
 It took me forever to find this but if you choose the second option in
the color picker and then choose "RGB Sliders" you can then enter a hex
value.
Color picker tip

Go ahead and set the background color to `#4F6D7A`.

We
 then want to add an Image View to our splash screen. You can find that
by pressing the third option in the bottom right menu and searching for
"image". When you've got that drag it onto the blue View.
Image view

You
 then want to set the image source from the top right. When you select
the image dropdown any images from Images.xcassets should show up —
choose SplashIcon.
Set image

Now to fix proportions set the "Content Mode" to "Aspect Fit". This is available in the right most menu, second down.
Aspect fit

Next,
 we need to make sure our icon stays centered in the screen regardless
of what device the app is running on. To do this, in the right most
navigator, choose the fifth icon at the top (the one that looks like a
ruler).
Ruler

Within
 the "Autoresizing" section you'll want to disable the outter red lines
and enable the inner red arrows. This will allow the image to stay
centered regardless of the screen dimensions.
Autoresizing

That leaves us with the following:
Initial Result

Now to handle that pesky white screen flash...

**First, why does that happen?**
That's when the Javascript is loading & the bridge is initializing.
 At least that's the way I think about it. The splash screen displays
when the app is first booted up (React Native). Then while React Native
is initializing we get that white screen so what we need to do is "hold"
 the splash screen a bit longer than the default behavior.

That's where we'll use `react-native-splash-screen`.

First install the package and then link it.

```
yarn add react-native-splash-screen@3.0.6react-native link react-native-splash-screen
```

We then need to configure the package. From Xcode open the `AppDelegate.m` file.

We'll then add `#import &#x201C;SplashScreen.h" `with the other imports and then add `[SplashScreen show];` just above `return YES;` in the `didFinishLaunchingWithOptions` method.

Finally, in `App.js`, we need to tell the splash screen to hide once our app is ready. We'll do that in the `componentDidMount` lifecycle hook.

Woo!
 Looking good. One last nitpick. Let's set the statusbar color to light
when the splash screen is shown. Open Info.plist in Xcode and add a new
row to it. The key should be "UIStatusBarStyle" and the value (a string)
 to "UIStatusBarStyleLightContent".
Set status bar to white

And that leaves us with perfection
iOS Perfection

# Adding Splash Screens (Android)

If you're new to Android Studio the video may help you more easily follow along.

Android is a touch more complicated than iOS because we need to create two separate splash screens. One is used by `react-native-splash-screen`
and the other is used before the app "inflates". It's also probably
more difficult because I'm not as familiar with Android Studio. 😄

The
 first think we'll do is add the image assets you previously downloaded
to the mipmap directories in the android project. Android handles
different pixel densities different than iOS so we'll have to make some
modifications.

First of all the `mipmap` folders exist in `android/app/src/main/res` and each pixel density has a different density appended to the directory name. Here's where images should go

* mipmap-mdpi = icon.png
* mipmap-hdpi = icon@2x.png
* mipmap-xhdpi = icon@3x.png
* mipmap-xxhdpi = icon@3x.png

Once there rename the files so they're `icon.png` instead.
Android images

Next we'll go ahead and create the splash screen that is displayed when the app first launches from a cold start.

> These instructions are highly influenced by this [excellent guide by Big Nerd Ranch](https://www.bignerdranch.com/blog/splash-screens-the-right-way/). It explains the _why_ behind what we're doing.

First create a `background_splash.xml` file in `android/app/src/main/res/drawable` (you'll likely have to create the drawable directory).

Add the following code:
Background_splash.xml

What we're doing here is setting up a `layer-list`
(a list of layers) then setting a background color (which we'll define
shortly) and finally rendering our icon. The icon will be `200dp` tall and wide and centered in the screen.

Next we'll create a `colors.xml` in `android/app/src/main/res/values` in which we'll define our blue color (which is the same as the blue in our application).

Then we create a new `SplashTheme` in the `android/app/src/main/res/values/styles.xml` file.

We're telling it to use the `background_splash`
we just defined as the window background and we're also telling it to
use the blue color for the statusbar. I'm trying to emulate the actual
app as much as possible here, thus the status bar change.

While
 we're here let's go ahead and ensure that the default StatusBar of our
primary app theme defaults to the correct color as well. That leaves us
with a `styles.xml` of:

Now we need to tell our app to use the `SplashTheme` initially. We'll do that in `AndroidManifest.xml`. Inside of `<application></application>` add

And modify the MainActivity to be the following. Pay special attention to the `android:exported="true"` I added.

That leaves me with an `AndroidManifest.xml` that looks like

Now we need to create a `SplashActivity.java` file.
SplashActivity.java

The purpose of this SplashActivity.java is to forward along to our MainActivity (the React Native app). It should look like this

Now,
 assuming everything is set up correctly, if you run the app then quit
it (so it has to do a cold start) you should see the following.
Cold start launch

Looking pretty good! We get the launch screen right away but then we get that white flash again...

Fixing it isn't _quite_ as easy on iOS, but still not too difficult.

If you haven't already, install `react-native-splash-screen` and link it.

```
yarn add react-native-splash-screen@3.0.6 react-native link
```

We then need to configure the native android side.

In `MainActivity.java` add

Then configure App.js in your application, if you haven't already, to close the splash screen as soon as the app loads.

Then you'll want to create a `launch_screen.xml` (name matters!) inside of `android/app/src/main/res/layout` with a root element of `LinearLayout`.
New layout file Create with LinearLayout

Android
 Studio has an interface very similar to Xcode's interface builder, but
I'm not sure how it works so I'm just going to modify the elements
directly.

First I'm going to set the gravity of the `LinearLayout` to center and the background color to blue. The rest is default setup.

I'm then going to render an `ImageView` to render the icon inside of the `LinearLayout`.

About the properties on the `ImageView`.

* `android:layout_width`, `android:layout_height` - set height and width. We want it to be the same as what we set in `background_splash.xml`.
* `android:layout_marginTop` - this is the height of the status bar. If we omit this then the icons won't quite be in the same spot and you'll see a "jump" when the splash screens switch
* `android:src="@mipmap/icon"` image to be rendered

Finally, inside of the `colors.xml` file we need to add:
<pre><span>&lt;color name=&quot;primary_dark&quot;&gt;#4F6D7A&lt;/color&gt;</span></pre>

Otherwise the app will crash. This is a bug in `react-native-splash-screen` and may be fixed in a future release.
Android Success!

I hope you found this helpful!

> I hope you have enjoyed this tutorial! If you're interested in becoming a React Native developer join over 18,000 others in [learning React Native by Example](https://www.reactnativebyexample.com/)!
[**Handlebar Labs**](https://medium.com/handlebar-labs?source=post_sidebar--------------------------post_sidebar-----------)**  Building React Native & Meteor apps and teaching others how... ******

* [React Native](https://medium.com/handlebar-labs/tagged/react-native)
* [Splash Screen](https://medium.com/handlebar-labs/tagged/splash-screen)
* [iOS App Development](https://medium.com/handlebar-labs/tagged/ios-app-development)
* [Android App Development](https://medium.com/handlebar-labs/tagged/android-app-development)
* [Technology](https://medium.com/handlebar-labs/tagged/technology)

********

Written by
** [Spencer Carli](https://medium.com/@spencer_carli?source=follow_footer--------------------------follow_footer-----------)****  Student. Teacher. Pizza fiend. I write about React Native, Meteor, and more. http://learn.handlebarlabs.com **** [Handlebar Labs](https://medium.com/handlebar-labs?source=follow_footer--------------------------follow_footer-----------)****  Building React Native & Meteor apps and teaching others how to do the same. **

Written by
** [Spencer Carli](https://medium.com/@spencer_carli?source=follow_footer--------------------------follow_footer-----------)****  Student. Teacher. Pizza fiend. I write about React Native, Meteor, and more. http://learn.handlebarlabs.com **** [Handlebar Labs](https://medium.com/handlebar-labs?source=follow_footer--------------------------follow_footer-----------)****  Building React Native & Meteor apps and teaching others how to do the same. ****  More From Medium **** [How to Convert Dates Into Chinese Zodiacs in Swift](https://medium.com/better-programming/how-to-convert-dates-into-chinese-zodiacs-30ed15e2f2a9?source=post_internal_links---------0----------------------------)** [Kevin Peng](https://medium.com/@monorailapps?source=post_internal_links---------0----------------------------) in [Better Programming](https://medium.com/better-programming?source=post_internal_links---------0----------------------------)** [Renaming a Project in Xcode](https://medium.com/swlh/renaming-a-project-in-xcode-30d0cd96d3ee?source=post_internal_links---------1----------------------------)** [Steven Curtis](https://medium.com/@stevenpcurtis.sc?source=post_internal_links---------1----------------------------) in [The Startup](https://medium.com/swlh?source=post_internal_links---------1----------------------------)** [Create a custom Start-and-End Time Picker Alert in Swift](https://medium.com/fabcoding/create-a-custom-start-and-end-time-picker-alert-in-swift-301dd26e6c86?source=post_internal_links---------2----------------------------)** [Zeba Rahman](https://medium.com/@rahman.zeba?source=post_internal_links---------2----------------------------) in [fabcoding](https://medium.com/fabcoding?source=post_internal_links---------2----------------------------)** [Create an SF Symbols Library](https://medium.com/better-programming/creating-an-sf-symbols-library-2fbec8ba8dd1?source=post_internal_links---------3----------------------------)** [Joseph Bergman](https://medium.com/@josephbergman?source=post_internal_links---------3----------------------------) in [Better Programming](https://medium.com/better-programming?source=post_internal_links---------3----------------------------)** [Use Enums and Associated Values to Parse JSON in Swift](https://medium.com/better-programming/parse-items-with-different-key-value-pairs-in-a-json-array-with-the-help-of-enums-and-associated-301ffa81179e?source=post_internal_links---------4----------------------------)** [Emre Havan](https://medium.com/@emrehavan?source=post_internal_links---------4----------------------------) in [Better Programming](https://medium.com/better-programming?source=post_internal_links---------4----------------------------)** [Swift: Unit Test a DataTaskPublisher With URLProtocol](https://medium.com/better-programming/swift-unit-test-a-datataskpublisher-with-urlprotocol-2fbda186758e?source=post_internal_links---------5----------------------------)** [Andrea Scuderi](https://medium.com/@andreascuderi73?source=post_internal_links---------5----------------------------) in [Better Programming](https://medium.com/better-programming?source=post_internal_links---------5----------------------------)** [Method Swizzling | Swift](https://medium.com/a-swift-journey/method-swizzling-swift-2f281aae189b?source=post_internal_links---------6----------------------------)** [Matheus de Vasconcelos](https://medium.com/@ma.vasconcelos98?source=post_internal_links---------6----------------------------) in [A Swift journey](https://medium.com/a-swift-journey?source=post_internal_links---------6----------------------------)** [Write a Chatbot in Swift and Deploy to AWS Lambda — The Stream Blog](https://medium.com/macoclock/write-a-chatbot-in-swift-and-deploy-to-aws-lambda-the-stream-blog-2fbef6da4bec?source=post_internal_links---------7----------------------------)** [Matheus Cardoso](https://medium.com/@cardosodev?source=post_internal_links---------7----------------------------) in [Mac O'Clock](https://medium.com/macoclock?source=post_internal_links---------7----------------------------) [**Discover Medium**](https://medium.com/about?autoplay=1&source=post_page-----30a3cec835ae--------------------------------)**  Welcome to a place where words matter. On Medium, smart voices and
 original ideas take center stage - with no ads in sight. [Watch](https://medium.com/about?autoplay=1&source=post_page-----30a3cec835ae--------------------------------)** [**Make Medium yours**](https://medium.com/topics?source=post_page-----30a3cec835ae--------------------------------)**  Follow all the topics you care about, and we'll deliver the best stories for you to your homepage and inbox. [Explore](https://medium.com/topics?source=post_page-----30a3cec835ae--------------------------------)** [**Become a member**](https://medium.com/membership?source=post_page-----30a3cec835ae--------------------------------)**  Get unlimited access to the best stories on Medium — and support writers while you're at it. Just $5/month. [Upgrade](https://medium.com/membership?source=post_page-----30a3cec835ae--------------------------------)****** [About](https://medium.com/about?autoplay=1&source=post_page-----30a3cec835ae--------------------------------)**** [Help](https://help.medium.com/hc/en-us?source=post_page-----30a3cec835ae--------------------------------)**** [Legal](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post_page-----30a3cec835ae--------------------------------)******  Get the Medium app **


