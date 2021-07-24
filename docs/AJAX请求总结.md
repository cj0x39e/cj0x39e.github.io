---
title: AJAX请求总结
date: 2016-08-12
author: cj0x39e
---

# 常见的几个 HTTP 头部

Accept

> 告诉 WEB 服务器自己接受什么介质类型, _/_ 表示任意类型，type/\* 表示该类型下的所有子类型, type/sub-type

Accept-Charset

> 浏览器申明自己接收的字符集

Accept-Encoding

> 浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate）

Age

> 当代理服务器用自己缓存的实体去响应请求时，用该头部表明该实体从产生到现在经过多长时间了。

Cache-Control

> 请求：no-cache（不要缓存的实体，要求现在从 WEB 服务器去取)

Connection

> 请求：close（告诉 WEB 服务器或者代理服务器，在完成本次请求的响应后，断开连接，不要等待本次连接的后续请求了）。 keepalive（告诉 WEB 服务器或者代理服务器，在完成本次请求的响应后，保持连接，等待本次连接的后续请求）。响应：close（连接已经关闭）。keepalive（连接保持着，在等待本次连接的后续请求）。

Content-Type

> WEB 服务器告诉浏览器自己响应的对象的类型。

POST 请求常见的数据类型：

- application/x-www-form-urlencoded 在请求体内数据被编码为名称/值对。这是标准的编码格式。
- multipart/form-data 在请求体内数据被编码为一条消息，页上的每个控件对应消息中的一个部分，编码成二进制数据，并有规定的划分方式。
- application/json 在请求体内数据就是 JSON 字符串。

# XHR

```javascript
var xhr = new XMLHttpRequest();
var method = "GET";
var URL = "https://helloworld.com";

// 如果产品使用 cookie 做单点登录认证，设置该属性为 true，每次请求就会将主域设置的
// cookie 携带在请求头里；
xhr.withCredentials = true;

// 在此接收后端返回的数据
// readyState 反映 xhr 的执行状态；
// status 反映后台服务器返回的状态码；
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    alert(xhr.responseText);
  } else {
    alert(xhr.statusText);
  }
};

// open方法接受三个参数：
// 第一个为请求方法；
// 第二个位请求地址；
// 第三个为请求是否为异步请求；
xhr.open(method, url, true);

// send 是请求体内的数据，接受一个参数：
// 普通的键值对;
xhr.send();

// 设置请求头的方法，接收两个参数：
// 第一个为 header 的名称；
// 第二个为 对应 header 的值；
// setRequestHeader(header, value)

// 终止当前的 XHR 请求
// abort()
```

# XHR2.0

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "/path/to/image.png", true);

// 设置响应数据的类型，默认的数据类型为 text，有以下几个类型可供选择:
// text arraybuffer blob document
xhr.responseType = "arraybuffer";

// 设置请求超时的时间
xhr.timeout = 2000;
// 超时处理的函数
xhr.ontimeout = function() {};

// 有了 onload 方法，接受响应变得更容易，不用直接去监听请求进行到那个阶段
// 直接在结束后判断后台返回的状态吗就可以了
xhr.onload = function(e) {
  if (this.status == 200) {
    var bb = new BlobBuilder();
    bb.append(this.response); // Note: not xhr.responseText

    var blob = bb.getBlob("image/png");
  }
};

// 资源加载失败时触发的事件
xhr.onerror = function() {};

// 请求的进度
xhr.progress = function(e) {
  // e.loaded 是已上传的数据大小
  // e.total 是需要上传的数据大小
};

// 如果是通过 XHR 来上传文件，
// 和一般的请求不同，需要监听下面这个函数得到上传进度的变化
xhr.upload.onprogress = function(e) {
  if (e.lengthComputable) {
    // e.loaded 是已上传的数据大小
    // e.total 是需要上传的数据大小
    progressBar.value = (e.loaded / e.total) * 100;
  }
};

xhr.send();

// CORS 支持
// 相较于用 JSONP 实现跨域请求,在 XHR2 中只需要请求的服务器添加一个          Access-Control-Allow-Origin: *[domain] 响应头便可以实现跨域
// 的请求了，虽然很常见，但是之前并不知道这是在 XHR2 里面实现的
```

# FormData

```javascript
// 使用 FormData 可以模拟表单的行为
var formData = new FormData();
// formData 最大的好处便是可以直接将文件对象作为键值对放置到
// 其中，然后通过 XHR 或者 fetch 提交，让文件上传变得非常容易
// API 非常简单 https://developer.mozilla.org/en-US/docs/Web/API/FormData
formData.append("files[]", files[0]);
```

#5.fetch

```javascript
// 一个 fetch 的 polyfill https://github.com/github/fetch
// 可以通过 Headers 来初始化一个 头部对象
// 它提供了几个 api 来操纵头部信息
// set(key, value) 设置头部某个键的值
// get(key) 得到头部的某个键对应的值
// getAll(key) 得到头部某个键对应的所有值，以数组形式返回
// append(key, value) 添加头部信息
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

// 请求的选项 https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Syntax
var myInit = {
  // 请求方法选项：
  // 不用多说了，restful 风格的方法都资持
  method: "POST",
  headers: myHeaders,

  // 请求的模式的选项：
  // cors ，跨域请求模式
  // same-origin ，同源
  // no-cors， 不支持跨域？没试过
  mode: "cors",

  // cookie 的处理选项：
  // same-origin（默认值），同源的地址才携带 cookie；
  // include ，同一主域也会携带 cookie；
  // 问题记录：使用 fetch 发送 PUT 或 DELETE 请求，首先浏览器发 OPTION 请求验证跨域权限
  // 没有携带 cookie 与 XHR 发送处理一致，但是验证通过继续发送 PUT 或 DELETE 请求也没有
  // 携带 cookie ，XHR 是有携带的，这个问题导致我在项目中全面使用 fetch 的想法失败了(⊙﹏⊙)b
  credentials: "same-origin",

  // 请求缓存选项
  // default，默认，还有几个值，文档很清晰
  cache: "default",

  //  请求主体：
  //  支持的数据格式很多啊：
  //  ArrayBuffer
  //  ArrayBufferView
  //  Blob
  //  string
  //  URLSearchParams
  //  FormData
  body: "9527",
};

var myRequest = new Request("/add/user", myInit);

// 之所以 fetch 方法比 XHR 更好，仅仅就是它返回的是 promise 对象就够了
fetch(myRequest, myInit)
  .then(function(response) {
    // 同样的，响应主体里面的内容也可能是各种各样的，所以提供了几个不同的方法处理不同的数据,
    // 而这些方法处理相应的数据后也会返回一个 promise对象;
    // arrayBuffer()
    // blob()
    // json()
    // text()
    // formData()
    return response.json();
  })
  .then(function(jsonData) {});
```

参考资料：

1. [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
2. [New Tricks in XMLHttpRequest2](http://www.html5rocks.com/en/tutorials/file/xhr2/)
3. [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
