const url = require('url');

const URL = url.URL;
const myURL = new URL('https://github.com/dlawhdgus/JS_STUDY.git');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('----------------------------------------------------');

const parsedUrl = url.parse('https://github.com/dlawhdgus/JS_STUDY.git');
console.log('ur;.parse():',parsedUrl);
console.log('url.format():',url.format(parsedUrl));