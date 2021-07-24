---
title: 一套关于构建可维护性的 CSS 的规范
date: 2016-07-04
author: cj0x39e
---

[原文地址](http://rscss.io/)

> 一套关于构建可维护性的 CSS 的规范。

# 1.组件

> 考虑把 UI 图上的每一块都作为一个单独的组件。

## 1.1 组件命名

> 组件命名至少用两个单词，用中划线 - 链接，例如：

- 喜欢按钮 `like-button`
- 查找的表单 `search-form`
- 新闻文章卡片 `article-card`

## 1.2 元素

> 元素是组成组件的一部分。

- 元素命名,每个组件都可以由多个元素组成，最好给它们指定一个单词命名的类。

```CSS
.search-form {
  > .field {/*...*/}
  > .action {/*...*/}
}
```

- 元素选择器,如果没有特殊情况，选择器应该配合子代选择器，避免组件嵌套产生样式冲突。

```CSS
.article-card {
  .title {/*这是没有问题的*/}
  > .author {/*这是更好的写法*/}
}
```

- 多个单词的类名,如果类名需要两个或者多个单词，合并它们即可，不要使用破折号或者下划线。

```CSS
.profile-box {
  > .firstname {/*...*/}
  > .lastname {/*...*/}
  > .avatar {/*...*/}
}
```

- 避免标签选择器，无论什么时候都应该使用类名来作为选择器，标签选择器工作起来是可以的，
  但是可能带来小的性能损失而且没有类选择器那样具有描述性。

```CSS
  .article-card {
  > h3    { /* 不要使用标签 */ }
  > .name { /* 这样很好 */ }
}
```

## 1.3 组件变化

> 组件可以有多种形式变化，组件的元素也可以有许多变化。

- 命名组件变化，特殊形式的组件名是一个以中划线开头的单词

```CSS
.like-button {
  &.-wide { /* ... */ }
  &.-short { /* ... */ }
  &.-disabled { /* ... */ }
}
```

- 命名组件元素形式变化

```CSS
.shopping-card {
  > .title { /* ... */ }
  > .title.-small { /* ... */ }
}
```

- 关于中划线，选择中划线作为变种组件选择器命名开头的原因：
  - 可以有效的区分变种组件或元素
  - 因为 CSS 的特殊字符只能以\_或者-开头
  - 而中划线比下划线容易辨认
  - 中划线开启特殊样式比较像 UNIX 的命令参数

## 1.4 嵌套组件

> 有些时候组件嵌套是必要的，怎么更好的嵌套，这里有一些指南。

```html
<div class="article-link">
  <div class="vote-box">
    ...
  </div>
  <h3 class="title">...</h3>
  <p class="meta">...</p>
</div>
```

- 变种，当嵌套在另一个组件时，一个组件可能需要以某种方式出现,避免在父组件中修改嵌套组件。

```css
.article-header {
  > .vote-box > .up {
    /* ✗ avoid this */
  }
}
```

相反，更好的做法是将一个变种类添加到嵌套组件中，并在组件中修改其样式。

```css
.vote-box {
  &.-highlight > .up {
    /* ... */
  }
}
```

- 简化嵌套组件，有些时候，嵌套组件的标记可能有些多余：

```html
<div class="search-form">
  <input class="input" type="text" />
  <button class="search-button -red -large"></button>
</div>
```

这时可以简化组件并使用 CSS 预处理器的继承机制：

```html
<div class="search-form">
  <input class="input" type="text" />
  <button class="submit"></button>
</div>
```

```css
.search-form {
  > .submit {
    @extend .search-button;
    @extend .search-button.-red;
    @extend .search-button.-large;
  }
}
```

## 1.5 布局

- 避免定位属性，为了保证组件在不同的容器里面能够重复使用，应该避免在组件中使用以下属性：
  - Positioning (position, top, left, right, bottom)
  - Floats (float, clear)
  - Margins (margin)
  - Dimensions (width, height) \*
- 固定尺寸，也有例外的情况，元素需要固定的尺寸如图像或者标志。
- 在父级中定位组件的位置和尺寸,如果你需要定义组件的尺寸或者位置，应该在它们的父级中定义组件的这些属性，像下面的例子一样，定义 .article-card 的 width 和 floats 在它的容器 .article-list 中，而不是定义在这个组件中。

```css
.article-list {
  & {
    @include clearfix;
  }

  > .article-card {
    width: 33.3%;
    float: left;
  }
}

.article-card {
  & {
    /* ... */
  }
  > .image {
    /* ... */
  }
  > .title {
    /* ... */
  }
  > .category {
    /* ... */
  }
}
```

## 1.6 工具类

- 对于要重写值的通用类，将它们放在一个单独的文件中，并给定一个以下划线开头的名称。通常在属性值后面加上 !important，
  应该谨慎的使用它们。

```css
._unmargin {
  margin: 0 !important;
}
._center {
  text-align: center !important;
}
._pull-left {
  float: left !important;
}
._pull-right {
  float: right !important;
}
```

- 类名的前缀为下划线，这使得在使用它时变得容易辨认，不过它看起来有点丑陋，就好像使用太多了它在说：
  应该仔细想想要不要用这么多工具类？
- 组织工具类代码，所有的工具类应该集中放在一个叫 helpers 的文件里面，虽然可以把它们分散开来，但是集中管理
  能避免重复的定义这些东西。

# 2. CSS 结构

- 一个组件一个文件，每一个组件，应该放在一个单独的文件里面。

```css
/* css/components/search-form.scss */
.search-form {
  > .button {
    /* ... */
  }
  > .field {
    /* ... */
  }
  > .label {
    /* ... */
  }

  // variants
  &.-small {
    /* ... */
  }
  &.-wide {
    /* ... */
  }
}
```

- 使用全局匹配, 在 sas-rails 和 stylus ，能够很轻松的导入所有的组件。

```css
@import "components/* */";
```

- 避免过多的嵌套，使用不超过一层的嵌套，这很容易做到。

```css
/* ✗ Avoid: 3 levels of nesting */
.image-frame {
  > .description {
    /* ... */

    > .icon {
      /* ... */
    }
  }
}
/* ✓ Better: 2 levels */
.image-frame {
  > .description {
    /* ... */
  }
  > .description > .icon {
    /* ... */
  }
}
```

# 3.笔记

- 避免父组件的样子应该到子组件上，如果父组件和嵌套的组件，拥有相同名字的子元素，那么很有可能产生样式冲突：

```html
<article class="article-link">
  <div class="vote-box">
    <button class="up"></button>
    <button class="down"></button>
    <span class="count">4</span>
  </div>

  <h3 class="title">Article title</h3>
  <p class="count">3 votes</p>
</article>
```

```css
.article-link {
  > .title {
    /* ... */
  }
  > .count {
    /* ... (!!!) */
  }
}

.vote-box {
  > .up {
    /* ... */
  }
  > .down {
    /* ... */
  }
  > .count {
    /* ... */
  }
}
```

在上面这个例子中，如果 .article-link > .count 没有这个子选择器，那这个样式也会应用到
.vote-box .count 上，这也是我们为什么要使用子选择器的原因。

- 恐惧心理，一些开发者可能害怕应用这些规范，例如：

  - "我不想使用破折号"，破折号不是必须的，但是要有一个方案去区分组件、元素和变种组件
  - "我的组件不需要两个单词"，有些组件确实只需要一个单词，例如 alert ，这种情况下，可以考虑使用一些后缀，这将使组件更具有描述性，例如下面这些组件名：

  ```css
  .alert-box {
  }
  .alert-card {
  }
  .alert-block {
  }
  ```

  或者行内组件的命名:

  ```css
  .link-button {
  }
  .link-span {
  }
  ```

# 4.总结

- 用两个单词命名组件
- 组件的元素用一个单词命名
- 变种组件以类名以中划线开头
- 组件可以嵌套
- 记住可以用扩展让事情变的简单
