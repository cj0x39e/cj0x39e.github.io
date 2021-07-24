(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{333:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本文基于 "),a("code",[t._v("angular-cli")]),t._v(" 6.x 提供的 "),a("code",[t._v("Library")]),t._v(" 相关命令。")]),t._v(" "),a("p",[t._v("我们创建一个名叫 "),a("code",[t._v("hello-ui")]),t._v(" 的库，该库包含以下功能：")]),t._v(" "),a("ul",[a("li",[t._v("一个按钮 "),a("code",[t._v("component")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/taozhiw/hello-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例项目代码: https://github.com/taozhiw/hello-ui"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"创建库的工作空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建库的工作空间"}},[t._v("#")]),t._v(" 创建库的工作空间")]),t._v(" "),a("p",[a("code",[t._v("Library")]),t._v(" 不能独立创建("),a("a",{attrs:{href:"https://github.com/angular/angular-cli/issues/10929",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于该设计的相关讨论"),a("OutboundLink")],1),t._v(")，以下是 Angular 团队成员的解释：")]),t._v(" "),a("blockquote",[a("p",[t._v("There isn't a flag to do this on ng new but it is something we have discussed. I'd like to point out that usually one would want to test their libraries on a real app while developing though.")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("ng new")]),t._v(" 命令创建 "),a("code",[t._v("hello-ui-wrap")]),t._v(" 项目（以下该项目称为工作空间）：")]),t._v(" "),a("div",{staticClass:"language-base extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ng new hello-ui-wrap --style=scss\n")])])]),a("p",[a("code",[t._v("--style")]),t._v(" 可指定项目使用的样式预编译语言，其它 "),a("code",[t._v("ng new")]),t._v(" 的参数可使用 "),a("code",[t._v("ng new --help")]),t._v(" 查看，这样我们的工作空间就创建好了。项目创建完成 "),a("code",[t._v("angular-cli")]),t._v(" 会自动使用 "),a("code",[t._v("npm")]),t._v(" 安装相关依赖包，一般我会强制停掉使用 "),a("code",[t._v("yarn")]),t._v(" 安装。安装完成，便可以使用 "),a("code",[t._v("npm run start")]),t._v(" 启动，然后在浏览器打开 http://localhost:4200/ 便可以看到欢迎界面了。")]),t._v(" "),a("h2",{attrs:{id:"创建库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建库"}},[t._v("#")]),t._v(" 创建库")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("ng generate")]),t._v(" 命令:")]),t._v(" "),a("div",{staticClass:"language-base extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ng generate library hello-ui --prefix=hu\n")])])]),a("p",[a("code",[t._v("--prefix=hu")]),t._v(" 指定了该库的组件名的前缀，一般如果库提供了组件的话，都是需要指定的。还有其它参数同样可使用 "),a("code",[t._v("ng generate library --help")]),t._v(" 查看。命令执行完毕后，工作空间中多了一个 "),a("code",[t._v("projects")]),t._v(" 文件夹，该文件夹中的 "),a("code",[t._v("hello-ui")]),t._v(" 便是我们创建的库了，从目录的结构就可以看出，一个工作空间中是可以创建多个库的。")]),t._v(" "),a("p",[t._v("接着删掉库里面的 "),a("code",[t._v("hello-ui.component.spec.ts")]),t._v("、"),a("code",[t._v("hello-ui.component.ts")]),t._v("、"),a("code",[t._v("hello-ui.service.spec.ts")]),t._v("、"),a("code",[t._v("hello-ui.service.ts")]),t._v(" 文件，及清除掉 "),a("code",[t._v("hello-ui.module.ts")]),t._v("、"),a("code",[t._v("public_api.ts")]),t._v(" 对于这几个文件的引用代码。因为后续我们不会用到。")]),t._v(" "),a("h2",{attrs:{id:"创建库的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建库的组件"}},[t._v("#")]),t._v(" 创建库的组件")]),t._v(" "),a("p",[t._v("为了让组件能够按需导出 "),a("code",[t._v("module")]),t._v("，我们给每个组件都创建一个 "),a("code",[t._v("module")]),t._v("，对于 "),a("code",[t._v("pipe")]),t._v("、"),a("code",[t._v("directive")]),t._v(" 等我们都可以为其建立单独的 "),a("code",[t._v("module")]),t._v("。")]),t._v(" "),a("p",[t._v("首先创建按钮模块，转到 "),a("code",[t._v("hello-ui/src/lib")]),t._v(" 目录下（如果不切换目录，在工作空间下创建库的部件，需要加上 --project=hello-ui），执行创建模块的命令:")]),t._v(" "),a("div",{staticClass:"language-base extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ng generate module button\n")])])]),a("p",[t._v("命令执行完成后可看到在 "),a("code",[t._v("hello-ui/src/lib")]),t._v(" 下多了一个 "),a("code",[t._v("hello")]),t._v(" 文件夹，接着创建我们的按钮组件:")]),t._v(" "),a("div",{staticClass:"language-base extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ng generate component button\n")])])]),a("p",[t._v("创建完成后，修改 "),a("code",[t._v("button.component.html")]),t._v(" 的内容为下面的内容:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是 hello-ui 的 button"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("修改 "),a("code",[t._v("button.module.ts")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CommonModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  declarations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ButtonComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意，必须 exports 出去，不然调用时会报找不到相关组件")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ButtonComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ButtonModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("修改 "),a("code",[t._v("hello-ui.module.ts")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ButtonModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同样必须导出")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ButtonModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloUiModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("修改 "),a("code",[t._v("public_api.ts")]),t._v("：")]),t._v(" "),a("p",[t._v("库对外的东西都需要在此声明，不声明调用会报错。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/hello-ui.module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/button/button.module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/button/button.component"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"打包库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包库"}},[t._v("#")]),t._v(" 打包库")]),t._v(" "),a("p",[t._v("很简单，在 "),a("code",[t._v("package.json")]),t._v(" 中加一个脚本配置:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build:lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ng build --prod hello-ui"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后使用 "),a("code",[t._v("npm run build:lib")]),t._v(" 或者 "),a("code",[t._v("yarn build:lib")]),t._v(" 运行该命令，运行结束，就可以在工作空间下看到多了个 "),a("code",[t._v("dist")]),t._v(" 目录, 在 "),a("code",[t._v("dist")]),t._v(" 目录下的 "),a("code",[t._v("hello-ui")]),t._v(" 文件夹便是打包后的目录。")]),t._v(" "),a("h3",{attrs:{id:"在工作空间中使用库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在工作空间中使用库"}},[t._v("#")]),t._v(" 在工作空间中使用库")]),t._v(" "),a("p",[t._v("像使用其它 npm 包一样，在 "),a("code",[t._v("app.module.ts")]),t._v(" 中导入即可：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.component"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按需导入（虽然目前看起来没什么用，因为库里面就一个组件）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ButtonModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-ui"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者整个库导入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import { HelloUiModule } from 'hello-ui';")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  declarations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("BrowserModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ButtonModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  providers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bootstrap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后修改下 "),a("code",[t._v("app.component.html")]),t._v("，加上我们自己组件的调用：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hu-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("hu-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("然后重启服务，就可以看到我们的库已经可以调用了。")]),t._v(" "),a("p",[t._v("为什么我们的库能像 npm 安装的包一样导入，是因为我们在生成库的时候，"),a("code",[t._v("angular-cli")]),t._v(" 帮我们在 "),a("code",[t._v("tsconfig.json")]),t._v(" 中加上了下面的内容:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paths"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hello-ui"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/hello-ui"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hello-ui/*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/hello-ui/*"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("所以 Angular 在编译时，就会先从配置的 "),a("code",[t._v("paths")]),t._v(" 去查找，然后再去 "),a("code",[t._v("node_modules")]),t._v(" 去查找。")]),t._v(" "),a("h2",{attrs:{id:"发布库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布库"}},[t._v("#")]),t._v(" 发布库")]),t._v(" "),a("p",[t._v("切换到 "),a("code",[t._v("dist/hello-ui")]),t._v(" 下执行 "),a("code",[t._v("npm publish")]),t._v(" ("),a("a",{attrs:{href:"https://docs.npmjs.com/getting-started/publishing-npm-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于 npm publish"),a("OutboundLink")],1),t._v(") 就行了。")]),t._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("h3",{attrs:{id:"给库增加依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给库增加依赖包"}},[t._v("#")]),t._v(" 给库增加依赖包")]),t._v(" "),a("p",[t._v("如果库有依赖包，我们在其 "),a("code",[t._v("package.json")]),t._v(" 的 "),a("code",[t._v("dependencies")]),t._v(" 字段中配置下，还没有完，还需要在\n"),a("code",[t._v("ng-package.json")]),t._v(" 中配置下 "),a("code",[t._v("whitelistedNonPeerDependencies")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/dherges/ng-packagr/issues/716",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于 whitelistedNonPeerDependencies 的相关讨论"),a("OutboundLink")],1),t._v(")，例如我们的库依赖 "),a("code",[t._v("clone")]),t._v(" 这个库，则需要配置:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"whitelistedNonPeerDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("参考资料：")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Version 6 of Angular Now Available"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/angular/angular-cli/wiki/stories-create-library",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5",target:"_blank",rel:"noopener noreferrer"}},[t._v("creating-a-library-in-angular"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=n.exports}}]);