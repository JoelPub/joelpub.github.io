---
layout:     post   				    # 使用的布局（不需要改）
title:      RN child props 				# 标题
subtitle:   将变量全部传入子组件的props#副标题
date:       2016-10-07 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="props_1"></a>将变量全部传入子组件的props</h1>
<p>将变量全部传入子组件的props中： {…todo}</p>
<p>例如：</p>
<p>todolist：</p>
<p>import React, {Component} from ‘react’&lt;br&gt;</p>
<p>import {View} from ‘react-native’&lt;br&gt;</p>
<p>import Todo from ‘./todo’&lt;br&gt;</p>
<p>export default class TodoList extends Component {</p>
<p>render() {&lt;br&gt;</p>
<p>return (</p>
<p>&lt;View&gt;&lt;br&gt;</p>
<p>{this.props.todos.map((todo,index)=&gt; &lt;Todo <strong>{…todo}</strong> key={index} onClick={()=&gt; this.props.onTodoClick(index)} /&gt;&lt;br&gt;</p>
<p>)&lt;br&gt;</p>
<p>}&lt;br&gt;</p>
<p>&lt;/View&gt;&lt;br&gt;</p>
<p>)&lt;br&gt;</p>
<p>}&lt;br&gt;</p>
<p>}</p>
<p>todo：</p>
<p>import React, {Component} from ‘react’&lt;br&gt;</p>
<p>import {View,Text} from ‘react-native’&lt;br&gt;</p>
<p>import {Button} from ‘native-base’&lt;br&gt;</p>
<p>export default class Todo extends Component {&lt;br&gt;</p>
<p>render() {&lt;br&gt;</p>
<p>return (</p>
<p>&lt;Button onPress={this.props.onClick}&gt;&lt;br&gt;</p>
<p>&lt;Text style={{textDecorationLine: <strong>this.props.completed</strong>?‘line-through’:‘none’}}&gt;{ <strong>this.props.text</strong>}&lt;/Text&gt;&lt;br&gt;</p>
<p>&lt;/Button&gt;&lt;br&gt;</p>
<p>)&lt;br&gt;</p>
<p>}&lt;br&gt;</p>
<p>}</p>
