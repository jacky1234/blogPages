(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{399:function(t,e,r){"use strict";r.r(e);var o=r(4),a=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("下面的图展示了一个二进制小数的表达形式。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://leokongwq.github.io/2017/08/19/computer-how-float-stored/binary-float.png",alt:""}})]),t._v(" "),e("RText",{attrs:{text:"举个例子: 十进制浮点数1.8125的二进制形式为1.1101 用二进制科学计数法可以表示为1.1101 * 2^0"}}),t._v(" "),e("p",[t._v("那么可以推出任意一个二进制浮点数V可以表示成下面的形式:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://leokongwq.github.io/2017/08/19/computer-how-float-stored/chart.png",alt:""}})]),t._v(" "),e("p",[t._v("(1)(-1)^S表示符号位，当s=0，V为正数；当s=1，V为负数。\n(2)M表示有效数字，大于等于1，小于2。\n(3)2^E表示指数位。")]),t._v(" "),e("p",[t._v("举例来说，十进制的5.0，写成二进制是101.0，相当于1.01×2^2。那么，按照上面V的格式，可以得出S=0，M=1.01，E=2。")]),t._v(" "),e("p",[t._v("十进制的-5.0，写成二进制是-101.0，相当于-1.01×2^2。那么，S=1，M=1.01，E=2。")]),t._v(" "),e("h2",{attrs:{id:"ieee754-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ieee754-规范"}},[t._v("#")]),t._v(" IEEE754 规范")]),t._v(" "),e("h2",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://leokongwq.github.io/2017/08/19/computer-how-float-stored.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮点数在计算机中是如何存储的？"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);