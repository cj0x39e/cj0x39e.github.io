---
title: Angular 初探小结
date: 2016-08-15
author: cj0x39e
---

因为现在公司技术栈是 AngularJs1.x 的，初来乍到的第一个小系统便用 Angular 来搭了，因为之前
有过 SPA 应用的开发经验，所以上手 Angular 比较快，一周多完成的小系统效果也不错。Angular 用于
搭建这样的后台系统非常有优势，主要的优势在于其插件生态的丰富。学而时习之，让我来总结下 Angular
的一些东西。

# 关于双向绑定

Angular 一大特点便是数据的双向绑定，数据双向绑定的意思为视图发生变化会触发其对应数据模型
的变化，数据模型变化后也会反映到对应的视图上，这样一来的好处就是，省去了以前自己操纵 DOM 变化
内容的步骤。理解双向绑定后，我们只需要从数据模型的角度去思考问题，而不用考虑视图如何展示。例
如一个图片的列表，我们不用去关心页面如果展示，因为这不重要，知道下面的东西就行了：

1. 图片列表只是一组数据；
2. 删除图片就是从图片数组中移除某个元素；
3. 增加图片就是从图片数组中添加一个或多个元素；
4. 修改就是修改图片数组中的某个元素的值；

双向绑定的几个注意点：

- 插值表达式不能使用原生的函数，因为 Anguarl 是用自己的解释器去解释这个字符串，当然可以用自定义的函数
  包装一下原生函数，然后在插值表达式里面调用自定义的函数。
- 使用 ng-repeat 过程中，如果数组中有重复元素，可以使用下面的方法来遍历
  ```javascript
  <li ng-repeat="item in arr2 track by $index">{{ item }}</li>
  ```
- $watch 默认情况下不会开启深层次的监控，像监控对象，对象的元素变化 Angular 默认感知不到，需要在 $watch 后添加
  一个 ture 参数：
  ```javascript
  $scope.$watch(
    "item",
    function(newValue) {
      // 默认是 false 哦
    },
    true
  );
  ```

## $digest,$apply,\$watch

在 Angular 官方提供的指令中，例如 ng-click，Angular 包装了 click, 所以会在事件触发后执行相应的数据检查，
如果数据有变动，便会更新视图上的数据。如果我们在指令内容自己用 DOM 绑定事件，并在事件里改变 scope 上的一些
值，其实值是有变的，只是没有更新到视图上，为什么？因为值变化 Angular 不知道，所以需要手动调用 $digest 或者
$apply 方法去更新视图。调用 $digest 只会触发当前数据变动在当前作用域和子作用域的相关监听，而 $apply 会去
遍历查找当前数据变化在应用的作用域树的相关监听。其实在 Angular 中应用表达式 {{ text }} 或者 ng-model = "text"，
也是利用 \$watch 去监听数据，不过 Angular 在背后给你做了。

# 关于模块

Module 像是一个代码组织的容器，容器里面又有各式各样的小容器 Controller、Directive、Service、
Filter 等等。做这个系统的时候把一些 Service 和 Constant 单独抽出来了一个模块，现在看来是不必要的，
受公司原来系统的影响这么干的，当时也没仔细想，需要抽出新模块的代码，应该是可以作为插件使用的代码，或者多
个项目可以用到的公共模块，而我做的这个系统抽出的模块上面的两点都没有沾边，所以确实不必要。

- Controller 负责跟 View 沟通， 不处理任何跟 DOM 有关的工作；
- Directive 类似于 HTML 标签，可以定义标签的行为，所有与 DOM 相关的操作都应该写在这里。
- Service 写可以独立运作的代码（与 View 无关），共用于元件（例如控制器）之间，不应该处理任何跟 DOM 有关的工作。
- Filter 对数据做一些修理，不应该处理任何跟 DOM 有关的工作。
- Config 用来定义路由规则，不应该处理任何跟 DOM 有关的工作。

## Directive

因为在系统中没有深入的去实践指令相关的东西，因为时间比较赶，用指令来抽象东西还是麻烦一点，所以大部分都是使用
Controller 来做的，只是很多需要手工复制粘贴，继续来了解下指令：

### 超级简单的指令

```html
<div ng-app="app">
  <hello></hello>
</div>
<script type="text/javascript">
  angular.module("app", []);
  angular.module("app").directive("hello", function() {
    return {
      // 指令声明方式的选项：
      // E 元素
      // A 属性
      // C 样式类
      // M 注释
      restrict: "E",

      // 指令的模板
      // 可以用 templateUrl 将模板指定为 html
      template: "<div>Hello world!</div>",

      // 替换自定义标签选项：
      // false(默认)，保留自定义标签
      // true，自定义标签将会被指令模板替换掉
      replace: true,
    };
  });
</script>
```

