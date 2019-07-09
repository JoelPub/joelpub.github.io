---
layout:     post   				    # 使用的布局（不需要改）
title:      Es6 Arrow Func 				# 标题 
subtitle:   es6 箭头函数 #副标题
date:       2016-09-22 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---
<h1><a id="es6__1"></a>es6 箭头函数</h1>
<p><a href="http://www.infoq.com/cn/articles/es6-in-depth-arrow-functions">http://www.infoq.com/cn/articles/es6-in-depth-arrow-functions</a></p>
<h1><a id="ES6_Arrow_Functions_5"></a>深入浅出ES6（七）：箭头函数 Arrow Functions</h1>
<blockquote>
<p>译者按：ECMAScript 6已经正式发布了，作为它最重要的方言，Javascript也即将迎来语法上的重大变革，InfoQ特开设&quot;<a href="http://www.infoq.com/cn/es6-in-depth/">深入浅出ES6</a>&quot;专栏，来看一下ES6将给我们带来哪些新内容。本专栏文章来自<a href="https://hacks.mozilla.org/category/es6-in-depth/">Mozilla Web开发者博客</a>，由作者授权翻译并发布。</p>
</blockquote>
<p>箭头符号在JavaScript诞生时就已经存在，当初第一个JavaScript教程曾建议在HTML注释内包裹行内脚本，这样可以避免不支持JS的浏览器误将JS代码显示为文本。你会写这样的代码：</p>
<pre><code class="language-markup">    &lt;script language=&quot;javascript&quot;&gt;
    &lt;!--
      document.bgColor = &quot;brown&quot;;  // red
    // --&gt;
    &lt;/script&gt;
</code></pre>
<p>老式浏览器会将这段代码解析为两个不支持的标签和一条注释，只有新式浏览器才能识别出其中的JS代码。</p>
<p>为了支持这种奇怪的hack方式，浏览器中的JavaScript引擎将 <code>&lt;!--</code>这四个字符解析为单行注释的起始部分，我没开玩笑，这自始至终就是语言的一部分，直到现在仍然有效，这种注释符号不仅出现 <code>&lt;script&gt;</code>标签后的首行，在JS代码的每个角落你都有可能见到它，甚至在Node中也是如此。</p>
<p>碰巧，<a href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-html-like-comments">这种注释风格</a>首次在ES6中被标准化了，但在新标准中箭头被用来做其它事情。</p>
<p>箭头序列 <code>--&gt;</code>同样是单行注释的一部分。古怪的是，在HTML中 <code>--&gt;</code>之前的字符是注释的一部分，而在JS中 <code>--&gt;</code>之后的部分才是注释。</p>
<p>你一定感到陌生的是，只有当箭头在行首时才会注释当前行。这是因为在其它上下文中， <code>--&gt;</code>是一个JS运算符：&quot;趋向于&quot;运算符！</p>
<pre><code class="language-javascript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">countdown</span>(<span class="hljs-params">n</span>) </span>{
      <span class="hljs-keyword">while</span> (n --&gt; <span class="hljs-number">0</span>)  <span class="hljs-comment">// "n goes to zero"</span>
        alert(n);
      blastoff();
    }
