---
layout:     post   				    # 使用的布局（不需要改）
title:      Image by jQuery.ajax() and decode it to base64 				# 标题 
subtitle:   转jpeg为base64   #副标题
date:       2019-11-19				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Web							#标签
---
## Get Image using jQuery.ajax() and decode it to base64   
[Get Image using jQuery.ajax() and decode it to base64](https://stackoverflow.com/questions/19124701/get-image-using-jquery-ajax-and-decode-it-to-base64)   
**关键点**  
1\.mimeType: "text/plain; charset=x-user-defined"   
2\.base64Encode  
3\.data:image/jpeg;base64,  

```javascript
$.ajax({
                        method: "GET",
                        url: envConfigObj.domain.utility + '/v1/captcha/jpeg?key=' + src,
                        mimeType: "text/plain; charset=x-user-defined",

                        success: function(data) {
                              var arrayBuffer = data; // Note: not oReq.responseText
                              if (arrayBuffer) {
                                var b64encoded = base64Encode(data);
                                $img.attr('src', 'data:image/jpeg;base64,'+b64encoded);
                              }
                        },

                        error: function(err) {
                            console.log(JSON.stringify(err));
                        }
                    });

function base64Encode(str) {
            var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var out = "", i = 0, len = str.length, c1, c2, c3;
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    out += CHARS.charAt(c1 >> 2);
                    out += CHARS.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    out += CHARS.charAt(c1 >> 2);
                    out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                    out += CHARS.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += CHARS.charAt(c1 >> 2);
                out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += CHARS.charAt(c3 & 0x3F);
            }
            return out;
        }
```

