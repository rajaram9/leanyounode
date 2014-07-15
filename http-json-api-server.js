var http = require('http'),
    url = require('url'),
    port = process.argv[2];

if ( !String.prototype.contains ) {
  String.prototype.contains = function() {
    return String.prototype.indexOf.apply( this, arguments ) !== -1;
  };
}

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return {unixtime: time.getTime()}
}

var server = http.createServer(function(req, res) {
  if (req.method != 'GET')
    return res.end('send me a GET\n');

  var req_url = url.parse(req.url, true),
    pathname = req_url.pathname,
    iso = req_url.query.iso,
    time = new Date(iso),
    result;

  if (pathname.contains('parsetime'))
    result = parsetime(time);
  else if (pathname.contains('unixtime'))
    result = unixtime(time);

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
