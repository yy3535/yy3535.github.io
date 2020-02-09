(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{273:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"vue-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-源码","aria-hidden":"true"}},[t._v("#")]),t._v(" vue 源码")]),t._v(" "),s("h2",{attrs:{id:"flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flow","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow")]),t._v(" "),s("p",[t._v("Flow 是 facebook 出品的 JavaScript 静态类型检查工具。")]),t._v(" "),s("h3",{attrs:{id:"为什么用-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么用 Flow")]),t._v(" "),s("p",[t._v("JavaScript 是动态类型语言，它的灵活性有目共睹，但是过于灵活的副作用是很容易就写出非常隐蔽的隐患代码，在编译期甚至看上去都不会报错，但在运行阶段就可能出现各种奇怪的 bug。")]),t._v(" "),s("p",[t._v("类型检查是当前动态类型语言的发展趋势，所谓类型检查，就是在编译期尽早发现（由类型错误引起的）bug，又不影响代码运行（不需要运行时动态检查类型），使编写 JavaScript 具有和编写 Java 等强类型语言相近的体验。")]),t._v(" "),s("h3",{attrs:{id:"flow-的工作方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flow-的工作方式","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow 的工作方式")]),t._v(" "),s("p",[t._v("通常类型检查分成 2 种方式：")]),t._v(" "),s("p",[t._v("类型推断：通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型。")]),t._v(" "),s("p",[t._v("类型注释：事先注释好我们期待的类型，Flow 会基于这些注释来判断。")]),t._v(" "),s("h4",{attrs:{id:"类型推断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型推断","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型推断")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"类型注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型注释")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"flow-在-vue-js-源码中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flow-在-vue-js-源码中的应用","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow 在 Vue.js 源码中的应用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install -g flow-bin\nflow init // 创建.flowconfig配置文件\nflow\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("flow\n├── compiler.js        # 编译相关\n├── component.js       # 组件数据结构\n├── global-api.js      # Global API 结构\n├── modules.js         # 第三方库定义\n├── options.js         # 选项相关\n├── ssr.js             # 服务端渲染相关\n├── vnode.js           # 虚拟 node 相关\n")])])]),s("p",[t._v("可以看到，Vue.js 有很多自定义类型的定义，在阅读源码的时候，如果遇到某个类型并想了解它完整的数据结构的时候，可以回来翻阅这些数据结构的定义。")]),t._v(" "),s("h3",{attrs:{id:"vue-js-源码目录设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-源码目录设计","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue.js 源码目录设计")]),t._v(" "),s("p",[t._v("Vue.js 的源码都在 src 目录下，其目录结构如下。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("src\n├── compiler        # 编译相关 \n├── core            # 核心代码 \n├── platforms       # 不同平台的支持\n├── server          # 服务端渲染\n├── sfc             # .vue 文件解析\n├── shared          # 共享代码\n")])])]),s("h2",{attrs:{id:"nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick","aria-hidden":"true"}},[t._v("#")]),t._v(" nextTick")]),t._v(" "),s("p",[t._v("重看nextTick 派发更新 依赖")])])}],!1,null,null,null);a.default=e.exports}}]);