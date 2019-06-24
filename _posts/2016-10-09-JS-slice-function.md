---
layout:     post   				    # 使用的布局（不需要改）
title:      JavaScript slice() 				# 标题 
subtitle:    #副标题
date:       2016-10-09 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
<h1><a id="JavaScript_slice_1"></a>JavaScript slice()</h1>
<pre><code class="language-js"><span class="hljs-keyword">return</span> [
        ...state.slice(<span class="hljs-number">0</span>, action.index),
        <span class="hljs-built_in">Object</span>.assign({}, state[action.index], {
          completed: <span class="hljs-literal">true</span>
        }),
        ...state.slice(action.index + <span class="hljs-number">1</span>)
      ]
</code></pre>
<h2><a id="reduxreducer_13"></a>(以上是redux的reducer中从一个原数组获取且改变值但不改变原数组的示例）</h2>
<h2><a id="_15"></a>定义和用法</h2>
<p>slice() 方法可从已有的数组中返回选定的元素。</p>
<h3><a id="_19"></a>语法</h3>
<pre><code>arrayObject.slice(start,end)
</code></pre>
<p>|  参数 |  描述 |<br>
| start |  必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。 |<br>
| end |  可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。 |</p>
<h3><a id="_29"></a>返回值</h3>
<p>返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。</p>
<h3><a id="_33"></a>说明</h3>
<p>请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。</p>
<h2><a id="_37"></a>提示和注释</h2>
<p>注释：您可使用负值从数组的尾部选取元素。</p>
<p>注释：如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。</p>
<h2><a id="_43"></a>实例</h2>
<h3><a id="_1_45"></a>例子 1</h3>
<p>在本例中，我们将创建一个新数组，然后显示从其中选取的元素：<br>
<pre><code>
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr + "<br />")
document.write(arr.slice(1) + "<br />")
document.write(arr)

</script>

</code></pre>
<p>输出：</p>
<pre><code>George,John,Thomas
John,Thomas
George,John,Thomas
</code></pre>
<h3><a id="_2_75"></a>例子 2</h3>
<p>在本例中，我们将创建一个新数组，然后显示从其中选取的元素：<br>
<pre><code>
<script type="text/javascript">

var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"

document.write(arr + "<br />")
document.write(arr.slice(2,4) + "<br />")
document.write(arr)

</script>
</code></pre>
<p>输出：</p>
<pre><code>George,John,Thomas,James,Adrew,Martin
Thomas,James
George,John,Thomas,James,Adrew,Martin
</code></pre>
