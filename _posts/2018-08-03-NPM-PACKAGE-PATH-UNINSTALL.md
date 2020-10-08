---
layout:     post   				    # 使用的布局（不需要改）
title:      NPM Package location & uninstall				# 标题 
subtitle:   更改npm全局模块和cache默认安装位置& NPM Uninstall   #副标题
date:       2018-08-03 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---




# Where does npm install the packages?
[https://flaviocopes.com/where-npm-install-packages/](https://flaviocopes.com/where-npm-install-packages/)   

## How to find out where npm installs the packages

Published <time>Aug 03, 2018</time>

[Sponsored by Studio 3T![](AE_files/1597350415-Carbon_250_100_Logo_on_Transparent.png) MongoDB is easy. Now make it powerful. Query faster, import/export in multiple formats, generate instant code, automate repetitive tasks & much more Try for free now](https://srv.buysellads.com/ads/click/x/GTND42JECVYIVKJWF6YLYKQNCTYI5KQIC6YI6Z3JCYYD427WC6BDK2QKCK7DCK77CKYD427WCVBDTKQIC6SIP5QKC6SDTKJJC6ADEK3EHJNCLSIZ?segment=placement:flaviocopescom;)
> Read the [npm guide](https://flaviocopes.com/npm/) if you are starting out with npm, it's going to go in a lot of the basic details of it.

When you install a package using `npm` (or [yarn](https://flaviocopes.com/yarn/)), you can perform 2 types of installation:

* a local install
* a global install

By default, when you type an `npm install` command, like:

```bash
npm install lodash
```

the package is installed in the current file tree, under the `node_modules` subfolder.

As this happens, `npm` also adds the `lodash` entry in the `dependencies` property of the [`package.json` file](https://flaviocopes.com/package-json/) present in the current folder.

A global installation is performed using the `-g` flag:

```bash
npm install -g lodash
```

When this happens, npm won't install the package under the local folder, but instead, it will use a global location.

Where, exactly?

The `npm root -g` command will tell you where that exact location is on your machine.

On macOS or Linux this location could be `/usr/local/lib/node_modules`.
On Windows it could be `C:\Users\YOU\AppData\Roaming\npm\node_modules`

If you use `nvm` to manage Node.js versions, however, that location would differ.

I for example use `nvm` and my packages location was shown as   `/Users/flavio/.nvm/versions/node/v8.9.0/lib/node_modules`.

Download my free [Node.js Handbook](https://flaviocopes.com/page/node-handbook/)

***

# Uninstalling packages and dependencies
[https://docs.npmjs.com/uninstalling-packages-and-dependencies](https://docs.npmjs.com/uninstalling-packages-and-dependencies)   
```bash
npm uninstall lodash
npm uninstall --save lodash
```
