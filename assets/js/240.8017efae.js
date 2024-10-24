(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{556:function(t,e,s){"use strict";s.r(e);var a=s(4),o=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("通过本地电脑作为代理给远程服务器访问")])]),t._v(" "),e("p",[t._v("可以通过本地电脑作为代理，帮助远程服务器访问外网。常见的方法是使用 SSH 隧道(SSH Tunnel)结合本地代理来实现。以下是一个实现思路:")]),t._v(" "),e("h2",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("blockquote",[e("p",[t._v("以7890作为端口转发为例子")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("ssh -R 7890:localhost:7890 ubuntu@<hostname/ip>")]),t._v(": 将远程服务器("),e("code",[t._v("<hostname/ip>")]),t._v(")的7890端口，通过SSH隧道映射到本地机器的7890端口。这样，远程服务器上的任何发往端口7890的流量都会通过SSH隧道被转发到你本地机器的端口7890")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("-R 7890:localhost:7890")]),t._v(": This is the option to set up a reverse tunnel. It tells SSH to forward the port on the remote server back to the local machine.\n"),e("ul",[e("li",[e("code",[t._v("-R")]),t._v(": The reverse tunnel option. It forwards a port from the remote server back to the local machine.")]),t._v(" "),e("li",[e("code",[t._v("7890:localhost:7890")]),t._v(": This means:\n"),e("ul",[e("li",[t._v("Forward traffic from port 7890 on the remote server ("),e("code",[t._v("<hostname/ip>")]),t._v(").")]),t._v(" "),e("li",[t._v("To "),e("code",[t._v("localhost:7890")]),t._v(" on the local machine (i.e., localhost is the machine from which you're initiating the SSH connection).")])])])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("在remote端，使网络走端口7890："),e("code",[t._v("export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890")])])]),t._v(" "),e("RText",{attrs:{text:"至此，remote端走7890的端口请求都会被转发到本地的7890端口， 而本地7890端口就是VPN服务端口，从而实现网络翻墙"}}),t._v(" "),e("h2",{attrs:{id:"issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issue"}},[t._v("#")]),t._v(" issue")]),t._v(" "),e("h3",{attrs:{id:"远程服务器拒绝了连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程服务器拒绝了连接"}},[t._v("#")]),t._v(" 远程服务器拒绝了连接")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v(":localhost:7890 ubuntu@VM-4-9-ubuntu\nkex_exchange_identification: Connection closed by remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("\nConnection closed by "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);