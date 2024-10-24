(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{343:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variable"}},[s._v("#")]),s._v(" Variable")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("$HOME")])])]),s._v(" "),t("h2",{attrs:{id:"common"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[s._v("#")]),s._v(" common")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('printf "%x\\n" <102>')]),s._v(": 转成 16 进制")]),s._v(" "),t("li",[t("code",[s._v("mktemp")]),s._v(": 创建临时文件")])]),s._v(" "),t("h3",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[s._v("#")]),s._v(" config")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("set -o vi")]),s._v(": bash vi 模式. 后续光标移动就跟 vi 模式一样了。 "),t("RouterLink",{attrs:{to:"/pages/89d231/#光标"}},[s._v("vim 光标")])],1)]),s._v(" "),t("h3",{attrs:{id:"父子shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父子shell"}},[s._v("#")]),s._v(" 父子shell")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在 shell 脚本中, 你可以运行一系列命令, 这些命令按照你编写的顺序执行。每个命令都在父 Shell 的上下文中执行。")])]),s._v(" "),t("li",[t("p",[s._v("如果你使用管道 "),t("code",[s._v("|")]),s._v(" 来连接命令, 例如 "),t("code",[s._v("cmd1 | cmd2 | cmd3")]),s._v(", 这表示 cmd1 的输出会成为 cmd2 的输入, cmd2 的输出会成为 cmd3 的输入。")])]),s._v(" "),t("li",[t("p",[s._v("圆括号 "),t("code",[s._v("()")]),s._v(" 可以用来创建一个子 Shell, 其中可以包含一系列命令。子 Shell 是在父 Shell 内部运行的, 但它有自己的独立环境, 包括变量。如果你在子 Shell 中执行 "),t("code",[s._v("cd /")]),s._v(" 命令来改变工作目录, 这个改变只会在子 Shell 内部生效, 不会影响到父 Shell 或后续的命令。子 Shell 中定义的变量也是局部变量, 只在子 Shell 内部可见。")])]),s._v(" "),t("li",[t("p",[s._v("最后, 子 Shell 在括号 "),t("code",[s._v("()")]),s._v(" 内部的命令序列会被依次执行, 然后它的输出可以被父 Shell 或后续命令使用。")])])]),s._v(" "),t("p",[s._v("这个概念对于在 shell 脚本中控制命令的执行流程和作用域非常重要。子 Shell 可以用来隔离一些操作, 以免影响到整个脚本的环境。")]),s._v(" "),t("h3",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[s._v("#")]),s._v(" path")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 这会将 $ANDROID_BUILD_TOOL/bin 路径添加到当前 PATH 环境变量的末尾. 如果 $ANDROID_BUILD_TOOL 变量未定义，这将不起作用，或可能会导致错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("export PATH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("$PATH:$ANDROID_BUILD_TOOL/bin")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 这会将 /usr/local/opt/postgresql@16/bin 路径添加到当前 PATH 环境变量的开头。这样做的好处是，新的路径会优先于其他路径。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("export PATH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"/usr/local/opt/postgresql@16/bin:$PATH')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"进程替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程替换"}},[s._v("#")]),s._v(" 进程替换")]),s._v(" "),t("p",[t("code",[s._v("<(...)")]),s._v(" 语法是进程替换，允许将命令输出作为文件传递给另一个命令")]),s._v(" "),t("h2",{attrs:{id:"变量扩展语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量扩展语法"}},[s._v("#")]),s._v(" 变量扩展语法")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v(":\n"),t("code",[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v(" 是一种 Shell 变量扩展语法, 用于在命令中引用一个变量。在这个特定的命令中, "),t("code",[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v(" 表示一个变量, 它的值是 "),t("code",[s._v("$ZSH_CUSTOM")]),s._v(" 的值, 如果 "),t("code",[s._v("$ZSH_CUSTOM")]),s._v(" 未定义, 则使用默认值 "),t("code",[s._v("~/.oh-my-zsh/custom")]),s._v("。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("remote_name=${1:-origin}")]),s._v(":\n如果没有第一个参数, 则设置则使用默认值 origin")])])]),s._v(" "),t("h2",{attrs:{id:"here-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-tag"}},[s._v("#")]),s._v(" Here Tag")]),s._v(" "),t("blockquote",[t("p",[s._v("参考文档: "),t("a",{attrs:{href:"https://tldp.org/LDP/abs/html/here-docs.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Here Documents"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("在 Linux 中, "),t("code",[s._v("<<")]),s._v("(称为 Here Document 或 Here Tag)是一种用于"),t("RText",{attrs:{text:"输入多行文本的特殊语法"}}),s._v("。它允许将一段文本作为输入传递给命令或脚本, 而无需使用外部文件。")],1),s._v(" "),t("p",[s._v("具体来说, <<后面可以跟一个标识符(tag), 用于标识输入的结束。输入文本的开始和结束都由这个标识符来界定。使用<<时, 输入的文本会被 shell 进程处理, 然后传递给相应的命令或脚本。")]),s._v(" "),t("RText",{attrs:{text:"示例"}}),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("END\n这是一段\n多行文本输入,\n会被cat命令处理。\nEND")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("在上面的示例中, cat 命令接收"),t("code",[s._v("<< END")]),s._v(" 和 "),t("code",[s._v("END")]),s._v(" 之间的多行文本作为输入, 并将其输出到标准输出。")]),s._v(" "),t("p",[s._v("Here Document 的用途包括但不限于:")]),s._v(" "),t("ul",[t("li",[s._v("在脚本中嵌入大段的文本数据。")]),s._v(" "),t("li",[s._v("在命令行中直接输入多行文本, 而无需创建临时文件。")]),s._v(" "),t("li",[s._v("在配置文件或模板中插入变量和文本。")])]),s._v(" "),t("p",[s._v("需要注意的是, "),t("code",[s._v("tag")]),s._v(" 可以是用户自定义的标识符, 只要它在输入文本中没有被使用即可。通常, "),t("code",[s._v("tag")]),s._v(" 以大写字母开头, 但并不是强制要求。")]),s._v(" "),t("hr"),s._v(" "),t("RText",{attrs:{text:"cat 多行文本写入"}}),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" END"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("config.pbtx\n这是一段\n多行文本输入,\n会被 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" 命令处理。\nEND\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("作用解释如下:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("<< END")]),s._v(" 开始了一个 "),t("code",[s._v("Here Document")]),s._v(" 区块, END 是结束标记。你可以自行选择合适的结束标记, 只要它在文本中没有出现即可。")]),s._v(" "),t("li",[s._v("在开始标记和结束标记之间的所有文本都将被传递给 cat 命令。")]),s._v(" "),t("li",[s._v("这个多行文本被写入名为 config.pbtx 的文件。")])]),s._v(" "),t("p",[s._v("三、赋值多行字符串给变量")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\n这是一段\n多行文本输入,\n会被cat命令处理。\nEOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$info")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"输出重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出重定向"}},[s._v("#")]),s._v(" 输出重定向")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("<command> 2>/dev/null")]),s._v(": 将 "),t("code",[s._v("stderr")]),s._v(" 重定向到 "),t("code",[s._v("/dev/null")]),s._v(", 从而禁止错误信息的显示")]),s._v(" "),t("li",[t("code",[s._v("<command> > /dev/null 2>&1")]),s._v(": 将 "),t("code",[s._v("stdout")]),s._v(" 和 "),t("code",[s._v("stderr")]),s._v(" 都重定向到"),t("code",[s._v("/dev/null")]),s._v(", 使得没有输出到终端")])]),s._v(" "),t("RText",{attrs:{text:"`2>&1` 的说明"}}),s._v(" "),t("p",[s._v("是一种 Shell 中的标准输出(stdout)和标准错误输出(stderr)重定向的语法。这个语法的作用是将标准错误输出重定向到标准输出, 这样两者都将合并在一起输出到同一个地方。")]),s._v(" "),t("p",[s._v("具体解释如下:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("2")]),s._v(" 表示标准错误输出(stderr)的文件描述符。")]),s._v(" "),t("li",[t("code",[s._v(">")]),s._v(" 是重定向操作符, 用于将输出重定向到指定位置。")]),s._v(" "),t("li",[t("code",[s._v("&1")]),s._v(" 表示标准输出(stdout)的文件描述符。这里的&表示引用。")])]),s._v(" "),t("h2",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" string")]),s._v(" "),t("blockquote",[t("p",[s._v("字符串处理, 更多"),t("a",{attrs:{href:"https://blog.csdn.net/dongwuming/article/details/50605911",target:"_blank",rel:"noopener noreferrer"}},[s._v("可见"),t("OutboundLink")],1)])]),s._v(" "),t("RText",{attrs:{text:"操作"}}),s._v(" "),t("ul",[t("li",[t("code",[s._v("${#string}")]),s._v(": 求"),t("code",[s._v("$string")]),s._v("的长度")]),s._v(" "),t("li",[t("code",[s._v("${string:position}")]),s._v(": 在"),t("code",[s._v("$string")]),s._v(" 中, 从位置"),t("code",[s._v("$position")]),s._v("开始提取子串")]),s._v(" "),t("li",[t("code",[s._v("${string:position:length}")]),s._v(": 在"),t("code",[s._v("$string")]),s._v(" 中, 从位置"),t("code",[s._v("$position")]),s._v(" 开始提取长度为"),t("code",[s._v("$length")]),s._v(" 的子串")]),s._v(" "),t("li",[t("code",[s._v("${string#substring}")]),s._v(": 从变量"),t("code",[s._v("$string")]),s._v(" 的开头, 删除最短匹配"),t("code",[s._v("$substring")]),s._v(" 的子串")]),s._v(" "),t("li",[t("code",[s._v("${string##substring}")]),s._v(": 从变量"),t("code",[s._v("$string")]),s._v(" 的开头, 删除最长匹配"),t("code",[s._v("$substring")]),s._v(" 的子串.\n"),t("ul",[t("li",[s._v("如在脚本中使用 "),t("code",[s._v("${0##*/}")]),s._v("  This pattern strips off the longest match of any characters ending with a forward slash from the beginning of the variable, effectively leaving just the script's name. (Todo)")])])]),s._v(" "),t("li",[t("code",[s._v("${string%substring}")]),s._v(": 从变量"),t("code",[s._v("$string")]),s._v(" 的结尾, 删除最短匹配"),t("code",[s._v("$substring")]),s._v(" 的子串")]),s._v(" "),t("li",[t("code",[s._v("${string%%substring}")]),s._v(": 从变量"),t("code",[s._v("$string")]),s._v(" 的结尾, 删除最长匹配"),t("code",[s._v("$substring")]),s._v(" 的子串")]),s._v(" "),t("li",[t("code",[s._v("${string/substring/replacement}")]),s._v(": 使用"),t("code",[s._v("$replacement")]),s._v(", 来代替第一个匹配的"),t("code",[s._v("$substring")])]),s._v(" "),t("li",[t("code",[s._v("${string//substring/replacement}")]),s._v(": 使用"),t("code",[s._v("$replacement")]),s._v(", 代替所有匹配的"),t("code",[s._v("$substring")])]),s._v(" "),t("li",[t("code",[s._v("${string/#substring/replacement}")]),s._v(": 如果"),t("code",[s._v("$string")]),s._v(" 的前缀匹配"),t("code",[s._v("$substring")]),s._v(", 那么就用$replacement 来代替匹配到的"),t("code",[s._v("$substring")])]),s._v(" "),t("li",[t("code",[s._v("${string/%substring/replacement}")]),s._v(": 如果"),t("code",[s._v("$string")]),s._v(" 的后缀匹配"),t("code",[s._v("$substring")]),s._v(", 那么就用$replacement 来代替匹配到的"),t("code",[s._v("$substring")])])]),s._v(" "),t("RText",{attrs:{text:"case"}}),s._v(" "),t("ul",[t("li",[t("code",[s._v('output_file="${file%.*}_compressed.jpg"')])])]),s._v(" "),t("p",[s._v("这是一个字符串操作, 用于删除字符串的后缀。在这里, "),t("code",[s._v("%.*")]),s._v(" 表示删除字符串中最右边的一个.(包括.本身)及其之后的所有字符。因此, "),t("code",[s._v("${file%.*}")]),s._v(" 将给出文件名的部分, 去除了扩展名。")]),s._v(" "),t("h2",{attrs:{id:"输出着色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出着色"}},[s._v("#")]),s._v(" 输出着色")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 带颜色的输出函数, 使用 ANSI 转义码来实现带颜色的输出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("color_echo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("["),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${color}")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${message}")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v('[0m"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 红色文本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("red")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n  color_echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0;31"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[s._v("#")]),s._v(" link")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("runoob.com"),t("OutboundLink")],1),s._v(" linux shell 学习\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell-basic-operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("运算符"),t("OutboundLink")],1),s._v(" : "),t("code",[s._v("-z")]),s._v(" 等")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell-process-control.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Shell 流程控制"),t("OutboundLink")],1)])])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);