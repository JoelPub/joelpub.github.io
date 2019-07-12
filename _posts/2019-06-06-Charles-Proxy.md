---
layout:     post   				    # 使用的布局（不需要改）
title:      Charles Proxy setting				# 标题 
subtitle:   真机抓包设置教程   #副标题
date:       2019-06-06 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---

<a href="https://blog.csdn.net/ManyPeng/article/details/79475870">APP 抓包和微信小程序抓包-Charles 的精简使用教程</a>
<a href="https://github.com/wuchangming/spy-debugger/issues/42">APP 抓包和微信小程序抓包-Charles 的精简使用教程</a>
<a href="https://blog.csdn.net/weixin_36934930/article/details/79870240">微信H5移动端真机调试--vConsole</a>

# charles抓取微信小程序数据(抓取http和https数据)

置顶2018年03月07日 20:06:06 [Hound1211](https://me.csdn.net/ManyPeng)阅读数 33811 <svg>  </svg> 版权声明：本文为博主原创文章，未经博主允许不得转载。                        https://blog.csdn.net/ManyPeng/article/details/79475870

本文中使用的是mac上的抓包工具charles进行抓包，手机是华为荣耀8，安卓版本7.0（其实跟版本没啥关系）

要想抓取到微信小程序的数据首先要解决的第一个问题件就是如何

**通过charles抓取手机上的数据（HTTP)**

具体配置过程如下：

第一步，charles上通过proxy->proxy setting进入代理设置，入口如下图所示

![](/img/blog/charles_files/20180307191133358)

点击后进入如下所示界面

    ![](/img/blog/charles_files/20180307191412276)

记住此处的port，默认为8888，也可以进行修改，只要不冲突就可以， **勾选上Enable transparent HTTP proxying**，到此为止完成charles上的初步设置。

到此为止，完成了电脑端的设置

               ----------------------------------小型分割线----------------------------------

第二步，设置手机代理， **注意要保证手机所连接的wifi跟电脑在一个局域网内（就是连接同一个wifi就好了**）

首先，需要知道电脑的ip地址，我的电脑上通过系统偏好设置->网络可以查看

![](/img/blog/charles_files/20180307192138618)注意此处电脑连接的是PHICOMM_air的wifi

手机上进入wifi设置，一般按住你正在连接的wifi一会会弹出一个菜单，点击修改网络就到如下界面， **勾选"显示高级选项"**，点击代理

![](/img/blog/charles_files/20180307192323638)注意此处手机连接的也是PHCOMM_air的wifi

点击代理后进入如下界面， **服务器主机名处填写刚才查到的电脑的ip地址**即可， **服务器端口填写第一步中charles处设置的端口**，默认是8888，如果做了修改，填写设置charles时修改的端口值。

![](/img/blog/charles_files/20180307192559442)

点击保存，此时charles上会弹出一个对话框，点击allow即可。此时就可以抓取手机上的http数据包了（注意不是https）

如下图所示，点入一个应用后，抓取到的http包

![](/img/blog/charles_files/20180307193307975)

到此为止，完成了第一大步骤的设置，可以通过电脑抓取手机的HTTP数据包了

对于HTTPS数据，到此步为止，抓包工具上的列表部分会显示一堆unknown的地址

*********************************************分割线************************************************************

完成以上步骤，charles会同时抓取手机以及电脑上的数据包，如果针对手机抓包可以通过取消勾选下图所示的选项屏蔽掉

![](/img/blog/charles_files/20180307194127716)

手机连接不上charles的几种原因及解决方案：

1.确认手机跟电脑是不是在一个wifi环境下，我在使用过程中又一次手机由于wifi信号强弱问题自动切换过wifi导致抓了一般的数据包抓不到了

2.可以尝试更换一下端口号（8888可能已经被占用）

3.可以通过电脑手动添加手机的ip

![](/img/blog/charles_files/20180307193806911)

4.试试关掉电脑防火墙，在重新连接

5.最后大招，万能重启。。。重新打开charles，重新设置手机连接。。。

*********************************************分割线************************************************************

**抓取HTTPS数据包**

首先是电脑端的配置，进入charles的Help->SSL Proxying->Install Charles Root Certificate

![](/img/blog/charles_files/20180307194401534)

点击Install Charles Root Certificate之后，会弹出mac的钥匙串访问页面

![](/img/blog/charles_files/20180307194726580)

（正常第一次进去这个证书应该是一个红叉，我这里由于已经进行过设置所以显示正常）

右键点击该证书，选择菜单中的"显示简介选项"，接着进入信任栏目，将其 **全部置为"始终信任"**

完成这一步的设置后，这个根证书应该会跟我上面一个截图一样，而不会显示红叉

接着点击Proxy->SSL Proxy Settings，弹出如下页面

![](/img/blog/charles_files/20180307195134860)![](/img/blog/charles_files/20180307195230731)

弹出的对话框中，勾选Enable SSL Proxying，然后点击add添加Host为*和Port为443，点击ok（此处将host设置为*的意思是主抓取全部的http是数据包，如果想针对某个域名抓取可以在此设置）

到此为止，完成了电脑端的设置

                   ----------------------------------小型分割线----------------------------------

接着需要在手机端安装证书，点击Charles上的Help->SSL Proxying->Install Charles Root Certificate on a Mobile Device or Remote Browser

![](/img/blog/charles_files/20180307195617304)

点击之后弹出如下对话框：

![](/img/blog/charles_files/20180307195737751)

接着在手机浏览器上访问charlesproxy.com/getssl这个地址（此处请注意，如果是小米手机，最好不要用自带的浏览器，亲自踩坑的忠告......），我的手机让我输入锁屏密码，输入之后，会弹出如下界面：

![](/img/blog/charles_files/20180307200002865)

输入一个名字比如charlesproxy之后点击确定，会有一个一闪而过的提示，就ok了

此时进入小程序，可以看到charles上能够看到https的接口的地址和数据了

![](/img/blog/charles_files/20180307200443685)

后续的工作诸如分析爬取就仁者见仁智者见智了~

注意，有一些应用使用的网络框架是不允许通过代理访问的，此时通过charles抓包显示的地址仍是unknown，或者手机上访问该应用会提示网络连接错误等信息，此时取消勾选charles的SSL Proxying settings中的勾选框就可以正常访问了

最后，抓取工作完成后，记得把手机上的代理设置恢复原样，否则当电脑上的charles关闭时，手机将无法正常访问网络

