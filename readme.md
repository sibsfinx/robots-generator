# Robots [![Build Status](https://travis-ci.org/haydenbleasel/robots-generator.svg?branch=master)](https://travis-ci.org/haydenbleasel/robots-generator)

Robots.txt generator for Node.js. Needs work accepting multiple User-agent definitions. Usage:

```
var robots = require('robots-generator');

robots({
  header: 'Hacked together with Node.js',
  allow: '*',
  disallow: '/cgi-bin/',
  url: 'http://haydenbleasel.com/',
  delay: 0,
  out: 'dist/robots.txt'
});
```
