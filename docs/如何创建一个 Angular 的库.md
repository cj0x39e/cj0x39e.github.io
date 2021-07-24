---
title: 如何创建一个 Angular 的库
date: 2018-06-14
author: cj0x39e
---

本文基于 `angular-cli` 6.x 提供的 `Library` 相关命令。

我们创建一个名叫 `hello-ui` 的库，该库包含以下功能：

- 一个按钮 `component`

[示例项目代码: https://github.com/taozhiw/hello-ui](https://github.com/taozhiw/hello-ui)

## 创建库的工作空间

`Library` 不能独立创建([关于该设计的相关讨论](https://github.com/angular/angular-cli/issues/10929))，以下是 Angular 团队成员的解释：

> There isn't a flag to do this on ng new but it is something we have discussed. I'd like to point out that usually one would want to test their libraries on a real app while developing though.

使用 `ng new` 命令创建 `hello-ui-wrap` 项目（以下该项目称为工作空间）：

```base
ng new hello-ui-wrap --style=scss
```

`--style` 可指定项目使用的样式预编译语言，其它 `ng new` 的参数可使用 `ng new --help` 查看，这样我们的工作空间就创建好了。项目创建完成 `angular-cli` 会自动使用 `npm` 安装相关依赖包，一般我会强制停掉使用 `yarn` 安装。安装完成，便可以使用 `npm run start` 启动，然后在浏览器打开 http://localhost:4200/ 便可以看到欢迎界面了。

## 创建库

使用 `ng generate` 命令:

```base
ng generate library hello-ui --prefix=hu
```

`--prefix=hu` 指定了该库的组件名的前缀，一般如果库提供了组件的话，都是需要指定的。还有其它参数同样可使用 `ng generate library --help` 查看。命令执行完毕后，工作空间中多了一个 `projects` 文件夹，该文件夹中的 `hello-ui` 便是我们创建的库了，从目录的结构就可以看出，一个工作空间中是可以创建多个库的。

接着删掉库里面的 `hello-ui.component.spec.ts`、`hello-ui.component.ts`、`hello-ui.service.spec.ts`、`hello-ui.service.ts` 文件，及清除掉 `hello-ui.module.ts`、`public_api.ts` 对于这几个文件的引用代码。因为后续我们不会用到。

## 创建库的组件

为了让组件能够按需导出 `module`，我们给每个组件都创建一个 `module`，对于 `pipe`、`directive` 等我们都可以为其建立单独的 `module`。

首先创建按钮模块，转到 `hello-ui/src/lib` 目录下（如果不切换目录，在工作空间下创建库的部件，需要加上 --project=hello-ui），执行创建模块的命令:

```base
ng generate module button
```

命令执行完成后可看到在 `hello-ui/src/lib` 下多了一个 `hello` 文件夹，接着创建我们的按钮组件:

```base
ng generate component button
```

创建完成后，修改 `button.component.html` 的内容为下面的内容:

```html
<button>我是 hello-ui 的 button</button>
```

修改 `button.module.ts` ：

```typescript
@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],

  // 注意，必须 exports 出去，不然调用时会报找不到相关组件
  exports: [ButtonComponent],
})
export class ButtonModule {}
```

修改 `hello-ui.module.ts`：

```typescript
@NgModule({
  imports: [ButtonModule],

  // 同样必须导出
  exports: [ButtonModule],
})
export class HelloUiModule {}
```

修改 `public_api.ts`：

库对外的东西都需要在此声明，不声明调用会报错。

```typescript
export * from "./lib/hello-ui.module";
export * from "./lib/button/button.module";
export * from "./lib/button/button.component";
```

## 打包库

很简单，在 `package.json` 中加一个脚本配置:

```json
"scripts": {
    ...
    "build:lib": "ng build --prod hello-ui",
    ...
}
```

然后使用 `npm run build:lib` 或者 `yarn build:lib` 运行该命令，运行结束，就可以在工作空间下看到多了个 `dist` 目录, 在 `dist` 目录下的 `hello-ui` 文件夹便是打包后的目录。

### 在工作空间中使用库

像使用其它 npm 包一样，在 `app.module.ts` 中导入即可：

```typescript
import { AppComponent } from "./app.component";

// 按需导入（虽然目前看起来没什么用，因为库里面就一个组件）
import { ButtonModule } from "hello-ui";

// 或者整个库导入
// import { HelloUiModule } from 'hello-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

然后修改下 `app.component.html`，加上我们自己组件的调用：

```html
<hu-button></hu-button>
```

然后重启服务，就可以看到我们的库已经可以调用了。

为什么我们的库能像 npm 安装的包一样导入，是因为我们在生成库的时候，`angular-cli` 帮我们在 `tsconfig.json` 中加上了下面的内容:

```json
    "paths": {
      "hello-ui": [
        "dist/hello-ui"
      ],
      "hello-ui/*": [
        "dist/hello-ui/*"
      ]
    }
```

所以 Angular 在编译时，就会先从配置的 `paths` 去查找，然后再去 `node_modules` 去查找。

## 发布库

切换到 `dist/hello-ui` 下执行 `npm publish` ([关于 npm publish](https://docs.npmjs.com/getting-started/publishing-npm-packages)) 就行了。

## 其它

### 给库增加依赖包

如果库有依赖包，我们在其 `package.json` 的 `dependencies` 字段中配置下，还没有完，还需要在
`ng-package.json` 中配置下 `whitelistedNonPeerDependencies` ([关于 whitelistedNonPeerDependencies 的相关讨论](https://github.com/dherges/ng-packagr/issues/716))，例如我们的库依赖 `clone` 这个库，则需要配置:

```json
"whitelistedNonPeerDependencies": ["clone"]
```

参考资料：

- [Version 6 of Angular Now Available](https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4)

- [官方文档](https://github.com/angular/angular-cli/wiki/stories-create-library)

- [creating-a-library-in-angular](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5)
