---
layout:     post   				    # 使用的布局（不需要改）
title:      将变量全部传入子组件的props 				# 标题 
subtitle:    #副标题
date:       2016-10-07 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	react native							#标签
---
<h1><a id="props_1"></a>将变量全部传入子组件的props</h1>
<p>将变量全部传入子组件的props中： {…todo}</p>
<p>例如：</p>
<p>todolist：</p>
<pre><code>
import React, {Component} from ‘react’
import {View} from ‘react-native’
import Todo from ‘./todo’
export default class TodoList extends Component {

render() {
return (
<View>
{this.props.todos.map((todo,index)=> <Todo {…todo} key={index} onClick={()=> this.props.onTodoClick(index)} />
)
}
</View>
)
}
}
</code></pre>
<p>todo</p>
<pre><code>
import React, {Component} from ‘react’
import {View,Text} from ‘react-native’
import {Button} from ‘native-base’
export default class Todo extends Component {
render() {
return (
<Button onPress={this.props.onClick}>
<Text style={{textDecorationLine:this.props.completed?’line-through’:’none’}}>{this.props.text}</Text>
</Button>
)
}
}


</code></pre>
