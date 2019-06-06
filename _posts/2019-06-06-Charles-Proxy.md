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
<h1><a id="charleshttphttps_1"></a>charles抓取微信小程序数据(抓取http和https数据)</h1>
<p>本文中使用的是mac上的抓包工具charles进行抓包，手机是华为荣耀8，安卓版本7.0（其实跟版本没啥关系）</p>
<p>要想抓取到微信小程序的数据首先要解决的第一个问题件就是如何</p>
<p><strong>通过charles抓取手机上的数据（HTTP)</strong></p>
<p>具体配置过程如下：</p>
<p>第一步，charles上通过proxy-&gt;proxy setting进入代理设置，入口如下图所示</p>
<p><img src="https://img-blog.csdn.net/20180307191133358?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>点击后进入如下所示界面</p>
<p><img src="https://img-blog.csdn.net/20180307191412276?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>记住此处的port，默认为8888，也可以进行修改，只要不冲突就可以， <strong>勾选上Enable transparent HTTP proxying</strong>，到此为止完成charles上的初步设置。</p>
<p>到此为止，完成了电脑端的设置</p>
<p>----------------------------------小型分割线----------------------------------</p>
<p>第二步，设置手机代理， <strong>注意要保证手机所连接的wifi跟电脑在一个局域网内（就是连接同一个wifi就好了</strong>）</p>
<p>首先，需要知道电脑的ip地址，我的电脑上通过系统偏好设置-&gt;网络可以查看</p>
<p><img src="https://img-blog.csdn.net/20180307192138618?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="">注意此处电脑连接的是PHICOMM_air的wifi</p>
<p>手机上进入wifi设置，一般按住你正在连接的wifi一会会弹出一个菜单，点击修改网络就到如下界面， <strong>勾选&quot;显示高级选项&quot;</strong>，点击代理</p>
<p><img src="https://img-blog.csdn.net/20180307192323638?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="">注意此处手机连接的也是PHCOMM_air的wifi</p>
<p>点击代理后进入如下界面， <strong>服务器主机名处填写刚才查到的电脑的ip地址</strong>即可， <strong>服务器端口填写第一步中charles处设置的端口</strong>，默认是8888，如果做了修改，填写设置charles时修改的端口值。</p>
<p><img src="https://img-blog.csdn.net/20180307192559442?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>点击保存，此时charles上会弹出一个对话框，点击allow即可。此时就可以抓取手机上的http数据包了（注意不是https）</p>
<p>如下图所示，点入一个应用后，抓取到的http包</p>
<p><img src="https://img-blog.csdn.net/20180307193307975?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>到此为止，完成了第一大步骤的设置，可以通过电脑抓取手机的HTTP数据包了</p>
<p>对于HTTPS数据，到此步为止，抓包工具上的列表部分会显示一堆unknown的地址</p>
<p><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><em>分割线</em></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong>***************</p>
<p>完成以上步骤，charles会同时抓取手机以及电脑上的数据包，如果针对手机抓包可以通过取消勾选下图所示的选项屏蔽掉</p>
<p><img src="https://img-blog.csdn.net/20180307194127716?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>手机连接不上charles的几种原因及解决方案：</p>
<p>1.确认手机跟电脑是不是在一个wifi环境下，我在使用过程中又一次手机由于wifi信号强弱问题自动切换过wifi导致抓了一般的数据包抓不到了</p>
<p>2.可以尝试更换一下端口号（8888可能已经被占用）</p>
<p>3.可以通过电脑手动添加手机的ip</p>
<p><img src="https://img-blog.csdn.net/20180307193806911?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>4.试试关掉电脑防火墙，在重新连接</p>
<p>5.最后大招，万能重启。。。重新打开charles，重新设置手机连接。。。</p>
<p><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><em>分割线</em></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong>***************</p>
<p><strong>抓取HTTPS数据包</strong></p>
<p>首先是电脑端的配置，进入charles的Help-&gt;SSL Proxying-&gt;Install Charles Root Certificate</p>
<p><img src="https://img-blog.csdn.net/20180307194401534?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>点击Install Charles Root Certificate之后，会弹出mac的钥匙串访问页面</p>
<p><img src="https://img-blog.csdn.net/20180307194726580?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>（正常第一次进去这个证书应该是一个红叉，我这里由于已经进行过设置所以显示正常）</p>
<p>右键点击该证书，选择菜单中的&quot;显示简介选项&quot;，接着进入信任栏目，将其 <strong>全部置为&quot;始终信任&quot;</strong></p>
<p>完成这一步的设置后，这个根证书应该会跟我上面一个截图一样，而不会显示红叉</p>
<p>接着点击Proxy-&gt;SSL Proxy Settings，弹出如下页面</p>
<p><img src="https://img-blog.csdn.net/20180307195134860?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""><img src="https://img-blog.csdn.net/20180307195230731?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>弹出的对话框中，勾选Enable SSL Proxying，然后点击add添加Host为<em>和Port为443，点击ok（此处将host设置为</em>的意思是主抓取全部的http是数据包，如果想针对某个域名抓取可以在此设置）</p>
<p>到此为止，完成了电脑端的设置</p>
<p>----------------------------------小型分割线----------------------------------</p>
<p>接着需要在手机端安装证书，点击Charles上的Help-&gt;SSL Proxying-&gt;Install Charles Root Certificate on a Mobile Device or Remote Browser</p>
<p><img src="https://img-blog.csdn.net/20180307195617304?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>点击之后弹出如下对话框：</p>
<p><img src="https://img-blog.csdn.net/20180307195737751?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p><a href="http://xn--charlesproxy-4w4s905gjmcl41e91exvsii1ag97bsl7eibjg52d.com/getssl%E8%BF%99%E4%B8%AA%E5%9C%B0%E5%9D%80%EF%BC%88%E6%AD%A4%E5%A4%84%E8%AF%B7%E6%B3%A8%E6%84%8F%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%98%AF%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA%EF%BC%8C%E6%9C%80%E5%A5%BD%E4%B8%8D%E8%A6%81%E7%94%A8%E8%87%AA%E5%B8%A6%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%EF%BC%8C%E4%BA%B2%E8%87%AA%E8%B8%A9%E5%9D%91%E7%9A%84%E5%BF%A0%E5%91%8A">接着在手机浏览器上访问charlesproxy.com/getssl这个地址（此处请注意，如果是小米手机，最好不要用自带的浏览器，亲自踩坑的忠告</a>…），我的手机让我输入锁屏密码，输入之后，会弹出如下界面：</p>
<p><img src="https://img-blog.csdn.net/20180307200002865?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>输入一个名字比如charlesproxy之后点击确定，会有一个一闪而过的提示，就ok了</p>
<p>此时进入小程序，可以看到charles上能够看到https的接口的地址和数据了</p>
<p><img src="https://img-blog.csdn.net/20180307200443685?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFueVBlbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt=""></p>
<p>iOS10.3.1 新安装的证书需要手动选择信任证书。</p>
<p>解决方式：</p>
<p>设置-&gt;通用-&gt;关于本机-&gt;证书信任设置-&gt; 找到node-mitmproxy CA（打开）<br>
<img src="https://user-images.githubusercontent.com/5039340/41758023-5eb0790e-7618-11e8-9d41-39706bf69a52.png" alt=""></p>
<p>注意，有一些应用使用的网络框架是不允许通过代理访问的，此时通过charles抓包显示的地址仍是unknown，或者手机上访问该应用会提示网络连接错误等信息，此时取消勾选charles的SSL Proxying settings中的勾选框就可以正常访问了</p>
<p>最后，抓取工作完成后，记得把手机上的代理设置恢复原样，否则当电脑上的charles关闭时，手机将无法正常访问网络<br>
