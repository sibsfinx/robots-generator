/*jslint devel:true*/
/*global module, require*/

(function () {

    'use strict';

    var fs = require('fs'),
        defaults = require('lodash.defaults');
    
    module.exports = function (params) {

        var options = defaults(params || {}, {
            header: 'robots.txt',
            allow: '*',
            disallow: '/cgi-bin/',
            url: null,
            out: 'robots.txt'
        });

        if (!options.url) {
            console.log('URL is a required parameter.');
            return false;
        } else {
            var config = '# ' + options.header + '\n\nUser-agent: ' + options.allow + '\nDisallow: ' + options.disallow + '\nSitemap: ' + options.url + 'sitemap.xml';
            fs.writeFile(options.out, config, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Generated robots.txt');
                }
            });
        }

    };

}());
