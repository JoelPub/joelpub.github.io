---
layout:     post   				    # 使用的布局（不需要改）
title:      RN TestFlight 				# 标题 
subtitle:   Deploy a React Native App to TestFlight   #副标题
date:       2019-10-07				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---

# Deploy a React Native App to TestFlight Using Fastlane
[https://www.boorje.com/deploy-react-native-app/](https://www.boorje.com/deploy-react-native-app/)   

Deploy a React Native App to TestFlight Using Fastlane
======================================================

07 Oct, 2019

fastlane

You have created an awesome app and you’re finally ready to Beta test the app on iOS, amazing! The last thing remaining is just preparing the application for submission to [TestFlight](https://developer.apple.com/testflight/). From own experience, I know that this isn’t as simple as it might seem. Especially if you don’t have previous experience with iOS development and Xcode.

When I first attempted to deploy a React Native app to TestFlight, I didn’t really understand how the process worked. I tried following some tutorials, who all had different processes and different recommendations. After gaining more experience with publishing apps, I decided to create my own step-by-step tutorial to provide some guidance for other first time publishers.

### Goals

This tutorial will take you through a step-by-step guide on how you can prepare and publish a **React Native** app, created with the React Native CLI `react-native init`, to TestFlight. We’ll be using [Fastlane](https://fastlane.tools/) which is an open source platform that simplifies the deployment process. The setup of Fastlane is quick and easy, and when it’s in place you can build and deploy your React Native app using just a single line of code. I can promise, it’s worth the time!

### Prerequisites

This is not a guide on how to build a React Native application, or how to solve any errors you might have during the development process. Make sure that your app is working and free from errors before continuing the tutorial.

This tutorial is aimed for projects created using the React Native CLI `react-native init` and not Expo. In order to upload your React Native app to TestFlight, you’ll need a paid membership for [Apple Developer Program](https://developer.apple.com/programs/). Lastly, we’ll be using a private Github repository for storing certificates.

Apple Developer
---------------

We’ll begin the process by registering the app to a Apple Developer account. Fastlane will build and submit the React Native project to the app that we create there. Go to [developer.apple.com](https://developer.apple.com/develop/) and login into your account. If you don’t have one, you’ll need to create one.

### Unique App ID

First, we’ll need to create a new identifier for the application. We’ll create an App ID which uniquely identifies one or more apps created by a single development team. Navigate to the **Certificates, Identifiers & Profiles** page and go to the **Identifiers** tab. Create a new identifier by clicking on the ”**+**” icon. You should see a list of different types of IDs to select, as the image below. Select **App IDs** and click on **continue**.

 [![Different types of IDs](/img/blog/AL_files/identifiers.png "Different types of IDs")](https://www.boorje.com/static/079d47a30219f42d37ed85a9f2144e55/c3e5e/identifiers.png) 

The App ID is a two-part string which consists of a **Team ID** and a **bundle ID**. The Team ID is automatically set by Apple and is unique to a specific development team. The bundle ID should be unique for the app and we’ll need to create it ourselves. Let’s do so and fill in the rest of the information in order to finish the registration of the App ID. The information that we need to fill in is:

 [![Register App ID](/img/blog/AL_files/registerappid.png "Register App ID")](https://www.boorje.com/static/ec04182fe1198f95326f01f7cf5de53c/2901a/registerappid.png) 

1.  **Platform** - Choose “iOS, tvOS, watchOS”.
2.  **Description** - Add a description of your application and/or development team.
3.  **Bundle ID** - Choose “Explicit” and create a unique bundle ID which will identify your application. The recommended approach is to use **com.domainname.appname**. If you don’t have a domain name or a company name, you use your name instead.
4.  **Capabilities** - Here, you can select a range of technologies to use in your App. For this one, we won’t be selecting any.

With all the information filled in, you can click on **continue** and then finish the registration by clicking on **register**. We now have a registered App ID that uniquely identifies our app and we’re ready to move to the next step.

### App Store Connect

It’s now time to register our new app inside the [App Store Connect](https://appstoreconnect.apple.com/). Login to App Store Connect and navigate to **My Apps**. Once you’re logged in, add a new app by clicking on the ”**+**” icon in the top lefter corner and select **New App**. This opens a modal with some fields for us to fill in.

 [![Creating new app in App Store Connect](/img/blog/AL_files/newappstoreconnect.png "Creating new app in App Store Connect")](https://www.boorje.com/static/12a15da444ea19b6785bb39a2f300beb/06418/newappstoreconnect.png) 

1.  **Platforms** - Choose **iOS**
2.  **Name** - Enter the name of your app
3.  **Primary Language** - Choose the primary language used in the app
4.  **Bundle ID** - Select the bundle ID that we created in previous section.
5.  **SKU** - The SKU should be something unique for the app. I usually choose the the bundle ID but can be anything you like.
6.  **User Access** If you have multiple team members you can choose to limit the app access of the app to certain members.

Once you’ve filled in all the information, click on **create** to create the app. Before we proceed to the Xcode setup, we’ll need to add an actual iOS device.

**Note:** Adding a iOS device is required to be able to deploy your application to TestFlight for Beta testing.

### Add iOS Device

We’ll be adding a device through the [Apple Developer](https://developer.apple.com/develop/) page. From the main dashboard (make sure you’re logged in), navigate to the **Devices** tab which you’ll find in the left menu. Press the ”**+**” to register a new device. You will need to enter some information.

1.  **Platform** - Choose **iOS, tvOS, watchOS**
2.  **Device Name** - Enter a name for the device you’ll add.
3.  **Device ID (UDID)** - You can find the UDID by connecting your phone to your Mac and then going into iTunes. Click the phone icon to open up the information about your device. To view the UDID, you can click on **Serial Number** which then changes and shows the UDID of your device.

We’re now ready to proceed to Xcode.

Xcode Setup
-----------

To prepare our project for Beta deployment we’ll need to make some changes inside the projects Xcode workspace. You can find the file inside the `/ios` folder with the name of `yourprojectname.xcworkspace`. This will open the workspace with Xcode.

Inside Xcode, click on your Xcode project in the left menu and the **General** tab in the top. Here we need to make some changes under the three sections:

1.  **Identity** - Update the _Bundle Identifier_ with the bundle ID that we created earlier.
2.  **Signing** - Make sure that _Automatically manage signing_ is enabled. Then, choose your _team_. If you don’t see it there, click on _Add an account_ and sign in to your Apple developer account.
3.  **App Icons and Launch Images** - You’ll need to add an app icon, otherwise you’ll run into an error later on. You can use [Make App Icon](https://makeappicon.com/) to easily generate all the different sizes. To add the icons, click the arrow to the right of _App Icons Source_.

 [![Xcode workspace](/img/blog/AL_files/xcodeworkspace.png "Xcode workspace")](https://www.boorje.com/static/b52d2965b3c3c7f11da32004417e49bc/de97e/xcodeworkspace.png) 

We’re now ready to start setting up Fastlane.

Fastlane Setup
--------------

The setup of Fastlane requires a few steps. We’ll be following the official [Fastlane Docs](https://docs.fastlane.tools/getting-started/ios/setup/).

First, we’ll make sure that we have the latest Xcode command tools. Open up your terminal and run the following command.

    xcode-select --install

Next, we install Fastlane which you can do with **RubyGems** or **Homebrew**. The recommended installation method is with RubyGems so that’s what we’ll stick to. If you don’t have it installed, I’d recommend using a environment manager such as [rbenv](https://github.com/rbenv/rbenv).

    # Using RubyGems
    sudo gem install fastlane -NV

### Fastlane Init

Once we have `fastlane` installed, we need to configure it inside the `/ios` folder of our React Native application. Inside the terminal, navigate to the `/ios` folder inside your project and run the command.

    fastlane init

When running this command, you’ll be taken through some steps.

1.  **What would you like to use fastlane for?** - Fastlane handles different tasks but we’re interested in the second: _Automate beta distribution to TestFlight_. Type **2** and hit Enter.
2.  **Select Scheme** - Choose the first one which is your project name (NOT _projectname-tvOS_). Type **1** and hit Enter.
3.  **Login to your Apple Developer account** - Enter your Apple ID username (the email you used to create your account).

After you’ve finished the steps, Fastlane has been initialized in your project. You should now see some addtions inside the `/src` folder. Fastlane automatically adds a new folder `/fastlane` with two files:

*   `Appfile` - Stores useful information used for deployment, like the Apple ID and bundle identifier.
*   `Fastfile` - Stores the automation configuration for the tasks we can run with the `fastlane` command. There’s some code generated inside this file for us, we’ll go through this later.

It also adds a `Gemfile` which defines the `fastlane` version along with it’s dependencies. With the `Gemfile` in place, we can run `bundle exec fastlane [lane]` which will speed up the process, we’ll use this later.

Before we move on, we also need to configure some environment variables to prevent future errors during build. We’ll be adding two lines of code to `~/.bash_profile`. Run the following code to open the text editor.

    open ~/.bash_profile

Inside, we can add the two lines which are required for `fastlane` to work properly.

    export LC_ALL=en_US.UTF-8
    export LANG=en_US.UTF-8

### Code Signing

The next step is to setup the configuration for **code signing**. If you’re new to this concept, code signing is a method to ensure the user that the app is from a known sources and hasn’t been changed since it was signed by the author. This is done by verifying the author through a certificate-based digital signature.

We’ll be code signing our app using the `match` action which is part of Fastlane. When using `match`, all the required certificates and provisioning profiles will be created and stored inside a separate and private **Git repo**. It can also be stored inside **Google Cloud** but we’ll be using a git repo in this tutorial.

**Note:** By storing the credentials inside a separate git repo, everyone with access to the repo can use the credentials for code signing. This is useful especially for development teams as it only requires one code signing identity instead of one for each developer.

First we need to create a new and **private** git repo to store the credentials. Go to [GitHub](https://github.com/) or your preferred platform, and copy the url to the repo as you’ll be asked to enter this soon.

Now we can start using `match` by running the following command, still inside the `/ios` folder. We’re using `bundle exec` as mentioned before (this requires a `Gemfile`). Before running `match`, it’s recommended to clear any previous certificates with the [nuke command](https://docs.fastlane.tools/actions/match/#nuke).

    bundle exec fastlane match init

You’ll be asked to choose between `git` or `google_cloud`. Choose `git` by entering **1** followed by pressing Enter. Then you’re asked for the url to the **private** git repo you created for storing the credentials. Add the url and hit Enter to finish the setup.

This will create a `Matchfile` inside the `/fastlane` folder which will store information about the git repo that you provided. We can now generate new certificates and profiles using `match`. In order to deploy your app to TestFlight, you’ll need a iOS Distribution certificate. To create one, run the following command in your terminal.

    bundle exec fastlane match appstore

This will create a new certificate and provisioning profile and store them inside your private git repo. We’ll also create a developer certificate, which is used for when testing the app with Xcode on a physical device.

    bundle exec fastlane match development

When running these commands, the `match` action will create the certificates and upload them to the git repo.

### Fastfile

With our certificates created, the last thing left is to tell Fastlane to code sign using the iOS Distribution certificate that we created. When we ran `fastlane init`, the `Fastfile` file was created for us along with some code. Inside this file, we’ll be coding our `lane` which is a group of actions that will be executed synchronously to automate the Beta deployment process. Open up the `Fastfile` inside the `/fastlane` folder.

    default_platform(:ios)
    
    platform :ios do
      desc "Push a new beta build to TestFlight"
      lane :beta do
        increment_build_number(xcodeproj: "YourProjectName.xcodeproj")
        build_app(workspace: "YourProjectName.xcworkspace", scheme: "YourProjectName")
        upload_to_testflight
      end
    end

We start by setting the default platform to iOS and then create a lane which will be run for iOS platform only. The `desc` let’s us add a description of the lane. Then we create the actual lane called `beta`. Inside, we define a set of actions which performs some tasks for us.

*   `increment_build_number` - Increments the build number each time we upload the project. This is a requirement when uploading to TestFlight.
*   `build_app` - Builds the app, where we also specify the path to the workspace file and the project’s scheme.
*   `upload_to_testflight` - Uploads the app to TestFlight.

Before we’re ready to submit the app to TestFlight, we’ll need to add the code signing we setup earlier. This can easily be achieved by using the `sync_code_signing` action and specifying that we’re using the `appstore` certificate.

    platform :ios do
      desc "Push a new beta build to TestFlight"
      lane :beta do
        sync_code_signing(type: "appstore")    increment_build_number(xcodeproj: "YourProjectName.xcodeproj")
        build_app(workspace: "YourProjectName.xcworkspace", scheme: "YourProjectName")
        upload_to_testflight
      end
    end

Deploying to TestFlight
-----------------------

We’re now ready to deploy the app to App Store and TestFlight. With a single line of code, we can upload the app to TestFlight. Make sure you’re still in the `/ios` folder and run the following.

    bundle exec fastlane beta

The build and deployment will take some time. If you don’t encounter any errors, you should eventually see your built app in App Store Connect.

Wrapping Up
-----------

Deploying a React Native app to TestFlight can be hard, but I hope this step-by-step guide has helped you with the process. Using Fastlane will require some initial setup but it’s definitely worth it as you can build and deploy your app with a single line of code.

Thanks for your time!

* * *

#### Was this article helpful? Please share it!

I put in a lot of work and effort in all my posts and tutorials. I'd really appreciate if you could help and share them!

if(true) { (function(i,s,o,g,r,a,m){i\['GoogleAnalyticsObject'\]=r;i\[r\]=i\[r\]||function(){ (i\[r\].q=i\[r\].q||\[\]).push(arguments)},i\[r\].l=1\*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)\[0\];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); } if (typeof ga === "function") { ga('create', 'UA-147358815-1', 'auto', {}); }/\*<!\[CDATA\[\*/window.pagePath="/deploy-react-native-app/";/\*\]\]>\*//\*<!\[CDATA\[\*/window.\_\_\_chunkMapping={"polyfill":\["/polyfill-4ea298b8bf2940645630.js"\],"app":\["/app-62952ca896253591ae45.js"\],"component---node-modules-gatsby-plugin-offline-app-shell-js":\["/component---node-modules-gatsby-plugin-offline-app-shell-js-a4bfd5cb9f281694bbfb.js"\],"component---src-pages-404-js":\["/component---src-pages-404-js-f8b369ab8df893377d33.js"\],"component---src-pages-contact-js":\["/component---src-pages-contact-js-e4ffd04ad572c0f85c1d.js"\],"component---src-pages-index-js":\["/component---src-pages-index-js-a6fbdedc2ed0846afbbc.js"\],"component---src-pages-newsletter-js":\["/component---src-pages-newsletter-js-57edbeafd72b3bb4ab59.js"\],"component---src-pages-thankyou-js":\["/component---src-pages-thankyou-js-c6b757a0c4b2559262ed.js"\],"component---src-templates-blog-post-js":\["/component---src-templates-blog-post-js-e5cbad704805324048dc.js"\]};/\*\]\]>\*/