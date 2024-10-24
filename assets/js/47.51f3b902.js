(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{366:function(e,r,o){"use strict";o.r(r);var _=o(4),t=Object(_.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[e._v("#")]),e._v(" 环境")]),e._v(" "),r("blockquote",[r("p",[e._v("安装 docker 请直接点击查看: "),r("a",{attrs:{href:"https://docs.docker.com/desktop/install/mac-install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("在 mac 上的安装"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"常用命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("此模块列举了常见的一些命令, 更多的用法可见:"),r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接"),r("OutboundLink")],1)])]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("docker run")]),e._v(": 运行一个容器(这个命令也创建了一个容器)。")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-d")]),e._v(": 表示以后台(守护进程)模式运行容器。容器将在后台运行, 而不会占用你的终端")]),e._v(" "),r("li",[r("code",[e._v("-p")]),e._v(": 指定端口映射。")]),e._v(" "),r("li",[r("code",[e._v("--name")]),e._v(": 指定容器名称")]),e._v(" "),r("li",[r("code",[e._v("--user root")]),e._v(": 以 root 模式运行容器")]),e._v(" "),r("li",[r("code",[e._v("--user 1000:1000")]),e._v(": 其中 1000:1000 是一个具有普通权限的用户和用户组的标识。")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker build")]),e._v(": 构建一个镜像")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-t")]),e._v(": 指定镜像的名称和标签")]),e._v(" "),r("li",[r("code",[e._v("-f")]),e._v(": 指定 Dockerfile 的路径")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker pull <image:version>")]),e._v(": 下载一个镜像.")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker pull elasticsearch:<version>")]),e._v(" 下载 elasticsearch 镜像")]),e._v(" "),r("li",[r("code",[e._v("docker image pull elasticsearch")])])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker push")]),e._v(": 将本地镜像推送到镜像仓库")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker stop <container>")]),e._v(": 停止一个正在运行的容器")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker start <container>")]),e._v(": 运行一个容器")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker restart <container>")]),e._v(": 重启一个容器")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker rm")]),e._v(": 删除一个容器")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-f")]),e._v(": 强制删除正在运行的容器")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker rmi")]),e._v(": 删除一个镜像")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-f")]),e._v(": 强制删除正在使用的镜像")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker ps")]),e._v(": 查看正在运行的容器")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-a")]),e._v(": 查看所有容器, 包括已停止的")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker images")]),e._v(": 查看本地镜像列表")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker exec")]),e._v(": 在正在运行的容器中执行命令")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker exec -u root -it <container> /bin/bash")]),e._v(": 以 root 进入 Docker 容器的 shell")]),e._v(" "),r("li",[r("code",[e._v("-u root")]),e._v(": 你可能需要以此身份运行 docker container, 否则有些命令无权限")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker logs <conatiner-name>")]),e._v(": 查看容器的日志输出")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker inspect")]),e._v(": 检查容器或镜像的详细信息")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker export")]),e._v(": Export a container’s filesystem as a tar archive")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker image prune")]),e._v(" 清理无用镜像,释放磁盘空间")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker container")]),e._v(": container help")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker container prune")]),e._v(": 清理无用的容器,释放磁盘空间")]),e._v(" "),r("li",[r("code",[e._v("docker container ls -a")])])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("docker cp")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker cp <path> <container>:<path>")]),e._v(": 将主机的文件拷贝到 docker 容器中")])])])]),e._v(" "),r("h2",{attrs:{id:"技巧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[e._v("#")]),e._v(" 技巧")]),e._v(" "),r("blockquote",[r("p",[e._v("为 Docker for Mac 配置 HTTP 代理: "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26033249",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zhuanlan.zhihu.com/p/26033249"),r("OutboundLink")],1)])]),e._v(" "),r("ul",[r("li",[e._v("使用 Dockerfile: 编写一个 Dockerfile, 定义容器的构建过程, 并使用 "),r("code",[e._v("docker build")]),e._v(" 命令构建镜像。")]),e._v(" "),r("li",[e._v("镜像标签管理: 给镜像打上标签, 可以方便地区分不同版本或不同环境的镜像。")]),e._v(" "),r("li",[e._v("数据卷挂载: 使用数据卷挂载容器内的目录到主机上, 实现数据持久化, 并方便对数据进行备份和恢复。")]),e._v(" "),r("li",[e._v("使用 Docker Compose: 使用 Docker Compose 工具, 可以通过一个 YAML 文件定义和管理多个相关容器的配置, 方便地进行多容器应用的部署和管理。")]),e._v(" "),r("li",[e._v("多阶段构建: 在 Dockerfile 中使用多个构建阶段, 可以减小最终镜像的体积, 提高构建速度。")]),e._v(" "),r("li",[e._v("使用官方镜像: 尽可能使用官方提供的镜像, 它们经过了广泛测试和验证, 可信度较高。")]),e._v(" "),r("li",[e._v("容器互联: 通过设置网络连接, 可以实现容器之间的通信和数据共享。")]),e._v(" "),r("li",[e._v("Docker Registry: 搭建私有的 Docker Registry, 可以方便地存储和分享自己的镜像。")]),e._v(" "),r("li",[e._v("监控和日志: 使用监控工具和日志管理工具, 对 Docker 容器和集群进行监控和日志收集, 方便故障排查和性能优化。")]),e._v(" "),r("li",[e._v("自动化构建和部署: 结合持续集成和持续部署工具")])]),e._v(" "),r("h2",{attrs:{id:"原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),r("p",[e._v("以下是 Docker 的工作原理的关键要点:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("容器化技术")]),e._v(":  Docker 使用容器化技术来封装应用程序和其依赖项, 以便它们可以在不同的环境中运行一致, 而无需考虑底层操作系统的差异。这是通过使用 Linux 容器技术(如 cgroups 和 namespace)来实现的。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("镜像")]),e._v(":  Docker 镜像是容器的构建模块。镜像是一个只读文件, 包含了应用程序代码、运行时环境、依赖项等。镜像是不可更改的, 这意味着一旦创建, 它们就不会被更改。镜像是容器的基础, 可以用来启动多个容器实例。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("容器")]),e._v(":  容器是从镜像创建的运行时实体。容器包括一个独立的文件系统、运行时环境和应用程序代码。容器是可移植的, 可以在不同的主机上运行, 只要这些主机支持 Docker。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Docker Daemon")]),e._v(":  Docker 守护进程(Docker Daemon)是一个在后台运行的服务, 负责管理 Docker 容器的生命周期、镜像的构建和存储、网络设置等。Docker 守护进程监听 Docker CLI 的命令, 并执行相应的操作。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Docker CLI")]),e._v(":  Docker 命令行界面(Docker CLI)是与 Docker 守护进程通信的主要方式。用户可以使用 Docker CLI 来创建、管理和监视容器、镜像以及其他 Docker 资源。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Docker Compose")]),e._v(":  Docker Compose 是一个用于定义和运行多个 Docker 容器的工具。它允许你使用一个 YAML 文件来描述应用程序的各个组件和它们之间的关系, 然后可以一键启动整个应用程序栈。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Docker Registry")]),e._v(":  Docker Registry 是用于存储和分享 Docker 镜像的中央存储库。Docker Hub 是 Docker 的官方 Registry, 用户可以在其中找到许多常见的公共镜像。企业也可以搭建自己的私有 Docker Registry 来管理和分享镜像。")])])]),e._v(" "),r("p",[e._v("Docker 的工作原理可以简单总结为: 通过将应用程序及其依赖项打包到容器中, 使其可移植性极高, 然后使用 Docker 守护进程管理容器的生命周期和资源。这种容器化方法大大简化了应用程序的部署和管理, 提高了开发、测试和生产环境之间的一致性。")]),e._v(" "),r("h2",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),r("h3",{attrs:{id:"容器中-mysql-链接主机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器中-mysql-链接主机"}},[e._v("#")]),e._v(" 容器中 mysql 链接主机")]),e._v(" "),r("p",[e._v("TODO")]),e._v(" "),r("h3",{attrs:{id:"image到硬盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#image到硬盘"}},[e._v("#")]),e._v(" image到硬盘")]),e._v(" "),r("p",[e._v("todo: "),r("a",{attrs:{href:"https://blog.csdn.net/qq_42997214/article/details/120988339",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/qq_42997214/article/details/120988339"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[e._v("#")]),e._v(" 链接")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker 官方文档"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile 命令, 参考文档"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://jozala.com/posts/2019-11-21-docker-image-with-gradle/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building Docker image with Gradle"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1),e._v(" :Docker Hub is the world's largest\nlibrary and community for container images")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://labs.play-with-docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("play-with-docker"),r("OutboundLink")],1),e._v(" 在线 play docker")])])])}),[],!1,null,null,null);r.default=t.exports}}]);