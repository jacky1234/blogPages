(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{575:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"guides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guides"}},[t._v("#")]),t._v(" guides")]),t._v(" "),a("h2",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" components")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" api")]),t._v(" "),a("h2",{attrs:{id:"architechture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architechture"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://reactnative.dev/architecture",target:"_blank",rel:"noopener noreferrer"}},[t._v("architechture"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"rendering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendering"}},[t._v("#")]),t._v(" Rendering")]),t._v(" "),a("h3",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),a("p",[a("strong",[t._v("Yoga")])]),t._v(" "),a("p",[t._v("Flexible Layouts with "),a("a",{attrs:{href:"https://yogalayout.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yoga"),a("OutboundLink")],1),t._v("\nBuild flexible layouts on any platform with a highly optimized open source layout engine designed with speed, size, and ease of use in mind.")]),t._v(" "),a("blockquote",[a("p",[t._v("React Native 组件通常使用 Yoga 进行布局")])]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("h3",{attrs:{id:"node-命令不识别问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-命令不识别问题"}},[t._v("#")]),t._v(" node 命令不识别问题")]),t._v(" "),a("blockquote",[a("p",[t._v("使用 android studio 打开项目, 可能会出现 node 不识别的问题")])]),t._v(" "),a("p",[t._v("解决方案:")]),t._v(" "),a("ul",[a("li",[t._v("打开 "),a("code",[t._v("node_modules/@react-native-community/cli-platform-android/native_modules.gradle")])]),t._v(" "),a("li",[t._v("将 "),a("code",[t._v("Runtime.getRuntime().exec")]),t._v(" 方法的第二个参数替换为包含 node 的路径。 如下")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" command "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/directory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换为实际的路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" envp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PATH=/usr/bin:/bin:/path/to/node_directory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换为包含 node 的路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Process")]),t._v(" process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" envp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);