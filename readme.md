# hexo-generator-random

已pr到官网：https://hexo.io/plugins/

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
npm install hexo-generator-random --save
```

#### 注意
在博客根目录下的`_config.yml`里面的`url`需要改成`/`或者你的域名'

#### 已知Bug
不同的主题可能会有其他页面混进随机文章

#### 使用
上面的配置如果都是正确的话，当你hexo g之后，在public文件夹下会生成一个random.html。
直接访问yoursite/random.html就可以感受这个随机文章了。
你甚至可以直接在菜单栏里面加上一个菜单，path写上`/random.html/`即可。
