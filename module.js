var filterfn = require('./module-filter');
var dir = process.argv[2];
var extension = process.argv[3];

filterfn(dir, extension, function (err, list) {
  if (err)
    return console.log('err');

  list.forEach(function (file) {
    console.log(file);
  })
});
