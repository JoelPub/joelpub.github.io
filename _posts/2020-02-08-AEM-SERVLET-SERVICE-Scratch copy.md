---
layout:     post   				    # 使用的布局（不需要改）
title:      Creating your first AEM SLING Servlet/Service 				# 标题 
subtitle:   AEM Servlet/Servcie   #副标题
date:       2020-02-08 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	AEM							#标签
---
## Creating your first AEM SLING SERVLET:
https://helpx.adobe.com/experience-manager/using/aem_headline.html

core/pom.xml

```javascript
  
        <!-- https://mvnrepository.com/artifact/org.json/json -->
        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>20070829</version>
        </dependency> 
```  
NewsServlet.java

```javascript
  
        /*
         *  Copyright 2015 Adobe Systems Incorporated
         *
         *  Licensed under the Apache License, Version 2.0 (the "License");
         *  you may not use this file except in compliance with the License.
         *  You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         *  Unless required by applicable law or agreed to in writing, software
         *  distributed under the License is distributed on an "AS IS" BASIS,
         *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         *  See the License for the specific language governing permissions and
         *  limitations under the License.
         */
        package io.github.joelpub.core.servlets;

        import org.apache.felix.scr.annotations.sling.SlingServlet;
        import org.apache.sling.api.SlingHttpServletRequest;
        import org.apache.sling.api.SlingHttpServletResponse;
        import org.apache.sling.api.resource.Resource;
        import org.apache.sling.api.servlets.SlingAllMethodsServlet;
        import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

        import javax.servlet.ServletException;
        import java.io.IOException;
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;

        import javax.servlet.*;

        import java.io.BufferedReader;
        import java.io.IOException;
        import java.io.InputStream;
        import java.io.InputStreamReader;
        import java.io.Reader;
        import java.net.URL;
        import java.nio.charset.Charset;

        import org.slf4j.Logger;
        import org.slf4j.LoggerFactory;

        /**
         * Servlet that writes some sample content into the response. It is mounted for
         * all resources of a specific Sling resource type. The
         * {@link SlingSafeMethodsServleorg.jsont} shall be used for HTTP methods that are
         * idempotent. For write operations use the {@link SlingAllMethodsServlet}.
         */
        @SuppressWarnings("serial")
        @SlingServlet(paths = "/bin/getMorningNews", methods = "GET")
        public class NewsServlet extends SlingSafeMethodsServlet {
            private static final Logger LOGGER = LoggerFactory
                    .getLogger(NewsServlet.class);
```  
**单独测试servlet**

```javascript
    http://localhost:4502/bin/getMorningNews?tags=Adobe|IBM|Apple|Facebook
```  
## Creating your first AEM SLING Service:
https://helpx.adobe.com/experience-manager/using/first-osgi.html

core/services/KeyService.java

```javascript
  
        package io.github.joelpub.core.services;

        public interface KeyService {

            public void setKey(int val);
            public String getKey();

        }
```  
core/impl/KeyServiceImpl.java

```javascript
  
        package io.github.joelpub.core.impl;

        import io.github.joelpub.core.services.KeyService;

        import org.apache.felix.scr.annotations.Component;
        import org.apache.felix.scr.annotations.Service;


        //This is a component so it can provide or consume services
        @Component

        @Service
        public class KeyServiceImpl implements KeyService {


            //Define a class member named key
            private int key = 0 ;

            @Override
            //A basic setter method that sets key
            public void setKey(int val)
            {
                //Set the key class member
                this.key = val ;

            }

            @Override
            //A basic getter that gets key
            public String getKey()
            {
                //return the value of the key class member

                //Convert the int to a String to display it within an AEM web page
                String strI = Integer.toString(this.key);
                return strI;
            }
        }
```  
