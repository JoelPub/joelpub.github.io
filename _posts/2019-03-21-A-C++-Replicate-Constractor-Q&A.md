---
layout:     post   				    # 使用的布局（不需要改）
title:      Qeustion and Answer about one C++ replicate constractor example 				# 标题 
subtitle:   ( 复制构造函数 )   #副标题
date:       2019-03-21 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	program							#标签
---
<pre><code>#include<iostream>
using namespace std; 
class P
{
   int x,y;
 public:
  P(int m, int n){x=m;y=n;}
     P(){x=1;y=1;}
  P(int a,int *b){x=a;y=*b;}
  void setxy(int i,int j){x=i;y=j;}
  void printxy(){cout<<x<<y<<endl;}
  P(P &q){x=q.x+1;y=q.y+1;}
};
void fun(P x,P &y)
{
 x.printxy();    //23
 y.printxy();    //11
 x.setxy(3,4);
 y.setxy(6,7);
}
int main()
{ 
 int xx=5,yy=7;
 P c(1,2),d,e(xx,&yy);
 fun(c,d);
 c.printxy();     //12
 d.printxy();     //67
 e.printxy();      //57
}
</code></pre>

关键在于复制构造函数P(P &q){x=q.x+1;y=q.y+1;}
c会被调用复制构造函数是因为这个对象是以值传递的方式传入函数fun
相关资料：
复制构造函数 https://www.cnblogs.com/raichen/p/4752025.html
函数三种传递方式 https://www.cnblogs.com/ducongcong/p/6912164.html
c++编译器 https://www.onlinegdb.com/online_c++_compiler
