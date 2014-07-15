var http = require('http'),
    bl = require('bl');

var urls = process.argv.splice(2),
    results = [],
    count = 0;


function printResults() {
  for (var i = 0; i < urls.length; i++)
    console.log(results[i]);
}

function httpGet(index) {
  http.get(urls[index], function(response) {
    response.pipe(bl(function(err, data) {
      results[index] = data.toString();
      count++;

      if (count === urls.length)
        printResults()
    }));
  });
}

for (var i = 0; i < urls.length; i++)
  httpGet(i)
