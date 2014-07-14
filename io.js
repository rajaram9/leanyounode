// my code
var fs = require('fs');
var file = process.argv[2]
var buf = fs.readFileSync(file);
var str = buf.toString();
console.log(str.split('\n').length - 1);

// Answer
var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1
console.log(lines);
console.log(fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1);

