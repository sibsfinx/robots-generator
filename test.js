var robots = require('./index.js');
robots({
    url: 'http://haydenbleasel.com/',
    out: 'test/robots.txt',
    callback: function (err, config) {
        console.log(config);
    }
});
