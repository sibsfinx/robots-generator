/*jslint devel:true*/
/*global module, require*/

(function () {

    'use strict';

    var fs = require('fs'),
        defaults = require('lodash.defaults');

    module.exports = function (params) {

        var options = defaults(params || {}, {
            useragent: '*',
            allow: null,
            disallow: 'cgi-bin/',
            url: null,
            out: 'robots.txt',
            callback: null
        }),
            config,
            i,
            add = function (name, rule) {
                if (rule) {
                    if (typeof rule === 'string') {
                        config += '\n' + name + ': ' + rule;
                    } else {
                        for (i = 0; i < rule.length; i += 1) {
                            config += '\n' + name + ': ' + rule[i];
                        }
                    }
                }
            };

        config = 'User-agent: ' + options.useragent;

        add('Allow', options.allow);
        add('Disallow', options.disallow);

        if (options.url) {
            config += '\nSitemap: ' + options.url + 'sitemap.xml';
        }

        fs.writeFile(options.out, config, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Generated robots.txt');
            }
            if (options.callback) {
                return options.callback();
            }
        });

    };

}());
