(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{492:function(t,e,r){"use strict";r.r(e);var a=r(4),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"shrink-code-code-optimize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shrink-code-code-optimize"}},[t._v("#")]),t._v(" Shrink code / code optimize")]),t._v(" "),e("h3",{attrs:{id:"两者在r8流程中位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两者在r8流程中位置"}},[t._v("#")]),t._v(" 两者在R8流程中位置")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jacky1234/picArchieve@master/uPic/20240910_111900_ER3Goc.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"共同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共同点"}},[t._v("#")]),t._v(" 共同点")]),t._v(" "),e("p",[t._v("两者都是在编译期间的优化动作，即在静态情况下，能够确认的一些场景，R8就会帮忙直接给优化掉。")]),t._v(" "),e("h3",{attrs:{id:"区别点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别点"}},[t._v("#")]),t._v(" 区别点")]),t._v(" "),e("ul",[e("li",[t._v('shrink可以认为是类、方法、变脸级别的删除。着重注意关键词"删除"\n'),e("ul",[e("li",[t._v("他是在minifyEnabled=true后，就会被默认打开的。")]),t._v(" "),e("li",[t._v("在编译阶段agp会根据程序入口(MainActivity)或者keep的类，会画出一个方法调用栈的图，如果一个类、类成员变量、方法完全不在这个调用图上，那么他们将会被删除掉。")])])]),t._v(" "),e("li",[t._v('optimize主要是指对code重写，他是深入方法内部的一种重新。着重注意关键词"重写"\n'),e("ul",[e("li",[t._v("他是必须是单独配置才能打开的。")]),t._v(" "),e("li",[t._v("举例某个else一定不会进入，就会被删掉；如果一个方法只有在某几个地方调用使用，便会被内联到对方类中。")]),t._v(" "),e("li",[t._v("某些方法太简单，比如只是简单做一个if判断后，就执行一个赋值、打印等，那这个动作会直接被内联到调用方。")])])])]),t._v(" "),e("h2",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.android.com/build/shrink-code#optimization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code optimization"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://jakewharton.com/blog/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jake Wharton的个人博客"),e("OutboundLink")],1),t._v(" 深入字节码理解每项优化的实际原理")])])])}),[],!1,null,null,null);e.default=i.exports}}]);