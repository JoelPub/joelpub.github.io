---
layout:     post   				    # 使用的布局（不需要改）
title:      Object.assign 				# 标题 
subtitle:     #副标题
date:       2016-10-07 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---
<h1><a id="Objectassign_1"></a>Object.assign</h1>
<p><a href="http://www.tuicool.com/articles/2eAZVfn">http://www.tuicool.com/articles/2eAZVfn</a></p>
<h1><a id="Objectassign_5"></a>探索Object.assign</h1>
<p>时间 2016-06-13 06:50:45 <a href="http://www.tuicool.com/sites/qyiUZ3N">杨二小</a>&lt;i&gt;原文&lt;/i&gt;<a href="http://zerosoul.github.io/2016/05/25/explore-object-assign/?utm_source=tuicool&amp;utm_medium=referral">http://zerosoul.github.io/2016/05/25/explore-object-assign/</a> 主题<a href="http://www.tuicool.com/topics/11060004">JavaScript</a></p>
<p>最近在重构以前写过的 <strong>javascript</strong> 代码，目的是为了去掉对 <strong>jQuery</strong> 的依赖。其中有多处用到了 <a href="http://api.jquery.com/jQuery.extend/"><code>$.extend()</code></a> 方法，自然而然会想到这么一个问题：如何用自己的方式来实现？</p>
<h2><a id="_11"></a>思路</h2>
<p>首先，定义函数的功能： 传入多个对象，将多个对象的内容合并到第一个对象中，最后返回合并后的对象，即参数中的第一个对象。 这样的定义是否似曾相识？没错，和ES6中的新特性 <code>Object.assign()</code> 几乎一模一样。所以，可以从探索 <code>Object.assign()</code> 开始。</p>
<h2><a id="Objectassign_15"></a>探索Object.assign()</h2>
<p>Object.assign(target, …sources)</p>
<h2><a id="_19"></a>使用场景</h2>
<h3><a id="_21"></a>拷贝对象</h3>
<p>只需要传入的第一个参数是空对象即可：</p>
<pre><code>var obj = { foo: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { foo: 1 }
</code></pre>
<h3><a id="_31"></a>合并对象</h3>
<p>注意第一个传参将会被改变，所以如果不想改变第一个有值参数，可以传入一个空对象：</p>
<pre><code>var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意第一个参数，即o1有了变化。
</code></pre>
<h2><a id="_45"></a>注意事项</h2>
<ul>
<li>在 <code>Object.assign()</code> 中，原型属性和非可枚举属性不会被拷贝。（<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">两种属性的解释</a> ）</li>
</ul>
<pre><code>var obj = Object.create({ foo: 1 }, { // foo是obj原型链上的属性
  bar: {
    value: 2  // bar 是非可枚举（non-enumerable）属性.
  },
  baz: {
    value: 3,
    enumerable: true  // baz是可枚举属性.
  }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }，只拷贝了baz属性
</code></pre>
<ul>
<li>元类型会被转化为对象</li>
</ul>
<pre><code>var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, null, v2, undefined, v3);
//元类型里面的字符串被转化为字符数组，null和undefined被忽略
console.log(obj); // { &quot;0&quot;: &quot;a&quot;, &quot;1&quot;: &quot;b&quot;, &quot;2&quot;: &quot;c&quot; }
</code></pre>
<ul>
<li>异常会抛出，但是已经执行的代码会生效</li>
</ul>
<pre><code>var target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: false
}); // target.foo 为只读属性

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// 会抛出异常：TypeError: &quot;foo&quot; is read-only，但是之前的赋值操作已经生效。

console.log(target.bar);  // 2
console.log(target.foo2); // 3
console.log(target.foo);  // 1, 异常就是在这儿发生的，所以还是1
console.log(target.foo3); // undefined
console.log(target.baz);  // undefined
</code></pre>
<h2><a id="pollyfill_94"></a>pollyfill</h2>
<p>上面是对 <code>Object.assign()</code> 概念层面的探索，由于要考虑旧版本浏览器兼容性问题，需要写一个 <strong>pollyfill</strong> ，其实这才是重头戏。不过，只有理解了 <code>Object.assign()</code> 都干了些什么，才有可能写出来：</p>
<pre><code>(function () {
  if (typeof Object.assign != 'function') {
      Object.assign = function (target) {
      //第一个传参不能是undefined和null，因为它们不能被转为对象
        if (target === undefined || target === null) {
          throw new TypeError('Can not convert undefined or null to object');
        }
      //使用Object对象化target
        var output = Object(target);
        for (var idx = 1,l=arguments.length; index &lt; l; idx++) {
          var source = arguments[idx];
          //后续传参也需要判断undefined和null
          if (source !== undefined &amp;&amp; source !== null) {
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                output[key] = source[key];
              }
            }
          }
        }
        return output;
      };
}
})();
</code></pre>
