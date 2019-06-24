---
layout:     post   				    # 使用的布局（不需要改）
title:      onlayout monitor 				# 标题 
subtitle:   onLayout用来检测布局变化#副标题
date:       2016-09-29 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	APP							#标签
---
<h1><a id="onLayout_1"></a>onLayout用来检测布局变化</h1>
<p><a href="http://stackoverflow.com/questions/33770901/how-to-get-size-of-a-component-in-react-native">http://stackoverflow.com/questions/33770901/how-to-get-size-of-a-component-in-react-native</a></p>
<pre><code>'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var SampleApp = React.createClass({

  getInitialState() {
        return {
            x: '',
            y: '',
            width: '',
            height: '',
            viewHeight: 100
        }
    },

  measureView(event) {
    console.log('event peroperties: ', event);
    this.setState({
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y,
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height
        })
    },

    changeHeight() {
        this.setState({
        viewHeight: 200
      })
    },

  render: function() {
    return (
      &lt;View &gt;
       &lt;View onLayout={(event) =&gt; this.measureView(event)}  style={{height:this.state.viewHeight, marginTop:120, backgroundColor: 'orange'}}&gt;
                &lt;Text &gt;The outer view of this text is being measured!&lt;/Text&gt;
            &lt;Text&gt;x: {this.state.x}&lt;/Text&gt;
            &lt;Text&gt;y: {this.state.y}&lt;/Text&gt;
            &lt;Text&gt;width: {this.state.width}&lt;/Text&gt;
            &lt;Text&gt;height: {this.state.height}&lt;/Text&gt;
        &lt;/View&gt;

        &lt;TouchableHighlight style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', padding:15, backgroundColor: '#ddd', marginTop:10}} onPress={() =&gt; this.changeHeight() }&gt;
              &lt;Text style={{fontSize:18}}&gt;Change height of container&lt;/Text&gt;
        &lt;/TouchableHighlight&gt;
      &lt;/View&gt;
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('SampleApp', () =&gt; SampleApp);
</code></pre>
