(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{477:function(t,a,s){"use strict";s.r(a);var r=s(4),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[t._v("#")]),t._v(" 入门")]),t._v(" "),a("h3",{attrs:{id:"协程-vs-回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协程-vs-回调"}},[t._v("#")]),t._v(" 协程 vs 回调")]),t._v(" "),a("p",[t._v("回调是一种很好的模式, 但也存在缺点。过多使用回调的代码可能会变得难以读取和推演。此外, 回调也不允许使用某些语言功能, 例如异常。")]),t._v(" "),a("p",[t._v("Kotlin 协程使您能够将基于回调的代码转换为顺序代码。顺序编写的代码通常更易于阅读, 甚至可以使用"),a("strong",[t._v("异常等语言功能")]),t._v("。")]),t._v(" "),a("p",[t._v("最后, 两者所做的事情完全相同: 等待长时间运行的任务获得结果, 然后继续执行。不过, 两者的代码看起来却截然不同。")]),t._v(" "),a("h3",{attrs:{id:"coroutinescope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coroutinescope"}},[t._v("#")]),t._v(" CoroutineScope")]),t._v(" "),a("p",[t._v("Kotlin 中, 所有协程都在 CoroutineScope 中运行。作用域在其整个作业期间会控制协程的生命周期。如果取消某个作用域的作业, 则该作用域内启动的所有协程也将取消")]),t._v(" "),a("h3",{attrs:{id:"调度程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调度程序"}},[t._v("#")]),t._v(" 调度程序")]),t._v(" "),a("p",[t._v("Kotlin 协程提供三个调度程序: Main、IO 和 Default。")]),t._v(" "),a("ul",[a("li",[t._v("Main 调度程序用于在 Android 主线程上运行协")]),t._v(" "),a("li",[t._v("IO 调度程序针对 IO 工作进行了优化, 例如从网络或磁盘读取内容")]),t._v(" "),a("li",[t._v("Default 调度程序则针对 CPU 密集型任务进行了优化。")])]),t._v(" "),a("h3",{attrs:{id:"withcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withcontext"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-context.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithContext"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("p",[t._v("在任何调度程序之间切换时, 协程会使用 withContext")]),t._v(" "),a("h3",{attrs:{id:"continuation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continuation"}},[t._v("#")]),t._v(" Continuation")]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("h3",{attrs:{id:"suspend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suspend"}},[t._v("#")]),t._v(" suspend")]),t._v(" "),a("p",[t._v("关键字 suspend 是 Kotlin 将函数(即函数类型)标记为可供协程使用的方式。当协程调用标记为 suspend 的函数时, 它不会像常规函数调用一样在函数返回之前进行阻塞, 而是挂起执行, 直到结果就绪为止, 然后从上次停止的位置恢复并使用返回的结果。当它挂起并等待结果时, 它会取消阻塞正在运行它的线程, 以便其他函数或协程可以运行。")])])}),[],!1,null,null,null);a.default=e.exports}}]);