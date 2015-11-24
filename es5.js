'use strict';

var robots = require('robots-generator').stream;

(function () {
    'use strict';

    module.exports = function (params) {
        return robots(params);
    };
})();
