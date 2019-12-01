---
layout:     post   				    # 使用的布局（不需要改）
title:      Immutable.js 				# 标题 
subtitle:   了解一下   #副标题
date:       2019-12-01				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---

[Immutable.js了解一下？](https://juejin.im/post/5ac437436fb9a028c97a437c)   


# Immutable.js了解一下？

本篇只是对Immutable.js的简单介绍，后续会继续分享其具体实践应用。

![immutable.jpeg](/img/blog/Immutablejs_files/1628e77dc42b3228)

## 什么是Immutable Data？

> Immutable data encourages pure functions (data-in, data-out) and lends itself to much simpler application development and enabling techniques from functional programming such as lazy evaluation.<br>

-- 官方文档对其描述

Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 **Persistent Data Structure（持久化数据结构）**，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了[Structural Sharing（结构共享）](https://zhuanlan.zhihu.com/p/27133830?group_id=851585269567213568)，即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。请看下面动画：

![结构共享](/img/blog/Immutablejs_files/1628e77dc419816b)

## Immutable的优缺点一览

#### 优点

###### 1. 降低 Mutable 带来的复杂度

共享的可变状态是万恶之源，举个简单的例子就是js中的引用赋值：

```
var obj = { a: 1 };
var copy_obj = obj;
copy_obj.a = 2;
console.log(obj.a); // 2
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

引用赋值虽然可以节省内存，但当应用复杂之后，可变状态往往会变成噩梦，通常一般的做法是使用shallowCopy或者deepCopy来避免被修改，但这样造成了CPU和内存的消耗，不过Immulate可以很好地解决这些问题。

###### 2. 节省内存空间

上面提到了结构共享，Immutable.js 使用这种方式会尽量复用内存，甚至以前使用的对象也可以再次被复用。没有被引用的对象会被垃圾回收。

```
import { Map } from <span class="hljs-string">'immutable'</span>;
<span class="hljs-built_in">let</span> a = Map({
  select: <span class="hljs-string">'users'</span>,
  filter: Map({ name: <span class="hljs-string">'Cam'</span> })
})
<span class="hljs-built_in">let</span> b = a.set(<span class="hljs-string">'select'</span>, <span class="hljs-string">'people'</span>);

a === b; // <span class="hljs-literal">false</span>
a.get(<span class="hljs-string">'filter'</span>) === b.get(<span class="hljs-string">'filter'</span>); // <span class="hljs-literal">true</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

上面 a 和 b 共享了没有变化的 filter 节点。

###### 3. Undo/Redo，Copy/Paste，随意穿越！

因为每次数据都是不一样的，只要把这些数据放到一个数组里储存起来，想回退到哪里就拿出对应数据即可，很容易开发出撤销重做这种功能。

###### 4. 拥抱函数式编程

Immutable（持久化数据结构）本身就是函数式编程中的概念。[函数式编程](http://www.ruanyifeng.com/blog/2012/04/functional_programming.html)关心数据的映射，命令式编程关心解决问题的步骤，纯函数式编程比面向对象更适用于前端开发。因为只要输入一致，输出必然一致，这样开发的组件更易于调试和组装。

#### 缺点

抛开学习成本和额外引入的资源文件这些不说，我们来看看使用过程中有哪些不爽的地方。

###### 1. 容易与原生对象混

主要是Immutable的API设计的和原生对象类似，容易混淆操作。例如其中Map和List的操作：

```
// Immutable
const map = Map({ a: 1, b: 2 });
const list = List([1,2,3]);

// &#x539F;&#x751F;js
const obj = { a: 1, b: 2 };
const arry = [1,2,3];

// &#x53D6;&#x503C;&#x65B9;&#x5F0F;&#x5BF9;&#x6BD4;
console.log(map.get(<span class="hljs-string">'a'</span>));
console.log(list.get(0));
console.log(obj.a);
console.log(arry[0]);
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

## Immutable.js简介

Facebook 工程师 Lee Byron 花费 3 年时间打造，与 React 同期出现，但没有被默认放到 React 工具集里（React 提供了简化的 Helper）。它内部实现了一套完整的 Persistent Data Structure，还有很多易用的数据类型。像 Collection、List、Map、Set、Record、Seq。有非常全面的map、filter、groupBy、reduce``find函数式操作方法。同时 API 也尽量与 Object 或 Array 类似。

![immutablejs-getters-and-setters-everywhere.jpg](/img/blog/Immutablejs_files/1628e77dc441d090)

## Immutable.js 的几种数据类型

>

* List: 有序索引集，类似JavaScript中的Array。
* Map: 无序索引集，类似JavaScript中的Object。
* OrderedMap: 有序的Map，根据数据的set()进行排序。
* Set: 没有重复值的集合。
* OrderedSet: 有序的Set，根据数据的add进行排序。
* Stack: 有序集合，支持使用unshift()和shift()添加和删除。
* Record: 一个用于生成Record实例的类。类似于JavaScript的Object，但是只接收特定字符串为key，具有默认值。
* Seq: 序列，但是可能不能由具体的数据结构支持。
* Collection: 是构建所有数据结构的基类，不可以直接构建。

用的最多就是List和Map，所以在这里主要介绍这两种数据类型的API。

## Immutable.js 的常用API

###### fromJS()

作用：将一个js数据转换为Immutable类型的数据
用法： `fromJS(value, converter)`
简介：value是要转变的数据，converter是要做的操作。第二个参数可不填，默认情况会将数组准换为List类型，将对象转换为Map类型，其余不做操作

代码实现：

```
    const obj = Immutable.fromJS({a:<span class="hljs-string">'123'</span>,b:<span class="hljs-string">'234'</span>},<span class="hljs-keyword">function</span> (key, value, path) {
        console.log(key, value, path)
        <span class="hljs-built_in">return</span> isIndexed(value) ? value.toList() : value.toOrderedMap())
    })
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### toJS()

作用：将一个Immutable数据转换为JS类型的数据
用法： `value.toJS()`

###### is()

作用：对两个对象进行比较
用法： `is(map1,map2)`
简介：和js中对象的比较不同，在js中比较两个对象比较的是地址，但是在Immutable中比较的是这个对象hashCode和valueOf，只要两个对象的hashCode相等，值就是相同的，避免了深度遍历，提高了性能

代码实现：

```
import { Map, is } from <span class="hljs-string">'immutable'</span>
const map1 = Map({ a: 1, b: 1, c: 1 })
const map2 = Map({ a: 1, b: 1, c: 1 })
map1 === map2   //<span class="hljs-literal">false</span>
Object.is(map1, map2) // <span class="hljs-literal">false</span>
is(map1, map2) // <span class="hljs-literal">true</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### List() 和 Map()

作用：用来创建一个新的List/Map对象
用法:

```
//List
Immutable.List(); // &#x7A7A;List
Immutable.List([1, 2]);

//Map
Immutable.Map(); // &#x7A7A;Map
Immutable.Map({ a: <span class="hljs-string">'1'</span>, b: <span class="hljs-string">'2'</span> });
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### List.isList() 和 Map.isMap()

作用：判断一个数据结构是不是List/Map类型
用法：

```
List.isList([]); // <span class="hljs-literal">false</span>
List.isList(List()); // <span class="hljs-literal">true</span>

Map.isMap({}) // <span class="hljs-literal">false</span>
Map.isMap(Map()) // <span class="hljs-literal">true</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### size

作用：属性，获取List/Map的长度，等同于ImmutableData.count();

###### get() 、 getIn()

作用：获取数据结构中的数据

```
//&#x83B7;&#x53D6;List&#x7D22;&#x5F15;&#x7684;&#x5143;&#x7D20;
ImmutableData.get(0);

// &#x83B7;&#x53D6;Map&#x5BF9;&#x5E94;key&#x7684;value
ImmutableData.get(<span class="hljs-string">'a'</span>);

// &#x83B7;&#x53D6;&#x5D4C;&#x5957;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6570;&#x636E;
ImmutableData.getIn([1, 2]);

// &#x83B7;&#x53D6;&#x5D4C;&#x5957;map&#x7684;&#x6570;&#x636E;
ImmutableData.getIn([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>]);
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### has() 、 hasIn()

作用：判断是否存在某一个key
用法：

```
Immutable.fromJS([1,2,3,{a:4,b:5}]).has(<span class="hljs-string">'0'</span>); //<span class="hljs-literal">true</span>
Immutable.fromJS([1,2,3,{a:4,b:5}]).has(<span class="hljs-string">'0'</span>); //<span class="hljs-literal">true</span>
Immutable.fromJS([1,2,3,{a:4,b:5}]).hasIn([3,<span class="hljs-string">'b'</span>]) //<span class="hljs-literal">true</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### includes()

作用：判断是否存在某一个value
用法：

```
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(2); //<span class="hljs-literal">true</span>
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(<span class="hljs-string">'2'</span>); //<span class="hljs-literal">false</span> &#x4E0D;&#x5305;&#x542B;&#x5B57;&#x7B26;2
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(5); //<span class="hljs-literal">false</span>
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes({a:4,b:5}) //<span class="hljs-literal">false</span>
Immutable.fromJS([1,2,3,{a:4,b:5}]).includes(Immutable.fromJS({a:4,b:5})) //<span class="hljs-literal">true</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### first() 、 last()

作用：用来获取第一个元素或者最后一个元素，若没有则返回undefined
代码：

```
Immutable.fromJS([1,2,3,{a:4,b:5}]).first()//1
Immutable.fromJS([1,2,3,{a:4,b:5}]).last()//{a:4,b:5}

Immutable.fromJS({a:1,b:2,c:{d:3,e:4}}).first() //1
Immutable.fromJS({a:1,b:2,c:{d:3,e:4}}).first() //{d:3,e:4}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

数据修改
注：这里对于数据的修改，是对原数据进行操作后的值赋值给一个新的数据，并不会对原数据进行修改，因为Immutable是不可变的数据类型。

###### 设置 set()

作用：设置第一层key、index的值
用法：

```
const originalList = List([ 0 ]);
// List [ 0 ]
originalList.set(1, 1);
// List [ 0, 1 ]
originalList.set(0, <span class="hljs-string">'overwritten'</span>);
// List [ <span class="hljs-string">"overwritten"</span> ]
originalList.set(2, 2);
// List [ 0, undefined, 2 ]

List().set(50000, <span class="hljs-string">'value'</span>).size;
// 50001

const originalMap = Map()
const newerMap = originalMap.set(<span class="hljs-string">'key'</span>, <span class="hljs-string">'value'</span>)
const newestMap = newerMap.set(<span class="hljs-string">'key'</span>, <span class="hljs-string">'newer value'</span>)

originalMap
// Map {}
newerMap
// Map { <span class="hljs-string">"key"</span>: <span class="hljs-string">"value"</span> }
newestMap
// Map { <span class="hljs-string">"key"</span>: <span class="hljs-string">"newer value"</span> }
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

List在使用的时候，将index为number值设置为value。Map在使用的时候，将key的值设置为value。

在List中使用时，若传入的number为负数，则将index为size+index的值设置为value，例，若传入-1，则将size-1的值设为value。若传入的number的值超过了List的长度，则将List自动补全为传入的number的值，将number设置为value，其余用undefined补全。 **注：跟js中不同，List中不存在空位，[,,,],List中若没有值，则为undefined。**

###### setIn()

作用：设置深层结构中某属性的值
用法：

```
const originalMap = Map({
  subObject: Map({
    subKey: <span class="hljs-string">'subvalue'</span>,
    subSubObject: Map({
      subSubKey: <span class="hljs-string">'subSubValue'</span>
    })
  })
})

const newMap = originalMap.setIn([<span class="hljs-string">'subObject'</span>, <span class="hljs-string">'subKey'</span>], <span class="hljs-string">'ha ha!'</span>)
// Map {
//   <span class="hljs-string">"subObject"</span>: Map {
//     <span class="hljs-string">"subKey"</span>: <span class="hljs-string">"ha ha!"</span>,
//     <span class="hljs-string">"subSubObject"</span>: Map { <span class="hljs-string">"subSubKey"</span>: <span class="hljs-string">"subSubValue"</span> }
//   }
// }

const newerMap = originalMap.setIn(
  [<span class="hljs-string">'subObject'</span>, <span class="hljs-string">'subSubObject'</span>, <span class="hljs-string">'subSubKey'</span>],
  <span class="hljs-string">'ha ha ha!'</span>
)
// Map {
//   <span class="hljs-string">"subObject"</span>: Map {
//     <span class="hljs-string">"subKey"</span>: <span class="hljs-string">"subvalue"</span>,
//     <span class="hljs-string">"subSubObject"</span>: Map { <span class="hljs-string">"subSubKey"</span>: <span class="hljs-string">"ha ha ha!"</span> }
//   }
// }
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

用法与set()一样，只是第一个参数是一个数组，代表要设置的属性所在的位置

###### 删除 delete

作用：用来删除第一层结构中的属性
用法：

```
// List
List([ 0, 1, 2, 3, 4 ]).delete(0);
// List [ 1, 2, 3, 4 ]

// Map
const originalMap = Map({
  key: <span class="hljs-string">'value'</span>,
  otherKey: <span class="hljs-string">'other value'</span>
})
// Map { <span class="hljs-string">"key"</span>: <span class="hljs-string">"value"</span>, <span class="hljs-string">"otherKey"</span>: <span class="hljs-string">"other value"</span> }
originalMap.delete(<span class="hljs-string">'otherKey'</span>)
// Map { <span class="hljs-string">"key"</span>: <span class="hljs-string">"value"</span> }
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### deleteIn()

用来删除深层数据，用法参考setIn

###### deleteAll() (Map独有，List没有)

作用：用来删除Map中的多个key
用法：deleteAll(keys: Iterable): this
代码示例：

```
const names = Map({ a: <span class="hljs-string">"Aaron"</span>, b: <span class="hljs-string">"Barry"</span>, c: <span class="hljs-string">"Connor"</span> })
names.deleteAll([ <span class="hljs-string">'a'</span>, <span class="hljs-string">'c'</span> ])
// Map { <span class="hljs-string">"b"</span>: <span class="hljs-string">"Barry"</span> }
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### 更新 update()

作用：对对象中的某个属性进行更新，可对原数据进行相关操作
用法：

```
////List
const list = List([ <span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span> ])
const result = list.update(2, val => val.toUpperCase())

///Map
const aMap = Map({ key: <span class="hljs-string">'value'</span> })
const newMap = aMap.update(<span class="hljs-string">'key'</span>, value => value + value)
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### updateIn()

用法参考setIn

###### 清除 clear()

作用：清除所有数据
用法： `clear(): this`
代码示例：

```
Map({ key: <span class="hljs-string">'value'</span> }).clear()  //Map
List([ 1, 2, 3, 4 ]).clear()   // List
List&#x4E2D;&#x7684;&#x5404;&#x79CD;&#x5220;&#x9664;&#x4E0E;&#x63D2;&#x5165;
List&#x5BF9;&#x5E94;&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x662F;js&#x4E2D;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6240;&#x4EE5;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x4E9B;&#x65B9;&#x6CD5;&#x5728;Immutable&#x4E2D;&#x4E5F;&#x662F;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x6BD4;&#x5982;push&#xFF0C;pop,<span class="hljs-built_in">shift</span>&#xFF0C;
unshift&#xFF0C;insert&#x3002;
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### push()

在List末尾插入一个元素

###### pop()

在List末尾删除一个元素

###### unshift

在List首部插入一个元素

###### shift

在List首部删除一个元素

###### insert

在List的index处插入元素
代码实现：

```
List([ 0, 1, 2, 3, 4 ]).insert(6, 5)
//List [ 0, 1, 2, 3, 4, 5 ]
List([ 1, 2, 3, 4 ]).push(5)
// List [ 1, 2, 3, 4, 5 ]
List([ 1, 2, 3, 4 ]).pop()
// List[ 1, 2, 3 ]
List([ 2, 3, 4]).unshift(1);
// List [ 1, 2, 3, 4 ]
List([ 0, 1, 2, 3, 4 ]).shift();
// List [ 1, 2, 3, 4 ]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

List中还有一个特有的方法用法设置List的长度，setSize()

```
List([]).setSize(2).toJS() //[undefined,undefined]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

关于merge

###### merge

作用：浅合并，新数据与旧数据对比，旧数据中不存在的属性直接添加，就数据中已存在的属性用新数据中的覆盖

###### mergrWith

作用：自定义浅合并，可自行设置某些属性的值

###### mergeIn

作用：对深层数据进行浅合并

###### mergeDeep

作用：深合并，新旧数据中同时存在的的属性为新旧数据合并之后的数据

###### mergeDeepIn

作用：对深层数据进行深合并

###### mergrDeepWith

作用：自定义深合并，可自行设置某些属性的值

这里用一段示例彻底搞懂merge，此示例为Map结构，List与Map原理相同

```
 const Map1 = Immutable.fromJS({a:111,b:222,c:{d:333,e:444}});
 const Map2 = Immutable.fromJS({a:111,b:222,c:{e:444,f:555}});

 const Map3 = Map1.merge(Map2);
  //Map {a:111,b:222,c:{e:444,f:555}}
 const Map4 = Map1.mergeDeep(Map2);
  //Map {a:111,b:222,c:{d:333,e:444,f:555}}
 const Map5 = Map1.mergeWith((oldData,newData,key)=>{
      <span class="hljs-keyword">if</span>(key === <span class="hljs-string">'a'</span>){
        <span class="hljs-built_in">return</span> 666;
      }<span class="hljs-keyword">else</span>{
        <span class="hljs-built_in">return</span> newData
      }
    },Map2);
  //Map {a:666,b:222,c:{e:444,f:555}}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

序列算法

###### concat()

作用：对象的拼接，用法与js数组中的concat()相同，返回一个新的对象。
用法： `const List = list1.concat(list2)`

###### map()

作用：遍历整个对象，对Map/List元素进行操作，返回一个新的对象。
用法：

```
Map({a:1,b:2}).map(val=>10*val)
//Map{a:10,b:20}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### Map特有的mapKey()

作用：遍历整个对象，对Map元素的key进行操作，返回一个新的对象。
用法：

```
Map({a:1,b:2}).mapKey(val=>val+<span class="hljs-string">'l'</span>)
//Map{al:10,bl:20}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### Map特有的mapEntries()

作用：遍历整个对象，对Map元素的key和value同时进行操作，返回一个新的对象。Map的map()也可实现此功能。
用法：

```
Map({a:1,b:2}).map((key,val)=>{
  <span class="hljs-built_in">return</span> [key+<span class="hljs-string">'l'</span>,val*10]
})
//Map{al:10,bl:20}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### 过滤 filter

作用：返回一个新的对象，包括所有满足过滤条件的元素
用法：

```
Map({a:1,b:2}).filter((key,val)=>{
  <span class="hljs-built_in">return</span> val == 2
})
//Map{b:2}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

还有一个filterNot()方法，与此方法正好相反。

###### 反转 reverse

作用：将数据的结构进行反转
代码示例：

```
Immutable.fromJS([1, 2, 3, 4, 5]).reverse();
// List [5,4,3,2,1]
Immutable.fromJS({a:1,b:{c:2,d:3},e:4}).recerse();
//Map {e:4,b:{c:2,d:3},a:1}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### 排序 sort & sortBy

作用：对数据结构进行排序
代码示例：

```
///List
Immutable.fromJS([4,3,5,2,6,1]).sort()
// List [1,2,3,4,5,6]
Immutable.fromJS([4,3,5,2,6,1]).sort((a,b)=>{
  <span class="hljs-keyword">if</span> (a < b) { <span class="hljs-built_in">return</span> -1; }
  <span class="hljs-keyword">if</span> (a > b) { <span class="hljs-built_in">return</span> 1; }
  <span class="hljs-keyword">if</span> (a === b) { <span class="hljs-built_in">return</span> 0; }
})
// List [1,2,3,4,5,6]
Immutable.fromJS([{a:3},{a:2},{a:4},{a:1}]).sortBy((val,index,obj)=>{
  <span class="hljs-built_in">return</span> val.get(<span class="hljs-string">'a'</span>)
},(a,b)=>{
  <span class="hljs-keyword">if</span> (a < b) { <span class="hljs-built_in">return</span> -1; }
  <span class="hljs-keyword">if</span> (a > b) { <span class="hljs-built_in">return</span> 1; }
  <span class="hljs-keyword">if</span> (a === b) { <span class="hljs-built_in">return</span> 0; }
})
//List  [ {a:3}, {a:2}, {a:4}, {a:1} ]

//Map

Immutable.fromJS( {b:1, a: 3, c: 2, d:5} ).sort()
//Map {b: 1, c: 2, a: 3, d: 5}
Immutable.fromJS( {b:1, a: 3, c: 2, d:5} ).sort((a,b)=>{
  <span class="hljs-keyword">if</span> (a < b) { <span class="hljs-built_in">return</span> -1; }
  <span class="hljs-keyword">if</span> (a > b) { <span class="hljs-built_in">return</span> 1; }
  <span class="hljs-keyword">if</span> (a === b) { <span class="hljs-built_in">return</span> 0; }
})
//Map {b: 1, c: 2, a: 3, d: 5}
Immutable.fromJS( {b:1, a: 3, c: 2, d:5} ).sortBy((value, key, obj)=> {
  <span class="hljs-built_in">return</span> value
})
//Map {b: 1, c: 2, a: 3, d: 5}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### 分组 groupBy

作用：对数据进行分组

```
const listOfMaps = List([
  Map({ v: 0 }),
  Map({ v: 1 }),
  Map({ v: 1 }),
  Map({ v: 0 }),
  Map({ v: 2 })
])
const groupsOfMaps = listOfMaps.groupBy(x => x.get(<span class="hljs-string">'v'</span>))
// Map {
//   0: List [ Map{ <span class="hljs-string">"v"</span>: 0 }, Map { <span class="hljs-string">"v"</span>: 0 } ],
//   1: List [ Map{ <span class="hljs-string">"v"</span>: 1 }, Map { <span class="hljs-string">"v"</span>: 1 } ],
//   2: List [ Map{ <span class="hljs-string">"v"</span>: 2 } ],
// }
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### 查找数据

indexOf() 、 lastIndexOf Map不存在此方法
作用：和js数组中的方法相同，查找第一个或者最后一个value的index值，找不到则返回-1
用法：

```
Immutable.fromJS([1,2,3,4]).indexof(3) //2
Immutable.fromJS([1,2,3,4]).lastIndexof(3) //2
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### findIndex() 、 findLastIndex() Map不存在此方法

作用：查找满足要求的元素的index值
用法：

```
Immutable.fromJS([1,2,3,4]).findIndex((value,index,array)=>{
  <span class="hljs-built_in">return</span> value%2 === 0;
})   // 1
Immutable.fromJS([1,2,3,4]).findLastIndex((value,index,array)=>{
  <span class="hljs-built_in">return</span> index%2 === 0;
})  // 3
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### find() 、 findLast()

作用：查找满足条件的元素的value值
用法：

```
Immutable.fromJS([1,2,3,4]).find((value,index,array)=>{
  <span class="hljs-built_in">return</span> value%2 === 0;
})  // 2

Immutable.fromJS([1,2,3,4]).findLast((value,index,array)=>{
  <span class="hljs-built_in">return</span> value%2 === 0;
})  // 4
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### findKey() 、 findLastKey()

作用：查找满足条件的元素的key值
用法：

```
Immutable.fromJS([1,2,3,4]).findKey((value,index,array)=>{
  <span class="hljs-built_in">return</span> value%2 === 0;
})  // 1

Immutable.fromJS([1,2,3,4]).findLastKey((value,index,array)=>{
  <span class="hljs-built_in">return</span> value%2 === 0;
})  // 3
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### findEntry() 、 findLastEntry()

作用：查找满足条件的元素的键值对 key:value
用法：

```
Immutable.fromJS([1,2,3,4]).findEntry((value,index,array)=>{
  <span class="hljs-built_in">return</span> value%2 === 0;
})  // [1,2]

Immutable.fromJS([1,2,3,4]).findLastEntry((value,index,array)=>{
  <span class="hljs-built_in">return</span> value%2 === 0;
})  // [3,4]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### keyOf() lastKeyOf()

作用：查找某一个value对应的key值
用法：

```
Immutable.fromJS([1,2,3,4]).keyOf(2) //1
Immutable.fromJS([1,2,3,4]).lastKeyOf(2) //1
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### max() 、 maxBy()

作用：查找最大值
用法:

```
Immutable.fromJS([1, 2, 3, 4]).max() //4

Immutable.fromJS([{a;1},{a:2},{a: 3},{a:4}]).maxBy((value,index,array)=>{
  <span class="hljs-built_in">return</span> value.get(<span class="hljs-string">'a'</span>)
})  //{a:4}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### min() 、 minBy()

作用：查找最小值
用法:

```
Immutable.fromJS([1, 2, 3, 4]).min() //1

Immutable.fromJS([{a;1},{a:2},{a: 3},{a:4}]).minBy((value,index,array)=>{
  <span class="hljs-built_in">return</span> value.get(<span class="hljs-string">'a'</span>)
})  //{a:1}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

创建子集

###### slice()

作用： 和原生js中数组的slice数组一样，包含两个参数，start和end，start代表开始截取的位置，end代表结束的位置，不包括第end的元素。若不包括end，则返回整个对象，若end为负数，则返回（start，length-end）对应的数据。若start只有一个并且为负数，则返回最后的end个元素。
用法：

```
Immutable.fromJS([1, 2, 3, 4]).slice(0); //[1,2,3,4]
Immutable.fromJS([1, 2, 3, 4]).slice(0,2); //[1,2]
Immutable.fromJS([1, 2, 3, 4]).slice(-2); //[3,4]
Immutable.fromJS([1, 2, 3, 4]).slice(0,-2); //[1,2]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### rest()

作用：返回除第一个元素之外的所有元素
用法:

```
Immutable.fromJS([1, 2, 3, 4]).rest()//[2,3,4]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### butLast()

作用：返回除最后一个元素之外的所有元素
用法:

```
Immutable.fromJS([1, 2, 3, 4]).rest()//[1,2,3]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### skip()

作用：有一个参数n, 返回截掉前n个元素之后剩下的所有元素
用法:

```
Immutable.fromJS([1, 2, 3, 4]).skip(1)//[2,3,4]\
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### skipLast()

作用：有一个参数n, 返回截掉最后n个元素之后剩下的所有元素
用法:

```
Immutable.fromJS([1, 2, 3, 4]).skip(1)//[1,2,3]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### skipWhile()

作用：返回从第一次返回false之后的所有元素

```
Immutable.fromJS([1, 2, 3, 4]).skipWhile(list.skipWhile((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
}))// [1,2,3,4]
skipUntil()
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

作用：返回从第一次返回true之后的所有元素

```
Immutable.fromJS([1, 2, 3, 4]).skipUntil(list.skipWhile((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
}))// [3,4]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### take()

作用：有一个参数n, 返回前n个元素
用法：

```
Immutable.fromJS([1, 2, 3, 4]).take(2)//[1,2]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### takeLast()

作用：有一个参数n, 返回最后n个元素
用法：

```
Immutable.fromJS([1, 2, 3, 4]).takeLast(2)//[3,4]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### takeWhile()

作用：返回从第一次返回false之前的所有元素

```
Immutable.fromJS([1, 2, 3, 4]).skipWhile(list.takeWhile((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
}))// []
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### takeUntil()

作用：返回从第一次返回true之前的所有元素

```
Immutable.fromJS([1, 2, 3, 4]).skipUntil(list.takeUntil((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
}))// [1,2]
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

处理数据

###### reduce()

作用：和js中数组中的reduce相同,按索引升序的顺序处理元素
用法：

```
Immutable.fromJS([1,2,3,4]).reduce((pre,next,index,arr)=>{
  console.log(pre+next)
  <span class="hljs-built_in">return</span> pre+next;
})
// 3 6 10
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### reduceRight()

作用：和js中数组中的reduce相同,按索引降序的顺序处理元素
用法：

```
Immutable.fromJS([1,2,3,4]).reduceRight((pre,next,index,arr)=>{
  console.log(pre+next)
  <span class="hljs-built_in">return</span> pre+next;
})
// 7 9 10
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### every()

作用：判断整个对象总中所有的元素是不是都满足某一个条件，都满足返回true，反之返回false。

代码：

```
Immutable.fromJS([1,2,3,4]).every((value,index,arr)=>{
  <span class="hljs-built_in">return</span> value > 2
}) // <span class="hljs-literal">false</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### some()

作用：判断整个对象总中所有的元素是不是存在满足某一个条件的元素，若存在返回true，反之返回false。
代码：

```
Immutable.fromJS([1,2,3,4]).some((value,index,arr)=>{
  <span class="hljs-built_in">return</span> value > 2
}) // <span class="hljs-literal">true</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### join()

作用：同js中数组的join方法。把准换为字符串
用法：

```
Immutable.fromJS([1,2,3,4]).join(<span class="hljs-string">','</span>) //1,2,3,4
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### isEmpty()

作用：判断是否为空
用法:

```
Immutable.fromJS([]).isEmpty(); // <span class="hljs-literal">true</span>
Immutable.fromJS({}).isEmpty(); // <span class="hljs-literal">true</span>
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### count()

作用：返回元素个数，可自定义条件，返回满足条件的个数
用法：

```
const list = Immutable.fromJS([1,2,3,4]);
const map = Immutable.fromJS({a:1,b:2,c:3,d:4});

list.count((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
})    //2

map.count((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
})    //2
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

###### countBy()

作用：与count不同的是，countBy返回一个对象
用法：

```
const list = Immutable.fromJS([1,2,3,4]);
const map = Immutable.fromJS({a:1,b:2,c:3,d:4});

list.countBy((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
} //{<span class="hljs-literal">false</span>: 2, <span class="hljs-literal">true</span>: 2}

map.countBy((value,index,list)=>{
  <span class="hljs-built_in">return</span> value > 2;
} //{<span class="hljs-literal">false</span>: 2, <span class="hljs-literal">true</span>: 2}
<span class="copy-code-btn">&#x590D;&#x5236;&#x4EE3;&#x7801;</span>
```

### 参考

[immutable-js官方文档](http://facebook.github.io/immutable-js/docs/#/List/delete)
 