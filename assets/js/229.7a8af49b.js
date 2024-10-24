(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{545:function(t,a,n){"use strict";n.r(a);var e=n(4),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" structure")]),t._v(" "),a("h3",{attrs:{id:"spring-messaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-messaging"}},[t._v("#")]),t._v(" spring-messaging")]),t._v(" "),a("blockquote",[a("p",[t._v("org.springframework:spring-messaging")])]),t._v(" "),a("p",[t._v("spring-messaging 模块是 Spring Framework 的一个子模块, 用于支持消息驱动的应用程序开发。它提供了在 Spring 应用程序中处理消息的基础设施, 包括消息传递、消息处理、消息监听和消息调度等功能。以下是关于 spring-messaging 模块的一些重要信息:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("核心概念")]),t._v(": spring-messaging 模块引入了一些核心概念, 包括消息通道(Message Channel)、消息处理器(Message Handler)、消息转换器(Message Converter)等。这些概念为消息驱动的编程提供了基础, 允许你通过消息传递实现松散耦合的组件之间的通信。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("消息通道")]),t._v(": 消息通道是消息在 Spring 应用程序中流动的通道。spring-messaging 模块定义了不同类型的消息通道, 包括发布-订阅通道(Publish-Subscribe Channel)、点对点通道(Point-to-Point Channel)、广播通道(Broadcast Channel)等。这些通道允许你以不同的方式组织和路由消息。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("消息处理器")]),t._v(": 消息处理器是用于处理接收到的消息的组件。Spring 提供了许多内置的消息处理器, 例如, 用于将消息发送到方法的适配器、用于将消息广播给订阅者的广播处理器等。你还可以自定义消息处理器以满足特定的业务需求。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("消息监听")]),t._v(": spring-messaging 模块支持消息监听器, 允许你监听消息通道上的消息并在消息到达时触发特定的操作。这对于异步处理消息非常有用, 例如, 处理来自消息队列的消息或 WebSocket 中的实时消息。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("消息调度")]),t._v(": 该模块还提供了消息调度的功能, 允许你定期发送消息或执行定时任务。这对于调度后台任务或发送定期报告等场景非常有用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("消息转换器")]),t._v(": spring-messaging 模块包括消息转换器, 用于将消息从一种格式转换为另一种格式。这对于将消息转换为 JSON、XML 或其他自定义格式非常有用, 以满足消息的序列化和反序列化需求。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("集成其他消息系统")]),t._v(": 该模块还提供了与其他消息系统(如 Apache Kafka、RabbitMQ 等)的集成支持, 使得在 Spring 应用程序中与这些消息系统进行交互更加容易。")])])]),t._v(" "),a("p",[t._v("总之, spring-messaging 模块为 Spring 应用程序提供了处理消息的强大功能, 可以用于构建消息驱动的应用程序、异步处理、实时通信以及与消息队列和消息中间件的集成。它为开发者提供了一个灵活的消息处理框架, 有助于实现松散耦合的组件之间的通信和协作。")]),t._v(" "),a("h3",{attrs:{id:"actuator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actuator"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/caoweixiong/p/15325382.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Actuator"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Spring Boot Actuator 模块提供了生产级别的功能, 比如健康检查, 审计, 指标收集, HTTP 跟踪等, 帮助我们监控和管理 Spring Boot 应用。")])]),t._v(" "),a("h2",{attrs:{id:"annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annotation"}},[t._v("#")]),t._v(" annotation")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://blog.51cto.com/u_15490474/5686903",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring 最常用的 36 个注解大全, 你都会了吗"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"spring-mvc-和-rest-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-和-rest-注解"}},[t._v("#")]),t._v(" Spring MVC 和 REST 注解")]),t._v(" "),a("h4",{attrs:{id:"restcontroller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restcontroller"}},[t._v("#")]),t._v(" @RestController")]),t._v(" "),a("p",[a("code",[t._v("@RestController")]),t._v("是 Spring Framework 中的一个注解, 用于标识一个类是 RESTful 风格的控制器(Controller)。与传统的 Spring MVC 控制器不同, "),a("code",[t._v("@RestController")]),t._v("注解告诉 Spring 框架, 该控制器返回的不是视图(HTML、JSP 等), 而是数据, 通常以 JSON 格式返回给客户端。这意味着使用"),a("code",[t._v("@RestController")]),t._v("的类中的方法通常用于处理 RESTful API 请求")]),t._v(" "),a("p",[t._v("具体来说, **@RestController 注解的作用包括: **")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("组合注解: @RestController 注解实际上是@Controller 和@ResponseBody 两个注解的组合。@Controller 标识该类是一个控制器, 而@ResponseBody 表示方法返回的数据将被直接写入 HTTP 响应体中, 而不是被解释为视图名称。")])]),t._v(" "),a("li",[a("p",[t._v("返回数据: @RestController 标识的类中的方法通常返回领域对象、数据对象或 DTO(数据传输对象)。这些数据对象将以 JSON 或 XML 等格式直接返回给客户端, 而不是渲染到视图中。")])]),t._v(" "),a("li",[a("p",[t._v("简化开发: 使用@RestController 可以简化开发 RESTful API 的过程, 因为开发人员无需处理视图解析和模型视图的问题, 只需关注数据的处理和响应。")])])]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("h3",{attrs:{id:"autowired-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autowired-原理"}},[t._v("#")]),t._v(" autowired 原理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/jacky1234/picArchieve/master/uPic/cQJQJ3.jpg",alt:"1"}})]),t._v(" "),a("h3",{attrs:{id:"ioc-的实现机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioc-的实现机制"}},[t._v("#")]),t._v(" IOC 的实现机制")]),t._v(" "),a("blockquote",[a("p",[t._v("好的, 这个问题我会从几个方面来回答。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("IOC 是什么")]),t._v("\nIOC 的全称是 Inversion Of Control, 也就是控制反转, 它的核心思想是把对象的管理权限交给容器。")]),t._v(" "),a("li",[a("strong",[t._v("Bean 的声明方式")]),t._v("\n应用程序如果需要使用到某个对象实例, 直接从 IOC 容器中去获取就行, 这样设计的好处是降低了程序里面对象与对象之间的耦合性。")]),t._v(" "),a("li",[a("strong",[t._v("IOC 的工作流程")]),t._v(": Spring IOC 的工作流程大致可以分为三个阶段。\n"),a("ul",[a("li",[t._v("IOC 容器的初始化")]),t._v(" "),a("li",[t._v("完成 Bean 初始化及依赖注入")]),t._v(" "),a("li",[t._v("Bean 的使用")])])])]),t._v(" "),a("p",[t._v("图解: IOC执行流程\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/jacky1234/picArchieve/master/uPic/f4LZSU.jpg",alt:"IOC执行流程"}})]),t._v(" "),a("p",[t._v("图解: 执行步骤\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/jacky1234/picArchieve/master/uPic/1djQcN.jpg",alt:"执行步骤"}})]),t._v(" "),a("p",[a("strong",[t._v("链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_43564410/article/details/116709134",target:"_blank",rel:"noopener noreferrer"}},[t._v("IOC执行流程及bean生命周期和作用域总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://javadoop.com/post/spring-ioc",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring-ioc"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/532742267",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官: 介绍下 Spring IoC 的工作流程 你会怎么回答？"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"spring-aop-与-aspectj-aop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop-与-aspectj-aop"}},[t._v("#")]),t._v(" Spring AOP 与 AspectJ AOP")]),t._v(" "),a("p",[t._v("Spring AOP 属于运行时增强, 而 AspectJ 是编译时增强。 Spring AOP 基于代理(Proxying), 而 AspectJ 基于字节码操作(Bytecode Manipulation)。")]),t._v(" "),a("h2",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" other")]),t._v(" "),a("h3",{attrs:{id:"configurableapplicationcontext-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurableapplicationcontext-接口"}},[t._v("#")]),t._v(" ConfigurableApplicationContext 接口")]),t._v(" "),a("blockquote",[a("p",[t._v("介绍 spring 中的 ConfigurableApplicationContext 接口")])]),t._v(" "),a("p",[t._v("ConfigurableApplicationContext 接口是 Spring 框架中的一个重要接口, 它扩展了 ApplicationContext 接口, 提供了一些用于配置和控制应用上下文的额外方法。这个接口的主要目的是允许开发人员对应用上下文进行更高级别的配置和管理。")]),t._v(" "),a("p",[t._v("以下是 ConfigurableApplicationContext 接口的一些重要方法和功能:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("refresh()方法:")]),t._v(": 这是 ConfigurableApplicationContext 最重要的方法之一。它用于刷新应用上下文, 重新加载所有 bean 定义, 并触发 bean 的初始化。通常, 在创建应用上下文之后, 您需要调用 refresh()方法才能使其生效。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("registerShutdownHook()方法:")]),t._v(": 这个方法用于注册一个 JVM 关闭钩子, 以确保在 JVM 关闭时正常关闭 Spring 应用上下文。这对于释放资源和执行清理操作非常有用。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("close()方法:")]),t._v(": 这个方法用于关闭应用上下文。在应用程序完成后, 应该显式调用 close()方法以释放资源和清理应用上下文。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("setId(String id):")]),t._v(": 设置应用上下文的唯一标识符, 通常作为一个字符串。这可以用于标识不同的应用上下文。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("setDisplayName(String displayName):")]),t._v(": 设置应用上下文的显示名称, 通常用于日志和诊断目的。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("setParent(ApplicationContext parent):")]),t._v(": 设置父应用上下文。这允许您创建多层次的应用上下文体系结构, 其中子上下文可以访问父上下文中定义的 bean。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("addApplicationListener(ApplicationListener<?> listener):")]),t._v(": 注册一个应用程序事件监听器, 以便在应用上下文中的事件发生时接收通知。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("setEnvironment(ConfigurableEnvironment environment):")]),t._v(": 设置应用上下文的环境, 包括属性源和配置文件的处理。")])])]),t._v(" "),a("p",[t._v("ConfigurableApplicationContext 接口的实现类包括 GenericApplicationContext 和 AnnotationConfigApplicationContext 等。这些实现类提供了不同的应用上下文配置方式, 允许您使用 XML 配置、注解配置或混合配置等多种方式来构建应用上下文。")]),t._v(" "),a("p",[t._v("总之, ConfigurableApplicationContext 接口为 Spring 应用程序提供了更高级别的配置和管理功能, 允许您以更灵活的方式控制应用上下文的行为和生命周期。这对于大型和复杂的应用程序特别有用。")]),t._v(" "),a("h3",{attrs:{id:"beandefinition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beandefinition"}},[t._v("#")]),t._v(" BeanDefinition")]),t._v(" "),a("p",[t._v("在 Spring 框架中, BeanDefinition 是一个重要的概念, 它用于描述 Spring 容器中的 Bean 的元数据信息, 包括 Bean 的类名、依赖关系、作用域、生命周期回调等信息。BeanDefinition 的主要作用是告诉 Spring 容器如何创建和管理 Bean。")]),t._v(" "),a("p",[t._v("以下是 BeanDefinition 的一些关键属性和功能:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Bean 的类名")]),t._v(": BeanDefinition 包括一个属性, 用于指定要创建的 Bean 的完全限定类名。这告诉 Spring 容器要实例化哪个类来创建 Bean。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Bean 的作用域")]),t._v(": BeanDefinition 可以指定 Bean 的作用域, 例如 Singleton(单例)或 Prototype(原型)。Singleton 表示在容器中只有一个 Bean 实例, 而 Prototype 表示每次请求都创建一个新的实例。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("依赖关系")]),t._v(": BeanDefinition 可以描述 Bean 与其他 Bean 之间的依赖关系。这包括构造函数注入、属性注入和方法注入等。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("初始化和销毁回调")]),t._v(": 您可以通过 BeanDefinition 指定 Bean 的初始化方法和销毁方法。这些方法在 Bean 的生命周期中自动调用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Bean 的懒加载")]),t._v(": BeanDefinition 可以指定 Bean 是否懒加载。如果设置为懒加载, Bean 将在首次访问时才被实例化。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Bean 的描述信息")]),t._v(": BeanDefinition 可以包含一个描述信息, 通常用于提供有关 Bean 用途和配置的文档。")])])]),t._v(" "),a("p",[t._v("BeanDefinition 是 Spring IoC 容器的核心概念之一, 它允许开发人员以声明性的方式配置应用程序中的 Bean, 而不需要硬编码 Bean 的创建和管理。通常, BeanDefinition 由配置文件(如 XML 配置文件或 Java 配置类)中的 Bean 定义来创建和填充。")]),t._v(" "),a("p",[t._v("以下是一个示例 XML 配置中的 BeanDefinition:")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myBean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.MyBean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("John"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("30"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v('在这个示例中, BeanDefinition 描述了一个名为 myBean 的 Bean, 它是 com.example.MyBean 类的实例, 并且有两个属性 name 和 age, 它们被设置为"John"和 30。')]),t._v(" "),a("p",[t._v("总之, BeanDefinition 是 Spring 框架中用于定义和配置 Bean 的关键元素, 它使开发人员能够以灵活和可维护的方式管理应用程序中的 Bean。通过使用 BeanDefinition, Spring 容器可以根据描述信息创建和管理 Bean 的实例, 从而实现了 IoC(Inversion of Control)的概念。")]),t._v(" "),a("h3",{attrs:{id:"attributeaccessor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributeaccessor"}},[t._v("#")]),t._v(" AttributeAccessor")]),t._v(" "),a("p",[t._v("AttributeAccessor 接口是 Spring Framework 中的一个接口, 用于提供在对象上设置和获取属性(attributes)的通用方法。属性通常是与对象关联的附加信息, 它们可以用于各种用途, 如配置、元数据、状态管理等。AttributeAccessor 接口定义了以下方法:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("void setAttribute(String name, Object value)")]),t._v(": 通过名称设置一个属性的值。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object getAttribute(String name)")]),t._v(": 通过名称获取属性的值。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object removeAttribute(String name)")]),t._v(": 通过名称删除属性, 并返回被删除的属性的值。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("boolean hasAttribute(String name)")]),t._v(": 检查是否存在具有指定名称的属性。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("String[] attributeNames()")]),t._v(": 获取所有属性名称的数组。")])])]),t._v(" "),a("p",[t._v("AttributeAccessor 接口通常由 Spring 框架内部使用, 以及一些与 Spring 集成的第三方库使用, 来处理对象上的属性。这个接口的一个常见用途是处理 Bean 的属性, 例如在 BeanFactory 和 ApplicationContext 中, 这些容器可以使用 AttributeAccessor 来管理 Bean 的配置属性。")]),t._v(" "),a("p",[t._v("此外, Spring 提供了几个实现 AttributeAccessor 接口的类, 如 AbstractAttributeAccessor, 它提供了通用的属性操作方法的默认实现。开发人员也可以实现 AttributeAccessor 接口来自定义对象的属性操作行为。")]),t._v(" "),a("p",[t._v("总之, AttributeAccessor 接口提供了一种通用的方式来处理对象上的属性, 使开发人员可以轻松地设置、获取和管理这些属性, 从而增强了 Spring 框架的灵活性和可扩展性。")]),t._v(" "),a("h3",{attrs:{id:"lazy-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lazy-注解"}},[t._v("#")]),t._v(" lazy 注解")]),t._v(" "),a("p",[t._v("在 Spring 框架中, @Lazy 注解用于控制 bean 的懒加载行为。懒加载是指在应用程序启动时不立即创建 bean 实例, 而是在第一次访问该 bean 时才进行创建。这可以帮助提高应用程序的性能, 尤其是在应用程序中存在大量的 bean 时。")]),t._v(" "),a("p",[t._v("使用@Lazy 注解, 您可以将其应用于 Spring 的 bean 定义, 以指示 Spring 容器在需要时才创建该 bean。以下是一些关于@Lazy 注解的重要信息:")]),t._v(" "),a("ol",[a("li",[t._v("使用方式:\n要将@Lazy 注解应用于 bean, 只需将它放置在 bean 定义的类上。例如:")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Lazy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLazyBean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bean的定义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("在这个示例中, MyLazyBean 将作为懒加载 bean 进行创建。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("默认值:\n如果您没有显式指定@Lazy 注解, Spring 容器会默认使用懒加载行为。")])]),t._v(" "),a("li",[a("p",[t._v("使用场景:\n懒加载通常用于那些在应用程序启动时不需要立即初始化的 bean, 特别是对于一些资源密集型的 bean。这可以帮助减少启动时间和内存占用。")])]),t._v(" "),a("li",[a("p",[t._v("注意事项:")])])]),t._v(" "),a("ul",[a("li",[t._v("懒加载可能会导致在访问懒加载 bean 时出现延迟, 因为 Spring 容器要在需要时才创建 bean 实例。")]),t._v(" "),a("li",[t._v("懒加载适用于单例作用域的 bean, 默认情况下, 所有 Spring bean 都是单例的。")])]),t._v(" "),a("p",[t._v("总之, @Lazy 注解是 Spring 中用于懒加载 bean 的一种方式, 它允许您在需要时才创建 bean 实例, 从而提高应用程序的性能和资源利用率。")])])}),[],!1,null,null,null);a.default=s.exports}}]);