</code></pre>
<p>上面这段代码<a href="http://codepen.io/anon/pen/oXZaBY?editors=001">可以正常运行</a>，循环会一直重复直到 <code>n</code>趋于0，这当然不是ES6中的新特性，它只不过是将两个你早已熟悉的特性通过一些误导性的手段结合在一起。你能理解么？通常来说，类似这种谜团都可以在<a href="http://stackoverflow.com/questions/1642028/what-is-the-name-of-the-operator">Stack Overflow</a>上找到答案。</p>
<p>当然，同样地，小于等于操作符 <code>&lt;=</code>也形似箭头，你可以在JS代码、隐藏的图片样式中找到更多类似的箭头，但是我们就不继续寻找了，你应该注意到我们漏掉了一种特殊的箭头。</p>
<p><code>=&gt;</code>到底是什么？我们今天就来一探究竟。</p>
<p>首先，我们谈论一些有关函数的事情。</p>
<h2><a id="_58"></a>函数表达式无处不在</h2>
<p>JavaScript中有一个有趣的特性，无论何时，当你需要一个函数时，你都可以在想添加的地方输入这个函数。</p>
<p>举个例子，假设你尝试告诉浏览器用户点击一个特定按钮后的行为，你会这样写：</p>
<pre><code class="language-javascript">    $(<span class="hljs-string">"#confetti-btn"</span>).click(
</code></pre>
<p>jQuery的 <code>.click()</code>方法接受一个参数：一个函数。没问题，你可以在这里输入一个函数：</p>
<pre><code class="language-javascript">    $(<span class="hljs-string">"#confetti-btn"</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{
      playTrumpet();
      fireConfettiCannon();
    });
</code></pre>
<p>对 于现在的我们来说，写出这样的代码相当自然，而回忆起在这种编程方式流行之前，这种写法相对陌生一些，许多语言中都没有这种特性。1958年，Lisp首 先支持函数表达式，也支持调用lambda函数，而C++，Python、C#以及Java在随后的多年中一直不支持这样的特性。</p>
<p>现在截然不同，所有的四种语言都已支持lambda函数，更新出现的语言普遍都支持内建的lambda函数。我们必须要感谢JavaScript和早期的JavaScript程序员，他们勇敢地构建了重度依赖lambda函数的库，让这种特性被广泛接受。</p>
<p>令人伤感的是，随后在所有我提及的语言中，只有JavaScript的lambda的语法最终变得冗长乏味。</p>
<pre><code class="language-javascript">    // 六种语言中的简单函数示例
    function (a) { return a &gt; 0; } // JS
    [](int a) { return a &gt; 0; }  // C++
    (lambda (a) (&gt; a 0))  ;; Lisp
    lambda a: a &gt; 0  # Python
    a =&gt; a &gt; 0  // C#
    a -&gt; a &gt; 0  // Java
</code></pre>
<h2><a id="_93"></a>箭袋中的新羽</h2>
<p>ES6中引入了一种编写函数的新语法</p>
<pre><code class="language-javascript">    <span class="hljs-comment">// ES5</span>
    <span class="hljs-keyword">var</span> selected = allJobs.filter(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">job</span>) </span>{
      <span class="hljs-keyword">return</span> job.isSelected();
    });
    <span class="hljs-comment">// ES6</span>
    <span class="hljs-keyword">var</span> selected = allJobs.filter(job =&gt; job.isSelected());
</code></pre>
<p>当你只需要一个只有一个参数的简单函数时，可以使用新标准中的箭头函数，它的语法非常简单： 你无需输入 <code>function</code>和 <code>return</code>，一些小括号、大括号以及分号也可以省略。</p>
<p>（我个人对于这个特性非常感激，不再需要输入 <code>function</code>这几个字符对我而言至关重要，因为我总是不可避免地错误写成 <code>functoin</code>，然后我就不得不回过头改正它。）</p>
<p>如果要写一个接受多重参数（也可能没有参数，或者是<a href="http://www.infoq.com/cn/articles/es6-in-depth-rest-parameters-and-defaults">不定参数、默认参数</a>、<a href="http://www.infoq.com/cn/articles/es6-in-depth-destructuring">参数解构</a>）的函数，你需要用小括号包裹参数list。</p>
<pre><code class="language-javascript">    <span class="hljs-comment">// ES5</span>
    <span class="hljs-keyword">var</span> total = values.reduce(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">a, b</span>) </span>{
      <span class="hljs-keyword">return</span> a + b;
    }, <span class="hljs-number">0</span>);
    <span class="hljs-comment">// ES6</span>
    <span class="hljs-keyword">var</span> total = values.reduce((a, b) =&gt; a + b, <span class="hljs-number">0</span>);
</code></pre>
<p>我认为这看起来酷毙了。</p>
<p>正如你使用类似<a href="http://underscorejs.org/">Underscore.js</a>和<a href="https://facebook.github.io/immutable-js/">Immutable.js</a>这样的库提供的函数工具，箭头函数运行起来同样美不可言。事实上，<a href="https://facebook.github.io/immutable-js/docs/#/">Immutable的文档</a>中的示例全都由ES6写成，其中的许多特性已经用上了箭头函数。</p>
<p>那么不是非常函数化的情况又如何呢？除表达式外，箭头函数还可以包含一个块语句。回想一下我们之前的示例：</p>
<pre><code class="language-javascript">    <span class="hljs-comment">// ES5</span>
    $(<span class="hljs-string">"#confetti-btn"</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{
      playTrumpet();
      fireConfettiCannon();
    });
</code></pre>
<p>这是它们在ES6中看起来的样子：</p>
<pre><code class="language-javascript">    <span class="hljs-comment">// ES6</span>
    $(<span class="hljs-string">"#confetti-btn"</span>).click(event =&gt; {
      playTrumpet();
      fireConfettiCannon();
    });
