---
layout:     post   				    # 使用的布局（不需要改）
title:      Express redirect 				# 标题 
subtitle:   Express.js res.redirect() Function   #副标题
date:       2020-07-08				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Infra							#标签
---



# Express.js res.redirect() Function

[https://www.geeksforgeeks.org/express-js-res-redirect-function/](https://www.geeksforgeeks.org/express-js-res-redirect-function/)   


Express.js res.redirect() Function

*
Last Updated :
08 Jul, 2020

The **res.redirect()** function redirects to the URL derived from the specified path, with specified status, a integer (positive) which corresponds to an HTTP status code. The default status is "302 Found".

**Syntax:**

```
res.redirect([status, ] path)
```

**Parameter:** This function accepts two parameters as mentioned above and described below:

* **status:** This parameter holds the HTTP status code
* **path:** This parameter describes the path.

**Return Value:** It retuns an Object.

**Installation of express module:**
<br>
<br>

1. You can visit the link to [Install express module](https://www.npmjs.com/package/express). You can install this package by using this command.

```
npm install express
```
2. After installing the express module, you can check your express version in command prompt using the command.

```
npm version express
```
3. After that, you can just create a folder and add a file for example, index.js. To run this file you need to run the following command.

```
node index.js
```

**Example 1:** **Filename: index.js**
<i>filter_none</i>

<i>edit</i><br>

<i>close</i>

<i>play_arrow</i>

<i>link</i><br>

<i>brightness_4</i><br>

<i>code</i>

|`var` `express = require(` `'express'` `); ` `var` `app = express(); ` `var` `PORT = 3000; ` `// Without middleware ` `app.get(` `'/'` `, ` `function` `(req, res){ ` `&#xA0;&#xA0;&#xA0;&#xA0;` `res.redirect(` `'/user'` `); ` `}); ` `app.get(` `'/user'` `, ` `function` `(req, res){ ` `&#xA0;&#xA0;&#xA0;&#xA0;` `res.send(` `"Redirected to User Page"` `); ` `}); ` `app.listen(PORT, ` `function` `(err){ ` `&#xA0;&#xA0;&#xA0;&#xA0;` `if` `(err) console.log(err); ` `&#xA0;&#xA0;&#xA0;&#xA0;` `console.log(` `"Server listening on PORT"` `, PORT); ` `}); ` |

<i>chevron_right</i>

```undefined```

<i>filter_none</i>

```undefined```

**Steps to run the program:**

1. The project structure will look like this:<br>
![](https://media.geeksforgeeks.org/wp-content/uploads/20200606171437/structure56.png)
2. Make sure you have installed **express** module using the following command:

```
npm install express
```
3. Run index.js file using below command:

```
node index.js
```

**Output:**

```
Server listening on PORT 3000
```
4. Now open browser and go to _http://localhost:3000/_, now on your screen you will see the following output:

```
Redirected to User Page
```

**Example 2:** **Filename: index.js**
<i>filter_none</i>

<i>edit</i><br>

<i>close</i>

<i>play_arrow</i>

<i>link</i><br>

<i>brightness_4</i><br>

<i>code</i>

|`var` `express = require(` `'express'` `); ` `var` `app = express(); ` `var` `PORT = 3000; ` `// With middleware ` `app.use(` `'/verify'` `, ` `function` `(req, res, next){ ` `&#xA0;&#xA0;&#xA0;&#xA0;` `console.log(` `"Authenticate and Redirect"` `) ` `&#xA0;&#xA0;&#xA0;&#xA0;` `res.redirect(` `'/user'` `); ` `&#xA0;&#xA0;&#xA0;&#xA0;` `next(); ` `}); ` `app.get(` `'/user'` `, ` `function` `(req, res){ ` `&#xA0;&#xA0;&#xA0;&#xA0;` `res.send(` `"User Page"` `); ` `}); ` `app.listen(PORT, ` `function` `(err){ ` `&#xA0;&#xA0;&#xA0;&#xA0;` `if` `(err) console.log(err); ` `&#xA0;&#xA0;&#xA0;&#xA0;` `console.log(` `"Server listening on PORT"` `, PORT); ` `});` |

<i>chevron_right</i>

```undefined```

<i>filter_none</i>

```undefined```

Run index.js file using below command:

```
node index.js
```

Now open the browser and go to _http://localhost:3000/verify_, now check your console and you will see the following output:

```
Server listening on PORT 3000
Authenticate and Redirect
```

And you will see the following output on your browser:

```
User Page
```

**Reference:** [https://expressjs.com/en/5x/api.html#res.redirect](https://expressjs.com/en/5x/api.html#res.redirect)
<br>
<br>
<br>

