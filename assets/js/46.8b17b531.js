(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{365:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"shortcut"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shortcut"}},[t._v("#")]),t._v(" shortcut")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("^ + cmd + F")]),t._v(": full screen")])]),t._v(" "),s("h2",{attrs:{id:"diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("comparing working tree with...")])])]),t._v(" "),s("h2",{attrs:{id:"prettier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" Prettier")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("//prettier-ignore")]),t._v(": 用的是 prettier 插件, 可以在代码上面一行加注释 "),s("code",[t._v("//prettier-ignore")]),t._v(" 可以使下面的代码块不被格式化")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("GitLens — Git supercharged")]),t._v(" 可视化 git blame 工具、浏览 git 仓库")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Prettier")])])])]),t._v(" "),s("h2",{attrs:{id:"禁用-md010-hard-tabs-检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用-md010-hard-tabs-检查"}},[t._v("#")]),t._v(" 禁用 MD010 - Hard tabs 检查")]),t._v(" "),s("p",[t._v("要在 VSCode 中禁用 MD010 - Hard tabs 检查, 你可以使用 Markdown All in One 扩展。这个扩展提供了很多功能, 包括对 Markdown 文件的语法检查。")]),t._v(" "),s("p",[t._v("下面是禁用 MD010 检查的步骤:")]),t._v(" "),s("p",[t._v('打开 VSCode。\n安装 Markdown All in One 扩展(如果尚未安装)。\n打开设置(快捷键: Ctrl + ,)。\n在搜索框中输入 "markdownlint config", 然后点击 "Edit in settings.json"。\n在 settings.json 文件中, 添加以下配置:')]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"markdownlint.config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MD010"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("这样就可以禁用 MD010 - Hard tabs 检查了。记得保存设置文件后重启 VSCode, 以确保更改生效。")]),t._v(" "),s("h2",{attrs:{id:"替换技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换技巧"}},[t._v("#")]),t._v(" 替换技巧")]),t._v(" "),s("p",[t._v("【问】vscode 中找到所有字母开头, 且截止到: 的行, 并将内容替换成如下格式:\n如: "),s("code",[t._v("abc: hhhh")]),t._v("\n替换后的格式为 "),s("code",[t._v("- **abc**: hhhh")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("打开要搜索的文件。")])]),t._v(" "),s("li",[s("p",[t._v('使用快捷键 Ctrl + H(或者在菜单中选择"编辑" > "查找" > "替换")来打开替换面板。')])]),t._v(" "),s("li",[s("p",[t._v("确保在替换面板上启用正则表达式搜索功能, 可以点击替换面板上的 "),s("code",[t._v(".*")]),t._v(" 按钮来切换到正则表达式模式。")])]),t._v(" "),s("li",[s("p",[t._v("在查找框中输入正则表达式 "),s("code",[t._v("^([^\\s]+.*):")]),t._v(", 这将匹配以非空字符串开头并以冒号结束的行。")])]),t._v(" "),s("li",[s("p",[t._v("在替换框中输入替换的格式: - "),s("strong",[t._v("$1")]),t._v(": , 其中 "),s("code",[t._v("$1")]),t._v(" 表示匹配到的内容, 并在冒号后加入空格。")])]),t._v(" "),s("li",[s("p",[t._v("点击替换按钮(或者按下 Alt + Enter), Visual Studio Code 会查找并替换匹配的文本。")])])]),t._v(" "),s("p",[t._v('如果您希望一次性替换所有匹配, 可以点击"全部替换"按钮。')]),t._v(" "),s("h2",{attrs:{id:"解决文件夹名称被错误地标记为红色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决文件夹名称被错误地标记为红色"}},[t._v("#")]),t._v(" 解决文件夹名称被错误地标记为红色")]),t._v(" "),s("p",[t._v("在 VSCode 中, 如果文件夹名称被错误地标记为红色并显示错误, 可以尝试以下方法来解决持续显示红色问题:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('重新加载窗口: 有时候 VSCode 可能会出现一些缓存或同步的问题, 重新加载窗口可以尝试解决这些问题。您可以通过侧边栏的"文件"菜单中选择"重新加载窗口"或者使用快捷键 Ctrl+Shift+P 并输入 Reload Window 来重新加载窗口。')])]),t._v(" "),s("li",[s("p",[t._v('清除工作区缓存: 您可以尝试清除 VSCode 工作区的缓存来解决问题。在 VSCode 中, 打开命令面板(Ctrl+Shift+P), 输入并选择"Developer: Reload Window with Extensions Disabled", 然后再次打开 VSCode。这样可以禁用所有扩展, 并且有时会解决一些缓存相关的问题。')])]),t._v(" "),s("li",[s("p",[t._v("检查文件夹名称: 确保文件夹名称实际上没有错误, 特别是在文件系统中检查一下是否存在任何大小写或拼写问题。")])]),t._v(" "),s("li",[s("p",[t._v("更新 VSCode 和扩展: 确保您的 VSCode 和相关的扩展都是最新版本, 以确保修复了可能存在的已知问题。")])]),t._v(" "),s("li",[s("p",[t._v("清除 VSCode 缓存: 有时候清除 VSCode 的缓存也可以解决一些问题。您可以在 VSCode 的命令面板中执行命令 Clear Editor History 来清除编辑器历史记录。")])])]),t._v(" "),s("p",[t._v("如果以上方法仍然无法解决问题, 可能需要进一步调查或尝试其他方法。您也可以查看 VSCode 的错误日志或扩展的输出信息, 以获得更多关于报错原因的线索。")]),t._v(" "),s("h2",{attrs:{id:"debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[t._v("#")]),t._v(" debug")]),t._v(" "),s("h3",{attrs:{id:"python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" python")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use IntelliSense to learn about possible attributes.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hover to view descriptions of existing attributes.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configurations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Python Debugger: Current File"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debugpy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"program"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${file}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"console"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"integratedTerminal"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pythonPath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/yingci/.pyenv/shims/python"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the path to your pyenv Python")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h2",{attrs:{id:"link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/debugging",target:"_blank",rel:"noopener noreferrer"}},[t._v("debug"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);