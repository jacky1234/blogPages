(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{546:function(t,e,s){"use strict";s.r(e);var r=s(4),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"category"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#category"}},[t._v("#")]),t._v(" category")]),t._v(" "),e("h3",{attrs:{id:"sqlite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sqlite"}},[t._v("#")]),t._v(" sqlite")]),t._v(" "),e("blockquote",[e("p",[e("RouterLink",{attrs:{to:"/pages/4f9d0c/"}},[t._v("jump")])],1)]),t._v(" "),e("h3",{attrs:{id:"redius"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redius"}},[t._v("#")]),t._v(" redius")]),t._v(" "),e("blockquote",[e("p",[e("RouterLink",{attrs:{to:"/pages/ae741c/"}},[t._v("jump")])],1)]),t._v(" "),e("h3",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),e("blockquote",[e("p",[t._v("MySQL 是一种关系型数据库管理系统, 它支持 SQL 语言和 ACID 事务, 也支持存储大量的结构化数据。MySQL 被广泛应用于 Web 应用程序、企业应用程序、分布式应用程序等领域。"),e("RouterLink",{attrs:{to:"/pages/e9db87/"}},[t._v("jump")])],1)]),t._v(" "),e("p",[t._v("MySQL 的优点:")]),t._v(" "),e("ul",[e("li",[t._v("数据安全: MySQL 支持 ACID 事务, 可以保证数据的一致性和安全性")]),t._v(" "),e("li",[t._v("大规模数据存储: MySQL 可以存储大量结构化数据, 可以适应企业应用程序的需求")]),t._v(" "),e("li",[t._v("可扩展性: MySQL 支持水平扩展和垂直扩展, 可以根据需求灵活调整数据库性能")])]),t._v(" "),e("h2",{attrs:{id:"postgresql-vs-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-vs-mysql"}},[t._v("#")]),t._v(" PostgreSQL vs MySQL")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://aws.amazon.com/cn/compare/the-difference-between-mysql-vs-postgresql/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://aws.amazon.com/cn/compare/the-difference-between-mysql-vs-postgresql/"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"如何在-postgresql-与-mysql-之间做出选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何在-postgresql-与-mysql-之间做出选择"}},[t._v("#")]),t._v(" 如何在 PostgreSQL 与 MySQL 之间做出选择")]),t._v(" "),e("p",[t._v("这两个关系数据库都适用于大多数使用案例。但是，在做出最终决定之前，您可能要考虑以下因素。")]),t._v(" "),e("RText",{attrs:{text:"应用范围"}}),t._v(" "),e("p",[t._v("PostgreSQL 更适合具有频繁写入操作和复杂查询的企业级应用程序。")]),t._v(" "),e("p",[t._v("但是，如果想创建原型，创建用户较少的内部应用程序，或者创建具有更多读取次数和较少数据更新的信息存储引擎，则您可以启动 MySQL 项目。")]),t._v(" "),e("RText",{attrs:{text:"数据库开发经验"}}),t._v(" "),e("p",[t._v("MySQL 更适合初学者，其学习曲线更短。从头开始构建新的数据库项目所需的时间更少。将 MySQL 设置为独立产品，或将其与其他 Web 开发技术(如 LAMP 堆栈)捆绑在一起很简单。")]),t._v(" "),e("p",[t._v("另一方面，PostgreSQL 对于新手来说可能更具挑战性。它通常需要复杂的基础设置设置和问题排查经验。")]),t._v(" "),e("hr"),t._v(" "),e("RText",{attrs:{text:"性能要求"}}),t._v(" "),e("p",[t._v("如果您的应用程序需要频繁更新数据，则 PostgreSQL 是更好的选择。但是，如果您需要频繁读取数据，则首选 MySQL。")]),t._v(" "),e("RText",{attrs:{text:"写入性能"}}),t._v(" "),e("p",[t._v("MySQL 使用写锁定来实现真正的并发性。例如，如果一个用户正在编辑表，则另一个用户可能必须等到操作完成后才能更改该表。")]),t._v(" "),e("p",[t._v("但是，PostgreSQL 内置了多版本并发控制(MVCC)支持，没有读写锁定。这样，如果要进行频繁并发的写入操作，则 PostgreSQL 数据库的表现会更好。")]),t._v(" "),e("RText",{attrs:{text:"读取性能"}}),t._v(" "),e("p",[t._v("PostgreSQL 会创建一个新的系统进程，为每个连接到数据库的用户分配大量内存(大约 10MB)。它需要内存密集型资源才能针对多个用户进行扩展。")]),t._v(" "),e("p",[t._v("另一方面，MySQL 为多个用户使用单一进程。因此，对于主要向用户读取和显示数据的应用程序，MySQL 数据库的表现优于 PostgreSQL。")]),t._v(" "),e("h2",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/pages/e9db87/"}},[t._v("mysql")])],1),t._v(" "),e("li",[t._v("资讯\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cloudflare.com/zh-cn/learning/ai/what-is-vector-database/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vector database"),e("OutboundLink")],1)])])])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);