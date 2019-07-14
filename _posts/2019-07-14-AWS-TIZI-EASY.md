---
layout:     post   				    # 使用的布局（不需要改）
title:      Easy way to setup VPN 				# 标题 
subtitle:   搭梯子简易版   #副标题
date:       2019-07-10 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	VPN							#标签
---


## 亚马逊云AWS搭建软件VPN（Client VPN）教程
[官方指导](https://openvpn.net/vpn-server-resources/amazon-web-services-ec2-tiered-appliance-quick-start-guide/)
两个点：
1.要使用aunch through ec2配置，不要用launch from website配置，否则无法新建security group导致无法用putty连接  
![](/img/blog/Capture-11.png)  
2.不要配置elastic ip，原因暂时不明  
## OpenVPN服务器的配置 

然后就可以通过putty远程登录到这台OpenVPN Access Server上了（具体的连接和秘钥的设置就不在这里详细阐述了），缺省的root账号是 **openvpnas**。

第一次登陆到服务器的时候，会显示一段End User License Agreement (OpenVPN-AS EULA)的用户许可声明，输入yes再回车进行接受即可。接下来会需要你做一些简单的配置（如下），配置一些简单的接口，端口等。

> Once you provide a few initial configuration settings,<br>

OpenVPN Access Server can be configured by accessing<br>

its Admin Web UI using your Web browser.
Will this be the primary Access Server node?<br>

(enter 'no' to configure as a backup or standby node)<br>

> Press ENTER for default [yes]: yes
Please specify the network interface and IP address to be<br>

used by the Admin Web UI:<br>

(1) all interfaces: 0.0.0.0<br>

(2) eth0: 172.31.22.18<br>

Please enter the option number from the list above (1-2).<br>

> Press Enter for default [2]:1
Please specify the port number for the Admin Web UI.<br>

> Press ENTER for default [943]:
Please specify the TCP port number for the OpenVPN Daemon<br>

> Press ENTER for default [443]:
Should client traffic be routed by default through the VPN?<br>

> Press ENTER for default [no]:yes
Should client DNS traffic be routed by default through the VPN?<br>

> Press ENTER for default [no]:yes
Use local authentication via internal DB?<br>

> Press ENTER for default [yes]:
Private subnets detected: ['172.31.0.0/16']
Should private subnets be accessible to clients by default?<br>

> Press ENTER for EC2 default [yes]:
To initially login to the Admin Web UI, you must use a<br>

username and password that successfully authenticates you<br>

with the host UNIX system (you can later modify the settings<br>

so that RADIUS or LDAP is used for authentication instead).
You can login to the Admin Web UI as "openvpn" or specify<br>

a different user account to use for this purpose.
Do you wish to login to the Admin UI as "openvpn"?<br>

> Press ENTER for default [yes]:
> Please specify your OpenVPN-AS license key (or leave blank to specify later):<br>

Initializing OpenVPN...<br>

Adding new user login...<br>

useradd -s /sbin/nologin "openvpn"<br>

Writing as configuration file...<br>

Perform sa init...<br>

Wiping any previous userdb...<br>

Creating default profile...<br>

Modifying default profile...<br>

Adding new user to userdb...<br>

Modifying new user as superuser in userdb...<br>

Getting hostname...<br>

Hostname: 13.230.142.128<br>

Preparing web certificates...<br>

Getting web user account...

配置完成后，先用 _sudo passwd openvpn_命令修改一下用户openvpn的密码，这个账号密码可以用来管理OpenVPN的网站管理页面。

接着就可以通过URL来访问OpenVPN的管理页面和用户页面了

> 管理UI: https://<Elastic IP Address>:943/admin<br>

用户UI: https://<Elastic IP Address>:943/

## 登陆OpenVPN管理员UI以及下载VPN客户端软件

通过https://<Elastic IP Address>:943/admin地址可以访问OpenVPN服务端的管理页面，在这个页面你可以设置VPN的参数，创建/编辑VPN用户，编辑VPN客户端所在的网段，添加双重认证功能等等。

然后可以访问https://docs.openvpn.net/connecting/，根据提示下载相应的OpenVPN客户端软件。下载完成后，输入正确的用户名密码即可连接到VPN服务器了！




