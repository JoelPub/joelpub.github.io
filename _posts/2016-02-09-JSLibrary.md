---
layout:     post   				    # 使用的布局（不需要改）
title:      javascript library 				# 标题 
subtitle:   How to create your own javascript library   #副标题
date:       2016-02-09 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	JavaScript							#标签
---



# How to create your own javascript library

* <time>February 09 2016</time>
* 43.3K [Español](https://ourcodeworld.co/articulos/leer/37/como-crear-tu-propia-biblioteca-javascript) [English](https://ourcodeworld.com/articles/read/37/how-to-create-your-own-javascript-library)

There are many facts and important points of why create your own library in javascript :

* <u>Feels pretty cool</u>
* Is a good way to organize your code
* Your code will be more maintainable
* Share easily with whoever you want
* Write what you always need once

But always before write your own plugin you need to have a clear idea, <b>why i want to write this plugin</b>, is recommendable that you search good on google if there's already a plugin that makes what you want to achieve, this will be quicker,easily to integrate and may be even better than what you're tryng to do, remember : <b>We don't want to re-create the wheel, that's very inproductive and we should avoid it if we are allowed to.</b>

<b>In this tutorial, we are going to create a simple library with pure javascript without prototyping, we'll use native objects instead.</b>

<b>[If you want to know what's the difference between the use of prototype and manage manually objects, this post should help to clear your doubts.](http://stackoverflow.com/questions/8433459/js-why-use-prototype)</b>

<b>1) Create the basic structure</b>

The following code will create a global variable accesible after the code is executed called <b>myWindowGlobalLibraryName</b>.

```
(function(window){
  // You can enable the strict mode commenting the following line
  // 'use strict';

  // This function will contain all our code
  function myLibrary(){
    var _myLibraryObject = {};

    // We will add functions to our library here !

    return _myLibraryObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window); // We send the window variable withing our function

// Then we can call it using
console.log(myWindowGlobalLibraryName);
```

Since we wrap almost everything in anonymous functions, if our code fails, it should not damage all the external javascript.

<b>2) Create custom functions for your library</b>

In this example we will create a custom log function that we will call <b>myCustomLog.</b>

```
(function(window){
  // You can enable the strict mode commenting the following line
  // 'use strict';

  // This function will contain all our code
  function myLibrary(){
    var _myLibraryObject = {};

    // Just create a property to our library object.
    _myLibraryObject.myCustomLog = function(thingToLog){
        console.log("My-Custom-Log > Type of variable : " + typeof(thingToLog));
        console.log("My-Custom-Log > Is number : " + !isNaN(thingToLog));
        console.log("My-Custom-Log > Length : " + (thingToLog).length);

        return console.log(thingToLog);
    };

    return _myLibraryObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window); // We send the window variable withing our function

// Then we can call our custom function using
myWindowGlobalLibraryName.myCustomLog(["My library","Rules"]);
```

<b>3) If you need, create publicly inaccessible properties in your library (in scope)</b>

In order to save settings or other kind of properties of non interest to the user (or simply that we dont want anybody see them), we can declare a simple variable in the scope of our function and it will be cannot retrieved outside of our wrapper.

```
(function(window){
  // You can enable the strict mode commenting the following line
  // 'use strict';

  // This function will contain all our code
  function myLibrary(){
    var _myLibraryObject = {};

    // This variable will be inaccessible to the user, only can be visible in the scope of your library.
    var settings = {
      volume:100,
      mute:false
    };

    // Change a private property
    _myLibraryObject.setVolume = function(volume){
         settings.volume = volume;
         return volume;
    };

    // Change a private property
    _myLibraryObject.setMute = function(muteStatus){
         if(typeof(muteStatus) === 'boolean'){
           settings.mute = muteStatus;
         }else{
           console.error("You need to disable or enable the sound !");
         }

         return settings.mute;
    };

    // Change a private property
    _myLibraryObject.haveSound = function(){
         return settings.mute;
    };

    return _myLibraryObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window); // We send the window variable withing our function

// Now see the content of your library
console.log(myWindowGlobalLibraryName);

// It should ouput only 3 properties (setMute, setVolume, haveSound)
// And the settings variable can be only be accessed in your library, not outside
```

Note: Althoug the settings variable cannot be retrieved outside your wrapper, if your create a method that returns the variable, then it can be changed outside of your wrapper, for example

```
// Then your variable will be exposed with this method !
_myLibraryObject.getSettings = function(){
    return settings;
};

// You can create a get method without expose your variable using something like this
// The object keys will be copied to a new object instead our object.
// Note that you need to achieve this method according to the structure of your variable (or if it's an array)

_myLibraryObject.getSettings = function(){
  var mySecurityCopy = {};

  for(var i in settings){
      if(i)
        mySecurityCopy[i] = settings[i];
      }
  }

  return mySecurityCopy;
 };
```

Now create a library and share it with us !

#### [Carlos Delgado](/authors/sdkcarlos)

Interested in programming since he was 14 years old, Carlos is a self-taught programmer and founder and author of most of the articles at Our Code World.

#### This could interest you

#### Become a more social person

Please enable JavaScript to view the [comments powered by Disqus.](https://disqus.com/?ref_noscript)

#### Get Rid Of Ads in Our Code World For a Year

Sign up to get an ad-free subscription for a year in Our Code World from April 14 to April 17 at no cost (normally $2 USD).

[Create Account and Remove Ads For a Year](/register)

#### Advertising

* [Facebook /ourcodeworld](https://www.facebook.com/ourcodeworld)
* [Twitter @ourcodeworld](https://twitter.com/ourcodeworld)
* [YouTube @ourcodeworld](https://www.youtube.com/ourcodeworld?sub_confirmation=1)
* [Github @ourcodeworld](https://github.com/ourcodeworld)
* [Instagram @ourcodeworld](https://www.instagram.com/ourcodeworld/)
