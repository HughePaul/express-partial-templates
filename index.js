'use strict';

var _ = require('underscore'),
    traverse = require('./lib/traverse');

var Parser = function (app) {

    var ext = '.' + app.get('view engine');

    var partials = traverse(app.get('views'));

    return function (req, res, next) {
        res.locals.partials = res.locals.partials || {};
        _.extend(res.locals.partials, partials);
        next();
    };
};

Parser.traverse = traverse;

module.exports = Parser;
