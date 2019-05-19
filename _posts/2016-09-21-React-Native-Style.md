---
layout:     post   				    # 使用的布局（不需要改）
title:      React Native Style 				# 标题 
subtitle:   RN的样式 #副标题
date:       2016-09-21 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	React							#标签
---
<h1><a id="React_Native_Style_1"></a>React Native Style</h1>
<p><a href="http://reactnative.cn/docs/0.31/layout-props.html">http://reactnative.cn/docs/0.31/layout-props.html</a></p>
<h4><a id="alignItems_enumflexstart_flexend_center_stretch_5"></a>alignItems enum(‘flex-start’, ‘flex-end’, ‘center’, ‘stretch’)</h4>
<p><code>alignItems</code> aligns children in the cross direction. For example, if children are flowing vertically, <code>alignItems</code> controls how they align horizontally. It works like <code>align-items</code> in CSS, except the default value is <code>stretch</code> instead of <code>flex-start</code>. See <a href="https://css-tricks.com/almanac/properties/a/align-items/">https://css-tricks.com/almanac/properties/a/align-items/</a> for more detail.</p>
<h4><a id="alignSelf_enumauto_flexstart_flexend_center_stretch_9"></a>alignSelf enum(‘auto’, ‘flex-start’, ‘flex-end’, ‘center’, ‘stretch’)</h4>
<p><code>alignSelf</code> controls how a child aligns in the cross direction, overriding the <code>alignItems</code> of the parent. It works like <code>align-self</code> in CSS. See <a href="https://css-tricks.com/almanac/properties/a/align-self/">https://css-tricks.com/almanac/properties/a/align-self/</a> for more detail.</p>
<h4><a id="borderBottomWidth_number_13"></a>borderBottomWidth number</h4>
<p><code>borderBottomWidth</code> works like <code>border-bottom-width</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_border-bottom_width.asp">http://www.w3schools.com/cssref/pr_border-bottom_width.asp</a> for more details.</p>
<h4><a id="borderLeftWidth_number_17"></a>borderLeftWidth number</h4>
<p><code>borderLeftWidth</code> works like <code>border-left-width</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_border-bottom_width.asp">http://www.w3schools.com/cssref/pr_border-bottom_width.asp</a>for more details.</p>
<h4><a id="borderRightWidth_number_21"></a>borderRightWidth number</h4>
<p><code>borderRightWidth</code> works like <code>border-right-width</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_border-right_width.asp">http://www.w3schools.com/cssref/pr_border-right_width.asp</a>for more details.</p>
<h4><a id="borderTopWidth_number_25"></a>borderTopWidth number</h4>
<p><code>borderTopWidth</code> works like <code>border-top-width</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_border-top_width.asp">http://www.w3schools.com/cssref/pr_border-top_width.asp</a> for more details.</p>
<h4><a id="borderWidth_number_29"></a>borderWidth number</h4>
<p><code>borderWidth</code> works like <code>border-width</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_border-width.asp">http://www.w3schools.com/cssref/pr_border-width.asp</a> for more details.</p>
<h4><a id="bottom_number_33"></a>bottom number</h4>
<p><code>bottom</code> is the number of logical pixels to offset the bottom edge of this component.</p>
<p>It works similarly to <code>bottom</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/bottom">https://developer.mozilla.org/en-US/docs/Web/CSS/bottom</a> for more details of how <code>top</code> affects layout.</p>
<h4><a id="flex_number_41"></a>flex number</h4>
<p>In React Native <code>flex</code> does not work the same way that it does in CSS. <code>flex</code> is a number rather than a string, and it works according to the <code>css-layout</code> library at <a href="https://github.com/facebook/css-layout">https://github.com/facebook/css-layout</a> .</p>
<p>When <code>flex</code> is a positive number, it makes the component flexible and it will be sized proportional to its flex value. So a component with <code>flex</code> set to 2 will take twice the space as a component with <code>flex</code> set to 1.</p>
<p>When <code>flex</code> is 0, the component is sized according to <code>width</code> and <code>height</code> and it is inflexible.</p>
<p>When <code>flex</code> is -1, the component is normally sized according <code>width</code> and <code>height</code>. However, if there’s not enough space, the component will shrink to its <code>minWidth</code> and <code>minHeight</code>.</p>
<h4><a id="flexDirection_enumrow_rowreverse_column_columnreverse_51"></a>flexDirection enum(‘row’, ‘row-reverse’, ‘column’, ‘column-reverse’)</h4>
<p><code>flexDirection</code> controls which directions children of a container go. <code>row</code> goes left to right, <code>column</code> goes top to bottom, and you may be able to guess what the other two do. It works like <code>flex-direction</code> in CSS, except the default is <code>column</code>. See <a href="https://css-tricks.com/almanac/properties/f/flex-direction/">https://css-tricks.com/almanac/properties/f/flex-direction/</a> for more detail.</p>
<h4><a id="flexWrap_enumwrap_nowrap_55"></a>flexWrap enum(‘wrap’, ‘nowrap’)</h4>
<p><code>flexWrap</code> controls whether children can wrap around after they hit the end of a flex container. It works like <code>flex-wrap</code> in CSS. See <a href="https://css-tricks.com/almanac/properties/f/flex-wrap/">https://css-tricks.com/almanac/properties/f/flex-wrap/</a> for more detail.</p>
<h4><a id="height_number_59"></a>height number</h4>
<p><code>height</code> sets the height of this component.</p>
<p>It works similarly to <code>height</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that. See <a href="http://www.w3schools.com/cssref/pr_dim_width.asp">http://www.w3schools.com/cssref/pr_dim_width.asp</a> for more details.</p>
<h4><a id="justifyContent_enumflexstart_flexend_center_spacebetween_spacearound_65"></a>justifyContent enum(‘flex-start’, ‘flex-end’, ‘center’, ‘space-between’, ‘space-around’)</h4>
<p><code>justifyContent</code> aligns children in the main direction. For example, if children are flowing vertically, <code>justifyContent</code> controls how they align vertically. It works like <code>justify-content</code> in CSS. See <a href="https://css-tricks.com/almanac/properties/j/justify-content/">https://css-tricks.com/almanac/properties/j/justify-content/</a> for more detail.</p>
<h4><a id="left_number_69"></a>left number</h4>
<p><code>left</code> is the number of logical pixels to offset the left edge of this component.</p>
<p>It works similarly to <code>left</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/left">https://developer.mozilla.org/en-US/docs/Web/CSS/left</a> for more details of how <code>left</code> affects layout.</p>
<h4><a id="margin_number_77"></a>margin number</h4>
<p>Setting <code>margin</code> has the same effect as setting each of <code>marginTop</code>, <code>marginLeft</code>, <code>marginBottom</code>, and <code>marginRight</code>.</p>
<h4><a id="marginBottom_number_81"></a>marginBottom number</h4>
<p><code>marginBottom</code> works like <code>margin-bottom</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_margin-bottom.asp">http://www.w3schools.com/cssref/pr_margin-bottom.asp</a> for more details.</p>
<h4><a id="marginHorizontal_number_85"></a>marginHorizontal number</h4>
<p>Setting <code>marginHorizontal</code> has the same effect as setting both <code>marginLeft</code> and <code>marginRight</code>.</p>
<h4><a id="marginLeft_number_89"></a>marginLeft number</h4>
<p><code>marginLeft</code> works like <code>margin-left</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_margin-left.asp">http://www.w3schools.com/cssref/pr_margin-left.asp</a> for more details.</p>
<h4><a id="marginRight_number_93"></a>marginRight number</h4>
<p><code>marginRight</code> works like <code>margin-right</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_margin-right.asp">http://www.w3schools.com/cssref/pr_margin-right.asp</a> for more details.</p>
<h4><a id="marginTop_number_97"></a>marginTop number</h4>
<p><code>marginTop</code> works like <code>margin-top</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_margin-top.asp">http://www.w3schools.com/cssref/pr_margin-top.asp</a> for more details.</p>
<h4><a id="marginVertical_number_101"></a>marginVertical number</h4>
<p>Setting <code>marginVertical</code> has the same effect as setting both <code>marginTop</code> and <code>marginBottom</code>.</p>
<h4><a id="maxHeight_number_105"></a>maxHeight number</h4>
<p><code>maxHeight</code> is the maximum height for this component, in logical pixels.</p>
<p>It works similarly to <code>max-height</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="http://www.w3schools.com/cssref/pr_dim_max-height.asp">http://www.w3schools.com/cssref/pr_dim_max-height.asp</a> for more details.</p>
<h4><a id="maxWidth_number_113"></a>maxWidth number</h4>
<p><code>maxWidth</code> is the maximum width for this component, in logical pixels.</p>
<p>It works similarly to <code>max-width</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="http://www.w3schools.com/cssref/pr_dim_max-width.asp">http://www.w3schools.com/cssref/pr_dim_max-width.asp</a> for more details.</p>
<h4><a id="minHeight_number_121"></a>minHeight number</h4>
<p><code>minHeight</code> is the minimum height for this component, in logical pixels.</p>
<p>It works similarly to <code>min-height</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="http://www.w3schools.com/cssref/pr_dim_min-height.asp">http://www.w3schools.com/cssref/pr_dim_min-height.asp</a> for more details.</p>
<h4><a id="minWidth_number_129"></a>minWidth number</h4>
<p><code>minWidth</code> is the minimum width for this component, in logical pixels.</p>
<p>It works similarly to <code>min-width</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="http://www.w3schools.com/cssref/pr_dim_min-width.asp">http://www.w3schools.com/cssref/pr_dim_min-width.asp</a> for more details.</p>
<h4><a id="padding_number_137"></a>padding number</h4>
<p><code>padding</code> works like <code>padding</code> in CSS. It’s like setting each of <code>paddingTop</code>, <code>paddingBottom</code>, <code>paddingLeft</code>, and <code>paddingRight</code> to the same thing. See <a href="http://www.w3schools.com/css/css_padding.asp">http://www.w3schools.com/css/css_padding.asp</a> for more details.</p>
<h4><a id="paddingBottom_number_141"></a>paddingBottom number</h4>
<p><code>paddingBottom</code> works like <code>padding-bottom</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_padding-bottom.asp">http://www.w3schools.com/cssref/pr_padding-bottom.asp</a> for more details.</p>
<h4><a id="paddingHorizontal_number_145"></a>paddingHorizontal number</h4>
<p>Setting <code>paddingHorizontal</code> is like setting both of <code>paddingLeft</code> and <code>paddingRight</code>.</p>
<h4><a id="paddingLeft_number_149"></a>paddingLeft number</h4>
<p><code>paddingLeft</code> works like <code>padding-left</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_padding-left.asp">http://www.w3schools.com/cssref/pr_padding-left.asp</a> for more details.</p>
<h4><a id="paddingRight_number_153"></a>paddingRight number</h4>
<p><code>paddingRight</code> works like <code>padding-right</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_padding-right.asp">http://www.w3schools.com/cssref/pr_padding-right.asp</a> for more details.</p>
<h4><a id="paddingTop_number_157"></a>paddingTop number</h4>
<p><code>paddingTop</code> works like <code>padding-top</code> in CSS. See <a href="http://www.w3schools.com/cssref/pr_padding-top.asp">http://www.w3schools.com/cssref/pr_padding-top.asp</a> for more details.</p>
<h4><a id="paddingVertical_number_161"></a>paddingVertical number</h4>
<p>Setting <code>paddingVertical</code> is like setting both of <code>paddingTop</code> and <code>paddingBottom</code>.</p>
<h4><a id="position_enumabsolute_relative_165"></a>position enum(‘absolute’, ‘relative’)</h4>
<p><code>position</code> in React Native is similar to regular CSS, but everything is set to <code>relative</code> by default, so <code>absolute</code> positioning is always just relative to the parent.</p>
<p>If you want to position a child using specific numbers of logical pixels relative to its parent, set the child to have <code>absolute</code>position.</p>
<p>If you want to position a child relative to something that is not its parent, just don’t use styles for that. Use the component tree.</p>
<p>See <a href="https://github.com/facebook/css-layout">https://github.com/facebook/css-layout</a> for more details on how <code>position</code> differs between React Native and CSS.</p>
<h4><a id="right_number_175"></a>right number</h4>
<p><code>right</code> is the number of logical pixels to offset the right edge of this component.</p>
<p>It works similarly to <code>right</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/right">https://developer.mozilla.org/en-US/docs/Web/CSS/right</a> for more details of how <code>right</code> affects layout.</p>
<h4><a id="top_number_183"></a>top number</h4>
<p><code>top</code> is the number of logical pixels to offset the top edge of this component.</p>
<p>It works similarly to <code>top</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/top">https://developer.mozilla.org/en-US/docs/Web/CSS/top</a> for more details of how <code>top</code> affects layout.</p>
<h4><a id="width_number_191"></a>width number</h4>
<p><code>width</code> sets the width of this component.</p>
<p>It works similarly to <code>width</code> in CSS, but in React Native you must use logical pixel units, rather than percents, ems, or any of that. See <a href="http://www.w3schools.com/cssref/pr_dim_width.asp">http://www.w3schools.com/cssref/pr_dim_width.asp</a> for more details.</p>
<h4><a id="zIndex_number_197"></a>zIndex number</h4>
<p><code>zIndex</code> controls which components display on top of others. Normally, you don’t use <code>zIndex</code>. Components render according to their order in the document tree, so later components draw over earlier ones. <code>zIndex</code> may be useful if you have animations or custom modal interfaces where you don’t want this behavior.</p>
<p>It works like the CSS <code>z-index</code> property – components with a larger <code>zIndex</code> will render on top. Think of the z-direction like it’s pointing from the phone into your eyeball. See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index">https://developer.mozilla.org/en-US/docs/Web/CSS/z-index</a> for more detail.</p>
