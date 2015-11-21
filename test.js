const robots = require('./index.js'),
    fs = require('fs');

(() => {

    'use strict';

    robots({
        url: 'http://haydenbleasel.com/',
        allow: ['folder1/', 'folder2/'],
        sitemap: 'http://haydenbleasel.com/sitemap.xml'
    }, (error, config) => {
        console.log(error, config);
        fs.writeFile('test/robots.txt', config.join('\n'), { encoding: 'utf8' }, (error2) =>
            console.log(error2));
    });

})();
