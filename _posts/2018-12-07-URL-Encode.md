---
layout:     post   				    # 使用的布局（不需要改）
title:      URL Encode 				# 标题 
subtitle:   Encode 的必要 #副标题
date:       2018-12-07 				# 时间
author:     转载 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	web							#标签
---
[为什么要对url进行encode](http://www.blogjava.net/donghang73/archive/2011/08/10/356208.html)

发现现在几乎所有的网站都对url中的汉字和特殊的字符，进行了urlencode操作，也就是：

[http://hi.baidu.com/%BE%B2%D0%C4%C0%CF%C8%CB/creat/blog/](http://hi.baidu.com/%BE%B2%D0%C4%C0%CF%C8%CB/creat/blog/)

这个样子，中间%形式的，肯定就是我的登录用户名称了吧。

为什么对这些字符进行了u的编码形式，是为了字符编码（gbk、utf8）还是为了不出现特殊的字符在url中？都知道要转，但是转了的真正好处呢。查看了网上的很多资料，也没有找到更加准确的说法。

url转义其实也只是为了符合url的规范而已。因为在标准的url规范中中文和很多的字符是不允许出现在url中的。

**看一下php的urlencode的说明了。**

urlencode — 编码 URL 字符串

<div u"="">

string **urlencode** ( string $str )

返回字符串，此字符串中除了 _-_._ 之外的所有非字母数字字符都将被替换成百分号（_%_）后跟两位十六进制数，空格则编码为加号（_+_）。此编码与 WWW 表单 POST 数据的编码方式是一样的，同时与 _application/x-www-form-urlencoded_ 的媒体类型编码方式一样。由于历史原因，此编码在将空格编码为加号（+）方面与 RFC1738 编码（参见 [rawurlencode()](http://cn.php.net/manual/zh/function.rawurlencode.php)）不同。此函数便于将字符串编码并将其用于 URL 的请求部分，同时它还便于将变量传递给下一页。

标准的英文说明是：

> "...Only alphanumerics \[0-9a-zA-Z\], the special characters "$-_.+!*'()," **\[not including the quotes - ed\]**, and reserved characters used for their reserved purposes may be used unencoded within a URL."

那哪些字符是需要转化的呢？

**1\. ASCII 的控制字符**

这些字符都是不可打印的，自然需要进行转化。

**2\. 一些非ASCII字符**

这些字符自然是非法的字符范围。转化也是理所当然的了。

**3\. 一些保留字符**

很明显最常见的就是“&”了，这个如果出现在url中了，那你认为是url中的一个字符呢，还是特殊的参数分割用的呢？

**4\. 就是一些不安全的字符了。**

例如：空格。为了防止引起歧义，需要被转化为“+”。

明白了这些，也就知道了为什么需要转化了，而转化的规则也是很简单的。

按照每个字符对应的字符编码，不是符合我们范围的，统统的转化为%的形式也就是了。自然也是16进制的形式。

**和字符编码无关**

通过urlencode的转化规则和目的，我们也很容易的看出，urleocode是基于字符编码的。同样的一个汉字，不同的编码类型，肯定对应不同的urleocode的串。gbk编码的有gbk的encode结果。

apache等服务器，接受到字符串后，可以进行decode，但是还是无法解决编码的问题。编码问题，还是需要靠约定或者字符编码的判断解决。

因此，urleocode只是为了url中一些非ascii字符，可以正确无误的被传输，至于使用哪种编码，就不是eocode所关心和解决的问题了。

编码问题，不是urlencode所要解决的。  
转自：[http://apps.hi.baidu.com/share/detail/32230450](http://apps.hi.baidu.com/share/detail/32230450)

**参考资料：**

[http://www.blooberry.com/indexdot/html/topics/urlencoding.htm](http://www.blooberry.com/indexdot/html/topics/urlencoding.htm)

[http://cn.php.net/manual/zh/function.urlencode.php](http://cn.php.net/manual/zh/function.urlencode.php)

  

  

form有2中方法把数据提交给服务器，get和post,分别说下吧。   
（一）get提交   
  1.首先说下客户端（浏览器）的form表单用get方法是如何将数据编码后提交给服务器端的吧。   
    
    对于get方法来说，都是把数据串联在请求的url后面作为参数，如：[http://localhost:8080/servlet?msg=abc](http://localhost:8080/servlet?msg=abc)   
（很常见的一个乱码问题就要出现了，如果url中出现中文或其它特殊字符的话，如：[http://localhost:8080/](http://localhost:8080/) /servlet?msg=杭州，服务器端容易得到乱码），url拼接完成后，浏览器会对url进行URL encode，然后发送给服务器，URL encode的过程就是把部分url做为字符，按照某种编码方式（如：utf-8,gbk等）编码成二进制的字节码，然后每个字节用一个包含3个字符的字符串 "%xy" 表示，其中xy为该字节的两位十六进制表示形式。我这里说的可能不清楚，

**具体介绍可以看下java.net.URLEncoder类的介绍在这里。了解了 URL encode的过程，我们能看到2个很重要的问题，第一：需要URL encode的字符一般都是非ASCII的字符（笼统的讲），再通俗的讲就是除了英文字母以外的文字（如：中文，日文等）都要进行URL encode，所以对于我们来说，都是英文字母的url不会出现服务器得到乱码问题，出现乱码都是url里面带了中文或特殊字符造成的；第二：URL encode到底按照那种编码方式对字符编码？这里就是浏览器的事情了，而且不同的浏览器有不同的做法，中文版的浏览器一般会默认的使用GBK，通过设置浏览器也可以使用UTF-8，可能不同的用户就有不同的浏览器设置，也就造成不同的编码方式，**所以很多网站的做法都是先把url里面的中文或特殊字符用 javascript做URL encode，然后再拼接url提交数据，也就是替浏览器做了URL encode，好处就是网站可以统一get方法提交数据的编码方式。 完成了URL encode，那么现在的url就成了ASCII范围内的字符了，然后以iso-8859-1的编码方式转换成二进制随着请求头一起发送出去。这里想多说几句的是，对于get方法来说，没有请求实体，含有数据的url都在请求头里面，之所以用URL encode，我个人觉的原因是：对于请求头来说最终都是要用iso-8859-1编码方式编码成二进制的101010.....的纯数据在互联网上传送，如果直接将含有中文等特殊字符做iso-8859-1编码会丢失信息，所以先做URL encode是有必要的。   
   2。服务器端（tomcat）是如何将数据获取到进行解码的。   
   第一步是先把数据用iso-8859-1进行解码，对于get方法来说，tomcat获取数据的是ASCII范围内的请求头字符，其中的请求url里面带有参数数据，如果参数中有中文等特殊字符，那么目前还是URL encode后的%XY状态，先停下，我们先说下开发人员一般获取数据的过程。通常大家都是request.getParameter("name")获取参数数据，我们在request对象或得的数据都是经过解码过的，而解码过程中程序里是无法指定，这里要说下，有很多新手说用 request.setCharacterEncoding("字符集")可以指定解码方式，其实是不可以的，看servlet的官方API说明有对此方法的解释：Overrides the name of the character encoding used in the body of this request. This method must be called prior to reading request parameters or reading input using getReader().可以看出对于get方法他是无能为力的。那么到底用什么编码方式解码数据的呢，这是tomcat的事情了，默认缺省用的是 iso-8859-1,这样我们就能找到为什么get请求带中文参数为什么在服务器端得到乱码了，原因是在客户端一般都是用UTF-8或GBK对数据 URL encode，这里用iso-8859-1方式URL decoder显然不行，在程序里我们可以直接   
Java代码   
1\. new String(request.getParameter("name").getBytes("iso-8859-1"),"客户端指定的URL encode编码方式")    
还原回字节码，然后用正确的方式解码数据，网上的文章通常是在tomcat里面做个配置   
Xml代码   
1\. <Connector port="8080" protocol="HTTP/1.1" maxThreads="150" connectionTimeout="20000" redirectPort="8443" URIEncoding="GBK"/>    
这样是让tomcat在获取数据后用指定的方式URL decoder，URL decoder的介绍在这里

http://blog.csdn.net/vickyway/article/details/46375971  

http://www.jb51.net/article/80181.htm  

（二）post提交   
1.客户端（浏览器）的form表单用post方法是如何将数据编码后提交给服务器端的。   
  在post方法里所要传送的数据也要URL encode，那么他是用什么编码方式的呢？   
   在form所在的html文件里如果有段<meta http-equiv="Content-Type" content="text/html; charset=字符集（GBK，utf-8等）"/>，那么post就会用此处指定的编码方式编码。一般大家都认为这段代码是为了让浏览器知道用什么字符集来对网页解释，所以网站都会把它放在html代码的最前端，尽量不出现乱码，其实它还有个作用就是指定form表单的post方法提交数据的 URL encode编码方式。从这里可以看出对于get方法来数，浏览器对数据的URL encode的编码方式是有浏览器设置来决定，（可以用js做统一指定），而post方法，开发人员可以指定。   
2。服务器端（tomcat）是如何将数据获取到进行解码的。   
如果用tomcat默认缺省设置，也没做过滤器等编码设置，那么他也是用iso-8859-1解码的，但是request.setCharacterEncoding("字符集")可以派上用场。

我发现上面说的tomcat所做的事情前提都是在请求头里没有指定编码方式，如果请求头里指定了编码方式将按照这种方式编码。   
   有2篇文章推荐下，地址分别是   
深入浅出URL编码：[http://www.cnblogs.com/yencain/articles/1321386.html](http://www.cnblogs.com/yencain/articles/1321386.html)；   
表单用post方法提交数据时乱码问题：[http://wanghuan8086.javaeye.com/blog/173869](http://wanghuan8086.javaeye.com/blog/173869)

用post很重要的在form所在的html文件里如果有段<meta http-equiv="Content-Type" content="text/html; charset=字符集（GBK，utf-8等）"/>   
强烈建议使用post提交

  

附上URLEncode  和UrlDecode 的JavaScript函数代码以及[，《字符编码方式介绍》http://hi.baidu.com/loongdao/blog/item/6c39ec863280bd3666096ef6.html](http://hi.baidu.com/loongdao/blog/item/6c39ec863280bd3666096ef6.html)

  
