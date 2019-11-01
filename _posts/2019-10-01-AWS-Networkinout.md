---
layout:     post   				    # 使用的布局（不需要改）
title:      AWS NETWORKIN/OUT 				# 标题 
subtitle:   AWS流量   #副标题
date:       2019-10-01				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Infra							#标签
---
## 查看流量  
AWS-->Service-->CloudWatch-->Matrics  
![Screen_Shot_2019_09_29_at_4_17_13_PM](/img/blog/NETWORKINOUT_files/03473c084ac276d440f5af1beab82cfbb9dd67ea.png)  
All Matrics-->EC2-->Per-Instance Metrics选择networkin/out  
![Screen_Shot_2019_09_29_at_4_27_25_PM](/img/blog/NETWORKINOUT_files/6c3022085e333bdc386c5169ec3951dec193d27f.png)  
Graphed matrics--> Statistic(Sum) Period(30Day) Type(Number) Customer(4weeks)  
![Screen_Shot_2019_09_29_at_4_28_10_PM](/img/blog/NETWORKINOUT_files/74a8d6dff3df0ffa24f2b9195697b99c9041833b.png)  
## 加到看板（貌似过几天就不能用了）  
Actions-->Add to dashboard  
![Screen_Shot_2019_09_29_at_4_28_30_PM](/img/blog/NETWORKINOUT_files/ccb725a532d5922988919058b6eecd1757c1217c.png)  
AWS-->Service-->CloudWatch-->Dashboard  
![Screen_Shot_2019_09_29_at_4_29_33_PM](/img/blog/NETWORKINOUT_files/06c4fe8d6b805d8238a35f5fc21693666fe7acec.png)  
## 价格
$0.000 per GB - data transfer in per month 26.078 GB                                         $0.00 
$0.000 per GB - data transfer out under the monthly global free tier15 GB                    $0.00
$0.000 per GB - regional data transfer under the monthly global free tier0.276 GB            $0.00
$0.090 per GB - first 10 TB / month data transfer out beyond the global free tier11.440 GB   $1.03
