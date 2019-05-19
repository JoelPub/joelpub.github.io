---
layout:     post   				    # 使用的布局（不需要改）
title:      Mac OS Andorid adb 				# 标题 
subtitle:   Mac OS X 下部分Android手机无法连接adb问题 #副标题
date:       2016-09-19 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="Mac_OS_X_Androidadb_1"></a>Mac OS X 下部分Android手机无法连接adb问题</h1>
<p><a href="http://blog.csdn.net/artwebs/article/details/20716431">Mac OS X 下部分Android手机无法连接adb问题之解决方案</a></p>
<p>时至当今，Android山寨手机厂商已如此之多，能修改和个性化定制Android OS的能人已是多如牛毛，有的牛人修改Android系统只会影响所修改的点，不会影响其它，然后还有的就不多说了，总之做的修改会造成很多影响其它方面功能的问题。对Android APP开发者来说最常见的就是adb(Android Debug Bridge)连接问题，HTC就不说了，是和Google合作的，Android前几代系统版本刚出来时，Google都是首先从HTC出相应新Android版本的产品，所以新产品的很多Android新特性代表的就是Google的原始意愿的。所以HTC的手机相应问题会少很多。 <strong>说了点儿废话，下面进入正题：</strong> Mac OS X下和Windows（XP、７）下adb连接Android手机，有一点不同就是Mac OX X下没有所谓的Android usb adb驱动，只需要下载Google官方的sdk开发包，指定android-sdk-macosx/platform-tools/路经到系统当前用户的环境变量即可。</p>
<p>&lt;b&gt;[java]&lt;/b&gt; <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="view plain">view plain</a> <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="copy">copy</a></p>
<ol>
<li>-MacBook-Pro:~ user$ Vim /Users/user/.profile</li>
<li>export PATH=$PATH:/Android-SDK/android-sdk-macosx/platform-tools</li>
<li>export PATH=$PATH:/Android-SDK/android-sdk-macosx/tools</li>
</ol>
<p>前期adb之类工具放在tools目录下面，后期统一放到platform-tools目录下面去了。<br>
此后，打开终端，在任意当前路经下都可以直接执行adb命令，通过USB线将Android手机和Mac　PC连接后，adb devices，没有相应设备的列表。下面是解决办法： １.　打开终端，输入：system_profiler SPUSBDataType，查看Mac系统所有USB设备信息，找到相应的厂商Vender ID。 查到相应连有Android手机设备的usb hub，找到相应的厂商Vender ID,比如，我的测试机K-Touch T619天语手机就无法连接adb，查到的相应信息片段如下：</p>
<p>&lt;b&gt;[java]&lt;/b&gt; <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="view plain">view plain</a> <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="copy">copy</a></p>
<ol>
<li>—————–</li>
<li>Spreadtrum phone:</li>
<li>Product ID: 0x5d04</li>
<li>Vendor ID: 0x1782</li>
<li>…</li>
<li>Serial Number: T619</li>
<li>…</li>
<li>—————–</li>
</ol>
<p>２.　终端进入/Users/user/.android，应该有一个adb_usb.ini文件，如果没有就创建，然后将上面的Vender ID &quot;0x1782&quot;单独一行加入到该文件，然后退出。</p>
<p>&lt;b&gt;[java]&lt;/b&gt; <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="view plain">view plain</a> <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="copy">copy</a></p>
<ol>
<li># ANDROID 3RD PARTY USB VENDOR ID LIST — DO NOT EDIT.</li>
<li># USE ‘android update adb’ TO GENERATE.</li>
<li># 1 USB VENDOR ID PER LINE.</li>
<li>0x1782</li>
</ol>
<p>３．　重启adb server进程。<br>
终端依次执行下面命令：</p>
<p>&lt;b&gt;[java]&lt;/b&gt; <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="view plain">view plain</a> <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="copy">copy</a></p>
<ol>
<li>adb kill-server</li>
<li>adb start-server</li>
</ol>
<p>然后通过adb devices命令就可以查看到以相应设备Serial Number为名字的设备。如：</p>
<p>&lt;b&gt;[java]&lt;/b&gt; <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="view plain">view plain</a> <a href="http://blog.csdn.net/artwebs/article/details/20716431#" title="copy">copy</a></p>
<ol>
<li>-MacBook-Pro:.android user$ adb devices</li>
<li>List of devices attached</li>
<li>emulator-5554   device</li>
<li>T619    device</li>
</ol>
<p><strong>PS：</strong><br>
１.　有时 adb devices不能显示连接设备，需要拔掉数据线，多插几次，并且退出终端，然后重新打开，再输入命令就能发现连接的设备，再无法连接请重启电脑，等待系统初始化环境设置。 需要注意的是并不是所有的android机器都能解决，比如有的手机有供应商ID，缺少产品ID，依然无法识别，这种奇葩形的就只能找其它方法了。 ２.　Windows（XP、７）下面也可以同样的方法解决。但是前提也是已经指定了adb环境变量并且安装了相应Android手机设备的adb usb驱动，判断有没有装通过将手机和Windows连接，设备管理器里面没有发现显示有问号的设备就说明装了，有就说明没有安装。然后在C:\Users\username.android目录下面也有一个adb_usb.ini文件，像前面那样别起一行添加相应设备的Vender ID，重启adb server进程即可。Reference:&lt;br&gt;<br>
<a href="http://blog.csdn.net/esonpo/article/details/8798594">http://blog.csdn.net/esonpo/article/details/8798594</a></p>
<h1><a id="mxusb_57"></a>魅族mx的usb调试在哪怎么打开</h1>
<p>1.进入手机设置界面—找到【辅助功能】如图<br>
2.进入手机设置界面，辅助工具里面继续选择【开发人员工具】<br>
3.然后找到【USB调试】选择，滑动到右边打开，然后选择 【是】</p>
