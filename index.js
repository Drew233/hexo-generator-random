'use strict'

var assign = require('object-assign')
var pathFn = require('path')

var config = hexo.config.urls = assign({
    path: 'random.html'
}, hexo.config.urls);

if(!pathFn.extname(config.path)){
    config.path += '.html';
}

hexo.extend.generator.register('urls',require('./lib/generator'));
