'use strict';

var pathFn = require('path');
var fs = require('fs');
var urlsTmpl;

module.exports = function(config) {
    if (urlsTmpl) return urlsTmpl;

    var nunjucks = require('nunjucks');
    var env = new nunjucks.Environment(null, {
        autoescape: false,
        watch: false,
        trimBlocks:true
    });

    env.addFilter('uriencode', function(str) {
        return encodeURI(str);
    });

    var urlsSrc = config.urls.template || pathFn.join(__dirname, '../random.html');
    urlsTmpl = nunjucks.compile(fs.readFileSync(urlsSrc, 'utf8'), env);

    return urlsTmpl;
};
