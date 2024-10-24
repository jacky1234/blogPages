(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{510:function(e,t,s){"use strict";s.r(t);var a=s(4),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("perfetto is a tool that lets you collect performance information from Android devices via the Android Debug Bridge (ADB). Invoke the perfetto tool using the "),t("code",[e._v("adb shell perfetto")]),e._v(" ... command. perfetto uses various sources to collect performance traces from your device, such as:")]),e._v(" "),t("ul",[t("li",[e._v("ftrace for information from the kernel")]),e._v(" "),t("li",[e._v("atrace for user-space annotation in services and apps")]),e._v(" "),t("li",[e._v("heapprofd for native memory usage information of services and apps")])]),e._v(" "),t("p",[e._v("作为客户端开发工程师, 更多的会注重在 Android 或者 iOS 客户端的优化, 下面以 Android 为主要场景, 进行说明\n更多内容参考: "),t("a",{attrs:{href:"https://developer.android.com/tools/perfetto",target:"_blank",rel:"noopener noreferrer"}},[e._v("android 官网给出的 perfetto command line 介绍"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://perfetto.dev/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perfetto*"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://perfetto.dev/docs/reference/trace-config-proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference-Trace Config proto"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://perfetto.dev/docs/visualization/perfetto-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("perfetto-ui"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.android.com/topic/performance/tracing",target:"_blank",rel:"noopener noreferrer"}},[e._v("android system trace 概览"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/feelabclihu/article/details/126672666",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perfetto 分析进阶-CSDN"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"custom-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-events"}},[e._v("#")]),e._v(" custom-events")]),e._v(" "),t("ol",[t("li",[e._v("perfetto 跟 systrace 同样也支持自定义事件。 可以参考 "),t("a",{attrs:{href:"https://developer.android.com/topic/performance/tracing/custom-events?hl=zh-cn#java",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom-events"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("使用 perfetto 分析自定义事件时, 你可能需要配置 atrace, 相关的内容可见: "),t("a",{attrs:{href:"https://perfetto.dev/docs/data-sources/atrace#traceconfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("ATrace: Android system and app trace events"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"trace-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trace-config"}},[e._v("#")]),e._v(" trace config")]),e._v(" "),t("blockquote",[t("p",[e._v("这里给出配置的 demo 定义,  将如下内容保存到文件中, 比如 config.pbtx 然后运行脚本 "),t("code",[e._v("./record_android_trace -o <output>.perfetto-trace -c config.pbtx")]),e._v("\n此例子参考 "),t("a",{attrs:{href:"https://perfetto.dev/docs/quickstart/android-tracing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quickstart: Record traces on Android"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language-pbtx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('duration_ms: 10000\n\nbuffers {\n  size_kb: 65536\n  fill_policy: RING_BUFFER\n}\n\ndata_sources: {\n    config {\n        name: "linux.ftrace"\n        ftrace_config {\n            ftrace_events: "sched/sched_switch"\n            ftrace_events: "power/suspend_resume"\n            ftrace_events: "sched/sched_process_exit"\n            ftrace_events: "sched/sched_process_free"\n            ftrace_events: "task/task_newtask"\n            ftrace_events: "task/task_rename"\n            ftrace_events: "ftrace/print"\n            atrace_categories: "sched"\n            atrace_categories: "freq"\n            atrace_categories: "idle"\n            atrace_categories: "am"\n            atrace_categories: "wm"\n            atrace_categories: "gfx"\n            atrace_categories: "view"\n            atrace_categories: "binder_driver"\n            atrace_categories: "hal"\n            atrace_categories: "dalvik"\n            atrace_categories: "webview"\n            atrace_categories: "camera"\n            atrace_categories: "power"\n            atrace_categories: "res"\n            atrace_categories: "memory"\n        }\n    }\n}\ndata_sources: {\n    config {\n        name: "linux.process_stats"\n        target_buffer: 1\n        process_stats_config {\n            scan_all_processes_on_start: true\n        }\n    }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br")])]),t("h4",{attrs:{id:"gfx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gfx"}},[e._v("#")]),e._v(" gfx")]),e._v(" "),t("p",[t("code",[e._v('atrace_categories: "gfx"')]),e._v(" 是 Perfetto 中的配置选项, 用于指定要跟踪的 Android 图形渲染相关事件的类别。")]),e._v(" "),t("p",[e._v("在 Android 中, gfx 代表图形渲染子系统, 它负责处理应用程序的图形渲染和显示。通过启用 "),t("code",[e._v('atrace_categories: "gfx"')]),e._v(", Perfetto 将记录与图形渲染相关的事件, 如 GPU 绘制、SurfaceFlinger 操作、GPU 状态变化等。")]),e._v(" "),t("p",[e._v("这样的跟踪对于性能分析和图形渲染优化非常有用, 可以帮助开发人员了解图形渲染的性能瓶颈, 以及查找和解决与图形渲染相关的问题。")]),e._v(" "),t("p",[e._v("请注意, gfx 是 Perfetto 中预定义的标签, 表示图形渲染子系统的跟踪事件。除了 gfx, 还有其他可用的预定义标签, 用于指定不同的跟踪事件类别。你可以根据需要在配置文件中添加其他标签, 以启用不同类型的跟踪数据收集。")]),e._v(" "),t("h2",{attrs:{id:"analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[e._v("#")]),e._v(" analysis")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("建议查看官网 "),t("a",{attrs:{href:"https://perfetto.dev/docs/analysis/trace-processor#ancestor-slice",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trace analysis"),t("OutboundLink")],1),e._v(" 一节")])]),e._v(" "),t("h3",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[e._v("#")]),e._v(" sql")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://perfetto.dev/docs/analysis/sql-tables",target:"_blank",rel:"noopener noreferrer"}},[e._v("sql table"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),t("p",[e._v("一、to get a list of all the threads which emitted a measure slice.")]),e._v(" "),t("blockquote",[t("p",[e._v("see: "),t("a",{attrs:{href:"https://perfetto.dev/docs/analysis/trace-processor#thread-and-process-tables",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://perfetto.dev/docs/analysis/trace-processor#thread-and-process-tables"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" thread_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" slice\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" thread_track "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("track_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" thread_track"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" thread "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("USING")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("utid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'measure'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GROUP")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" thread_name\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("查询逻辑解释如下:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("FROM slice")]),e._v(": 从 slice 表中选择数据作为查询的主要来源。")]),e._v(" "),t("li",[t("code",[e._v("JOIN thread_track ON slice.track_id = thread_track.id")]),e._v(": 通过 JOIN 操作将 slice 表与 thread_track 表关联, 以获取关于线程轨迹(track_id)的信息。")]),e._v(" "),t("li",[t("code",[e._v("JOIN thread USING(utid)")]),e._v(": 通过 JOIN 操作将 thread 表与 thread_track 表关联, 以获取关于线程(thread.name)的信息。这里使用 USING(utid) 来指定连接的列为 utid, 表示 thread_track 表和 thread 表通过 utid 字段进行连接。")]),e._v(" "),t("li",[t("code",[e._v("WHERE slice.name = 'measure'")]),e._v(": 筛选 slice.name 为 'measure' 的记录, 即找到符合条件的事件。")]),e._v(" "),t("li",[t("code",[e._v("GROUP BY thread_name")]),e._v(": 按照 thread_name 字段(即线程名)对结果进行分组, 以汇总每个线程中包含名为 'measure' 的事件。")])]),e._v(" "),t("p",[e._v("最终查询的结果将返回符合条件的 slice.name 为 'measure' 的事件, 并按照线程名进行分组。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("二、查询 slice name 以 "),t("code",[e._v("jack)")]),e._v(" 开头且限定查询到的 "),t("code",[e._v("main thread")]),e._v(" 下面的 slice rows, 并按照 slice.desc 降序排序")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" slice\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" thread_track "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("track_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" thread_track"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" thread "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("USING")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("utid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("LIKE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'jack)%'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<主线程名称>'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dur "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("查询到的结果如下:\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jacky1234/picArchieve@master/uPic/20230726_120125_O1XM95.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"问一问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问一问"}},[e._v("#")]),e._v(" 问一问")]),e._v(" "),t("blockquote",[t("p",[e._v("一、在 thread_track 我们查出来有一列为 utid,  上面的 26460 看起来跟 utid 又不是一个意思.如下图所示")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jacky1234/picArchieve@master/uPic/20230723_214907_y37V3d.png",alt:""}})]),e._v(" "),t("ul",[t("li",[t("code",[e._v("TID(Thread ID)")]),e._v(': TID 是操作系统中用来唯一标识线程的数字标识符。每个线程都有一个唯一的 TID。在 Perfetto UI 的时间轴上, 你会看到类似 "xxx 26460" 这样的标签, 其中 "26460" 就是这个事件所属的线程 ID(TID)。')]),e._v(" "),t("li",[t("code",[e._v("utid(Unified Thread ID")]),e._v(": utid 是 Perfetto 中使用的线程标识符, 它是在跨平台、跨内核和跨进程的场景下使用的。在某些情况下, Perfetto 可能会使用 utid 代替 TID 来唯一标识线程。utid 可以确保在线程切换和跨进程传递时保持唯一。通常, utid 会在跟踪开始时被分配, 并与 TID 相关联。")])]),e._v(" "),t("p",[e._v('因此, 虽然 "xxx 26460" 这样的标签中的 "26460" 确实代表线程 ID(TID), 但在 Perfetto 中, utid 和 TID 之间有着关联。Perfetto 使用 utid 来确保在线程切换和跨进程传递时, 正确地标识和追踪线程。在 Perfetto UI 中, 你可以根据线程的 utid 或线程 ID 来筛选和查看特定线程的事件。')]),e._v(" "),t("p",[e._v("二、DisplayHAL jank")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("DisplayHAL jank refers to the case where SurfaceFlinger finished its work and sent the frame down to the HAL on time, but the frame wasn’t presented on the vsync. It was presented on the next vsync. It could be that SurfaceFlinger did not give enough time for the HAL’s work or it could be that there was a genuine delay in the HAL’s work.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v('"DisplayHAL jank" 是指 SurfaceFlinger 在规定时间内完成工作并将帧传递给硬件抽象层(DisplayHAL), 但该帧没有在垂直同步期间(vsync)被显示。而是在下一个 vsync 时刻才被显示。这可能是因为 SurfaceFlinger 没有给予 DisplayHAL 充足的时间来完成其工作, 或者可能是 DisplayHAL 的工作出现了真正的延迟。')]),e._v(" "),t("p",[e._v("解释如下:")]),e._v(" "),t("ol",[t("li",[e._v("SurfaceFlinger 是 Android 系统中负责组合和渲染所有应用程序窗口的组件。当 SurfaceFlinger 完成渲染并将帧发送给 DisplayHAL 时, 它需要根据设备的垂直同步信号来准确地显示帧。")]),e._v(" "),t("li",[e._v('垂直同步(vsync)是一个硬件信号, 指示显示器在下一个刷新周期开始时显示帧。设备通常以固定的帧速率刷新显示, 比如 60 Hz。当帧被错过, 会导致显示延迟, 即 "DisplayHAL jank"。')]),e._v(" "),t("li",[e._v('"DisplayHAL jank" 可能是由于 SurfaceFlinger 没有给予 DisplayHAL 充足的时间来完成帧的显示准备。这可能导致帧错过当前的 vsync 时刻, 被推迟到下一个 vsync 时刻。')]),e._v(" "),t("li",[e._v("另一种可能是由于 DisplayHAL 本身的处理过程出现了延迟, 导致帧无法及时被显示。")])]),e._v(" "),t("p",[e._v('为了解决 "DisplayHAL jank", 需要进一步分析和优化 SurfaceFlinger 和 DisplayHAL 之间的交互和工作流程。通过减少处理时间、优化资源利用和避免冲突, 可以降低 "DisplayHAL jank" 的发生频率, 从而提高 Android 设备的流畅性和显示性能。')]),e._v(" "),t("h3",{attrs:{id:"perfetto-查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#perfetto-查询"}},[e._v("#")]),e._v(" perfetto 查询")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" track"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" slice\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" track "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" track"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("track_id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'measure'")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("这个 SQL 查询语句用于从 Perfetto 数据库中获取与名称为 'measure' 的切片(slice)关联的跟踪(track)的类型(type)。")]),e._v(" "),t("p",[e._v("解析查询语句:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("SELECT track.type")]),e._v(": 这是查询的目标, 表示要从结果中选择跟踪的类型字段。")]),e._v(" "),t("li",[t("code",[e._v("FROM slice")]),e._v(': 这是查询的主要数据表, 表示要从 "slice" 表中检索数据。')]),e._v(" "),t("li",[t("code",[e._v("JOIN track ON track.id = slice.track_id")]),e._v(': 这是一个 JOIN 操作, 它将 "slice" 表与 "track" 表进行关联。它将使用 "track" 表中的 "id" 字段与 "slice" 表中的 "track_id" 字段进行匹配, 从而获取与切片相关联的跟踪信息。')]),e._v(" "),t("li",[t("code",[e._v("WHERE slice.name = 'measure'")]),e._v(": 这是一个过滤条件, 表示只选择 \"slice\" 表中 \"name\" 字段值为 'measure' 的记录。这将限制查询结果仅包含名称为 'measure' 的切片。")])]),e._v(" "),t("p",[e._v("因此, 该 SQL 查询的结果将返回与名称为 'measure' 的切片关联的跟踪的类型(type)。你将获得与 'measure' 切片相关联的跟踪类型的信息, 这对于了解跟踪数据中不同类型的跟踪信息非常有帮助。")]),e._v(" "),t("h4",{attrs:{id:"查询-slice-名字中包含固定字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询-slice-名字中包含固定字符串"}},[e._v("#")]),e._v(" 查询 slice 名字中包含固定字符串")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT * FROM slice JOIN thread_track ON thread_track.id = slice.track_id WHERE slice.name LIKE 'jack)%'\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);