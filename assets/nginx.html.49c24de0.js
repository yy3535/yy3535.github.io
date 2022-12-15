import{_ as n,o as e,c as s,a as i}from"./app.e4556a3b.js";const a={},l=i(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><ul><li>\u8F7B\u91CF\u7EA7HTTP\u670D\u52A1\u5668\uFF0C\u4E8B\u4EF6\u9A71\u52A8\u7684\u5F02\u6B65\u975E\u963B\u585E\u5904\u7406\u65B9\u5F0F\uFF0C\u5177\u6709\u6781\u597D\u7684IO\u6027\u80FD\uFF0C\u7528\u4E8E\u670D\u52A1\u7AEF\u7684\u53CD\u5411\u4EE3\u7406\u548C\u8D1F\u8F7D\u5747\u8861</li><li>\u9759\u6001\u670D\u52A1\u9996\u9009nginx</li></ul><h2 id="\u642D\u5EFA\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u5B89\u88C5" aria-hidden="true">#</a> \u642D\u5EFA\u5B89\u88C5</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u73AF\u5883 --&gt;</span>
yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake openssl openssl-devel
yum -y install wget httpd-tools vim
<span class="token comment">&lt;!-- \u914D\u7F6Enginx\u6E90\u5730\u5740 --&gt;</span>
<span class="token comment">&lt;!-- \u521B\u5EFAnginx\u6E90\u914D\u7F6E\u6587\u4EF6\uFF0C\u4FEE\u6539\u76EE\u5F55centos\u548C7 --&gt;</span>
vi /etc/yum.repos.d/nginx.repo
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/gpgcheck=0
enabled=1
<span class="token comment">&lt;!-- \u7F16\u8F91\u597D\u6587\u4EF6\u540E\u5B89\u88C5 --&gt;</span>
yum install nginx -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u67E5\u8BE2nginx\u5B89\u88C5\u76EE\u5F55 --&gt;</span>
rpm -q nginx
<span class="token comment">&lt;!-- \u542F\u52A8\u670D\u52A1 --&gt;</span>
systemctl start nginx
<span class="token comment">&lt;!-- \u67E5\u770B\u7AEF\u53E3\u53F7 --&gt;</span>
ps -ef | grep nginx
netstat -lnp 80
<span class="token comment">&lt;!-- \u5173\u95ED\u670D\u52A1 --&gt;</span>
systemctl stop nginx
<span class="token comment">&lt;!-- \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 --&gt;</span>
cd /etc/nginx/
cat nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5916\u7F51ip\u6765\u8BBF\u95EE\u9875\u9762</li></ul>`,7),d=[l];function c(t,r){return e(),s("div",null,d)}var v=n(a,[["render",c],["__file","nginx.html.vue"]]);export{v as default};
