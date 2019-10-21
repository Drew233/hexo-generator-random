# hexo-generator-random

### 初衷及历程
忘了在多久之前看到朋友的博客中有个随机浏览一篇文章的功能，问了一下发现是php中的一个函数（我也不是很懂2333）.但是我用的是hexo，也很想可以有这个功能。一开始没想那么多直接暴力用python爬取了我博客所有文章的链接，然后用一个html跳转，这样做的话会有几个很不方便的地方，比如说每次有新文章都得手动更新一个那个html，太麻烦了。然后我就寻思着做一个实现这个功能的插件。说干就干。可是这方面百度谷歌上面都没有什么让人能看得懂的教程，官网上的中文翻译也是有点模糊不清，英文又看不太懂。那几天心里面充满了想做但是又不知道怎么做的烦躁，用无从下手来描述太合适了。我又是看hexo里面的生成归档，标签什么的代码的，又是看各种插件的代码的。终于是知道了是用的`node.js`写插件的，好吧还是我太菜了，官网好像有说。我的锅我的锅。一开始想着模仿生成rss订阅的那个插件一样，但是没弄好，就换方向了。那两天做这个做到入魔，逃了好多课（把班长快气死了。。。然后在网上看到一个大佬的生成所有链接向百度提交的插件，[传送门](https://gitee.com/eillott/projects)，传送到他的码云仓库，%一下然后感谢一下，对我帮助非常大。最后终于是做好了。

### 插件介绍
hexo-generator-random是一款hexo插件，作用是生成一个`random.html`，随即跳转到博客下所有文章中的一篇。
#### 功能
在`public`文件夹中生成一个`random.html`，访问`yoursite/random`即可随即跳转一篇文章。
#### 版本
当前最新版本为1.0.2

版本2.0.0预计更新内容：在每篇文章的Front-matter中设置一个参数来控制是否添加到随机文章，希望我不会咕咕咕吧


### 安装
#### 依赖
本插件用到的依赖如下：
1. minimatch
2. path
3. fs
4. object-assign
上面四个依赖，前三个一般hexo init之后都会有，但是第四个一般都没有（我自己测试的时候是没有的。
所以你需要先安装一下object-assign
```
npm install object-assign
```

#### 本地安装
把本仓库的内容git clone或download到本地，然后把保存到本地的文件夹放在`../blog/node_modules`文件夹中

然后，在博客根目录下的`package.json`里面的`dependencies`中加入这一行
```
"hexo-generator-random": "^1.0.0"
```
注意：如果你是加到最后一行的，在这个上面的一行要加上逗号

这是完成后的效果
```
"dependencies": {
  "hexo": "^4.0.0",
  "hexo-generator-archive": "^1.0.0",
  "hexo-generator-category": "^1.0.0",
  "hexo-generator-index": "^1.0.0",
  "hexo-generator-tag": "^1.0.0",
  "hexo-generator-random": "^1.0.0",
  "hexo-renderer-ejs": "^1.0.0",
  "hexo-renderer-marked": "^2.0.0",
  "hexo-renderer-stylus": "^1.1.0",
  "hexo-server": "^1.0.0",
  "object-assign": "^4.1.1"
}
```

#### npm安装
同上，首先安装依赖
```
npm install object-assign
```
然后直接安装本插件即可
```
npm install hexo-generator-random
```

#### 注意
在博客根目录下的`_config.yml`里面的`url`需要改成`/`或者你的域名'

#### 已知Bug
不同的主题可能会有其他页面混进随机文章

#### 使用
上面的配置如果都是正确的话，当你hexo g之后，在public文件夹下会生成一个random.html。
直接访问yoursite/random.html就可以感受这个随机文章了。
你甚至可以直接在菜单栏里面加上一个菜单，path写上`/random.html/`即可。
