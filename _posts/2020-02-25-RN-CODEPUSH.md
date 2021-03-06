---
layout:     post   				    # 使用的布局（不需要改）
title:      RN CodePush 				# 标题 
subtitle:   React Native 集成 CodePush 指南   #副标题
date:       2020-02-25				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---

# React Native 集成 CodePush 指南
[https://youngjuning.js.org/2020/02/React%20Native%20%E9%9B%86%E6%88%90%20CodePush%20%E6%8C%87%E5%8D%97/](https://youngjuning.js.org/2020/02/React%20Native%20%E9%9B%86%E6%88%90%20CodePush%20%E6%8C%87%E5%8D%97/)   

[杨俊宁的博客](https://youngjuning.js.org/)

怕什么真理无穷，进一寸有一寸的欢喜
=================

*   [首页](https://youngjuning.js.org/)
*   [标签64](https://youngjuning.js.org/tags/)
*   [分类23](https://youngjuning.js.org/categories/)
*   [归档59](https://youngjuning.js.org/archives/)
*   [书单](https://youngjuning.js.org/books/)
*   [歌单](https://youngjuning.js.org/music/)
*   [收藏夹](https://youngjuning.js.org/collections/)
*   搜索

       

React Native 集成 CodePush 指南
---------------------------

发表于 2020-02-25 分类于 [Hybrid](https://youngjuning.js.org/categories/Hybrid/) ， [React Native](https://youngjuning.js.org/categories/Hybrid/React-Native/)  
本文字数： 21k 阅读时长 ≈ 19 分钟

[![](/img/blog/AJ_files/dLMXty7iYKnVk35.png)](https://i.loli.net/2020/02/25/dLMXty7iYKnVk35.png)

目前现存的热更新方案有腾讯的 Bugly 应用升级\](https://bugly.qq.com/v2/products/upgrade)、React Native 中文网的Pushy\](https://update.reactnative.cn/home)、微软的\[CodePush\](https://bre.is/r3Y9hJvB) 和用来搭建私服的 code-push-server。

本文分享的是基于微软 AppCenter 的 CodePush 服务实现热更新，这个比较有代表性，也方便各位读者大大实践。当然鉴于国内的网络环境，后期会发布一篇如何基于 `code-push-server` 实现热更新功能。

[](#环境 "环境")环境
--------------

*   Xcode：Version 11.3.1 (11C504)
*   react-native：0.61.5
*   react-native-code-push: 6.1.0
*   appcenter-cli：2.3.3

[](#CodePush介绍 "CodePush介绍")CodePush介绍
--------------------------------------

CodePush 是一个 App Center 云服务，使 Apache Cordova 和 React Native 开发人员可以将移动应用程序更新直接部署到其用户的设备上。它充当中央存储库的角色，开发人员可以将某些更新（例如JS，HTML，CSS和图像更改）发 布到该存储库，并且应用程序可以（使用提供的客户端SDK）从中查询更新。这使你可以与最终用户建立更具确定性和直接的参与度模型，同时解决错误和/或添 加一些小的功能，这些功能不需要你重建二进制文件和/或通过任何公共应用商店重新分发二进制文件。默认情况下，在 App Center 上创建的所有 React Native 应用程序都启用了 CodePush。

> 注意：对于Android设备，CodePush仅在兼容TLS 1.2的设备上运行

### [](#1-安装-App-Center-CLI "1.安装 App Center CLI")1.安装 App Center CLI

你可以使用 App Center CLI 管理 CodePush 的大多数功能。要安装 CLI，请打开终端窗口或命令提示符并执行以下命令：

1  

npm install -g appcenter-cli  

成功安装 App Center CLI 后，执行`appcenter login`命令为你的 App Center 帐户详细信息配置 CLI：

[![](/img/blog/AJ_files/TwJyWsBOK5trHmj.png)](https://i.loli.net/2020/02/26/TwJyWsBOK5trHmj.png)

### [](#2-应用管理 "2.应用管理")2.应用管理

部署更新之前，必须使用以下命令使用 App Center 创建应用：

1  

appcenter apps create -d <appDisplayName> -o <operatingSystem> -p <platform>  

如果您的应用同时针对 Android 和 iOS，我们强烈建议您使用 CodePush 创建单独的应用。每个平台一个。这样，您可以分别管理和发布更新，从长远来看，这会使事情变得更简单。大多数人只是在应用名称后缀`-Android`和`-iOS`。例如：

1  
2  

appcenter apps create -d MyApp-Android -o Android -p React-Native  
appcenter apps create -d MyApp-iOS -o iOS -p React-Native  

> 注意：在 Android 和 iOS 上使用相同的应用程序可能会导致安装异常，因为为 iOS 生成的 CodePush 更新包将具有与为 Android 生成的更新不同的内容。

> 通过 `appcenter apps list` 可以查看所有的应用。

> 在App中心CLI的一个重要的新功能是设置一个应用程序的能力**当前应用程序**使用`appcenter apps set-current <ownerName>/<appName>`。通过将一个应用程序设置为当前应用程序，您无需`-a`在其他CLI命令中使用该标志。例如，`appcenter codepush deployment list -a <ownerName>/<appName>`可以将命令缩短`appcenter codepush deployment list`为设置当前应用程序的时间。您可以使用来检查哪个应用程序被设置为您帐户的当前应用程序`appcenter apps get-current`。设置当前应用程序可以缩短大多数CLI命令的键入时间。

使用 `code-push-cli`，应用程序会自动进行两次部署（`Staging`和 `Production`）。在 App Center 中，你必须使用以下命令自行创建它们：

1  
2  

appcenter codepush deployment add -a <ownerName>/<appName> Staging  
appcenter codepush deployment add -a <ownerName>/<appName> Production  

创建部署后，您可以使用来访问两个部署的部署密钥`appcenter codepush deployment list --displayKeys`，您可以开始通过它们各自的SDK（用于Cordova和React Native的详细信息）来配置移动客户端。

### [](#3-修改versionNam "3.修改versionNam")3.修改versionNam

在 `android/app/build.gradle` 中有个 `android.defaultConfig.versionName` 属性（在 `ios/**/Info.plist` 是 `<key>CFBundleShortVersionString</key>` 属性 ）；我们需要把应用版本改成 `1.0.0`（默认`1.0`，但是 `codepush` 需要三位数）

### [](#3-发布应用更新 "3.发布应用更新")3.发布应用更新

更改应用程序的代码或资产后，请按照以下说明使用 App Center CLI 将更新发布到App Center。

执行 App Center CLI `release-react` 命令以捆绑应用程序的代码和资产文件，然后将它们作为新版本发布到 App Center 服务器。例如：

1  

appcenter codepush release-react -a <ownerName>/<appName> -d Staging -t 1.0.0 -m  --development false --description <description>  

*   `[-a|--app <ownerName>/<appName>]`: 指定应用
*   `[-d|--deployment-name <deploymentName>`\]: 此参数指定要将更新发布到的部署。它默认为`Staging`，但是当您准备部署到`Production`或您自己的自定义部署之一时，只需显式设置此参数即可。
*   `[-t|--target-binary-version <targetBinaryVersion>]`: 指定要更新的应用的原生版本
*   `[-m|--mandatory]`: 是强制更新，默认 `false`
*   `[--development]`: 此参数指定是否生成未缩小的开发JS包。如果未指定，则默认为`false`禁用警告并缩小包的位置。
*   `[--description <description>`\]: 此参数为部署提供了可选的“更改日志”。该值将往返传送给客户端，以便在检测到更新时，您的应用可以选择将其显示给最终用户（例如，通过“新功能”对话框）。该字符串接受诸如`\n`和的控制字符，`\t`因此您可以在描述中包括空格格式，以提高可读性。

> CodePush客户端支持差异更新，因此，即使您在每次更新中释放JS捆绑包和资产，最终用户也只会实际下载他们需要的文件。该服务会自动处理此问题，因此您可以专注于创建出色的应用程序，而我们会担心优化最终用户的下载。

[](#React-Native-Client-SDK "React Native Client SDK")React Native Client SDK
-----------------------------------------------------------------------------

该插件为 CodePush 服务提供了客户端集成，使你可以轻松地向你的 React Native 应用添加动态更新体验。

> 注意：以下配置均基于 react-native 0.60 版本。

### [](#它是如何工作的？ "它是如何工作的？")它是如何工作的？

React Native 应用程序由 JavaScript 文件和任何相关的图片组成，它们由打包程序 metro 捆绑在一起, 并作为特定于平台的二进制文件（`.ipa` 或 `.apk` 文件）的一部分进行分发。发行该应用程序时，更新 JavaScript 代码（例如进行错误修复，添加新功能）或更新图片资源要求你重新编译并重新分发整个二进制文件，其中包括与商店相关的所有时间。

通过使你的 JavaScript 和图片资源与您发布到 CodePush 服务器的更新同步，CodePush 插件可帮助你立即在最终用户面前获得产品改进。

为了确保您的最终用户始终拥有你的应用程序的正常运行版本，CodePush 插件会维护先前更新的副本，因此，如果您不小心推送了包含崩溃的更新，它可以自动回滚。这样，你可以放心，新发现的发行版不会导致用户被阻塞。

> 注意：任何涉及本机代码的产品更改（例如，修改`AppDelegate.m`/`MainActivity.java`、添加 `ttf` 或添加原生插件）都无法通过 CodePush 分发，因此必须通过相应的商店进行更新。

### [](#支持的React-Native平台 "支持的React Native平台")支持的React Native平台

*   iOS（7以上）
*   Android（4.1以上）
*   Windows（UWP）

### [](#安装-react-native-code-push "安装 react-native-code-push")安装 react-native-code-push

1  

yarn add react-native-code-push  

与其他所有React Native插件一样，iOS 和 Android 的集成体验也有所不同，因此请根据您的应用目标平台执行以下设置步骤。请注意，如果您同时针对两个平台，建议为每个平台创建单独的 CodePush 应用程序。

> 本指南假定您已使用该`react-native init`命令初始化React Native项目。

### [](#iOS设置 "iOS设置")iOS设置

获得 CodePush 插件后，必须将其集成到 React Native 应用程序的 Xcode 项目中并正确配置。

1.  运行`cd ios && pod install && cd ..`以安装所有必需的CocoaPods依赖项。
    
2.  打开`AppDelegate.m`文件，并为CodePush标头添加导入语句：
    
    1  
    
    #import <CodePush/CodePush.h>  
    
3.  查找以下代码行，该代码为生产版本的网桥设置源URL：
    
    1  
    
    return \[\[NSBundle mainBundle\] URLForResource:@"main" withExtension:@"jsbundle"\];  
    
4.  用以下行替换它：
    
    1  
    
    return \[CodePush bundleURL\];  
    
    此更改将你的应用配置为始终加载应用JS捆绑包的最新版本。在首次启动时，这将与使用该应用程序编译的文件相对应。但是，在通过CodePush推送更新后，这将返回最近安装的更新的位置。
    
    通常，您只想使用 CodePush 来解决发行版本中的 JS 包位置，因此，我们建议使用`DEBUG`预处理器宏在是否使用打包程序服务器和 CodePush 之间进行动态切换。这样可以更轻松地确保您在生产中获得所需的正确行为，同时仍可以在调试时使用Chrome开发工具，实时重新加载等。
    
    你的`sourceURLForBridge`方法应如下所示：
    
    1  
    2  
    3  
    4  
    5  
    6  
    7  
    8  
    
    \- (NSURL \*)sourceURLForBridge:(RCTBridge \*)bridge  
    {  
     #if DEBUG  
     return \[\[RCTBundleURLProvider sharedSettings\] jsBundleURLForBundleRoot:@"index" fallbackResource:nil\];  
     #else  
     return \[CodePush bundleURL\];  
     #endif  
    }  
    
5.  将部署密钥添加到`Info.plist`：
    
    为了让 CodePush 运行时知道应该针对哪个部署查询更新，请打开你的应用的 `Info.plist` 文件，并添加一个名为`CodePushDeploymentKey`的新条目，其值是你要配置的应用的 `Staging Deployment Key`。
    
    你可以通过 `appcenter codepush deployment list -k` 来检索这个值（该 `-k` 标志是必需的，因为默认情况下不会显示键），然后复制相对应的 `Deployment Key` 即可。
    
    [![](/img/blog/AJ_files/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)](https://cloud.githubusercontent.com/assets/116461/11601733/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)
    
    为了有效利用与 CodePush 应用程序一起创建的 `Staging` 和 `Production` 部署，请在实际将你的应用程序对 CodePush 的使用移入生产环境之前，进行[多部署测试](#多部署测试)的配置。
    
    > 如果您需要动态使用其他部署，还可以使用[动态部署分配](#动态部署分配)在JS代码中覆盖部署密钥
    

### [](#Android设置 "Android设置")Android设置

为了将CodePush集成到您的Android项目中，请执行以下步骤：

1.  在`android/app/build.gradle`文件中，将文件`codepush.gradle`添加为下面的其他构建任务定义：
    
    1  
    2  
    3  
    
    ...  
    apply from: "../../node\_modules/react-native-code-push/android/codepush.gradle"  
    ...  
    
2.  `MainApplication.java`通过以下更改更新文件以使用 CodePush：
    
    1  
    2  
    3  
    4  
    5  
    6  
    7  
    8  
    9  
    10  
    11  
    12  
    13  
    
    ...  
    // 1. 导入插件的类  
    import com.microsoft.codepush.react.CodePush;  
    public class MainApplication extends Application implements ReactApplication {  
     private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {  
     ...  
     // 2. 重写 getJSBundleFile 方法，每次 app 启动的时候让 CodePush 运行时决定从哪里加载 JS bundle  
     @Override  
     protected String getJSBundleFile() {  
     return CodePush.getJSBundleFile();  
     }  
     };  
    }  
    
3.  将部署密钥添加到`strings.xml`：
    
    为了让 CodePush 运行时知道它应该查询哪些部署更新，请打开您的应用程序的 `string.xml` 文件，并添加一个名为 `CodePushDeploymentKey` 的新字符串，它的值是应用的 `Staging` 部署。你可以通过 `appcenter deployment list <ownerName>/<appName> -k` 获取该值。
    
    [![](/img/blog/AJ_files/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)](https://cloud.githubusercontent.com/assets/116461/11601733/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)
    
    您`strings.xml`应该看起来像这样：
    
    1  
    2  
    3  
    4  
    
    <resources\>  
     <string name\="app\_name"\>AppName</string\>  
     <string moduleConfig\="true" name\="CodePushDeploymentKey"\>DeploymentKey</string\>  
    </resources\>  
    
    为了有效利用与CodePush应用程序一起创建的`Staging`和`Production`部署，请在实际将您的应用程序对CodePush的使用移入生产环境之前，请参考下面的[多部署测试](#多部署测试)文档。
    
    > 如果您需要动态使用其他部署，还可以使用[动态部署分配](#动态部署分配)在JS代码中覆盖部署密钥
    

### [](#使用插件 "使用插件")使用插件

下载并链接了 CodePush 插件，并且为你的应用程序询问 CodePush 从何处获取正确的 JS bundle 包后，剩下的唯一一件事就是向你的应用程序添加必要的代码，以控制以下策略：

1.  什么时候（多久）检查一次更新？（例如，应用程序启动，在设置页面中单击按钮或按固定时间间隔定期进行）
2.  当有可用更新时，如何将其呈现给最终用户？

最简单的方式是 `CodePush-ify` 应用程序的根组件。为此，您可以选择一下两个选项之一：

*   选项1：将您的根组件与 codePush 高阶组件包装在一起：
    
    1  
    2  
    3  
    
    import codePush from 'react-native-code-push'  
    const App = () => {}  
    App = codePush(App)  
    
*   选项2：使用 ES7装饰器 语法：
    
    > Babel 6.x 尚不支持装饰器。您可能需要通过安装和使用 babel-preset-react-native-stage-0 来启用装饰器。
    
    > Babel 7.x 支持装饰器语法。你可以使用 @babel/plugin-proposal-decorators 来启用装饰器。
    
    1  
    2  
    3  
    4  
    5  
    
    import codePush from "react-native-code-push"  
      
    @codePush  
    class MyApp extends Component {  
    }  
    

默认情况下，CodePush 将在每次启动应用程序时检查更新。如果有可用更新，它将在下一次重新启动应用程序时（由最终用户或操作系统明确显示）以静默方式下载并安装，从而确保最终 用户获得最少的侵入性体验。如果必须使用可用的更新，则将立即安装该更新，以确保最终用户尽快获得它。

如果您希望应用程序更快地发现更新，则还可以选择每次应用程序从后台恢复时与 CodePush 服务器同步。

1  
2  
3  
4  

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON\_APP\_RESUME }  
const App = () => {}  
  
export default codePush(codePushOptios)(App)  

另外，如果您想对检查发生的时间进行细粒度的控制（例如按按钮或定时器间隔），则可以使用 CodePush.sync() 随时进行调用，还可以通过 `SyncOptions` 通过 `CheckFrequency.MANUAL` 来关闭 CodePush 的自动检查功能:

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  
18  
19  
20  
21  
22  
23  
24  
25  
26  
27  
28  
29  
30  
31  
32  
33  
34  
35  
36  
37  
38  
39  
40  
41  

import React from 'react';  
import {View, StyleSheet} from 'react-native';  
import codePush from 'react-native-code-push';  
import AwesomeButton from 'react-native-really-awesome-button';  
  
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };  
  
const App = () => {  
 const checkForUpdate = () => {  
 codePush.sync({  
 updateDialog: true,  
 installMode: codePush.InstallMode.IMMEDIATE,  
 });  
 };  
  
 const clear = () => {  
 codePush.clearUpdates();  
 };  
  
 return (  
 <View style={styles.container}>  
 <AwesomeButton type="secondary" onPress={checkForUpdate}>  
 检查更新  
 </AwesomeButton>  
 <AwesomeButton type="secondary" onPress={clear}>  
 清除更新  
 </AwesomeButton>  
 </View>  
 );  
};  
  
const styles = StyleSheet.create({  
 container: {  
 flex: 1,  
 justifyContent: 'center',  
 alignItems: 'center',  
 },  
});  
  
// 注意：这是可选的，完全可以不使用 codePush 这里包装  
export default codePush(codePushOptions)(App);  

如果你想要显示一个更新确认弹窗（一个主动安装）。配置何时安装可用更新（例如强制立即重启）或以任何其他方式自定义更新体验，请参阅 codepush API参考以获取有关一下信息：如何调整此默认行为。

### [](#应用商店规则 "应用商店规则")应用商店规则

*   苹果App允许使用热更新Apple’s developer agreement, 为了不影响用户体验，规定必须使用静默更新。
    
*   Google Play不能使用静默更新，必须弹框告知用户App有更新。
    
*   中国的android市场必须采用静默更新（如果弹框提示，App会被“请上传最新版本的二进制应用包”原因驳回）。
    

[](#多部署测试 "多部署测试")多部署测试
-----------------------

在入门文档中，我们说明了如何使用特定的部署密钥配置 CodePush 插件。但是，为了有效地测试发型版，至关重要的是，在首次创建 CodePush 应用程序（或你可能已经创建的任何自定义部署）时，利用我们建议进行的 `Staging` 和 `Production` 部署。

> 我们的客户端回滚功能可以帮助您在安装导致崩溃的版本后解除对用户的阻止，服务器端的回滚（例如`appcenter codepush rollback`）使您可以防止其他用户在发现错误的版本后再安装它。但是，如果可以从一开始就防止广泛发布错误更新，那显然更好。

利用`Staging`和`Production`部署，您可以实现类似于以下的工作流程（随意定制！）：

1.  `Staging` 使用 `appcenter codepush release-react` 命令将 CodePush 更新发布到您的部署中（如果你需要更多的控制权可以使用 `appcenter codepush release` ）
2.  构建应用程序的 staging`/`beta\` 版本，从服务器同步更新，并验证其是否按预期工作
3.  使用以下命令将测试的发行版从 `Staging` 升级到 `Prouction`: `appcenter codepush promote -a <ownerName>/<appName> -s Staging -d Production`
4.  构建应用程序的 `production`/`release`，从服务其同步更新并验证其是否按预期工作

> 如果您想采取更为谨慎的方法，甚至可以选择在“＃3”中执行 **分阶段推出**，这使您可以减轻更新带来的额外潜在风险（例如，＃2中的测试是否接触了所有可能的设备），仅使一定比例的用户可以使用生产更新（例如`code-push promote -a / -s Staging -d Production -r 20%`）。然后，在等待了一段合理的时间以查看是否有崩溃报告或客户反馈后，您可以通过运行将其扩展到整个受众`appcenter codepush patch -a / Production -r 100%`。

### [](#安卓系统 "安卓系统")安卓系统

在Android Gradle plugin 允许您定义自定义配置设置，每个“构建类型”（如调试，发布）。此机制使您可以轻松地使用 CodePush 部署密钥配置调试版本，而发行版本也可以配置为使用 CodePush 生产部署密钥。

提醒一下，您可以通过`appcenter codepush deployment list -k`从终端运行来检索这些键。

要进行设置，请执行以下步骤：

1.  打开项目的应用程序级别`build.gradle`文件（例如标准 React Native 项目中的 `android/app/build.gradle`）
    
2.  查找此`android { buildTypes {} }`部分，并`resValue`为您`debug`和`release`构建类型定义条目，分别引用您的密钥`Staging`和`Production`部署密钥。
    
    1  
    2  
    3  
    4  
    5  
    6  
    7  
    8  
    9  
    10  
    11  
    12  
    13  
    14  
    15  
    16  
    17  
    18  
    19  
    20  
    21  
    22  
    23  
    24  
    25  
    26  
    27  
    
    android {  
     ...  
     buildTypes {  
     debug {  
     signingConfig signingConfigs.debug  
     // Note: CodePush updates should not be tested in Debug mode as they are overriden by the RN packager. However, because CodePush checks for updates in all modes, we must supply a key.  
     resValue "string", "CodePushDeploymentKey", '""'  
     }  
     release {  
     // Caution! In production, you need to generate your own keystore file.  
     // see https://facebook.github.io/react-native/docs/signed-apk-android.  
     signingConfig signingConfigs.release  
     minifyEnabled enableProguardInReleaseBuilds  
     proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"  
     resValue "string", "CodePushDeploymentKey", '""'  
     }  
     // NOTE: The naming convention for releaseStaging is significant due to http://t.cn/EAnyAzi  
     releaseStaging.initWith(release)  
     releaseStaging {  
     resValue "string", "CodePushDeploymentKey", '""'  
     // Note: It is a good idea to provide matchingFallbacks for the new buildType you create to prevent build issues（http://t.cn/EAex4XH）  
     // Add the following line if not already there  
     matchingFallbacks = \['release'\]  
     }  
     }  
    ...  
    }  
    
    > 如果要在构建过程中配置部署密钥，请记住从`strings.xml`中删除密钥。
    
    > `releaseStaging`由于此行，的命名约定，这不能改。
    

### [](#iOS "iOS")iOS

> 该部分适用于 Xcode 11

Xcode 允许你为每个**配置** (如 `debug`, `release`) 自定义构建设置，然后可以将其引用为 `Info.plist` 文件中的键值（如 `CodePushDeploymentKey` 设置）。此机制是您可以轻松地进行构建配置以生成二进制文件，这些二进制文件被配置为与不同的 CodePush 部署同步。

要进行设置，请执行以下步骤：

1.  打开您的 Xcode 项目，然后在 `Project navigator` 窗口中选择您的项目
    
2.  确保已选择 `PROJECT` 节点，而不是 `TARGETS`
    
3.  选择 `Info` 标签
    
4.  点击 `+` 的内部按钮`Duplicate "Release" Configuration`  
    [![](/img/blog/AJ_files/rn-ios-8.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-8.png)
    
5.  将新配置命名为 `Staging`（或您喜欢的任何名称）
    
6.  选择 `Build Settings` 选项卡
    
7.  单击工具栏上的 `+` 按钮，创建一个名为 `CONFIGURATION_BUILD_DIR` 的 `User-Defined Setting`, 使用相同的 `per-configuration` 配置。
    
    [![](/img/blog/AJ_files/Sodu3.png)](https://i.stack.imgur.com/Sodu3.png)
    
    > 注意：每次创建这个 Xcode 都会崩溃，只能先把值写入之后，在 `project.pbxproj` 中新建。
    
8.  点击工具栏的 `+` 并选择 `Add User-Defined Setting`
    
    [![](/img/blog/AJ_files/rn-ios-10.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-10.png)
    
9.  将此新设置命名为`CodePushDeploymentKey`，展开它，然后为 `Staging`配置指定您的 `Staging` 部署密钥，为 `Release` 配置指定您的 `Production` 部署密钥。
    
    [![](/img/blog/AJ_files/rn-ios-11.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-11.png)
    
    > 提醒一下，您可以通过`appcenter codepush deployment list -a <ownerName>/<appName> --displayKeys`从终端运行来检索这些键。
    
10.  打开项目的 `Info.plist` 文件，然后将`CodePushDeploymentKey`条目的值更改为`$(CODEPUSH_KEY)`
    
    [![](/img/blog/AJ_files/rn-ios-12.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-12.png)
    

就是这样了，现在当你运行或构建你的App，你的 `Staging` 包将自动同步你的 `Staging` 部署，你的 `Release` 包将自动同步你的 `Production` 部署。

> 注意：如果你遇到 `ld: library not found for ...` 错误信息，请看一下这个 issuse

此外，如果你想给他们不同的名称和/或图标，你可以修改`Product Bundle Identifier`，`Product Name`以及`Asset Catalog App Icon Set Name`

[](#动态部署分配 "动态部署分配")动态部署分配
--------------------------

上一节说明了如何利用多个`CodePush`部署，以便在更新发布给用户之前，有效地测试您的更新内容。 但是，由于该工作流静态地将部署分配嵌入到实际二进制文件中，因此`临时构建`和`生产构建`只会同步该部署的更新内容。

在许多情况下，这是足够的，因为您只希望您的团队，客户，利益相关者等与您的预生产版本同步，因此，他们只需要知道如何与该版本同步构建。

但是，如果你希望能够进行 `A / B` 测试，或者为某些用户提供应用程序的早期访问权限，那么能够在运行时将特定用户（或受众）动态地置于特定部署中将非常有用。

为了实现此工作流程，你需要做的就是指定调用该`codePush`方法时希望当前用户与之同步的部署密钥。指定后，此密钥将覆盖应用程序的 `Info.plist`（iOS）或 `MainActivity.java`（Android）文件中提供的“默认”密钥。这允许您生成临时或生产构建，也可以根据需要动态“重定向”。

1  
2  
3  

// Imagine that "userProfile" is a prop that this component received  
// which includes the deployment key that the current user should use.  
codePush.sync({ deploymentKey: userProfile.CODEPUSH\_KEY });  

有了这样的变化后，现在只需选择应用程序如何为当前用户配置正确的部署密钥。 在实践中，通常有两种解决方案：

1.  将更改部署的功能开放给用户。例如，您的设置页面可能会有一个切换按钮以启用“测试版”的访问权限。 如果您不在乎预生产更新的内容被得知，并且您的某些用户可能希望根据自己的意愿选择使用最新（并且可能有错误）的更新（有点像Chrome渠道）。 但是，此解决方案将决策权交给您的用户，这无法帮助您透明地执行 `A / B` 测试。
2.  使用额外的元数据注释用户的服务器端配置文件，标明与其同步的部署。 默认情况下，您的应用只能使用二进制嵌入密钥，但在用户通过身份验证后，您的服务器可以选择将其“重定向”到其他部署，这样您就可以根据需要逐步将某些用 户或组放置在不同的部署中。您甚至可以选择将服务器响应存储在本地存储中，以使其成为新的默认值。 如何将密钥与用户的配置文件一起存储完全取决于您的身份验证解决方案（例如 `Auth0`，`Firebase`，自定义`DB` + `REST API`），但这通常非常简单。

> 注意：如果需要，您还可以实施混合解决方案，允许最终用户在不同部署之间切换，同时还允许您的服务器覆盖该决策。 这样，您就拥有了“部署解决方案”的层次结构，可确保您的应用程序能够自行更新，用户可以通过获得最新内容的访问权限来获得最新体验，但您也有能力根据需 要对用户进行 `A / B` 测试。

由于我们建议将`Staging`部署用于更新的预发布测试（如上一节中所述），因此使用该部署对用户执行 `A / B` 测试并不一定有意义，与此相反，你应该允许早期访问（如上面选项1中所述）。因此，我们建议充分利用自定义应用程序部署，以便您可以按用户需求对用户进行细分。例如，您可以创建长期甚至是一次性的部署，向其发布应用程序的变体，然后将某些用户放入其中，以查看其参与度。

1  
2  
3  
4  
5  

// #1) Create your new deployment to hold releases of a specific app variant  
appcenter codepush deployment add -a <ownerName>/<appName> test-variant-one  
  
// #2) Target any new releases at that custom deployment  
appcenter codepush release-react -a <ownerName>/<appName> -d test-variant-one  

> 注意：从一个部署“切换”到另一个部署的用户数，被纳入到部署中的“安装度量”中报告的总用户数。例如，如果您的`Production` 部署当前报告的用户总数为1，但您将该用户动态切换为 `Staging` 部署，则 `Production` 部署将报告 0个总用户，而 `Staging` 部署将报告1（刚刚切换的用户）。 即使在使用基于运行时的部署重定向解决方案的情况下，这种行为可以让你准确地跟踪您的版本使用情况。

[](#最佳实践 "最佳实践")最佳实践
--------------------

> 源码：https://github.com/youngjuning/AppCenterCodePushDemo

### [](#App-js "App.js")App.js

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  
18  
19  
20  
21  
22  
23  
24  
25  
26  
27  
28  
29  
30  
31  
32  
33  
34  
35  
36  
37  
38  
39  
40  
41  
42  
43  
44  
45  

import React, {useEffect} from 'react';  
import {View, StyleSheet} from 'react-native';  
import codePush from 'react-native-code-push';  
import AwesomeButton from 'react-native-really-awesome-button';  
import {codePushSync, checkForUpdate} from './CodePushUtils';  
const App = () => {  
 const getUpdateMetadata = async () => {  
 const running = await codePush.getUpdateMetadata(  
 codePush.UpdateState.RUNNING,  
 );  
 const pending = await codePush.getUpdateMetadata(  
 codePush.UpdateState.PENDING,  
 );  
 console.log('\[CodePush\] running', running);  
 console.log('\[CodePush\] pending', pending);  
 };  
  
 useEffect(() => {  
 codePushSync();  
 }, \[\]);  
  
 return (  
 <View style={styles.container}>  
 <AwesomeButton onPress={checkForUpdate} style={{marginBottom: 10}}>  
 Check For Update!  
 </AwesomeButton>  
 <AwesomeButton onPress={() => codePush.clearUpdates()} style={{marginBottom: 10}}>  
 Clear Updates!  
 </AwesomeButton>  
 <AwesomeButton onPress={getUpdateMetadata}>  
 getUpdateMetadata!  
 </AwesomeButton>  
 </View>  
 );  
};  
  
const styles = StyleSheet.create({  
 container: {  
 flex: 1,  
 justifyContent: 'center',  
 alignItems: 'center',  
 },  
});  
  
export default App;  

### [](#CodePushUtils-js "CodePushUtils.js")CodePushUtils.js

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  
18  
19  
20  
21  
22  
23  
24  
25  
26  
27  
28  
29  
30  
31  
32  
33  
34  
35  
36  
37  
38  
39  
40  
41  
42  
43  
44  
45  
46  
47  
48  
49  
50  
51  
52  
53  
54  
55  
56  
57  
58  
59  
60  
61  
62  
63  
64  
65  
66  
67  
68  
69  
70  
71  
72  
73  
74  
75  
76  
77  
78  
79  
80  
81  
82  
83  
84  
85  
86  
87  
88  
89  
90  
91  
92  
93  
94  
95  
96  
97  
98  
99  
100  
101  
102  
103  
104  
105  
106  
107  
108  
109  
110  
111  
112  
113  
114  
115  
116  
117  
118  
119  

import {AppState, Platform, Alert} from 'react-native';  
import codePush from 'react-native-code-push';  
import configReader from 'react-native-config-reader';  
  
const CodePushDeploymentKey = {  
 ios: {  
 debug: '',  
 staging: '944zuIiRSds-ZZY6AQF82aRl0b1vUL\_mMxiie',  
 release: 'yyJfk2vtpLUUlOCg3FnvCcky9o4U1lEWR1UJV',  
 },  
 android: {  
 debug: '',  
 releasestaging: 'tOncLvKACzzSkUaML9tCOUfPZxHVnobfaNIUe',  
 release: 'Gtc4iXTPn24yu6CBrbl\_V2GTy21xtdQyfm6x1',  
 },  
};  
  
const getDeploymentKey = () => {  
 const buildType = configReader.BUILD\_TYPE.toLowerCase();  
 const deploymentKey = CodePushDeploymentKey\[Platform.OS\]\[buildType\];  
 console.log('\[CodePushUtils\]', deploymentKey);  
 return deploymentKey;  
};  
  
const codePushStatusDidChange = async syncStatus => {  
 switch (syncStatus) {  
 case codePush.SyncStatus.CHECKING\_FOR\_UPDATE:  
 // 0 - 正在查询CodePush服务器以进行更新。  
 console.info('\[CodePush\] Checking for update.');  
 break;  
 case codePush.SyncStatus.AWAITING\_USER\_ACTION:  
 // 1 - 有可用的更新，并且向最终用户显示了一个确认对话框。（仅在updateDialog使用时适用）  
 console.info('\[CodePush\] Awaiting user action.');  
 break;  
 case codePush.SyncStatus.DOWNLOADING\_PACKAGE:  
 // 2 - 正在从CodePush服务器下载可用更新。  
 console.info('\[CodePush\] Downloading package.');  
 break;  
 case codePush.SyncStatus.INSTALLING\_UPDATE:  
 // 3 - 已下载一个可用的更新，并将其安装。  
 console.info('\[CodePush\] Installing update.');  
 break;  
 case codePush.SyncStatus.UP\_TO\_DATE:  
 // 4 - 应用程序已配置的部署完全最新。  
 console.info('\[CodePush\] App is up to date.');  
 break;  
 case codePush.SyncStatus.UPDATE\_IGNORED:  
 // 5 该应用程序具有可选更新，最终用户选择忽略该更新。（仅在updateDialog使用时适用）  
 console.info('\[CodePush\] User cancelled the update.');  
 break;  
 case codePush.SyncStatus.UPDATE\_INSTALLED:  
 // 6 - 安装了一个可用的更新，它将根据 SyncOptions 中的 InstallMode指定在 syncStatusChangedCallback 函数返回后立即或在下次应用恢复/重新启动时立即运行。  
 console.info('\[CodePush\] Installed update.');  
 break;  
 case codePush.SyncStatus.SYNC\_IN\_PROGRESS:  
 // 7 - 正在执行的 sync 操作  
 console.info('\[CodePush\] Sync already in progress.');  
 break;  
 case codePush.SyncStatus.UNKNOWN\_ERROR:  
 // -1 - 同步操作遇到未知错误。  
 console.info('\[CodePush\] An unknown error occurred.');  
 break;  
 }  
};  
  
const codePushDownloadDidProgress = progress => {  
 const curPercent = (  
 (progress.receivedBytes / progress.totalBytes) \*  
 100  
 ).toFixed(0);  
 console.log('\[CodePushUtils\] Downloading Progress', \`${curPercent}%\`);  
 // console.log(\`${progress.receivedBytes} of ${progress.totalBytes} received.\`);  
};  
  
const syncImmediate = async () => {  
 const deploymentKey = getDeploymentKey();  
 codePush.sync(  
 {  
 updateDialog: {  
 // 是否显示更新描述  
 appendReleaseDescription: true,  
 // 更新描述的前缀。 默认为"Description"  
 descriptionPrefix: '\\n\\n更新内容：\\n',  
 // 强制更新按钮文字，默认为continue  
 mandatoryContinueButtonLabel: '立即更新',  
 // 强制更新时的信息. 默认为"An update is available that must be installed."  
 mandatoryUpdateMessage: '必须更新后才能使用',  
 // 非强制更新时，按钮文字,默认为"ignore"  
 optionalIgnoreButtonLabel: '稍后',  
 // 非强制更新时，确认按钮文字. 默认为"Install"  
 optionalInstallButtonLabel: '后台更新',  
 // 非强制更新时，检查到更新的消息文本  
 optionalUpdateMessage: '有新版本了，是否更新？',  
 // Alert窗口的标题  
 title: '更新',  
 },  
 deploymentKey,  
 installMode: codePush.InstallMode.IMMEDIATE,  
 },  
 codePushStatusDidChange,  
 codePushDownloadDidProgress,  
 );  
};  
  
export const checkForUpdate = async () => {  
 const deploymentKey = getDeploymentKey();  
 const update = await codePush.checkForUpdate(deploymentKey);  
 if (!update) {  
 Alert.alert('提示', '已是最新版本');  
 } else {  
 syncImmediate();  
 }  
};  
  
export const codePushSync = () => {  
 AppState.addEventListener('change', newState => {  
 newState === 'active' && syncImmediate();  
 });  
};  

### [](#Npm-Scripts "Npm Scripts")Npm Scripts

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  

{  
 "scripts": {  
 ...  
 "gradle:clean": "cd android && ./gradlew clean",  
 "an:release": "yarn gradle:clean && cd android && ./gradlew app:assembleRelease",  
 "an:installRelease": "yarn gradle:clean && cd android && ./gradlew app:installRelease",  
 "an:staging": "yarn gradle:clean && cd android && ./gradlew app:assembleReleaseStaging",  
 "an:installStaging": "yarn gradle:clean && cd android && ./gradlew app:installReleaseStaging",  
 "displayKeys": "yarn disPlayIosKeys && yarn disPlayAndroidKeys",  
 "disPlayIosKeys": "appcenter codepush deployment list --app youngjuning/AppCenterCodePushDemo-iOS --displayKeys",  
 "disPlayAndroidKeys": "appcenter codepush deployment list --app youngjuning/AppCenterCodePushDemo-Android --displayKeys",  
 "release-react": "yarn release-react-ios && yarn release-react-android",  
 "release-react-ios": "appcenter codepush release-react --app youngjuning/AppCenterCodePushDemo-iOS",  
 "release-react-android": "appcenter codepush release-react --app youngjuning/AppCenterCodePushDemo-Android"  
 ...  
 },  
}  

[](#扩展 "扩展")扩展
--------------

### [](#CodePush-什么情况下不会立即重启应用 "CodePush 什么情况下不会立即重启应用")CodePush 什么情况下不会立即重启应用

1.  自上一次`disallowRestart`被调用，没有新的更新。
2.  有更新，但`installMode`为`InstallMode.ON_NEXT_RESTART`的情况下。
3.  有更新，但`installMode`为`InstallMode.ON_NEXT_RESUME`，并且程序一直处于前台，并没有从后台切换到前台的情况下。
4.  自从上次`disallowRestart`被调用，没有再调用`restartApp`。

### [](#TypeSctipt "TypeSctipt")TypeSctipt

如果使用 TypeScript，再浏览一次文档的API部分之后，就可以依靠类型系统的提示来工作啦： react-native-code-push.d.ts

### [](#iOS-添加-BUILD-Type "iOS 添加 BUILD_Type")iOS 添加 BUILD\_Type

在 `Info.plist` 中添加 `BUILD_TYPE`，取值为 `$(CONFIGURATION)`

### [](#react-native-bundle "react-native bundle")react-native bundle

生成 `bundle` 命名：`react-native bundle --platform` 平台 `--entry-file`启动文件 `--bundle-output` 打包js输出文件 `--assets-dest` 资源输出目录 `--dev` 是否调试：

1  

$ react-native bundle --platform android --entry-file index.js --bundle-output ./bundle/android/main.jsbundle --assets-dest ./bundle/android --dev false  

[](#联系作者 "联系作者")联系作者
--------------------

作者微信

知识星球

赞赏作者

[![](/img/blog/AJ_files/17074acbb24c7412.html)](https://user-gold-cdn.xitu.io/2020/2/24/17074acbb24c7412?w=200&h=200&f=jpeg&s=17183)

[![](/img/blog/AJ_files/17074acbb26af8e1.html)](https://user-gold-cdn.xitu.io/2020/2/24/17074acbb26af8e1?w=200&h=200&f=png&s=39093)

[![](/img/blog/AJ_files/17074acbb338c643.html)](https://user-gold-cdn.xitu.io/2020/2/24/17074acbb338c643?w=698&h=700&f=png&s=315492)

[](#参考 "参考")参考
--------------

*   Appcenter CodePush
*   React-Native应用部署-热更新-CodePush最新集成总结
*   CodePush热更新详细接入教程
*   react-native热更新

相关文章

*   [React Native 架构面面观](https://youngjuning.js.org/2020/02/React-Native-%E6%9E%B6%E6%9E%84%E9%9D%A2%E9%9D%A2%E8%A7%82/)
    
*   [React Navigation 5 最佳实践](https://youngjuning.js.org/2020/02/React%20Navigation%205%20%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/)
    

赞赏是对我最大的支持！

打赏

![杨俊宁 微信支付](/img/blog/AJ_files/wechatpay.png)

微信支付

![杨俊宁 支付宝](/img/blog/AJ_files/alipay.png)

支付宝

*   **本文作者：** 杨俊宁
*   **本文链接：** [http://youngjuning.js.org/2020/02/React Native 集成 CodePush 指南/](http://youngjuning.js.org/2020/02/React%20Native%20%E9%9B%86%E6%88%90%20CodePush%20%E6%8C%87%E5%8D%97/ "React Native 集成 CodePush 指南")
*   **版权声明：** 本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处！

欢迎关注我的其它发布渠道

[知识星球](https://youngjuning.js.org/images/xingqiu.png)

[WeChat](https://youngjuning.js.org/images/wechat_channel.jpeg)

[RSS](https://youngjuning.js.org/atom.xml)

[最佳实践](https://youngjuning.js.org/tags/%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/) [架构](https://youngjuning.js.org/tags/%E6%9E%B6%E6%9E%84/)

[利用Metro配置React Native端口](https://youngjuning.js.org/2020/02/%E5%88%A9%E7%94%A8Metro%E9%85%8D%E7%BD%AEReact-Native%E7%AB%AF%E5%8F%A3/ "利用Metro配置React Native端口")

[玩转 React Native 自定义字体](https://youngjuning.js.org/2020/02/%E7%8E%A9%E8%BD%ACReact-Native%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AD%97%E4%BD%93/ "玩转 React Native 自定义字体")

window.addEventListener('tabs:register', () => { let activeClass = CONFIG.comments.activeClass; if (CONFIG.comments.storage) { activeClass = localStorage.getItem('comments\_active') || activeClass; } if (activeClass) { let activeTab = document.querySelector(\`a\[href="#comment-${activeClass}"\]\`); if (activeTab) { activeTab.click(); } } }); if (CONFIG.comments.storage) { window.addEventListener('tabs:click', event => { if (!event.target.matches('.tabs-comment .tab-content .tab-pane')) return; let commentClass = event.target.classList\[1\]; localStorage.setItem('comments\_active', commentClass); }); }

*   文章目录
*   站点概览

1.  [1. 环境](#%E7%8E%AF%E5%A2%83)
2.  [2. CodePush介绍](#CodePush%E4%BB%8B%E7%BB%8D)
    1.  [2.1. 1.安装 App Center CLI](#1-%E5%AE%89%E8%A3%85-App-Center-CLI)
    2.  [2.2. 2.应用管理](#2-%E5%BA%94%E7%94%A8%E7%AE%A1%E7%90%86)
    3.  [2.3. 3.修改versionNam](#3-%E4%BF%AE%E6%94%B9versionNam)
    4.  [2.4. 3.发布应用更新](#3-%E5%8F%91%E5%B8%83%E5%BA%94%E7%94%A8%E6%9B%B4%E6%96%B0)
3.  [3. React Native Client SDK](#React-Native-Client-SDK)
    1.  [3.1. 它是如何工作的？](#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F)
    2.  [3.2. 支持的React Native平台](#%E6%94%AF%E6%8C%81%E7%9A%84React-Native%E5%B9%B3%E5%8F%B0)
    3.  [3.3. 安装 react-native-code-push](#%E5%AE%89%E8%A3%85-react-native-code-push)
    4.  [3.4. iOS设置](#iOS%E8%AE%BE%E7%BD%AE)
    5.  [3.5. Android设置](#Android%E8%AE%BE%E7%BD%AE)
    6.  [3.6. 使用插件](#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6)
    7.  [3.7. 应用商店规则](#%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97%E8%A7%84%E5%88%99)
4.  [4. 多部署测试](#%E5%A4%9A%E9%83%A8%E7%BD%B2%E6%B5%8B%E8%AF%95)
    1.  [4.1. 安卓系统](#%E5%AE%89%E5%8D%93%E7%B3%BB%E7%BB%9F)
    2.  [4.2. iOS](#iOS)
5.  [5. 动态部署分配](#%E5%8A%A8%E6%80%81%E9%83%A8%E7%BD%B2%E5%88%86%E9%85%8D)
6.  [6. 最佳实践](#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)
    1.  [6.1. App.js](#App-js)
    2.  [6.2. CodePushUtils.js](#CodePushUtils-js)
    3.  [6.3. Npm Scripts](#Npm-Scripts)
7.  [7. 扩展](#%E6%89%A9%E5%B1%95)
    1.  [7.1. CodePush 什么情况下不会立即重启应用](#CodePush-%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E4%B8%8D%E4%BC%9A%E7%AB%8B%E5%8D%B3%E9%87%8D%E5%90%AF%E5%BA%94%E7%94%A8)
    2.  [7.2. TypeSctipt](#TypeSctipt)
    3.  [7.3. iOS 添加 BUILD\_Type](#iOS-%E6%B7%BB%E5%8A%A0-BUILD-Type)
    4.  [7.4. react-native bundle](#react-native-bundle)
8.  [8. 联系作者](#%E8%81%94%E7%B3%BB%E4%BD%9C%E8%80%85)
9.  [9. 参考](#%E5%8F%82%E8%80%83)

![杨俊宁](/img/blog/AJ_files/avatar.jpeg)

杨俊宁

前端工程师、终身学习践行者

[59 日志](https://youngjuning.js.org/archives/)

[23 分类](https://youngjuning.js.org/categories/)

[64 标签](https://youngjuning.js.org/tags/)

![Creative Commons](/img/blog/AJ_files/cc-by-nc-sa.svg)

Links

*   陈锋个人博客
*   LLstar的个人博客
*   张煜的个人博客
*   Mirari's Blog

0%

© 2020 杨俊宁的博客 | [_站点地图_](https://youngjuning.js.org/sitemap.xml) | 站点总字数： 282k | 站点阅读时长 ≈ 4:17

由 Hexo 强力驱动 v5.2.0

|

主题 – NexT.Gemini v7.7.1

var pjax = new Pjax({ selectors: \[ 'head title', '#page-configurations', '.content-wrap', '.post-toc-wrap', '#pjax' \], switches: { '.post-toc-wrap': Pjax.switches.innerHTML }, analytics: false, cacheBust: false, scrollTo : !CONFIG.bookmark.enable }); window.addEventListener('pjax:success', () => { document.querySelectorAll('script\[pjax\], script#page-configurations, #pjax script').forEach(element => { var code = element.text || element.textContent || element.innerHTML || ''; var parent = element.parentNode; parent.removeChild(element); var script = document.createElement('script'); if (element.id) { script.id = element.id; } if (element.className) { script.className = element.className; } if (element.type) { script.type = element.type; } if (element.src) { script.src = element.src; // Force synchronous loading of peripheral JS. script.async = false; } if (element.getAttribute('pjax') !== null) { script.setAttribute('pjax', ''); } if (code !== '') { script.appendChild(document.createTextNode(code)); } parent.appendChild(script); }); NexT.boot.refresh(); // Define Motion Sequence & Bootstrap Motion. if (CONFIG.motion.enable) { NexT.motion.integrator .init() .add(NexT.motion.middleWares.subMenu) .add(NexT.motion.middleWares.postList) .bootstrap(); } NexT.utils.updateSidebarPosition(); }); (function(){ var bp = document.createElement('script'); var curProtocol = window.location.protocol.split(':')\[0\]; bp.src = (curProtocol === 'https') ? 'https://zz.bdstatic.com/linksubmit/push.js' : 'http://push.zhanzhang.baidu.com/push.js'; var s = document.getElementsByTagName("script")\[0\]; s.parentNode.insertBefore(bp, s); })(); if (document.querySelectorAll('div.pdf').length) { NexT.utils.getScript('//cdn.jsdelivr.net/npm/pdfobject@2/pdfobject.min.js', () => { document.querySelectorAll('div.pdf').forEach(element => { PDFObject.embed(element.getAttribute('target'), element, { pdfOpenParams: { navpanes : 0, toolbar : 0, statusbar: 0, pagemode : 'thumbs', view : 'FitH' }, PDFJS\_URL: '/lib/pdf/web/viewer.html', height: element.getAttribute('height') || '500px' }); }); }, window.PDFObject); }

var disqus\_config = function() { this.page.url = "http://youngjuning.js.org/2020/02/React%20Native%20%E9%9B%86%E6%88%90%20CodePush%20%E6%8C%87%E5%8D%97/"; this.page.identifier = "2020/02/React Native 集成 CodePush 指南/"; this.page.title = "React Native 集成 CodePush 指南"; }; NexT.utils.loadComments(document.querySelector('#disqus\_thread'), () => { if (window.DISQUS) { DISQUS.reset({ reload: true, config: disqus\_config }); } else { var d = document, s = d.createElement('script'); s.src = 'https://youngjuning.disqus.com/embed.js'; s.setAttribute('data-timestamp', '' + +new Date()); (d.head || d.body).appendChild(s); } });

L2Dwidget.init({"pluginRootPath":"live2dw/","pluginJsPath":"lib/","pluginModelPath":"assets/","model":{"jsonPath":"/live2dw/assets/hijiki.model.json"},"display":{"position":"right","width":150,"height":300},"mobile":{"show":false},"log":false,"tagMode":false});

AddThis Sharing Sidebar

Share to QzoneQzoneShare to Sina WeiboSina WeiboShare to Tencent WeiboTencent WeiboShare to WeChatWeChatShare to 更多...AddThis

, Number of shares

Hide

Show

Close

[

AddThis](https://www.addthis.com/website-tools/overview?utm_source=AddThis%20Tools&utm_medium=image "Powered by AddThis")