(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_01-变量类型和计算知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-变量类型和计算知识点","aria-hidden":"true"}},[t._v("#")]),t._v(" 01-变量类型和计算知识点")]),t._v(" "),a("h2",{attrs:{id:"变量类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量类型")]),t._v(" "),a("p",[t._v("JS变量最基本的分类就是"),a("strong",[t._v("值类型")]),t._v("和"),a("strong",[t._v("引用类型")]),t._v("，两者有何区别呢，可以通过例子看出来。")]),t._v(" "),a("p",[a("strong",[t._v("值类型：string,boolean,number,undefined")])]),t._v(" "),a("p",[a("strong",[t._v("引用类型：object(date,RegExp),array,function,null")])]),t._v(" "),a("p",[t._v("以下是值类型的一个例子")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("以下是引用类型的一个例子")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("typeof")]),t._v("可以知道一个值类型是什么类型，而对于引用类型，它就无能为力了。但是它可以将引用类型区分出"),a("code",[t._v("function")]),t._v("，为什么 ———— 因为"),a("code",[t._v("function")]),t._v("相对于其他引用类型（如对象、数组）来说，具有非常特殊的意义，JS 中的函数非常重要，接下来的原型、作用域都会深入讲解函数。")]),t._v(" "),a("p",[t._v("JS 中的某些表现，就已经体现了函数的特殊意义，例如：对象和数组，JS中没有内置的（不考虑 JS-WEB-API），而函数却内置了很多，例如 "),a("code",[t._v("Object")]),t._v(" "),a("code",[t._v("Array")]),t._v(" "),a("code",[t._v("Boolean")]),t._v(" "),a("code",[t._v("Number")]),t._v(" "),a("code",[t._v("String")]),t._v(" "),a("code",[t._v("Function")]),t._v(" "),a("code",[t._v("Date")]),t._v(" "),a("code",[t._v("RegExp")]),t._v(" "),a("code",[t._v("Error")]),t._v("。这些函数 JS 本身就有，要是没有它们，就没法愉快的写 JS 代码了。因为他们是基础数据类型的构造函数（后面会讲解）")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("typeof")]),t._v("可以区分类型有"),a("code",[t._v("number")]),t._v(" "),a("code",[t._v("string")]),t._v(" "),a("code",[t._v("boolean")]),t._v(" "),a("code",[t._v("undefined")]),t._v("（值类型） "),a("code",[t._v("function")]),t._v(" "),a("code",[t._v("object")]),t._v("（引用类型）")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 特例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object 因为 null 也是引用类型。null 就相当于引用类型中的 undefined")]),t._v("\n")])])]),a("p",[t._v("那么针对第二个例子，如何将"),a("code",[t._v("a")]),t._v("的内容复制给"),a("code",[t._v("b")]),t._v("，并且保证"),a("code",[t._v("b")]),t._v("的修改不会影响到"),a("code",[t._v("a")]),t._v("呢？那就需要"),a("strong",[t._v("深度复制")]),t._v("，意思就是对"),a("code",[t._v("a")]),t._v("的属性进行递归遍历，再依次复制，这块我们会放在后面专门讲解。")]),t._v(" "),a("h2",{attrs:{id:"变量计算（此处为值类型的计算）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量计算（此处为值类型的计算）","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量计算（此处为值类型的计算）")]),t._v(" "),a("blockquote",[a("p",[t._v("本节专门讲解值类型的计算，引用类型的计算放在后面作为“JS 算法”统一讲解。")])]),t._v(" "),a("p",[t._v("组简单的计算，就是数字的加减乘除、字符串的拼接和替换，这个太简单了，这里不提了。但是 JS 在值类型的运算过程中，特别需要注意和利用"),a("strong",[t._v("强制类型转换")]),t._v("这一特性，有以下场景：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("字符串拼接")])]),t._v(" "),a("li",[a("strong",[a("code",[t._v("==")])])]),t._v(" "),a("li",[a("strong",[t._v("逻辑运算（"),a("code",[t._v("if")]),t._v(" "),a("code",[t._v("!")]),t._v(" "),a("code",[t._v("||")]),t._v(" "),a("code",[t._v("&&")]),t._v("）")])])]),t._v(" "),a("p",[t._v("字符串拼接最常见的错误如下，特别要注意。如何规避呢 ———— 对进行计算的变量通过"),a("code",[t._v("typeof")]),t._v("来判断类型 ———— 太麻烦？编码本身就是一个体力活！")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("字符串拼接")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 110")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '10010'")]),t._v("\n")])])]),a("p",[t._v("接下来，"),a("code",[t._v("==")]),t._v("也会进行强制类型转换，如")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("==")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//==")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("针对"),a("code",[t._v("100 == '100'")]),t._v("就是和拼接字符串一样的类型转换，而针对下面两个例子，就是一个逻辑运算上的强制类型转换（马上会讲解）。所以，要求你写 JS 代码时，所有的地方都要使用"),a("code",[t._v("===")]),t._v("而不能使用"),a("code",[t._v("==")]),t._v("，但是阅读 jquery 源码后我发现一个特例，就是"),a("code",[t._v("obj.a == null")]),t._v("，使用很简洁。")]),t._v(" "),a("p",[t._v("最后，逻辑运算中的强制类型转换，先以"),a("code",[t._v("if")]),t._v("为例说明")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("逻辑运算（"),a("code",[t._v("if")]),t._v(" "),a("code",[t._v("!")]),t._v(" "),a("code",[t._v("||")]),t._v(" "),a("code",[t._v("&&")]),t._v("）")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//if语句")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("所有经过"),a("code",[t._v("if")]),t._v("判断的变量，都会进行逻辑运算的强制类型转换，转换为"),a("code",[t._v("true")]),t._v("或者"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("逻辑运算（"),a("code",[t._v("if")]),t._v(" "),a("code",[t._v("!")]),t._v(" "),a("code",[t._v("||")]),t._v(" "),a("code",[t._v("&&")]),t._v("）")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//逻辑运算符")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'abc'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断一个变量会被当做 true 还是 false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("if(obj.a==null){\n//这里相当于obj.a===null||obj.a===undefined,简写形式\n}")])]),t._v(" "),a("h1",{attrs:{id:"答题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答题","aria-hidden":"true"}},[t._v("#")]),t._v(" 答题")]),t._v(" "),a("h3",{attrs:{id:"js中使用typeof能得到的哪些类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中使用typeof能得到的哪些类型","aria-hidden":"true"}},[t._v("#")]),t._v(" JS中使用"),a("code",[t._v("typeof")]),t._v("能得到的哪些类型")]),t._v(" "),a("p",[t._v("针对这个题目，可以通过以下程序进行验证")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// boolean")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function")]),t._v("\n")])])]),a("h3",{attrs:{id:"何时使用-何时使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何时使用-何时使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 何时使用"),a("code",[t._v("===")]),t._v(" 何时使用"),a("code",[t._v("==")])]),t._v(" "),a("p",[t._v("首先你得明白两者的区别。"),a("code",[t._v("==")]),t._v("会先试图类型转换，然后再比较，而"),a("code",[t._v("===")]),t._v("不会类型转换，直接比较。如下例子：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("根据 jQuery 源码中的写法，只推荐在一个地方用"),a("code",[t._v("==")]),t._v("，其他地方都必须用"),a("code",[t._v("===")]),t._v("。这个用"),a("code",[t._v("==")]),t._v("的地方就是：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里相当于 obj.a === null || obj.a === undefined ，简写形式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("编程是需要绝对严谨的态度，我们只在这一个地方让它进行类型转换，来简化我们的写法，因为这个场景非常简单和固定。而其他场景下，我们都必须使用"),a("code",[t._v("===")]),t._v("，除非有特殊的业务需要。")]),t._v(" "),a("h3",{attrs:{id:"js中有哪些内置函数-——-数据封装类对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中有哪些内置函数-——-数据封装类对象","aria-hidden":"true"}},[t._v("#")]),t._v(" JS中有哪些内置函数 —— 数据封装类对象")]),t._v(" "),a("p",[a("code",[t._v("Object")]),t._v(" "),a("code",[t._v("Array")]),t._v(" "),a("code",[t._v("Boolean")]),t._v(" "),a("code",[t._v("Number")]),t._v(" "),a("code",[t._v("String")]),t._v(" "),a("code",[t._v("Function")]),t._v(" "),a("code",[t._v("Date")]),t._v(" "),a("code",[t._v("RegExp")]),t._v(" "),a("code",[t._v("Error")])]),t._v(" "),a("p",[t._v("对于这种问题，回复时能把基本常用的回答上来就可以，没必要背书把所有的都写上。")]),t._v(" "),a("h3",{attrs:{id:"js变量按照存储方式区分为哪些类型，并描述其特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js变量按照存储方式区分为哪些类型，并描述其特点","aria-hidden":"true"}},[t._v("#")]),t._v(" JS变量按照存储方式区分为哪些类型，并描述其特点")]),t._v(" "),a("ul",[a("li",[t._v("值类型 "),a("code",[t._v("undefined")]),t._v(" "),a("code",[t._v("string")]),t._v(" "),a("code",[t._v("number")]),t._v(" "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("引用类型 "),a("code",[t._v("object")]),t._v(" "),a("code",[t._v("function")])])]),t._v(" "),a("p",[t._v("最后补充一点，在 JS 中，所有的引用类型都可以自由设置属性")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),a("h3",{attrs:{id:"如何理解json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何理解json","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何理解JSON")]),t._v(" "),a("p",[t._v("这个问题，很容易被一些初学者误答。其实，JSON 是什么？从 JS 角度回答，太简单了，"),a("code",[t._v("console.log(JSON)")]),t._v("得到"),a("code",[t._v("JSON")]),t._v("只是一个对象，有"),a("code",[t._v("parse")]),t._v("和"),a("code",[t._v("stringify")]),t._v("两个方法，使用也非常简单")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JOSN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"a":10,"b":20}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我之所以误答，就是怕初学者把这个问题搞大，因为 json 也是一种数据格式，这一点和 xml 一样。但是在 JS 的面试题中，如果问到这个问题，直接说明"),a("code",[t._v("parse")]),t._v("和"),a("code",[t._v("stringify")]),t._v("两个方法的用法即可，面试官如果有追问，你再去继续回答。")])])}],!1,null,null,null);s.default=e.exports}}]);