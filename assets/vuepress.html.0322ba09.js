import{_ as e,r as p,o as t,c as l,b as n,e as o,a as s,d as i}from"./app.e4556a3b.js";const r={},c=s(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> vuepress</h1><h2 id="\u5B89\u88C5vuepress" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5vuepress" aria-hidden="true">#</a> \u5B89\u88C5VuePress</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u65B0\u5EFA\u5982\u4E0B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u5982\u4E0B\u6587\u4EF6" aria-hidden="true">#</a> \u65B0\u5EFA\u5982\u4E0B\u6587\u4EF6</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>project
\u251C\u2500\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 README.md
\u2514\u2500\u2500 package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5728docs-readme-md\u4E2D\u6DFB\u52A0\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5728docs-readme-md\u4E2D\u6DFB\u52A0\u4EE3\u7801" aria-hidden="true">#</a> \u5728docs/README.md\u4E2D\u6DFB\u52A0\u4EE3\u7801</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> my first vuepress</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5728package-json\u4E2D\u6DFB\u52A0\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5728package-json\u4E2D\u6DFB\u52A0\u4EE3\u7801" aria-hidden="true">#</a> \u5728package.json\u4E2D\u6DFB\u52A0\u4EE3\u7801</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;scripts&quot;: {
        &quot;dev&quot;: &quot;vuepress dev docs&quot;,
        &quot;build&quot;: &quot;vuepress build docs&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u9879\u76EE" aria-hidden="true">#</a> \u542F\u52A8\u9879\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/7704547-40844c80b175f261.png?imageMogr2/auto-orient/strip|imageView2/2/w/247/format/webp" alt="img"></p><ul><li>\u751F\u6210\u9759\u6001\u7684 HTML \u6587\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run build
<span class="token comment">//\u6587\u4EF6\u9ED8\u8BA4\u88AB\u751F\u6210\u5728 .vuepress/dist\uFF0C\u53EF\u901A\u8FC7config.js dest \u5B57\u6BB5\u4FEE\u6539\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u5982\u4E0B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5982\u4E0B\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u5982\u4E0B\u6587\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>project
\u251C\u2500\u2500\u2500 docs <span class="token comment">//\u6839\u76EE\u5F55\uFF0C\u4E5F\u662Fvuepress\u8981\u89E3\u6790\u7684\u6587\u4EF6\u5939</span>
\u2502   \u251C\u2500\u2500 <span class="token constant">README</span><span class="token punctuation">.</span>md <span class="token comment">//\u9996\u9875\u9875\u9762</span>
\u2502   \u2514\u2500\u2500 <span class="token punctuation">.</span>vuepress
\u2502       \u251C\u2500\u2500 dist <span class="token comment">//\u6253\u5305\u751F\u6210\u7684\u6587\u4EF6</span>
\u2502       \u251C\u2500\u2500 <span class="token keyword">public</span> <span class="token comment">//\u56FE\u7247\u7B49\u9759\u6001\u8D44\u6E90</span>
\u2502       \u251C\u2500\u2500 config<span class="token punctuation">.</span>js <span class="token comment">//\u4E3B\u9898\u914D\u7F6E</span>
<span class="token operator">|</span>       \u2514\u2500\u2500 components <span class="token comment">//\u81EA\u5B9A\u4E49\u7EC4\u4EF6</span>
\u2514\u2500\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-js\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#config-js\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> config.js\u57FA\u672C\u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// base \u4F1A\u81EA\u52A8\u6DFB\u52A0\u5230\u4EE5 / \u5F00\u5934\u7684\u6240\u6709 URL \u4E2D,\u9ED8\u8BA4&#39;/&#39;</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/note/&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7F51\u7AD9\u6807\u9898\uFF0C\u663E\u793A\u5728\u5BFC\u822A\u680F\u4E2D</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;yy3535&#39;</span><span class="token punctuation">,</span> 
    <span class="token comment">// \u7F51\u7AD9\u63CF\u8FF0\uFF0Cmeta\u6807\u7B7E</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;yy3535\u7684\u7B14\u8BB0&#39;</span><span class="token punctuation">,</span> 
    <span class="token comment">// \u88AB\u6CE8\u5165\u9875\u9762 HTML &lt;head&gt; \u989D\u5916\u7684\u6807\u7B7E</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/img/geass-bg.ico&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3B\u9875\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9875\u5E03\u5C40" aria-hidden="true">#</a> \u4E3B\u9875\u5E03\u5C40</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>
<span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token literal-property property">heroImage</span><span class="token operator">:</span> <span class="token operator">/</span>hero<span class="token punctuation">.</span>png
<span class="token literal-property property">actionText</span><span class="token operator">:</span> Get Started \u2192
<span class="token literal-property property">actionLink</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">guide</span><span class="token regex-delimiter">/</span></span>
<span class="token literal-property property">features</span><span class="token operator">:</span>
<span class="token operator">-</span> title<span class="token operator">:</span> Simplicity First
<span class="token literal-property property">details</span><span class="token operator">:</span> Minimal setup <span class="token keyword">with</span> markdown<span class="token operator">-</span>centered project structure helps you focus on writing<span class="token punctuation">.</span>
<span class="token operator">-</span> title<span class="token operator">:</span> Vue<span class="token operator">-</span>Powered
<span class="token literal-property property">details</span><span class="token operator">:</span> Enjoy the dev experience <span class="token keyword">of</span> Vue <span class="token operator">+</span> webpack<span class="token punctuation">,</span> use Vue components <span class="token keyword">in</span> markdown<span class="token punctuation">,</span> and develop custom themes <span class="token keyword">with</span> Vue<span class="token punctuation">.</span>
<span class="token operator">-</span> title<span class="token operator">:</span> Performant
<span class="token literal-property property">details</span><span class="token operator">:</span> VuePress generates pre<span class="token operator">-</span>rendered <span class="token keyword">static</span> <span class="token constant">HTML</span> <span class="token keyword">for</span> each page<span class="token punctuation">,</span> and runs <span class="token keyword">as</span> an <span class="token constant">SPA</span> once a page is loaded<span class="token punctuation">.</span>
<span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token constant">MIT</span> Licensed <span class="token operator">|</span> Copyright \xA9 <span class="token number">2018</span><span class="token operator">-</span>present Evan You
<span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u7684\u4EFB\u4F55\u5176\u4ED6\u5185\u5BB9\u5C06\u5728\u529F\u80FD\u90E8\u5206\u4E4B\u540E\u5448\u73B0\u3002</p><h2 id="\u9876\u90E8\u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9876\u90E8\u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F\u914D\u7F6E" aria-hidden="true">#</a> \u9876\u90E8\u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F\u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token comment">//\u4E3B\u9898\u914D\u7F6E</span>
<span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u5D4C\u5957\u6807\u9898\u6DF1\u5EA6\uFF0C\u5C06\u63D0\u53D6\u6807\u9898\u5230\u4FA7\u8FB9\u680F</span>
    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>github\u4ED3\u5E93\u548C\u7F16\u8F91\u94FE\u63A5<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">!</span><span class="token operator">&gt;</span>
    <span class="token comment">// \u5047\u5B9A GitHub\u3002\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 GitLab \u7F51\u5740</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;vuejs/vuepress&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5982\u679C\u4F60\u7684\u6587\u6863\u4E0D\u5728\u4ED3\u5E93\u7684\u6839\u90E8</span>
    <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A master</span>
    <span class="token literal-property property">docsBranch</span><span class="token operator">:</span> <span class="token string">&#39;master&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u4E3A true\uFF0C\u8BBE\u7F6E\u4E3A false \u6765\u7981\u7528</span>
    <span class="token literal-property property">editLinks</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">&#39;Help us improve this page!&#39;</span>

    <span class="token comment">// \u6587\u6863\u66F4\u65B0\u65F6\u95F4\uFF1A\u6BCF\u4E2A\u6587\u4EF6git\u6700\u540E\u63D0\u4EA4\u7684\u65F6\u95F4,</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span> <span class="token punctuation">,</span>

    <span class="token comment">//\u4EE3\u7801\u5757\u663E\u793A\u884C\u6570</span>
    <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u641C\u7D22\u6846</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">searchMaxSuggestions</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;&lt;API_KEY&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;&lt;INDEX_NAME&gt;&#39;</span>

    <span class="token comment">//\u4E0A\u6B21\u66F4\u65B0\uFF0C\u9ED8\u8BA4off\uFF0C\u7ED9string\u5219\u663E\u793Astring</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u6B21\u66F4\u65B0&#39;</span><span class="token punctuation">,</span> 
    
    <span class="token comment">// \u9876\u90E8\u5BFC\u822A\u680F</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//\u7B80\u5355\u9879</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;frontend&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Frontend/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//\u8BBE\u7F6E\u4E0B\u62C9\u5217\u8868</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Chinese&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/language/chinese&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//\u8BBE\u7F6E\u4E0B\u62C9\u5217\u8868\u5206\u7EC4</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/*  */</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/*  */</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//\u7981\u7528\u5BFC\u822A\u680F</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4FA7\u8FB9\u680F</span>
    <span class="token comment">//\u81EA\u52A8\u751F\u6210\u4EC5\u5305\u542B\u5F53\u524D\u9875\u9762\u7684\u6807\u9898\u94FE\u63A5\u7684\u4FA7\u680F</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span><span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;/page-a&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//\u81EA\u5B9A\u4E49\u6807\u9898</span>
        <span class="token punctuation">[</span><span class="token string">&#39;/page-b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Explicit link text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//\u591A\u7EA7\u83DC\u5355</span>
        <span class="token string">&#39;/js/jsbasic/xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Group 1&#39;</span><span class="token punctuation">,</span>
            \u5F3A\u5236\u4E00\u4E2A\u7EC4\u59CB\u7EC8\u6253\u5F00
            <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">//\u591A\u7EA7\u83DC\u5355</span>
            <span class="token string">&#39;/js/jsbasic/xxx&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Group 2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4FA7\u8FB9\u680F\u5728 /foo/ \u4E0A</span>
        <span class="token string-property property">&#39;/foo/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;two&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4FA7\u8FB9\u680F\u5728 /bar/ \u4E0A</span>
        <span class="token string-property property">&#39;/bar/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;four&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u56FE\u7247\u7B49\u9759\u6001\u8D44\u6E90\u7684\u8DEF\u5F84/\u9ED8\u8BA4\u6307\u5411public\u6587\u4EF6\u5939</li><li>\u5BFC\u822A\u8DEF\u5F84/\u9ED8\u8BA4\u6307\u5411docs\u6587\u4EF6\u5939</li><li>.md\u6269\u5C55\u540D\u53EF\u7701\u7565\uFF0C/\u7ED3\u5C3E\u7684\u8DEF\u5F84\u9ED8\u8BA4\u4E3A/README.md\uFF0C\u81EA\u52A8\u628A\u9875\u9762\u7B2C\u4E00\u4E2A\u6807\u9898\u663E\u793A\u4E3A\u53D8\u4F53\uFF0C\u81EA\u5B9A\u4E49\u53EF\u4F7F\u7528[link,text]\u5F62\u5F0F</li></ul><h2 id="\u9875\u9762\u5355\u72EC\u81EA\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5355\u72EC\u81EA\u5B9A\u4E49" aria-hidden="true">#</a> \u9875\u9762\u5355\u72EC\u81EA\u5B9A\u4E49</h2><p>\u7528---\u5305\u8D77\u6765</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>
<span class="token comment">//\u9875\u9762\u8986\u76D6\u63D0\u53D6\u6807\u9898\u6DF1\u5EA6</span>
<span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token comment">//\u81EA\u52A8\u751F\u6210\u4EC5\u5305\u542B\u5F53\u524D\u9875\u9762\u7684\u6807\u9898\u94FE\u63A5\u7684\u4FA7\u8FB9\u680F(\u53EF\u5728\u8BE5\u9875\u9762\u5355\u72EC\u5B9A\u4E49)</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> auto
<span class="token comment">//\u7981\u7528\u7279\u5B9A\u9875\u9762\u4E0A\u7684\u4FA7\u8FB9\u680F</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//\u4E0A\u4E00\u4E2A\u4E0B\u4E00\u4E2A\u662F\u6839\u636E\u4FA7\u8FB9\u680F\u81EA\u52A8\u63A8\u65AD\u7684\uFF0C\u53EF\u8986\u76D6\u6216\u8005\u7981\u7528\u4E0A\u4E00\u4E2A\u4E0B\u4E00\u4E2A</span>
<span class="token literal-property property">prev</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token operator">/</span>some<span class="token operator">-</span>other<span class="token operator">-</span>page
<span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//\u81EA\u5B9A\u4E49\u9875\u9762\u72EC\u6709class</span>
<span class="token literal-property property">pageClass</span><span class="token operator">:</span> custom<span class="token operator">-</span>page<span class="token operator">-</span><span class="token keyword">class</span>
<span class="token class-name"><span class="token punctuation">.</span>theme</span><span class="token operator">-</span>container<span class="token punctuation">.</span>custom<span class="token operator">-</span>page<span class="token operator">-</span><span class="token keyword">class</span> <span class="token punctuation">{</span>
    <span class="token comment">/* page-specific rules */</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u7279\u5B9A\u9875\u9762\u7684\u81EA\u5B9A\u4E49\u5E03\u5C40,\u8FD9\u5C06\u4E3A\u7ED9\u5B9A\u9875\u9762\u6E32\u67D3 \`.vuepress/components/SpecialLayout.vue\`</span>
<span class="token literal-property property">layout</span><span class="token operator">:</span> SpecialLayout
<span class="token comment">//\u7981\u7528\u7279\u5B9A\u9875\u9762\u5BFC\u822A\u680F</span>
<span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//\u663E\u793A\u4FA7\u8FB9\u680F\u6240\u6709\u9875\u9762\u7684\u6807\u9898\u94FE\u63A5</span>
<span class="token literal-property property">displayAllHeaders</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Default: false</span>
<span class="token comment">//\u7981\u7528\u4FA7\u8FB9\u680F\u8DDF\u968F\u6EDA\u52A8\u6548\u679C\u4EE5\u53CAurl\u54C8\u5E0C\u503C\u53D8\u5316\u6548\u679C</span>
<span class="token literal-property property">activeHeaderLinks</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token comment">//\u9690\u85CF\u7279\u5B9A\u9875\u9762\u4E0A\u7684\u7F16\u8F91\u94FE\u63A5</span>
<span class="token literal-property property">editLink</span><span class="token operator">:</span> <span class="token boolean">false</span>

<span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css\u8986\u76D6" tabindex="-1"><a class="header-anchor" href="#css\u8986\u76D6" aria-hidden="true">#</a> CSS\u8986\u76D6</h2><p>\u521B\u5EFA\u4E00\u4E2A <code>.vuepress/override.styl</code> \u6587\u4EF6,\u6709\u51E0\u4E2A\u989C\u8272\u53D8\u91CF\u53EF\u4EE5\u8C03\u6574\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u663E\u793A\u9ED8\u8BA4\u503C</span>
$accentColor <span class="token operator">=</span> #3eaf7c
$textColor <span class="token operator">=</span> #2c3e50
$borderColor <span class="token operator">=</span> #eaecef
$codeBgColor <span class="token operator">=</span> #282c34
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6253\u5305\u653Egithub" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u653Egithub" aria-hidden="true">#</a> \u6253\u5305\u653Egithub</h2><p>\u6253\u5305\u540E\u627E\u5230 <code>docs/.vuepress/dist</code> \u7684\u6587\u4EF6\uFF0C\u62F7\u8D1D\u5230github\u4ED3\u5E93\u4E2D\uFF0C\u8BBF\u95EEhttp://yy3535.github.io\u3002</p><h2 id="\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90</h2><ul><li>\u76F8\u5BF9\u8DEF\u5F84</li><li>\u57FA\u7840\u8DEF\u5F84 \u4F1A\u5728\u57FA\u7840\u8DEF\u5F84\u540E\u5BFB\u627E<code>.vuepress/public</code>\u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$withBase(<span class="token punctuation">&#39;</span>/foo.png<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="markdown-\u62D3\u5C55" tabindex="-1"><a class="header-anchor" href="#markdown-\u62D3\u5C55" aria-hidden="true">#</a> Markdown \u62D3\u5C55</h2><ul><li>\u5185\u90E8\u94FE\u63A5</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- \u8DF3\u8F6C\u5230\u6839\u90E8\u7684 README.md --&gt;</span>
<span class="token url">[<span class="token content">foo</span>](<span class="token url">/foo/</span>)</span> <span class="token comment">&lt;!-- \u8DF3\u8F6C\u5230 foo \u6587\u4EF6\u5939\u7684 index.html --&gt;</span>
<span class="token url">[<span class="token content">foo heading anchor</span>](<span class="token url">/foo/#heading</span>)</span> <span class="token comment">&lt;!-- \u8DF3\u8F6C\u5230 foo/index.html \u7684\u7279\u5B9A anchor \u4F4D\u7F6E --&gt;</span>
<span class="token url">[<span class="token content">foo - one</span>](<span class="token url">/foo/one.html</span>)</span> <span class="token comment">&lt;!-- \u5177\u4F53\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528 .html \u7ED3\u5C3E --&gt;</span>
<span class="token url">[<span class="token content">foo - two</span>](<span class="token url">/foo/two.md</span>)</span> <span class="token comment">&lt;!-- \u4E5F\u53EF\u4EE5\u7528 .md --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A</p><ol><li><p>\u786E\u4FDD\u94FE\u63A5\u4EE5 .html \u6216 .md \u7ED3\u5C3E\uFF1B</p></li><li><p>\u786E\u4FDD\u8DEF\u5F84\u5927\u5C0F\u5199\u6B63\u786E\uFF0C\u56E0\u4E3A\u8DEF\u5F84\u7684\u5339\u914D\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002</p></li></ol><ul><li>GitHub\u98CE\u683C\u7684\u8868\u683C</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Tables        </span><span class="token punctuation">|</span><span class="token table-header important"> Are           </span><span class="token punctuation">|</span><span class="token table-header important"> Cool  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-------------</span> <span class="token punctuation">|</span><span class="token punctuation">:-------------:</span><span class="token punctuation">|</span> <span class="token punctuation">-----:</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> col 3 is      </span><span class="token punctuation">|</span><span class="token table-data"> right-aligned </span><span class="token punctuation">|</span><span class="token table-data"> $1600 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> col 2 is      </span><span class="token punctuation">|</span><span class="token table-data"> centered      </span><span class="token punctuation">|</span><span class="token table-data">   $12 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> zebra stripes </span><span class="token punctuation">|</span><span class="token table-data"> are neat      </span><span class="token punctuation">|</span><span class="token table-data">    $1 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Emoji</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:tada: :100:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,44),d={href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"},u=i("\u6240\u6709\u8868\u60C5"),v=s(`<ul><li>\u76EE\u5F55</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u901A\u8FC7 markdown.toc \u9009\u9879\u6765\u914D\u7F6E</p><ul><li>\u81EA\u5B9A\u4E49\u5BB9\u5668</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tip
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EE3\u7801\u5757\u4E2D\u7684\u884C\u9AD8\u4EAE</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\`\`\` js{4}
export default {
data () {
    return {
    msg: &#39;Highlighted!&#39;
    }
}
}
\`\`\`/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u884C\u53F7</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(m,b){const a=p("ExternalLinkIcon");return t(),l("div",null,[c,n("p",null,[n("a",d,[u,o(a)])]),v])}var h=e(r,[["render",k],["__file","vuepress.html.vue"]]);export{h as default};
