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
            _.each(options.allow, (a) => configuration.push(`Allow: ${ a }`));
        }

        if (options.disallow.length) {
            _.each(options.disallow, (d) => configuration.push(`Disallow: ${ d }`));
        }

        if (options.sitemap) {
            configuration.push(`Sitemap: ${ options.url }sitemap.xml`);
        }

        return next ? next(null, configuration) : true;

    };

})();
