(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{383:function(e,a,v){"use strict";v.r(a);var t=v(4),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" steps")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("brew install jenv")])]),e._v(" "),a("li",[a("code",[e._v("jenv add /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home")])]),e._v(" "),a("li",[a("code",[e._v("jenv versions")])]),e._v(" "),a("li",[a("code",[e._v("jenv global oracle64-1.6.0.39")])]),e._v(" "),a("li",[a("code",[e._v("jenv local oracle64-1.6.0.39")])])]),e._v(" "),a("h2",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" other")]),e._v(" "),a("h3",{attrs:{id:"rehash-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rehash-的作用"}},[e._v("#")]),e._v(" rehash 的作用")]),e._v(" "),a("p",[a("code",[e._v("jenv rehash")]),e._v(" 是 jenv 工具的一个命令, 用于重新生成 Java 版本的符号链接(symlinks)。当您安装新的 Java 版本或者切换 Java 版本时, 执行 jenv rehash 可以确保 jenv 能够找到并使用新的 Java 版本。")]),e._v(" "),a("p",[e._v("具体来说, jenv 使用符号链接来管理不同的 Java 版本。每当您安装新的 Java 版本或者在系统中切换 Java 版本时, jenv 需要更新符号链接以指向正确的 Java 可执行文件。jenv rehash 命令的作用就是重新生成这些符号链接, 以便它们正确地指向当前所选的 Java 版本。")]),e._v(" "),a("p",[e._v("通常, 当您在系统中安装新的 Java 版本时, jenv 会自动执行 rehash 操作, 以确保新版本可用。但是, 有时可能需要手动执行 jenv rehash 命令, 特别是在您手动管理 Java 安装或者进行自定义配置时。执行此命令后, jenv 将会检查已安装的 Java 版本并更新符号链接, 以确保可以正常使用它们。")]),e._v(" "),a("p",[e._v("总之, jenv rehash 是 jenv 的一个维护命令, 用于确保 Java 版本的正确管理和使用。")]),e._v(" "),a("h3",{attrs:{id:"autoinit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoinit"}},[e._v("#")]),e._v(" autoInit")]),e._v(" "),a("p",[a("code",[e._v('echo eval "$(jenv init -)" >> $HOME/.zshrc')])]),e._v(" "),a("p",[e._v("这个命令是将 jenv 的初始化命令附加到您的 "),a("code",[e._v("~/.zshrc")]),e._v(" 文件中, 以便在每次打开新终端会话时自动初始化 jenv。")]),e._v(" "),a("p",[e._v("具体来说, 命令的含义如下:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("echo")]),e._v(" 用于输出文本。")]),e._v(" "),a("li",[a("code",[e._v('eval "$(jenv init -)"')]),e._v(" 是执行 jenv 的初始化命令, 这个命令会设置环境变量以管理 Java 版本。")]),e._v(" "),a("li",[a("code",[e._v(">> $HOME/.zshrc")]),e._v(" 将输出追加到 ~/.zshrc 文件中。")])]),e._v(" "),a("p",[e._v("通过将这个命令添加到 ~/.zshrc 文件, 您可以确保在每次打开新终端窗口或会话时, jenv 会自动初始化, 从而允许您管理和切换不同的 Java 版本。")]),e._v(" "),a("p",[e._v("如果您使用的是 Bash shell, 您可以将相同的命令添加到 ~/.bashrc 或 ~/.bash_profile 文件中, 以便在 Bash 终端中自动初始化 jenv。")]),e._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[e._v("#")]),e._v(" 链接")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/jenv/jenv",target:"_blank",rel:"noopener noreferrer"}},[e._v("jenv-github"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jenv.be/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jenv"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://geeknote.net/wick/posts/2354",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac 使用 Jenv 实现 Jdk 多版本管理"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);