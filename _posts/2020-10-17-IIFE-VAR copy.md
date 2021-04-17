---
layout:     post   				    # 使用的布局（不需要改）
title:      Asynchronous setInterval 				# 标题 
subtitle:   promise 循环   #副标题
date:       2019-10-03 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---

# Asynchronous setInterval

[Asynchronous setInterval](https://dev.to/jsmccrumb/asynchronous-setinterval-4j69) 
                  <time>2019年10月3日</time>

                ・1 min read

I recently wanted to kick of a (potentially) long running
 query against a database, and continue to fire it off 30 seconds after
it finished.

Sounds like an easy case of setInterval, but I had my doubts about whether it would work with async (spoiler: it doesn't):<br>

```
<span class="nx">setInterval</span><span class="p">(</span><span class="k">async</span> <span class="p">()</span> <span class="o">=></span> <span class="p">{</span>
  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">'</span><span class="s1">start</span><span class="dl">'</span><span class="p">);</span>
  <span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">)</span> <span class="o">=></span> <span class="p">{</span>
    <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">resolve</span><span class="p">(</span><span class="dl">'</span><span class="s1">all done</span><span class="dl">'</span><span class="p">),</span> <span class="mi">3000</span><span class="p">);</span>
  <span class="p">});</span>
  <span class="k">await</span> <span class="nx">promise</span><span class="p">;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">'</span><span class="s1">end</span><span class="dl">'</span><span class="p">);</span>
<span class="p">},</span> <span class="mi">1000</span><span class="p">);</span>
```

Not surprising, but disappointingly, it pops out a number of starts before the first end.

And because I might want to do this again one day, decided to write up how I got around it:<br>

```
<span class="kd">const</span> <span class="nx">asyncIntervals</span> <span class="o">=</span> <span class="p">[];</span>

<span class="kd">const</span> <span class="nx">runAsyncInterval</span> <span class="o">=</span> <span class="k">async</span> <span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">intervalIndex</span><span class="p">)</span> <span class="o">=></span> <span class="p">{</span>
  <span class="k">await</span> <span class="nx">cb</span><span class="p">();</span>
  <span class="k">if</span> <span class="p">(</span><span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">])</span> <span class="p">{</span>
    <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=></span> <span class="nx">runAsyncInterval</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">intervalIndex</span><span class="p">),</span> <span class="nx">interval</span><span class="p">);</span>
  <span class="p">}</span>
<span class="p">};</span>

<span class="kd">const</span> <span class="nx">setAsyncInterval</span> <span class="o">=</span> <span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">interval</span><span class="p">)</span> <span class="o">=></span> <span class="p">{</span>
  <span class="k">if</span> <span class="p">(</span><span class="nx">cb</span> <span class="o">&&</span> <span class="k">typeof</span> <span class="nx">cb</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">{</span>
    <span class="kd">const</span> <span class="nx">intervalIndex</span> <span class="o">=</span> <span class="nx">asyncIntervals</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
    <span class="nx">asyncIntervals</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
    <span class="nx">runAsyncInterval</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">intervalIndex</span><span class="p">);</span>
    <span class="k">return</span> <span class="nx">intervalIndex</span><span class="p">;</span>
  <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
    <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="dl">'</span><span class="s1">Callback must be a function</span><span class="dl">'</span><span class="p">);</span>
  <span class="p">}</span>
<span class="p">};</span>

<span class="kd">const</span> <span class="nx">clearAsyncInterval</span> <span class="o">=</span> <span class="p">(</span><span class="nx">intervalIndex</span><span class="p">)</span> <span class="o">=></span> <span class="p">{</span>
  <span class="k">if</span> <span class="p">(</span><span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">])</span> <span class="p">{</span>
    <span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">]</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
  <span class="p">}</span>
<span class="p">};</span>
```

Then its just a matter of:<br>

```
<span class="nx">setAsyncInterval</span><span class="p">(</span><span class="k">async</span> <span class="p">()</span> <span class="o">=></span> <span class="p">{</span>
  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">'</span><span class="s1">start</span><span class="dl">'</span><span class="p">);</span>
  <span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">)</span> <span class="o">=></span> <span class="p">{</span>
    <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">resolve</span><span class="p">(</span><span class="dl">'</span><span class="s1">all done</span><span class="dl">'</span><span class="p">),</span> <span class="mi">3000</span><span class="p">);</span>
  <span class="p">});</span>
  <span class="k">await</span> <span class="nx">promise</span><span class="p">;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">'</span><span class="s1">end</span><span class="dl">'</span><span class="p">);</span>
<span class="p">},</span> <span class="mi">1000</span><span class="p">);</span>
```

And if you are tired of it:<br>

```
<span class="nx">clearAsyncInterval</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="c1">// or whatever the return was from setAsyncInterval</span>
```

Anyways... if you ever find yourself wanting to set an interval that
waits for an async function to finish its awaits (as opposed to running
as soon as the async function returns its promise), now you know.

## Discussion (1)

<details> [tinnkrit](https://dev.to/tinnkrit)

  •

[<time>Apr 20 '20</time>](https://dev.to/tinnkrit/comment/o131)

* [Copy link](https://dev.to/tinnkrit/comment/o131)
* [Hide](#)

Thank you for sharing your technique and it works well. I've improved your code a little bit.

_setAsyncInterval_<br>

```
<span class="o">-</span> <span class="nx">asyncIntervals</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span>
<span class="o">+</span> <span class="nx">asyncIntervals</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="na">run</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span> <span class="na">id</span><span class="p">:</span> <span class="mi">0</span><span class="p">})</span>
```

_runAsyncInterval_<br>

```
<span class="o">-</span> <span class="k">if</span> <span class="p">(</span><span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">])</span> <span class="p">{</span>
<span class="o">-</span>    <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=></span> <span class="nx">runAsyncInterval</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">intervalIndex</span><span class="p">),</span> <span class="nx">interval</span><span class="p">);</span>
<span class="o">+</span> <span class="k">if</span> <span class="p">(</span><span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">].</span><span class="nx">run</span><span class="p">)</span> <span class="p">{</span>
<span class="o">+</span>    <span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">].</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=></span> <span class="nx">runAsyncInterval</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">intervalIndex</span><span class="p">),</span> <span class="nx">interval</span><span class="p">)</span>
```

_clearAsyncInterval_<br>

```
<span class="o">-</span> <span class="k">if</span> <span class="p">(</span><span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">])</span> <span class="p">{</span>
<span class="o">-</span>    <span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">]</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<span class="o">+</span> <span class="k">if</span> <span class="p">(</span><span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">].</span><span class="nx">run</span><span class="p">)</span> <span class="p">{</span>
<span class="o">+</span>     <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">].</span><span class="nx">id</span><span class="p">)</span>
<span class="o">+</span>     <span class="nx">asyncIntervals</span><span class="p">[</span><span class="nx">intervalIndex</span><span class="p">].</span><span class="nx">run</span> <span class="o">=</span> <span class="kc">false</span>
```

Hope this help :)
[<svg></svg> Reply](#jsmccrumbasynchronous-setinterval-4j69commentsnewo131)</details> [Code of Conduct](https://dev.to/code-of-conduct) • [Report abuse](https://dev.to/report-abuse)

## Read next

[**How to learn react.**

 Ashif Khan - <time>Apr 6</time>](https://dev.to/ashifkhan/how-to-learn-react-3d83) [**[V8 Deep Dives] Random Thoughts on Math.random()**

 Andrey Pechkurov - <time>Apr 5</time>](https://dev.to/puzpuzpuz/v8-deep-dives-random-thoughts-on-math-random-2ci4) [**5 Key Lessons React Tutorials Don't Teach**

 Reed Barger - <time>Apr 14</time>](https://dev.to/reedbarger/5-key-lessons-react-tutorials-don-t-teach-5pb) [**Why you don't need every CSS pseudo-selector in Tailwind CSS**

 Nikolaus Rademacher - <time>Apr 5</time>](https://dev.to/wheelmaker24/why-you-don-t-need-every-css-pseudo-selector-in-tailwind-css-3kn1)
[Home](https://dev.to/) [Listings](https://dev.to/listings) [Podcasts](https://dev.to/pod) [Videos](https://dev.to/videos) [Tags](https://dev.to/tags) [Code of Conduct](https://dev.to/code-of-conduct) [FAQ](https://dev.to/faq) [DEV Shop](https://shop.dev.to/) [Sponsors](https://dev.to/sponsors) [About](https://dev.to/about) [Privacy Policy](https://dev.to/privacy) [Terms of use](https://dev.to/terms) [Contact](https://dev.to/contact) [Sign In/Up](https://dev.to/enter) [<svg>  </svg>](https://twitter.com/thepracticaldev) [<svg>  </svg>](https://facebook.com/thepracticaldev) [<svg>  </svg>](https://github.com/thepracticaldev) [<svg>  </svg>](https://instagram.com/thepracticaldev) [<svg>  </svg>](https://twitch.com/thepracticaldev)

***

[DEV Community](https://dev.to/) – A constructive and inclusive social network for software developers. With you every step of your journey.

Built on [Forem](https://www.forem.com/) — the [open source](https://dev.to/t/opensource) software that powers [DEV](https://dev.to/) and other inclusive communities.

Made with love and [Ruby on Rails](https://dev.to/t/rails). DEV Community © 2016 - 2021.
[<svg>   </svg>](https://www.forem.com/) ![Sloan, the sloth mascot](/img/blog/AsynchronousSetInterval_files/wmv3mtusjwb3r13d5h2f.webp)

![DEV Community](/img/blog/AsynchronousSetInterval_files/rainbowdev.webp)

We're a place where coders share, stay up-to-date and grow their careers.

[Log in](https://dev.to/enter) [Create new account](https://dev.to/enter?state=new-user)

We strive for transparency and don't collect excess data.
