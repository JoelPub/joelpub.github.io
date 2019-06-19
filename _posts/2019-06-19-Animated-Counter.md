---
layout:     post   				    # 使用的布局（不需要改）
title:      Animated Counter on Scroll			# 标题 
subtitle:   数字滚动   #副标题
date:       2019-06-19 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---

<a href="https://codepen.io/anon/pen/Wqoemz">Animated Counter on Scroll</a>


<pre><code>

<div id="counter">
    <div class="counter-value" data-count="300">0</div>
</div>

      $({
        countNum: 0
      }).animate({
          countNum: 30
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $('.counter-value').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('.counter-value').text(this.countNum);
            //alert('finished');
          }

        });

</code></pre>
