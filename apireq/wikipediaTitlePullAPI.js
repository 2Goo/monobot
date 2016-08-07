var request = require('request');
var url = require('url');
var j = request.jar();
var request = request.defaults({ jar: j })
request(url.parse('en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=2&format=json'), function (error, response, body) {
    if (!error) {
        data = JSON.parse(body);
        console.log(data);
    }
    else {
        console.log(error);
    }
});
