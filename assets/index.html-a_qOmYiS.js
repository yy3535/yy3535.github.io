import{_ as t,r as l,o as c,c as p,b as n,e,w as i,d as s,a as d}from"./app-E-cEvfoH.js";const o="/img/简单工厂.png",u="/img/抽象工厂模式1.png",r="/img/抽象工厂模式2.png",v="/img/单例模式.png",m="/img/适配器模式.png",b="/img/装饰器模式.png",k="/img/VPN.png",g="/img/代理模式.png",f="/img/公司内部服务器.png",h="/img/外观模式.png",y="/img/redux.png",w="/img/观察者模式.png",x="/img/发布订阅模式.png",q={},j=n("h1",{id:"前端设计模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端设计模式","aria-hidden":"true"},"#"),s(" 前端设计模式")],-1),_={class:"table-of-contents"},N=d(`<h2 id="面对对象" tabindex="-1"><a class="header-anchor" href="#面对对象" aria-hidden="true">#</a> 面对对象</h2><ol><li><p>把客观对象属性抽象成属性和操作，隐藏内部属性</p></li><li><p>把同一个类型的对象的属性和操作绑在一起，变成类</p></li><li><p>可实现继承和操作</p><ul><li>面对对象的分析 OOA</li><li>面对对象的设计 OOD</li><li>面对对象的变成 OOP</li></ul></li><li><p>类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token parameter">food</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> eat </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>food<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> dog<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&quot;狗&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;肉&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>继承</p><p>父类公用方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;狗&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪汪&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> dog<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;肉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;猫&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;喵喵喵&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> cat<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;鱼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>封装</p></li></ol><ul><li>减少耦合，部分不让外部访问，管理接口权限</li><li>带_开头的都是私有的，业界约定，但es6语法尚不支持，typescript有这种特性</li></ul><ol><li>安装</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//2.ts</span>
<span class="token keyword">function</span> <span class="token function">greeting</span><span class="token punctuation">(</span>user<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//类型限制</span>
  <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span><span class="token operator">+</span>user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> user<span class="token operator">=</span><span class="token string">&#39;zfpx&#39;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeting</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> user<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeting</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc 2.ts//会出来一个2.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>特点</p><ul><li><p>类型限制，如上</p></li><li><p>封装</p><p>public 类内和类外都可使用</p><p>protected 可在类内和子类中使用</p><p>private 只可在类内使用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//2.ts</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> money<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>money<span class="token operator">=</span>money<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> num<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>money<span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">=</span>num<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//在子类中可以访问父类的公有属性</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的名字叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//在子类中可以访问父类的protected属性</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的名字叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">getMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的名字叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>money<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token comment">//出错</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> s1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;zfpx&#39;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//在其他类中可访问公有属性</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token comment">//可访问</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token comment">//报错</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>money<span class="token punctuation">)</span><span class="token comment">//报错，在类外</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="4"><li><p>多态</p><p>同一个函数名接收不同参数(暂时无法实现，会报错)</p><p>同一个函数名在子类中实现不同功能</p></li></ol><h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2><ul><li>按什么标准来实现功能。</li><li>功能相同，有不同的设计方法。</li><li>需求不断变化，设计的作用就会体现出来。</li></ul><p>五大设计原则</p><ul><li><p>单一职责原则</p><p>一个程序只做一件事，否则拆分</p></li><li><p>开放封闭原则</p><p>对扩展开放，对修改封闭，不能改老代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//request.js</span>
<span class="token keyword">function</span> <span class="token function">checkStatus</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>code<span class="token operator">&gt;=</span><span class="token number">200</span><span class="token operator">&amp;&amp;</span>response<span class="token punctuation">.</span>code<span class="token operator">&lt;</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;响应结果不正确&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">parseJSON</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
*1.判断相应的状态码是不是2xx，如果不是的话也认为是错误
*2.把相应体转化成JSON对象
*/</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>options<span class="token punctuation">)</span>
  	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>checkStatus<span class="token punctuation">)</span>
  	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>parseJSON<span class="token punctuation">)</span>
  	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>checkCode<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>里氏替换原则</p><ul><li><p>子类的函数能覆盖父类同名函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;鱼&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;骨头&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父类能出现的地方，子类也能出现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//应用场景
//React 虚拟DOM,hello和h1都是子类，所以都能放
React.render(&lt;Hello/&gt;);
React.render(&lt;h1/&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>js使用比较少</p></li></ul></li><li><p>接口隔离原则</p><ul><li><p>保持接口独立，接口单一原则，JS中没有接口，使用较少，ts中有接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//4.ts
interface Person{
  firstName:string
  lastName:string
}
interface Fly{
  swing:number;
}
function greeting(obj:Person){//加上类型检查会对传入的对象作检查，类型不对或者缺少会报错
  console.log(obj.firstName+obj.lastName)
}
let p={firstName:&#39;张&#39;,lastName:&#39;三&#39;}
greeting(p)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>依赖反转原则</p><ul><li><p>依赖抽象而不依赖实现(尽量依赖父类而不依赖子类)，能依赖Person不依赖Women</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token operator">=</span>gender<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;买ipad&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Woman</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token operator">=</span>gender<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;买包&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> man<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> women<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Woman</span><span class="token punctuation">(</span><span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
man<span class="token punctuation">.</span><span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
woman<span class="token punctuation">.</span><span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><p><strong>UML</strong></p><p>标准建模语言，其中一个最重要的就是<strong>类图</strong>和<strong>对象图</strong></p><p><strong>类图</strong></p><p>描述类的关系(依赖，泛华(继承))</p><h3 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h3><p>+public</p><p>-private</p><p>箭头空三角 子类继承父类</p><p><img src="`+o+`" alt="简单工厂模式"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Plant</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">grow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我正在生长~~~~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Apple</span> <span class="token keyword">extends</span> <span class="token class-name">Plant</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>flavour</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>flavour<span class="token operator">=</span>flavour<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Orange</span> <span class="token keyword">extends</span> <span class="token class-name">Plant</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>flavour</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>flavour<span class="token operator">=</span>flavour<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">Apple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Orange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接new有什么缺点：</p><ol><li>耦合(需要知道我要的类在哪里，得知道怎么做)</li><li>依赖具体实现(apple类永远不能修改删掉)</li></ol><p>简单工厂模式：(用一个类做一个端菜的服务员)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Factory</span><span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    	<span class="token keyword">case</span> <span class="token string">&#39;apple&#39;</span><span class="token operator">:</span>
    		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Apple</span><span class="token punctuation">(</span><span class="token string">&#39;苹果&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;甜&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token keyword">case</span> <span class="token string">&#39;orange&#39;</span><span class="token operator">:</span>
    		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Orange</span><span class="token punctuation">(</span><span class="token string">&#39;橘子’，酸&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token keyword">default</span><span class="token operator">:</span>
    		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;你要的东西没有&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> apple<span class="token operator">=</span>Factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apple<span class="token punctuation">.</span>flavour<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> orange<span class="token operator">=</span>Factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;orange&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>orange<span class="token punctuation">.</span>flavour<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好处：</p><ol><li>（有一天橘子没有了，可以换成柠檬，但客户并不知道）隐藏实现，需求修改后只需要改更少的一部分</li><li>外部简单，内部灵活</li></ol><p>经典应用场景：</p><ol><li><p>jQuery</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">jQuery</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> elements<span class="token operator">=</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> length<span class="token operator">=</span>elements<span class="token operator">?</span>elements<span class="token punctuation">.</span>length<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>elements<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">=</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span><span class="token function-variable function">$</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">jQuery</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token comment">//调方法，返回一个jquery实例</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>react</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//虚拟DOM</span>
<span class="token keyword">let</span> h1<span class="token operator">=</span><span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">//babel编译后变成：let h1=React.createElement(&#39;h1&#39;,{className:&#39;title&#39;},&#39;hello&#39;);</span>
<span class="token comment">//h1就是虚拟DOM</span>
<span class="token keyword">class</span> <span class="token class-name">VNode</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">tagName<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>children</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tagName<span class="token operator">=</span>tagName<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>attrs<span class="token operator">=</span>attrs<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token operator">=</span>children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">tagName<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>children</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>tagName<span class="token punctuation">,</span>attrs<span class="token punctuation">,</span>children<span class="token punctuation">)</span><span class="token comment">//返回一个VNode实例，有一天VNode名字改了，外部依然是调用createElement</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h3><p>核心工厂不再负责所有产品的创建，而是将具体创建交给子类去做</p><p>原因：</p><ul><li>简单工厂模式不符合开闭原则(对修改关闭，对扩展开放，会改到老代码)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//plant.js</span>
<span class="token keyword">class</span> <span class="token class-name">Plant</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>Plant<span class="token punctuation">;</span>
<span class="token comment">//apple.js</span>
<span class="token keyword">let</span> Plant<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./plant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> Factory<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./factory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Apple</span> <span class="token keyword">extends</span> <span class="token class-name">Plant</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>flavour</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>flavour<span class="token operator">=</span>flavour<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">AppleFactory</span> <span class="token keyword">extends</span> <span class="token class-name">Factory</span><span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Apple</span><span class="token punctuation">(</span><span class="token string">&#39;苹果&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;甜&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>AppleFactory<span class="token punctuation">;</span>
<span class="token comment">//orange.js</span>
<span class="token keyword">let</span> Plant<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./plant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> Factory<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./factory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Orange</span> <span class="token keyword">extends</span> <span class="token class-name">Plant</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>flavour</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>flavour<span class="token operator">=</span>flavour<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">OrangeFactory</span> <span class="token keyword">extends</span> <span class="token class-name">Factory</span><span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Orange</span><span class="token punctuation">(</span><span class="token string">&#39;桔子&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;酸&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>OrangeFactory<span class="token punctuation">;</span>
<span class="token comment">//factory.js</span>
<span class="token comment">//工厂一般是接口，规定子类必须实现的方法</span>
<span class="token comment">//依赖抽象而不依赖实现</span>
<span class="token keyword">class</span> <span class="token class-name">Factory</span><span class="token punctuation">{</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>Factory<span class="token punctuation">;</span>

<span class="token comment">//接口一般会跟配置对象配合</span>
<span class="token keyword">let</span> settings<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;apple&#39;</span><span class="token operator">:</span>AppleFactory<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;orange&#39;</span><span class="token operator">:</span>OrangeFactory
<span class="token punctuation">}</span>
<span class="token keyword">let</span> apple<span class="token operator">=</span>settings<span class="token punctuation">[</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> orange<span class="token operator">=</span>settings<span class="token punctuation">[</span><span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>什么是接口？</p></blockquote><p>接口只有方法定义，没有具体实现，如果一个类要实现该接口，就必须实现该接口中的所有方法</p><h3 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h3><p><img src="`+u+'" alt=""></p><p><img src="'+r+`" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.method.js</span>
<span class="token keyword">class</span> <span class="token class-name">Factory</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">AppleFactory</span> <span class="token keyword">extends</span> <span class="token class-name">Factory</span><span class="token punctuation">{</span>
  <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//创建按钮</span>
  	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AppleButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//创建图标</span>
  	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AppleIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsFactory</span> <span class="token keyword">extends</span> <span class="token class-name">Factory</span><span class="token punctuation">{</span>
  <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//创建按钮</span>
  	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//创建图标</span>
  	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Icon</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">AppleIcon</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">绘制苹果的图标</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsIcon</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">绘制Windows的图标</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Button</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">AppleButton</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">绘制苹果的按钮</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsButton</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">绘制windows的按钮</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> windowsFactory<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">WindowsFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
windowsFactory<span class="token punctuation">.</span><span class="token function">createIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
windowsFactory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用场景：工厂里有多种产品，而且生产过程都是一套一套的。</p><h3 id="总结工厂模式" tabindex="-1"><a class="header-anchor" href="#总结工厂模式" aria-hidden="true">#</a> 总结工厂模式</h3><ol><li><p>简单工厂</p><p>一般就是一个函数返回产品的实例</p></li><li><p>工厂方法模式</p><p>多了工厂类，要想创建产品，需要先创建此工厂的实例，再通过这个工厂返回产品实例</p></li><li><p>抽象工厂模式</p><p>前两种只能创建一种产品，这种一个工厂可批量创建产品</p></li></ol><blockquote><p>实际工作中第一种用的最多，2、3种很少见到和用到。</p></blockquote><h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2><p><img src="`+v+`" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//es6的单例写法</span>
<span class="token keyword">class</span> <span class="token class-name">Window</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Window</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Window.getInstance()是类上的方法，只可以通过类来访问，不能通过实例来访问</span>

<span class="token comment">//es5的单例写法</span>
<span class="token keyword">function</span> <span class="token function">Window</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Window</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//这是实例可访问的方法</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Window<span class="token punctuation">.</span>getInstance<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//通过闭包实现只能通过Window.getInstance访问的方法</span>
  <span class="token keyword">let</span> instance<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
      instance<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Window</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> w1<span class="token operator">=</span>Window<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> w2<span class="token operator">=</span>Window<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>两个问题</strong></p><ol><li><p>客户端 就是使用这个类的使用者必须知道这是一个单例的类，必须主动调用Instance方法</p></li><li><p>并不能真正阻止客户端直接new Window</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let w3=new Window();
let w4=new Window();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>解决问题</strong></p><p>能够直接new Window，并且是个单例的。</p><ol><li>透明单例：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let Window=(function(){
  let window;
  let Window=function(name){
    if(window){
      return window;
    }else{
      this.name=name;
      return (window=this);
    }
  }
  return Window;
})();
//new 关键字 创建一个对象，this指向这个对象，执行代码，返回this
let w1=new Window();
let w2=new Window();
console.log(w1===w2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>单例改进</p><p>透明单例违反了单一职责原则，应该把类的实例的创建逻辑和单例逻辑分开</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Window(name){
  this.name=name;
}
Window.prototype.getName=function(){
  console.log(this.name);
}
let CreateWindow=(function(){
  let instance;
  return function(name){
    if(!instance){
      instance=new Window(name);
    }
    return instance;
  }
})();
let w1=new CreateSingle(&#39;zfpx1&#39;);//加不加new一样
let w2=new CreateSingle(&#39;zfpx2&#39;);
console.log(w1===w2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单例改进</p><p>因为new Window(name)写死了，不能直接添加其他的构造函数的单例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Window(name){
  this.name=name;
}
Window.prototype.getName=function(){
  console.log(this.name);
}
function Dialog(title,content){
  this.title=title;
  this.content=content;
}
let CreateSingle=function(Constructor){
  let instance;
  return function(name){
    if(!instance){
    	Constructor.apply(this,arguments);//让Constructor执行时里面的this指向执行CreateSingle时new出来的对象
    	Object.setPrototypeOf(this,Constructor.prototype);
    	//这句是this.__proto__=Constructor.prototype的简写
    	//如果不添加这句，w1就无法访问到Window原型上的getName方法，因为this的原型指向Function.prototype,即原型继承
      instance=this;
      //或者省略以上改成一句instance=new Constructor(...arguments);也可以
    }
    return instance;
  }
};
let createWindow=CreateSingle(Window);
let w1=createWindow(&#39;zfpx1&#39;);//无论是new还是直接调用，都会创建一个this指针
let w2=createWindow(&#39;zfpx2&#39;);
console.log(w1===w2)//true

let createDialog=CreateSingle(Dialog);
let w1=createDialog(&#39;zfpx1&#39;);
let w2=createDialog(&#39;zfpx2&#39;);
console.log(w1===w2)//true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>命名空间(单例的一种)</p><p>能解决：</p><ul><li>变量名冲突</li><li>复杂层次对象的可读性要求</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//例如：jquery并没有把变量都声明在window上，而是都挂在$对象 JQuery
$.get()
$.post()
$.ajax()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let $={};
$.define=function(namespace,fn){
  let namespaces=namespace.split(&#39;.&#39;);
  let fnName=namespaces.pop();
  let current=$;
  for(let i=0;i&lt;namespaces.length;i++){
    let namespace=namespaces[i]//dom
    if(!current[namespace]){
      current[namespace]={};//{dom:{}}
    }
    current=current[namespace];
  }
  current[fnName]=fn;
}
$.define(&#39;dom.class.addClass&#39;,function(){
  console.log(&#39;dom.class.addClass&#39;);
});
$.define(&#39;dom.attr&#39;,function(){
  console.log(&#39;dom.attr&#39;);
})
$.define(&#39;string.trim&#39;,function(){
  console.log(&#39;string.trim&#39;);
})
$.define(&#39;event.preventDefault&#39;,function(){
  console.log(&#39;event.preventDefault&#39;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>应用场景</strong></p><ol><li><p>jQuery</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(window.jQuery!=null){
  return window.jQuery;//一个页面只会有一个jquery实例
}else{
  //init~~~~~~
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模态窗口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button id=&quot;show-btn&quot;&gt;显示登录框&lt;/button&gt;
&lt;button id=&quot;hide-btn&quot;&gt;隐藏登录框&lt;/button&gt;
&lt;script&gt;
	class Login{
    constructor(){
      this.element=document.createElement(&#39;div&#39;);
      this.element.innerHTML={
        \`
        用户名 &lt;input name=&quot;username&quot;/&gt;
        密码 &lt;input name=&quot;password&quot;/&gt;
        &lt;input type=&quot;submit&quot; value=&quot;登录&quot;/&gt;
        \`
      }
      this.element.style.cssText=\`width:100px;height:100px;position:absolute;left:50%;top:50%;margin-top:-50px;margin-left:-50px; display:none;\`
      document.body.appendChild(this.element);
    }
    show(){
      this.element.style.display=&#39;block&#39;;
    }
    hide(){
      this.element.style.display=&#39;none&#39;;
    }
    static getInstance(){
      if(!this.instance){
        this.instance=new Login();
      }
      return this.instance;
    }
	}
	document.getElementById(&quot;show-btn).addEventListener(&#39;click&#39;,function(){
    Login.getInstance.show();
	})
	document.getElementById(&quot;hide-btn).addEventListener(&#39;click&#39;,function(){
    Login.getInstance.hide();
	})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Redux 整个应用只有一个仓库，整个仓库只有一个状态state</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function createStore(reducer){
  let state;
  let listeners=[];
  function subscribe(listener){
    listeners.push(listener);
  }
  function getState(){
    return state;
  }
  function dispatch(action){
    state=reducer(state,action);
  }
  return{
    getState,
    dispatch,
    subscribe
  }
}
let reducer=function(){}
let store=createStore(reducer)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据库连接池</p><p>本地创建与服务器数据库连接，取出数据后销毁。</p><p>连接池创建固定连接，省去创建和销毁的时间</p></li><li><p>缓存</p><p>缓存是为了提高性能的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let express=require(&#39;express&#39;);
let bodyParser=require(&#39;body-parser&#39;);
let fs=require(&#39;fs&#39;);
let app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
let cache={};//缓存
//返回某个用户的详情
app.get(&#39;/user/:id&#39;,function(){
  let id=req.params.id;
  let user=cache[id];
  if(uesr){
    res.json(user);
  }else{
    fs.readFile(\`./users/\${id}.json\`,&#39;utf8&#39;,function(err,data){
      let user=JSON.parse(data);
      cache[id]=user;
      res.json(user);
    })
  }
  
})
//写入某个用户详情
app.get(&#39;/user&#39;,function(req,res){
  let user=req.body;//{id:1,name:&#39;zfpx1&#39;,age:9}
  fs.writeFile(\`./users/\${user.id}.json\`,JSON.stringify(user),function(err){
    res.json(user);
  })
})
app.listen(8080);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>LRU缓存</p><p>用一个数组来存储数据，给每一个数据项标记一个访问时间戳</p><p>每次插入新数据项的时候，先把数组中存在的数据项的时间戳自增，并将新数据项的时间戳设置为0并插入到数组中</p><p>每次访问数组中的数据项的时候，将被访问的数据项的时间戳置为0</p><p>当数组空间已满时，将时间戳最大的数据项淘汰</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class LRUCache{
  constructor(capacity){
    this.capacity=capacity;
    this.members=[];
  }
  put(key,value){
  	let oldestAge=-1;
  	let oldestIndex=-1;
    for(let i=0;i&lt;this.member.length;i++){
      let member=this.members[i];
      if(member.age&gt;oldestAge){
        oldestAge=member.age;
      	oldestIndex=i;
      }
      member.age++;
    }
    if(this.member.length&gt;=this.capacity){
      this.members.splice(oldestIndex,1);
    }
    this.members.push({key,value,age:0})
  }
  get(key){
    for(let i=0;i&lt;this.members.length;i++){
      let member=this.members[i];//{key,value,age}
      if(member.key===key){
        member.age=0;
        return member.value;
      }
    }
    return -1;
  }
}
let cache=new LRUCache(3);
cache.put(&#39;1&#39;,&#39;1&#39;);
cache.put(&#39;2&#39;,&#39;2&#39;);
cache.put(&#39;3&#39;,&#39;3&#39;);
console.log(cache.get(&#39;2&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2><p><img src="`+m+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//适配器
class Power{
  charge(){
    return &#39;220v&#39;;
  }
}
class Adaptor{
  constructor(power){
    this.power=power;
  }
  charge(){//此处可以改为xxx任意名字
    let v=this.power.charge;
    return \`\${v}=&gt;12v\`;
  }
}
class Client{
  constructor(){
    this.adaptor=new Adaptor();
  }
  use(){
    console,log(this.adaptor.charge())
  }
}
let client=new Client();
client.use();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//参数的适配
//返回值的适配
function ajax(options){
  let defaultOptions={
    method:&#39;GET&#39;,
    dataType:&#39;json&#39;
  }
  for(let attr in options){
    defaultOptions[attr]=options[attr]||defaultOptions[attr];//参数适配
  }
  console.log(defaultOptions);
}
function transform(str){
  return JSON.parse(str)
}
ajax({
  url:&#39;http://www.baidu.com&#39;,
  method:&#39;POST&#39;,
  success(str){
    //服务器返回的是JSON字符串
    let result=transform(str)//返回值适配
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//串行连续的读取三个文件的内容
const fs=require(&#39;fs&#39;);
function promisify(fn){
  return function(...args){
    return new Promise(function(resolve,reject){
      fn(...args,function(err,data){
        if(err){
          reject(err);
        }else{
          resolve(data)
        }
      })
    })
  }
}
let readFile=promisify(fs.readFile);//需要promise时适配一个promise
(awync function read(){
  let one=await readFile(&#39;1.txt&#39;,&#39;utf8&#39;);
  let two=await readFile(&#39;2.txt&#39;,&#39;utf8&#39;);
  let three=await readFile(&#39;3.txt&#39;,&#39;utf8&#39;);
  console.log(one,two,three)
}){}();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//需要修改项目中所有的jquery方法为fetch
window.$={//适配了原来所有的$.ajax，并且使用了fetch（老用法适配新用法）
  ajax(options){
    return fetch(options.url,{
      method:options.type||&#39;GET&#39;,
      body:JSON.stringify(options.data||{})
    }).then(response=&gt;response.json());
  }
}
$.ajax({
  url,
  type:&#39;POST&#39;,
  dataType:&#39;json&#39;,
  data:{id:1}
}).then(function(data){
  console.log(data);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Vue中使用案例
&lt;body&gt;
	&lt;div id=&#39;root&#39;&gt;
		&lt;p&gt;{{name}}&lt;/p&gt;
		&lt;p&gt;{{upperName}}&lt;/p&gt;
	&lt;/div&gt;
	&lt;script&gt;
		let vm=new Vue({
      el:&#39;#root&#39;,
      data:{
        name:&#39;zfpx&#39;
      },
      computed:{
        upperName(){
          return this.name.toUpperCase();//老字符串适配成一个新的字符串
        }
      }
		})
	&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器模式" tabindex="-1"><a class="header-anchor" href="#装饰器模式" aria-hidden="true">#</a> 装饰器模式</h2><p>面向切面编程</p><p>给一个类增加功能，但不会改变类的实质，只是修饰作用。它比适配器模式更强大。他修饰的方法必须同名。</p><p>是将一个对象嵌入另一个对象之中，实际上相当于这个对象被另一个对象包装起来，形成一条包装链。请求随着这条链条依次传递到所有的对象，每个对象有处理这个请求的机会。</p><p><img src="`+b+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Duck{
  constructor(name){
    this.name=name;
  }
  eat(food){
    console.log(\`吃\${food}\`)
  }
}
class TangDuck{
  constructor(name){
    this.duck=new Duck(name)
  }
  eat(food){//必须同名,修饰上面的同名方法
    this.duck.eat(food);
    console.log(&#39;谢谢&#39;);
  }
}
let t=new TangDuck();
t.eat(&#39;苹果&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//装饰器模式有时候会优于继承
class Coffee{
  make(water){
    return \`\${water}+咖啡\`;
  }
  cost(){
    return 10;
  }
}
class MilkCoffee{
  constructor(parent){
    this.parent=parent;
  }
  make(water){
    return \`\${this.parent.make(water)+奶}\`;
  }
  cost(){
    return \`\${this.parent.cost()+2}\`;
  }
}
class SugarCoffee{
  constructor(parent){
    this.parent=parent;
  }
  make(water){
    return \`\${this.parent.make(water)+糖}\`;
  }
}
let coffee=new Coffee();
let sugarCoffee=new sugarCoffee(coffee);
let milkCoffee=new MilkCoffee(sugarCoffee);
milkCoffee.make(&#39;水&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AOP:</strong></p><p>AOP就是在函数执行之前或之后添加一些额外的逻辑，而不需要修改函数原来的功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.before=function(beforeFn){
  let _this=this;
  return function(){
    beforeFn.apply(this,arguments);//继承beforeFn，调用beforeFn
    _this.apply(this,arguments);//调用函数
  }
}
Function.prototype.after=function(afterFn){
  let _this=this;
  return function(){
    _this.apply(this,arguments);//调用函数
    afterFn.apply(this,arguments);//继承afterFn，调用afterFn
  }
}
function buy(money,goods){
  console.log(\`花\${money}元买\${goods}\`);
}
buy=buy.before(function(){
  console.log(&#39;向媳妇申请一块钱&#39;);
})
buy=buy.after(function(){
  console.log(&#39;向媳妇归还两毛钱&#39;);
})
buy(0.8,&#39;盐&#39;)；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>应用场景</strong></p><ol><li>埋点：</li></ol><p>埋点分析，是网站分析的一种常用的数据采集方法。</p><p>ajax的请求拦截，koa中间件，redux中间件都是基于装饰器实现的。</p><ul><li><p>服务器端埋点</p></li><li><p>客户端埋点</p><ul><li><p>代码埋点(写死)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//4.html
&lt;body&gt;
	&lt;button data-name=&quot;watermelon&quot; id=&quot;watermelon&quot;&gt;西瓜&lt;/button&gt;
	&lt;button data-name=&quot;apple&quot; id=&quot;apple&quot;&gt;苹果&lt;/button&gt;
	&lt;script&gt;
		let watermelon=document.getElementById(&#39;watermelon&#39;);
		let apple=document.getElementById(&#39;apple&#39;);
		function click(){
      console.log(&#39;你点击了&#39;+this.dataset.name);
      let img=new Image();
      img.src=&#39;http://localhost:3000/report?name=&#39;+this.dataset.name;
		}
		Array.from(document.querySelectorAll(&#39;button&#39;)).forEach(button=&gt;{
      button.addEventListener(&#39;click&#39;,click);
		})
	&lt;/script&gt;
&lt;/body&gt;
//report.js
let express=require(&#39;express&#39;);
let app=express();
let goods={};
app.get(&#39;/report&#39;,function(req,res){
  let name=req.query.name;
  if(goods[name]){
    goods[name]++;
  }else{
    goods[name]=1
  }
  console.log(&#39;name&#39;,name);
  res.json(goods);
})
app.get(&#39;/&#39;,function(req,res){
  res.json(goods);
})
app.listen(3000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自动化埋点(AOP，推荐)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//点击统计
//4.html
&lt;body&gt;
	&lt;button data-name=&quot;watermelon&quot; id=&quot;watermelon&quot;&gt;西瓜&lt;/button&gt;
	&lt;button data-name=&quot;apple&quot; id=&quot;apple&quot;&gt;苹果&lt;/button&gt;
	&lt;script&gt;
		let watermelon=document.getElementById(&#39;watermelon&#39;);
		let apple=document.getElementById(&#39;apple&#39;);
		Function.prototype.after=function(afterFn){
      let _this=this;
      return function(){
        _this.apply(this,arguments);//调用函数
        afterFn.apply(this,arguments);//继承afterFn，调用afterFn
      }
    }
		function click(){
      console.log(&#39;你点击了&#39;+this.dataset.name);
		}
		click=click.after(function(){
      let img=new Image();
      img.src=&#39;http://localhost:3000/report?name=&#39;+this.dataset.name;
		})
		Array.from(document.querySelectorAll(&#39;button&#39;)).forEach(button=&gt;{
      button.addEventListener(&#39;click&#39;,click);
		})
	&lt;/script&gt;
&lt;/body&gt;
//report.js
let express=require(&#39;express&#39;);
let app=express();
let goods={};
app.get(&#39;/report&#39;,function(req,res){
  let name=req.query.name;
  if(goods[name]){
    goods[name]++;
  }else{
    goods[name]=1
  }
  console.log(&#39;name&#39;,name);
  res.json(goods);
})
app.get(&#39;/&#39;,function(req,res){
  res.json(goods);
})
app.listen(3000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//2.表单校验，避免校验逻辑和表单提交逻辑合在一起
&lt;body&gt;
	
		用户名 &lt;input type=&quot;text&quot; id=&quot;username&quot;/&gt;
		密码 &lt;input type=&quot;text&quot; id=&quot;password&quot;/&gt;
		&lt;button id=&quot;submit-btn&quot;&gt;提交&lt;/button&gt;
	
	&lt;script&gt;
		Function.prototype.before=function(beforeFn){
      let _this=this;
      return function(){
        let ret=beforeFn.apply(this,arguments);//继承beforeFn，调用beforeFn
        if(ret){
          _this.apply(this,arguments);//调用函数
        }
      }
    }
		function submit(){
      console.log(&#39;提交表单&#39;)
		}
		let checkUserNameNotNull=submit.before(function(){
      let username=document.getElementById(&#39;username&#39;).value;
		  if(username.length&lt;6){
        return alert(&#39;用户名长度不够&#39;)
		  }
		  return true;
		})
		checkUserNameMoreThanSix=checkUserNameNotNull.before(function(){
      let username=document.getElementById(&#39;username&#39;).value;
		  if(!username){
        return alert(&#39;用户名没有输入&#39;)
		  }
		  return true;
		})
		document.getElementById(&#39;submit-btn&#39;).addEventListener(&#39;click&#39;,submit)
	&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第三方实现 百度统计，友盟等</p></li></ul></li></ul><ol start="2"><li><p>decorator(node不认识，需要babel转译)</p><p>webpack要支持decorators要安装如下插件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//babel-plugin-proposal-decorators
&quot;plugins&quot;:[
  [&quot;@babel/plugin-proposal-decorator&quot;,{&quot;legacy&quot;:true}],//装饰器
  [&quot;@babel/plugin-proposal-class-properties&quot;,{&quot;loose&quot;:true}]//类装饰器
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类装饰器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@testable
class Person{
  
}
function testable(target){//对类进行装饰
  target.testalbe=true;
}
console.log(Person.testable);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//react以前的例子（现在已废掉）
let Hooks={
  componentWillMount(){
    console.log(&#39;componentWillMount&#39;);
  },
  componentDidMount(){
    console.log(&#39;componentDidMount&#39;);
  }
}
function mixins(...others){
  return function(target){
     Object.assign(target.prototype,...others);
  }
}
@mixings(Hooks)
class Component{
  
}
let c=new Component();
console.log(c)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方法decorators,用函数装饰类上的属性
function readonly(target,attr,descriptor){//目标，属性名，属性描述器
  descriptor.writable=false;
}
class Circle{
  @readonly
  PI=3.14
}
let c=new Circle();
c.PI=300;
console.log(c.PI)

//在一个老的逻辑之前执行一段逻辑
function logger(target,attr,descriptor){
  let oldVal=descriptor.value;
  descriptor.value=function(...args){
    console.log(\`参数：\${args}\`);
    return oldVal(...args);
  }
}
class Caculator{
  @logger
  sum(a,b){
    return a+b;
  }
}
let c=new Caculator();
let ret=c.sum(1,2);
console.log(ret);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2><p>由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介作用</p><p>在使用者和目标对象之间加一个代理对象，通过代理可以实现控制</p><p>例如，VPN</p><p><img src="`+k+'" alt=""></p><p>中国网站有GFW防火墙，所以无法访问谷歌服务器，需要买一个中间服务器，创建proxy代理，通过它来访问谷歌。</p><p><img src="'+g+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//1.google.js
class Google{
  get(url){
    return google;
  }
}
class Proxy{
  constructor(){
    this.google=new Google();
  }
  get(url){
    return this.google.get(url);
  }
}
let proxy=new Proxy();
let result=proxy.get(&#39;http://www/google.com&#39;);
console.log(result);//google
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//2.cache.js
//n=4 1!+2!+3!+4
//修改前，
function multi(n){
  if(n&lt;=1){
    return 1;
  }else{
    return n*multi(n-1)
  }
}
let sum=function(n){
  let result=0;
  for(let i=1;i&lt;=n;i++){
    result+multi(n)
  }
  return result;
}
console.time(&#39;cost&#39;);
console.log(sum(3))
console.time(&#39;cost&#39;);

//修改后
let sum=(function(){
  let cache={};//缓存每次的计算结果
  function multi(n){
    if(n&lt;=1){
      return 1;
    }else{
      return n*(cache[n-1]||multi(n-1))
    }
  }
  return function(n){
    let result=0;
    for(let i=1;i&lt;n;i++){
      let ret=multi(i);
      cache[i]=ret;//从1开始，每个阶乘都记录在了缓存中
      result+=ret;
    }
    return result;
  }
})();
console.time(&#39;cost&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>proxy函数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//$.proxy绑定this。通过$.proxy生成新的函数，内部调用原始函数
&lt;body&gt;
	&lt;button id=&#39;clickMe&#39;&gt;点我&lt;/button&gt;
	&lt;script src=&quot;http://libs.baidu.com/jquery/2.0.0/jquery.min.js&quot;&gt;&lt;/script&gt;
	&lt;script&gt;
		document.getElementById(&#39;clickMe&#39;).addEventListener(&#39;click&#39;,function(){
      setTimeout($.proxy(function(){
        $(this).css(&#39;color&#39;,&#39;red&#39;);
      },this),3000)//proxy绑定this到this,否则是window。原理：setColor=setColor.bind(this)
		})
	&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//自己写一个$.proxy
document.getElementById(&#39;clickMe&#39;).addEventListener(&#39;click&#39;,function(){
  function setColor(){
    $(this).css(&#39;color&#39;,&#39;red&#39;);
  }
  function proxy(fn,context){
    return function(){
      fn.apply(context,arguments);
    }
  }
  setColor=proxy(setColor,this);
  setTimeout(setColor,3000);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Proxy(es6)</strong></p><ul><li>Proxy 用于修改某些操作的默认行为</li><li>Proxy可以理解成，在目标对象之前架设一层&quot;拦截&quot;，外界对该对象的访问，都必须先通过这层拦截，因此提供了对外界访问的过滤和改写。由它来代理某些操作，即代理器</li><li>Vue3.0是用Proxy实现的。Vue2.0是用Object.defineProperty实现的。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let wangy={
  name:&quot;王燕&quot;,
  age:31,
  height:165
}
let wangMaMa = new Proxy(wangy,{
  get(target,key){
    if(key==&#39;age&#39;){
      return target.age-2;
    }else if(key===&#39;height&#39;){
      return target.height+3;
    }else{
      return target[key];
    }
  },
  set(target,key,val){
    if(key==&#39;boyfriend&#39;){
      let boyfriend=val;
      if(boyfriend.age&gt;40){
        throw Error(&#39;太老了&#39;);
      }else if(boyfriend.salary&lt;20000){
        throw Error(&#39;太穷了&#39;);
      }else{
        target[key]=val;
      }
    }
  }
})
console.log(wangMaMa.age)
console.log(wangMaMa.height)
console.log(wangMaMa.name)
wangMaMa.boyfriend={age:12,salary:8};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>代理模式和适配器模式区别？</p><p>适配器提供不同接口，代理模式提供一模一样的接口</p></blockquote><blockquote><p>代理模式和装饰器模式的区别？</p><p>装饰器模式原来的功能不变还可以使用，代理模式改变原来的功能</p></blockquote><p><strong>事件委托</strong></p><p>addEventListener的第三个参数，true为捕获，false为冒泡</p><p>事件委托也是一种代理模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
	&lt;ul&gt;
		&lt;li&gt;1&lt;/li&gt;
		&lt;li&gt;2&lt;/li&gt;
		&lt;li&gt;3&lt;/li&gt;
	&lt;/ul&gt;
	&lt;script&gt;
		let ulist=document.getElementById(&#39;ulist&#39;);
		ulist.addEventListener(&#39;click&#39;,function(event){
			if(event.target.nodetype===&#39;li&#39;){
        console.log(event.target.innerHTML);
			}
		})
	&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图片懒加载</strong></p><p>不改变原有代码，且API不变，增强了额外的功能</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//app.js
let express=require(&#39;express&#39;)
let path=require(&#39;path&#39;)
app=express();
app.use(express.static(__dirname));
app.get(&#39;/images/:name&#39;,function(req,res){
	setTimeout(function(){
    res.sendFile(path.join(__dirname,req.path));
	},2000)
  
})
app.get(&#39;/loading.gif&#39;,function(req,res){
  res.sendFile(path.resolve(&#39;loading.gif&#39;));
})
app.listen(3000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//index.html
&lt;body&gt;
	&lt;ul id=&#39;menu&#39;&gt;
		&lt;li data-src=&#39;/images/bg1.jpg&#39;&gt;图片1&lt;/li&gt;
		&lt;li data-src=&#39;/images/bg2.jpg&#39;&gt;图片2&lt;/li&gt;
	&lt;/ul&gt;
	&lt;div id&quot;bgimg&quot;&gt;&lt;/div&gt;
	&lt;script&gt;
		let bgimg=document.getElementById(&#39;bgimg&#39;);
		let menu=document.getElementById(&#39;menu&#39;);
		let Background=(function(){
      let img=new Image();
      bgimg.appendChild(img);
      return {
        setSrc(src){
          img.src=src;
        }
      }
		})()
		menu.addEventListener(&#39;click&#39;,function(event){
      let src=event.darget.dataset.src;
      Background.setSrc(src);
		})
	&lt;/script&gt;
&lt;/body&gt;

//使用代理模式改进
//index.html
&lt;body&gt;
	&lt;ul id=&#39;menu&#39;&gt;
		&lt;li data-src=&#39;/images/bg1.jpg&#39;&gt;图片1&lt;/li&gt;
		&lt;li data-src=&#39;/images/bg2.jpg&#39;&gt;图片2&lt;/li&gt;
	&lt;/ul&gt;
	&lt;div id&quot;bgimg&quot;&gt;&lt;/div&gt;
	&lt;script&gt;
		let bgimg=document.getElementById(&#39;bgimg&#39;);
		let menu=document.getElementById(&#39;menu&#39;);
		let Background=(function(){
      let img=new Image();
      bgimg.appendChild(img);
      return {
        setSrc(src){
          img.src=src+&#39;?ts=&#39;+Date.now();
        }
      }
		})()
		//不改变原有代码，且API不变，增强了额外的功能
		---------------------修改2------------------------
		let ProxyBackground=(function(){
      let img=new Image();
      img.onload=function(){
        Background.setSrc(this.src);
      }
      return {
        setSrc(src){
          Background.setSrc(&#39;/loading.gif&#39;);
          img.src=src
        }
      }
		})()
		---------------------修改2------------------------
		menu.addEventListener(&#39;click&#39;,function(event){
      let src=event.darget.dataset.src;
      --------修改1-----------
      ProxyBackground.setSrc(src);//
      --------修改1-----------
		})
	&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>防抖代理</strong></p><p>勾选后修改数据，有时候点击多了的时候，不需要发送那么多请求，而是等确定后再发送请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//app.js
let express=require(&#39;express&#39;)
let path=require(&#39;path&#39;)
app=express();
app.use(express.static(__dirname));
let todos=[
  {id:1,text:&#39;吃饭&#39;,completed:false},
  {id:2,text:&#39;睡觉&#39;,completed:false},
  {id:3,text:&#39;打豆豆&#39;,completed:false}
]
app.get(&#39;/todos&#39;，function(req,res){
  res.json(todos);
})
app.get(&#39;/toggle&#39;,function(req,res){
  let ids=req.query.ids;
  ids=ids.split(&#39;,&#39;).map(item=&gt;parseInt(item));
  todos=todos.map(function(todo){
    if(ids.includes(todo.id)){
      todo.completed=!todo.completed;
    }
    return todo;
  });
  res.json({code:0})
})
app.listen(3000);

//index.html
&lt;ul id=&quot;todoApp&quot;&gt;

&lt;/ul&gt;
&lt;script&gt;
	let todoApp=document.getElementById(&#39;todoApp&#39;);
	window.onload=function(){
    fetch(&#39;/todos&#39;).then(res=&gt;res.json()).then(function(todos){
      todoApp.innerHTML=todos.map(item=&gt;{
        \`&lt;li&gt;
        	&lt;input value=&quot;\${item.id}&quot; type=&quot;checkbox&quot; \${item.completed?&quot;checked&quot;:&quot;&quot;}/&gt;
        	\${item.text}
        &lt;/li&gt;\`
      }).join(&#39;&#39;);
    })
	}
	function toggle(id){
    fetch(\`/toggle?id=\${id}\`).then(res=&gt;res.json()).then(function(result){
      
    })
	}
	let lazyToggle=(function(){
    let ids=[];
    let timer;
    return function(id){
      ids.push(id);
      if(!timer){
        timer=setTimeout(function(){
          toggole(ids.join(&#39;,&#39;));
          ids=[];
          clearTimeout(timer);
          timer=null;
        },2000);
      }
    }
	})();
	todoApp.addEventListener(&#39;click&#39;,function(event){
    let id=event.target.value;
    lazyToggle(id);
	})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外观模式" tabindex="-1"><a class="header-anchor" href="#外观模式" aria-hidden="true">#</a> 外观模式</h2><p><img src="`+h+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Sum{
    sum(a,b) {
        return a+b;
    }
}
class Minus{
    minus(a,b) {
        return a-b;
    }
}
class Multiply{
    multiply(a,b) {
        return a * b;
    }
}
class Calculator{
    constructor() {
        this.sumObj=new Sum();
        this.minusObj=new Minus();
        this.multiplyObj=new Multiply();
    }
    sum(...args) {
        this.sumObj.sum(...args);
    }
    minus(...args) {
        this.minusObj.minus(...args);
    }
    multiply(...args) {
        this.multiplyObj.multiply(...args);
    }
}
let calculator=new Calculator();
calculator.sum(1,2);
calculator.minus(1,2);
calculator.multiply(1,2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>场景</strong></p><ul><li>为复杂的模块或子系统提供外界访问的模块</li><li>子系统相互独立</li></ul><p>redux</p><p>客户端和子模块得到了隔离，内部修改影响不到使用。</p><p><img src="`+y+`" alt=""></p><h2 id="观察者模式-监听模式" tabindex="-1"><a class="header-anchor" href="#观察者模式-监听模式" aria-hidden="true">#</a> 观察者模式(监听模式)</h2><ul><li>被观察者供维护观察者的一系列方法</li><li>观察者提供更新接口</li><li>观察者把自己注册到被观察者里</li><li>在被观察者发生变化时候，调用观察者的更新方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Star{
    constructor(name) {
        this.name=name;
        this.state=&#39;&#39;;
        this.observers=[];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state=state;
        this.notifyAllObservers();
    }
    attach(observer) {
        this.observers.push(observer);
    }
    notifyAllObservers() {
        this.observers.forEach(observer=&gt;observer.update());
    }
}
class Fan{
    constructor(name,star) {
        this.name=name;
        this.star=star
        this.star.attach(this);
    }
    update() {
        console.log(\`我的明星喜欢\${this.star.getState()}，我也喜欢\`);    
    }
}
let star=new Star(&#39;angelbaby&#39;);
let fan1=new Fan(&#39;zhangsan&#39;,star);
star.setState(&#39;绿色&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>场景</strong></p><ol><li><p>事件绑定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;button id=&quot;btn&quot;&gt;click&lt;/button&gt;
    &lt;script&gt;
        let btn = document.getElementById(&#39;btn&#39;);
        btn.addEventListener(&#39;click&#39;,()=&gt;{alert(1)});
        btn.addEventListener(&#39;click&#39;,()=&gt;{alert(2)});
        btn.addEventListener(&#39;click&#39;,()=&gt;{alert(3)});
    &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Promise</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Promise{
    constructor(fn) {
        this.callbacks=[];
        let resolve=() =&gt; {
            this.callbacks.forEach(callback =&gt; callback())
        };
        fn(resolve);
    }
    then(callback) {
        this.callbacks.push(callback);
    }
}
let promise=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve(100);
    },1000);
});
promise.then(() =&gt; console.log(1));
promise.then(() =&gt; console.log(2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>JQuery.Callbacks</p><p>Callbacks对象其实就是一个函数队列，获得Callbacks对象之后 ，就可以向这个集合中增加或者删除函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;http://libs.baidu.com/jquery/2.0.0/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
 window.jQuery={
     Callbacks(){
       let observers = [];
       function add(observer){
           observers.push(observer);
       }
       function remove(observer){
           let index = observers.indexOf(observer);
           if(index != -1)
             observers.splice(index,1);
       }
       function fire(){
           observers.forEach(item=&gt;item());
       }
       return {
           add,
           remove,
           fire
       }
   }
 }
 let callbacks = jQuery.Callbacks();

 let a1= ()=&gt;alert(1);
 let a2= ()=&gt;alert(2);
 let a3= ()=&gt;alert(13);
 callbacks.add(a1);
 callbacks.add(a2);
 callbacks.add(a3);
 callbacks.remove(a3);
 callbacks.fire();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>events</p><p>node库---自定义事件，来自events模块。可以实现监听事件，触发事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const EventEmitter=require(&#39;events&#39;);
const util=require(&#39;util&#39;);
let eve=new EventEmitter();
eve.on(&#39;click&#39;,function (name) {
    console.log(1,name);
});
eve.on(&#39;click&#39;,function (name) {
    console.log(2,name);
});
eve.emit(&#39;click&#39;,&#39;zfpx&#39;);

//使用util.inherits继承EventEmitter
function Bell(){
  
}
util.inherits(Bell,EventEmitter);
let bell=new Bell();
bell.on(&#39;click&#39;,function(name){
  console.log(&quot;同学们进入&quot;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>stream文件流</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fs=require(&#39;fs&#39;);
let rs=fs.createReadStream(&#39;./1.txt&#39;);
rs.on(&#39;data&#39;,function (data) {
    console.log(data)
});
rs.on(&#39;end&#39;,function () {
    console.log(&#39;end&#39;)
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>http服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let http=require(&#39;http&#39;);
let server = http.createServer();
server.on(&#39;request&#39;,(req,res)=&gt;{
  req.on(&#39;data&#39;,function(data){
      console.log(data)
  });
}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>生命周期函数</p></li><li><p>vue watch</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
&lt;div id=&quot;root&quot;&gt;
      &lt;p&gt;FullName: {{fullName}}&lt;/p&gt;
      &lt;p&gt;FirstName: &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot;/&gt;&lt;/p&gt;
      &lt;p&gt;LastName: &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot;/&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;script src=&quot;https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
new Vue({
  el:&#39;#root&#39;,
  data: {
    firstName:&#39;张&#39;,
    lastName: &#39;三&#39;,
    fullName:&#39;张三&#39;
  },
  watch: {
    firstName(newName, oldName) {
      this.fullName = newName + &#39; &#39; + this.lastName;
    }
  } 
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>redux</p></li></ol><p><strong>观察者模式和发布订阅模式的区别？</strong></p><ul><li><p>观察者模式</p><p><img src="`+w+'" alt=""></p><ol><li>观察者和被观察者是耦合的</li><li>观察者的update动作是由被观察者来调用的</li></ol></li><li><p>发布订阅模式</p><p><img src="'+x+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Agency{
    constructor() {
        this._topics={};
    }
    // on addEventListener
    subscribe(topic,listener) {
        let listeners=this._topics[topic];
        if (listeners) {
            listeners.push(listener);
        } else {
            this._topics[topic]=[listener];
        }
    }
    //emit
    publish(topic) {
        let listeners=this._topics[topic];
        let args=Array.from(arguments).slice(1);
        listeners.forEach(listener =&gt; listener(...args));
    }
}
let agent=new Agency();
class Landlord{
    constructor(name) {
        this.name=name;
    }
    lend(agent,area,money) {
        agent.publish(&#39;house&#39;,area,money);
    }
}

class Tenant{
    constructor(name) {
        this.name=name;
    }
    rent(agent) {
        agent.subscribe(&#39;house&#39;, (area,money)=&gt; {
            console.log(\`有新房源了, \${area}平米, \${money}元\`);
        });
    }
}
let t1=new Tenant(&#39;房客1&#39;);
let t2=new Tenant(&#39;房客2&#39;);
let l1=new Landlord(&#39;房东1&#39;);
t1.rent(agent);
t2.rent(agent);
l1.lend(agent,30,2000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>虽然两种模式都存在订阅者和发布者（观察者可认为是订阅者、被观察者可认为是发布者）</p></li><li><p>但是观察者模式是由被观察者调度的，而发布/订阅模式是统一由调度中心调的</p></li><li><p>所以观察者模式的订阅者与发布者之间是存在依赖的，而发布/订阅模式则不会。</p></li></ul>`,78);function F(E,C){const a=l("router-link");return c(),p("div",null,[j,n("nav",_,[n("ul",null,[n("li",null,[e(a,{to:"#面对对象"},{default:i(()=>[s("面对对象")]),_:1})]),n("li",null,[e(a,{to:"#设计原则"},{default:i(()=>[s("设计原则")]),_:1})]),n("li",null,[e(a,{to:"#工厂模式"},{default:i(()=>[s("工厂模式")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#简单工厂模式"},{default:i(()=>[s("简单工厂模式")]),_:1})]),n("li",null,[e(a,{to:"#工厂方法模式"},{default:i(()=>[s("工厂方法模式")]),_:1})]),n("li",null,[e(a,{to:"#抽象工厂模式"},{default:i(()=>[s("抽象工厂模式")]),_:1})]),n("li",null,[e(a,{to:"#总结工厂模式"},{default:i(()=>[s("总结工厂模式")]),_:1})])])]),n("li",null,[e(a,{to:"#单例模式"},{default:i(()=>[s("单例模式")]),_:1})]),n("li",null,[e(a,{to:"#外观模式"},{default:i(()=>[s("外观模式")]),_:1})]),n("li",null,[e(a,{to:"#观察者模式-监听模式"},{default:i(()=>[s("观察者模式(监听模式)")]),_:1})])])]),N])}const I=t(q,[["render",F],["__file","index.html.vue"]]);export{I as default};