### 如何保留自定义标签内部的内容？

```html
<div ng-app="app">
  <hello>
    dddddd
  </hello>
</div>
<script type="text/javascript">
  angular.module("app", []);
  angular.module("app").directive("hello", function() {
    return {
      restrict: "E",
      template: "<div>Hello world!<span ng-transclude></span></div>",

      // 设置 transclude 为true ，并且在指令模板内部 调用 ng-transclude，
      // 自定义标签里面的内容将被放置在 ng-transclude 指令内
      transclude: true,
    };
  });
</script>
```

### 关于交互的指令

```html
<div ng-app="app">
  <div ng-controller="helloController as hC">
    <hello name="hC.myName" age="hC.myAge" sex="{{ hC.male }}" say="hC.say()">
      dddddd</hello
    >
  </div>
</div>
<script type="text/javascript">
  angular.module("app", []);
  angular.module("app").controller("helloController", function() {
    var vm = this;
    vm.myName = "李小龙";
    vm.male = "男";
    vm.say = function() {
      alert("Hello world!");
    };
    return vm;
  });
  angular.module("app").directive("hello", function() {
    return {
      // 如果没有设置 scope 属性或者 scope 的值为 false，祖辈控制器的 scope 将会在
      // 当前 directive 的 scope 原型链上，通俗点说就是当前指令可以直接访问到 祖辈
      // scope 的属性和方法；
      // 如果像下面这样设置了 scope ，directvie 将会有一个独立的作用域;
      scope: {
        // scope 的 key 可以在使用指令时作为指令的属性传进来，例如下面的 name
        // 在 html 中 <hell name="myName"></hello> 使用，如果属性是多个单词的
        // 在 scope 中使用驼峰命名如 fullName ，在 html 中使用中划线连接 full-name，
        // 也可以用 name: '=full' 声明 fullName 属性，和 fullName 效果相同;

        // = 用于从祖辈的 scope 取值，应该可以理解为把祖辈 scope 上的属性以引用的形式传递进来，
        // 当祖辈 scope 的属性变化， directive 上的 scope 会变化, 反之
        name: "=",

        // @ 绑定一个局部 scope 属性到当前 dom 节点的属性值。结果总是一个字符串，因为 dom 属性是字符串。
        // 可以用插值表达式，当祖辈 scope 的属性变化， directvie scope 上的属性也会变化, 当 directive 上
        // 的属性变化，祖辈 scope 上的对应属性不会变，这和嵌套的 controller 是一个道理
        sex: "@",

        // & 用于从祖辈的 scope 取函数
        say: "&",
      },
      restrict: "E",
      template:
        '<div>{{ name }}, {{ sex }}<button ng-click="say()">按钮</button></div>',
      replace: true,

      // controller 主要用于指令与指令之间的通信
      // 配合 require 可以导入相关的指令
      controller: function($scope, $attrs) {},

      // 在编译之后运行-那么代码就放在link里
      link: function(scope, element, attrs, controller) {},

      // compile 函数，一般不会使用这个函数，如果有特殊需求可以使用
      // compile 调用阶段可以通过 tElem 改变原始的 dom，因为它发生才 ng 创建
      // 原始 dom 实例和 scope 实例之前；
      compile: function(tElem, tAttrs) {
        return {
          // pre 函数，当有嵌套指令时，它会在所有的子指令 的 pre-link 函数
          // 调用之前调用
          pre: function(scope, iElem, iAttrs) {},

          // post-link ，就是 link 函数了， link 写在 directive 里的写法就是
          // 一种更方便的写法，因为大部分情况下，directive 的逻辑都在 post-link 中
          // 处理；
          // 如果存在指令嵌套， post-link 函数的执行是最嵌套最深的指令先执行 post-link 函数，
          // 一直往上；
          post: function(scope, iElem, iAttrs) {},
        };
      },
    };
  });
</script>
```

# 事件系统

在项目中暂时没有用到，而且事件系统主要用于解耦，独立性很强，需要用到的时候再详细了解。

# Angular 1.x 新特性

新特性只是标题党,只是网上的很多资料都是基于 Angular 刚出来的时候写的，所以更新的一些特性基本没有讲到，由于项目比较赶，
我基本上使用的都是最常用的实践方式，常用但不一定是最佳实践。

## controller as

