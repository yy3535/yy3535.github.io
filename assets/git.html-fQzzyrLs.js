import{_ as l,r as s,o as n,c as r,b as i,d as a,e as t,a as o}from"./app-E-cEvfoH.js";const p={},c=i("h1",{id:"git",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),a(" git")],-1),d=i("h2",{id:"参考文档",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),a(" 参考文档")],-1),h={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},m=o(`<h2 id="新建代码库" tabindex="-1"><a class="header-anchor" href="#新建代码库" aria-hidden="true">#</a> 新建代码库</h2><ul><li><p>在当前目录新建一个Git代码库 $ git init</p></li><li><p>新建一个目录，将其初始化为Git代码库 $ git init [project-name]</p></li><li><p>下载一个项目和它的整个代码历史 $ git clone [url]</p></li></ul><h2 id="二、配置" tabindex="-1"><a class="header-anchor" href="#二、配置" aria-hidden="true">#</a> 二、配置</h2><p>Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</p><ul><li><p>显示当前的Git配置 $ git config --list</p></li><li><p>编辑Git配置文件 $ git config -e [--global]</p></li><li><p>设置提交代码时的用户信息 $ git config [--global] user.name &quot;[name]&quot; $ git config [--global] user.email &quot;[email address]&quot;</p></li></ul><h2 id="三、增加-删除文件" tabindex="-1"><a class="header-anchor" href="#三、增加-删除文件" aria-hidden="true">#</a> 三、增加/删除文件</h2><ul><li><p>添加指定文件到暂存区 $ git add [file1] [file2] ...</p></li><li><p>添加指定目录到暂存区，包括子目录 $ git add [dir]</p></li><li><p>添加当前目录的所有文件到暂存区 $ git add .</p></li><li><p>添加每个变化前，都会要求确认</p></li><li><p>对于同一个文件的多处变化，可以实现分次提交 $ git add -p</p></li><li><p>删除工作区文件，并且将这次删除放入暂存区 $ git rm [file1] [file2] ...</p></li><li><p>停止追踪指定文件，但该文件会保留在工作区 $ git rm --cached [file]</p></li><li><p>改名文件，并且将这个改名放入暂存区 $ git mv [file-original] [file-renamed]</p></li></ul><h2 id="四、代码提交" tabindex="-1"><a class="header-anchor" href="#四、代码提交" aria-hidden="true">#</a> 四、代码提交</h2><ul><li><p>提交暂存区到仓库区 $ git commit -m [message]</p></li><li><p>提交暂存区的指定文件到仓库区 $ git commit [file1] [file2] ... -m [message]</p></li><li><p>提交工作区自上次commit之后的变化，直接到仓库区 $ git commit -a</p></li><li><p>提交时显示所有diff信息 $ git commit -v</p></li><li><p>使用一次新的commit，替代上一次提交</p></li><li><p>如果代码没有任何新变化，则用来改写上一次commit的提交信息 $ git commit --amend -m [message]</p></li><li><p>重做上一次commit，并包括指定文件的新变化 $ git commit --amend [file1] [file2] ...</p></li></ul><h2 id="五、分支" tabindex="-1"><a class="header-anchor" href="#五、分支" aria-hidden="true">#</a> 五、分支</h2><ul><li><p>列出所有本地分支 $ git branch</p></li><li><p>列出所有远程分支 $ git branch -r</p></li><li><p>列出所有本地分支和远程分支 $ git branch -a</p></li><li><p>从远程某个分支拉取一个新分支 $ git checkout -b newbranch origin/oldbranchname</p></li><li><p>新建一个分支，但依然停留在当前分支 $ git branch [branch-name]</p></li><li><p>新建一个分支，并切换到该分支 $ git checkout -b [branch]</p></li><li><p>新建一个分支，指向指定commit $ git branch [branch] [commit]</p></li><li><p>新建一个分支，与指定的远程分支建立追踪关系 $ git branch --track [branch] [remote-branch]</p></li><li><p>切换到指定分支，并更新工作区 $ git checkout [branch-name]</p></li><li><p>切换到上一个分支 $ git checkout -</p></li><li><p>建立追踪关系，在现有分支与指定的远程分支之间 $ git branch --set-upstream [branch] [remote-branch]</p></li><li><p>合并指定分支到当前分支 $ git merge [branch]</p></li><li><p>取消merge状态 $ git merge --abort</p></li><li><p>选择一个commit，合并进当前分支 $ git cherry-pick [commit]</p></li><li><p>删除分支 $ git branch -d [branch-name]</p></li><li><p>删除远程分支 $ git push origin --delete [branch-name] $ git branch -dr [remote/branch]</p></li></ul><h2 id="六、标签" tabindex="-1"><a class="header-anchor" href="#六、标签" aria-hidden="true">#</a> 六、标签</h2><ul><li><p>列出所有tag $ git tag</p></li><li><p>新建一个tag在当前commit $ git tag [tag]</p></li><li><p>新建一个tag在指定commit $ git tag [tag] [commit]</p></li><li><p>删除本地tag $ git tag -d [tag]</p></li><li><p>删除远程tag $ git push origin :refs/tags/[tagName]</p></li><li><p>查看tag信息 $ git show [tag]</p></li><li><p>提交指定tag $ git push [remote] [tag]</p></li><li><p>提交所有tag $ git push [remote] --tags</p></li><li><p>新建一个分支，指向某个tag $ git checkout -b [branch] [tag]</p></li></ul><h2 id="七、查看信息" tabindex="-1"><a class="header-anchor" href="#七、查看信息" aria-hidden="true">#</a> 七、查看信息</h2><ul><li><p>显示有变更的文件 $ git status</p></li><li><p>显示当前分支的版本历史 $ git log</p></li><li><p>显示commit历史，以及每次commit发生变更的文件 $ git log --stat</p></li><li><p>搜索提交历史，根据关键词 $ git log -S [keyword]</p></li><li><p>显示某个commit之后的所有变动，每个commit占据一行 $ git log [tag] HEAD --pretty=format:%s</p></li><li><p>显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件 $ git log [tag] HEAD --grep feature</p></li><li><p>显示某个文件的版本历史，包括文件改名 $ git log --follow [file] $ git whatchanged [file]</p></li><li><p>显示指定文件相关的每一次diff $ git log -p [file]</p></li><li><p>显示过去5次提交 $ git log -5 --pretty --oneline</p></li><li><p>显示所有提交过的用户，按提交次数排序 $ git shortlog -sn</p></li><li><p>显示指定文件是什么人在什么时间修改过 $ git blame [file]</p></li><li><p>显示暂存区和工作区的差异 $ git diff</p></li><li><p>显示暂存区和上一个commit的差异 $ git diff --cached [file]</p></li><li><p>显示工作区与当前分支最新commit之间的差异 $ git diff HEAD</p></li><li><p>显示两次提交之间的差异 $ git diff [first-branch]...[second-branch]</p></li><li><p>显示今天你写了多少行代码 $ git diff --shortstat &quot;@{0 day ago}&quot;</p></li><li><p>显示某次提交的元数据和内容变化 $ git show [commit]</p></li><li><p>显示某次提交发生变化的文件 $ git show --name-only [commit]</p></li><li><p>显示某次提交时，某个文件的内容 $ git show [commit]:[filename]</p></li><li><p>显示当前分支的最近几次提交 $ git reflog</p></li></ul><h2 id="八、远程同步" tabindex="-1"><a class="header-anchor" href="#八、远程同步" aria-hidden="true">#</a> 八、远程同步</h2><ul><li><p>下载远程仓库的所有变动 $ git fetch [remote]</p></li><li><p>修剪远程分支(删除被其它终端删除了的远程分支) $ git remote prune origin</p></li><li><p>显示所有远程仓库 $ git remote -v</p></li><li><p>显示某个远程仓库的信息 $ git remote show [remote]</p></li><li><p>增加一个新的远程仓库，并命名 $ git remote add [shortname] [url]</p></li><li><p>取回远程仓库的变化，并与本地分支合并 $ git pull [remote] [branch]</p></li><li><p>上传本地指定分支到远程仓库 $ git push [remote] [branch]</p></li><li><p>强行推送当前分支到远程仓库，即使有冲突 $ git push [remote] --force</p></li><li><p>推送所有分支到远程仓库 $ git push [remote] --all</p></li></ul><h2 id="九、撤销" tabindex="-1"><a class="header-anchor" href="#九、撤销" aria-hidden="true">#</a> 九、撤销</h2><ul><li><p>撤销上一个commit,但保留代码在暂存区，不撤销git add git reset --soft HEAD^</p></li><li><p>恢复暂存区的指定文件到工作区 $ git checkout [file]</p></li><li><p>恢复某个commit的指定文件到暂存区和工作区 $ git checkout [commit] [file]</p></li><li><p>恢复暂存区的所有文件到工作区 $ git checkout .</p></li><li><p>重置暂存区的指定文件，与上一次commit保持一致，但工作区不变 $ git reset [file]</p></li><li><p>重置暂存区与工作区，与上一次commit保持一致 $ git reset --hard</p></li><li><p>重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变 $ git reset [commit]</p></li><li><p>重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致 $ git reset --hard [commit]</p></li><li><p>重置当前HEAD为指定commit，但保持暂存区和工作区不变 $ git reset --keep [commit]</p></li><li><p>新建一个commit，用来撤销指定commit</p></li><li><p>后者的所有变化都将被前者抵消，并且应用到当前分支 $ git revert [commit]</p></li><li><p>暂时将未提交的变化移除，稍后再移入 $ git stash $ git stash save &quot;save message&quot; 备注名 $ git stash pop $ git stash list $ git stash apply stash@{$num} 应用某个存储,但不会把存储从存储列表中删除 $ git stash drop stash@{$num} 丢弃stash@{$num}存储，从列表中删除这个存储 $ git stash clear 删除所有缓存的stash</p></li></ul><h2 id="十、其他" tabindex="-1"><a class="header-anchor" href="#十、其他" aria-hidden="true">#</a> 十、其他</h2><ul><li>生成一个可供发布的压缩包</li></ul><p>$ git archive</p><h2 id="git-flog" tabindex="-1"><a class="header-anchor" href="#git-flog" aria-hidden="true">#</a> git flog</h2><p>查找历史版本记录，方便回滚</p><h2 id="git-放弃本地修改-强行拉取更新-慎用" tabindex="-1"><a class="header-anchor" href="#git-放弃本地修改-强行拉取更新-慎用" aria-hidden="true">#</a> git 放弃本地修改，强行拉取更新(慎用)</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git fetch <span class="token operator">--</span>all
git reset <span class="token operator">--</span>hard origin<span class="token operator">/</span>master
git pull <span class="token comment">//可以省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-reset-hard恢复操作" tabindex="-1"><a class="header-anchor" href="#git-reset-hard恢复操作" aria-hidden="true">#</a> git reset --hard恢复操作</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 所有commit过的操作，最后commit的在最上面0的位置上</span>
git reflog
<span class="token comment">// 恢复commmit的文件</span>
git reset <span class="token operator">--</span>hard 98abc5a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载某个版本" tabindex="-1"><a class="header-anchor" href="#下载某个版本" aria-hidden="true">#</a> 下载某个版本</h2><p>git log 查看版本号 git checkout b74be8e78ff*****0a15d04967（版本号）</p><h2 id="git提交时出现non-fast-forward冲突" tabindex="-1"><a class="header-anchor" href="#git提交时出现non-fast-forward冲突" aria-hidden="true">#</a> git提交时出现non-fast-forward冲突</h2><ul><li>原因 <ul><li>git仓库已有部分代码，不允许直接代码覆盖</li></ul></li><li>方式 <ul><li>强制用本地代码覆盖git仓库内容 <ul><li>git push -f</li></ul></li><li>先把git的东西fetch到本地然后merge再commit push上去 <ul><li>git fetch</li><li>git merge(输完去文件中解决冲突)</li><li>git add .</li><li>git commit -m -a</li><li>git push origin master</li></ul></li></ul></li></ul><h2 id="npm-install-出现-chromedriver-installation-failed-error-with-http-s-request-error-read-etimedout" tabindex="-1"><a class="header-anchor" href="#npm-install-出现-chromedriver-installation-failed-error-with-http-s-request-error-read-etimedout" aria-hidden="true">#</a> npm install 出现 ChromeDriver installation failed Error with http(s) request: Error: read ETIMEDOUT</h2><ul><li>执行 npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver</li></ul><h2 id="git下载缓慢解决办法" tabindex="-1"><a class="header-anchor" href="#git下载缓慢解决办法" aria-hidden="true">#</a> git下载缓慢解决办法</h2><ul><li>更改hosts文件</li></ul><ol><li><p>查询网站的IP地址，进入<img src="http://tool.chinaz.com/dns" alt="dns">，输入 <code>github.com</code>，选择一个TTL值较小的IP地址，比如，我们选择图中美国的192.30.253.113；</p></li><li><p>打开电脑的 <code>C:\\Windows\\System32\\drivers\\etc</code> 目录，找到hosts文件:这里有两个hosts文件，用记事本打开上面的那个进行编辑。在文件末追加 192.30.253.113 github.com，并采用相同的方式追加并采用相同的方式追加151.101.109.194 github.global.ssl.fastly.Net 注意：前面没有“#”号！</p></li><li><p>刷新DNS缓存，在Windows命令行中输入：<code>ipconfig /flushdns</code></p></li><li><p>再重新输入<code>git clone https://github.com/opencv/opencv_contrib/</code>,可以看到下载速度得到明显提升,相应的文件也很快下载完毕。</p></li></ol><p>mac host /etc/hosts</p><h2 id="git-ssh配置" tabindex="-1"><a class="header-anchor" href="#git-ssh配置" aria-hidden="true">#</a> git ssh配置</h2><p>1.检查是否已经有SSH Key。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$cd /.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.生成一个新的SSH。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &quot;email@github.com&quot; #github注册的邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后直接回车，不用填写东西。之后会让你输入密码（可以不输入密码，直接为空，这样更新代码不用每次输入 id_rsa 密码了）。然后就生成一个目录.ssh ，里面有两个文件：id_rsa , id_rsa.pub（id_rsa中保存的是私钥，id_rsa.pub中保存的是公钥） 3.按命令行提示找到公钥地址。跳转文件夹是访达菜单中的前往-前往文件夹，显示隐藏文件夹按<code>shift+command+.</code>。文件权限右击文件-显示简介-解锁-修改为只读。将公钥复制到github上。 4. <code>ssh -T git@github.com</code>测试，显示success则配置成功可以clone了 5. 显示<code>Permission denied(publickey)</code>，使用<code>ssh -vT git@github.com</code>来查看错误log，注意其中的查找公钥地址。将公钥复制到它查找的地址中即可。</p><h3 id="统计代码量" tabindex="-1"><a class="header-anchor" href="#统计代码量" aria-hidden="true">#</a> 统计代码量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git log <span class="token operator">--</span>format<span class="token operator">=</span><span class="token string">&#39;%aN&#39;</span> <span class="token operator">|</span> sort <span class="token operator">-</span>u <span class="token operator">|</span> <span class="token keyword">while</span> read name<span class="token punctuation">;</span> <span class="token keyword">do</span> echo <span class="token operator">-</span>en <span class="token string">&quot;$name\\t&quot;</span><span class="token punctuation">;</span> git log  <span class="token operator">--</span>since<span class="token operator">=</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token operator">--</span>until<span class="token operator">=</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">31</span> <span class="token operator">--</span>author<span class="token operator">=</span><span class="token string">&quot;$name&quot;</span> <span class="token operator">--</span>pretty<span class="token operator">=</span>tformat<span class="token operator">:</span> <span class="token operator">--</span>numstat <span class="token operator">|</span> awk <span class="token string">&#39;{ add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span> <span class="token operator">-</span><span class="token punctuation">;</span> done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,46);function u(b,f){const e=s("ExternalLinkIcon");return n(),r("div",null,[c,d,i("ul",null,[i("li",null,[i("a",h,[a("阮一峰：常用命令清单"),t(e)])]),i("li",null,[i("a",g,[a("git book"),t(e)])])]),m])}const k=l(p,[["render",u],["__file","git.html.vue"]]);export{k as default};