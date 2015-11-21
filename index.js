const _ = require('underscore');

(() => {

    'use strict';

    module.exports = function robots (params, next) {

        const options = _.defaults(params || {}, {
            useragent: '*',
            allow: [],
            disallow: ['cgi-bin/'],
            sitemap: null
        }),
            configuration = [`User-agent: ${ options.useragent }`];

        if (options.allow.length) {
            for (const a of options.allow) {
                configuration.push(`Allow: ${ a }`);
            }
        }

        if (options.disallow.length) {
            for (const d of options.disallow) {
                configuration.push(`Disallow: ${ d }`);
            }
        }

        if (options.sitemap) {
            configuration.push(`Sitemap: ${ options.url }sitemap.xml`);
        }

        return next ? next(null, configuration) : true;

    };

})();