</code></pre>
<p>这是一个微小的改进，对于使用了<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a>的代码来说箭头函数的效果可以变得更加戏剧性， <code>}).then(function (result) {</code> 这样的一行代码可以堆积起来。</p>
<p>注意，使用了块语句的箭头函数不会自动返回值，你需要使用 <code>return</code>语句将所需值返回。</p>
<p><em>小提示：当使用箭头函数创建普通对象时，你总是需要将对象包裹在小括号里。</em></p>
<pre><code class="language-javascript">    <span class="hljs-comment">// 为与你玩耍的每一个小狗创建一个新的空对象</span>
    <span class="hljs-keyword">var</span> chewToys = puppies.map(puppy =&gt; {});   <span class="hljs-comment">// 这样写会报Bug！</span>
    <span class="hljs-keyword">var</span> chewToys = puppies.map(puppy =&gt; ({})); <span class="hljs-comment">//</span>
</code></pre>
<p>用小括号包裹空对象就可以了。</p>
<p>不幸的是，一个空对象 <code>{}</code>和一个空的块 <code>{}</code>看起来完全一样。ES6中的规则是，紧随箭头的{被解析为块的开始，而不是对象的开始。因此， <code>puppy =&gt; {}</code>这段代码就被解析为没有任何行为并返回 <code>undefined</code>的箭头函数。</p>
<p>更令人困惑的是，你的JavaScript引擎会将类似 <code>{key: value}</code>的对象字面量解析为一个包含标记语句的块。幸运的是， <code>{</code>是唯一一个有歧义的字符，所以用小括号包裹对象字面量是唯一一个你需要牢记的小窍门。</p>
<h2><a id="this_163"></a>这个函数的this值是什么呢？</h2>
<p>普通 <code>function</code>函数和箭头函数的行为有一个微妙的区别， <strong>箭头函数没有它自己的 <code>this</code> 值</strong>，箭头函数内的 <code>this</code>值继承自外围作用域。</p>
<p>在我们尝试说明这个问题前，先一起回顾一下。</p>
<p>JavaScript中的 <code>this</code>是如何工作的？它的值从哪里获取？<a href="http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work">这些问题的答案可都不简单</a>，如果你对此倍感清晰，一定因为你长时间以来一直在处理类似的问题。</p>
<p>这个问题经常出现的其中一个原因是，无论是否需要， <code>function</code>函数总会自动接收一个 <code>this</code>值。你是否写过这样的hack代码：</p>
<pre><code class="language-javascript">    {
      ...
      addAll: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addAll</span>(<span class="hljs-params">pieces</span>) </span>{
        <span class="hljs-keyword">var</span> self = <span class="hljs-keyword">this</span>;
        _.each(pieces, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">piece</span>) </span>{
          self.add(piece);
        });
      },
      ...
    }
</code></pre>
<p>在这里，你希望在内层函数里写的是 <code>this.add(piece)</code>，不幸的是，内层函数并未从外层函数继承 <code>this</code>的值。在内层函数里， <code>this</code>会是 <code>window</code>或 <code>undefined</code>，临时变量 <code>self</code>用来将外部的 <code>this</code>值导入内部函数。（另一种方式是在内部函数上执行 <code>.bind(this)</code>，两种方法都不甚美观。）</p>
<p>在ES6中，不需要再hack <code>this</code>了，但你需要遵循以下规则：</p>
<ul>
<li>通过 <code>object.method()</code>语法调用的方法使用非箭头函数定义，这些函数需要从调用者的作用域中获取一个有意义的 <code>this</code>值。</li>
<li>其它情况全都使用箭头函数。</li>
</ul>
<pre><code class="language-javascript">    <span class="hljs-comment">// ES6</span>
    {
      ...
      addAll: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addAll</span>(<span class="hljs-params">pieces</span>) </span>{
        _.each(pieces, piece =&gt; <span class="hljs-keyword">this</span>.add(piece));
      },
      ...
    }
</code></pre>
<p>在ES6的版本中，注意 <code>addAll</code>方法从它的调用者处获取了 <code>this</code>值，内部函数是一个箭头函数，所以它继承了外围作用域的 <code>this</code>值。</p>
<p>超赞的是，在ES6中你可以用更简洁的方式编写对象字面量中的方法，所以上面这段代码可以简化成：</p>
<pre><code class="language-javascript">    <span class="hljs-comment">// ES6的方法语法</span>
    {
      ...
      addAll(pieces) {
        _.each(pieces, piece =&gt; <span class="hljs-keyword">this</span>.add(piece));
      },
      ...
    }
</code></pre>
<p>在方法和箭头函数之间，我再也不会错写 <code>functoin</code>了，这真是一个绝妙的设计思想！</p>
<p>箭头函数与非箭头函数间还有一个细微的区别，箭头函数不会获取它们自己的 <code>arguments</code>对象。诚然，在ES6中，你可能更多地会使用不定参数和默认参数值这些新特性。</p>
<h2><a id="_223"></a>借助箭头函数洞悉计算机科学的风尘往事</h2>
<p>我们已经讨论了许多箭头函数的实际用例，它还有一种可能的使用方法：将ES6箭头函数作为一个学习工具，来深入挖掘计算的本质，是否实用，终将取决于你自己。</p>
<p>1936年，Alonzo Church和Alan Turing各自开发了强大的计算数学模型，图灵将他的模型称为a-machines，但是每一个人都称其为图灵机。Church写的是函数模型，他的模型被称为<a href="https://zh.wikipedia.org/wiki/%CE%9B%E6%BC%94%E7%AE%97">lambda演算</a>（<a href="https://en.wikipedia.org/wiki/Lambda_calculus">λ-calculus</a>）。这一成果也被Lisp借鉴，用 <code>LAMBDA</code>来指示函数，这也是为何我们现在将函数表达式称为lambda函数。</p>
<p>但什么是lambda演算呢？&quot;计算模型&quot;又意味着什么呢？</p>
<p>用 几句话解释清楚很难，但是我会努力阐释：lambda演算是第一代编程语言的一种形式，但毕竟存储程序计算机在十几二十年后才诞生，所以它原本不是为编程 语言设计的，而是为了表达任意你想到的计算问题设计的一种极度简化的纯数学思想的语言。Church希望用这个模型来证明普遍意义的计算。</p>
<p>最终他发现，在他的系统中只需要一件东西：函数。</p>
<p>这种声明方式无与伦比，不借助对象、数组、数字、 <code>if</code>语句、 <code>while</code>循环、分号、赋值、逻辑运算符甚或是事件循环，只须使用函数就可以从0开始重建JavaScript能实现的每一种计算。</p>
<p>这是用Church的lambda标记写出来的数学家风格的&quot;程序&quot;示例：</p>
<pre><code>    fix = &amp;#x3BB;f.(&amp;#x3BB;x.f(&amp;#x3BB;v.x(x)(v)))(&amp;#x3BB;x.f(&amp;#x3BB;v.x(x)(v)))
</code></pre>
<p>等效的JavaScript函数是这样的：</p>
<pre><code class="language-javascript">    <span class="hljs-keyword">var</span> fix = f =&gt; (x =&gt; f(v =&gt; x(x)(v)))
                   (x =&gt; f(v =&gt; x(x)(v)));
</code></pre>
<p>所以，在JavaScript中实现了一个可以运行的lambda演算，它根植于这门语言中。</p>
<p>Alonzo Church和lambda演算后继研究者们的故事，以及它是如何潜移默化地入驻每一门主流编程语言的，已经远超本文的讨论范围。但是如果你对计算机科学 的奠基感兴趣，或者你只是对一门只用函数就可以做许多类似循环和递归这样的事情的语言倍感兴趣，你可以在一个下雨的午后深入<a href="https://zh.wikipedia.org/wiki/%E9%82%B1%E5%A5%87%E6%95%B0">邱奇数</a>（<a href="https://en.wikipedia.org/wiki/Church_encoding">Church numerals</a>）和<a href="https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%8A%A8%E7%82%B9%E7%BB%84%E5%90%88%E5%AD%90">不动点组合子</a>（<a href="https://en.wikipedia.org/wiki/Fixed-point_combinator#Strict_fixed_point_combinator">Fixed-point combinator</a>），在你的Firefox控制台或<a href="https://developer.mozilla.org/en-US/docs/Tools/Scratchpad">Scratchpad</a>中仔细研究一番。结合ES6的箭头函数以及其它强大的功能，JavaScript称得上是一门探索lambda演算的最好的语言。</p>
<h2><a id="_254"></a>我何时可以使用箭头函数？</h2>
<p>早在2013年，我就在Firefox中实现了ES6箭头函数的功能，Jan de Mooij为其优化加快了执行速度。感谢Tooru Fujisawa以及<a href="https://developer.mozilla.org/zh-CN/profiles/ziyunfei">ziyunfei</a>（译者注：中国开发者，为Mozilla作了许多贡献）后续打的补丁。</p>
<p>微软Edge预览版中也实现了箭头函数的功能，如果你想立即在你的Web项目中使用箭头函数，可以使用<a href="http://babeljs.io/">Babel</a>、<a href="https://github.com/google/traceur-compiler#what-is-traceur">Traceur</a>或<a href="http://www.typescriptlang.org/">TypeScript</a>，这三个工具均已实现相关功能。</p>
