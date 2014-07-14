var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var extension = process.argv[3];

fs.readdir(file, function (err, list) {
  if (err)
    throw err;
  list.forEach(function (file) {
    if (path.extname(file) === '.' + extension)
      console.log(file);
  })
})
