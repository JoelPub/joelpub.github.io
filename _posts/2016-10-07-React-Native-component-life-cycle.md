---
layout:     post   				    # 使用的布局（不需要改）
title:      React Native component life cycle 				# 标题 
subtitle:   React Native组件的生命周期 #副标题
date:       2016-10-07 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	React							#标签
---
<h1><a id="React_Native_1"></a>React Native组件的生命周期</h1>
<p><a href="http://www.race604.com/react-native-component-lifecycle/">http://www.race604.com/react-native-component-lifecycle/</a></p>
<h2><a id="_5"></a>概述</h2>
<p>就像 Android 开发中的 View 一样，React Native（RN） 中的组件也有生命周期（Lifecycle）。所谓生命周期，就是一个对象从开始生成到最后消亡所经历的状态，理解生命周期，是合理开发的关键。RN 组件的生命周期整理如下图：</p>
<p>![3-3-component-lifecycle](./React Native组件的生命周期 – Joel’s blog_files/3-3-component-lifecycle.jpg)</p>
<p>如图，可以把组件生命周期大致分为三个阶段：</p>
<ul>
<li>第一阶段：是组件第一次绘制阶段，如图中的上面虚线框内，在这里完成了组件的加载和初始化；</li>
<li>第二阶段：是组件在运行和交互阶段，如图中左下角虚线框，这个阶段组件可以处理用户交互，或者接收事件更新界面；</li>
<li>第三阶段：是组件卸载消亡的阶段，如图中右下角的虚线框中，这里做一些组件的清理工作。</li>
</ul>
<h2><a id="_17"></a>生命周期回调函数</h2>
<p>下面来详细介绍生命周期中的各回调函数。</p>
<h4><a id="getDefaultProps_21"></a>getDefaultProps</h4>
<p>在组件创建之前，会先调用 <code>getDefaultProps()</code>，这是全局调用一次，严格地来说，这不是组件的生命周期的一部分。在组件被创建并加载候，首先调用 <code>getInitialState()</code>，来初始化组件的状态。</p>
<h4><a id="componentWillMount_25"></a>componentWillMount</h4>
<p>然后，准备加载组件，会调用 <code>componentWillMount()</code>，其原型如下：</p>
<pre><code>void componentWillMount()
</code></pre>
<p>这个函数调用时机是在组件创建，并初始化了状态之后，在第一次绘制 <code>render()</code> 之前。可以在这里做一些业务初始化操作，也可以设置组件状态。这个函数在整个生命周期中只被调用一次。</p>
<h4><a id="componentDidMount_35"></a>componentDidMount</h4>
<p>在组件第一次绘制之后，会调用 <code>componentDidMount()</code>，通知组件已经加载完成。函数原型如下：</p>
<pre><code>void componentDidMount()
</code></pre>
<p>这个函数调用的时候，其虚拟 DOM 已经构建完成，你可以在这个函数开始获取其中的元素或者子组件了。需要注意的是，RN 框架是先调用子组件的 <code>componentDidMount()</code>，然后调用父组件的函数。从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 <code>setTimeout</code> 或者 <code>setInterval</code>，或者发起网络请求。这个函数也是只被调用一次。这个函数之后，就进入了稳定运行状态，等待事件触发。</p>
<h4><a id="componentWillReceiveProps_45"></a>componentWillReceiveProps</h4>
<p>如果组件收到新的属性（props），就会调用 <code>componentWillReceiveProps()</code>，其原型如下：</p>
<pre><code>void componentWillReceiveProps(
  object nextProps
)
</code></pre>
<p>输入参数 <code>nextProps</code> 是即将被设置的属性，旧的属性还是可以通过 <code>this.props</code> 来获取。在这个回调函数里面，你可以根据属性的变化，通过调用 <code>this.setState()</code> 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 <code>render()</code> 调用。如下：</p>
<pre><code>componentWillReceiveProps: function(nextProps) {
  this.setState({
    likesIncreasing: nextProps.likeCount &gt; this.props.likeCount
  });
}
</code></pre>
<h4><a id="shouldComponentUpdate_65"></a>shouldComponentUpdate</h4>
<p>当组件接收到新的属性和状态改变的话，都会触发调用 <code>shouldComponentUpdate(...)</code>，函数原型如下：</p>
<pre><code>boolean shouldComponentUpdate(
  object nextProps, object nextState
)
</code></pre>
<p>输入参数 <code>nextProps</code> 和上面的 <code>componentWillReceiveProps</code> 函数一样， <code>nextState</code> 表示组件即将更新的状态值。这个函数的返回值决定是否需要更新组件，如果 <code>true</code> 表示需要更新，继续走后面的更新流程。否者，则不更新，直接进入等待状态。</p>
<p>默认情况下，这个函数永远返回 <code>true</code> 用来保证数据变化的时候 UI 能够同步更新。在大型项目中，你可以自己重载这个函数，通过检查变化前后属性和状态，来决定 UI 是否需要更新，能有效提高应用性能。</p>
<h4><a id="componentWillUpdate_79"></a>componentWillUpdate</h4>
<p>如果组件状态或者属性改变，并且上面的 <code>shouldComponentUpdate(...)</code> 返回为 <code>true</code>，就会开始准更新组件，并调用 <code>componentWillUpdate()</code>，其函数原型如下：</p>
<pre><code>void componentWillUpdate(
  object nextProps, object nextState
)
</code></pre>
<p>输入参数与 <code>shouldComponentUpdate</code> 一样，在这个回调中，可以做一些在更新界面之前要做的事情。需要特别注意的是，在这个函数里面，你就不能使用 <code>this.setState</code> 来修改状态。这个函数调用之后，就会把 <code>nextProps</code> 和 <code>nextState</code> 分别设置到 <code>this.props</code> 和 <code>this.state</code> 中。紧接着这个函数，就会调用 <code>render()</code> 来更新界面了。</p>
<h4><a id="componentDidUpdate_91"></a>componentDidUpdate</h4>
<p>调用了 <code>render()</code> 更新完成界面之后，会调用 <code>componentDidUpdate()</code> 来得到通知，其函数原型如下：</p>
<pre><code>void componentDidUpdate(
  object prevProps, object prevState
)
</code></pre>
<p>因为到这里已经完成了属性和状态的更新了，此函数的输入参数变成了 <code>prevProps</code> 和 <code>prevState</code>。</p>
<h4><a id="componentWillUnmount_103"></a>componentWillUnmount</h4>
<p>当组件要被从界面上移除的时候，就会调用 <code>componentWillUnmount()</code>，其函数原型如下：</p>
<pre><code>void componentWillUnmount()
</code></pre>
<p>在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。</p>
<h2><a id="_113"></a>总结</h2>
<p>到这里，RN 的组件的完整的生命都介绍完了，在回头来看一下前面的图，就比较清晰了，把生命周期的回调函数总结成如下表格：</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>生命周期</th>
<th>调用次数</th>
<th>能否使用 setSate()</th>
</tr>
</thead>
<tbody>
<tr>
<td>getDefaultProps</td>
<td>1(全局调用一次)</td>
<td>否</td>
</tr>
<tr>
<td>getInitialState</td>
<td>1</td>
<td>否</td>
</tr>
<tr>
<td>componentWillMount</td>
<td>1</td>
<td>是</td>
</tr>
<tr>
<td>render</td>
<td>&gt;=1</td>
<td>否</td>
</tr>
<tr>
<td>componentDidMount</td>
<td>1</td>
<td>是</td>
</tr>
<tr>
<td>componentWillReceiveProps</td>
<td>&gt;=0</td>
<td>是</td>
</tr>
<tr>
<td>shouldComponentUpdate</td>
<td>&gt;=0</td>
<td>否</td>
</tr>
<tr>
<td>componentWillUpdate</td>
<td>&gt;=0</td>
<td>否</td>
</tr>
<tr>
<td>componentDidUpdate</td>
<td>&gt;=0</td>
<td>否</td>
</tr>
<tr>
<td>componentWillUnmount</td>
<td>1</td>
<td>否</td>
</tr>
</tbody>
</table>
