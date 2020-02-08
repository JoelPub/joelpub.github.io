---
layout:     post   				    # 使用的布局（不需要改）
title:      ECS Linux Windows 				# 标题 
subtitle:   ECS安装图形化桌面环境   #副标题
date:       2020-02-05				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Infra							#标签
---

## 为Centos Linux实例安装图形化桌面环境MATE:
https://help.aliyun.com/knowledge_detail/41227.html

OS: centos_7_02 64

```javascript
  
yum groups install "X Window System"
yum groups install "MATE Desktop"
systemctl set-default graphical.target
reboot  
```  

**centos7下安装PlayOnLinux** 
https://blog.csdn.net/u010048823/article/details/51301625

```javascript
    rpm -ivh http://rpm.playonlinux.com/playonlinux-yum-4-1.noarch.rpm
    yum install playonlinux
``` 


**Linux系统用户账号的管理**

```javascript
    #useradd joel
    #passwd joel
    #su joel
    #playonlinux
```  

**Linux中安装nc（netcat）**

```javascript
    #yum install nc
```  
## 为Ubuntu Linux实例安装图形化桌面环境Ubuntu-desktop:

OS: ubuntu_18_04_x64

```javascript
  
apt-get update
apt-get upgrade
sudo apt-get install ubuntu-desktop
startx
```  

**ubuntu18.04 64位安装PlayOnLinux** 
https://blog.csdn.net/SimileciWH/article/details/86685406

```javascript
    wget -q "http://deb.playonlinux.com/public.gpg" -O- | sudo apt-key add -
    sudo wget http://deb.playonlinux.com/playonlinux_bionic.list -O /etc/apt/sources.list.d/playonlinux.list
    sudo apt-get update
    sudo apt-get install playonlinux
``` 
