---
layout:     post   				    # 使用的布局（不需要改）
title:      autoplay自动播放策略				# 标题 
subtitle:   (html5 video play)   #副标题
date:       2019-04-04 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
<h1><a id="autoplay_15"></a>autoplay自动播放策略</h1>
<a href="https://www.jianshu.com/p/c3c6944eed5a/">https://www.jianshu.com/p/c3c6944eed5a</a>
<ol>
<li>chrome66以及更高的版本不允许媒体自动播放。</li>
<li><a href="https://www.apple.com/cn/safari/">safari</a> 阻止自动播放视频。&lt;br&gt;<br>
safari阻止自动播放</li>
<li>出于用户体验，节省流量的考虑，移动端禁止自动播放</li>
<li><a href="https://dev.opera.com/blog/autoplay-go-away/">opera</a> 阻止autoplay</li>
</ol>
<p><strong>解决策略参考：</strong>&lt;br&gt;</p>
<ol>
<li>
<p><a href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes">Chrome autoplay-policy</a>&lt;br&gt;</p>
</li>
<li>
<p><a href="https://www.apple.com/cn/safari/">safari</a>&lt;br&gt;</p>
</li>
<li>
<p><a href="https://dev.opera.com/blog/autoplay-go-away/">opera autoplay</a></p>
</li>
</ol>
<ul>
<li>自动播放策略：
<ol>
<li>静音自动播放总是被允许的。</li>
<li>用户已经产生交互（点击触摸滑动等…） ，这里的交互指的是只要用户在页面中用有了操作，而不是说一定要用户点击audio或者video去播放</li>
<li>使用iframe授权自动播放</li>
<li><strong>chrome提高MEI指数（?）</strong></li>
<li>移动端用户将网站添加到home screen(没试过)</li>
</ol>
</li>
</ul>
<h2><a id="video_38"></a>一、视频（video）</h2>
<ul>
<li>静音的自动播放总是被允许的。&lt;br&gt;<br>
经过测试，静音的视频元素可以自动播放。音频元素添加muted后也无法自动播放。&lt;br&gt;<br>
所以video元素可通过添加muted属性使其自动播放，然后提示用户打开声音。</li>
</ul>
<h2><a id="audio_44"></a>二、音频（audio）</h2>
<ul>
<li>使用Web Audio API播放声音。&lt;br&gt;</li>
</ul>
<p>经过查阅发现这是一个非常强大的处理声音的API，可以实现很多的声音效果（扩音，缩音，淡入淡出等），有待学习。&lt;br&gt;</p>
<p>兼容情况：&lt;br&gt;<br>
Web Audio API兼容情况</p>
<h2><a id="audiovideo_53"></a>三、音视频（audio+video）</h2>
<ol>
<li>在用户交互(点击，触摸滑动等操作)后，使用.paly()方法播放。&lt;br&gt;<br>
注意：用户没有产生交互前调用play()会抛出异常</li>
</ol>
<ul>
<li>使用iframe允许自动播放。&lt;br&gt;<br>
<code>&lt;iframe src = &quot;http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201808/10467.wav&quot; allow = &quot;autoplay&quot;/&gt;</code></li>
</ul>
<h3><a id="_61"></a>四、浏览器/参数设置</h3>
<ol>
<li>chrome</li>
</ol>
<pre><code>- &amp;#x8BBE;&amp;#x7F6E;&amp;#x5F00;&amp;#x53D1;&amp;#x8005;&amp;#x5F00;&amp;#x5173;&amp;#xFF0C;&amp;#x66F4;&amp;#x6539;chrome&amp;#x81EA;&amp;#x52A8;&amp;#x64AD;&amp;#x653E;&amp;#x7B56;&amp;#x7565;&amp;#x3002;
&amp;#x524D;&amp;#x5F80;&amp;#xFF1A;**&lt;span class=&quot;hljs-symbol&quot;&gt;chrome:&lt;/span&gt;/&lt;span class=&quot;hljs-regexp&quot;&gt;/flags/&lt;/span&gt;&lt;span class=&quot;hljs-comment&quot;&gt;#autoplay-policy**&amp;#xFF0C;&amp;#x8BBE;&amp;#x7F6E; **Autoplay policy**&amp;#x5F00;&amp;#x5173;&amp;#x3002;&lt;/span&gt;
</code></pre>
<ol>
<li>safari</li>
</ol>
<pre><code>- [safari&amp;#x5B98;&amp;#x7F51;](&lt;span class=&quot;hljs-symbol&quot;&gt;https:&lt;/span&gt;/&lt;span class=&quot;hljs-regexp&quot;&gt;/www.apple.com/cn&lt;/span&gt;&lt;span class=&quot;hljs-regexp&quot;&gt;/safari/&lt;/span&gt;)&amp;#x63D0;&amp;#x793A;&amp;#xFF1A;&amp;#x53EF;&amp;#x4EE5;&amp;#x8FDB;&amp;#x5165;Safari&amp;#x6D4F;&amp;#x89C8;&amp;#x5668;&amp;#x4E2D;&amp;#x7684;&amp;#x5355;&amp;#x4E2A;&amp;#x7F51;&amp;#x7AD9;&amp;#x8BBE;&amp;#x7F6E;&amp;#xFF0C;&amp;#x542F;&amp;#x7528;&amp;#x5A92;&amp;#x4F53;&amp;#x81EA;&amp;#x52A8;&amp;#x64AD;&amp;#x653E;&amp;#x3002;
</code></pre>
<h2><a id="_76"></a>解决办法：</h2>
<ol>
<li>使用Web Audio API播放声音。</li>
<li>不直接使用autoplay进行自动播放。使用.play()方法播放。&lt;br&gt;<br>
video.play()和audio.play()都返回promise。未禁止的播放完后会resolve，禁止的会reject。&lt;br&gt;<br>
video和audio可以在用户交互（click，touch，tap等）后调用.play()播放,video还可以静音后播放。</li>
</ol>
<pre><code>&lt;span class=&quot;hljs-comment&quot;&gt;/**video.play()&amp;#x8FD4;&amp;#x56DE;&amp;#x4E00;&amp;#x4E2A;promise&amp;#xFF0C;&amp;#x672A;&amp;#x7981;&amp;#x6B62;&amp;#x5219;resolve&amp;#xFF0C;&amp;#x7981;&amp;#x6B62;&amp;#x5219;reject**/&lt;/span&gt;
&lt;span class=&quot;hljs-keyword&quot;&gt;let&lt;/span&gt; video = &lt;span class=&quot;hljs-built_in&quot;&gt;document&lt;/span&gt;.getElementById(&lt;span class=&quot;hljs-string&quot;&gt;&quot;video&quot;&lt;/span&gt;);
&lt;span class=&quot;hljs-keyword&quot;&gt;let&lt;/span&gt; audio = &lt;span class=&quot;hljs-built_in&quot;&gt;document&lt;/span&gt;.getElementById(&lt;span class=&quot;hljs-string&quot;&gt;&quot;audio&quot;&lt;/span&gt;);
&lt;span class=&quot;hljs-keyword&quot;&gt;let&lt;/span&gt; videoPlay = video.play();
&lt;span class=&quot;hljs-keyword&quot;&gt;let&lt;/span&gt; audioPlay = audio.play();

videoPlay.then(&lt;span class=&quot;hljs-function&quot;&gt;&lt;span class=&quot;hljs-params&quot;&gt;()&lt;/span&gt;=&gt;&lt;/span&gt;{
    &lt;span class=&quot;hljs-built_in&quot;&gt;console&lt;/span&gt;.log(&lt;span class=&quot;hljs-string&quot;&gt;'&amp;#x53EF;&amp;#x4EE5;&amp;#x81EA;&amp;#x52A8;&amp;#x64AD;&amp;#x653E;'&lt;/span&gt;);
}).catch(&lt;span class=&quot;hljs-function&quot;&gt;(&lt;span class=&quot;hljs-params&quot;&gt;err&lt;/span&gt;)=&gt;&lt;/span&gt;{
    &lt;span class=&quot;hljs-built_in&quot;&gt;console&lt;/span&gt;.log(err);
    &lt;span class=&quot;hljs-built_in&quot;&gt;console&lt;/span&gt;.log(&lt;span class=&quot;hljs-string&quot;&gt;&quot;&amp;#x4E0D;&amp;#x5141;&amp;#x8BB8;&amp;#x81EA;&amp;#x52A8;&amp;#x64AD;&amp;#x653E;&quot;&lt;/span&gt;);

    &lt;span class=&quot;hljs-comment&quot;&gt;//&amp;#x89C6;&amp;#x9891;&amp;#x5143;&amp;#x7D20;&amp;#x53EF;&amp;#x4EE5;&amp;#x9009;&amp;#x62E9;&amp;#x9759;&amp;#x97F3;&amp;#x540E;&amp;#x518D;&amp;#x64AD;&amp;#x653E;,&amp;#x63D0;&amp;#x793A;&amp;#x7528;&amp;#x6237;&amp;#x6253;&amp;#x5F00;&amp;#x58F0;&amp;#x97F3;&lt;/span&gt;
    video.muted=&lt;span class=&quot;hljs-literal&quot;&gt;true&lt;/span&gt;;
    video.play();

    &lt;span class=&quot;hljs-comment&quot;&gt;//&amp;#x4E5F;&amp;#x53EF;&amp;#x4EE5;&amp;#x5728;&amp;#x7528;&amp;#x6237;&amp;#x4EA4;&amp;#x4E92;&amp;#x540E;&amp;#x8C03;&amp;#x7528;.play()&lt;/span&gt;
    &lt;span class=&quot;hljs-comment&quot;&gt;// ...&lt;/span&gt;
});

audioPlay.then(&lt;span class=&quot;hljs-function&quot;&gt;&lt;span class=&quot;hljs-params&quot;&gt;()&lt;/span&gt;=&gt;&lt;/span&gt;{
    &lt;span class=&quot;hljs-built_in&quot;&gt;console&lt;/span&gt;.log(&lt;span class=&quot;hljs-string&quot;&gt;'&amp;#x53EF;&amp;#x4EE5;&amp;#x81EA;&amp;#x52A8;&amp;#x64AD;&amp;#x653E;'&lt;/span&gt;);
}).catch(&lt;span class=&quot;hljs-function&quot;&gt;(&lt;span class=&quot;hljs-params&quot;&gt;err&lt;/span&gt;)=&gt;&lt;/span&gt;{
    &lt;span class=&quot;hljs-built_in&quot;&gt;console&lt;/span&gt;.log(err);
    &lt;span class=&quot;hljs-built_in&quot;&gt;console&lt;/span&gt;.log(&lt;span class=&quot;hljs-string&quot;&gt;&quot;&amp;#x4E0D;&amp;#x5141;&amp;#x8BB8;&amp;#x81EA;&amp;#x52A8;&amp;#x64AD;&amp;#x653E;&quot;&lt;/span&gt;);

    &lt;span class=&quot;hljs-comment&quot;&gt;//&amp;#x97F3;&amp;#x9891;&amp;#x5143;&amp;#x7D20;&amp;#x53EA;&amp;#x5728;&amp;#x7528;&amp;#x6237;&amp;#x4EA4;&amp;#x4E92;&amp;#x540E;&amp;#x8C03;&amp;#x7528;.play(),&lt;/span&gt;
    &lt;span class=&quot;hljs-comment&quot;&gt;// ...&lt;/span&gt;
});
</code></pre>
<ol start="3">
<li>android h5 webview&lt;br&gt;<br>
android 4.2 webview添加了是否需要用户手势去触发音视频的播放开关，默认为true(需要用户手势触发)。&lt;br&gt;<br>
将webview的这个开关设置为不需要用户触发：&lt;br&gt;<br>
<code>mWebview.getSettings().setMediaPlaybackRequiresUserGesture(false);</code></li>
<li>IOS h5 webview&lt;br&gt;<br>
IOS APP给webview设置mediaPlaybackRequiresUserAction后可以允许自动播放.</li>
</ol>
