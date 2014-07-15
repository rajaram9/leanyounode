var net = require('net');
var port = process.argv[2];

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now() {
  var date = new Date(),
    year = date.getFullYear(),
    month = zeroFill(date.getMonth() + 1),
    day = zeroFill(date.getDate()),
    hours = zeroFill(date.getHours()),
    minutes = zeroFill(date.getMinutes());

  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
}

var server = net.createServer(function(soket) {
  soket.end(now() + '\n');
})

server.listen(port);
