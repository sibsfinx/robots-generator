var robots = require('./index.js');
robots({
    header: 'Testing the robots.txt generator.',
    allow: '*',
    disallow: '/cgi-bin/',
    url: 'http://haydenbleasel.com/',
    out: 'robots.txt'
});
