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

<div class="pace  pace-inactive"><div class="pace-progress" style="transform: translate3d(100%, 0px, 0px);" data-progress-text="100%" data-progress="99">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div></div>
  
<div class="container use-motion">
    <div class="headband"></div>

    <header class="header" itemscope="" itemtype="http://schema.org/WPHeader">
      <div class="header-inner"><div class="site-brand-container">
  <div class="site-nav-toggle">
    <div class="toggle" aria-label="切换导航栏">
      <span class="toggle-line toggle-line-first"></span>
      <span class="toggle-line toggle-line-middle"></span>
      <span class="toggle-line toggle-line-last"></span>
    </div>
  </div>

  <div class="site-meta">

    <div>
      [
        <span class="logo-line-before"><i></i></span>
        <span class="site-title" style="opacity: 1; top: 0px;">杨俊宁的博客</span>
        <span class="logo-line-after"><i></i></span>
      ](https://youngjuning.js.org/)
    </div>
        # 怕什么真理无穷，进一寸有一寸的欢喜
      
  </div>

  <div class="site-nav-right"></div>
</div>


<nav class="site-nav">
  
  
        - 
    
        [<i class="fa fa-fw fa-home"></i>首页](https://youngjuning.js.org/)
    
      
        - 
    
        [<i class="fa fa-fw fa-tags"></i>标签<span class="badge">64</span>](https://youngjuning.js.org/tags/)
    
      
        - 
    
        [<i class="fa fa-fw fa-th"></i>分类<span class="badge">23</span>](https://youngjuning.js.org/categories/)
    
      
        - 
    
        [<i class="fa fa-fw fa-archive"></i>归档<span class="badge">59</span>](https://youngjuning.js.org/archives/)
    
      
        - 
    
        [<i class="fa fa-fw fa-book"></i>书单](https://youngjuning.js.org/books/)
    
      
        - 
    
        [<i class="fa fa-fw fa-music"></i>歌单](https://youngjuning.js.org/music/)
    
      
        - 
    
        [<i class="fa fa-fw fa-star"></i>收藏夹](https://youngjuning.js.org/collections/)
    
      
      - 
            [<i class="fa fa-search fa-fw"></i>搜索
            ]()
          
  

</nav>
  <div class="site-search">
    <div class="popup search-popup">
    <div class="search-header">
  <span class="search-icon">
    <i class="fa fa-search"></i>
  </span>
  <div class="search-input-container">
    <input autocomplete="off" autocorrect="off" autocapitalize="off" placeholder="搜索..." spellcheck="false" type="search" class="search-input">
  </div>
  <span class="popup-btn-close">
    <i class="fa fa-times-circle"></i>
  </span>
</div>
<div id="search-result"></div>

</div>
<div class="search-pop-overlay"></div>

  </div>
</div>
    </header>

    
  <div class="reading-progress-bar" style="width: 0%;"></div>


    <main class="main">
      <div class="main-inner">
        <div class="content-wrap">
          

          <div class="content">
            

  <div class="posts-expand">
      
  
  
  <article itemscope="" itemtype="http://schema.org/Article" class="post-block" style="opacity: 1; display: block;" lang="zh-CN">
    

    <span itemprop="author" itemscope="" itemtype="http://schema.org/Person" hidden="">
      <meta itemprop="image" content="/images/avatar.jpeg">
      <meta itemprop="name" content="杨俊宁">
      <meta itemprop="description" content="前端工程师、终身学习践行者">
    </span>

    <span itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization" hidden="">
      <meta itemprop="name" content="杨俊宁的博客">
    </span>
      <header class="post-header" style="opacity: 1; display: block; transform: translateY(0px);">
        ## &#10;          React Native 集成 CodePush 指南<span class="exturl post-edit-link" data-url="aHR0cHM6Ly9naXRodWIuY29tL3lvdW5nanVuaW5nL3lvdW5nanVuaW5nL3RyZWUvbWFzdGVyL3NvdXJjZS9fcG9zdHMvMjAyMC8wMi9SZWFjdCBOYXRpdmUg6ZuG5oiQIENvZGVQdXNoIOaMh+WNly5tZA==" title="编辑"><i class="fa fa-pencil"></i></span>&#10;        

        <div class="post-meta">
            <span class="post-meta-item">
              <span class="post-meta-item-icon">
                <i class="fa fa-calendar-o"></i>
              </span>
              <span class="post-meta-item-text">发表于</span>

              <time title="创建时间：2020-02-25 17:08:43" itemprop="dateCreated datePublished" datetime="2020-02-25T17:08:43+08:00">2020-02-25</time>
            </span>
            <span class="post-meta-item">
              <span class="post-meta-item-icon">
                <i class="fa fa-folder-o"></i>
              </span>
              <span class="post-meta-item-text">分类于</span>
                <span itemprop="about" itemscope="" itemtype="http://schema.org/Thing">
                  [
                    <span itemprop="name">Hybrid</span>
                  ](https://youngjuning.js.org/categories/Hybrid/)
                </span>
                  ，
                <span itemprop="about" itemscope="" itemtype="http://schema.org/Thing">
                  [
                    <span itemprop="name">React Native</span>
                  ](https://youngjuning.js.org/categories/Hybrid/React-Native/)
                </span>
            </span>

            

            <span class="post-meta-item" title="本文字数">
              <span class="post-meta-item-icon">
                <i class="fa fa-file-word-o"></i>
              </span>
                <span class="post-meta-item-text">本文字数：</span>
              <span>21k</span>
            </span>
            <span class="post-meta-item" title="阅读时长">
              <span class="post-meta-item-icon">
                <i class="fa fa-clock-o"></i>
              </span>
                <span class="post-meta-item-text">阅读时长 ≈</span>
              <span>19 分钟</span>
            </span>

        </div>
      </header>

    
    
    
    <div class="post-body" itemprop="articleBody" style="opacity: 1; display: block; transform: translateY(0px);">

      
        [![](/img/blog/AJ_files/dLMXty7iYKnVk35.png)](https://i.loli.net/2020/02/25/dLMXty7iYKnVk35.png)
目前现存的热更新方案有腾讯的 Bugly 应用升级](<span class="exturl" data-url="aHR0cHM6Ly9idWdseS5xcS5jb20vdjIvcHJvZHVjdHMvdXBncmFkZSnjgIFSZWFjdA==" title="https://bugly.qq.com/v2/products/upgrade)、React">https://bugly.qq.com/v2/products/upgrade)、React<i class="fa fa-external-link"></i></span> Native 中文网的Pushy](<span class="exturl" data-url="aHR0cHM6Ly91cGRhdGUucmVhY3RuYXRpdmUuY24vaG9tZSnjgIHlvq7ova/nmoRbQ29kZVB1c2hdKGh0dHBzOi8vYnJlLmlzL3IzWTloSnZCKQ==" title="https://update.reactnative.cn/home)、微软的[CodePush](https://bre.is/r3Y9hJvB)">https://update.reactnative.cn/home)、微软的[CodePush](https://bre.is/r3Y9hJvB)<i class="fa fa-external-link"></i></span> 和用来搭建私服的 <span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL2xpc29uZy9jb2RlLXB1c2gtc2VydmVy" title="https://github.com/lisong/code-push-server">code-push-server<i class="fa fa-external-link"></i></span>。
本文分享的是基于微软 AppCenter 的 CodePush 服务实现热更新，这个比较有代表性，也方便各位读者大大实践。当然鉴于国内的网络环境，后期会发布一篇如何基于 `code-push-server` 实现热更新功能。
[]()

## [](#%E7%8E%AF%E5%A2%83 "环境")环境
- Xcode：Version 11.3.1 (11C504)
- react-native：0.61.5
- react-native-code-push: 6.1.0
- appcenter-cli：2.3.3

## [](#CodePush%E4%BB%8B%E7%BB%8D "CodePush介绍")CodePush介绍CodePush
 是一个 App Center 云服务，使 Apache Cordova 和 React Native 
开发人员可以将移动应用程序更新直接部署到其用户的设备上。它充当中央存储库的角色，开发人员可以将某些更新（例如JS，HTML，CSS和图像更改）发
布到该存储库，并且应用程序可以（使用提供的客户端SDK）从中查询更新。这使你可以与最终用户建立更具确定性和直接的参与度模型，同时解决错误和/或添
加一些小的功能，这些功能不需要你重建二进制文件和/或通过任何公共应用商店重新分发二进制文件。默认情况下，在 App Center 上创建的所有 
React Native 应用程序都启用了 CodePush。
> 
> 注意：对于Android设备，CodePush仅在兼容TLS 1.2的设备上运行

### [](#1-%E5%AE%89%E8%A3%85-App-Center-CLI "1.安装 App Center CLI")1.安装 App Center CLI你可以使用 App Center CLI 管理 CodePush 的大多数功能。要安装 CLI，请打开终端窗口或命令提示符并执行以下命令：
<div class="highlight-container"><figure class="highlight shell"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install -g appcenter-cli</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

成功安装 App Center CLI 后，执行`appcenter login`命令为你的 App Center 帐户详细信息配置 CLI：
[![](/img/blog/AJ_files/TwJyWsBOK5trHmj.png)](https://i.loli.net/2020/02/26/TwJyWsBOK5trHmj.png)
### [](#2-%E5%BA%94%E7%94%A8%E7%AE%A1%E7%90%86 "2.应用管理")2.应用管理部署更新之前，必须使用以下命令使用 App Center 创建应用：
<div class="highlight-container"><figure class="highlight shell"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">appcenter apps create -d &lt;appDisplayName&gt; -o &lt;operatingSystem&gt; -p &lt;platform&gt;</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

如果您的应用同时针对 Android 和 iOS，我们强烈建议您使用 CodePush 创建单独的应用。每个平台一个。这样，您可以分别管理和发布更新，从长远来看，这会使事情变得更简单。大多数人只是在应用名称后缀`-Android`和`-iOS`。例如：
<div class="highlight-container"><figure class="highlight shell"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">appcenter apps create -d MyApp-Android -o Android -p React-Native</span><br><span class="line">appcenter apps create -d MyApp-iOS -o iOS -p React-Native</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

> 
> 注意：在 Android 和 iOS 上使用相同的应用程序可能会导致安装异常，因为为 iOS 生成的 CodePush 更新包将具有与为 Android 生成的更新不同的内容。

> 
> 通过 `appcenter apps list` 可以查看所有的应用。

> 
> 在App中心CLI的一个重要的新功能是设置一个应用程序的能力**当前应用程序**使用`appcenter apps set-current &lt;ownerName&gt;/&lt;appName&gt;`。通过将一个应用程序设置为当前应用程序，您无需`-a`在其他CLI命令中使用该标志。例如，`appcenter codepush deployment list -a &lt;ownerName&gt;/&lt;appName&gt;`可以将命令缩短`appcenter codepush deployment list`为设置当前应用程序的时间。您可以使用来检查哪个应用程序被设置为您帐户的当前应用程序`appcenter apps get-current`。设置当前应用程序可以缩短大多数CLI命令的键入时间。

使用 `code-push-cli`，应用程序会自动进行两次部署（`Staging`和 `Production`）。在 App Center 中，你必须使用以下命令自行创建它们：
<div class="highlight-container"><figure class="highlight shell"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">appcenter codepush deployment add -a &lt;ownerName&gt;/&lt;appName&gt; Staging</span><br><span class="line">appcenter codepush deployment add -a &lt;ownerName&gt;/&lt;appName&gt; Production</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

创建部署后，您可以使用来访问两个部署的部署密钥`appcenter codepush deployment list --displayKeys`，您可以开始通过它们各自的SDK（用于<span class="exturl" data-url="aHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL2Rpc3RyaWJ1dGlvbi9jb2RlcHVzaC9jb3Jkb3Zh" title="https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cordova">Cordova<i class="fa fa-external-link"></i></span>和<span class="exturl" data-url="aHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL2Rpc3RyaWJ1dGlvbi9jb2RlcHVzaC9yZWFjdC1uYXRpdmU=" title="https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native">React Native的<i class="fa fa-external-link"></i></span>详细信息）来配置移动客户端。
### [](#3-%E4%BF%AE%E6%94%B9versionNam "3.修改versionNam")3.修改versionNam在 `android/app/build.gradle` 中有个 `android.defaultConfig.versionName` 属性（在 `ios/**/Info.plist` 是 `&lt;key&gt;CFBundleShortVersionString&lt;/key&gt;` 属性 ）；我们需要把应用版本改成 `1.0.0`（默认`1.0`，但是 `codepush` 需要三位数）
### [](#3-%E5%8F%91%E5%B8%83%E5%BA%94%E7%94%A8%E6%9B%B4%E6%96%B0 "3.发布应用更新")3.发布应用更新更改应用程序的代码或资产后，请按照以下说明使用 App Center CLI 将更新发布到App Center。
执行 App Center CLI `release-react` 命令以捆绑应用程序的代码和资产文件，然后将它们作为新版本发布到 App Center 服务器。例如：
<div class="highlight-container"><figure class="highlight shell"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">appcenter codepush release-react -a &lt;ownerName&gt;/&lt;appName&gt; -d Staging -t 1.0.0 -m  --development false --description &lt;description&gt;</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>


- `[-a|--app &lt;ownerName&gt;/&lt;appName&gt;]`:  指定应用
- `[-d|--deployment-name &lt;deploymentName&gt;`]:  此参数指定要将更新发布到的部署。它默认为`Staging`，但是当您准备部署到`Production`或您自己的自定义部署之一时，只需显式设置此参数即可。
- `[-t|--target-binary-version &lt;targetBinaryVersion&gt;]`:  指定要更新的应用的原生版本
- `[-m|--mandatory]`:  是强制更新，默认 `false`
- `[--development]`: 此参数指定是否生成未缩小的开发JS包。如果未指定，则默认为`false`禁用警告并缩小包的位置。
- `[--description &lt;description&gt;`]:  此参数为部署提供了可选的“更改日志”。该值将往返传送给客户端，以便在检测到更新时，您的应用可以选择将其显示给最终用户（例如，通过“新功能”对话框）。该字符串接受诸如`\n`和的控制字符，`\t`因此您可以在描述中包括空格格式，以提高可读性。

> 
> CodePush客户端支持差异更新，因此，即使您在每次更新中释放JS捆绑包和资产，最终用户也只会实际下载他们需要的文件。该服务会自动处理此问题，因此您可以专注于创建出色的应用程序，而我们会担心优化最终用户的下载。

## [](#React-Native-Client-SDK "React Native Client SDK")React Native Client SDK该插件为 CodePush 服务提供了客户端集成，使你可以轻松地向你的 React Native 应用添加动态更新体验。
> 
> 注意：以下配置均基于 react-native 0.60 版本。

### [](#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F "它是如何工作的？")它是如何工作的？React Native 应用程序由 JavaScript 文件和任何相关的图片组成，它们由打包程序 <span class="exturl" data-url="aHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vbWV0cm8v" title="https://facebook.github.io/metro/">metro<i class="fa fa-external-link"></i></span> 捆绑在一起, 并作为特定于平台的二进制文件（`.ipa` 或 `.apk` 文件）的一部分进行分发。发行该应用程序时，更新 JavaScript 代码（例如进行错误修复，添加新功能）或更新图片资源要求你重新编译并重新分发整个二进制文件，其中包括与商店相关的所有时间。
通过使你的 JavaScript 和图片资源与您发布到 CodePush 服务器的更新同步，CodePush 插件可帮助你立即在最终用户面前获得产品改进。
为了确保您的最终用户始终拥有你的应用程序的正常运行版本，CodePush 插件会维护先前更新的副本，因此，如果您不小心推送了包含崩溃的更新，它可以自动回滚。这样，你可以放心，新发现的发行版不会导致用户被阻塞。
> 
> 注意：任何涉及本机代码的产品更改（例如，修改`AppDelegate.m`/`MainActivity.java`、添加 `ttf` 或添加原生插件）都无法通过 CodePush 分发，因此必须通过相应的商店进行更新。

### [](#%E6%94%AF%E6%8C%81%E7%9A%84React-Native%E5%B9%B3%E5%8F%B0 "支持的React Native平台")支持的React Native平台
- iOS（7以上）
- Android（4.1以上）
- Windows（UWP）

### [](#%E5%AE%89%E8%A3%85-react-native-code-push "安装 react-native-code-push")安装 react-native-code-push<div class="highlight-container"><figure class="highlight sh"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
</pre></td><td class="code"><pre><span class="line">yarn add react-native-code-push</span>  
</pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

与其他所有React Native插件一样，iOS 和 Android 的集成体验也有所不同，因此请根据您的应用目标平台执行以下设置步骤。请注意，如果您同时针对两个平台，建议为每个平台创建单独的 CodePush 应用程序。
> 
> 本指南假定您已使用该`react-native init`命令初始化React Native项目。

### [](#iOS%E8%AE%BE%E7%BD%AE "iOS设置")iOS设置获得 CodePush 插件后，必须将其集成到 React Native 应用程序的 Xcode 项目中并正确配置。

1. 运行`cd ios &amp;&amp; pod install &amp;&amp; cd ..`以安装所有必需的CocoaPods依赖项。

1. 打开`AppDelegate.m`文件，并为CodePush标头添加导入语句：
    <div class="highlight-container"><figure class="highlight plain"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    </pre></td><td class="code"><pre><span class="line">#import &lt;CodePush/CodePush.h&gt;</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

1. 查找以下代码行，该代码为生产版本的网桥设置源URL：
    <div class="highlight-container"><figure class="highlight plain"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    </pre></td><td class="code"><pre><span class="line">return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

1. 用以下行替换它：
    <div class="highlight-container"><figure class="highlight plain"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    </pre></td><td class="code"><pre><span class="line">return [CodePush bundleURL];</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>
    
    此更改将你的应用配置为始终加载应用JS捆绑包的最新版本。在首次启动时，这将与使用该应用程序编译的文件相对应。但是，在通过CodePush推送更新后，这将返回最近安装的更新的位置。
    通常，您只想使用 CodePush 来解决发行版本中的 JS 包位置，因此，我们建议使用`DEBUG`预处理器宏在是否使用打包程序服务器和 CodePush 之间进行动态切换。这样可以更轻松地确保您在生产中获得所需的正确行为，同时仍可以在调试时使用Chrome开发工具，实时重新加载等。
    你的`sourceURLForBridge`方法应如下所示：
    <div class="highlight-container"><figure class="highlight plain"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    <span class="line">2</span>  
    <span class="line">3</span>  
    <span class="line">4</span>  
    <span class="line">5</span>  
    <span class="line">6</span>  
    <span class="line">7</span>  
    <span class="line">8</span>  
    </pre></td><td class="code"><pre><span class="line">- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge</span>  
    <span class="line">{</span>  
    <span class="line">  #if DEBUG</span>  
    <span class="line">    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];</span>  
    <span class="line">  #else</span>  
    <span class="line">    return [CodePush bundleURL];</span>  
    <span class="line">  #endif</span>  
    <span class="line">}</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

1. 将部署密钥添加到`Info.plist`：
    为了让 CodePush 运行时知道应该针对哪个部署查询更新，请打开你的应用的 `Info.plist` 文件，并添加一个名为`CodePushDeploymentKey`的新条目，其值是你要配置的应用的 `Staging Deployment Key`。
    你可以通过 `appcenter codepush deployment list -k` 来检索这个值（该 `-k` 标志是必需的，因为默认情况下不会显示键），然后复制相对应的 `Deployment Key` 即可。
    [![](/img/blog/AJ_files/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)](https://cloud.githubusercontent.com/assets/116461/11601733/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)
    为了有效利用与 CodePush 应用程序一起创建的 `Staging` 和 `Production` 部署，请在实际将你的应用程序对 CodePush 的使用移入生产环境之前，进行[多部署测试](#%E5%A4%9A%E9%83%A8%E7%BD%B2%E6%B5%8B%E8%AF%95)的配置。
    <blockquote>
    如果您需要动态使用其他部署，还可以使用[动态部署分配](#%E5%8A%A8%E6%80%81%E9%83%A8%E7%BD%B2%E5%88%86%E9%85%8D)在JS代码中覆盖部署密钥
    </blockquote>


### [](#Android%E8%AE%BE%E7%BD%AE "Android设置")Android设置为了将CodePush集成到您的Android项目中，请执行以下步骤：

1. 在`android/app/build.gradle`文件中，将文件`codepush.gradle`添加为下面的其他构建任务定义：
    <div class="highlight-container"><figure class="highlight groovy"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    <span class="line">2</span>  
    <span class="line">3</span>  
    </pre></td><td class="code"><pre><span class="line">...</span>  
    <span class="line">apply <span class="attr">from:</span> <span class="string">"../../node_modules/react-native-code-push/android/codepush.gradle"</span></span>  
    <span class="line">...</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

1. `MainApplication.java`通过以下更改更新文件以使用 CodePush：
    <div class="highlight-container"><figure class="highlight java"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    <span class="line">2</span>  
    <span class="line">3</span>  
    <span class="line">4</span>  
    <span class="line">5</span>  
    <span class="line">6</span>  
    <span class="line">7</span>  
    <span class="line">8</span>  
    <span class="line">9</span>  
    <span class="line">10</span>  
    <span class="line">11</span>  
    <span class="line">12</span>  
    <span class="line">13</span>  
    </pre></td><td class="code"><pre><span class="line">...</span>  
    <span class="line"><span class="comment">// 1. 导入插件的类</span></span>  
    <span class="line"><span class="keyword">import</span> com.microsoft.codepush.react.CodePush;</span>  
    <span class="line"><span class="keyword">public</span> <span class="class"><span class="keyword">class</span> <span class="title">MainApplication</span> <span class="keyword">extends</span> <span class="title">Application</span> <span class="keyword">implements</span> <span class="title">ReactApplication</span> </span>{</span>  
    <span class="line">    <span class="keyword">private</span> <span class="keyword">final</span> ReactNativeHost mReactNativeHost = <span class="keyword">new</span> ReactNativeHost(<span class="keyword">this</span>) {</span>  
    <span class="line">        ...</span>  
    <span class="line">        <span class="comment">// 2. 重写 getJSBundleFile 方法，每次 app 启动的时候让 CodePush 运行时决定从哪里加载 JS bundle</span></span>  
    <span class="line">        <span class="meta">@Override</span></span>  
    <span class="line">        <span class="function"><span class="keyword">protected</span> String <span class="title">getJSBundleFile</span><span class="params">()</span> </span>{</span>  
    <span class="line">            <span class="keyword">return</span> CodePush.getJSBundleFile();</span>  
    <span class="line">        }</span>  
    <span class="line">    };</span>  
    <span class="line">}</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

1. 将部署密钥添加到`strings.xml`：
    为了让 CodePush 运行时知道它应该查询哪些部署更新，请打开您的应用程序的 `string.xml` 文件，并添加一个名为 `CodePushDeploymentKey` 的新字符串，它的值是应用的 `Staging` 部署。你可以通过 `appcenter deployment list &lt;ownerName&gt;/&lt;appName&gt; -k` 获取该值。
    [![](/img/blog/AJ_files/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)](https://cloud.githubusercontent.com/assets/116461/11601733/13011d5e-9a8a-11e5-9ce2-b100498ffb34.png)
    您`strings.xml`应该看起来像这样：
    <div class="highlight-container"><figure class="highlight xml"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    <span class="line">2</span>  
    <span class="line">3</span>  
    <span class="line">4</span>  
    </pre></td><td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">resources</span>&gt;</span></span>  
    <span class="line">    <span class="tag">&lt;<span class="name">string</span> <span class="attr">name</span>=<span class="string">"app_name"</span>&gt;</span>AppName<span class="tag">&lt;/<span class="name">string</span>&gt;</span></span>  
    <span class="line">    <span class="tag">&lt;<span class="name">string</span> <span class="attr">moduleConfig</span>=<span class="string">"true"</span> <span class="attr">name</span>=<span class="string">"CodePushDeploymentKey"</span>&gt;</span>DeploymentKey<span class="tag">&lt;/<span class="name">string</span>&gt;</span></span>  
    <span class="line"><span class="tag">&lt;/<span class="name">resources</span>&gt;</span></span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>
    
    为了有效利用与CodePush应用程序一起创建的`Staging`和`Production`部署，请在实际将您的应用程序对CodePush的使用移入生产环境之前，请参考下面的[多部署测试](#%E5%A4%9A%E9%83%A8%E7%BD%B2%E6%B5%8B%E8%AF%95)文档。
    <blockquote>
    如果您需要动态使用其他部署，还可以使用[动态部署分配](#%E5%8A%A8%E6%80%81%E9%83%A8%E7%BD%B2%E5%88%86%E9%85%8D)在JS代码中覆盖部署密钥
    </blockquote>


### [](#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6 "使用插件")使用插件下载并链接了 CodePush 插件，并且为你的应用程序询问 CodePush 从何处获取正确的 JS bundle 包后，剩下的唯一一件事就是向你的应用程序添加必要的代码，以控制以下策略：

1. 什么时候（多久）检查一次更新？（例如，应用程序启动，在设置页面中单击按钮或按固定时间间隔定期进行）
1. 当有可用更新时，如何将其呈现给最终用户？

最简单的方式是 `CodePush-ify` 应用程序的根组件。为此，您可以选择一下两个选项之一：

- 选项1：将您的根组件与 codePush 高阶组件包装在一起：
    <div class="highlight-container"><figure class="highlight js"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    <span class="line">2</span>  
    <span class="line">3</span>  
    </pre></td><td class="code"><pre><span class="line"><span class="keyword">import</span> codePush <span class="keyword">from</span> <span class="string">'react-native-code-push'</span></span>  
    <span class="line"><span class="keyword">const</span> App = <span class="function">() =&gt;</span> {}</span>  
    <span class="line">App = codePush(App)</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

- 选项2：使用 <span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL3d5Y2F0cy9qYXZhc2NyaXB0LWRlY29yYXRvcnM=" title="https://github.com/wycats/javascript-decorators">ES7装饰器 <i class="fa fa-external-link"></i></span>语法：
    <blockquote>
    Babel 6.x 尚不支持装饰器。您可能需要通过安装和使用 <span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL3NrZXZ5L2JhYmVsLXByZXNldC1yZWFjdC1uYXRpdmUtc3RhZ2UtMCNiYWJlbC1wcmVzZXQtcmVhY3QtbmF0aXZlLXN0YWdlLTA=" title="https://github.com/skevy/babel-preset-react-native-stage-0#babel-preset-react-native-stage-0">babel-preset-react-native-stage-0<i class="fa fa-external-link"></i></span> 来启用装饰器。
    </blockquote>
    <blockquote>
    Babel 7.x 支持装饰器语法。你可以使用 <span class="exturl" data-url="aHR0cHM6Ly9iYWJlbGpzLmlvL2RvY3MvZW4vbmV4dC9iYWJlbC1wbHVnaW4tcHJvcG9zYWwtZGVjb3JhdG9ycy5odG1s" title="https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators.html">@babel/plugin-proposal-decorators<i class="fa fa-external-link"></i></span> 来启用装饰器。
    </blockquote>
    <div class="highlight-container"><figure class="highlight js"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    <span class="line">2</span>  
    <span class="line">3</span>  
    <span class="line">4</span>  
    <span class="line">5</span>  
    </pre></td><td class="code"><pre><span class="line"><span class="keyword">import</span> codePush <span class="keyword">from</span> <span class="string">"react-native-code-push"</span></span>  
    <span class="line"></span>  
    <span class="line">@codePush</span>  
    <span class="line"><span class="class"><span class="keyword">class</span> <span class="title">MyApp</span> <span class="keyword">extends</span> <span class="title">Component</span> </span>{</span>  
    <span class="line">}</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>
    


默认情况下，CodePush 
将在每次启动应用程序时检查更新。如果有可用更新，它将在下一次重新启动应用程序时（由最终用户或操作系统明确显示）以静默方式下载并安装，从而确保最终
用户获得最少的侵入性体验。如果必须使用可用的更新，则将立即安装该更新，以确保最终用户尽快获得它。
如果您希望应用程序更快地发现更新，则还可以选择每次应用程序从后台恢复时与 CodePush 服务器同步。
<div class="highlight-container"><figure class="highlight js"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> codePushOptions = { <span class="attr">checkFrequency</span>: codePush.CheckFrequency.ON_APP_RESUME }</span><br><span class="line"><span class="keyword">const</span> App = <span class="function">() =&gt;</span> {}</span><br><span class="line"></span><br><span class="line"><span class="keyword">export</span> <span class="keyword">default</span> codePush(codePushOptios)(App)</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

另外，如果您想对检查发生的时间进行细粒度的控制（例如按按钮或定时器间隔），则可以使用 <span class="exturl" data-url="aHR0cHM6Ly9icmUuaXMvZFB1d0hXcmU=" title="https://bre.is/dPuwHWre">CodePush.sync()<i class="fa fa-external-link"></i></span> 随时进行调用，还可以通过 `SyncOptions` 通过 `CheckFrequency.MANUAL` 来关闭 CodePush 的自动检查功能:
<div class="highlight-container"><figure class="highlight jsx"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br><span class="line">26</span><br><span class="line">27</span><br><span class="line">28</span><br><span class="line">29</span><br><span class="line">30</span><br><span class="line">31</span><br><span class="line">32</span><br><span class="line">33</span><br><span class="line">34</span><br><span class="line">35</span><br><span class="line">36</span><br><span class="line">37</span><br><span class="line">38</span><br><span class="line">39</span><br><span class="line">40</span><br><span class="line">41</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;</span><br><span class="line"><span class="keyword">import</span> {View, StyleSheet} <span class="keyword">from</span> <span class="string">'react-native'</span>;</span><br><span class="line"><span class="keyword">import</span> codePush <span class="keyword">from</span> <span class="string">'react-native-code-push'</span>;</span><br><span class="line"><span class="keyword">import</span> AwesomeButton <span class="keyword">from</span> <span class="string">'react-native-really-awesome-button'</span>;</span><br><span class="line"></span><br><span class="line"><span class="keyword">const</span> codePushOptions = { <span class="attr">checkFrequency</span>: codePush.CheckFrequency.MANUAL };</span><br><span class="line"></span><br><span class="line"><span class="keyword">const</span> App = <span class="function">() =&gt;</span> {</span><br><span class="line">  <span class="keyword">const</span> checkForUpdate = <span class="function">() =&gt;</span> {</span><br><span class="line">    codePush.sync({</span><br><span class="line">      updateDialog: <span class="literal">true</span>,</span><br><span class="line">      installMode: codePush.InstallMode.IMMEDIATE,</span><br><span class="line">    });</span><br><span class="line">  };</span><br><span class="line"></span><br><span class="line">  <span class="keyword">const</span> clear = <span class="function">() =&gt;</span> {</span><br><span class="line">    codePush.clearUpdates();</span><br><span class="line">  };</span><br><span class="line"></span><br><span class="line">  <span class="keyword">return</span> (</span><br><span class="line">    &lt;View style={styles.container}&gt;</span><br><span class="line">      &lt;AwesomeButton type=<span class="string">"secondary"</span> onPress={checkForUpdate}&gt;</span><br><span class="line">        检查更新</span><br><span class="line">      &lt;/AwesomeButton&gt;</span><br><span class="line">      &lt;AwesomeButton type=<span class="string">"secondary"</span> onPress={clear}&gt;</span><br><span class="line">        清除更新</span><br><span class="line">      &lt;/AwesomeButton&gt;</span><br><span class="line">    &lt;/View&gt;</span><br><span class="line">  );</span><br><span class="line">};</span><br><span class="line"></span><br><span class="line"><span class="keyword">const</span> styles = StyleSheet.create({</span><br><span class="line">  container: {</span><br><span class="line">    flex: <span class="number">1</span>,</span><br><span class="line">    justifyContent: <span class="string">'center'</span>,</span><br><span class="line">    alignItems: <span class="string">'center'</span>,</span><br><span class="line">  },</span><br><span class="line">});</span><br><span class="line"></span><br><span class="line"><span class="comment">// 注意：这是可选的，完全可以不使用 codePush 这里包装</span></span><br><span class="line"><span class="keyword">export</span> <span class="keyword">default</span> codePush(codePushOptions)(App);</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

如果你想要显示一个更新确认弹窗（一个主动安装）。配置何时安装可用更新（例如强制立即重启）或以任何其他方式自定义更新体验，请参阅 <span class="exturl" data-url="aHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL2Rpc3RyaWJ1dGlvbi9jb2RlcHVzaC9yZWFjdC1uYXRpdmUjYXBpLXJlZmVyZW5jZQ==" title="https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#api-reference">codepush<i class="fa fa-external-link"></i></span> API参考以获取有关一下信息：如何调整此默认行为。
### [](#%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97%E8%A7%84%E5%88%99 "应用商店规则")应用商店规则
- 苹果App允许使用热更新<span class="exturl" data-url="aHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL3Byb2dyYW1zL2lvcy9pbmZvcm1hdGlvbi9pT1NfUHJvZ3JhbV9JbmZvcm1hdGlvbl80XzNfMTUucGRm" title="https://developer.apple.com/programs/ios/information/iOS_Program_Information_4_3_15.pdf">Apple’s developer agreement<i class="fa fa-external-link"></i></span>, 为了不影响用户体验，规定必须使用静默更新。

- Google Play不能使用静默更新，必须弹框告知用户App有更新。

- 中国的android市场必须采用静默更新（如果弹框提示，App会被“请上传最新版本的二进制应用包”原因驳回）。


## [](#%E5%A4%9A%E9%83%A8%E7%BD%B2%E6%B5%8B%E8%AF%95 "多部署测试")多部署测试在入门文档中，我们说明了如何使用特定的部署密钥配置 CodePush 插件。但是，为了有效地测试发型版，至关重要的是，在首次创建 CodePush 应用程序（或你可能已经创建的任何自定义部署）时，利用我们建议进行的 `Staging` 和 `Production` 部署。
> 
> 我们的客户端回滚功能可以帮助您在安装导致崩溃的版本后解除对用户的阻止，服务器端的回滚（例如`appcenter codepush rollback`）使您可以防止其他用户在发现错误的版本后再安装它。但是，如果可以从一开始就防止广泛发布错误更新，那显然更好。

利用`Staging`和`Production`部署，您可以实现类似于以下的工作流程（随意定制！）：

1. `Staging` 使用 `appcenter codepush release-react` 命令将 CodePush 更新发布到您的部署中（如果你需要更多的控制权可以使用 `appcenter codepush release` ）
1. 构建应用程序的 staging`/`beta` 版本，从服务器同步更新，并验证其是否按预期工作
1. 使用以下命令将测试的发行版从 `Staging` 升级到 `Prouction`: `appcenter codepush promote -a &lt;ownerName&gt;/&lt;appName&gt; -s Staging -d Production`
1. 构建应用程序的 `production`/`release`，从服务其同步更新并验证其是否按预期工作

> 
> 如果您想采取更为谨慎的方法，甚至可以选择在“＃3”中执行 **分阶段推出**，这使您可以减轻更新带来的额外潜在风险（例如，＃2中的测试是否接触了所有可能的设备），仅使一定比例的用户可以使用生产更新（例如`code-push promote -a / -s Staging -d Production -r 20%`）。然后，在等待了一段合理的时间以查看是否有崩溃报告或客户反馈后，您可以通过运行将其扩展到整个受众`appcenter codepush patch -a / Production -r 100%`。

### [](#%E5%AE%89%E5%8D%93%E7%B3%BB%E7%BB%9F "安卓系统")安卓系统在<span class="exturl" data-url="aHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL2FuZHJvaWQtZ3JhZGxlLWRzbC9jdXJyZW50L2luZGV4Lmh0bWw=" title="https://google.github.io/android-gradle-dsl/current/index.html">Android Gradle plugin <i class="fa fa-external-link"></i></span>允许您定义自定义配置设置，每个“构建类型”（如调试，发布）。此机制使您可以轻松地使用 CodePush 部署密钥配置调试版本，而发行版本也可以配置为使用 CodePush 生产部署密钥。
提醒一下，您可以通过`appcenter codepush deployment list  -k`从终端运行来检索这些键。
要进行设置，请执行以下步骤：

1. 打开项目的应用程序级别`build.gradle`文件（例如标准 React Native 项目中的 `android/app/build.gradle`）

1. 查找此`android { buildTypes {} }`部分，并`resValue`为您`debug`和`release`构建类型定义条目，分别引用您的密钥`Staging`和`Production`部署密钥。
     <div class="highlight-container"><figure class="highlight groovy"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
    <span class="line">2</span>  
    <span class="line">3</span>  
    <span class="line">4</span>  
    <span class="line">5</span>  
    <span class="line">6</span>  
    <span class="line">7</span>  
    <span class="line">8</span>  
    <span class="line">9</span>  
    <span class="line">10</span>  
    <span class="line">11</span>  
    <span class="line">12</span>  
    <span class="line">13</span>  
    <span class="line">14</span>  
    <span class="line">15</span>  
    <span class="line">16</span>  
    <span class="line">17</span>  
    <span class="line">18</span>  
    <span class="line">19</span>  
    <span class="line">20</span>  
    <span class="line">21</span>  
    <span class="line">22</span>  
    <span class="line">23</span>  
    <span class="line">24</span>  
    <span class="line">25</span>  
    <span class="line">26</span>  
    <span class="line">27</span>  
    </pre></td><td class="code"><pre><span class="line">android {</span>  
    <span class="line">  ...</span>  
    <span class="line">  buildTypes {</span>  
    <span class="line">    debug {</span>  
    <span class="line">      signingConfig signingConfigs.debug</span>  
    <span class="line">      <span class="comment">// Note: CodePush updates should not be tested in Debug mode as they are overriden by the RN packager. However, because CodePush checks for updates in all modes, we must supply a key.</span></span>  
    <span class="line">      resValue <span class="string">"string"</span>, <span class="string">"CodePushDeploymentKey"</span>, <span class="string">'""'</span></span>  
    <span class="line">    }</span>  
    <span class="line">    release {</span>  
    <span class="line">      <span class="comment">// Caution! In production, you need to generate your own keystore file.</span></span>  
    <span class="line">      <span class="comment">// see https://facebook.github.io/react-native/docs/signed-apk-android.</span></span>  
    <span class="line">      signingConfig signingConfigs.release</span>  
    <span class="line">      minifyEnabled enableProguardInReleaseBuilds</span>  
    <span class="line">      proguardFiles getDefaultProguardFile(<span class="string">"proguard-android.txt"</span>), <span class="string">"proguard-rules.pro"</span></span>  
    <span class="line">      resValue <span class="string">"string"</span>, <span class="string">"CodePushDeploymentKey"</span>, <span class="string">'""'</span></span>  
    <span class="line">    }</span>  
    <span class="line">    <span class="comment">// <span class="doctag">NOTE:</span> The naming convention for releaseStaging is significant due to http://t.cn/EAnyAzi</span></span>  
    <span class="line">    releaseStaging.initWith(release)</span>  
    <span class="line">    releaseStaging {</span>  
    <span class="line">        resValue <span class="string">"string"</span>, <span class="string">"CodePushDeploymentKey"</span>, <span class="string">'""'</span></span>  
    <span class="line">        <span class="comment">// Note: It is a good idea to provide matchingFallbacks for the new buildType you create to prevent build issues（http://t.cn/EAex4XH）</span></span>  
    <span class="line">        <span class="comment">// Add the following line if not already there</span></span>  
    <span class="line">        matchingFallbacks = [<span class="string">'release'</span>]</span>  
    <span class="line">    }</span>  
    <span class="line">  }</span>  
    <span class="line">...</span>  
    <span class="line">}</span>  
    </pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>
    
    <blockquote>
    如果要在构建过程中配置部署密钥，请记住从`strings.xml`中删除密钥。
    </blockquote>
    <blockquote>
    `releaseStaging`由于<span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iL2UwODNmOWExMzliM2Y4YzU1NTI1MjhmOGY4MDE4NTI5ZWYzMTkzYjkvcmVhY3QuZ3JhZGxlI0w3OQ==" title="https://github.com/facebook/react-native/blob/e083f9a139b3f8c5552528f8f8018529ef3193b9/react.gradle#L79">此行<i class="fa fa-external-link"></i></span>，的命名约定，这不能改。
    </blockquote>


### [](#iOS "iOS")iOS
> 该部分适用于 Xcode 11

Xcode 允许你为每个**配置** (如 `debug`, `release`) 自定义构建设置，然后可以将其引用为 `Info.plist` 文件中的键值（如 `CodePushDeploymentKey` 设置）。此机制是您可以轻松地进行构建配置以生成二进制文件，这些二进制文件被配置为与不同的 CodePush 部署同步。
要进行设置，请执行以下步骤：

1. 打开您的 Xcode 项目，然后在 `Project navigator` 窗口中选择您的项目

1. 确保已选择 `PROJECT` 节点，而不是 `TARGETS`

1. 选择 `Info` 标签

1. 点击 `+` 的内部按钮`Duplicate "Release" Configuration`  
    [![](/img/blog/AJ_files/rn-ios-8.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-8.png)

1. 将新配置命名为 `Staging`（或您喜欢的任何名称）

1. 选择 `Build Settings` 选项卡

1. 单击工具栏上的 `+` 按钮，创建一个名为  `CONFIGURATION_BUILD_DIR` 的 `User-Defined Setting`, 使用相同的 `per-configuration` 配置。
    [![](/img/blog/AJ_files/Sodu3.png)](https://i.stack.imgur.com/Sodu3.png)
    <blockquote>
    注意：每次创建这个 Xcode 都会崩溃，只能先把值写入之后，在 `project.pbxproj` 中新建。
    </blockquote>

1. 点击工具栏的 `+`  并选择 `Add User-Defined Setting`
    [![](/img/blog/AJ_files/rn-ios-10.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-10.png)

1. 将此新设置命名为`CodePushDeploymentKey`，展开它，然后为 `Staging`配置指定您的 `Staging` 部署密钥，为 `Release` 配置指定您的 `Production` 部署密钥。
    [![](/img/blog/AJ_files/rn-ios-11.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-11.png)
    <blockquote>
    提醒一下，您可以通过`appcenter codepush deployment list -a &lt;ownerName&gt;/&lt;appName&gt; --displayKeys`从终端运行来检索这些键。
    </blockquote>

1. 打开项目的 `Info.plist` 文件，然后将`CodePushDeploymentKey`条目的值更改为`$(CODEPUSH_KEY)`
    [![](/img/blog/AJ_files/rn-ios-12.png)](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/images/rn-ios-12.png)


就是这样了，现在当你运行或构建你的App，你的 `Staging` 包将自动同步你的 `Staging` 部署，你的 `Release` 包将自动同步你的 `Production` 部署。
> 
> 注意：如果你遇到 `ld: library not found for ...` 错误信息，请看一下这个 <span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9yZWFjdC1uYXRpdmUtY29kZS1wdXNoL2lzc3Vlcy80MjY=" title="https://github.com/Microsoft/react-native-code-push/issues/426">issuse<i class="fa fa-external-link"></i></span>

此外，如果你想给他们不同的名称和/或图标，你可以修改`Product Bundle Identifier`，`Product Name`以及`Asset Catalog App Icon Set Name`
## [](#%E5%8A%A8%E6%80%81%E9%83%A8%E7%BD%B2%E5%88%86%E9%85%8D "动态部署分配")动态部署分配上一节说明了如何利用多个`CodePush`部署，以便在更新发布给用户之前，有效地测试您的更新内容。 但是，由于该工作流静态地将部署分配嵌入到实际二进制文件中，因此`临时构建`和`生产构建`只会同步该部署的更新内容。
在许多情况下，这是足够的，因为您只希望您的团队，客户，利益相关者等与您的预生产版本同步，因此，他们只需要知道如何与该版本同步构建。
但是，如果你希望能够进行 `A / B` 测试，或者为某些用户提供应用程序的早期访问权限，那么能够在运行时将特定用户（或受众）动态地置于特定部署中将非常有用。
为了实现此工作流程，你需要做的就是指定调用该`codePush`方法时希望当前用户与之同步的部署密钥。指定后，此密钥将覆盖应用程序的 `Info.plist`（iOS）或 `MainActivity.java`（Android）文件中提供的“默认”密钥。这允许您生成临时或生产构建，也可以根据需要动态“重定向”。
<div class="highlight-container"><figure class="highlight js"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment">// Imagine that "userProfile" is a prop that this component received</span></span><br><span class="line"><span class="comment">// which includes the deployment key that the current user should use.</span></span><br><span class="line">codePush.sync({ <span class="attr">deploymentKey</span>: userProfile.CODEPUSH_KEY });</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

有了这样的变化后，现在只需选择应用程序如何为当前用户配置正确的部署密钥。 在实践中，通常有两种解决方案：

1. 将更改部署的功能开放给用户。例如，您的设置页面可能会有一个切换按钮以启用“测试版”的访问权限。 
    如果您不在乎预生产更新的内容被得知，并且您的某些用户可能希望根据自己的意愿选择使用最新（并且可能有错误）的更新（有点像Chrome渠道）。 
    但是，此解决方案将决策权交给您的用户，这无法帮助您透明地执行 `A / B` 测试。
1. 使用额外的元数据注释用户的服务器端配置文件，标明与其同步的部署。 
    默认情况下，您的应用只能使用二进制嵌入密钥，但在用户通过身份验证后，您的服务器可以选择将其“重定向”到其他部署，这样您就可以根据需要逐步将某些用
    户或组放置在不同的部署中。您甚至可以选择将服务器响应存储在本地存储中，以使其成为新的默认值。 
    如何将密钥与用户的配置文件一起存储完全取决于您的身份验证解决方案（例如 `Auth0`，`Firebase`，自定义`DB` + `REST API`），但这通常非常简单。

> 
> 注意：如果需要，您还可以实施混合解决方案，允许最终用户在不同部署之间切换，同时还允许您的服务器覆盖该决策。 
> 这样，您就拥有了“部署解决方案”的层次结构，可确保您的应用程序能够自行更新，用户可以通过获得最新内容的访问权限来获得最新体验，但您也有能力根据需
> 要对用户进行 `A / B` 测试。

由于我们建议将`Staging`部署用于更新的预发布测试（如上一节中所述），因此使用该部署对用户执行 `A / B` 测试并不一定有意义，与此相反，你应该允许早期访问（如上面选项1中所述）。因此，我们建议充分利用自定义应用程序部署，以便您可以按用户需求对用户进行细分。例如，您可以创建长期甚至是一次性的部署，向其发布应用程序的变体，然后将某些用户放入其中，以查看其参与度。
<div class="highlight-container"><figure class="highlight sh"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">// <span class="comment">#1) Create your new deployment to hold releases of a specific app variant</span></span><br><span class="line">appcenter codepush deployment add -a &lt;ownerName&gt;/&lt;appName&gt; test-variant-one</span><br><span class="line"></span><br><span class="line">// <span class="comment">#2) Target any new releases at that custom deployment</span></span><br><span class="line">appcenter codepush release-react -a &lt;ownerName&gt;/&lt;appName&gt; -d test-variant-one</span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

> 
> 注意：从一个部署“切换”到另一个部署的用户数，被纳入到部署中的“安装度量”中报告的总用户数。例如，如果您的`Production` 部署当前报告的用户总数为1，但您将该用户动态切换为 `Staging` 部署，则 `Production` 部署将报告 0个总用户，而 `Staging` 部署将报告1（刚刚切换的用户）。 即使在使用基于运行时的部署重定向解决方案的情况下，这种行为可以让你准确地跟踪您的版本使用情况。

## [](#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5 "最佳实践")最佳实践
> 源码：<span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL3lvdW5nanVuaW5nL0FwcENlbnRlckNvZGVQdXNoRGVtbw==" title="https://github.com/youngjuning/AppCenterCodePushDemo">https://github.com/youngjuning/AppCenterCodePushDemo<i class="fa fa-external-link"></i></span>

### [](#App-js "App.js")App.js<div class="highlight-container"><figure class="highlight js"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
<span class="line">9</span>  
<span class="line">10</span>  
<span class="line">11</span>  
<span class="line">12</span>  
<span class="line">13</span>  
<span class="line">14</span>  
<span class="line">15</span>  
<span class="line">16</span>  
<span class="line">17</span>  
<span class="line">18</span>  
<span class="line">19</span>  
<span class="line">20</span>  
<span class="line">21</span>  
<span class="line">22</span>  
<span class="line">23</span>  
<span class="line">24</span>  
<span class="line">25</span>  
<span class="line">26</span>  
<span class="line">27</span>  
<span class="line">28</span>  
<span class="line">29</span>  
<span class="line">30</span>  
<span class="line">31</span>  
<span class="line">32</span>  
<span class="line">33</span>  
<span class="line">34</span>  
<span class="line">35</span>  
<span class="line">36</span>  
<span class="line">37</span>  
<span class="line">38</span>  
<span class="line">39</span>  
<span class="line">40</span>  
<span class="line">41</span>  
<span class="line">42</span>  
<span class="line">43</span>  
<span class="line">44</span>  
<span class="line">45</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">import</span> React, {useEffect} <span class="keyword">from</span> <span class="string">'react'</span>;</span>  
<span class="line"><span class="keyword">import</span> {View, StyleSheet} <span class="keyword">from</span> <span class="string">'react-native'</span>;</span>  
<span class="line"><span class="keyword">import</span> codePush <span class="keyword">from</span> <span class="string">'react-native-code-push'</span>;</span>  
<span class="line"><span class="keyword">import</span> AwesomeButton <span class="keyword">from</span> <span class="string">'react-native-really-awesome-button'</span>;</span>  
<span class="line"><span class="keyword">import</span> {codePushSync, checkForUpdate} <span class="keyword">from</span> <span class="string">'./CodePushUtils'</span>;</span>  
<span class="line"><span class="keyword">const</span> App = <span class="function">() =&gt;</span> {</span>  
<span class="line">  <span class="keyword">const</span> getUpdateMetadata = <span class="keyword">async</span> () =&gt; {</span>  
<span class="line">    <span class="keyword">const</span> running = <span class="keyword">await</span> codePush.getUpdateMetadata(</span>  
<span class="line">      codePush.UpdateState.RUNNING,</span>  
<span class="line">    );</span>  
<span class="line">    <span class="keyword">const</span> pending = <span class="keyword">await</span> codePush.getUpdateMetadata(</span>  
<span class="line">      codePush.UpdateState.PENDING,</span>  
<span class="line">    );</span>  
<span class="line">    <span class="built_in">console</span>.log(<span class="string">'[CodePush] running'</span>, running);</span>  
<span class="line">    <span class="built_in">console</span>.log(<span class="string">'[CodePush] pending'</span>, pending);</span>  
<span class="line">  };</span>  
<span class="line"></span>  
<span class="line">  useEffect(<span class="function">() =&gt;</span> {</span>  
<span class="line">    codePushSync();</span>  
<span class="line">  }, []);</span>  
<span class="line"></span>  
<span class="line">  <span class="keyword">return</span> (</span>  
<span class="line">    &lt;View style={styles.container}&gt;</span>  
<span class="line">      &lt;AwesomeButton onPress={checkForUpdate} style={{<span class="attr">marginBottom</span>: <span class="number">10</span>}}&gt;</span>  
<span class="line">        Check For Update!</span>  
<span class="line">      &lt;/AwesomeButton&gt;</span>  
<span class="line">			&lt;AwesomeButton onPress={<span class="function">() =&gt;</span> codePush.clearUpdates()} style={{<span class="attr">marginBottom</span>: <span class="number">10</span>}}&gt;</span>  
<span class="line">        Clear Updates!</span>  
<span class="line">      &lt;/AwesomeButton&gt;</span>  
<span class="line">      &lt;AwesomeButton onPress={getUpdateMetadata}&gt;</span>  
<span class="line">        getUpdateMetadata!</span>  
<span class="line">      &lt;/AwesomeButton&gt;</span>  
<span class="line">    &lt;/View&gt;</span>  
<span class="line">  );</span>  
<span class="line">};</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">const</span> styles = StyleSheet.create({</span>  
<span class="line">  container: {</span>  
<span class="line">    flex: <span class="number">1</span>,</span>  
<span class="line">    justifyContent: <span class="string">'center'</span>,</span>  
<span class="line">    alignItems: <span class="string">'center'</span>,</span>  
<span class="line">  },</span>  
<span class="line">});</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">export</span> <span class="keyword">default</span> App;</span>  
</pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

### [](#CodePushUtils-js "CodePushUtils.js")CodePushUtils.js<div class="highlight-container"><figure class="highlight js"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
<span class="line">9</span>  
<span class="line">10</span>  
<span class="line">11</span>  
<span class="line">12</span>  
<span class="line">13</span>  
<span class="line">14</span>  
<span class="line">15</span>  
<span class="line">16</span>  
<span class="line">17</span>  
<span class="line">18</span>  
<span class="line">19</span>  
<span class="line">20</span>  
<span class="line">21</span>  
<span class="line">22</span>  
<span class="line">23</span>  
<span class="line">24</span>  
<span class="line">25</span>  
<span class="line">26</span>  
<span class="line">27</span>  
<span class="line">28</span>  
<span class="line">29</span>  
<span class="line">30</span>  
<span class="line">31</span>  
<span class="line">32</span>  
<span class="line">33</span>  
<span class="line">34</span>  
<span class="line">35</span>  
<span class="line">36</span>  
<span class="line">37</span>  
<span class="line">38</span>  
<span class="line">39</span>  
<span class="line">40</span>  
<span class="line">41</span>  
<span class="line">42</span>  
<span class="line">43</span>  
<span class="line">44</span>  
<span class="line">45</span>  
<span class="line">46</span>  
<span class="line">47</span>  
<span class="line">48</span>  
<span class="line">49</span>  
<span class="line">50</span>  
<span class="line">51</span>  
<span class="line">52</span>  
<span class="line">53</span>  
<span class="line">54</span>  
<span class="line">55</span>  
<span class="line">56</span>  
<span class="line">57</span>  
<span class="line">58</span>  
<span class="line">59</span>  
<span class="line">60</span>  
<span class="line">61</span>  
<span class="line">62</span>  
<span class="line">63</span>  
<span class="line">64</span>  
<span class="line">65</span>  
<span class="line">66</span>  
<span class="line">67</span>  
<span class="line">68</span>  
<span class="line">69</span>  
<span class="line">70</span>  
<span class="line">71</span>  
<span class="line">72</span>  
<span class="line">73</span>  
<span class="line">74</span>  
<span class="line">75</span>  
<span class="line">76</span>  
<span class="line">77</span>  
<span class="line">78</span>  
<span class="line">79</span>  
<span class="line">80</span>  
<span class="line">81</span>  
<span class="line">82</span>  
<span class="line">83</span>  
<span class="line">84</span>  
<span class="line">85</span>  
<span class="line">86</span>  
<span class="line">87</span>  
<span class="line">88</span>  
<span class="line">89</span>  
<span class="line">90</span>  
<span class="line">91</span>  
<span class="line">92</span>  
<span class="line">93</span>  
<span class="line">94</span>  
<span class="line">95</span>  
<span class="line">96</span>  
<span class="line">97</span>  
<span class="line">98</span>  
<span class="line">99</span>  
<span class="line">100</span>  
<span class="line">101</span>  
<span class="line">102</span>  
<span class="line">103</span>  
<span class="line">104</span>  
<span class="line">105</span>  
<span class="line">106</span>  
<span class="line">107</span>  
<span class="line">108</span>  
<span class="line">109</span>  
<span class="line">110</span>  
<span class="line">111</span>  
<span class="line">112</span>  
<span class="line">113</span>  
<span class="line">114</span>  
<span class="line">115</span>  
<span class="line">116</span>  
<span class="line">117</span>  
<span class="line">118</span>  
<span class="line">119</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">import</span> {AppState, Platform, Alert} <span class="keyword">from</span> <span class="string">'react-native'</span>;</span>  
<span class="line"><span class="keyword">import</span> codePush <span class="keyword">from</span> <span class="string">'react-native-code-push'</span>;</span>  
<span class="line"><span class="keyword">import</span> configReader <span class="keyword">from</span> <span class="string">'react-native-config-reader'</span>;</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">const</span> CodePushDeploymentKey = {</span>  
<span class="line">  ios: {</span>  
<span class="line">    debug: <span class="string">''</span>,</span>  
<span class="line">    staging: <span class="string">'944zuIiRSds-ZZY6AQF82aRl0b1vUL_mMxiie'</span>,</span>  
<span class="line">    release: <span class="string">'yyJfk2vtpLUUlOCg3FnvCcky9o4U1lEWR1UJV'</span>,</span>  
<span class="line">  },</span>  
<span class="line">  android: {</span>  
<span class="line">    debug: <span class="string">''</span>,</span>  
<span class="line">    releasestaging: <span class="string">'tOncLvKACzzSkUaML9tCOUfPZxHVnobfaNIUe'</span>,</span>  
<span class="line">    release: <span class="string">'Gtc4iXTPn24yu6CBrbl_V2GTy21xtdQyfm6x1'</span>,</span>  
<span class="line">  },</span>  
<span class="line">};</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">const</span> getDeploymentKey = <span class="function">() =&gt;</span> {</span>  
<span class="line">  <span class="keyword">const</span> buildType = configReader.BUILD_TYPE.toLowerCase();</span>  
<span class="line">  <span class="keyword">const</span> deploymentKey = CodePushDeploymentKey[Platform.OS][buildType];</span>  
<span class="line">  <span class="built_in">console</span>.log(<span class="string">'[CodePushUtils]'</span>, deploymentKey);</span>  
<span class="line">  <span class="keyword">return</span> deploymentKey;</span>  
<span class="line">};</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">const</span> codePushStatusDidChange = <span class="keyword">async</span> syncStatus =&gt; {</span>  
<span class="line">  <span class="keyword">switch</span> (syncStatus) {</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.CHECKING_FOR_UPDATE:</span>  
<span class="line">      <span class="comment">// 0 - 正在查询CodePush服务器以进行更新。</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] Checking for update.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.AWAITING_USER_ACTION:</span>  
<span class="line">      <span class="comment">// 1 - 有可用的更新，并且向最终用户显示了一个确认对话框。（仅在updateDialog使用时适用）</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] Awaiting user action.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.DOWNLOADING_PACKAGE:</span>  
<span class="line">      <span class="comment">// 2 - 正在从CodePush服务器下载可用更新。</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] Downloading package.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.INSTALLING_UPDATE:</span>  
<span class="line">      <span class="comment">// 3 - 已下载一个可用的更新，并将其安装。</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] Installing update.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.UP_TO_DATE:</span>  
<span class="line">      <span class="comment">// 4 - 应用程序已配置的部署完全最新。</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] App is up to date.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.UPDATE_IGNORED:</span>  
<span class="line">      <span class="comment">// 5 该应用程序具有可选更新，最终用户选择忽略该更新。（仅在updateDialog使用时适用）</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] User cancelled the update.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.UPDATE_INSTALLED:</span>  
<span class="line">      <span class="comment">// 6 - 安装了一个可用的更新，它将根据 SyncOptions 中的 InstallMode指定在 syncStatusChangedCallback 函数返回后立即或在下次应用恢复/重新启动时立即运行。</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] Installed update.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.SYNC_IN_PROGRESS:</span>  
<span class="line">      <span class="comment">// 7 - 正在执行的 sync 操作</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] Sync already in progress.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">    <span class="keyword">case</span> codePush.SyncStatus.UNKNOWN_ERROR:</span>  
<span class="line">      <span class="comment">// -1 - 同步操作遇到未知错误。</span></span>  
<span class="line">      <span class="built_in">console</span>.info(<span class="string">'[CodePush] An unknown error occurred.'</span>);</span>  
<span class="line">      <span class="keyword">break</span>;</span>  
<span class="line">  }</span>  
<span class="line">};</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">const</span> codePushDownloadDidProgress = <span class="function"><span class="params">progress</span> =&gt;</span> {</span>  
<span class="line">  <span class="keyword">const</span> curPercent = (</span>  
<span class="line">    (progress.receivedBytes / progress.totalBytes) *</span>  
<span class="line">    <span class="number">100</span></span>  
<span class="line">  ).toFixed(<span class="number">0</span>);</span>  
<span class="line">  <span class="built_in">console</span>.log(<span class="string">'[CodePushUtils] Downloading Progress'</span>, <span class="string">`<span class="subst">${curPercent}</span>%`</span>);</span>  
<span class="line">  <span class="comment">// console.log(`${progress.receivedBytes} of ${progress.totalBytes} received.`);</span></span>  
<span class="line">};</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">const</span> syncImmediate = <span class="keyword">async</span> () =&gt; {</span>  
<span class="line">  <span class="keyword">const</span> deploymentKey = getDeploymentKey();</span>  
<span class="line">  codePush.sync(</span>  
<span class="line">    {</span>  
<span class="line">      updateDialog: {</span>  
<span class="line">        <span class="comment">// 是否显示更新描述</span></span>  
<span class="line">        appendReleaseDescription: <span class="literal">true</span>,</span>  
<span class="line">        <span class="comment">// 更新描述的前缀。 默认为"Description"</span></span>  
<span class="line">        descriptionPrefix: <span class="string">'\n\n更新内容：\n'</span>,</span>  
<span class="line">        <span class="comment">// 强制更新按钮文字，默认为continue</span></span>  
<span class="line">        mandatoryContinueButtonLabel: <span class="string">'立即更新'</span>,</span>  
<span class="line">        <span class="comment">// 强制更新时的信息. 默认为"An update is available that must be installed."</span></span>  
<span class="line">        mandatoryUpdateMessage: <span class="string">'必须更新后才能使用'</span>,</span>  
<span class="line">        <span class="comment">// 非强制更新时，按钮文字,默认为"ignore"</span></span>  
<span class="line">        optionalIgnoreButtonLabel: <span class="string">'稍后'</span>,</span>  
<span class="line">        <span class="comment">// 非强制更新时，确认按钮文字. 默认为"Install"</span></span>  
<span class="line">        optionalInstallButtonLabel: <span class="string">'后台更新'</span>,</span>  
<span class="line">        <span class="comment">// 非强制更新时，检查到更新的消息文本</span></span>  
<span class="line">        optionalUpdateMessage: <span class="string">'有新版本了，是否更新？'</span>,</span>  
<span class="line">        <span class="comment">// Alert窗口的标题</span></span>  
<span class="line">        title: <span class="string">'更新'</span>,</span>  
<span class="line">      },</span>  
<span class="line">      deploymentKey,</span>  
<span class="line">      installMode: codePush.InstallMode.IMMEDIATE,</span>  
<span class="line">    },</span>  
<span class="line">    codePushStatusDidChange,</span>  
<span class="line">    codePushDownloadDidProgress,</span>  
<span class="line">  );</span>  
<span class="line">};</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">export</span> <span class="keyword">const</span> checkForUpdate = <span class="keyword">async</span> () =&gt; {</span>  
<span class="line">  <span class="keyword">const</span> deploymentKey = getDeploymentKey();</span>  
<span class="line">  <span class="keyword">const</span> update = <span class="keyword">await</span> codePush.checkForUpdate(deploymentKey);</span>  
<span class="line">  <span class="keyword">if</span> (!update) {</span>  
<span class="line">    Alert.alert(<span class="string">'提示'</span>, <span class="string">'已是最新版本'</span>);</span>  
<span class="line">  } <span class="keyword">else</span> {</span>  
<span class="line">    syncImmediate();</span>  
<span class="line">  }</span>  
<span class="line">};</span>  
<span class="line"></span>  
<span class="line"><span class="keyword">export</span> <span class="keyword">const</span> codePushSync = <span class="function">() =&gt;</span> {</span>  
<span class="line">  AppState.addEventListener(<span class="string">'change'</span>, <span class="function"><span class="params">newState</span> =&gt;</span> {</span>  
<span class="line">    newState === <span class="string">'active'</span> &amp;&amp; syncImmediate();</span>  
<span class="line">  });</span>  
<span class="line">};</span>  
</pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

### [](#Npm-Scripts "Npm Scripts")Npm Scripts<div class="highlight-container"><figure class="highlight"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
<span class="line">9</span>  
<span class="line">10</span>  
<span class="line">11</span>  
<span class="line">12</span>  
<span class="line">13</span>  
<span class="line">14</span>  
<span class="line">15</span>  
<span class="line">16</span>  
<span class="line">17</span>  
</pre></td><td class="code"><pre><span class="line">{</span>  
<span class="line">  <span class="attr">"scripts"</span>: {</span>  
<span class="line">    ...</span>  
<span class="line">    "gradle:clean": "cd android &amp;&amp; ./gradlew clean",</span>  
<span class="line">    "an:release": "yarn gradle:clean &amp;&amp; cd android &amp;&amp; ./gradlew app:assembleRelease",</span>  
<span class="line">    "an:installRelease": "yarn gradle:clean &amp;&amp; cd android &amp;&amp; ./gradlew app:installRelease",</span>  
<span class="line">    "an:staging": "yarn gradle:clean &amp;&amp; cd android &amp;&amp; ./gradlew app:assembleReleaseStaging",</span>  
<span class="line">    "an:installStaging": "yarn gradle:clean &amp;&amp; cd android &amp;&amp; ./gradlew app:installReleaseStaging",</span>  
<span class="line">    "displayKeys": "yarn disPlayIosKeys &amp;&amp; yarn disPlayAndroidKeys",</span>  
<span class="line">    "disPlayIosKeys": "appcenter codepush deployment list --app youngjuning/AppCenterCodePushDemo-iOS --displayKeys",</span>  
<span class="line">    "disPlayAndroidKeys": "appcenter codepush deployment list --app youngjuning/AppCenterCodePushDemo-Android --displayKeys",</span>  
<span class="line">    "release-react": "yarn release-react-ios &amp;&amp; yarn release-react-android",</span>  
<span class="line">    "release-react-ios": "appcenter codepush release-react --app youngjuning/AppCenterCodePushDemo-iOS",</span>  
<span class="line">    "release-react-android": "appcenter codepush release-react --app youngjuning/AppCenterCodePushDemo-Android"</span>  
<span class="line">    ...</span>  
<span class="line">  },</span>  
<span class="line">}</span>  
</pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

## [](#%E6%89%A9%E5%B1%95 "扩展")扩展### [](#CodePush-%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E4%B8%8D%E4%BC%9A%E7%AB%8B%E5%8D%B3%E9%87%8D%E5%90%AF%E5%BA%94%E7%94%A8 "CodePush 什么情况下不会立即重启应用")CodePush 什么情况下不会立即重启应用
1. 自上一次`disallowRestart`被调用，没有新的更新。
1. 有更新，但`installMode`为`InstallMode.ON_NEXT_RESTART`的情况下。
1. 有更新，但`installMode`为`InstallMode.ON_NEXT_RESUME`，并且程序一直处于前台，并没有从后台切换到前台的情况下。
1. 自从上次`disallowRestart`被调用，没有再调用`restartApp`。

### [](#TypeSctipt "TypeSctipt")TypeSctipt如果使用 TypeScript，再浏览一次文档的API部分之后，就可以依靠类型系统的提示来工作啦： <span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9yZWFjdC1uYXRpdmUtY29kZS1wdXNoL2Jsb2IvbWFzdGVyL3R5cGluZ3MvcmVhY3QtbmF0aXZlLWNvZGUtcHVzaC5kLnRz" title="https://github.com/microsoft/react-native-code-push/blob/master/typings/react-native-code-push.d.ts">react-native-code-push.d.ts<i class="fa fa-external-link"></i></span>
### [](#iOS-%E6%B7%BB%E5%8A%A0-BUILD-Type "iOS 添加 BUILD_Type")iOS 添加 BUILD_Type在 `Info.plist` 中添加 `BUILD_TYPE`，取值为 `$(CONFIGURATION)`
### [](#react-native-bundle "react-native bundle")react-native bundle生成  `bundle` 命名：`react-native bundle --platform` 平台 `--entry-file`启动文件 `--bundle-output` 打包js输出文件 `--assets-dest`  资源输出目录 `--dev`  是否调试：
<div class="highlight-container"><figure class="highlight sh"><div class="table-container"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">$ react-native bundle --platform android --entry-file index.js --bundle-output ./bundle/android/main.jsbundle --assets-dest ./bundle/android --dev <span class="literal">false</span></span><br></pre></td></tr></tbody></table></div></figure><div class="copy-btn"><i class="fa fa-clipboard"></i></div></div>

## [](#%E8%81%94%E7%B3%BB%E4%BD%9C%E8%80%85 "联系作者")联系作者<div class="table-container"><table>
<thead>
<tr>
<th align="center">作者微信</th>
<th align="center">知识星球</th>
<th align="center">赞赏作者</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[![](/img/blog/AJ_files/17074acbb24c7412.html)](https://user-gold-cdn.xitu.io/2020/2/24/17074acbb24c7412?w=200&h=200&f=jpeg&s=17183)</td>
<td align="center">[![](/img/blog/AJ_files/17074acbb26af8e1.html)](https://user-gold-cdn.xitu.io/2020/2/24/17074acbb26af8e1?w=200&h=200&f=png&s=39093)</td>
<td align="center">[![](/img/blog/AJ_files/17074acbb338c643.html)](https://user-gold-cdn.xitu.io/2020/2/24/17074acbb338c643?w=698&h=700&f=png&s=315492)</td>
</tr>
</tbody></table></div>
## [](#%E5%8F%82%E8%80%83 "参考")参考
- <span class="exturl" data-url="aHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL2Rpc3RyaWJ1dGlvbi9jb2RlcHVzaC8=" title="https://docs.microsoft.com/en-us/appcenter/distribution/codepush/">Appcenter CodePush<i class="fa fa-external-link"></i></span>
- <span class="exturl" data-url="aHR0cHM6Ly9icmUuaXMvRHhXeUQ2d1A=" title="https://bre.is/DxWyD6wP">React-Native应用部署-热更新-CodePush最新集成总结<i class="fa fa-external-link"></i></span>
- <span class="exturl" data-url="aHR0cHM6Ly93d3cuamlhbnNodS5jb20vcC82YTVlMDBkMjI3MjM=" title="https://www.jianshu.com/p/6a5e00d22723">CodePush热更新详细接入教程<i class="fa fa-external-link"></i></span>
- <span class="exturl" data-url="aHR0cDovL3RlY2hibG9nLnNpc2h1eHVlZnUuY29tL2F0cmljbGUuaHRtbD81YmVhYTdlNTlmNTQ1NDAwNzAzOWUwMWM=" title="http://techblog.sishuxuefu.com/atricle.html?5beaa7e59f5454007039e01c">react-native热更新<i class="fa fa-external-link"></i></span>


    </div>

    
    
    
      
  <div class="popular-posts-header">相关文章</div>
  
    - 
          <div class="popular-posts-title">[React Native 架构面面观](https://youngjuning.js.org/2020/02/React-Native-%E6%9E%B6%E6%9E%84%E9%9D%A2%E9%9D%A2%E8%A7%82/)</div>
        
    - 
          <div class="popular-posts-title">[React Navigation 5 最佳实践](https://youngjuning.js.org/2020/02/React%20Navigation%205%20%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/)</div>
        
  

        <div class="reward-container">
  <div>赞赏是对我最大的支持！</div>
  <button onclick="var qr = document.getElementById('qr'); qr.style.display = (qr.style.display === 'none') ? 'block' : 'none';">
    打赏
  </button>
  <div id="qr" style="display: none;">
      
      <div style="display: inline-block;">
        ![杨俊宁 微信支付](/img/blog/AJ_files/wechatpay.png)
        微信支付
      </div>
      
      <div style="display: inline-block;">
        ![杨俊宁 支付宝](/img/blog/AJ_files/alipay.png)
        支付宝
      </div>

  </div>
</div>

        

<div>
<ul class="post-copyright">
  <li class="post-copyright-author">
    <strong>本文作者： </strong>杨俊宁
  </li>
  <li class="post-copyright-link">
    <strong>本文链接：</strong>
    <a href="http://youngjuning.js.org/2020/02/React%20Native%20%E9%9B%86%E6%88%90%20CodePush%20%E6%8C%87%E5%8D%97/" title="React Native 集成 CodePush 指南" data-pjax-state="">http://youngjuning.js.org/2020/02/React Native 集成 CodePush 指南/</a>
  </li>
  <li class="post-copyright-license">
    <strong>版权声明： </strong>本博客所有文章除特别声明外，均采用 <span class="exturl" data-url="aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC9kZWVkLnpo"><i class="fa fa-fw fa-creative-commons"></i>BY-NC-SA</span> 许可协议。转载请注明出处！
  </li>
</ul>
</div>

        

  <div class="followme">
    欢迎关注我的其它发布渠道

    <div class="social-list">

            <div class="social-item">
              [
                <span class="icon">
                  <i class="fa fa-circle-o-notch"></i>
                </span>
&#10;                <span class="label">知识星球</span>
              ](https://youngjuning.js.org/images/xingqiu.png)
            </div>

            <div class="social-item">
              [
                <span class="icon">
                  <i class="fa fa-wechat"></i>
                </span>
&#10;                <span class="label">WeChat</span>
              ](https://youngjuning.js.org/images/wechat_channel.jpeg)
            </div>

            <div class="social-item">
              [
                <span class="icon">
                  <i class="fa fa-rss"></i>
                </span>
&#10;                <span class="label">RSS</span>
              ](https://youngjuning.js.org/atom.xml)
            </div>
    </div>
  </div>


      <footer class="post-footer">
          
          <div class="post-tags">
              [<i class="fa fa-tag"></i> 最佳实践](https://youngjuning.js.org/tags/%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/)
              [<i class="fa fa-tag"></i> 架构](https://youngjuning.js.org/tags/%E6%9E%B6%E6%9E%84/)
          </div>

        


        
    <div class="post-nav">
      <div class="post-nav-item">
    [
      <i class="fa fa-chevron-left"></i> 利用Metro配置React Native端口
    ](https://youngjuning.js.org/2020/02/%E5%88%A9%E7%94%A8Metro%E9%85%8D%E7%BD%AEReact-Native%E7%AB%AF%E5%8F%A3/ "利用Metro配置React Native端口")</div>
      <div class="post-nav-item">
    [
      玩转 React Native 自定义字体 <i class="fa fa-chevron-right"></i>
    ](https://youngjuning.js.org/2020/02/%E7%8E%A9%E8%BD%ACReact-Native%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AD%97%E4%BD%93/ "玩转 React Native 自定义字体")</div>
    </div>
      </footer>
    
  </article>
  
  
  

  </div>


          </div>
          
    
  <div class="comments" style="opacity: 1; display: block;">
    <div id="disqus_thread"><iframe id="dsq-app4389" name="dsq-app4389" allowtransparency="true" scrolling="no" tabindex="0" title="Disqus" style="width: 1px !important; min-width: 100% !important; border-top-color: initial !important; border-top-style: none !important; border-top-width: medium !important; border-right-color: initial !important; border-right-style: none !important; border-right-width: medium !important; border-bottom-color: initial !important; border-bottom-style: none !important; border-bottom-width: medium !important; border-left-color: initial !important; border-left-style: none !important; border-left-width: medium !important; overflow-x: hidden !important; overflow-y: hidden !important; height: 534px !important;" src="/img/blog/AJ_files/a.html" horizontalscrolling="no" verticalscrolling="no" width="100%" frameborder="0"></iframe></div>
  </div>
  



        </div>
          
  
  <div class="toggle sidebar-toggle">
    <span class="toggle-line toggle-line-first"></span>
    <span class="toggle-line toggle-line-middle"></span>
    <span class="toggle-line toggle-line-last"></span>
  </div>
  <aside class="sidebar" style="margin-top: 444px;">
    <div class="sidebar-inner affix-top" style="opacity: 1; transform: initial;">

      
        - 
              文章目录
            
        - 
              站点概览
            
      

      
      <div class="post-toc-wrap sidebar-panel sidebar-panel-active" style="max-height: 747px; opacity: 1;">
          <div class="post-toc motion-element">1. [<span class="nav-number">1.</span> <span class="nav-text">环境</span>](#%E7%8E%AF%E5%A2%83)1. [<span class="nav-number">2.</span> <span class="nav-text">CodePush介绍</span>](#CodePush%E4%BB%8B%E7%BB%8D)    1. [<span class="nav-number">2.1.</span> <span class="nav-text">1.安装 App Center CLI</span>](#1-%E5%AE%89%E8%A3%85-App-Center-CLI)    1. [<span class="nav-number">2.2.</span> <span class="nav-text">2.应用管理</span>](#2-%E5%BA%94%E7%94%A8%E7%AE%A1%E7%90%86)    1. [<span class="nav-number">2.3.</span> <span class="nav-text">3.修改versionNam</span>](#3-%E4%BF%AE%E6%94%B9versionNam)    1. [<span class="nav-number">2.4.</span> <span class="nav-text">3.发布应用更新</span>](#3-%E5%8F%91%E5%B8%83%E5%BA%94%E7%94%A8%E6%9B%B4%E6%96%B0)1. [<span class="nav-number">3.</span> <span class="nav-text">React Native Client SDK</span>](#React-Native-Client-SDK)    1. [<span class="nav-number">3.1.</span> <span class="nav-text">它是如何工作的？</span>](#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F)    1. [<span class="nav-number">3.2.</span> <span class="nav-text">支持的React Native平台</span>](#%E6%94%AF%E6%8C%81%E7%9A%84React-Native%E5%B9%B3%E5%8F%B0)    1. [<span class="nav-number">3.3.</span> <span class="nav-text">安装 react-native-code-push</span>](#%E5%AE%89%E8%A3%85-react-native-code-push)    1. [<span class="nav-number">3.4.</span> <span class="nav-text">iOS设置</span>](#iOS%E8%AE%BE%E7%BD%AE)    1. [<span class="nav-number">3.5.</span> <span class="nav-text">Android设置</span>](#Android%E8%AE%BE%E7%BD%AE)    1. [<span class="nav-number">3.6.</span> <span class="nav-text">使用插件</span>](#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6)    1. [<span class="nav-number">3.7.</span> <span class="nav-text">应用商店规则</span>](#%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97%E8%A7%84%E5%88%99)1. [<span class="nav-number">4.</span> <span class="nav-text">多部署测试</span>](#%E5%A4%9A%E9%83%A8%E7%BD%B2%E6%B5%8B%E8%AF%95)    1. [<span class="nav-number">4.1.</span> <span class="nav-text">安卓系统</span>](#%E5%AE%89%E5%8D%93%E7%B3%BB%E7%BB%9F)    1. [<span class="nav-number">4.2.</span> <span class="nav-text">iOS</span>](#iOS)1. [<span class="nav-number">5.</span> <span class="nav-text">动态部署分配</span>](#%E5%8A%A8%E6%80%81%E9%83%A8%E7%BD%B2%E5%88%86%E9%85%8D)1. [<span class="nav-number">6.</span> <span class="nav-text">最佳实践</span>](#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)    1. [<span class="nav-number">6.1.</span> <span class="nav-text">App.js</span>](#App-js)    1. [<span class="nav-number">6.2.</span> <span class="nav-text">CodePushUtils.js</span>](#CodePushUtils-js)    1. [<span class="nav-number">6.3.</span> <span class="nav-text">Npm Scripts</span>](#Npm-Scripts)1. [<span class="nav-number">7.</span> <span class="nav-text">扩展</span>](#%E6%89%A9%E5%B1%95)    1. [<span class="nav-number">7.1.</span> <span class="nav-text">CodePush 什么情况下不会立即重启应用</span>](#CodePush-%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E4%B8%8D%E4%BC%9A%E7%AB%8B%E5%8D%B3%E9%87%8D%E5%90%AF%E5%BA%94%E7%94%A8)    1. [<span class="nav-number">7.2.</span> <span class="nav-text">TypeSctipt</span>](#TypeSctipt)    1. [<span class="nav-number">7.3.</span> <span class="nav-text">iOS 添加 BUILD_Type</span>](#iOS-%E6%B7%BB%E5%8A%A0-BUILD-Type)    1. [<span class="nav-number">7.4.</span> <span class="nav-text">react-native bundle</span>](#react-native-bundle)1. [<span class="nav-number">8.</span> <span class="nav-text">联系作者</span>](#%E8%81%94%E7%B3%BB%E4%BD%9C%E8%80%85)1. [<span class="nav-number">9.</span> <span class="nav-text">参考</span>](#%E5%8F%82%E8%80%83)</div>
      </div>
      

      <div class="site-overview-wrap sidebar-panel" style="opacity: 0; max-height: 747px;">
        <div class="site-author motion-element" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
    ![杨俊宁](/img/blog/AJ_files/avatar.jpeg)
  杨俊宁
  <div class="site-description" itemprop="description">前端工程师、终身学习践行者</div>
</div>
<div class="site-state-wrap motion-element">
  <nav class="site-state">
      <div class="site-state-item site-state-posts">
          <a href="https://youngjuning.js.org/archives/" data-pjax-state="">
        
          <span class="site-state-item-count">59</span>
          <span class="site-state-item-name">日志</span>
        </a>
      </div>
      <div class="site-state-item site-state-categories">
            <a href="https://youngjuning.js.org/categories/" data-pjax-state="">
          
        <span class="site-state-item-count">23</span>
        <span class="site-state-item-name">分类</span></a>
      </div>
      <div class="site-state-item site-state-tags">
            <a href="https://youngjuning.js.org/tags/" data-pjax-state="">
          
        <span class="site-state-item-count">64</span>
        <span class="site-state-item-name">标签</span></a>
      </div>
  </nav>
</div>
  <div class="links-of-author motion-element">
      <span class="links-of-author-item">
        <span class="exturl" data-url="aHR0cHM6Ly9naXRodWIuY29tL3lvdW5nanVuaW5n" title="GitHub → https://github.com/youngjuning"><i class="fa fa-fw fa-github"></i></span>
      </span>
      <span class="links-of-author-item">
        <span class="exturl" data-url="bWFpbHRvOnlvdW5nanVuaW5nQGFsaXl1bi5jb20=" title="E-Mail → mailto:youngjuning@aliyun.com"><i class="fa fa-fw fa-envelope"></i></span>
      </span>
      <span class="links-of-author-item">
        <span class="exturl" data-url="aHR0cHM6Ly93ZWliby5jb20veWFuZ2p1bm5pbmdtYW8=" title="Weibo → https://weibo.com/yangjunningmao"><i class="fa fa-fw fa-weibo"></i></span>
      </span>
      <span class="links-of-author-item">
        <span class="exturl" data-url="aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy84NTY0NDAzL3lvdW5nanVuaW5n" title="StackOverflow → https://stackoverflow.com/users/8564403/youngjuning"><i class="fa fa-fw fa-stack-overflow"></i></span>
      </span>
  </div>
  <div class="cc-license motion-element" itemprop="license">
    <span class="exturl cc-opacity" data-url="aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC9kZWVkLnpo">![Creative Commons](/img/blog/AJ_files/cc-by-nc-sa.svg)</span>
  </div>


  <div class="links-of-blogroll motion-element">
    <div class="links-of-blogroll-title">
      <i class="fa fa-fw fa-link"></i>
      Links
    </div>
    
        - 
              <span class="exturl" data-url="aHR0cHM6Ly9jaGVueXVodS5qcy5vcmcv" title="https://chenyuhu.js.org/">陈锋个人博客</span>
            
        - 
              <span class="exturl" data-url="aHR0cHM6Ly9sbHN0YXIuZ2l0aHViLmlvLw==" title="https://llstar.github.io/">LLstar的个人博客</span>
            
        - 
              <span class="exturl" data-url="aHR0cHM6Ly93d3cuY25ibG9ncy5jb20vR3Jld2VyLw==" title="https://www.cnblogs.com/Grewer/">张煜的个人博客</span>
            
        - 
              <span class="exturl" data-url="aHR0cHM6Ly9taXJhcmkuY2Mv" title="https://mirari.cc/">Mirari's Blog</span>
            
    
  </div>

      </div>
        <div class="back-to-top motion-element">
          <i class="fa fa-arrow-up"></i>
          <span>0%</span>
        </div>

    </div>
  </aside>
  <div id="sidebar-dimmer"></div>


      </div>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        

<div class="copyright">
  
  © 
  <span itemprop="copyrightYear">2020</span>
  <span class="with-love">
    <i class="fa fa-heart"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">杨俊宁的博客</span>
  <span class="post-meta-divider">|</span>
  <a target="_blank" href="https://youngjuning.js.org/sitemap.xml" style="border-bottom-color: initial; border-bottom-style: initial; border-bottom-width: 0px;" data-pjax-state=""><span style="color: rgb(153, 153, 153);"><i class="fa fa-sitemap"> 站点地图</i></span></a>
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-area-chart"></i>
    </span>
      <span class="post-meta-item-text">站点总字数：</span>
    <span title="站点总字数">282k</span>
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-coffee"></i>
    </span>
      <span class="post-meta-item-text">站点阅读时长 ≈</span>
    <span title="站点阅读时长">4:17</span>
</div>
  <div class="powered-by">由 <span class="exturl theme-link" data-url="aHR0cHM6Ly9oZXhvLmlv">Hexo</span> 强力驱动 v5.2.0
  </div>
  <span class="post-meta-divider">|</span>
  <div class="theme-info">主题 – <span class="exturl theme-link" data-url="aHR0cHM6Ly90aGVtZS1uZXh0Lm9yZw==">NexT.Gemini</span> v7.7.1
  </div>
  <div class="addthis_inline_share_toolbox">
    
  </div>

        








      </div>
    </footer>
  </div>

  
  
  
  
  
  
  











  




  
  




  















    <div id="pjax">
  

  



    </div>


<div id="live2d-widget" class="live2d-widget-container" style="position: fixed; right: 0px; bottom: -20px; width: 150px; height: 300px; z-index: 99999; opacity: 1; pointer-events: none;"><canvas id="live2dcanvas" width="300" height="600" style="position: absolute; left: 0px; top: 0px; width: 150px; height: 300px;"></canvas></div>
<div style="visibility: hidden; height: 1px; width: 1px; position: absolute; top: -9999px; z-index: 100000;" id="_atssh"><iframe id="_atssh613" title="AddThis utility frame" style="height: 1px; width: 1px; position: absolute; top: 0px; z-index: 100000; border-top-color: initial; border-top-style: none; border-top-width: 0px; border-right-color: initial; border-right-style: none; border-right-width: 0px; border-bottom-color: initial; border-bottom-style: none; border-bottom-width: 0px; border-left-color: initial; border-left-style: none; border-left-width: 0px; left: 0px;" src="/img/blog/AJ_files/sh.html"></iframe></div><div class="addthis-smartlayers addthis-smartlayers-desktop" aria-labelledby="at4-share-label" role="region"><div id="at4-share-label">AddThis Sharing Sidebar</div><div id="at4-share" class="at4-share addthis_32x32_style atss atss-right addthis-animated slideInRight">[<span class="at4-visually-hidden">Share to Qzone</span><span class="at-icon-wrapper" style="background-color: rgb(9, 133, 221);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-qzone-1" class="at-icon at-icon-qzone" style="fill: rgb(255, 255, 255);"><title id="at-svg-qzone-1">Qzone</title><g><path d="M24.307 19.276c.876-.158.442-.484.084-.442-.65.067-1.575.075-2.593.05l.118.693a25.58 25.58 0 0 0 2.392-.3zm2.686-6.814a.206.206 0 0 0-.175-.142l-7.34-1.067-3.285-6.647c-.075-.14-.31-.14-.384 0l-3.286 6.647-7.34 1.067a.208.208 0 0 0-.174.142.214.214 0 0 0 .058.217l5.312 5.178-1.25 7.305a.205.205 0 0 0 .083.21c.066.05.15.057.225.015l6.57-3.444 6.565 3.453.1.025.125-.042c.067-.05.1-.125.083-.208l-.958-5.596c-1.06.084-2.118.124-2.977.124-3.01 0-5.262-.142-5.296-.142a.642.642 0 0 1-.576-.458.633.633 0 0 1 .233-.692l6.055-4.404c-3.894-.308-7.163-.25-7.196-.25-.526.025-1-.142.025-.56.176-.066 4.254-.924 8.974-.29.26.033.468.224.535.475a.647.647 0 0 1-.244.674l-5.92 4.303c1.084.226 3.91.468 6.262.526l-.176-1.025 5.31-5.18a.208.208 0 0 0 .06-.216z" fill-rule="evenodd"></path></g></svg></span>]()[<span class="at4-visually-hidden">Share to Sina Weibo</span><span class="at-icon-wrapper" style="background-color: rgb(230, 22, 45);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-sinaweibo-2" class="at-icon at-icon-sinaweibo" style="fill: rgb(255, 255, 255);"><title id="at-svg-sinaweibo-2">Sina Weibo</title><g><g fill-rule="evenodd"></g><path d="M14.24 23.808c-3.64.367-6.785-1.307-7.022-3.734-.236-2.43 2.525-4.693 6.164-5.06 3.642-.367 6.786 1.307 7.02 3.734.24 2.43-2.522 4.696-6.16 5.06m7.28-8.063c-.31-.096-.523-.157-.362-.57.352-.898.39-1.672.006-2.227-.713-1.036-2.667-.98-4.907-.028 0 0-.705.312-.523-.253.343-1.125.29-2.065-.243-2.61-1.214-1.238-4.446.045-7.216 2.86C6.205 15.023 5 17.26 5 19.192c0 3.694 4.664 5.942 9.226 5.942 5.98 0 9.96-3.53 9.96-6.333.003-1.695-1.402-2.657-2.665-3.055M25.494 8.983a5.76 5.76 0 0 0-5.542-1.823.855.855 0 0 0-.646 1.015.84.84 0 0 0 1 .657c1.398-.303 2.912.138 3.938 1.295a4.254 4.254 0 0 1 .865 4.113c-.144.45.1.93.542 1.076a.84.84 0 0 0 1.06-.55v-.002a5.973 5.973 0 0 0-1.218-5.78"></path><path d="M23.276 11.018a2.8 2.8 0 0 0-2.698-.885.74.74 0 0 0-.56.876c.086.396.472.65.86.563.467-.102.977.046 1.32.432.343.388.437.915.29 1.378a.742.742 0 0 0 .466.928.724.724 0 0 0 .913-.474c.3-.947.113-2.026-.59-2.818M14.44 19.41c-.126.223-.408.328-.627.235-.218-.09-.285-.34-.16-.555.127-.215.397-.32.612-.234.22.08.298.33.176.555m-1.16 1.512c-.353.57-1.11.82-1.676.558-.56-.26-.726-.922-.374-1.48.35-.555 1.078-.802 1.642-.56.57.25.753.905.407 1.482m1.322-4.04c-1.733-.46-3.69.42-4.443 1.97-.77 1.583-.025 3.34 1.723 3.914 1.815.595 3.95-.318 4.695-2.023.734-1.67-.182-3.39-1.976-3.86"></path></g></svg></span>]()[<span class="at4-visually-hidden">Share to Tencent Weibo</span><span class="at-icon-wrapper" style="background-color: rgb(49, 158, 221);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-tencentweibo-3" class="at-icon at-icon-tencentweibo" style="fill: rgb(255, 255, 255);"><title id="at-svg-tencentweibo-3">Tencent Weibo</title><g><path d="M22.973 16.124c.374-.208.628-.62.628-1.093 0-.682-.53-1.235-1.183-1.235s-1.183.553-1.183 1.236c0 .648.475 1.18 1.08 1.233.967 2.35 2.886 4.18 5.26 4.948a.326.326 0 0 0 .41-.225.346.346 0 0 0-.215-.43c-2.147-.693-3.89-2.327-4.797-4.43zm-13.718-2.68a2.59 2.59 0 0 1-.137-.834c0-1.378 1.07-2.494 2.387-2.494 1.32 0 2.388 1.116 2.388 2.494 0 1.377-1.07 2.494-2.388 2.494a2.32 2.32 0 0 1-1.562-.608c-2.372 2.606-3.75 6.09-3.75 9.814 0 .343.012.683.035 1.022a.615.615 0 0 1-.553.666.606.606 0 0 1-.638-.578A16.412 16.412 0 0 1 5 24.31c0-4.142 1.567-8.01 4.255-10.865zm.512 5.54a6.078 6.078 0 0 0 1.68.236c3.493 0 6.325-2.96 6.325-6.61 0-3.65-2.832-6.61-6.326-6.61C7.952 6 5.12 8.96 5.12 12.61c0 .965.198 1.9.576 2.76.138.313.492.45.79.306.3-.144.432-.515.294-.827a5.543 5.543 0 0 1-.467-2.24c0-2.962 2.298-5.363 5.133-5.363 2.834 0 5.132 2.4 5.132 5.363 0 2.962-2.298 5.363-5.132 5.363-.466 0-.923-.065-1.363-.19a.594.594 0 0 0-.733.435c-.088.332.1.675.417.766zm15.334-1.39c.582-.68.908-1.56.908-2.49 0-2.066-1.603-3.74-3.58-3.74-1.978 0-3.582 1.674-3.582 3.74 0 2.066 1.604 3.742 3.58 3.742.166 0 .3-.14.3-.312a.305.305 0 0 0-.3-.312c-1.647 0-2.983-1.396-2.983-3.118s1.336-3.118 2.984-3.118c1.65 0 2.985 1.396 2.985 3.118 0 .776-.272 1.507-.757 2.074-.11.13-.098.326.025.44a.29.29 0 0 0 .42-.025z" fill-rule="evenodd"></path></g></svg></span>]()[<span class="at4-visually-hidden">Share to WeChat</span><span class="at-icon-wrapper" style="background-color: rgb(45, 193, 0);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-wechat-4" class="at-icon at-icon-wechat" style="fill: rgb(255, 255, 255);"><title id="at-svg-wechat-4">WeChat</title><g><path d="M20.285 12.248c-2.042.107-3.818.727-5.26 2.128-1.457 1.415-2.122 3.15-1.94 5.3-.798-.1-1.525-.208-2.256-.27-.254-.02-.554.01-.767.13-.71.4-1.39.854-2.198 1.36.148-.67.244-1.26.414-1.823.123-.416.066-.647-.316-.917-2.452-1.734-3.485-4.328-2.712-7 .716-2.47 2.473-3.97 4.86-4.75 3.26-1.066 6.92.022 8.902 2.613a6.113 6.113 0 0 1 1.27 3.228zM24.873 25c-.647-.288-1.24-.72-1.87-.787-.63-.066-1.292.298-1.95.365-2.005.205-3.8-.354-5.282-1.726-2.816-2.61-2.414-6.61.845-8.75 2.897-1.9 7.145-1.266 9.187 1.37 1.782 2.302 1.572 5.357-.603 7.29-.63.56-.857 1.02-.453 1.757.074.136.083.308.126.48zM10.886 11.416c.02-.49-.404-.93-.906-.944a.915.915 0 0 0-.952.886.904.904 0 0 0 .895.94.93.93 0 0 0 .963-.882zm4.904-.944c-.504.01-.93.44-.92.93a.92.92 0 0 0 .944.9.903.903 0 0 0 .91-.928.91.91 0 0 0-.934-.902zm1.722 7.39c.412 0 .75-.323.766-.73a.767.767 0 0 0-.76-.794.775.775 0 0 0-.77.79.768.768 0 0 0 .764.734zm4.745-1.523a.762.762 0 0 0-.755.728.75.75 0 0 0 .745.79c.413 0 .74-.313.755-.725a.757.757 0 0 0-.745-.794z" fill-rule="evenodd"></path></g></svg></span>]()[<span class="at4-visually-hidden">Share to 更多...</span><span class="at-icon-wrapper" style="background-color: rgb(255, 101, 80);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-addthis-5" class="at-icon at-icon-addthis" style="fill: rgb(255, 255, 255);"><title id="at-svg-addthis-5">AddThis</title><g><path d="M18 14V8h-4v6H8v4h6v6h4v-6h6v-4h-6z" fill-rule="evenodd"></path></g></svg><div class="at4-share-count-container"><span class="at4-share-count"><span class="at4-visually-hidden">, Number of shares</span></span></div></span>]()<div id="at4-scc" class="at-share-close-control ats-transparent at4-hide-content at4-show" title="Hide"><div class="at4-arrow at-right">Hide</div></div></div><div id="at4-soc" class="at-share-open-control at-share-open-control-right ats-transparent at4-hide" title="Show" style="padding-right: 15px;"><div class="at4-arrow at-left">Show</div></div></div><div id="at4-thankyou" class="at4-thankyou at4-thankyou-background at4-hide ats-transparent at4-thankyou-desktop addthis-smartlayers addthis-animated fadeIn at4-show" role="dialog" aria-labelledby="at-thankyou-label"><div class="at4lb-inner"><button class="at4x" title="Close">Close</button>[]()<div>[]()[<div class="at-branding-icon"></div><span class="at-branding-addthis">AddThis</span>](https://www.addthis.com/website-tools/overview?utm_source=AddThis%20Tools&utm_medium=image "Powered by AddThis")</div><div class="at4-thankyou-inner"><div id="at-thankyou-label" class="thankyou-title"></div><div class="thankyou-description"></div><div class="at4-thankyou-layer"></div></div></div></div><iframe style="display: none;"></iframe>
