import{_ as n,o as a,c as s,a as e}from"./app-E-cEvfoH.js";const t={},i=e(`<h1 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h1><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h2><h3 id="常用的-git-命令" tabindex="-1"><a class="header-anchor" href="#常用的-git-命令" aria-hidden="true">#</a> 常用的 git 命令</h3><ul><li>git add .</li><li>git checkout xxx</li><li>git commit -m &quot;xxx&quot;</li><li>git push origin master</li><li>git pull origin master</li><li>git stash / git stash pop</li></ul><h3 id="多人使用-git-协作开发的基本流程" tabindex="-1"><a class="header-anchor" href="#多人使用-git-协作开发的基本流程" aria-hidden="true">#</a> 多人使用 git 协作开发的基本流程</h3><ul><li>git branch</li><li>git checkout -b xxx / git checkout xxx</li><li>git merge xxx</li></ul><h3 id="svn-和-git-的区别" tabindex="-1"><a class="header-anchor" href="#svn-和-git-的区别" aria-hidden="true">#</a> svn 和 git 的区别</h3><ul><li>svn 是每一步操作都离不开服务器，创建分支，提交代码都需要连接服务器。</li><li>git 可以在本地创建分支，提交代码，最后再一起 push 到服务器上。</li><li>git 拥有 svn 的所有功能，但是却比 svn 强大的多。</li></ul><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2><p>这一小节就不出题目了，因为它本身就是一个题目，范围也比较单一，就是模块化。</p><h3 id="为何需要模块化" tabindex="-1"><a class="header-anchor" href="#为何需要模块化" aria-hidden="true">#</a> 为何需要模块化</h3><ul><li>全局变量污染</li><li>引用多个模块后必须分清模块的依赖关系</li></ul><h3 id="使用模块化之后" tabindex="-1"><a class="header-anchor" href="#使用模块化之后" aria-hidden="true">#</a> 使用模块化之后</h3><ul><li>直接<code>&lt;script src=&quot;a.js&quot;&gt;&lt;/script&gt;</code>，其他的根据依赖关系自动引用</li><li>那两个函数，没必要做成全局变量，不会带来污染和覆盖</li></ul><p>以上只是我们理想的两个状态，接下来就说一下具体该如何去实现。</p><h3 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> AMD</h3><p>AMD 模块化规范是比较早提出的，现在也是比较成熟的模块化规范，代表工具是<code>require.js</code>，使用之后它会定义两个全局函数</p><ul><li>define 定义一个变量并返回，可供其他js引用</li><li>require 引用其他已经定义好的变量</li><li>依赖的代码会自动、异步加载</li></ul><p>拿上面的例子来做一个样例</p><p>首先是 util.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">getFormatDate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">&#39;2017-06-15&#39;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">&#39;2017年6月15日&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是 a-util.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./util.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">util</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">aGetFormatDate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> util<span class="token punctuation">.</span><span class="token function">getFormatDate</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后是 a.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./a-util.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">aUtil</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">printDate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aUtil<span class="token punctuation">.</span><span class="token function">aGetFormatDate</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来是如何引用，我们还得定义一个<code>main.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">printDate</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在页面中引用<code>&lt;script src=&quot;js/require.js&quot; data-main=&quot;./main.js&quot;&gt;&lt;/script&gt;</code>，运行时注意，各个js文件会异步加载</p><h3 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h3><p>CommonJS 是 nodejs 中模块定义的规范，但是这种规范越来越被放在前端开发来使用（当然这需要构建工具的编译，下一节讲述），原因如下</p><ul><li>前端开发依赖的插件和库，都可以从 npm 中获取</li><li>构建工具的高度自动化，使得使用 npm 的成本非常低</li></ul><p>CommonJS 不会异步加载各个JS，而是同步一次性加载出来</p><p>我们先来看一下 CommonJS 的输入和输出都是什么规范，然后下一节通过结合构建工具和 npm 一起演示一下使用方法。</p><p>util.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getFormatDate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&#39;2017-06-15&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&#39;2017年6月15日&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a-util.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util.js&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">aGetFormatDate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> util<span class="token punctuation">.</span><span class="token function">getFormatDate</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="amd-和-commonjs-的不同使用场景" tabindex="-1"><a class="header-anchor" href="#amd-和-commonjs-的不同使用场景" aria-hidden="true">#</a> AMD 和 CommonJS 的不同使用场景</h3><p>CommonJS 解决的问题和 AMD 一样，只不过是不同的标准而已，他们没有孰好孰坏之分，只是不同的工具使用场景不一样而已。</p><ul><li>使用 AMD：各种代码都是自己定义的，不用依赖于 npm</li><li>使用 CommonJS：依赖于 npm</li></ul><h2 id="模块化-直接看代码演示-code-webpack" tabindex="-1"><a class="header-anchor" href="#模块化-直接看代码演示-code-webpack" aria-hidden="true">#</a> 模块化-直接看代码演示 /code/webpack</h2><p>新建一模一样的项目练习熟练。。</p><h2 id="上线和回归" tabindex="-1"><a class="header-anchor" href="#上线和回归" aria-hidden="true">#</a> 上线和回归</h2><h3 id="上线和回滚的流程" tabindex="-1"><a class="header-anchor" href="#上线和回滚的流程" aria-hidden="true">#</a> 上线和回滚的流程</h3><h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4><ul><li>上线和回滚是开发过程中的重要流程</li><li>各个公司上线和回滚的流程都不一样</li><li>由有具体的工具或者系统来搞定，无需我们关心细节</li><li>你也许没有体会过这类规范的流程，但是你要知道一些要点</li><li>只说要点，不详细讲解，也没法详细讲解</li></ul><h4 id="上线原理" tabindex="-1"><a class="header-anchor" href="#上线原理" aria-hidden="true">#</a> 上线原理</h4><ul><li>将测试完成的代码提交到git版本库的master分支</li><li>将当前服务器的代码全部打包并记录版本号，备份</li><li>将master分支的代码提交覆盖到线上服务器，生成新版本号</li></ul><h4 id="回滚原理" tabindex="-1"><a class="header-anchor" href="#回滚原理" aria-hidden="true">#</a> 回滚原理</h4><ul><li>将当前服务器的代码打包并记录版本号，备份</li><li>将备份的上一个版本号解压，覆盖到线上服务器，并生成新的版本号</li></ul><h3 id="linux-服务器的基本命令" tabindex="-1"><a class="header-anchor" href="#linux-服务器的基本命令" aria-hidden="true">#</a> linux 服务器的基本命令</h3><p>线上服务器一般使用 linux 服务器，而且是 server 版本的 linux，没有桌面也没有鼠标，如何操作呢？</p><p><strong>登录</strong></p><p>入职之后，一般会有现有的用户名和密码，拿来之后直接登录就行。运行 <code>ssh name@server</code> 然后输入密码即可登录</p><p><strong>目录操作</strong></p><ul><li>创建目录 <code>mkdir</code></li><li>删除目录 <code>rm -rf</code></li><li>定位目录 <code>cd </code> 返回上一级目录 cd ..</li><li>看当前目录 pwd</li><li>查看目录文件 <code>ls</code> <code>ll</code></li><li>修改目录名 <code>mv </code></li><li>拷贝目录 <code>cp a.js a1.js 移动文件 mv a1.js src/a1.js</code></li></ul><p><strong>文件操作</strong></p><ul><li>创建文件 <code>touch </code> <code>vi /vim==&gt;i(输入)==&gt;esc(退出输入)==&gt;:w(保存)==&gt;:q(退出)</code></li><li>删除文件 <code>rm</code></li><li>修改文件名 <code>mv</code></li><li>拷贝文件 <code>cp</code> <code>scp</code></li></ul><p><strong>文件内容操作</strong></p><ul><li>查看文件 <code>cat(全部)/head(前一部分)head -n 1 a.js/tail(后一部分)tail -n 2 a.js</code></li><li>编辑文件内容 <code>vi /vim</code></li><li>查找文件内容 <code>grep &#39;2&#39; a.js</code></li></ul>`,60),p=[i];function c(o,l){return a(),s("div",null,p)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};