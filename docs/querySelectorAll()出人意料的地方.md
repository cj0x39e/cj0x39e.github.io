---
title: querySelectorAll()出人意料的地方
date: 2016-04-01
author: cj0x39e
---

如果经常用 jQuery,那么或许有一天当你用`querySelectorAll()`方法的时候,会感觉有一点奇怪.

运行下面这段代码:

```html
<div id="test">
  <div id="test_inner"></div>
</div>
```

```javascript
var test = document.querySelector("#test");

alert(test.querySelectorAll("div div").length);
```

根据使用 jQuery 的经验,length 毫无疑问的是 0,但是实际上却弹出结果 1.产生这个结果是因为,`querySelectorAll`传入的参数其实是一个`CSS`选择器,而且检查是否符合该选择器规则的范围是整个文档,所以很明显`test_inner`在文档范围符合`div div`的`CSS`规则,当然最终返回的元素集合还需要满足是`test`的子元素.

一些框架用下面的方法修复这个问题,使结果符合我们的习惯:

```javascript
var span,
  selector = "div span",
  context = document.querySelector("#test");
var oldContext = context,
  oldId = context.getAttribute("id"),
  newId = oldId || "__sizzle__";

try {
  span = context.querySelectorAll("#" + newId + " " + selector);
} catch (e) {
} finally {
  if (!oldId) {
    oldContext.removeAttribute("id");
  }
}
```
