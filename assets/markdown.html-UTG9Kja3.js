import{_ as a,o as n,c as s,a as e}from"./app-E-cEvfoH.js";const i={},d=e(`<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h1><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>1.标题</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>
<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.列表</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 1
<span class="token list punctuation">-</span> 2
<span class="token list punctuation">-</span> 3
<span class="token list punctuation">1.</span> 列表1
<span class="token list punctuation">2.</span> 列表2
<span class="token list punctuation">3.</span> 列表3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.引用</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 这是一个引用
<span class="token blockquote punctuation">&gt;&gt;</span> 二级引用
<span class="token blockquote punctuation">&gt;&gt;&gt;</span> 三级引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.分割线</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token hr punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.链接</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">链接1</span>](<span class="token url">www.baidu.com</span>)</span>
[链接2]:www.baidu.com
这是链接：<span class="token url">[<span class="token content">链接2</span>][<span class="token variable">链接1</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.图片</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">图片1</span>](<span class="token url">https://www......gif</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">图片1</span>](<span class="token url">./xxx.png</span>)</span>
[图片2]:https://www......jpg
这是图片：<span class="token url"><span class="token operator">!</span>[<span class="token content">图片1</span>][<span class="token variable">图片2</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.代码框</p><ul><li>所有的html标签标签必须用代码框框起来，少的用单行，多的用多行，否则都会报错。</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>单行：
	<span class="token code-snippet code keyword">\`&lt;p&gt;…&lt;/p&gt;\`</span>
多行：
	\`\`\`js/md/php等语言
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
	\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.字体强调</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token italic"><span class="token punctuation">*</span><span class="token content">倾斜</span><span class="token punctuation">*</span></span>
<span class="token bold"><span class="token punctuation">**</span><span class="token content">加粗</span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>9.删除线</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~~</span><span class="token content">删除</span><span class="token punctuation">~~</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>10.表格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> 左对齐标题 </span><span class="token punctuation">|</span><span class="token table-header important"> 右对齐标题 </span><span class="token punctuation">|</span><span class="token table-header important"> 居中对齐标题 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:------</span><span class="token punctuation">|</span> <span class="token punctuation">------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:------:</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 短文本 </span><span class="token punctuation">|</span><span class="token table-data"> 中等文本 </span><span class="token punctuation">|</span><span class="token table-data"> 稍微长一点的文本 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 稍微长一点的文本 </span><span class="token punctuation">|</span><span class="token table-data"> 短文本 </span><span class="token punctuation">|</span><span class="token table-data"> 中等文本 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11.转义</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>12.目录</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>13.目录结构</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>root
├─── public.js
│   ├── common.js
	├── layout.js
└─── util.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>14.水平分割线 使用一个单独行里的三个或以上 *、- 来生产一条水平分割线，它们之间可以有空格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token hr punctuation">***</span>

<span class="token hr punctuation">-----</span>

<span class="token hr punctuation">- - -</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>15.嵌入 HTML 对于那些没有办法用 Markdown 语法来对应的 HTML 标签，直接使用 HTML 来写就好了。</p><h2 id="预览和编辑器" tabindex="-1"><a class="header-anchor" href="#预览和编辑器" aria-hidden="true">#</a> 预览和编辑器</h2><p><code>typora</code><code>vscode</code><code>vuepress</code></p><h2 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> mermaid</h2><h3 id="图形" tabindex="-1"><a class="header-anchor" href="#图形" aria-hidden="true">#</a> 图形</h3><p>//该语句声明了一个新图形和图形布局的方向。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>graph <span class="token constant">TD</span>
开始 <span class="token operator">--</span><span class="token operator">&gt;</span> 结束
方向是：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TB - 从上到下</li><li>BT - 从下到上</li><li>RL - 从右到左</li><li>LR - 从左到右</li><li>TD - 与TB相同</li></ul><p>image</p><h3 id="节点和形状" tabindex="-1"><a class="header-anchor" href="#节点和形状" aria-hidden="true">#</a> 节点和形状</h3><ol><li>节点</li></ol><p>默认节点就是默认的内容</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
	start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol><li>带有文本的节点</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
	start<span class="token text string">[开始]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol start="2"><li>具有圆边的节点</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
	start<span class="token text string">(开始)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image 3. 圆形的节点</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
	start<span class="token text string">((开始))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image 4. 非对称形状的节点</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    start<span class="token text string">&gt;开始]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image 5. 菱形节点</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    start<span class="token text string">{开始}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><h3 id="节点之间的连接" tabindex="-1"><a class="header-anchor" href="#节点之间的连接" aria-hidden="true">#</a> 节点之间的连接</h3><ol><li>带箭头的连接</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
  A <span class="token arrow operator">--&gt;</span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image 2. 没有箭头的连接</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
  A <span class="token arrow operator">---</span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol start="3"><li>连接上的文字</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
  A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">连接上的文字</span> <span class="token arrow operator">---</span></span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    A<span class="token arrow operator">---</span><span class="token label property">|连接上的文字|</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol start="4"><li>带箭头和文字的连接</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    A<span class="token arrow operator">--&gt;</span><span class="token label property">|带箭头和文字的连接|</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">带箭头和文字的连接</span> <span class="token arrow operator">--&gt;</span></span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol><li>虚线连接</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
   A<span class="token arrow operator">-.-&gt;</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol><li>带文字的虚线连接</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
   A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span> <span class="token label property">带文字的虚线连接</span> <span class="token arrow operator">.-&gt;</span></span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol><li>粗连接</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
   A <span class="token arrow operator">==&gt;</span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol><li>带文本的粗连接</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
   A <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">==</span> <span class="token label property">带文本的粗连接</span> <span class="token arrow operator">==&gt;</span></span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><ol><li>破坏语法的特殊字符 可以将文本放在引号内以便渲染更麻烦的字符</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    id1<span class="token text string">[&quot;破坏语法的特殊字符!&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image （10） 实体代码转义字符</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code> <span class="token keyword">graph</span> LR
        A<span class="token text string">[&quot;这里有个引号#quot;&quot;]</span> <span class="token arrow operator">--&gt;</span>B<span class="token text string">[&quot;特殊字符:#9829;&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><h3 id="子图" tabindex="-1"><a class="header-anchor" href="#子图" aria-hidden="true">#</a> 子图</h3><p>语法：</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">subgraph</span> title
    <span class="token keyword">graph</span> definition
<span class="token keyword">end</span>
<span class="token keyword">graph</span> TB
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><h3 id="样式链接" tabindex="-1"><a class="header-anchor" href="#样式链接" aria-hidden="true">#</a> 样式链接</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    id1<span class="token text string">(Start)</span><span class="token arrow operator">--&gt;</span>id2<span class="token text string">(Stop)</span>
    <span class="token keyword">style</span> id1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span>
    <span class="token keyword">style</span> id2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ccf<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#f66<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px<span class="token punctuation">,</span><span class="token property">stroke-dasharray</span><span class="token operator">:</span> 5<span class="token punctuation">,</span> 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>image</p><h3 id="对fontawesome的基本支持" tabindex="-1"><a class="header-anchor" href="#对fontawesome的基本支持" aria-hidden="true">#</a> 对fontawesome的基本支持</h3><p>图标通过语法fa：#icon class name＃来获取</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
    B<span class="token text string">[&quot;fa:fa-twitter 和平&quot;]</span>
    B<span class="token arrow operator">--&gt;</span>C<span class="token text string">[fa:fa-ban 禁止]</span>
    B<span class="token arrow operator">--&gt;</span>D<span class="token text string">(fa:fa-spinner)</span><span class="token punctuation">;</span>
    B<span class="token arrow operator">--&gt;</span>E<span class="token text string">(A fa:fa-camera-retro 也许?)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,100),l=[d];function r(t,p){return n(),s("div",null,l)}const c=a(i,[["render",r],["__file","markdown.html.vue"]]);export{c as default};
