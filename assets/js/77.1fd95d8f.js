(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{396:function(t,a,n){"use strict";n.r(a);var s=n(4),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("源码见"),a("a",{attrs:{href:"https://github.com/jacky1234/Java-Exercise/tree/main/app/src/test/java/com/java/basic/test/b_common/a_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("ul",[a("li",[t._v("栈: FILO,  java 的实现, 建议使用 "),a("a",{attrs:{href:"http://localhost:9999/blogPages/pages/55dc87/#deque",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deque"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("队列: FIFO")]),t._v(" "),a("li",[t._v("双向列表")]),t._v(" "),a("li",[t._v("哈希表")]),t._v(" "),a("li",[t._v("树")])]),t._v(" "),a("h3",{attrs:{id:"堆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[t._v("#")]),t._v(" 堆")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.hello-algo.com/chapter_heap/heap/",target:"_blank",rel:"noopener noreferrer"}},[t._v("堆 heap"),a("OutboundLink")],1),t._v(" 是一种满足特定条件的完全二叉树, 主要可分为两种类型, 如图 8-1 所示。")]),t._v(" "),a("ul",[a("li",[t._v("小顶堆 min heap: 任意节点的值 ≤ 其子节点的值。")]),t._v(" "),a("li",[t._v("大顶堆 max heap: 任意节点的值 ≥ 其子节点的值。")])]),t._v(" "),a("RText",{attrs:{text:"实现"}}),t._v(" "),a("p",[t._v("完全二叉树非常适合用数组来表示。由于堆正是一种完全二叉树, 因此我们将采用数组来存储堆。")]),t._v(" "),a("RText",{attrs:{text:"入堆操作"}}),t._v(" "),a("p",[t._v("给定元素 val , 我们首先将其添加到堆底。添加之后, 由于 val 可能大于堆中其他元素, 堆的成立条件可能已被破坏, 因此需要修复从插入节点到根节点的路径上的各个节点, 这个操作被称为「堆化 heapify」。")]),t._v(" "),a("p",[t._v("考虑从入堆节点开始, 从底至顶执行堆化。如图 8-3 所示, 我们比较插入节点与其父节点的值, 如果插入节点更大, 则将它们交换。然后继续执行此操作, 从底至顶修复堆中的各个节点, 直至越过根节点或遇到无须交换的节点时结束。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 元素入堆 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加节点")]),t._v("\n    maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从底至顶堆化")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("siftUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 从节点 i 开始, 从底至顶堆化 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("siftUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取节点 i 的父节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 当"越过根节点"或"节点无须修复"时, 结束堆化')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 交换两节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环向上堆化")]),t._v("\n        i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("RText",{attrs:{text:"堆的常见应用"}}),t._v(" "),a("ul",[a("li",[t._v("优先队列: 堆通常作为实现优先队列的首选数据结构, 其入队和出队操作的时间复杂度均为 O(logn) , 而建队操作为 O(n) , 这些操作都非常高效。 java 中的实现为 PriorityQueue")]),t._v(" "),a("li",[t._v('堆排序: 给定一组数据, 我们可以用它们建立一个堆, 然后不断地执行元素出堆操作, 从而得到有序数据。然而, 我们通常会使用一种更优雅的方式实现堆排序, 详见"堆排序"章节。')]),t._v(" "),a("li",[t._v("获取最大的 K 个元素: 这是一个经典的算法问题, 同时也是一种典型应用, 例如选择热度前 10 的新闻作为微博热搜, 选取销量前 10 的商品等。")])]),t._v(" "),a("h2",{attrs:{id:"算法思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法思想"}},[t._v("#")]),t._v(" 算法思想")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.hello-algo.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.hello-algo.com/"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"dfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dfs"}},[t._v("#")]),t._v(" DFS")]),t._v(" "),a("p",[t._v("深度优先搜索算法(Depth-First-Search, DFS)是一种用于遍历或搜索树或图的算法。沿着树的深度遍历树的节 点, 尽可能深的搜索树的分支。当节点 v 的所在边都己被探寻过, 搜索将回溯到发现节点 v 的那条边的起始节点。这 一过程一直进行到已发现从源节点可达的所有节点为止。如果还存在未被发现的节点, 则选择其中一个作为源节点 并重复以上过程, 整个进程反复进行直到所有节点都被访问为止。属于盲目搜索。")]),t._v(" "),a("p",[t._v("在树的遍历中, 我们可以用 DFS 进行 前序遍历, 中序遍历和后序遍历。在这三个遍历顺序中有一个共同的特性:  除非我们到达最深的结点, 否则我们永远不会回溯。这也是 DFS 和 BFS 之间最大的区别, BFS 永远不会深入探 索, 除非它已经在当前层级访问了所有结点。")]),t._v(" "),a("h3",{attrs:{id:"回溯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯"}},[t._v("#")]),t._v(" 回溯")]),t._v(" "),a("p",[t._v("回溯算法是系统地搜索问题的解的方法。某个问题的所有可能解的称为问题的解空间, 若解空间是有限的, 则可将解空间映射成树结构。"),a("RText",{attrs:{text:"任何解空间可以映射成树结构的问题, 都可以使用回溯法。",color:"red"}}),t._v(" "),a("strong",[t._v("回溯法是能够在树结构里搜索到通往特定终点的一条或者多条特定路径")])],1),t._v(" "),a("p",[t._v("回溯算法的基本思想是: 从一条路往前走, 能进则进, 不能进则退回来, 换一条路再试, 从而搜索到抵达特定终点的一条或者多条特定路径。\n值得注意, 回溯法以"),a("strong",[t._v("深度优先搜索")]),t._v("的方式搜索解空间, 并且在搜索过程中用 "),a("a",{attrs:{href:"https://www.zhihu.com/search?hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2056261625%7D&hybrid_search_source=Entity&q=%E5%89%AA%E6%9E%9D%E5%87%BD%E6%95%B0&search_source=Entity&type=content",target:"_blank",rel:"noopener noreferrer"}},[t._v("剪枝函数"),a("OutboundLink")],1),t._v("避免无效搜索。 所以"),a("code",[t._v("回溯算法 = 树的深度优先搜索 + 剪枝函数")])]),t._v(" "),a("p",[t._v("还需要强调的是, "),a("strong",[t._v("递归不递归跟算法毫无关系, 递归只是算法的实现方式、算法代码化的手段")]),t._v("。\n另外注意, 任何递归形式的算法都能通过栈、队列等数据结构转化为非递归的形式。")]),t._v(" "),a("p",[t._v("回溯算法通常并不显式地对问题进行拆解, 而是将求解问题看作一系列决策步骤, 通过试探和剪枝, 搜索所有可能的解。")]),t._v(" "),a("p",[t._v("回溯模版")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtracking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("终止条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        存放结果"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选择"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 本层集合中元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("树中节点孩子的数量就是集合的大小"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        处理节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtracking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归")]),t._v("\n        回溯"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 撤销处理结果\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"bfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfs"}},[t._v("#")]),t._v(" BFS")]),t._v(" "),a("h3",{attrs:{id:"dp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dp"}},[t._v("#")]),t._v(" DP")]),t._v(" "),a("p",[t._v("DP, 即动态规划(Dynamic Programming), 是一种解决问题的算法设计方法。DP 算法通常用于优化问题, 通过将问题分解成更小的子问题, 并且利用这些子问题的解来构建原始问题的解。")]),t._v(" "),a("p",[t._v("需要了解:")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.hello-algo.com/chapter_dynamic_programming/dp_problem_features/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dp 问题特性"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[a("RText",{attrs:{text:"最优子结构",color:"orange"}}),t._v(": 原问题的最优解是从子问题的最优解构建得来的\n")],1),t._v(" "),a("li",[a("RText",{attrs:{text:"无后效性",color:"orange"}}),t._v(":  给定一个确定的状态, 它的未来发展只与当前状态有关, 而与过去经历的所有状态无关。\n")],1)]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://www.hello-algo.com/chapter_dynamic_programming/dp_solution_pipeline/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dp 解体思路"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[a("RText",{attrs:{text:"决策树模型",color:"orange"}}),t._v('适合用回溯解决的问题通常满足"决策树模型", 这种问题可以使用树形结构来描述, 其中每一个节点代表一个决策, 每一条路径代表一个决策序列。\n'),a("ul",[a("li",[t._v("问题判断\n"),a("ul",[a("li",[t._v("总的来说, 如果一个问题包含重叠子问题、最优子结构, 并满足无后效性, 那么它通常适合用动态规划求解。然而, 我们很难从问题描述中直接提取出这些特性。因此我们通常会放宽条件, "),a("RText",{attrs:{text:"先观察问题是否适合使用回溯(穷举)解决",color:"green"}}),t._v("。")],1)])]),t._v(" "),a("li",[t._v("方法\n"),a("ol",[a("li",[t._v("思考每轮的决策, 定义状态, 从而得到 dp 表")]),t._v(" "),a("li",[t._v("找出最优子结构, 进而推导出状态转移方程")]),t._v(" "),a("li",[t._v("确定边界条件和状态转移顺序")])])])])],1)]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.hello-algo.com/chapter_dynamic_programming/intro_to_dynamic_programming/",target:"_blank",rel:"noopener noreferrer"}},[t._v("爬楼梯"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("RText",{attrs:{text:"回溯法",color:"orange"}}),t._v(":\n"),a("ul",[a("li",[t._v("将爬楼梯想象为一个多轮选择的过程: 从地面出发, 每轮选择上 1 阶或 2 阶, 每当到达楼梯顶部时就将方案数量加, 当越过楼梯顶部时就将其剪枝。")])])],1),t._v(" "),a("li",[a("RText",{attrs:{text:"暴力搜索",color:"orange"}}),t._v(":\n"),a("ul",[a("li",[t._v("递归树的深度为 n, 时间复杂度为 O(2^n). 指数阶属于爆炸式增长")])])],1),t._v(" "),a("li",[a("RText",{attrs:{text:"记忆化搜索",color:"orange"}}),t._v(":\n"),a("ul",[a("li",[t._v('记忆化搜索是一种"从顶至底"的方法, 经过记忆化处理后, 所有重叠子问题都只需计算一次, 时间复杂度优化至 O(n)、空间复杂度 O(n)。 剪枝, 避免了重复计算')])])],1),t._v(" "),a("li",[a("RText",{attrs:{text:"动态规划",color:"orange"}}),t._v(" "),a("ul",[a("li",[t._v('动态规划是一种"从底至顶"的方法, 从最小子问题的解开始, 迭代地构建更大子问题的解, 直至得到原问题的解。')])])],1),t._v(" "),a("li",[a("RText",{attrs:{text:"空间优化",color:"orange"}}),t._v(":\n"),a("ul",[a("li",[t._v('"滚动变量"或"滚动数组"')])])],1)])]),t._v(" "),a("li",[t._v("背包问题: 是动态规划中最常见的问题形式。其具有很多变种,  如:\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.hello-algo.com/chapter_dynamic_programming/knapsack_problem/",target:"_blank",rel:"noopener noreferrer"}},[t._v("0-1 背包问题"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("思考每轮的决策, 定义状态, 从而得到 dp 表: 此问题的子问题为,前 i 个物品在剩余容量为 c 的背包中的最大价值,记做 "),a("code",[t._v("dp[i, c]")])]),t._v(" "),a("li",[t._v("找出最优子结构, 进而推导出状态转移方程:  "),a("code",[t._v("dp[i,c] = max(dp[i-1, c], dp[i-1, c-wgt[i-1]] + val[i-1])")])]),t._v(" "),a("li",[t._v("确定边界条件和状态转移顺序")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.hello-algo.com/chapter_dynamic_programming/unbounded_knapsack_problem/",target:"_blank",rel:"noopener noreferrer"}},[t._v("完全背包问题"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("多重背包")])])]),t._v(" "),a("li",[t._v("编辑距离问题")])]),t._v(" "),a("h3",{attrs:{id:"贪心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪心"}},[t._v("#")]),t._v(" 贪心")]),t._v(" "),a("p",[t._v("贪心地做出局部最优的决策, 以期获得全局最优解。贪心算法简洁且高效, 在许多实际问题中有着广泛的应用。")]),t._v(" "),a("RText",{attrs:{text:"贪心算法和动态规划都常用于解决优化问题。它们之间存在一些相似之处, 比如都依赖最优子结构性质, 但工作原理不同",color:"green"}}),t._v(" "),a("ul",[a("li",[t._v("动态规划会根据之前阶段的所有决策来考虑当前决策, 并使用过去子问题的解来构建当前子问题的解。")]),t._v(" "),a("li",[t._v("贪心算法不会考虑过去的决策, 而是一路向前地进行贪心选择, 不断缩小问题范围, 直至问题被解决。")])]),t._v(" "),a("p",[t._v("我们先通过例题"),a("a",{attrs:{href:"https://www.hello-algo.com/chapter_greedy/greedy_algorithm/",target:"_blank",rel:"noopener noreferrer"}},[t._v('"零钱兑换"'),a("OutboundLink")],1),t._v('了解贪心算法的工作原理。这道题已经在"完全背包问题"章节中介绍过, 相信你对它并不陌生. 找零: 我们贪心地选择不大于且最接近它的硬币')]),t._v(" "),a("h4",{attrs:{id:"贪心算法的优点与局限性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法的优点与局限性"}},[t._v("#")]),t._v(" 贪心算法的优点与局限性")]),t._v(" "),a("p",[t._v("对于某些硬币面值组合, 贪心算法并不能找到最优解.")]),t._v(" "),a("p",[t._v("一般情况下, 贪心算法的适用情况分以下两种。")]),t._v(" "),a("ol",[a("li",[t._v("可以保证找到最优解: 贪心算法在这种情况下往往是最优选择, 因为它往往比回溯、动态规划更高效。")]),t._v(" "),a("li",[t._v("可以找到近似最优解: 贪心算法在这种情况下也是可用的。对于很多复杂问题来说, 寻找全局最优解非常困难, 能以较高效率找到次优解也是非常不错的。")])]),t._v(" "),a("h4",{attrs:{id:"贪心算法特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法特性"}},[t._v("#")]),t._v(" 贪心算法特性")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/labuladong/fucking-algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("labuladong 的算法小抄"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://labuladong.online/algo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("algo"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/krahets/hello-algo",target:"_blank",rel:"noopener noreferrer"}},[t._v("hello algo"),a("OutboundLink")],1),t._v(": has many star\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.hello-algo.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.hello-algo.com/"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/c/neetcode",target:"_blank",rel:"noopener noreferrer"}},[t._v("neetcode"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/youngyangyang04/leetcode-master",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码随想录"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.nowcoder.com/ta/coding-interviews",target:"_blank",rel:"noopener noreferrer"}},[t._v("nowcoder"),a("OutboundLink")],1),t._v(" 在线面试")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/yickel/p/15046440.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度优先算法 DFS"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/478362331",target:"_blank",rel:"noopener noreferrer"}},[t._v("回溯算法和 DFS(深度优先搜索)到底有什么区别？"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);