import{_ as a,c as l,b as s,d as p,t as e,a as o,o as r}from"./app.d1d7af86.js";const A=JSON.parse('{"title":"md扩展语法","description":"","frontmatter":{"layout":"doc","title":"md扩展语法","editLink":true},"headers":[{"level":2,"title":"符号表情","slug":"符号表情","link":"#符号表情","children":[]},{"level":2,"title":"状态提示框","slug":"状态提示框","link":"#状态提示框","children":[{"level":3,"title":"可折叠","slug":"可折叠","link":"#可折叠","children":[]}]},{"level":2,"title":"重点高亮代码行","slug":"重点高亮代码行","link":"#重点高亮代码行","children":[]},{"level":2,"title":"代码备注 // ![code xxx]","slug":"代码备注-code-xxx","link":"#代码备注-code-xxx","children":[{"level":3,"title":"代码高亮","slug":"代码高亮","link":"#代码高亮","children":[]},{"level":3,"title":"聚焦代码","slug":"聚焦代码","link":"#聚焦代码","children":[]}]},{"level":2,"title":"加减代码","slug":"加减代码","link":"#加减代码","children":[]},{"level":2,"title":"代码错误提示","slug":"代码错误提示","link":"#代码错误提示","children":[]},{"level":2,"title":"代码标签页","slug":"代码标签页","link":"#代码标签页","children":[]},{"level":2,"title":"引入其他md文件中的内容","slug":"引入其他md文件中的内容","link":"#引入其他md文件中的内容","children":[]},{"level":2,"title":"layout: doc","slug":"layout-doc","link":"#layout-doc","children":[]}],"relativePath":"guide/artical02.md","lastUpdated":1675594679000}'),c={name:"guide/artical02.md"},i={id:"frontmatter-title",tabindex:"-1"},t=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),B=o(`<h2 id="符号表情" tabindex="-1">符号表情 <a class="header-anchor" href="#符号表情" aria-hidden="true">#</a></h2><ul><li><code>:tada:</code> =&gt; 🎉</li><li><code>:100:</code> =&gt; 💯</li><li><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">更多表情↗</a></li></ul><h2 id="状态提示框" tabindex="-1">状态提示框 <a class="header-anchor" href="#状态提示框" aria-hidden="true">#</a></h2><p>语法:</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">::: [</span><span style="color:#61AFEF;">tip|info|warning|danger|detail</span><span style="color:#ABB2BF;">] [</span><span style="color:#61AFEF;">标题</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">This is a tip</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">小提示</p><p>This is a tip</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning</p></div><h3 id="可折叠" tabindex="-1">可折叠 <a class="header-anchor" href="#可折叠" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Hello, VitePress!&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></details><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="重点高亮代码行" tabindex="-1">重点高亮代码行 <a class="header-anchor" href="#重点高亮代码行" aria-hidden="true">#</a></h2><ul><li><a href="https://vitepress.vuejs.org/guide/markdown#line-highlighting-in-code-blocks" target="_blank" rel="noreferrer">more...</a></li><li>指定一行</li></ul><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro has-highlighted-lines"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>指定范围</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">\`\`\`js{3-5}</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro has-highlighted-lines"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="代码备注-code-xxx" tabindex="-1">代码备注 <code>// ![code xxx]</code> <a class="header-anchor" href="#代码备注-code-xxx" aria-hidden="true">#</a></h2><p><a href="https://vitepress.vuejs.org/guide/markdown#focus-in-code-blocks" target="_blank" rel="noreferrer">参考</a></p><h3 id="代码高亮" tabindex="-1">代码高亮 <a class="header-anchor" href="#代码高亮" aria-hidden="true">#</a></h3><ul><li>输入:</li></ul><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// [!code  hl]  (将[!code  hl] 之间的空格减为一个后生效)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>渲染:</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro has-highlighted-lines"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="聚焦代码" tabindex="-1">聚焦代码 <a class="header-anchor" href="#聚焦代码" aria-hidden="true">#</a></h3><ul><li><code>// [!code focus]</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro has-focused-lines"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line has-focus"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Focused!&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="加减代码" tabindex="-1">加减代码 <a class="header-anchor" href="#加减代码" aria-hidden="true">#</a></h2><ul><li><code>// [!code --]</code></li><li><code>// [!code --]</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro has-diff"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line diff remove"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Removed&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line diff add"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Added&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="代码错误提示" tabindex="-1">代码错误提示 <a class="header-anchor" href="#代码错误提示" aria-hidden="true">#</a></h2><ul><li><code> // [!code error]</code></li><li><code>// [!code warning]</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro has-highlighted-lines"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line highlighted error"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Error&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line highlighted warning"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Warning&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">小提示</p><p>注意<code>[!code ++]</code> 之间的空格只有一个, 否则会失效</p></div><h2 id="代码标签页" tabindex="-1">代码标签页 <a class="header-anchor" href="#代码标签页" aria-hidden="true">#</a></h2><ul><li>输入:</li></ul><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js [config.js]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@type</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E5C07B;font-style:italic;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">config</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`ts [config.ts]</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">UserConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">UserConfig</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">config</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>渲染:</li></ul><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-CZyxh" id="tab-NKKXMfv" checked="checked"><label for="tab-NKKXMfv">config.js</label><input type="radio" name="group-CZyxh" id="tab-6ayuU2Y"><label for="tab-6ayuU2Y">config.ts</label></div><div class="blocks"><div class="language-js active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@type</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E5C07B;font-style:italic;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">config</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">UserConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">UserConfig</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">config</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div><h2 id="引入其他md文件中的内容" tabindex="-1">引入其他md文件中的内容 <a class="header-anchor" href="#引入其他md文件中的内容" aria-hidden="true">#</a></h2><ul><li>语法: <code>&lt;!--@include: [文件路径]--&gt;</code></li><li><a href="./index">跳转文档主页</a></li><li>渲染:</li></ul><hr><h2 id="layout-doc" tabindex="-1">layout: doc <a class="header-anchor" href="#layout-doc" aria-hidden="true">#</a></h2><h1 id="文档主页" tabindex="-1">文档主页 <a class="header-anchor" href="#文档主页" aria-hidden="true">#</a></h1>`,46);function d(n,y,b,u,m,F){return r(),l("div",null,[s("h1",i,[p(e(n.$frontmatter.title)+" ",1),t]),B])}const g=a(c,[["render",d]]);export{A as __pageData,g as default};
