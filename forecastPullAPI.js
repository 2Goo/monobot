var Wunderground = require('wundergroundnode');
var myKey = '5b5618a68b051e33';
var wunderground = new Wunderground(myKey);

wunderground.forecast().request('96021', function (err, response) {
    console.log(response.alerts[0].type);
});