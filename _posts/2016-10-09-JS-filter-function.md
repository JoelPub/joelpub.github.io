---
layout:     post   				    # 使用的布局（不需要改）
title:      js filter() 				# 标题 
subtitle:    #副标题
date:       2016-10-09 				# 时间
author:     转载 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	web							#标签
---
<h1><a id="js_filter_1"></a>js filter()</h1>
<p>ES6 写法：</p>
<pre><code class="language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">selectTodos</span>(<span class="hljs-params">todos, filter</span>) </span>{
  <span class="hljs-keyword">switch</span> (filter) {
    <span class="hljs-keyword">case</span> VisibilityFilters.SHOW_ALL:
      <span class="hljs-keyword">return</span> todos
    <span class="hljs-keyword">case</span> VisibilityFilters.SHOW_COMPLETED:
      <span class="hljs-keyword">return</span> todos.filter(todo =&gt; todo.completed)
    <span class="hljs-keyword">case</span> VisibilityFilters.SHOW_ACTIVE:
      <span class="hljs-keyword">return</span> todos.filter(todo =&gt; !todo.completed)
  }
}
</code></pre>
<p><strong>filter</strong></p>
<p>该filter()方法创建一个新的匹配过滤条件的数组。</p>
<p>不用 filter() 时<br>
<pre><code class="language-js">
var arr = [
  {"name":"apple", "count": 2},
  {"name":"orange", "count": 5},
  {"name":"pear", "count": 3},
  {"name":"orange", "count": 16},
];
  
var newArr = [];
for(var i= 0, l = arr.length; i< l; i++){
  if(arr[i].name === "orange" ){
newArr.push(arr[i]);
}
}
console.log("Filter results:",newArr);
</code></pre>
<p>用了 filter():<br>


<pre><code class="language-js">
var arr = [
  {"name":"apple", "count": 2},
  {"name":"orange", "count": 5},
  {"name":"pear", "count": 3},
  {"name":"orange", "count": 16},
];
  
var newArr = arr.filter(function(item){
  return item.name === "orange";
});
console.log("Filter results:",newArr);
</code></pre>
