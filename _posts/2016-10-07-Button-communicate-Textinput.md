---
layout:     post   				    # 使用的布局（不需要改）
title:      RN Button communicate Textinput 				# 标题
subtitle:   RN用button获得TextInput的值 #副标题
date:       2016-10-07 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="buttonTextInput_1"></a>用button获得TextInput的值</h1>
<p><strong>this.refs.input. _lastNativeText</strong></p>
<p>app.js:</p>
<p>import React, { Component } from ‘react’&lt;br&gt;</p>
<p>import { View, Text } from ‘react-native’&lt;br&gt;</p>
<p>import AddTodo from ‘./addtodo’</p>
<p>export default class App extends Component {&lt;br&gt;</p>
<p>render () {&lt;br&gt;</p>
<p>return (&lt;br&gt;</p>
<p>&lt;View &gt;&lt;br&gt;</p>
<p>&lt;AddTodo onAddClick = {text =&gt; console.log(‘add todo’,text) } /&gt;&lt;br&gt;</p>
<p>&lt;/View&gt;&lt;br&gt;</p>
<p>)&lt;br&gt;</p>
<p>}&lt;br&gt;</p>
<p>}</p>
<p>addtodo.js:</p>
<p>import React, {Component} from ‘react’&lt;br&gt;</p>
<p>import {View, TextInput, } from ‘react-native’&lt;br&gt;</p>
<p>import {Button} from ‘native-base’</p>
<p>export default class AddTodo extends Component {&lt;br&gt;</p>
<p>propTypes:{&lt;br&gt;</p>
<p>onAddClick : PropTypes.func.isRequired&lt;br&gt;</p>
<p>}&lt;br&gt;</p>
<p>render () {&lt;br&gt;</p>
<p>return (&lt;br&gt;</p>
<p>&lt;View&gt;&lt;br&gt;</p>
<p>&lt;TextInput ref=‘input’ style={{height: 40, borderColor: ‘gray’, borderWidth: 1,marginTop:100}} placeholder=‘example name’/&gt;&lt;br&gt;</p>
<p>&lt;Button onPress={() =&gt; this.handleClick()}&gt; Add &lt;/Button&gt;&lt;br&gt;</p>
<p>&lt;/View&gt;&lt;br&gt;</p>
<p>)&lt;br&gt;</p>
<p>}</p>
<p>handleClick() {&lt;br&gt;</p>
<p>console.log(this.refs.input. _lastNativeText)&lt;br&gt;</p>
<p>this.props.onAddClick(this.refs.input. _lastNativeText)&lt;br&gt;</p>
<p>}&lt;br&gt;</p>
<p>}</p>
