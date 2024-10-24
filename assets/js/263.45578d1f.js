(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{579:function(t,e,a){"use strict";a.r(e);var r=a(4),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("blockquote",[e("p",[t._v("Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.")])]),t._v(" "),e("p",[t._v("在底层, Next.js 还抽象并自动配置了 React 所需的工具, 如打包、编译等。这使你可以专注于构建应用程序, 而不必花费时间进行配置。\n无论你是个人开发者还是大团队的一部分, Next.js 都可以帮助你构建交互式、动态和高性能的 React 应用程序。")]),t._v(" "),e("RText",{attrs:{text:"主要特点和功能"}}),t._v(" "),e("ul",[e("li",[e("p",[t._v("服务器渲染(SSR)和静态导出:  Next.js 支持服务器渲染, 这意味着在首次加载页面时, 服务器会生成 HTML 内容, 提高了页面的加载速度和 SEO 可访问性。同时, 它还支持静态导出, 可以在构建时预渲染页面, 从而减少运行时的服务器负载。")])]),t._v(" "),e("li",[e("p",[t._v("热模块替换(HMR):  开发过程中, Next.js 提供了热模块替换, 使你可以在不刷新整个页面的情况下实时更新修改, 极大地提高了开发效率。")])]),t._v(" "),e("li",[e("p",[t._v("动态路由:  Next.js 支持创建动态路由, 允许你使用占位符在 URL 中创建可变部分, 这对于构建类似博客、商品详情等需要根据数据动态生成页面的应用非常有用。")])]),t._v(" "),e("li",[e("p",[t._v("自动代码分割:  Next.js 会自动将页面和组件代码分割成小块, 只加载当前页面所需的部分, 从而优化加载性能。")])]),t._v(" "),e("li",[e("p",[t._v("数据获取:  Next.js 提供了多种数据获取的方式, 包括静态生成(在构建时获取数据)、服务器渲染(在每次请求时获取数据)和客户端渲染。你可以选择最适合你应用需求的数据获取策略。")])]),t._v(" "),e("li",[e("p",[t._v("内置 CSS 和样式支持:  Next.js 内置了 CSS 模块、Sass、Less 等样式预处理器的支持, 让你可以更方便地管理应用的样式。")])]),t._v(" "),e("li",[e("p",[t._v("插件和扩展性:  Next.js 的插件生态丰富, 你可以通过插件轻松集成各种功能, 如国际化、状态管理等。")])]),t._v(" "),e("li",[e("p",[t._v("TypeScript 支持:  Next.js 对 TypeScript 有良好的支持, 可以帮助你构建类型安全的应用。")])])]),t._v(" "),e("p",[t._v("总之, Next.js 提供了一种现代化的前端开发方式, 帮助开发者更高效地构建高性能、可维护的 Web 应用。它的灵活性和功能丰富使其成为许多开发团队在构建 Web 应用时的首选框架之一。")]),t._v(" "),e("h2",{attrs:{id:"get-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-start"}},[t._v("#")]),t._v(" Get start")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://nextjs.org/docs/getting-started/react-essentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nextjs.org/docs/getting-started/react-essentials"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"app-router-vs-pages-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-router-vs-pages-router"}},[t._v("#")]),t._v(" App Router vs Pages Router")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://nextjs.org/docs#app-router-vs-pages-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nextjs.org/docs#app-router-vs-pages-router"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Next.js 有两种不同的路由器: 应用程序路由器(App Router)和页面路由器(Pages Router)。应用程序路由器是一种较新的路由器, 它允许你使用 React 的最新功能, 如服务器组件(Server Components)和流式传输(Streaming)。页面路由器是原始的 Next.js 路由器, 允许你构建服务器渲染的 React 应用程序, 并继续支持较旧版本的 Next.js 应用。")]),t._v(" "),e("p",[t._v("这两者在应用程序的不同层次上发挥作用, 让我们来详细了解它们的区别和用途。")]),t._v(" "),e("ol",[e("li",[t._v("应用程序路由(App Router):")])]),t._v(" "),e("p",[t._v("应用程序路由是指整个 Next.js 应用程序的导航结构。这包括在不同页面之间进行导航, 通常是通过顶部的导航栏、菜单、按钮等。应用程序路由管理着整个应用的页面切换和导航。")]),t._v(" "),e("p",[t._v("Next.js 使用 Link 组件来实现应用程序级别的路由。这个组件可以在你的应用中实现无需重新加载整个页面的导航。它通过预加载所需的页面数据并使用浏览器的历史记录 API 来实现快速、平滑的导航。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("页面路由(Pages Router):")])]),t._v(" "),e("p",[t._v("页面路由是指每个单独页面的路由。在 Next.js 中, 每个页面都是一个独立的模块, 拥有自己的路由规则。页面路由负责确定哪个组件将渲染在特定的 URL 上。")]),t._v(" "),e("p",[t._v("每个页面在 Next.js 中对应一个位于 pages 文件夹中的文件。这个文件的名称就是对应页面的 URL 路径, 例如 pages/index.js 对应根路径, pages/about.js 对应 /about 路径。这种方式让页面的路由非常简单和直观。")]),t._v(" "),e("p",[t._v("总结来说, 应用程序路由用于管理整个应用程序的导航结构, 而页面路由用于决定每个单独页面的 URL 路径和对应的组件。这两者协同工作, 帮助你构建一个流畅的单页应用, 同时还保留了传统多页面应用的优势。")]),t._v(" "),e("h3",{attrs:{id:"server-and-client-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-and-client-components"}},[t._v("#")]),t._v(" Server and Client Components")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://nextjs.org/docs/getting-started/react-essentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nextjs.org/docs/getting-started/react-essentials"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"为什么要使用服务器组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用服务器组件"}},[t._v("#")]),t._v(" 为什么要使用服务器组件？")]),t._v(" "),e("blockquote",[e("p",[t._v("为什么要使用服务器组件？相比客户端组件, 它们有什么优势呢？")])]),t._v(" "),e("p",[t._v("服务器组件允许开发者更好地利用服务器基础设施。例如, 你可以将数据获取移至服务器, 更接近数据库, 并将原本会影响客户端 JavaScript 包大小的大型依赖项保留在服务器上, 从而提升性能。服务器组件使编写 React 应用程序的感觉类似于 PHP 或 Ruby on Rails, 但具备 React 和组件模型的强大灵活性, 用于模板化用户界面。")]),t._v(" "),e("p",[t._v("使用服务器组件, 初始页面加载更快, 客户端的 JavaScript 包大小减小。基本的客户端运行时是可缓存且大小可预测的, 并且随着应用程序的增长不会增加。只有在应用程序中通过客户端组件使用客户端交互性时, 才会添加额外的 JavaScript。")]),t._v(" "),e("p",[t._v("当使用 Next.js 加载路由时, 初始 HTML 在服务器上渲染。然后, 在浏览器中逐步增强该 HTML, 允许客户端接管应用程序并通过异步加载 Next.js 和 React 客户端运行时来添加交互性。")]),t._v(" "),e("p",[t._v("为了更轻松地过渡到服务器组件, 应用程序路由器(App Router)中的所有组件默认都是服务器组件, 包括特殊文件和同目录组件。这使你可以自动采用它们, 无需额外工作, 从而实现出色的性能。你还可以选择使用 'use client' 指令选择性地采用客户端组件。")]),t._v(" "),e("p",[t._v("在通常情况下, 会按照"),e("strong",[t._v("交互性")]),t._v("分类, 下图是官网的一张设计图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fthinking-in-server-components.png&w=3840&q=75&dpl=dpl_CdUSnANkEdZkEcBVH1CsQtsGxqSh",alt:"thinking-in-server-components"}})]),t._v(" "),e("blockquote",[e("p",[t._v("The majority of components are non-interactive and can be rendered on the server as Server Components.\nFor smaller pieces of interactive UI, we can sprinkle in Client Components")])]),t._v(" "),e("h2",{attrs:{id:"courses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#courses"}},[t._v("#")]),t._v(" courses")]),t._v(" "),e("h3",{attrs:{id:"nextjs-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nextjs-dashboard"}},[t._v("#")]),t._v(" nextjs-dashboard")]),t._v(" "),e("p",[t._v("course "),e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://learn-g3j1f0891-jackys-projects-aeb870dd.vercel.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("体验链接"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/css-styling",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 2"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("css module\n"),e("ul",[e("li",[t._v("CSS Modules create unique class names for each component, so you don't have to worry about style collisions.")])])]),t._v(" "),e("li",[t._v("clsx library")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/optimizing-fonts-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 3"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("fonts")]),t._v(" "),e("li",[e("code",[t._v("nextjs/Image/")]),t._v(" component")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 4"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/navigating-between-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 5"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("code",[t._v("Link")]),t._v(": "),e("code",[t._v("<Link>")]),t._v(" allows you to do client-side navigation with JavaScript.")]),t._v(" "),e("li",[e("code",[t._v("usePathname()")]),t._v(": hook")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/setting-up-your-database#create-a-vercel-account",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 6"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("vercel\n"),e("ul",[e("li",[t._v("Seed your database")]),t._v(" "),e("li",[t._v("Exploring your database")]),t._v(" "),e("li",[t._v("Executing queries")])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/fetching-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 7"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Using Server Components to fetch data\n"),e("ul",[e("li",[t._v("without an additional api layer")])])]),t._v(" "),e("li",[t._v("Using SQL")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 8"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("static or dynamic rendering")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/streaming",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 9"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Fixing the loading skeleton bug with route groups")]),t._v(" "),e("li",[t._v("Streaming a component: Suspense 组件\n"),e("ul",[e("li",[t._v("stream specific components using React Suspense instead of the whole page")])])]),t._v(" "),e("li",[t._v("Grouping components")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/partial-prerendering",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 10"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Partial Prerendering (Optional)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/adding-search-and-pagination",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 11"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Adding Search and Pagination")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/mutating-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 12"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Mutating Data\n"),e("ul",[e("li",[t._v("What React Server Actions are and how to use them to mutate data.")]),t._v(" "),e("li",[t._v("How to work with forms and Server Components.")]),t._v(" "),e("li",[t._v("Best practices for working with the native formData object, including type validation.")]),t._v(" "),e("li",[t._v("How to revalidate the client cache using the revalidatePath API.")]),t._v(" "),e("li",[t._v("How to create dynamic route segments with specific IDs.")])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/error-handling",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 13"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("handle error")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/improving-accessibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 14"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("improving-accessibility\n"),e("ul",[e("li",[t._v("Client side validation")]),t._v(" "),e("li",[t._v("Server-Side validation")]),t._v(" "),e("li",[t._v("useFormState")]),t._v(" "),e("li",[t._v("TODO")])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/adding-authentication",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 15"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Authentication vs Authorization\n"),e("ul",[e("li",[t._v("Authentication: 证明真实性, 鉴定；身份验证, 认证")]),t._v(" "),e("li",[t._v("Authorization: 批准书, 授权书；批准, 授权")]),t._v(" "),e("li",[t._v("Authentication verifies your identity. Authorization determines what you can access.")])])])])])]),t._v(" "),e("h2",{attrs:{id:"other"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" other")]),t._v(" "),e("h3",{attrs:{id:"route-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#route-cache"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://nextjs.org/docs/app/building-your-application/caching#router-cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("route cache"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("在 Next.js 中, 路由缓存是指在页面之间导航时, Next.js 可以缓存先前页面的渲染结果。这样可以提高页面之间导航的速度和性能, 因为它可以避免重新渲染先前已经渲染过的页面。")]),t._v(" "),e("p",[t._v("Next.js 的路由缓存是通过使用客户端路由器(通常是基于浏览器的)来实现的。当你使用 "),e("code",[t._v("<Link>")]),t._v(" 组件或 router.push() 等方法进行页面导航时, Next.js 会尝试从缓存中加载页面的渲染结果, 而不是重新生成页面。")]),t._v(" "),e("p",[t._v("在某些情况下, 你可能希望禁用路由缓存, 以便在每次导航时都重新渲染页面。你可以通过在 router.push() 或 Link 组件中传递 shallow 属性为 true 来实现。这样可以告诉 Next.js 忽略缓存并强制重新渲染页面。")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useRouter "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next/router'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SomeComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleClick")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/some-page'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("shallow")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleClick"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Go to Some Page")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[t._v("这样设置后, 每次通过点击按钮进行导航时, 页面都会重新渲染。")]),t._v(" "),e("p",[t._v("需要注意的是, 路由缓存是默认启用的, 并且对于大多数情况都是有益的, 因为它可以显著提高页面导航的速度。")]),t._v(" "),e("h2",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://nextjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nextjs"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://nextjs.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://nextjs.org/docs/app/api-reference/file-conventions",target:"_blank",rel:"noopener noreferrer"}},[t._v("file-conventions"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("Find your Template"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("courses\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("dashboard-app"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://nextjs.org/learn/dashboard-app/next-steps",target:"_blank",rel:"noopener noreferrer"}},[t._v("next step"),e("OutboundLink")],1)])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vercel/next-learn",target:"_blank",rel:"noopener noreferrer"}},[t._v("next-learn"),e("OutboundLink")],1)])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);