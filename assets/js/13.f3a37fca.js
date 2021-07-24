(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{329:function(t,a,e){"use strict";e.r(a);var n=e(42),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"缓存测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存测试"}},[t._v("#")]),t._v(" 缓存测试")]),t._v(" "),e("blockquote",[e("p",[t._v("测试环境")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("window10\nChrome 55.0.2883.87\nnginx 1.9.5\n")])])]),e("p",[t._v("测试文件有两个，分别是 index.html 和 demo.html， 其中 demo.html 是通过 index.html 中的 "),e("code",[t._v("a")]),t._v(" 标签过去的，因为直接刷新浏览器，会导致浏览器产生 "),e("code",[t._v("Cache-Control max-age=0")]),t._v(" 的效果。")]),t._v(" "),e("h3",{attrs:{id:"测试-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-1"}},[t._v("#")]),t._v(" 测试 1")]),t._v(" "),e("blockquote",[e("p",[t._v("不配置任何缓存头")])]),t._v(" "),e("ol",[e("li",[t._v("修改 demo.html ，保存， 并等待一段时间加载， 返回 200；\n响应头：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Date:Sun, 22 Jan 2017 06:08:53 GMT\nETag:"58844c11-c1"\nLast-Modified:Sun, 22 Jan 2017 06:07:13 GMT\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("快速按浏览器返回到 index.html，,通过链接再次打开 demo.html， 返回 200， 且显示 (from disk cache);\n响应头：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Date:Sun, 22 Jan 2017 06:08:53 GMT\nETag:"58844c11-c1"\nLast-Modified:Sun, 22 Jan 2017 06:07:13 GMT\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("经过几次重复步骤 2，在第 5 次加载时，返回 304，,说明和服务器比对了 ETag 或者 Last-Modified；\n响应头：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Date:Sun, 22 Jan 2017 06:09:03 GMT\nETag:"58844c11-c1"\nLast-Modified:Sun, 22 Jan 2017 06:07:13 GMT\n')])])]),e("p",[t._v("根据默认的过期时间计算方法 "),e("code",[t._v("当前时间 + (Date - Last-Modified) * 10%")]),t._v(' 可以得到第一次加载后默认缓存时间为 10s ，所以在 9:03 前都是从本地缓存加载，从第 2 步没有变化的响应头可以看出是没有请求服务器的，而第 3 步，缓存时间刚刚过期，便携带 If-Modified-Since、If-None-Matc 去询问服务器是否需要重新拉取资源。说明在不设置缓存时间的情况下，浏览器也是缓存资源，且缓存时间就是前面提到的公式计算出的结果，等同于 "Cache-Control max-age=(当前时间 + (Date - Last-Modified) * 10%)"。')]),t._v(" "),e("h3",{attrs:{id:"测试-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-2"}},[t._v("#")]),t._v(" 测试 2")]),t._v(" "),e("blockquote",[e("p",[t._v("添加 "),e("code",[t._v("Cache-Control no-cache;")]),t._v(" 响应头")])]),t._v(" "),e("p",[t._v("与测试 1 表现不同，第 1 次请求为 200，之后都为 304，说明每次请求都会询问服务器，但是这不是说每次都从服务器拉取资源，只是确认这个资源还能不能用，有没有改动，没有改(304)就直接从本地缓存加载，有改动(200)就从服务器拉取了。所以添加 "),e("code",[t._v("Cache-Control no-cache;")]),t._v(' 等同于加了一条 "Cache-Control max-age=0"。')]),t._v(" "),e("h3",{attrs:{id:"测试-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-3"}},[t._v("#")]),t._v(" 测试 3")]),t._v(" "),e("blockquote",[e("p",[t._v("添加 "),e("code",[t._v("Cache-Control private;")]),t._v(" 响应头")])]),t._v(" "),e("p",[t._v("表现与测试 1 相同；")]),t._v(" "),e("blockquote",[e("p",[t._v("添加 "),e("code",[t._v("Cache-Control public;")]),t._v(" 响应头")])]),t._v(" "),e("p",[t._v("表现与测试 1 相同；\n因为 private 和 public 的作用在于告诉什么样的客户端能够存储资源，所以没什么影响也不奇怪。")]),t._v(" "),e("h3",{attrs:{id:"测试-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-4"}},[t._v("#")]),t._v(" 测试 4")]),t._v(" "),e("blockquote",[e("p",[t._v("添加 "),e("code",[t._v("Cache-Control no-store;")]),t._v(" 响应头")])]),t._v(" "),e("p",[t._v("这才是真正让浏览器每次都从服务器拉取的响应头，每次返回都是 200 ok，而且都是货真价实的从服务器拉取的资源。")]),t._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("所以验证了下面这些定义：")]),t._v(" "),e("blockquote",[e("p",[t._v("no-cache 表示必须先与服务器确认返回的响应是否被更改\nno-store 直接禁止浏览器和所有中继缓存存储返回的任何版本的响应")])]),t._v(" "),e("p",[t._v("以及清楚了在不设置缓存时间的情况下，浏览器的缓存策略。")]),t._v(" "),e("p",[t._v("参考资料:")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24467558",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底弄懂 Http 缓存机制 - 基于缓存策略三要素分解法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 缓存"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=o.exports}}]);