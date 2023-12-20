import{_ as n,o as e,c as s,a as i}from"./app-E-cEvfoH.js";const a={},l=i(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><ul><li>轻量级HTTP服务器，事件驱动的异步非阻塞处理方式，具有极好的IO性能，用于服务端的反向代理和负载均衡</li><li>静态服务首选nginx</li></ul><h2 id="搭建安装" tabindex="-1"><a class="header-anchor" href="#搭建安装" aria-hidden="true">#</a> 搭建安装</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 环境 --&gt;</span>
yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake openssl openssl-devel
yum -y install wget httpd-tools vim
<span class="token comment">&lt;!-- 配置nginx源地址 --&gt;</span>
<span class="token comment">&lt;!-- 创建nginx源配置文件，修改目录centos和7 --&gt;</span>
vi /etc/yum.repos.d/nginx.repo
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/gpgcheck=0
enabled=1
<span class="token comment">&lt;!-- 编辑好文件后安装 --&gt;</span>
yum install nginx -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 查询nginx安装目录 --&gt;</span>
rpm -q nginx
<span class="token comment">&lt;!-- 启动服务 --&gt;</span>
systemctl start nginx
<span class="token comment">&lt;!-- 查看端口号 --&gt;</span>
ps -ef | grep nginx
netstat -lnp 80
<span class="token comment">&lt;!-- 关闭服务 --&gt;</span>
systemctl stop nginx
<span class="token comment">&lt;!-- 修改配置文件 --&gt;</span>
cd /etc/nginx/
cat nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>外网ip来访问页面</li></ul>`,7),d=[l];function c(t,r){return e(),s("div",null,d)}const o=n(a,[["render",c],["__file","nginx.html.vue"]]);export{o as default};
