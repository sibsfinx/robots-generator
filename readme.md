# gulp-robots [![Build Status](https://travis-ci.org/haydenbleasel/robots-generator.svg?branch=master)](https://travis-ci.org/haydenbleasel/robots-generator)

Robots.txt generator for Gulp. Simple wrapper around [robots-generator](https://github.com/haydenbleasel/robots-generator). Requires Node 4+. Installed through NPM with:

```shell
npm install gulp-robots --save-dev
```

Check out robots-generator for example options. This module scans your HTML for `<link rel="sitemap" />`. Example usage:

```js
gulp.task('default', function () {
    gulp.src('index.html')
        .pipe(robots({
            useragent: '*',
            allow: ['folder1/', 'folder2/'],
            disallow: ['cgi-bin/']
        }))
        .pipe(gulp.dest('robots.txt'));
});
```
