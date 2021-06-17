---
layout:     post   				    # 使用的布局（不需要改）
title:      gyp: No Xcode or CLT version detected 				# 标题 
subtitle:   macOS Catalina   #副标题
date:       2020-01-20 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---



# gyp: No Xcode or CLT version detected macOS Catalina | Anansewaa

[https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d](https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d)
==================================================================================================================




[Allan Philip Barku](https://allanphilipbarku.medium.com/?source=post_page-----38b536389e8d--------------------------------) [Jan 20, 2020](https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d?source=post_page-----38b536389e8d--------------------------------) · 5 min read [**gyp: No Xcode or CLT version detected macOS Big Sur | Anansewaa.com****How to solve gyp: No Xcode or CLT version detected on macOS Big Sur**

allanphilipbarku.medium.com](https://allanphilipbarku.medium.com/gyp-no-xcode-or-clt-version-detected-macos-big-sur-anansewaa-com-7fe936ee1623)

# gyp: No Xcode or CLT version

Did
you recently update your macOS Catalina to version 10.15.2? If you did,
then you probably in the same boat too. What I immediately noticed from
my terminal is this new shiny error about gyp: No Xcode or CLT version
detected any time I ran either yarn install or npm install

`gyp: No Xcode or CLT version detected!<br>gyp ERR! configure error`

Well
if you are wondering if that was my entire error? It is not even close.
The line goes on and on. The funny thing is I am so sure I have [command line tools](https://dev.to/allanphilipbarku/install-command-line-tools-on-macos-catalina-559k) installed. The result of `xcode-select --install`
should start the reinstallation process but if you get the result in
the image below then you already have command line tools installed
Xcode-select: error: command line tools are already installed, use "Software Update" to install updates

# Solution 1

Run the following command with sudo to reset your command-line tools. Provide your systems password if needed.

```
sudo xcode-select --reset
```

The
above command should work in most cases, but if for some reasons it
does not work for you, then you can go through the lengthy process of a
reinstall as outlined in solution 2

# Solution 2

Reinstall [command-line tools](https://anansewaa.com/install-command-line-tools-on-macos-catalina/)by removing the previously installed version
**  Step 1 **

First, get the location of the installed command-line tools by running the command below:

```
xcode-select --print-path
```

the result of the above command is `/Library/Developer/CommandLineTools`
**  Step 2 **

Knowing
the path to the currently installed command-line tools from the
previous step, You can now go ahead and remove it from the system. For
the next set of commands, you need Sudo privileges to run successfully.

```
sudo rm -r -f /Library/Developer/CommandLineTools
```

Provide
the root password to remove the command line tools. If you already have
git installed, you would get a prompt to guide you through the
installation of command-line developer tools.
Prompt to reinstall command line developer tools

Click
on install and follow the rest of the instructions in prompt to
reinstall command line developer tools. If for some reasons, you do not
get the prompt right after uninstalling your previous command line
developer tools, no need to panic. Run the following command to get the
prompt.

```
xcode-select --install
```

Prompt after running Xcode-select -install

Click
on install and then agree to the license to proceed with the
installation. Depending on your internet speed it will take some time
for the system to complete the download of the command line developer
tools. The installation process should proceed immediately after a
successful download. Look out for the done button as shown in the image
below to confirm command-line tools is successfully installed.
Done screen

With
the reinstallation of the command line developer tools the gyp: No
Xcode or CLT version detected error message should disappear when you
run any yarn or npm commands from the command line.

# Solution 3

Following solution 2, in some rear situations, you might get the subsequent error.

```
Can't install the software because it is not currently available from the Software Update server
```

The
command-line tools need to be manually downloaded to solve the
aforementioned error. The step-by-step solution is detailed below.
**  Step 1 **

Remove previously installed command-line tools with the following command.

```
sudo rm -r -f /Library/Developer/CommandLineTools
```

**  Step 2 **

Visit the apple developer site to manually download the command-line tools.

[https://developer.apple.com/download/more/?=command%20line%20tools](https://developer.apple.com/download/more/?=command%20line%20tools)
[**Sign in with your Apple ID****Sign in with your Apple ID**

Sign in with your Apple IDdeveloper.apple.com](https://developer.apple.com/download/more/?=command%20line%20tools)

Log in with your apple id when prompted to proceed to the download page.
log in screen **  Step 3 **

Select the version of command-line tools to download, as of the time of writing this article the recommended version is 12.2
Click on the hard drive image to download

Click on the dmg link as shown in the image above to begin the download of the command-line tools.
**  Step 4 **

Open or mount the downloaded dmg and double click the command-line-tools.pkg file in the mounted dmg file.
mounted command-line developer tools dmg

Follow the prompts to complete the installation of the command-line tools
Click continue and follow the prompts Agree to the Software licence agreement by clicking on the continue button Click on agree Click on install Provide your user credentials to continue the installation Installation continues Installation completed screen. Click on close to dismiss

_Originally published at_ [_https://anansewaa.com_](https://anansewaa.com/gyp-no-xcode-or-clt-version-detected-macos-catalina/) _on January 20, 2020._
[**Archived — Flawless iOS**](https://medium.com/flawless-app-stories?source=post_sidebar--------------------------post_sidebar-----------)

Archive of Flawless iOS publication — no longer accepting submissions

* [iOS App Development](https://medium.com/flawless-app-stories/tagged/ios-app-development)
* [iOS](https://medium.com/flawless-app-stories/tagged/ios)
* [Xcode](https://medium.com/flawless-app-stories/tagged/xcode)
* [Mobile App Development](https://medium.com/flawless-app-stories/tagged/mobile-app-development)
* [Mobile](https://medium.com/flawless-app-stories/tagged/mobile)

Written by
** [Allan Philip Barku](https://allanphilipbarku.medium.com/?source=follow_footer-------------------------------------)**

A Full Stack Developer | Avid Reader | Lifelong Learner
** [Archived — Flawless iOS](https://medium.com/flawless-app-stories?source=follow_footer-------------------------------------)**

Archive of Flawless iOS publication — no longer accepting submissions

Written by
** [Allan Philip Barku](https://allanphilipbarku.medium.com/?source=follow_footer-------------------------------------)**

A Full Stack Developer | Avid Reader | Lifelong Learner
** [Archived — Flawless iOS](https://medium.com/flawless-app-stories?source=follow_footer-------------------------------------)**

Archive of Flawless iOS publication — no longer accepting submissions
**  More From Medium **** [CryptoKit tutorial. How to use CryptoKit on iOS13 apps](https://medium.com/swlh/cryptokit-tutorial-how-to-use-cryptokit-on-ios13-apps-5961019752f5?source=post_internal_links---------0----------------------------)** [Raúl Ferrer](https://raulferrer.medium.com/?source=post_internal_links---------0----------------------------) in [The Startup](https://medium.com/swlh?source=post_internal_links---------0----------------------------)** [COBOL-Swift app with Zowe CLI](https://medium.com/zowe/cobol-swift-app-with-zowe-cli-59af2100110c?source=post_internal_links---------1----------------------------)** [Ishmael Pazniak](https://medium.com/@ishmael.pazniak?source=post_internal_links---------1----------------------------) in [Zowe](https://medium.com/zowe?source=post_internal_links---------1----------------------------)** [Dismissing the Keyboard in SwiftUI 2.0](https://medium.com/swlh/dismissing-the-keyboard-in-swiftui-2-0-591025493375?source=post_internal_links---------2----------------------------)** [Jonathancbadger](https://jonathancbadger.medium.com/?source=post_internal_links---------2----------------------------) in [The Startup](https://medium.com/swlh?source=post_internal_links---------2----------------------------)** [Dealing with relative dates in Swift: the cool way](https://medium.com/@rserentill/dealing-with-relative-dates-in-swift-the-cool-way-5903a7af2461?source=post_internal_links---------3----------------------------)** [Roger Serentill](https://medium.com/@rserentill?source=post_internal_links---------3----------------------------)** [Swift — Structures and Classes — Part 1](https://medium.com/hash-coding/swift-structures-and-classes-part-1-582e26bdf8dd?source=post_internal_links---------4----------------------------)** [Shivam Pandey](https://medium.com/@shivampandey_43194?source=post_internal_links---------4----------------------------) in [Hash Coding](https://medium.com/hash-coding?source=post_internal_links---------4----------------------------)** [Build an App Like Lego, with UIKit — Tutorial 1](https://medium.com/build-an-app-like-lego/build-app-lego-tutorial-1-58de8e84798d?source=post_internal_links---------5----------------------------)** [Tom Brodhurst-Hill](https://medium.com/@barefeettom?source=post_internal_links---------5----------------------------) in [Build an App Like Lego](https://medium.com/build-an-app-like-lego?source=post_internal_links---------5----------------------------)** [Building Swift Serverless REST API with AWS Lambda & DynamoDB](https://alfianlosari.medium.com/building-swift-serverless-rest-api-with-aws-lambda-dynamodb-58db2302895f?source=post_internal_links---------6----------------------------)** [Alfian Losari](https://alfianlosari.medium.com/?source=post_internal_links---------6----------------------------)** [Is Charles Proxy an internet traffic police officer?](https://medium.com/nerd-for-tech/is-charles-proxy-an-internet-traffic-police-officer-5406ec39e55c?source=post_internal_links---------7----------------------------)** [Mário Cosme](https://mario-cosme.medium.com/?source=post_internal_links---------7----------------------------) in [Nerd For Tech](https://medium.com/nerd-for-tech?source=post_internal_links---------7----------------------------) [**Learn more.**](https://medium.com/about?autoplay=1&source=post_page-----38b536389e8d--------------------------------)

Medium
is an open platform where 170 million readers come to find insightful
and dynamic thinking. Here, expert and undiscovered voices alike dive
into the heart of any topic and bring new ideas to the surface. [Learn more](https://medium.com/about?autoplay=1&source=post_page-----38b536389e8d--------------------------------)
[**Make Medium yours.**](https://medium.com/topics?source=post_page-----38b536389e8d--------------------------------)

Follow the writers, publications, and topics that matter to you, and you'll see them on your homepage and in your inbox. [Explore](https://medium.com/topics?source=post_page-----38b536389e8d--------------------------------)
[**Share your thinking.**](https://about.medium.com/creators/?source=post_page-----38b536389e8d--------------------------------)

If
you have a story to tell, knowledge to share, or a perspective to offer
— welcome home. It's easy and free to post your thinking on any topic. [Write on Medium](https://about.medium.com/creators/?source=post_page-----38b536389e8d--------------------------------)

[About](https://medium.com/about?autoplay=1&source=post_page-----38b536389e8d--------------------------------)

[Help](https://help.medium.com/hc/en-us?source=post_page-----38b536389e8d--------------------------------)

[Legal](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post_page-----38b536389e8d--------------------------------)

Get the Medium app
