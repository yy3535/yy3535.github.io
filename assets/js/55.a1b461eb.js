(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{482:function(n,t,e){"use strict";e.r(t);var s=e(45),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" Nginx")]),n._v(" "),e("ul",[e("li",[n._v("轻量级HTTP服务器，事件驱动的异步非阻塞处理方式，具有极好的IO性能，用于服务端的反向代理和负载均衡")]),n._v(" "),e("li",[n._v("静态服务首选nginx")])]),n._v(" "),e("h2",{attrs:{id:"搭建安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建安装"}},[n._v("#")]),n._v(" 搭建安装")]),n._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 环境 --\x3e")]),n._v("\nyum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake openssl openssl-devel\nyum -y install wget httpd-tools vim\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 配置nginx源地址 --\x3e")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 创建nginx源配置文件，修改目录centos和7 --\x3e")]),n._v("\nvi /etc/yum.repos.d/nginx.repo\n[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/$basearch/gpgcheck=0\nenabled=1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 编辑好文件后安装 --\x3e")]),n._v("\nyum install nginx -y\n")])])]),e("h2",{attrs:{id:"基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[n._v("#")]),n._v(" 基本配置")]),n._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 查询nginx安装目录 --\x3e")]),n._v("\nrpm -q nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 启动服务 --\x3e")]),n._v("\nsystemctl start nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 查看端口号 --\x3e")]),n._v("\nps -ef | grep nginx\nnetstat -lnp 80\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 关闭服务 --\x3e")]),n._v("\nsystemctl stop nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- 修改配置文件 --\x3e")]),n._v("\ncd /etc/nginx/\ncat nginx.conf\n")])])]),e("ul",[e("li",[n._v("外网ip来访问页面")])])])}),[],!1,null,null,null);t.default=a.exports}}]);