(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{512:function(v,_,r){"use strict";r.r(_);var t=r(4),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"预热内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#预热内容"}},[v._v("#")]),v._v(" 预热内容")]),v._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/pages/8627c3/#预渲染原理"}},[v._v("HTML 的预渲染原理")])],1)]),v._v(" "),_("h2",{attrs:{id:"播放质量指标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#播放质量指标"}},[v._v("#")]),v._v(" 播放质量指标")]),v._v(" "),_("p",[v._v("在介绍我们的技术优化实现之前, 先来看一下如何衡量用户体验。")]),v._v(" "),_("p",[v._v("我们将用户体验拆解为播放源质量、交互体验和观看体验三个方向, 而用户体验的质量指标一般会分成三个层次:")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("QoS(Quality of Service)")]),v._v(": 即播放器本身能够量化的技术指标, 主要包括 4 个方面:\n"),_("ul",[_("li",[v._v("播放失败率: 基于起播和未起播两个环节, 涉及大盘级的播放失败率和起播率。")]),v._v(" "),_("li",[v._v("起播时间: 和用户播控时间点相关, 涉及首帧时间和 seek 后的起播时间。")]),v._v(" "),_("li",[v._v("卡顿指标: 卡顿是影响用户观看体验的一个重要因素, 卡顿指标包括卡顿渗透率、百秒卡顿时长、卡顿次数等。")])])]),v._v(" "),_("li",[_("code",[v._v("QoE(Quality of Experience)")]),v._v(": 在播放器可以监控到的 QoS 指标之上, 我们加入了真实场景中用户行为侧跟业务相关的数据, 包括播放次数、播放时长、完播率、投稿量以及投稿率。")]),v._v(" "),_("li",[v._v("业务数据: 再往上延伸, 每一个业务最终关注的是 DAU 、留存、广告、收入和成本等指标。")])]),v._v(" "),_("p",[v._v("以上三个层次的数据指标可以让我们实现真正对业务增长有收益的播放体验优化。")]),v._v(" "),_("h2",{attrs:{id:"零耗时-首帧优化实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#零耗时-首帧优化实践"}},[v._v("#")]),v._v(' "零耗时"首帧优化实践')]),v._v(" "),_("p",[v._v('什么是"零耗时"首帧？耗时本身想描述的是用户侧是否感受到了耗时这件事。所谓"零耗时", 并不是真的 0 毫秒起播, 而是指用户在起播时平滑播放, 没有首屏的顿感。')]),v._v(" "),_("p",[v._v("从我们现在的大盘来看, 核心业务方 50% 的播放首帧都已经小于 100ms 了。从交互设计体验角度来看, 小于 200ms 的时间人体感知就已经不明显了。所以我们认为, 100ms 对于用户来说就是零耗时的首帧。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/jacky1234/picArchieve/master/uPic/HqOffk.jpg",alt:"首帧时长构成"}})]),v._v(" "),_("p",[v._v("我们做了哪些优化来达到小于 100ms 的零首帧呢？前面提到对于每一个首帧, 我们都细拆了很多环节, 不同的环节都进行了有针对性的技术优化。我们梳理了一下, 将首帧时长的构成拆解为了 4 个模块:")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("业务相关的页面创建、交互和渲染耗时")]),v._v("。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("网络连接耗时")]),v._v(": 包括业内常用到的连接复用、预连接等策略。网络层面经常会存在很多不稳定因素, 所以对于节点优选和网络超时优化, 我们也会基于客户端层面, 以单个 VV 实例以及用户相关的上下文去做不同的优化尝试。再者就是比较常规的预加载、 DNS 缓存优化等优化措施。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("解码耗时")]),v._v(": 解码耗时一方面与播放源格式强相关。例如对于 MP4 格式, 如果想减少解码耗时, 就要保证 MP4 的 moov box 在前面, 避免播放器在下载了部分数据后又要到文件尾部再解析 moov 文件, 增加了数据请求耗时。另一方面与设备的软解/硬解方案相关, 硬解在下文会有详细介绍。")])]),v._v(" "),_("li",[_("p",[v._v("对于我们自己的播放器来说, 在软解方面会有一些自研的低延时模式优化。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("播放器策略逻辑耗时")]),v._v(": 这个模块更多的是关注指标置换和指标平衡。比如对于起播水位的优化, 我们要实现在控制起播水位 buffersize 时, 既保证用户对首帧无感知, 又保证后续播放流畅。")])])]),v._v(" "),_("p",[v._v("下面会详细介绍我们正在进行或是已经上线的一些优化案例。")]),v._v(" "),_("h3",{attrs:{id:"业务耗时优化-预渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务耗时优化-预渲染"}},[v._v("#")]),v._v(" 业务耗时优化: 预渲染")]),v._v(" "),_("p",[v._v("预加载是当前通用的优化网络耗时的解决方案, 指的是在播放当前视频时, 如果网络能力允许, 会提前触发后续视频的下载。预加载相当于减少了用户可感知的网络加载和网络连接的耗时。")]),v._v(" "),_("p",[v._v("但是通用的预加载解决方案没有把播放器和网络 IO 进行强紧密的结合, 在预加载时只是基于数据模块触发下载任务, 而此时播放器的实例还没有创建起来。")]),v._v(" "),_("p",[v._v("对于这种情况, 我们在思考能否把播放器创建以及初始化的工作整体前置。")]),v._v(" "),_("p",[v._v("此外, 我们还发现当播放的封面图和首帧差异很大的时候, 用户会感受到明显的跳变。这个跳变有可能会让用户感受到卡顿, 或者是其他不舒适的感觉。所以这一部分也是我们整体的优化目标。")]),v._v(" "),_("p",[v._v("基于以上这些考虑, 就产生了我们的"),_("strong",[v._v("预渲染的解决方案: 当前任务在播放时, 提前起播下一个播放任务, 渲染首帧替代封面, 从而降低首帧耗时")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"网络耗时优化-节点优选"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络耗时优化-节点优选"}},[v._v("#")]),v._v(" 网络耗时优化——节点优选")]),v._v(" "),_("h3",{attrs:{id:"网络耗时优化-解码耗时"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络耗时优化-解码耗时"}},[v._v("#")]),v._v(" 网络耗时优化——解码耗时")]),v._v(" "),_("p",[v._v("解码耗时的优化是我们相比其他开源播放器在首帧上保持优势的根本原因。")]),v._v(" "),_("p",[v._v("解码本身需要耗时。当一个视频的数据完成准备, 在解码过程中至少会经历以下几个环节:")]),v._v(" "),_("ol",[_("li",[_("p",[_("strong",[v._v("格式解析器和分离器(formater 和 demuxer)")]),v._v(": 首先, 视频文件通常以某种特定的格式(如 MP4、MKV、AVI 等)存储, 而格式解析器和分离器的任务是解析文件并提取其中的音频和视频流。这一步骤通常包括解析文件头、查找音频和视频轨道, 以及确定它们的编解码格式。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("音频和视频解码")]),v._v(": 一旦从文件中提取出音频和视频流, 接下来就需要对它们进行解码。这涉及将音频和视频数据从其压缩格式(如 H.264 视频编解码器或 AAC 音频编解码器)解压缩为原始音频和视频帧。这一过程可以是计算密集型的, 尤其是对于高分辨率的视频和复杂的音频编解码器。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("音频和视频的优化")]),v._v(": 解码后的音频和视频通常需要进一步处理和优化, 以确保它们的质量和格式适合最终的渲染。这可能包括音频的混音、均衡和降噪, 以及视频的缩放、剪辑和色彩校正等操作。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("端侧渲染")]),v._v(": 最后, 解码和优化后的音频和视频数据将被传递到端侧, 用于渲染。在移动设备或计算机上, 通常会使用音频和视频渲染引擎来将数据呈现为音频波形和视频帧, 以便用户可以听到声音和观看图像。")])])]),v._v(" "),_("p",[v._v("如果我们不进行任何优化, 把以上所有所流程都托管,  ffmpeg 进行解复用,  MediaCodec 进行解码, 整个过程基于不同机型的耗时至少在 100ms 以上。")]),v._v(" "),_("p",[v._v("我们在解码耗时上主要做了如下三个方面的事情:")]),v._v(" "),_("h4",{attrs:{id:"解码初始化耗时"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解码初始化耗时"}},[v._v("#")]),v._v(" 解码初始化耗时")]),v._v(" "),_("p",[v._v("在视频解码的过程中, 初始化硬件解码器通常需要一些时间, 一般情况下, 这个初始化的平均耗时大于 100 毫秒。硬解码的初始化过程可以理解为向底层的多媒体框架(例如 OpenMAX)提供相关的编解码器标识(Codec ID)或编解码器名称(Codec name), 然后由底层多媒体框架负责创建解码器实例。简而言之, 正常的解码或初始化流程需要先下载视频数据, 然后解析视频流的头部信息, 以获取视频的编解码器信息, 然后进行硬解码器的初始化。")]),v._v(" "),_("p",[v._v("为了优化这个过程, 目前的策略是将硬解码的初始化与头部信息解析以及解复用过程并行处理。在传输视频流时, 会提前告知系统当前视频的编解码器信息, 这意味着在数据下载和解复用的并行处理过程中, 硬解码器的初始化已经完成。这样做的好处是可以减少首帧的等待时间, 因为在播放开始时, 硬解码器已经准备好接受数据并进行解码, 而不需要等待初始化完成。")]),v._v(" "),_("p",[v._v("通过这项优化, 平均可以减少首帧的等待时间, 通常降低了"),_("strong",[v._v("80 毫秒到 120 毫秒")]),v._v(", 从而提升了整体的播放性能和用户体验。这对于实时流媒体和要求低延迟的应用程序尤为重要, 因为它可以减少用户等待首帧显示的时间, 使用户更快地观看到视频内容。")]),v._v(" "),_("h4",{attrs:{id:"解码器复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解码器复用"}},[v._v("#")]),v._v(" 解码器复用")]),v._v(" "),_("p",[v._v("不重新初始化解码器 MediaCodec, 而将解码器直接用于其他播放器解码, 称为解码器复用。")]),v._v(" "),_("h5",{attrs:{id:"适合短视频场景的解码器复用方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适合短视频场景的解码器复用方案"}},[v._v("#")]),v._v(" 适合短视频场景的解码器复用方案")]),v._v(" "),_("p",[v._v("以当前短视频比较常见的 feed 流的实现方式为例: 当上一个视频完成了解码初始化, 下一个视频是否可以直接复用上一个视频的解码器？这里我们使用了 codec_pool 进行相关解码器的复用。在上一个视频完成播放时, 我们把相关的 codec 复用到下一个视频, 这样就省略了两个视频初始化过程中 stop release 到 start 的耗时。这一部分优化的耗时平均在 40+ms 。而 Google 为了优化清晰度无缝切换时的耗时, 在 ExoPlayer 上实现了播放器内的解码器复用。")]),v._v(" "),_("p",[_("strong",[v._v("1. Google 的 ExoPlayer 方案不适合短视频场景")])]),v._v(" "),_("p",[v._v("Google 已经在 ExoPlayer 上进行了解码器复用实践, 那么是否可以将对应方案直接应用到我们的业务呢？答案是不能的。ExoPlayer 是一种播放器内部解码器复用方案, 即"),_("strong",[v._v("解码器和播放器实例绑定")]),v._v("。对于不同分辨率的视频 A、B、C, 下次播放时判断该播放器实例是否可以复用, 如果可以, 进行复用, 否则重新初始化解码器。")]),v._v(" "),_("p",[v._v("总而言之, 基于短视频切换频繁的特点, 直接使用 ExoPlayer 方案会存在以下困难:")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("无法在 player 之间复用")]),v._v(", 由于有预加载等优化手段, 短视频场景一般不同视频对应不同的 player, 与方案冲突。")]),v._v(" "),_("li",[_("strong",[v._v("复用率低")]),v._v(", 因为 ExoPlayer 方案局限在 player 内部, 多个 player 之间不能共享解码器, 而解码器复用是有条件限制的, 这样会让复用率非常低。")]),v._v(" "),_("li",[_("strong",[v._v("接入困难")]),v._v(", 复用逻辑与播放器逻辑耦合严重。")])]),v._v(" "),_("h5",{attrs:{id:"跨播放器解码器复用方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跨播放器解码器复用方案"}},[v._v("#")]),v._v(" 跨播放器解码器复用方案")]),v._v(" "),_("p",[v._v("【短视频复用的特点】")]),v._v(" "),_("ul",[_("li",[v._v("跨播放器复用: 解码器能够在多个播放器之间共享, 适应多 player 场景。")]),v._v(" "),_("li",[v._v("高复用率: 闲置的解码器能够被选择, 需要保证播放器在起播时尽可能的复用解码器。")]),v._v(" "),_("li",[v._v("低入侵接入: 解码器复用逻辑需要和播放器逻辑解耦, 让接入时尽可能减少代码入侵。")]),v._v(" "),_("li",[v._v("通用性高: 能够让几乎所有基于 MediaCodec 的播放器都能使用无缝切换方案。")])]),v._v(" "),_("p",[v._v("【跨播放器复用方案的演进】")]),v._v(" "),_("h4",{attrs:{id:"机型能力大数据择优"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#机型能力大数据择优"}},[v._v("#")]),v._v(" 机型能力大数据择优")]),v._v(" "),_("h2",{attrs:{id:"link"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[v._v("#")]),v._v(" link")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.infoq.cn/article/yua5huimspppp46lpmg1",target:"_blank",rel:"noopener noreferrer"}},[v._v('"零耗时"首帧视频体验的优化实践'),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.cn/post/7090567116864094239",target:"_blank",rel:"noopener noreferrer"}},[v._v("首屏加载速度如何优化？试试前端预渲染！"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1717107",target:"_blank",rel:"noopener noreferrer"}},[v._v("看点视频秒开优化: 解码器复用优化方案篇"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"https://developer.android.com/reference/android/media/MediaCodec",target:"_blank",rel:"noopener noreferrer"}},[v._v("Android, MediaCodec"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=e.exports}}]);