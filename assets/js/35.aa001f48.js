(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{354:function(s,t,a){"use strict";a.r(t);var r=a(4),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("给其他命令传递参数的一个过滤器")])]),s._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" options")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-n")]),s._v(": 多行输出,如 "),t("code",[s._v("n2")])]),s._v(" "),t("li",[t("code",[s._v("-d")]),s._v(": 可以自定义一个定界符")]),s._v(" "),t("li",[t("code",[s._v("-I")]),s._v(": 指定一个替换字符串通常为 "),t("code",[s._v("{}")]),s._v(", 这个字符串在 xargs 扩展时会被替换掉, 当 -I 与 xargs 结合使用")]),s._v(" "),t("li",[t("code",[s._v("-t")]),s._v(": 打印出 xargs 执行的命令")]),s._v(" "),t("li",[t("code",[s._v("-p")]),s._v(": 选项确认执行的命令")])]),s._v(" "),t("h2",{attrs:{id:"case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#case"}},[s._v("#")]),s._v(" case")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("fd -e zip -0 | xargs -0 -I {} -t tar xvf {}")]),s._v(": 解压全部文件")]),s._v(" "),t("li",[t("code",[s._v("ls -d */ | grep iOS | xargs -I {} sh -c 'cd {} && git fetch && git pull'")]),s._v(": 通过 git 更新符合特定特征的目录")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("通过 git 打印符合特定特征的目录的当前分支")]),s._v(" "),t("p",[t("code",[s._v("ls -d */ | grep iOS | xargs -I {} sh -c 'cd {} && _current=$(git symbolic-ref --short HEAD) && echo {}: $_current'")])])]),s._v(" "),t("li",[t("p",[s._v("批量切换到固定 branch")]),s._v(" "),t("p",[t("code",[s._v("ls -d */ | grep iOS | xargs -I {} sh -c 'cd {} && git fetch && git pull && git checkout <branch>")])])]),s._v(" "),t("li",[t("p",[s._v("删除 "),t("code",[s._v("*.log")]),s._v(" 文件")]),s._v(" "),t("p",[t("code",[s._v('find . -type f -name "*.log" -print0 | xargs -0 rm -f')])])]),s._v(" "),t("li",[t("p",[s._v("统计一个源代码目录中所有 php 文件的行数. 并找出最大行的文件")]),s._v(" "),t("p",[t("code",[s._v('find . -type f -name "*.php" -print0 | xargs -0 wc -l | sort -r | head -1')])])]),s._v(" "),t("li",[t("p",[s._v("希望下载多个 URL")])])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("cat url-list.txt | xargs wget -c")])])]),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("p",[s._v("读取配置文件, 对各个内容操作")]),s._v(" "),t("p",[t("code",[s._v("cat <file> | tr '\\n' '\\0' | xargs -0 -I {} -t echo {}")])])]),s._v(" "),t("li",[t("p",[s._v("查找所有的 jpg 文件, 并且压缩它们")])])]),s._v(" "),t("ul",[t("li",[t("code",[s._v('find ./docs -type f -name "*.md" -print0 | xargs -0 tar -czvf markdown.tar.gz')])])]),s._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[s._v("提取当前目录下所有的 git 项目的 remote url")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `2>/dev/null`: 忽略了错误信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"cd {} && git remote -v | awk 'NR==1{print \\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"10"}},[t("li",[s._v("xargs 执行 sh , 失败继续执行")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\0'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd {} && (echo {} && git fetch && git pull && git status || true)'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"11"}},[t("li",[s._v("从 git url 中批量提取目录")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\0'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\.git//'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"12"}},[t("li",[s._v("查看远程是否存在某一个分支")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\0'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd {} && (echo {} && git fetch && git ls-remote --heads origin xxx)'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);