---
layout:     post   				    # 使用的布局（不需要改）
title:      Managing jQuery plugin dependency in webpack 				# 标题 
subtitle:   Webpack嵌入jquery   #副标题
date:       2018-06-12 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---




# [Managing jQuery plugin dependency in webpack](https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack)

[Ask Question](https://stackoverflow.com/questions/ask)Asked <time>5 years, 7 months ago</time>Active [2 years, 3 months ago](https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack?lastactivity "2018-06-12 20:49:32Z")Viewed 308k times
This question shows research effort; it is useful and clear 465 This question does not show any research effort; it is unclear or not useful Bookmark this question. Show activity on this post.

I'm using Webpack in my application, in which I create two entry
points - bundle.js for all my JavaScript files/codes, and vendors.js for
 all libraries like jQuery and React. What do I do in order to use
plugins which have jQuery as their dependencies and I want to have them
also in vendors.js? What if those plugins have multiple dependencies?

Currently I'm trying to use this jQuery plugin here - [https://github.com/mbklein/jquery-elastic](https://github.com/mbklein/jquery-elastic). The Webpack documentation mentions [providePlugin](https://webpack.js.org/plugins/provide-plugin/)
and imports-loader. I used providePlugin, but still the jQuery object
is not available. Here is how my webpack.config.js looks like-

```
<span class="hljs-keyword">var</span> webpack = <span class="hljs-built_in">require</span>(<span class="hljs-string">'webpack'</span>);
<span class="hljs-keyword">var</span> bower_dir = __dirname + <span class="hljs-string">'/bower_components'</span>;
<span class="hljs-keyword">var</span> node_dir = __dirname + <span class="hljs-string">'/node_modules'</span>;
<span class="hljs-keyword">var</span> lib_dir = __dirname + <span class="hljs-string">'/public/js/libs'</span>;

<span class="hljs-keyword">var</span> config = {
    <span class="hljs-attr">addVendor</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">name, path</span>) </span>{
        <span class="hljs-built_in">this</span>.resolve.alias[name] = path;
        <span class="hljs-built_in">this</span>.module.noParse.push(<span class="hljs-keyword">new</span> <span class="hljs-built_in">RegExp</span>(path));
    },
    <span class="hljs-attr">plugins</span>: [
        <span class="hljs-keyword">new</span> webpack.ProvidePlugin({
            <span class="hljs-attr">$</span>: <span class="hljs-string">"jquery"</span>,
            <span class="hljs-attr">jquery</span>: <span class="hljs-string">"jQuery"</span>,
            <span class="hljs-string">"window.jQuery"</span>: <span class="hljs-string">"jquery"</span>
        }),
        <span class="hljs-keyword">new</span> webpack.optimize.CommonsChunkPlugin(<span class="hljs-string">'vendors'</span>, <span class="hljs-string">'vendors.js'</span>, <span class="hljs-literal">Infinity</span>)
    ],
    <span class="hljs-attr">entry</span>: {
        <span class="hljs-attr">app</span>: [<span class="hljs-string">'./public/js/main.js'</span>],
        <span class="hljs-attr">vendors</span>: [<span class="hljs-string">'react'</span>,<span class="hljs-string">'jquery'</span>]
    },
    <span class="hljs-attr">resolve</span>: {
        <span class="hljs-attr">alias</span>: {
            <span class="hljs-string">'jquery'</span>: node_dir + <span class="hljs-string">'/jquery/dist/jquery.js'</span>,
            <span class="hljs-string">'jquery.elastic'</span>: lib_dir + <span class="hljs-string">'/jquery.elastic.source.js'</span>
        }
    },
    <span class="hljs-attr">output</span>: {
        <span class="hljs-attr">path</span>: <span class="hljs-string">'./public/js'</span>,
        <span class="hljs-attr">filename</span>: <span class="hljs-string">'bundle.js'</span>
    },
    <span class="hljs-attr">module</span>: {
        <span class="hljs-attr">loaders</span>: [
            { <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.js$/</span>, loader: <span class="hljs-string">'jsx-loader'</span> },
            { <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.jquery.elastic.js$/</span>, loader: <span class="hljs-string">'imports-loader'</span> }
        ]
    }
};
config.addVendor(<span class="hljs-string">'react'</span>, bower_dir + <span class="hljs-string">'/react/react.min.js'</span>);
config.addVendor(<span class="hljs-string">'jquery'</span>, node_dir + <span class="hljs-string">'/jquery/dist/jquery.js'</span>);
config.addVendor(<span class="hljs-string">'jquery.elastic'</span>, lib_dir +<span class="hljs-string">'/jquery.elastic.source.js'</span>);

<span class="hljs-built_in">module</span>.exports = config;
```

But in spite of this, it still throws an error in the browser console:

> Uncaught ReferenceError: jQuery is not defined

Similarly, when I use the imports-loader, it throws an error,

> require is not defined'

in this line:

```
<span class="hljs-keyword">var</span> jQuery = <span class="hljs-built_in">require</span>(<span class="hljs-string">"jquery"</span>)
```

However, I could use the same plugin when I don't add it to my
vendors.js file and instead required it in the normal AMD way as how I
include my other JavaScript code files, like-

```
define(
[
    <span class="hljs-string">'jquery'</span>,
    <span class="hljs-string">'react'</span>,
    <span class="hljs-string">'../../common-functions'</span>,
    <span class="hljs-string">'../../libs/jquery.elastic.source'</span>
],<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">$,React,commonFunctions</span>)</span>{
    $(<span class="hljs-string">"#myInput"</span>).elastic() <span class="hljs-comment">//It works</span>

});
```

But this is not what I want to do, as this would mean that
jquery.elastic.source.js is bundled along with my JavaScript code in
bundle.js, and I want all my jQuery plugins to be in the vendors.js
bundle. So how do I go about achieving this?
[javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'") [jquery](https://stackoverflow.com/questions/tagged/jquery "show questions tagged 'jquery'") [amd](https://stackoverflow.com/questions/tagged/amd "show questions tagged 'amd'") [webpack](https://stackoverflow.com/questions/tagged/webpack "show questions tagged 'webpack'") [share](https://stackoverflow.com/q/28969861 "short permalink to this question")Share a link to this question [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")| Follow this question to receive notifications |[edited Jun 12 '18 at 20:49](https://stackoverflow.com/posts/28969861/revisions "show all edits to this post") [Florian Grell](https://stackoverflow.com/users/353907/florian-grell)847 6 6 silver badges 17 17 bronze badges asked Mar 10 '15 at 17:06 [booleanhunter](https://stackoverflow.com/users/3989925/booleanhunter)booleanhunter 5,360 3 3 gold badges 12 12 silver badges 18 18 bronze badges

*3 Not sure if this is your
issue but you definitely need to change windows.jQuery to
"window.jQuery": "jquery"  . There is a typo on webpack's website where
I'm assuming you got that code from.– [Alex Hawkins](https://stackoverflow.com/users/3353421/alex-hawkins "556 reputation") [Mar 28 '15 at 0:46](#comment46818200-28969861)
*@AlexHawkins Oh yeah, I noticed that and fixed it. Thanks for pointing it out!– [booleanhunter](https://stackoverflow.com/users/3989925/booleanhunter "5,360 reputation") [May 26 '15 at 7:32](#comment48985422-28969861)

[add a comment](# "Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.") | 

## 11 Answers 11

[Active](https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack?answertab=active#tab-top "Answers with the latest activity first") [Oldest](https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack?answertab=oldest#tab-top "Answers in the order they were provided") [Votes](https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack?answertab=votes#tab-top "Answers with the highest score first") This answer is useful 784 This answer is not useful Show activity on this post.

You've mixed different approaches how to include legacy vendor modules. This is how I'd tackle it:

## 1. Prefer unminified CommonJS/AMD over `dist`

Most modules link the `dist` version in the `main` field of their `package.json`. While this is useful for most developers, for webpack it is better to alias the `src` version because this way webpack is able to optimize dependencies better (e.g. when using the [`DedupePlugin`](http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin)).

```
<span class="hljs-comment">// webpack.config.js</span>

<span class="hljs-built_in">module</span>.exports = {
    ...
    resolve: {
        <span class="hljs-attr">alias</span>: {
            <span class="hljs-attr">jquery</span>: <span class="hljs-string">"jquery/src/jquery"</span>
        }
    }
};
```

However, in most cases the `dist` version works just fine as well.

***

## 2. Use the `ProvidePlugin` to inject implicit globals

Most legacy modules rely on the presence of specific globals, like jQuery plugins do on `$` or `jQuery`. In this scenario you can configure webpack, to prepend `var $ = require("jquery")` everytime it encounters the global `$` identifier.

```
<span class="hljs-keyword">var</span> webpack = <span class="hljs-built_in">require</span>(<span class="hljs-string">"webpack"</span>);

    ...

    plugins: [
        <span class="hljs-keyword">new</span> webpack.ProvidePlugin({
            <span class="hljs-attr">$</span>: <span class="hljs-string">"jquery"</span>,
            <span class="hljs-attr">jQuery</span>: <span class="hljs-string">"jquery"</span>
        })
    ]
```

***

## 3. Use the [imports-loader](https://github.com/webpack/imports-loader) to configure `this`

Some legacy modules rely on `this` being the `window` object. This becomes a problem when the module is executed in a CommonJS context where `this` equals `module.exports`. In this case you can override `this` with the [imports-loader](https://github.com/webpack/imports-loader).

Run `npm i imports-loader --save-dev` and then

```
<span class="hljs-built_in">module</span>: {
    <span class="hljs-attr">loaders</span>: [
        {
            <span class="hljs-attr">test</span>: <span class="hljs-regexp">/[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/</span>,
            loader: <span class="hljs-string">"imports-loader?this=>window"</span>
        }
    ]
}
```

The imports-loader can also be used to manually inject variables of all kinds. But most of the time the `ProvidePlugin` is more useful when it comes to implicit globals.

***

## 4. Use the [imports-loader](https://github.com/webpack/imports-loader) to disable AMD

There are modules that support different module styles, like AMD,
CommonJS and legacy. However, most of the time they first check for `define` and then use some quirky code to export properties. In these cases, it could help to force the CommonJS path by setting `define = false`.

```
<span class="hljs-built_in">module</span>: {
    <span class="hljs-attr">loaders</span>: [
        {
            <span class="hljs-attr">test</span>: <span class="hljs-regexp">/[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/</span>,
            loader: <span class="hljs-string">"imports-loader?define=>false"</span>
        }
    ]
}
```

***

## 5. Use the [script-loader](https://github.com/webpack/script-loader) to globally import scripts

If you don't care about global variables and just want legacy scripts
 to work, you can also use the script-loader. It executes the module in a
 global context, just as if you had included them via the `<script>` tag.

***

## 6. Use `noParse` to include large dists

When there is no AMD/CommonJS version of the module and you want to include the `dist`, you can flag this module as `noParse`.
 Then webpack will just include the module without parsing it, which can
 be used to improve the build time. This means that any feature
requiring the [AST](http://en.wikipedia.org/wiki/Abstract_syntax_tree), like the `ProvidePlugin`, will not work.

```
<span class="hljs-built_in">module</span>: {
    <span class="hljs-attr">noParse</span>: [
        <span class="hljs-regexp">/[\/\\]node_modules[\/\\]angular[\/\\]angular\.js$/</span>
    ]
}
```

[share](https://stackoverflow.com/a/28989476 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications |[edited Feb 27 '17 at 6:45](https://stackoverflow.com/posts/28989476/revisions "show all edits to this post") [fracz](https://stackoverflow.com/users/878514/fracz)17.1k 15 15 gold badges 89 89 silver badges 137 137 bronze badges answered Mar 11 '15 at 14:36 [Johannes Ewald](https://stackoverflow.com/users/1343851/johannes-ewald)Johannes Ewald 16.6k 3 3 gold badges 39 39 silver badges 34 34 bronze badges

*3 The `ProvidePlugin` is applied on all occurrences of the given identifiers in all files.  The `imports-loader` can be applied on specific files only, but you should not use both for the same variables/dependencies.– [Johannes Ewald](https://stackoverflow.com/users/1343851/johannes-ewald "16,552 reputation") [Mar 13 '15 at 16:32](#comment46315423-28989476)
*5 I'm confused by this. Where
is the jquery actually coming from? Locally or a CDN? Everything after
3. its unclear whether that is necessary. What are the actual steps to
integrate jquery into your project using webpack. Does it bypass the
version that is available via CDN?– [HelpMeStackOverflowMyOnlyHope](https://stackoverflow.com/users/1203703/helpmestackoverflowmyonlyhope "3,632 reputation") [May 7 '15 at 0:17](#comment48292618-28989476)
*3 Everything from a CDN is out
of scope for webpack, so this refers to a local jquery installation.
Jquery can just be required, there are no special steps necessary to
integrate it. This question is about how to integrate jquery plugins
that depend on the global `$` variable.– [Johannes Ewald](https://stackoverflow.com/users/1343851/johannes-ewald "16,552 reputation") [May 8 '15 at 9:39](#comment48351039-28989476)
*8 Did all this, still not working; Then added: `"module": {     "loaders": [         {             test: require.resolve("jquery"),             loader: "expose?$!expose?jQuery"         },` and it worked fine.– [musicformellons](https://stackoverflow.com/users/3294412/musicformellons "7,051 reputation") [May 23 '16 at 13:49](#comment62294578-28989476)
*6 Do all this, to just include a jquery package ?, what a pain. I'm going back to my gulp build– [Rahul Gupta](https://stackoverflow.com/users/4471128/rahul-gupta "399 reputation") [Sep 4 '17 at 5:08](#comment79020961-28989476)

 | [show <b>17</b> more comments](# "expand to show all comments on this post") This answer is useful 91 This answer is not useful Show activity on this post.

For global access to jquery then several options exist. In my most
recent webpack project, I wanted global access to jquery so I added the
following to my plugins declarations:

```
 plugins: [
    <span class="hljs-keyword">new</span> webpack.ProvidePlugin({
      <span class="hljs-attr">$</span>: <span class="hljs-string">"jquery"</span>,
      <span class="hljs-attr">jQuery</span>: <span class="hljs-string">"jquery"</span>
    })
  ]
```

This then means that jquery is accessible from within the JavaScript source code via global references $ and jQuery.

Of course, you need to have also installed jquery via npm:

```
$ npm i jquery --save
```

For a working example of this approach please feel free to fork my app on [github](https://github.com/arcseldon/react-babel-webpack-starter-app)
[share](https://stackoverflow.com/a/34354301 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications |[edited Oct 2 '17 at 16:34](https://stackoverflow.com/posts/34354301/revisions "show all edits to this post") [Timo Tijhof](https://stackoverflow.com/users/319266/timo-tijhof)9,296 6 6 gold badges 30 30 silver badges 44 44 bronze badges answered Dec 18 '15 at 11:11 [arcseldon](https://stackoverflow.com/users/1882064/arcseldon)arcseldon 27.2k 14 14 gold badges 100 100 silver badges 109 109 bronze badges

*2 Please can you leave a
comment if you downgrade a vote explaining the reason. The above
information is accurate. Please see my working app at: [github.com/arcseldon/react-babel-webpack-starter-app](https://github.com/arcseldon/react-babel-webpack-starter-app) using the above approach.– [arcseldon](https://stackoverflow.com/users/1882064/arcseldon "27,233 reputation") [Dec 28 '15 at 16:49](#comment56736366-34354301)
*I'm not the downvoter, but maybe this is because the `ProvidePlugin` solution you suggest was already proposed?– [Léo Lam](https://stackoverflow.com/users/1636285/l%c3%a9o-lam "3,279 reputation") [Dec 31 '15 at 12:24](#comment56834469-34354301)
*@LéoLam - thanks for your
comment. appreciate your point - i had deduced the answer via separate
enquires, and just shared the snippet here I thought was likely most
relevant to others wishing to emulate what I had done. You're right
though, the official answer does cover this option.– [arcseldon](https://stackoverflow.com/users/1882064/arcseldon "27,233 reputation") [Dec 31 '15 at 16:39](#comment56840418-34354301)
*1 It's working but I get 2 warnings: `./~/jQuery/dist/jquery.js There is another module with an equal name when case is ignored.` and the same one with `./~/jquery/dist/jquery.js` – [pistou](https://stackoverflow.com/users/2099704/pistou "2,531 reputation") [Jan 25 '16 at 10:27](#comment57708663-34354301)
*7 I needed to add `'window.jQuery': 'jquery'` to that list to make the ms-signalr-client npm package load. I also put in `'window.$': 'jquery'` for good measure :)– [Sammi](https://stackoverflow.com/users/628418/sammi "1,493 reputation") [Apr 27 '16 at 12:48](#comment61344873-34354301)

 | [show <b>3</b> more comments](# "expand to show all comments on this post") This answer is useful 58 This answer is not useful Show activity on this post.

I don't know if I understand very well what you are trying to do, but
 I had to use jQuery plugins that required jQuery to be in the global
context (window) and I put the following in my `entry.js`:

```
<span class="hljs-keyword">var</span> $ = <span class="hljs-built_in">require</span>(<span class="hljs-string">'jquery'</span>);
<span class="hljs-built_in">window</span>.jQuery = $;
<span class="hljs-built_in">window</span>.$ = $;
```

The I just have to require wherever i want the `jqueryplugin.min.js` and `window.$` is extended with the plugin as expected.
[share](https://stackoverflow.com/a/30331983 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications | answered May 19 '15 at 17:11 [sanfilippopablo](https://stackoverflow.com/users/1491651/sanfilippopablo)sanfilippopablo 1,269 1 1 gold badge 12 12 silver badges 17 17 bronze badges

*2 Basically I was making the
mistake of using the ProvidePlugin along with the noParse condition.
Plugins like ProvidePlugin do not work if we do NoParse, as stated by in
 point number 6 of the answer. You can see that mistake in the code– [booleanhunter](https://stackoverflow.com/users/3989925/booleanhunter "5,360 reputation") [May 26 '15 at 7:27](#comment48985239-30331983)
*yeah, I've found that works
more consistently across plugins than the provide plugins etc... esp if
you're bringing in angular 1.x via the script-loader.– [Tracker1](https://stackoverflow.com/users/43906/tracker1 "17,345 reputation") [Feb 22 '17 at 1:35](#comment71911344-30331983)

[add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 30 This answer is not useful Show activity on this post.

I got things working nicely while exposing `$` and `jQuery` as global variables with Webpack 3.8.1 and the following.

Install jQuery as a project dependency. You can omit `@3.2.1` to install the latest version or specify another version.

```
npm install --save jquery@<span class="hljs-number">3.2</span><span class="hljs-number">.1</span>
```

Install `expose-loader` as a development dependency if not installed already.

```
npm install expose-loader --save-dev
```

Configure Webpack to load and expose jQuery for us.

```
<span class="hljs-comment">// webpack.config.js</span>
<span class="hljs-keyword">const</span> webpack = <span class="hljs-built_in">require</span>(<span class="hljs-string">'webpack'</span>)

<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">entry</span>: [
    <span class="hljs-comment">// entry bits</span>
  ],
  <span class="hljs-attr">output</span>: {
    <span class="hljs-comment">// output bits</span>
  },
  <span class="hljs-attr">module</span>: {
    <span class="hljs-attr">rules</span>: [
      <span class="hljs-comment">// any other rules</span>
      {
        <span class="hljs-comment">// Exposes jQuery for use outside Webpack build</span>
        <span class="hljs-attr">test</span>: <span class="hljs-built_in">require</span>.resolve(<span class="hljs-string">'jquery'</span>),
        <span class="hljs-attr">use</span>: [{
          <span class="hljs-attr">loader</span>: <span class="hljs-string">'expose-loader'</span>,
          <span class="hljs-attr">options</span>: <span class="hljs-string">'jQuery'</span>
        },{
          <span class="hljs-attr">loader</span>: <span class="hljs-string">'expose-loader'</span>,
          <span class="hljs-attr">options</span>: <span class="hljs-string">'$'</span>
        }]
      }
    ]
  },
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-comment">// Provides jQuery for other JS bundled with Webpack</span>
    <span class="hljs-keyword">new</span> webpack.ProvidePlugin({
      <span class="hljs-attr">$</span>: <span class="hljs-string">'jquery'</span>,
      <span class="hljs-attr">jQuery</span>: <span class="hljs-string">'jquery'</span>
    })
  ]
}
```

[share](https://stackoverflow.com/a/46937798 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications |[edited Dec 1 '17 at 15:38](https://stackoverflow.com/posts/46937798/revisions "show all edits to this post") answered Oct 25 '17 at 16:39 [HarlemSquirrel](https://stackoverflow.com/users/3446655/harlemsquirrel)HarlemSquirrel 5,070 3 3 gold badges 23 23 silver badges 28 28 bronze badges

*6 You forgot to mention that you need to install `expose-loader` in order to it to work properly  `npm install expose-loader --save-dev` – [Paulo Griiettner](https://stackoverflow.com/users/2166474/paulo-griiettner "996 reputation") [Nov 15 '17 at 20:13](#comment81583680-46937798)
*4 This worked for me 👍. jquery : 3.3.1, expose-loader : 0.7.5, webpack : 4.20.2– [AKT](https://stackoverflow.com/users/4171365/akt "156 reputation") [Sep 28 '18 at 6:01](#comment92037425-46937798)
*The `expose-loaded` did it for me. I didn't get an error at compile time, but in Chrome developer tools. That's solved now.– [Johan Vergeer](https://stackoverflow.com/users/5039579/johan-vergeer "3,695 reputation") [Dec 7 '19 at 20:46](#comment104673210-46937798)
*Thank you! This worked with
"jquery": "^3.4.1", and "webpack": "^4.41.5". Is it just me or getting
jQuery to work with Webpack shouldn't be this ridiculous?– [Carles Alcolea](https://stackoverflow.com/users/2495341/carles-alcolea "7,047 reputation") [Feb 5 at 10:17](#comment106246153-46937798)

[add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 19 This answer is not useful Show activity on this post.

**In your webpack.config.js file add below:**

```
 <span class="hljs-keyword">var</span> webpack = <span class="hljs-built_in">require</span>(<span class="hljs-string">"webpack"</span>);
 plugins: [
    <span class="hljs-keyword">new</span> webpack.ProvidePlugin({
        <span class="hljs-attr">$</span>: <span class="hljs-string">"jquery"</span>,
        <span class="hljs-attr">jQuery</span>: <span class="hljs-string">"jquery"</span>
    })
 ],
```

**Install jQuery using npm:**

```
$ npm i jquery --save
```

**In app.js file add below lines:**

```
<span class="hljs-keyword">import</span> $ <span class="hljs-keyword">from</span> <span class="hljs-string">'jquery'</span>;
<span class="hljs-built_in">window</span>.jQuery = $;
<span class="hljs-built_in">window</span>.$ = $;
```

This worked for me. :)
[share](https://stackoverflow.com/a/50427028 "short permalink to this answer")Share a link to this answer [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")| Follow this answer to receive notifications | answered May 19 '18 at 15:53 [ashwini](https://stackoverflow.com/users/7935970/ashwini)ashwini 225 2 2 silver badges 8 8 bronze badges

*How will this act if you have
 for ex. app.js, and jquery-module.js, that both require jquery?, for me
 i get jquery13981378127,and jquery12389723198 as instances on the
window?– [Martea](https://stackoverflow.com/users/602870/martea "487 reputation") [Dec 10 '19 at 8:44](#comment104734628-50427028)
*1 Take care of case sensitivity
 on "jquery". In my webpack.config externals, I had "jquery: 'jQuery'". I
 had "import $ from 'jQuery'" in my script. Changing to "import $ from
'jquery'" solved my problem :)– [Jono](https://stackoverflow.com/users/777885/jono "335 reputation") [Aug 7 at 5:36](#comment111925534-50427028)

[add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 18 This answer is not useful Show activity on this post.

Add this to your plugins array in webpack.config.js

```
<span class="hljs-keyword">new</span> webpack.ProvidePlugin({
    <span class="hljs-string">'window.jQuery'</span>: <span class="hljs-string">'jquery'</span>,
    <span class="hljs-string">'window.$'</span>: <span class="hljs-string">'jquery'</span>,
})
```

then require jquery normally

```
<span class="hljs-built_in">require</span>(<span class="hljs-string">'jquery'</span>);
```

If pain persists getting other scripts to see it, try explicitly placing it in the global context via (in the entry js)

```
<span class="hljs-built_in">window</span>.$ = jQuery;
```

[share](https://stackoverflow.com/a/39149318 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications |[edited Oct 7 '16 at 2:40](https://stackoverflow.com/posts/39149318/revisions "show all edits to this post") [John Mee](https://stackoverflow.com/users/75033/john-mee)41.9k 29 29 gold badges 123 123 silver badges 167 167 bronze badges answered Aug 25 '16 at 15:33 [KhaledMohamedP](https://stackoverflow.com/users/3105145/khaledmohamedp)KhaledMohamedP 3,418 2 2 gold badges 18 18 silver badges 21 21 bronze badges [add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 9 This answer is not useful Show activity on this post.

I tried some of the supplied answers but none of them seemed to work. Then I tried this:

```
<span class="hljs-keyword">new</span> webpack.ProvidePlugin({
    <span class="hljs-string">'window.jQuery'</span>    : <span class="hljs-string">'jquery'</span>,
    <span class="hljs-string">'window.$'</span>         : <span class="hljs-string">'jquery'</span>,
    <span class="hljs-string">'jQuery'</span>           : <span class="hljs-string">'jquery'</span>,
    <span class="hljs-string">'$'</span>                : <span class="hljs-string">'jquery'</span>
});
```

Seems to work no matter which version I'm using
[share](https://stackoverflow.com/a/45971518 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications | answered Aug 31 '17 at 0:26 [Cam Tullos](https://stackoverflow.com/users/436537/cam-tullos)Cam Tullos 2,210 1 1 gold badge 17 17 silver badges 15 15 bronze badges

*+1 seems to be a
misunderstanding that globals added here will automatically be set
against the window, doesn't seem to work like that you need to be
explicit.– [James](https://stackoverflow.com/users/82586/james "72,788 reputation") [Sep 14 '17 at 21:26](#comment79420806-45971518)
*Correct, this does not add it to the window object. It creates a window alias inside of webpack. So if you try to use `$` outside of a webpack required file, it will be undefined.– [Cam Tullos](https://stackoverflow.com/users/436537/cam-tullos "2,210 reputation") [Sep 18 '17 at 17:23](#comment79532954-45971518)

[add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 7 This answer is not useful Show activity on this post.

This works in **webpack 3:**

in the webpack.config.babel.js file:

```
resolve: {
    <span class="hljs-attr">alias</span>: {
         <span class="hljs-attr">jquery</span>: <span class="hljs-string">"jquery/src/jquery"</span>
    },
 ....
}
```

And use **ProvidePlugin**

```
<span class="hljs-keyword">new</span> webpack.ProvidePlugin({
        <span class="hljs-string">'$'</span>: <span class="hljs-string">'jquery'</span>,
        <span class="hljs-string">'jQuery'</span>: <span class="hljs-string">'jquery'</span>,
    })
```

[share](https://stackoverflow.com/a/45404761 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications |[edited Aug 8 '17 at 18:54](https://stackoverflow.com/posts/45404761/revisions "show all edits to this post") [Community](https://stackoverflow.com/users/-1/community)♦1 1 1 silver badge answered Jul 30 '17 at 21:12 [SharpCoder](https://stackoverflow.com/users/1350476/sharpcoder)SharpCoder 14.8k 30 30 gold badges 122 122 silver badges 211 211 bronze badges

*1 For others that are super new
 at webpack (like me!) "resolve" goes in your webpack.config.js under
module.exports = {} just like entry, output, plugins, module, etc..– [DavGarcia](https://stackoverflow.com/users/40161/davgarcia "17,122 reputation") [Mar 19 '18 at 16:38](#comment85736882-45404761)
*1 And new webpack.ProvidePlugin goes inside the plugins array.– [DavGarcia](https://stackoverflow.com/users/40161/davgarcia "17,122 reputation") [Mar 19 '18 at 16:38](#comment85736898-45404761)

[add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 2 This answer is not useful Show activity on this post.

The best solution I've found was:

[https://github.com/angular/angular-cli/issues/5139#issuecomment-283634059](https://github.com/angular/angular-cli/issues/5139#issuecomment-283634059)

Basically, you need to include a dummy variable on typings.d.ts,
remove any "import * as $ from 'jquery" from your code, and then
manually add a tag to jQuery script to your SPA html. This way, webpack
won't be in your way, and you should be able to access the same global
jQuery variable in all your scripts.
[share](https://stackoverflow.com/a/44142944 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications | answered May 23 '17 at 18:55 [Fabricio](https://stackoverflow.com/users/1348349/fabricio)Fabricio 497 1 1 gold badge 5 5 silver badges 18 18 bronze badges [add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 2 This answer is not useful Show activity on this post.

This works for me on the webpack.config.js

```
    <span class="hljs-keyword">new</span> webpack.ProvidePlugin({
        <span class="hljs-attr">$</span>: <span class="hljs-string">'jquery'</span>,
        <span class="hljs-attr">jQuery</span>: <span class="hljs-string">'jquery'</span>,
        <span class="hljs-string">'window.jQuery'</span>: <span class="hljs-string">'jquery'</span>
    }),
```

in another javascript or into HTML add:

```
<span class="hljs-built_in">global</span>.jQuery = <span class="hljs-built_in">require</span>(<span class="hljs-string">'jquery'</span>);
```

[share](https://stackoverflow.com/a/47333184 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications |[edited Nov 20 '17 at 22:19](https://stackoverflow.com/posts/47333184/revisions "show all edits to this post") answered Nov 16 '17 at 15:15 [JPRLCol](https://stackoverflow.com/users/3293515/jprlcol)JPRLCol 629 8 8 silver badges 21 21 bronze badges [add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | This answer is useful 0 This answer is not useful Show activity on this post.

Edit: Sometimes you want to use webpack simply as a module bundler
for a simple web project - to keep your own code organized. The
following solution is for those who just want an external library to
work as expected inside their modules - without using a lot of time
diving into webpack setups. (Edited after -1)

Quick and simple (es6) solution if you're still struggling or want to avoid externals config / additional webpack plugin config:

```
<script src=<span class="hljs-string">"cdn/jquery.js"</span>></script>
<span class="xml"><span class="hljs-tag"><<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"cdn/underscore.js"</span>></span><span class="hljs-tag"></<span class="hljs-name">script</span>></span></span>
<span class="xml"><span class="hljs-tag"><<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"etc.js"</span>></span><span class="hljs-tag"></<span class="hljs-name">script</span>></span></span>
<span class="xml"><span class="hljs-tag"><<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"bundle.js"</span>></span><span class="hljs-tag"></<span class="hljs-name">script</span>></span></span>
```

inside a module:

```
<span class="hljs-keyword">const</span> { <span class="hljs-attr">jQuery</span>: $, <span class="hljs-attr">Underscore</span>: _, etc } = <span class="hljs-built_in">window</span>;
```

[share](https://stackoverflow.com/a/46500027 "short permalink to this answer")Share a link to this answer [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")| Follow this answer to receive notifications |[edited Sep 30 '17 at 7:03](https://stackoverflow.com/posts/46500027/revisions "show all edits to this post") answered Sep 30 '17 at 5:59 [frdnrdb](https://stackoverflow.com/users/2279301/frdnrdb)frdnrdb 31 7 7 bronze badges [add a comment](# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".") | 

## Not the answer you're looking for? Browse other questions tagged [javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'") [jquery](https://stackoverflow.com/questions/tagged/jquery "show questions tagged 'jquery'") [amd](https://stackoverflow.com/questions/tagged/amd "show questions tagged 'amd'") [webpack](https://stackoverflow.com/questions/tagged/webpack "show questions tagged 'webpack'") or [ask your own question](https://stackoverflow.com/questions/ask)  .

The Overflow Blog

* [Play the long game when learning to code.](https://stackoverflow.blog/2020/10/05/play-the-long-game-when-learning-to-code/?cb=1)
* [Static site generation with single page app functionality? That's what's...](https://stackoverflow.blog/2020/10/07/qa-with-the-creators-of-next-js-on-version-9-5/?cb=1 "Static site generation with single page app functionality? That's what's coming Next(.js)") Featured on Meta

* [Goodbye, Prettify. Hello highlight.js! Swapping out our Syntax Highlighter](https://meta.stackexchange.com/questions/353983/goodbye-prettify-hello-highlight-js-swapping-out-our-syntax-highlighter?cb=1)
* [Responding to the Lavender Letter and commitments moving forward](https://meta.stackexchange.com/questions/354978/responding-to-the-lavender-letter-and-commitments-moving-forward?cb=1)
* [How does the highlight.js change affect Stack Overflow specifically?](https://meta.stackoverflow.com/questions/401031/how-does-the-highlight-js-change-affect-stack-overflow-specifically?cb=1)

#### Linked

[1](https://stackoverflow.com/q/43785212?lq=1 "Vote score (upvotes - downvotes)") [Loading jQuery plugins with webpack, gulp, and typescript](https://stackoverflow.com/questions/43785212/loading-jquery-plugins-with-webpack-gulp-and-typescript?noredirect=1&lq=1) [84](https://stackoverflow.com/q/23305599?lq=1 "Vote score (upvotes - downvotes)") [Webpack ProvidePlugin vs externals?](https://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals?noredirect=1&lq=1) [32](https://stackoverflow.com/q/38825936?lq=1 "Vote score (upvotes - downvotes)") ['jquery is not defined' when using webpack to load bootstrap](https://stackoverflow.com/questions/38825936/jquery-is-not-defined-when-using-webpack-to-load-bootstrap?noredirect=1&lq=1) [23](https://stackoverflow.com/q/39888395?lq=1 "Vote score (upvotes - downvotes)") [Webpack and External Libs: ProvidePlugin vs entry vs global import?](https://stackoverflow.com/questions/39888395/webpack-and-external-libs-provideplugin-vs-entry-vs-global-import?noredirect=1&lq=1) [15](https://stackoverflow.com/q/29878790?lq=1 "Vote score (upvotes - downvotes)") [Exposing jquery plugin with Webpack](https://stackoverflow.com/questions/29878790/exposing-jquery-plugin-with-webpack?noredirect=1&lq=1) [15](https://stackoverflow.com/q/36791472?lq=1 "Vote score (upvotes - downvotes)") [JQuery Plugin (datatables) with Webpack and Typescript](https://stackoverflow.com/questions/36791472/jquery-plugin-datatables-with-webpack-and-typescript?noredirect=1&lq=1) [8](https://stackoverflow.com/q/43803192?lq=1 "Vote score (upvotes - downvotes)") [$ is not defined within a .js.erb view using Webpack 2 in Rails app](https://stackoverflow.com/questions/43803192/is-not-defined-within-a-js-erb-view-using-webpack-2-in-rails-app?noredirect=1&lq=1) [10](https://stackoverflow.com/q/48579518?lq=1 "Vote score (upvotes - downvotes)") [How to import jquery in webpack](https://stackoverflow.com/questions/48579518/how-to-import-jquery-in-webpack?noredirect=1&lq=1) [7](https://stackoverflow.com/q/47550247?lq=1 "Vote score (upvotes - downvotes)") [Uncaught ReferenceError: $ is not defined Webpack and embedded script](https://stackoverflow.com/questions/47550247/uncaught-referenceerror-is-not-defined-webpack-and-embedded-script?noredirect=1&lq=1) [5](https://stackoverflow.com/q/40108172?lq=1 "Vote score (upvotes - downvotes)") [webpack jquery plugin loading its own instance of jquery](https://stackoverflow.com/questions/40108172/webpack-jquery-plugin-loading-its-own-instance-of-jquery?noredirect=1&lq=1) [See more linked questions](https://stackoverflow.com/questions/linked/28969861?lq=1)

#### Related

[2822](https://stackoverflow.com/q/31044?rq=1 "Vote score (upvotes - downvotes)") [Is there an "exists" function for jQuery?](https://stackoverflow.com/questions/31044/is-there-an-exists-function-for-jquery?rq=1) [2464](https://stackoverflow.com/q/171027?rq=1 "Vote score (upvotes - downvotes)") [Add table row in jQuery](https://stackoverflow.com/questions/171027/add-table-row-in-jquery?rq=1) [7882](https://stackoverflow.com/q/178325?rq=1 "Vote score (upvotes - downvotes)") [How do I check if an element is hidden in jQuery?](https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery?rq=1) [4194](https://stackoverflow.com/q/426258?rq=1 "Vote score (upvotes - downvotes)") [Setting "checked" for a checkbox with jQuery](https://stackoverflow.com/questions/426258/setting-checked-for-a-checkbox-with-jquery?rq=1) [2764](https://stackoverflow.com/q/596351?rq=1 "Vote score (upvotes - downvotes)") [How can I know which radio button is selected via jQuery?](https://stackoverflow.com/questions/596351/how-can-i-know-which-radio-button-is-selected-via-jquery?rq=1) [4652](https://stackoverflow.com/q/901712?rq=1 "Vote score (upvotes - downvotes)") [How do I check whether a checkbox is checked in jQuery?](https://stackoverflow.com/questions/901712/how-do-i-check-whether-a-checkbox-is-checked-in-jquery?rq=1) [2326](https://stackoverflow.com/q/1414365?rq=1 "Vote score (upvotes - downvotes)") [Disable/enable an input with jQuery?](https://stackoverflow.com/questions/1414365/disable-enable-an-input-with-jquery?rq=1) [2498](https://stackoverflow.com/q/5404839?rq=1 "Vote score (upvotes - downvotes)") [How can I refresh a page with jQuery?](https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery?rq=1) [2396](https://stackoverflow.com/q/6677035?rq=1 "Vote score (upvotes - downvotes)") [jQuery scroll to element](https://stackoverflow.com/questions/6677035/jquery-scroll-to-element?rq=1)

#### [Hot Network Questions](https://stackexchange.com/questions?tab=hot)

* [Unique almost complex structure up to diffeomorphism](https://mathoverflow.net/questions/373500/unique-almost-complex-structure-up-to-diffeomorphism)
* [Looking for an old, possibly, 80's Asian scifi film with a female protagonist in futuristic armor](https://scifi.stackexchange.com/questions/237737/looking-for-an-old-possibly-80s-asian-scifi-film-with-a-female-protagonist-in)
* [If objects in motion experience time differently, how does my body stay synced when I move my legs or arms?](https://physics.stackexchange.com/questions/584228/if-objects-in-motion-experience-time-differently-how-does-my-body-stay-synced-w)
* [How do I ask Japanese restaurants in writing not to serve me any meat?](https://travel.stackexchange.com/questions/159709/how-do-i-ask-japanese-restaurants-in-writing-not-to-serve-me-any-meat)
* [Exchanging on d5 in queen's gambit like openings](https://chess.stackexchange.com/questions/32519/exchanging-on-d5-in-queens-gambit-like-openings)
* [update from 2.2.6 to 2.4 posible?](https://magento.stackexchange.com/questions/323907/update-from-2-2-6-to-2-4-posible)
* [What's the default file for `hostname`?](https://unix.stackexchange.com/questions/613231/whats-the-default-file-for-hostname)
* [Would a race with bludgeoning, piercing or slashing resistance be overpowered?](https://rpg.stackexchange.com/questions/176218/would-a-race-with-bludgeoning-piercing-or-slashing-resistance-be-overpowered)
* [Why do we need topological spaces?](https://math.stackexchange.com/questions/3853614/why-do-we-need-topological-spaces)
* [How to grep a value from a json file](https://unix.stackexchange.com/questions/613331/how-to-grep-a-value-from-a-json-file)
* [If two individual branches pass unit tests, once they're merged, is the result also guaranteed to pass unit tests?](https://softwareengineering.stackexchange.com/questions/416567/if-two-individual-branches-pass-unit-tests-once-theyre-merged-is-the-result-a)
* [Genitive without an article](https://german.stackexchange.com/questions/61305/genitive-without-an-article)
* [Is this modified version of the changeling's "Shapechanger" trait fair?](https://rpg.stackexchange.com/questions/176180/is-this-modified-version-of-the-changelings-shapechanger-trait-fair)
* [Is there any reason to invest in stocks, ETFs, etc. outside of a tax-advantaged account?](https://money.stackexchange.com/questions/131635/is-there-any-reason-to-invest-in-stocks-etfs-etc-outside-of-a-tax-advantaged)
* [Is it ok copying code from one application to another, both belonging to the same repository, to keep them independent?](https://softwareengineering.stackexchange.com/questions/416574/is-it-ok-copying-code-from-one-application-to-another-both-belonging-to-the-sam)
* [Does AGPL 3 requeired to give free services](https://law.stackexchange.com/questions/56975/does-agpl-3-requeired-to-give-free-services)
* [Probability of flipping heads after three attempts](https://stats.stackexchange.com/questions/490597/probability-of-flipping-heads-after-three-attempts)
* [web scraper for emails and links](https://codereview.stackexchange.com/questions/250307/web-scraper-for-emails-and-links)
* [How to reduce drywall hole size](https://diy.stackexchange.com/questions/205017/how-to-reduce-drywall-hole-size)
* [Should selling price depend on product quality or on work to produce the product if both not in positive correlation?](https://economics.stackexchange.com/questions/40083/should-selling-price-depend-on-product-quality-or-on-work-to-produce-the-product)
* [Homotopy groups of Diff(X) and Homeo(X)](https://mathoverflow.net/questions/373503/homotopy-groups-of-diffx-and-homeox)
* [Show similar to Black Mirror but a decade earlier](https://scifi.stackexchange.com/questions/237780/show-similar-to-black-mirror-but-a-decade-earlier)
* [Are there any accounts written by torturers on their actions?](https://history.stackexchange.com/questions/61414/are-there-any-accounts-written-by-torturers-on-their-actions)
* [Traveling with a cat to the UK](https://travel.stackexchange.com/questions/159727/traveling-with-a-cat-to-the-uk)

[<svg></svg> Question feed](https://stackoverflow.com/feeds/question/28969861 "Feed of this question and its answers") lang-js

##### [Stack Overflow](https://stackoverflow.com/)

* [Questions](https://stackoverflow.com/questions)
* [Jobs](https://stackoverflow.com/jobs)
* [Developer Jobs Directory](https://stackoverflow.com/jobs/directory/developer-jobs)
* [Salary Calculator](https://stackoverflow.com/jobs/salary)
* [Help](https://stackoverflow.com/help)
* [Mobile]()
* [Disable Responsiveness]()

##### [Products](https://stackoverflowbusiness.com/)

* [Teams](https://stackoverflow.com/teams)
* [Talent](https://stackoverflow.com/talent)
* [Advertising](https://stackoverflow.com/advertising)
* [Enterprise](https://stackoverflow.com/enterprise)

##### [Company](https://stackoverflow.com/company)

* [About](https://stackoverflow.com/company)
* [Press](https://stackoverflow.com/company/press)
* [Work Here](https://stackoverflow.com/company/work-here)
* [Legal](https://stackoverflow.com/legal)
* [Privacy Policy](https://stackoverflow.com/legal/privacy-policy)
* [Contact Us](https://stackoverflow.com/company/contact)

##### [Stack Exchange<br>
Network](https://stackexchange.com/)

* [Technology](#)
* [Life / Arts](#)
* [Culture / Recreation](#)
* [Science](#)
* [Other](#)

* [Stack Overflow](https://stackoverflow.com/ "professional and enthusiast programmers")
* [Server Fault](https://serverfault.com/ "system and network administrators")
* [Super User](https://superuser.com/ "computer enthusiasts and power users")
* [Web Applications](https://webapps.stackexchange.com/ "power users of web applications")
* [Ask Ubuntu](https://askubuntu.com/ "Ubuntu users and developers")
* [Webmasters](https://webmasters.stackexchange.com/ "pro webmasters")
* [Game Development](https://gamedev.stackexchange.com/ "professional and independent game developers")

* [TeX - LaTeX](https://tex.stackexchange.com/ "users of TeX, LaTeX, ConTeXt, and related typesetting systems")
* [Software Engineering](https://softwareengineering.stackexchange.com/ "professionals, academics, and students working within the systems development life cycle")
* [Unix & Linux](https://unix.stackexchange.com/ "users of Linux, FreeBSD and other Un*x-like operating systems")
* [Ask Different (Apple)](https://apple.stackexchange.com/ "power users of Apple hardware and software")
* [WordPress Development](https://wordpress.stackexchange.com/ "WordPress developers and administrators")
* [Geographic Information Systems](https://gis.stackexchange.com/ "cartographers, geographers and GIS professionals")
* [Electrical Engineering](https://electronics.stackexchange.com/ "electronics and electrical engineering professionals, students, and enthusiasts")

* [Android Enthusiasts](https://android.stackexchange.com/ "enthusiasts and power users of the Android operating system")
* [Information Security](https://security.stackexchange.com/ "information security professionals")
* [Database Administrators](https://dba.stackexchange.com/ "database professionals who wish to improve their database skills and learn from others in the community")
* [Drupal Answers](https://drupal.stackexchange.com/ "Drupal developers and administrators")
* [SharePoint](https://sharepoint.stackexchange.com/ "SharePoint enthusiasts")
* [User Experience](https://ux.stackexchange.com/ "user experience researchers and experts")
* [Mathematica](https://mathematica.stackexchange.com/ "users of Wolfram Mathematica")

* [Salesforce](https://salesforce.stackexchange.com/ "Salesforce administrators, implementation experts, developers and anybody in-between")
* [ExpressionEngine® Answers](https://expressionengine.stackexchange.com/ "administrators, end users, developers and designers for ExpressionEngine® CMS")
* [Stack Overflow em Português](https://pt.stackoverflow.com/ "programadores profissionais e entusiastas")
* [Blender](https://blender.stackexchange.com/ "people who use Blender to create 3D graphics, animations, or games")
* [Network Engineering](https://networkengineering.stackexchange.com/ "network engineers")
* [Cryptography](https://crypto.stackexchange.com/ "software developers, mathematicians and others interested in cryptography")
* [Code Review](https://codereview.stackexchange.com/ "peer programmer code reviews")

* [Magento](https://magento.stackexchange.com/ "users of the Magento e-Commerce platform")
* [Software Recommendations](https://softwarerecs.stackexchange.com/ "people seeking specific software recommendations")
* [Signal Processing](https://dsp.stackexchange.com/ "practitioners of the art and science of signal, image and video processing")
* [Emacs](https://emacs.stackexchange.com/ "those using, extending or developing Emacs")
* [Raspberry Pi](https://raspberrypi.stackexchange.com/ "users and developers of hardware and software for Raspberry Pi")
* [Stack Overflow на русском](https://ru.stackoverflow.com/ "программистов")
* [Code Golf](https://codegolf.stackexchange.com/ "programming puzzle enthusiasts and code golfers")

* [Stack Overflow en español](https://es.stackoverflow.com/ "programadores y profesionales de la informática")
* [Ethereum](https://ethereum.stackexchange.com/ "users of Ethereum, the decentralized application platform and smart contract enabled blockchain")
* [Data Science](https://datascience.stackexchange.com/ "Data science professionals, Machine Learning specialists, and those interested in learning more about the field")
* [Arduino](https://arduino.stackexchange.com/ "developers of open-source hardware and software that is compatible with Arduino")
* [Bitcoin](https://bitcoin.stackexchange.com/ "Bitcoin crypto-currency enthusiasts")
* [Software Quality Assurance & Testing](https://sqa.stackexchange.com/ "software quality control experts, automation engineers, and software testers")
* [Sound Design](https://sound.stackexchange.com/ "sound engineers, producers, editors, and enthusiasts")

* [Windows Phone](https://windowsphone.stackexchange.com/ "enthusiasts and power users of Windows Phone OS")
* [**more (28)**](https://stackexchange.com/sites#technology)

* [Photography](https://photo.stackexchange.com/ "professional, enthusiast and amateur photographers")
* [Science Fiction & Fantasy](https://scifi.stackexchange.com/ "science fiction and fantasy enthusiasts")
* [Graphic Design](https://graphicdesign.stackexchange.com/ "Graphic Design professionals, students, and enthusiasts")
* [Movies & TV](https://movies.stackexchange.com/ "movie and TV enthusiasts")
* [Music: Practice & Theory](https://music.stackexchange.com/ "musicians, students, and enthusiasts")
* [Worldbuilding](https://worldbuilding.stackexchange.com/ "writers/artists using science, geography and culture to construct imaginary worlds and settings")
* [Video Production](https://video.stackexchange.com/ "engineers, producers, editors, and enthusiasts spanning the fields of video, and media creation")

* [Seasoned Advice (cooking)](https://cooking.stackexchange.com/ "professional and amateur chefs")
* [Home Improvement](https://diy.stackexchange.com/ "contractors and serious DIYers")
* [Personal Finance & Money](https://money.stackexchange.com/ "people who want to be financially literate")
* [Academia](https://academia.stackexchange.com/ "academics and those enrolled in higher education")
* [Law](https://law.stackexchange.com/ "legal professionals, students, and others with experience or interest in law")
* [Physical Fitness](https://fitness.stackexchange.com/ "physical fitness professionals, athletes, trainers, and those providing health-related needs")
* [Gardening & Landscaping](https://gardening.stackexchange.com/ "gardeners and landscapers")

* [Parenting](https://parenting.stackexchange.com/ "parents, grandparents, nannies and others with a parenting role")
* [**more (10)**](https://stackexchange.com/sites#lifearts)

* [English Language & Usage](https://english.stackexchange.com/ "linguists, etymologists, and serious English language enthusiasts")
* [Skeptics](https://skeptics.stackexchange.com/ "scientific skepticism")
* [Mi Yodeya (Judaism)](https://judaism.stackexchange.com/ "those who base their lives on Jewish law and tradition and anyone interested in learning more")
* [Travel](https://travel.stackexchange.com/ "road warriors and seasoned travelers")
* [Christianity](https://christianity.stackexchange.com/ "committed Christians, experts in Christianity and those interested in learning more")
* [English Language Learners](https://ell.stackexchange.com/ "speakers of other languages learning English")
* [Japanese Language](https://japanese.stackexchange.com/ "students, teachers, and linguists wanting to discuss the finer points of the Japanese language")

* [Chinese Language](https://chinese.stackexchange.com/ "students, teachers, and linguists wanting to discuss the finer points of the Chinese language")
* [French Language](https://french.stackexchange.com/ "students, teachers, and linguists wanting to discuss the finer points of the French language")
* [German Language](https://german.stackexchange.com/ "speakers of German wanting to discuss the finer points of the language and translation")
* [Biblical Hermeneutics](https://hermeneutics.stackexchange.com/ "professors, theologians, and those interested in exegetical analysis of biblical texts")
* [History](https://history.stackexchange.com/ "historians and history buffs")
* [Spanish Language](https://spanish.stackexchange.com/ "linguists, teachers, students and Spanish language enthusiasts in general wanting to discuss the finer points of the language")
* [Islam](https://islam.stackexchange.com/ "Muslims, experts in Islam, and those interested in learning more about Islam")

* [Русский язык](https://rus.stackexchange.com/ "лингвистов и энтузиастов русского языка")
* [Russian Language](https://russian.stackexchange.com/ "students, teachers, and linguists wanting to discuss the finer points of the Russian language")
* [Arqade (gaming)](https://gaming.stackexchange.com/ "passionate videogamers on all platforms")
* [Bicycles](https://bicycles.stackexchange.com/ "people who build and repair bicycles, people who train cycling, or commute on bicycles")
* [Role-playing Games](https://rpg.stackexchange.com/ "gamemasters and players of tabletop, paper-and-pencil role-playing games")
* [Anime & Manga](https://anime.stackexchange.com/ "anime and manga fans")
* [Puzzling](https://puzzling.stackexchange.com/ "those who create, solve, and study puzzles")

* [Motor Vehicle Maintenance & Repair](https://mechanics.stackexchange.com/ "mechanics and DIY enthusiast owners of cars, trucks, and motorcycles")
* [Board & Card Games](https://boardgames.stackexchange.com/ "people who like playing board games, designing board games or modifying the rules of existing board games")
* [Bricks](https://bricks.stackexchange.com/ "LEGO® and building block enthusiasts")
* [Homebrewing](https://homebrew.stackexchange.com/ "dedicated home brewers and serious enthusiasts")
* [Martial Arts](https://martialarts.stackexchange.com/ "students and teachers of all martial arts")
* [The Great Outdoors](https://outdoors.stackexchange.com/ "people who love being outdoors enjoying nature and wilderness, and learning about the required skills and equipment")
* [Poker](https://poker.stackexchange.com/ "serious players and enthusiasts of poker")

* [Chess](https://chess.stackexchange.com/ "serious players and enthusiasts of chess")
* [Sports](https://sports.stackexchange.com/ "participants in team and individual sport activities")
* [**more (16)**](https://stackexchange.com/sites#culturerecreation)

* [MathOverflow](https://mathoverflow.net/ "professional mathematicians")
* [Mathematics](https://math.stackexchange.com/ "people studying math at any level and professionals in related fields")
* [Cross Validated (stats)](https://stats.stackexchange.com/ "people interested in statistics, machine learning, data analysis, data mining, and data visualization")
* [Theoretical Computer Science](https://cstheory.stackexchange.com/ "theoretical computer scientists and researchers in related fields")
* [Physics](https://physics.stackexchange.com/ "active researchers, academics and students of physics")
* [Chemistry](https://chemistry.stackexchange.com/ "scientists, academics, teachers, and students in the field of chemistry")
* [Biology](https://biology.stackexchange.com/ "biology researchers, academics, and students")

* [Computer Science](https://cs.stackexchange.com/ "students, researchers and practitioners of computer science")
* [Philosophy](https://philosophy.stackexchange.com/ "those interested in the study of the fundamental nature of knowledge, reality, and existence")
* [Linguistics](https://linguistics.stackexchange.com/ "professional linguists and others with an interest in linguistic research and theory")
* [Psychology & Neuroscience](https://psychology.stackexchange.com/ "practitioners, researchers, and students in cognitive science, psychology, neuroscience, and psychiatry")
* [Computational Science](https://scicomp.stackexchange.com/ "scientists using computers to solve scientific problems")
* [**more (10)**](https://stackexchange.com/sites#science)

* [Meta Stack Exchange](https://meta.stackexchange.com/ "meta-discussion of the Stack Exchange family of Q&A websites")
* [Stack Apps](https://stackapps.com/ "apps, scripts, and development with the Stack Exchange API")
* [API](https://api.stackexchange.com/ "programmatic interaction with Stack Exchange sites")
* [Data](https://data.stackexchange.com/ "querying Stack Exchange data using SQL")

* [Blog](https://stackoverflow.blog/?blb=1)
* [Facebook](https://www.facebook.com/officialstackoverflow/)
* [Twitter](https://twitter.com/stackoverflow)
* [LinkedIn](https://linkedin.com/company/stack-overflow)
* [Instagram](https://www.instagram.com/thestackoverflow)

site design / logo © 2020 Stack Exchange Inc; user contributions licensed under [cc by-sa](https://stackoverflow.com/help/licensing).                    rev 2020.10.7.37758

Stack Overflow works best with JavaScript enabled
![](https://pixel.quantserve.com/pixel/p-c1rF4kxgLUzNc.gif)
