(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{385:function(a,s,t){"use strict";t.r(s);var r=t(4),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("Your shortcut to everything. 这里整理了一些文档链接")])]),a._v(" "),s("h2",{attrs:{id:"common"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[a._v("#")]),a._v(" common")]),a._v(" "),s("ol",[s("li",[a._v("install: "),s("code",[a._v("brew install --cask raycast")])])]),a._v(" "),s("h2",{attrs:{id:"dynamic-placeholder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-placeholder"}},[a._v("#")]),a._v(" dynamic placeholder")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://manual.raycast.com/dynamic-placeholders",target:"_blank",rel:"noopener noreferrer"}},[a._v("dynamic-placeholders"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[a._v("#")]),a._v(" extensions")]),a._v(" "),s("RText",{attrs:{text:"install from store"}}),a._v(" "),s("ul",[s("li",[a._v("点击 "),s("code",[a._v("+")])]),a._v(" "),s("li",[a._v("选择 "),s("code",[a._v("install from store")])])]),a._v(" "),s("h2",{attrs:{id:"create-script-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-script-command"}},[a._v("#")]),a._v(" create script command")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/raycast/script-commands",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/raycast/script-commands"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"使用script-command提升效率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用script-command提升效率"}},[a._v("#")]),a._v(" 使用script command提升效率")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 从剪贴板获取内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("clipboard_content")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pbpaste"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 以空格分割字符串")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("array")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$clipboard_content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 提取第一个元素")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("task_id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 构造结果字符串")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("result")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$clipboard_content")]),a._v(" https://baidu.com/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$task_id")]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出结果到剪切板")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$result")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" pbcopy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("h2",{attrs:{id:"link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[a._v("#")]),a._v(" link")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.raycast.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("office"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://manual.raycast.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("manual"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("script commands\n"),s("ul",[s("li",[a._v("(script-commands)[https://github.dev/jacky1234/script-commands]")])])]),a._v(" "),s("li",[a._v("other\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://sspai.com/post/79769",target:"_blank",rel:"noopener noreferrer"}},[a._v("Raycast 该怎么用？我们帮你准备了一份实用指南"),s("OutboundLink")],1)])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);