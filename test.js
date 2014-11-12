var robots = require('./index.js');
robots({
    url: 'http://haydenbleasel.com/',
    callback: function (err, config) {
        console.log(config);
    }
});