```html
// 很多资料在控制器里面都是注入 $scope ，然后在 $scope 上绑定变量或方法 //
其实在 1.2 之后，就不用注入了，可以使用控制器别名方式，为什么用 this
而不继续使用 $scope? // 1.嵌套 contoller 的时候，变量及方法调用更清晰; //
2.Angular 2.0 去掉了 $scope，到时候可以更自然的迁移; // 3.$scope
在实例化时会将原型指向其父作用域, 而 as
方式，是从自定义的构造函数实例化的对象，所以不存在继承的原型 //
所以默认情况下是访问不到父级作用域的变量的。理想状态下，控制器应该是独立的，这很正确;
<div ng-app="app">
  <div ng-controller="inner as in">
    {{ in.name }}, {{ in.text }}
    <div ng-controller="outer as oc">
      <!-- text 没有值输出，而在使用 $scope 时会输出，原因看上面 -->
      {{ oc.name }}, {{ oc.text }}
    </div>
  </div>
</div>
<script type="text/javascript">
  angular.module("app", []);
  angular.module("app").controller("inner", function() {
    this.name = "inner";
    this.text = "i'm inner";
  });
  angular.module("app").controller("outer", function() {
    this.name = "outer";
  });
</script>
```

## component

component 就是 direnctive 一种更上层的封装，就像 jQuery 中 $.post 是对 $.ajax 的封装，
所谓更高层的封装就是有些东西是要指定的：

- 默认就是独立的作用域，就如 directive 的 scope = true 一样;
- 默认会有一个 controller ，而且默认使用 controllerAs 的语法，创造了一个 \$ctrl 控制器对象;
- 没有 link ， 所以好像不能操作 dom ? 有待了解

```html
<div ng-app="app">
  <div ng-controller="helloCtrl as hCtrl">
    <hello text="hCtrl.text"></hello>
  </div>
</div>
<script type="text/javascript">
  angular.module("app", []);
  angular.module("app").controller("helloCtrl", function() {
    this.text = "hello";
  });
  angular.module("app").component("hello", {
    // 使用 bindings 绑定属性到 controller,而 directive 使用 bindToController 属性
    bindings: {
      text: "<",
    },

    // 可以使用默认创建的 $ctrl controller 实例
    template: "<div>Hello {{ $ctrl.text }}{{ $ctrl.sex }}!</div>",
    controller: function() {
      this.sex = "男";
    },
  });
</script>
```

## \$onInit()

存放数据初始化的逻辑的地方，在组件内 Controller 初始化的时候统一加载数据；

```javascript
angular.module("app").controller("inner", function() {
  this.$onInit = function() {
    // 在这里处理数据初始化
  };
});
```

## 多个 slot 的 Transclusion

这个东西还是很有用的，而且使用起来也简单。

```html
<div ng-app="app">
  <div>
    <hello>
      <hello-head>
        head!!!
      </hello-head>
      <hello-body>
        body!!!
      </hello-body>
    </hello>
  </div>
</div>
<script type="text/javascript">
  angular.module("app", []);
  angular.module("app").directive("hello", function() {
    return {
      scope: {
        name: "=",
        sex: "@",
        say: "&",
      },

      // 除了设为 true 还可以指定嵌套的部分哦
      // 问号的意思表示这个东西是可选的
      transclude: {
        head: "?helloHead",
        body: "?helloBody",
      },
      restrict: "E",
      template:
        '<div><div ng-transclude="head"></div><div ng-transclude="body"></div></div>',
      replace: true,
      link: function(scope, element, attrs) {},
    };
  });
</script>
```

参考资料：

1. [AngularJS 学习总结](https://yq.aliyun.com/articles/49888)
2. [Angular 沉思录（一）数据绑定](https://github.com/xufei/blog/issues/10)
3. [Angular 沉思录（二）视图模型的层次](https://github.com/xufei/blog/issues/11)
4. [Angular 沉思录（三）Angular 中的模块机制](https://github.com/xufei/blog/issues/17)
5. [AngularJS 实例教程（一）——数据绑定与监控](https://github.com/xufei/blog/issues/14)
6. [AngularJS 实例教程（二）——作用域与事件](https://github.com/xufei/blog/issues/18)
7. ['this' vs \$scope in AngularJS controllers](http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers)
8. [升级 AngularJS 1.5：新特性对比与最佳实践](http://blog.jimmylv.info/2016-03-08-introduction-of-angular-new-features-by-examples/)
9. [《AngularJS》5 个实例详解 Directive（指令）机制](http://damoqiongqiu.iteye.com/blog/1917971/)
10. [AngularJS Directive 隔离 Scope 数据交互](https://blog.coding.net/blog/angularjs-directive-isolate-scope?type=early)
11. [NG 指令中的 compile 与 link 函数解析](http://www.ifeenan.com/angularjs/2014-09-04-[%E8%AF%91]NG%E6%8C%87%E4%BB%A4%E4%B8%AD%E7%9A%84compile%E4%B8%8Elink%E5%87%BD%E6%95%B0%E8%A7%A3%E6%9E%90/)
12. [angulars-component-what-is-it-good-for](http://www.codelord.net/2015/12/17/angulars-component-what-is-it-good-for/)
