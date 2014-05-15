/*jslint devel:true*/
/*global module, require*/

(function () {

    'use strict';
    
    module.exports = function (params) {

        var fs = require('fs'),
            header = params.header || 'robots.txt',
            allow = params.allow || '*',
            disallow = params.disallow || '/cgi-bin/',
            url = params.url,
            out = params.out || 'robots.txt',
            config = '# ' + header + '\n\nUser-agent: ' + allow + '\nDisallow: ' + disallow + '\nSitemap: ' + url + '/sitemap.xml';

        if (!url) {
            console.log('URL is a required parameter.');
            return false;
        } else {
            fs.writeFile(out, config, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Generated robots.txt');
                }
            });
        }

    };

}());
