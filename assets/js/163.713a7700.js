(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{479:function(a,e,r){"use strict";r.r(e);var t=r(4),s=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"为什么-java-7-hashmap-在多线程下会发生死循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么-java-7-hashmap-在多线程下会发生死循环"}},[a._v("#")]),a._v(" 为什么 Java 7 HashMap 在多线程下会发生死循环？")]),a._v(" "),e("blockquote",[e("p",[a._v("https://zhengw-tech.com/2019/06/01/java-rehash/")])]),a._v(" "),e("blockquote",[e("p",[a._v("https://blog.csdn.net/qq_27376871/article/details/109630451")])]),a._v(" "),e("p",[a._v('对于 Java 7 及以前的 HashMap, 采用了"链地址法", 即内部结构是: '),e("code",[a._v("数组+链表")]),a._v("。K-V 的 key 经过 Hash 后可能会被分在数组的相同索引下, 形成一条链表。\n当元素不断增多达到阈值时, HashMap 会自动触发扩容("),e("code",[a._v("容量*2")]),a._v('), 此时会对所有的 Key 进行重新分桶 , 即 ReHash。这时如果发生多线程同时 ReHash, 可能会出现一种现象:  针对某个桶, 线程 A 在 ReHash 中途挂起, 线程 B 进来完成了整个 ReHash, 此时 A 继续 ReHash 则会出现"循环链表", 它会导致 ReHash 陷入死循环状态。\n具体原因可参考源码参考 '),e("a",{attrs:{href:"http://androidxref.com/7.0.0_r1/xref/libcore/ojluni/src/main/java/java/util/HashMap.java#resize",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 7 HashMap#resize"),e("OutboundLink")],1),a._v("\n如果这个死循环出现在主线程, 则会导致 ANR。")]),a._v(" "),e("h2",{attrs:{id:"为什么-java-8-里不再发生死循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么-java-8-里不再发生死循环"}},[a._v("#")]),a._v(" 为什么 Java 8 里不再发生死循环？")]),a._v(" "),e("p",[a._v('上述死循环发生的本质原因, 是 ReHash 构造的新链表顺序与原始链表顺序相反, 才导致了"循环链表"的产生。因此, 在 Java 8 里保证了在扩容时, 链表的顺序不会改变即可。源码参考 '),e("a",{attrs:{href:"http://androidxref.com/8.0.0_r4/xref/libcore/ojluni/src/main/java/java/util/HashMap.java#resize",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 8 HashMap#resize"),e("OutboundLink")],1),a._v('\n另外, Java 8 里的 HashMap 采用了"数组+链表+红黑树"的实现, 当链表长度大于 8 时, 自动转换成红黑树, 可以提高遍历搜索效率')])])}),[],!1,null,null,null);e.default=s.exports}}]);