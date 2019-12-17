---
layout:     post   				    # 使用的布局（不需要改）
title:      9 JCR-SQL2 Queries 				# 标题 
subtitle:   AEM查询   #副标题
date:       2019-12-16				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	AEM							#标签
---

[9 JCR-SQL2 Queries Every AEM Developer Should Know](http://www.6dglobal.com/blog/9-jcr-sql-2-queries-every-aem-dev-should-know-2014-10-07)   



## 9 JCR-SQL2 Queries Every AEM Developer Should Know

JCR-SQL2 queries are useful items in every AEM Developer's toolbag.  They are relatively quick, [aren't deprecated](http://www.day.com/specs/jsr170/javadocs/jcr-2.0/javax/jcr/query/Query.html) and have a familiar SQL like grammer. JCR-SQL2 queries can be invoked from the JCR API:

```
Session session = ...
QueryManager queryManager = session.getWorkspace.getQueryManager();
Query query = queryManager.createQuery("{QUERY}", Query.JCR_SQL2);
QueryResult result = query.execute();
```

or through the Sling API:

```
ResourceResolver resolver = ...
Iterator<Resource> result = resolver.findResources("{QUERY}", Query.JCR_SQL2);
```

Although there is an official specification for JCR-SQL2, there aren't a ton of really good resources out there nor good references for finding examples of JCR-SQL2 queries.  Below are some queries I've found useful and I think every developer should have as a reference.  Each item lists a concept, provides an sample query and explains the sample.

#### **1. Find nodes by type**

```
SELECT * FROM [nt:file] AS s
```

This query will find all of the nt:file nodes in the repository.  Users often start by querying against _nt:base_ which is the base type for all JCR nodes, however if you can limit down to a more specific node type, this can have dramatic performance differences.  Just remember that the node containing the properties you're querying against needs to either be the specified type or a decendent of the type.

#### **2. Find nodes with properties containing a value**

```
SELECT * FROM [nt:base] AS s WHERE CONTAINS(s.title, 'client')
```

This query will find any node with a title property which contains the text client. This can also be accomplished using the LIKE constraint, but is significantly faster as it invokes the Lucene indexes instead of scanning property values.  In a very basic test, I found using CONTAINS to be approximately 100x faster.

#### **3. Finding pages under a path:**

```
SELECT * FROM [cq:Page] AS s WHERE ISDESCENDANTNODE(s,'/content')
```

This query will select all nodes of the type _cq:Page_ under the path _/content._You could change the node type in the square brackets to query in other node types such as _dam:_ _Asset_ or _rep:user_.

#### **4. Finding nodes by name:**

```
SELECT * FROM [cq:Page] WHERE NAME() = 'content'
```

This query will retrieve any _cq:Page_node with the name "content"; if you used the LOCALNAME function instead of NAME it would ignore the node type prefix, matching names such as jcr:content.

#### **5. Finding non-empty properties**

```
SELECT * FROM [cq:PageContent] WHERE [jcr:title] IS NOT NULL
```

This query will retrieve cq:PageContent nodes where the _jcr:title_ attribute is set. 

**Note:**Pages are not required to have a child of type _cq:PageContent_ so if your templates don't set the child node type this may not always return all of the eligible nodes.

#### **6. Finding pages based on jcr:content properties**

```
SELECT parent.* FROM [cq:Page] AS parent INNER JOIN [nt:base] AS child ON ISCHILDNODE(child,parent) WHERE ISDESCENDANTNODE(parent, '/content') AND child.[cq:template] = '/libs/cq/personalization/templates/campaign'

```

This query returns _cq:Page_ nodes with a child node where the _cq:template_ is set to _/libs/cq/personalization/templates/campaign._The really nice thing is that it returns the actual page node instead of the child node which contains the value.

#### **7. Finding files with extension**

```
SELECT * FROM [nt:file] WHERE NAME() LIKE '%.png'
```

This query will find files with the .png extension. This can be very useful when looking for bundles, assets or other files which have been uploaded.  To search the DAM, change the node type to _dam:Asset_.

#### **8. Cast Property Values**

```
SELECT * FROM [nt:base] WHERE hideInNav = CAST('true' AS BOOLEAN)
```

Casting allows you to query accurately based on non-String properties.  You can cast into any of the following types:

* STRING
* BINARY
* DATE
* LONG
* DOUBLE
* DECIMAL
* BOOLEAN
* NAME
* PATH
* REFERENCE
* WEAKREFERENCE
* URI

#### **9. Querying on dates**

```
SELECT p.* FROM [nt:base] AS p WHERE p.[cq:lastModified] >= CAST('2008-01-01T00:00:00.000Z' AS DATE) AND p.[cq:lastModified] <= CAST('2008-12-31T23:59:59.999Z' AS DATE)
```


This query will find any node which has been modified in 2008. Date conversion for JCR-SQL2 can be somewhat interesting as it expects the date parameter to be in the format 2008-01-01T00:00:00.000Z which is not possible to easily produce with a [SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html). One method for getting the date in the correct format is:

```
Calendar cal;
ValueFactoryImpl.getInstance().createValue(cal).getString();
```

#### Wrapup

Hopefully, you find these query examples useful, if you see any mistakes or anything I missed, please leave a comment!

**No2 和 No6的区别在于**  
```
SELECT * FROM [nt:base] AS s WHERE ISDESCENDANTNODE(s, '/content/lincoln/cn/zh_cn') AND CONTAINS(s.title, 'Homepage')

```
返回的是在页面的子节点中title属性包含homepage字符


```
SELECT parent.* FROM [cq:Page] AS parent INNER JOIN [nt:base] AS child ON ISCHILDNODE(child,parent) WHERE ISDESCENDANTNODE(parent, '/content/lincoln/cn/zh_cn') AND child.[cq:tags] IS NOT NULL 

```
返回的是页面的属性cq:tags不为空的页面   


**References:**

* [http://docs.jboss.org/jbossdna/0.7/manuals/reference/html/jcr-query-and-search.html#d0e7872](http://docs.jboss.org/jbossdna/0.7/manuals/reference/html/jcr-query-and-search.html#d0e7872)
* [http://stackoverflow.com/questions/5231411/jackrabbit-dateformat-for-comparison](http://stackoverflow.com/questions/5231411/jackrabbit-dateformat-for-comparison)


