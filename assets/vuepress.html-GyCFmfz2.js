import{_ as e,r as p,o as t,c as l,b as n,d as o,e as i,a as s}from"./app-E-cEvfoH.js";const r={},c=s(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> vuepress</h1><h2 id="安装vuepress" tabindex="-1"><a class="header-anchor" href="#安装vuepress" aria-hidden="true">#</a> 安装VuePress</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="新建如下文件" tabindex="-1"><a class="header-anchor" href="#新建如下文件" aria-hidden="true">#</a> 新建如下文件</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>project
├─── docs
│   ├── README.md
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在docs-readme-md中添加代码" tabindex="-1"><a class="header-anchor" href="#在docs-readme-md中添加代码" aria-hidden="true">#</a> 在docs/README.md中添加代码</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> my first vuepress</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="在package-json中添加代码" tabindex="-1"><a class="header-anchor" href="#在package-json中添加代码" aria-hidden="true">#</a> 在package.json中添加代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;scripts&quot;: {
        &quot;dev&quot;: &quot;vuepress dev docs&quot;,
        &quot;build&quot;: &quot;vuepress build docs&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/7704547-40844c80b175f261.png?imageMogr2/auto-orient/strip|imageView2/2/w/247/format/webp" alt="img"></p><ul><li>生成静态的 HTML 文件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm run build
<span class="token comment">//文件默认被生成在 .vuepress/dist，可通过config.js dest 字段修改。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建如下文件" tabindex="-1"><a class="header-anchor" href="#创建如下文件" aria-hidden="true">#</a> 创建如下文件</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>project
├─── docs <span class="token comment">//根目录，也是vuepress要解析的文件夹</span>
│   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md <span class="token comment">//首页页面</span>
│   └── <span class="token punctuation">.</span>vuepress
│       ├── dist <span class="token comment">//打包生成的文件</span>
│       ├── <span class="token keyword">public</span> <span class="token comment">//图片等静态资源</span>
│       ├── config<span class="token punctuation">.</span>js <span class="token comment">//主题配置</span>
<span class="token operator">|</span>       └── components <span class="token comment">//自定义组件</span>
└── <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-js基本配置" tabindex="-1"><a class="header-anchor" href="#config-js基本配置" aria-hidden="true">#</a> config.js基本配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// base 会自动添加到以 / 开头的所有 URL 中,默认&#39;/&#39;</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/note/&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 网站标题，显示在导航栏中</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;yy3535&#39;</span><span class="token punctuation">,</span> 
    <span class="token comment">// 网站描述，meta标签</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;yy3535的笔记&#39;</span><span class="token punctuation">,</span> 
    <span class="token comment">// 被注入页面 HTML &lt;head&gt; 额外的标签</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/img/geass-bg.ico&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主页布局" tabindex="-1"><a class="header-anchor" href="#主页布局" aria-hidden="true">#</a> 主页布局</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>
<span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token literal-property property">heroImage</span><span class="token operator">:</span> <span class="token operator">/</span>hero<span class="token punctuation">.</span>png
<span class="token literal-property property">actionText</span><span class="token operator">:</span> Get Started →
<span class="token literal-property property">actionLink</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">guide</span><span class="token regex-delimiter">/</span></span>
<span class="token literal-property property">features</span><span class="token operator">:</span>
<span class="token operator">-</span> title<span class="token operator">:</span> Simplicity First
<span class="token literal-property property">details</span><span class="token operator">:</span> Minimal setup <span class="token keyword">with</span> markdown<span class="token operator">-</span>centered project structure helps you focus on writing<span class="token punctuation">.</span>
<span class="token operator">-</span> title<span class="token operator">:</span> Vue<span class="token operator">-</span>Powered
<span class="token literal-property property">details</span><span class="token operator">:</span> Enjoy the dev experience <span class="token keyword">of</span> Vue <span class="token operator">+</span> webpack<span class="token punctuation">,</span> use Vue components <span class="token keyword">in</span> markdown<span class="token punctuation">,</span> and develop custom themes <span class="token keyword">with</span> Vue<span class="token punctuation">.</span>
<span class="token operator">-</span> title<span class="token operator">:</span> Performant
<span class="token literal-property property">details</span><span class="token operator">:</span> VuePress generates pre<span class="token operator">-</span>rendered <span class="token keyword">static</span> <span class="token constant">HTML</span> <span class="token keyword">for</span> each page<span class="token punctuation">,</span> and runs <span class="token keyword">as</span> an <span class="token constant">SPA</span> once a page is loaded<span class="token punctuation">.</span>
<span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token constant">MIT</span> Licensed <span class="token operator">|</span> Copyright © <span class="token number">2018</span><span class="token operator">-</span>present Evan You
<span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后的任何其他内容将在功能部分之后呈现。</p><h2 id="顶部导航栏和侧边栏配置" tabindex="-1"><a class="header-anchor" href="#顶部导航栏和侧边栏配置" aria-hidden="true">#</a> 顶部导航栏和侧边栏配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token comment">//主题配置</span>
<span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// 嵌套标题深度，将提取标题到侧边栏</span>
    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>github仓库和编辑链接<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">!</span><span class="token operator">&gt;</span>
    <span class="token comment">// 假定 GitHub。也可以是一个完整的 GitLab 网址</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;vuejs/vuepress&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 如果你的文档不在仓库的根部</span>
    <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 可选，默认为 master</span>
    <span class="token literal-property property">docsBranch</span><span class="token operator">:</span> <span class="token string">&#39;master&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认为 true，设置为 false 来禁用</span>
    <span class="token literal-property property">editLinks</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">&#39;Help us improve this page!&#39;</span>

    <span class="token comment">// 文档更新时间：每个文件git最后提交的时间,</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span> <span class="token punctuation">,</span>

    <span class="token comment">//代码块显示行数</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//搜索框</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">searchMaxSuggestions</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;&lt;API_KEY&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;&lt;INDEX_NAME&gt;&#39;</span>

    <span class="token comment">//上次更新，默认off，给string则显示string</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;上次更新&#39;</span><span class="token punctuation">,</span> 
    
    <span class="token comment">// 顶部导航栏</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//简单项</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;frontend&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Frontend/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//设置下拉列表</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Chinese&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/language/chinese&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//设置下拉列表分组</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/*  */</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/*  */</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//禁用导航栏</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 侧边栏</span>
    <span class="token comment">//自动生成仅包含当前页面的标题链接的侧栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span><span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;/page-a&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//自定义标题</span>
        <span class="token punctuation">[</span><span class="token string">&#39;/page-b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Explicit link text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//多级菜单</span>
        <span class="token string">&#39;/js/jsbasic/xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Group 1&#39;</span><span class="token punctuation">,</span>
            强制一个组始终打开
            <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">//多级菜单</span>
            <span class="token string">&#39;/js/jsbasic/xxx&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Group 2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 侧边栏在 /foo/ 上</span>
        <span class="token string-property property">&#39;/foo/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;two&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 侧边栏在 /bar/ 上</span>
        <span class="token string-property property">&#39;/bar/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;four&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>图片等静态资源的路径/默认指向public文件夹</li><li>导航路径/默认指向docs文件夹</li><li>.md扩展名可省略，/结尾的路径默认为/README.md，自动把页面第一个标题显示为变体，自定义可使用[link,text]形式</li></ul><h2 id="页面单独自定义" tabindex="-1"><a class="header-anchor" href="#页面单独自定义" aria-hidden="true">#</a> 页面单独自定义</h2><p>用---包起来</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>
<span class="token comment">//页面覆盖提取标题深度</span>
<span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token comment">//自动生成仅包含当前页面的标题链接的侧边栏(可在该页面单独定义)</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> auto
<span class="token comment">//禁用特定页面上的侧边栏</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//上一个下一个是根据侧边栏自动推断的，可覆盖或者禁用上一个下一个</span>
<span class="token literal-property property">prev</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>some<span class="token operator">-</span>other<span class="token operator">-</span>page
<span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//自定义页面独有class</span>
<span class="token literal-property property">pageClass</span><span class="token operator">:</span> custom<span class="token operator">-</span>page<span class="token operator">-</span><span class="token keyword">class</span>
<span class="token class-name"><span class="token punctuation">.</span>theme</span><span class="token operator">-</span>container<span class="token punctuation">.</span>custom<span class="token operator">-</span>page<span class="token operator">-</span><span class="token keyword">class</span> <span class="token punctuation">{</span>
    <span class="token comment">/* page-specific rules */</span>
<span class="token punctuation">}</span>
<span class="token comment">//特定页面的自定义布局,这将为给定页面渲染 \`.vuepress/components/SpecialLayout.vue\`</span>
<span class="token literal-property property">layout</span><span class="token operator">:</span> SpecialLayout
<span class="token comment">//禁用特定页面导航栏</span>
<span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//显示侧边栏所有页面的标题链接</span>
<span class="token literal-property property">displayAllHeaders</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Default: false</span>
<span class="token comment">//禁用侧边栏跟随滚动效果以及url哈希值变化效果</span>
<span class="token literal-property property">activeHeaderLinks</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//隐藏特定页面上的编辑链接</span>
<span class="token literal-property property">editLink</span><span class="token operator">:</span> <span class="token boolean">false</span>

<span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css覆盖" tabindex="-1"><a class="header-anchor" href="#css覆盖" aria-hidden="true">#</a> CSS覆盖</h2><p>创建一个 <code>.vuepress/override.styl</code> 文件,有几个颜色变量可以调整：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 显示默认值</span>
$accentColor <span class="token operator">=</span> #3eaf7c
$textColor <span class="token operator">=</span> #2c3e50
$borderColor <span class="token operator">=</span> #eaecef
$codeBgColor <span class="token operator">=</span> #282c34
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包放github" tabindex="-1"><a class="header-anchor" href="#打包放github" aria-hidden="true">#</a> 打包放github</h2><p>打包后找到 <code>docs/.vuepress/dist</code> 的文件，拷贝到github仓库中，访问http://yy3535.github.io。</p><h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2><ul><li>相对路径</li><li>基础路径 会在基础路径后寻找<code>.vuepress/public</code>路径下的文件</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$withBase(&#39;/foo.png&#39;)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="markdown-拓展" tabindex="-1"><a class="header-anchor" href="#markdown-拓展" aria-hidden="true">#</a> Markdown 拓展</h2><ul><li>内部链接</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- 跳转到根部的 README.md --&gt;</span>
<span class="token url">[<span class="token content">foo</span>](<span class="token url">/foo/</span>)</span> <span class="token comment">&lt;!-- 跳转到 foo 文件夹的 index.html --&gt;</span>
<span class="token url">[<span class="token content">foo heading anchor</span>](<span class="token url">/foo/#heading</span>)</span> <span class="token comment">&lt;!-- 跳转到 foo/index.html 的特定 anchor 位置 --&gt;</span>
<span class="token url">[<span class="token content">foo - one</span>](<span class="token url">/foo/one.html</span>)</span> <span class="token comment">&lt;!-- 具体文件可以使用 .html 结尾 --&gt;</span>
<span class="token url">[<span class="token content">foo - two</span>](<span class="token url">/foo/two.md</span>)</span> <span class="token comment">&lt;!-- 也可以用 .md --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li><p>确保链接以 .html 或 .md 结尾；</p></li><li><p>确保路径大小写正确，因为路径的匹配是大小写敏感的。</p></li></ol><ul><li>GitHub风格的表格</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Tables        </span><span class="token punctuation">|</span><span class="token table-header important"> Are           </span><span class="token punctuation">|</span><span class="token table-header important"> Cool  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-------------</span> <span class="token punctuation">|</span><span class="token punctuation">:-------------:</span><span class="token punctuation">|</span> <span class="token punctuation">-----:</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> col 3 is      </span><span class="token punctuation">|</span><span class="token table-data"> right-aligned </span><span class="token punctuation">|</span><span class="token table-data"> $1600 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> col 2 is      </span><span class="token punctuation">|</span><span class="token table-data"> centered      </span><span class="token punctuation">|</span><span class="token table-data">   $12 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> zebra stripes </span><span class="token punctuation">|</span><span class="token table-data"> are neat      </span><span class="token punctuation">|</span><span class="token table-data">    $1 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Emoji</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:tada: :100:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,44),d={href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"},u=s(`<ul><li>目录</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以通过 markdown.toc 选项来配置</p><ul><li>自定义容器</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>代码块中的行高亮</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>\`\`\` js{4}
export default {
data () {
    return {
    msg: &#39;Highlighted!&#39;
    }
}
}
\`\`\`/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>行号</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(k,m){const a=p("ExternalLinkIcon");return t(),l("div",null,[c,n("p",null,[n("a",d,[o("所有表情"),i(a)])]),u])}const g=e(r,[["render",v],["__file","vuepress.html.vue"]]);export{g as default};
