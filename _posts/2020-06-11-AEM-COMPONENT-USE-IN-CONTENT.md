---
layout:     post   				    # 使用的布局（不需要改）
title:      AEM Component used in the Content 				# 标题 
subtitle:      #副标题
date:       2020-06-11 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	AEM							#标签
---
# How many times is an AEM Component used in the JCR?
https://sourcedcode.com/blog/aem/how-many-times-is-an-aem-component-used-in-the-jcr



```javascript
http://localhost:4502/libs/cq/search/content/querydebug.html
  
path=/content/ford/cn/zh_cn
1_property=sling:resourceType
1_property.value=fordcn/core/components/common/billboard
```  
* [Home](https://sourcedcode.com/)
* [AEM](https://sourcedcode.com/blog/category/aem)
* How many times is an AEM Component used in the JCR?

![](/img/blog/AEMComponentusedInContent_files/features-image-how-many-times-is-an-aem-component-being-used.jpg) [AEM](https://sourcedcode.com/blog/category/aem) [Deployment](https://sourcedcode.com/blog/category/aem/deployment) [Quick Reference](https://sourcedcode.com/blog/category/aem/aem-quick-reference) [<time>June 11, 2020</time><time>June 22, 2020</time>](https://sourcedcode.com/blog/aem/how-many-times-is-an-aem-component-used-in-the-jcr) [briankasingli](https://sourcedcode.com/blog/author/sourcedc)

### [How many times is an AEM Component used in the JCR?](https://sourcedcode.com/blog/aem/how-many-times-is-an-aem-component-used-in-the-jcr)

<i><i>I like this</i><i>Unlike</i></i>Like 4

Can
 we detect and remove unused components from our codebase? Is this AEM
component being used at all? How many times is my component used within
my running AEM instance?

These are the common questions we have when we are trying to figure
out the number of use and the node-paths of the targeted searched
component within the Java content repository, known as "JCR". In this
article, you will discover one of the quickest techniques used to
retrieve the total number of uses and node-paths of a component within
the JCR by using the Query Builder API, [query debugger tool](#query-debugger-tool).

If you don't have certain user priveledges within your AEM instance,
there's another way to find out the usage of your component(s), [Components Console](#components-console);
 however, the Components Console is restricted in a sense where the
component search results-list only display pages of a given component
and does not provide a total number of how many pages are returned from
the search.
**Quick Links**

1. [Component Search by the Query Builder API, Query Builder Debugger Tool](#query-debugger-tool)
2. [Component Search by the Components Console](#components-console)
3. [**Extra**: How many pages are using an AEM template?](#search-by-cq-template)
4. [**Extra**: How to search for all nodes in AEM, JCR, with an existing property?](#search-for-all-nodes-with-the-existing-property)

***

## 1. Component Search by the Query Builder API, Query Builder Debugger Tool

The AEM Query Builder is an API which can be used to search for nodes
 in JCR. Well defined "Predicates" are typically created from using the
Query Builder Debugging Tool, as this tool serves instant search results
 within the UI.

**Step 1**: With your running AEM instance, visit [http://localhost:4502/libs/cq/search/content/querydebug.html](http://localhost:4502/libs/cq/search/content/querydebug.html).

**Step [2](https://sourcedcode.com/storage/2020/06/blog-post-image-query-builder-find-component.jpg)**: Paste in the search query below & hit search; [view screenshot](https://sourcedcode.com/storage/2020/06/blog-post-image-query-builder-find-component.jpg).<br>

_Replace with your component's path: weretail/components/content/heroimage_<br>

_Note!: sometimes the descendant path must be more nested, so /content/we-retail/gb/en_

|  |
| :---: |
| 1 2 3 | path =/content /we -retail 1 _property =sling : resourceType 1 _property.value =weretail /components /content /heroimage |

<i>This query searches for all types of nodes with the
sling:resourceType equals to the value,
weretail/components/content/heroimage, and where the path is descendant
from /content/we-retail; to learn more about the Query builder API and
queries,[click here (Adobe Documentation)](https://docs.adobe.com/content/help/en/experience-manager-64/developing/platform/query-builder/querybuilder-api.html)</i>

**Step 3**: Review the results.<br>

**Extra:**

## Find out How many pages are using an AEM template?

The query below will find all cq:Page nodes in the JCR, which
cq:template equals to /conf/we-retail/settings/wcm/templates/hero-page;
under the content path /content/we-retail. The search results will show
you the absolute node page path of whom has the matched property and
value set.

|  |
| :---: |
| 1 2 3 4 | type =cq : Page path =/content /we -retail 1 _property =jcr : content /cq : template 1 _property.value =/conf /we -retail /settings /wcm /templates /hero -page |

Ensuring that the "path" property is set is important, because you
would not want to excessively triverse through the entire JCR; which
will exhaust the AEM environment performance.

**Extra:**

## How to search for all nodes in AEM, JCR, with an existing property?

The query below will search all nodes in the JCR, which
"myCustomProperty" exists; under the content path /content/we-retail.
The search results will show you the absolute node page path of whom has
 the matched property and value set.

|  |
| :---: |
| 1 2 3 | path =/content /we -retail property =myCustomProperty property.operation =exists |

Ensuring that the "path" property is set is important, because you
would not want to excessively triverse through the entire JCR; which
will exhaust the AEM environment performance.

***

## 2. Component Search by the Components Console

This out of the box Components Console, CC, is available from AEM
6.2+ right under Tools -> General -> Components. The CC displays
search results in a form of pages where the component is being used;
rather than each node from the example above. This console is accessible
 to authors so that even they can check for which pages use the searched
 component.

**Step 1**: Within your running AEM instance, visit [http://localhost:4502/libs/wcm/core/content/sites/components.html](http://localhost:4502/libs/wcm/core/content/sites/components.html).

**Step [2](https://sourcedcode.com/storage/2020/06/blog-post-component-console-steps-a.jpg)**:
 Search for a component. Insert your search criteria with either by
"keyword", "component path", or "component group". On every change of
the search criteria, you should see results in a list format on the
right hand side of the search left side bar.<br>

**Step [3](https://sourcedcode.com/storage/2020/06/blog-post-component-console-steps-a.jpg)**: Click on the targeted component, and you will be redirected to the details page.<br>

**Step [4](https://sourcedcode.com/storage/2020/06/blog-post-component-console-steps-b.jpg)**:
 From the details page, click on "live usage", and a results-list of
pages will be displayed, where the targeted component can be found.<br>

**Step [5](https://sourcedcode.com/storage/2020/06/blog-post-component-console-steps-b.jpg)**: From the results-list, clicking on a link will open the page's editor.

| Components Console – Steps 2 & 3 | Components Console – Steps 4 & 5 |

### Was this post helpful?

Let us know if you liked the post. That's the only way we can improve.

##### [briankasingli](https://sourcedcode.com/blog/author/sourcedc "Posts by briankasingli")

Hello, I am an Adobe AEM MVP & a certified Lead AEM Developer who is
 currently working as a Senior AEM Full Stack Developer at Whitbread,
UK, London. I have 10 years of overall web engineering experience and 6
years of AEM experience in practice.
I hope to give back to the AEM Full Stack Development community by
sharing my knowledge with the world.Website [https://www.linkedin.com/in/briankasingli](https://www.linkedin.com/in/briankasingli)

## Post navigation

[How to Enable Configuration for OSGI Components with R6](https://sourcedcode.com/blog/aem/how-to-enable-configuration-for-osgi-components-with-r6) [5 Popular Ways to Replicate a Page in AEM](https://sourcedcode.com/blog/aem/5-popular-ways-to-replicate-a-page-in-aem)

### Leave a Reply <small>[Cancel reply](https://sourcedcode.com/blog/aem/how-many-times-is-an-aem-component-used-in-the-jcr#respond)</small>

## Related Posts

[AEM](https://sourcedcode.com/blog/category/aem) [Touch UI](https://sourcedcode.com/blog/category/aem/touch-ui) [<time>January 19, 2021</time><time>January 21, 2021</time>](https://sourcedcode.com/blog/aem/re-usable-color-select-in-touch-ui-dialogs-w-acs-commons-generic-lists) [briankasingli](https://sourcedcode.com/blog/author/sourcedc)

## [Re-usable Color Select in Touch UI Dialogs w/ ACS Common's Generic Lists](https://sourcedcode.com/blog/aem/re-usable-color-select-in-touch-ui-dialogs-w-acs-commons-generic-lists)

[AEM](https://sourcedcode.com/blog/category/aem) [Dispatcher](https://sourcedcode.com/blog/category/aem/dispatcher) [<time>January 9, 2021</time><time>January 11, 2021</time>](https://sourcedcode.com/blog/aem/how-to-setup-the-aem-dispatcher-flush-agent) [briankasingli](https://sourcedcode.com/blog/author/sourcedc)

## [How to Setup the AEM Dispatcher Flush Agent?](https://sourcedcode.com/blog/aem/how-to-setup-the-aem-dispatcher-flush-agent)

[AEM](https://sourcedcode.com/blog/category/aem) [Development](https://sourcedcode.com/blog/category/aem/development) [Short Post](https://sourcedcode.com/blog/category/aem/short-post) [<time>January 6, 2021</time><time>January 6, 2021</time>](https://sourcedcode.com/blog/aem/errors-while-building-the-latest-aem-project-archetype-24-on-macos) [briankasingli](https://sourcedcode.com/blog/author/sourcedc)

## [Errors while building the latest AEM Project Archetype 24 on MacOS](https://sourcedcode.com/blog/aem/errors-while-building-the-latest-aem-project-archetype-24-on-macos)

Copyright © 2020 SourcedCode. All rights reserved. | Theme: Color Blog by [Mystery Themes](https://mysterythemes.com/). Back To Top

*

[Powered by GDPR Cookie Compliance](https://wordpress.org/plugins/gdpr-cookie-compliance)Privacy Overview

This website uses cookies so that we can provide you with the best
user experience possible. Cookie information is stored in your browser
and performs functions such as recognising you when you return to our
website and helping our team to understand which sections of the website
 you find most interesting and useful.
Strictly Necessary Cookies

Strictly Necessary Cookie should be enabled at all times so that we can save your preferences for cookie settings.

Enable or Disable Cookies

If you disable this cookie, we will not be able to save your
preferences. This means that every time you visit this website you will
need to enable or disable cookies again.

[ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]() [ FooBox]() [...]()++++++++++++
