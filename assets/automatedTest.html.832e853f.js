import{_ as n,o as s,c as a,a as t}from"./app.e4556a3b.js";const e={},p=t(`<h1 id="js\u5355\u5143\u6D4B\u8BD5\u7684\u4E00\u95E8\u8BED\u8A00jest" tabindex="-1"><a class="header-anchor" href="#js\u5355\u5143\u6D4B\u8BD5\u7684\u4E00\u95E8\u8BED\u8A00jest" aria-hidden="true">#</a> js\u5355\u5143\u6D4B\u8BD5\u7684\u4E00\u95E8\u8BED\u8A00Jest</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev jest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// sum.js</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> sum<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./sum&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;adds 1 + 2 to equal 3&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PASS</span>  <span class="token punctuation">.</span><span class="token operator">/</span>sum<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js
\u2713 adds <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> to equal <span class="token number">3</span> <span class="token punctuation">(</span>5ms<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// lesson1.test.js</span>
<span class="token keyword">import</span> revertByWorld <span class="token keyword">from</span> <span class="token string">&#39;../../code/string/lesson1&#39;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;revertByWorld:Let\\&#39;s take LeetCode contest&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">revertByWorld</span><span class="token punctuation">(</span><span class="token string">&quot;Let&#39;s take LeetCode contest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;s&#39;teL ekat edoCteeL tsetnoc&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","automatedTest.html.vue"]]);export{r as default};
