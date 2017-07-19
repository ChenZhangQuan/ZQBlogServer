用vue从零搭建博客
===
本人是一名iOS开发者，算是一个h5新手，由于之前用weex，了解过vue和webpack。最近心血来潮想搭个个人blog，所以就这样开始了。本文适合对vue有一定了解的新手。

完成品:
源码地址:https://github.com/ChenZhangQuan/ZQBlog

## 1.先要搭建vue工程。
一般情况使用vue官方脚手架创建工程就好了

    # 全局安装 vue-cli
    $ npm install --global vue-cli
    # 创建一个基于 webpack 模板的新项目
    $ vue init webpack my-project
    # 安装依赖，走你
    $ cd my-project
    $ npm install
    $ npm run dev

但是用vue-cli创建出来的工程庞大又复杂，很多地方都搞不懂，尤其是webpack的基础那么多基础配置，那么多插件对于一个新手小白是很不友好的。正如vue官方说的那样：
>CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。

所以就是最好自己从头搭建vue工程，让自己对工程有更好对了解，出问题加需求比较好解决。这里推荐一篇blog，是关于[如何搭建 vue 2.x 工程的文章][1],通过他，就能让我们从零开始搭建vue工程，最后可以达到跟用vue-cli创建出来的工程的样子。
[1]:http://www.qinshenxue.com/article/20161106163608.html

## 2.搭建blog页面
本文着重强调流程，页面搭建就省略了，页面布局直接参考源码就可以。


## 3.博文样式
>原本的博文只是一串字符串，但是如果想要把博文做的美观点，方便点，就要使用到markdown。

### Markdown介绍
Markdown以一种轻巧简明的设计理念，赋予了Web文档新的活力，从而代替传统以Word为主导的电子文档。Markdown大量简化了HTML标签，被广大的互联网应用所使用。程序员所熟知的Github就完全基于Markdown语法，真的可以不再需要Word了。
Markdown不是HTML，目前还不能被浏览器解析，所以我们需要Markdown的解析器，把Markdown翻译成浏览器认识的HTML文档展示出来。Marked就是一个基于Nodejs的Markdown解析引擎！

[markdown的语法][2]
[2]:http://www.appinn.com/markdown/

[markdown的入门指南][3]。
[3]:http://www.jianshu.com/p/1e402922ee32/

[vue官方案例][4]
[4]:https://cn.vuejs.org/v2/examples/index.html

#### Marked解析器使用

#####安装
    npm install marked
#####使用
    var marked = require('marked');
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    console.log(marked('I am using __markdown__.'));

###github-markdown-css
用marked将markdown字符串解析成html字符串后，博客的展示排版开始变得不同。
但是此时的风格有些简单，这时候我们可以加入网上现成的的markdown.css样式。
这里我们使用:github-markdown-css
####github-markdown-css 的使用
去[github-markdown-css][5]github上下载css样式。
[5]:https://github.com/sindresorhus/github-markdown-css
#####引用css
    <link rel="stylesheet" href="github-markdown.css">
######使用
    <div class="markdown-body"> //此处父组件一定要是markdown-body类
      <div class="articleContentView" v-html="compiledMarkdown"></div>
    </div>

>此处compiledMarkdown是用marked解析出来的html字符串


====



##数据源
数据源是nodejs+mongodb服务器
