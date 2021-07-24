---
title: Web缓存测试
date: 2017-01-22
author: cj0x39e
---

## 缓存测试

> 测试环境

```
window10
Chrome 55.0.2883.87
nginx 1.9.5
```

测试文件有两个，分别是 index.html 和 demo.html， 其中 demo.html 是通过 index.html 中的 `a` 标签过去的，因为直接刷新浏览器，会导致浏览器产生 `Cache-Control max-age=0` 的效果。

### 测试 1

> 不配置任何缓存头

1. 修改 demo.html ，保存， 并等待一段时间加载， 返回 200；
   响应头：

```
Date:Sun, 22 Jan 2017 06:08:53 GMT
ETag:"58844c11-c1"
Last-Modified:Sun, 22 Jan 2017 06:07:13 GMT
```

2. 快速按浏览器返回到 index.html，,通过链接再次打开 demo.html， 返回 200， 且显示 (from disk cache);
   响应头：

```
Date:Sun, 22 Jan 2017 06:08:53 GMT
ETag:"58844c11-c1"
Last-Modified:Sun, 22 Jan 2017 06:07:13 GMT
```

3. 经过几次重复步骤 2，在第 5 次加载时，返回 304，,说明和服务器比对了 ETag 或者 Last-Modified；
   响应头：

```
Date:Sun, 22 Jan 2017 06:09:03 GMT
ETag:"58844c11-c1"
Last-Modified:Sun, 22 Jan 2017 06:07:13 GMT
```

根据默认的过期时间计算方法 `当前时间 + (Date - Last-Modified) * 10%` 可以得到第一次加载后默认缓存时间为 10s ，所以在 9:03 前都是从本地缓存加载，从第 2 步没有变化的响应头可以看出是没有请求服务器的，而第 3 步，缓存时间刚刚过期，便携带 If-Modified-Since、If-None-Matc 去询问服务器是否需要重新拉取资源。说明在不设置缓存时间的情况下，浏览器也是缓存资源，且缓存时间就是前面提到的公式计算出的结果，等同于 "Cache-Control max-age=(当前时间 + (Date - Last-Modified) \* 10%)"。

### 测试 2

> 添加 `Cache-Control no-cache;` 响应头

与测试 1 表现不同，第 1 次请求为 200，之后都为 304，说明每次请求都会询问服务器，但是这不是说每次都从服务器拉取资源，只是确认这个资源还能不能用，有没有改动，没有改(304)就直接从本地缓存加载，有改动(200)就从服务器拉取了。所以添加 `Cache-Control no-cache;` 等同于加了一条 "Cache-Control max-age=0"。

### 测试 3

> 添加 `Cache-Control private;` 响应头

表现与测试 1 相同；

> 添加 `Cache-Control public;` 响应头

表现与测试 1 相同；
因为 private 和 public 的作用在于告诉什么样的客户端能够存储资源，所以没什么影响也不奇怪。

### 测试 4

> 添加 `Cache-Control no-store;` 响应头

这才是真正让浏览器每次都从服务器拉取的响应头，每次返回都是 200 ok，而且都是货真价实的从服务器拉取的资源。

## 小结

所以验证了下面这些定义：

> no-cache 表示必须先与服务器确认返回的响应是否被更改
> no-store 直接禁止浏览器和所有中继缓存存储返回的任何版本的响应

以及清楚了在不设置缓存时间的情况下，浏览器的缓存策略。

参考资料:

1. [彻底弄懂 Http 缓存机制 - 基于缓存策略三要素分解法](https://zhuanlan.zhihu.com/p/24467558)
2. [HTTP 缓存](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn)
