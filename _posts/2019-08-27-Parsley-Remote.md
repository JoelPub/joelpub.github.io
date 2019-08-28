---
layout:     post   				    # 使用的布局（不需要改）
title:      Parsley remote is an easy to use ajax asynchronous validator. 				# 标题 
subtitle:   使用Parsley内置的ajax方法   #副标题
date:       2019-08-27 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---
# [Parsley Remote](https://parsleyjs.org/doc/#remote-custom)  
[JSFiddle](http://jsfiddle.net/tnp2kz4m/) 
HTML: 
<pre><code>
& l t ;form method="post" id="myForm"& g t ;
    & l t ;input name="mobile" type="text" class="form-control number parsley-error" required="true" minlength="1" maxlength="11" data-parsley-required-message="请输入你的手机号码" data-parsley-pattern="^[0-9]{11}$" data-parsley-pattern-message="请确保你的手机号码包含11位数字" data-parsley-trigger="focusout" data-parsley-date-of-birth="DD.MM.YYYY" data-parsley-remote="" data-parsley-remote-validator="mycustom" data-parsley-remote-options="{ &quot;type&quot;: &quot;GET&quot; }" data-parsley-id="11"& g t ;
& l t ;/form& g t ;
</code><pre>  
 
JS:   

<pre><code>
        Parsley.addMessages('en', {
            defaultMessage: "This field is not valid."
        });
        window.Parsley.addAsyncValidator('mycustom',function(xhr) {
            console.log(this.$element);
            console.log(this.value);
            console.log(xhr);
            if (xhr.status==200&&xhr.responseText&&JSON.parse(xhr.responseText).data&&JSON.parse(xhr.responseText).data.available) {
            return true;
            }
            return false;
        }, "https://useraccount-qa.apps.pp01.cnnorth.cf.ford.com.cn/api/dsl/useraccount/v1/userexists/lincoln/{value}");
        const parsleyConfig =  {
            trigger: 'focusout',
        };
        $('input').parsley(parsleyConfig);
</code><pre> 
