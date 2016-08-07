var census = require('citysdk')('4ec24e728a19fd67b22e0406443a5ee3605ec36d');
var request = {
    "zip": "49506",
    "level": "blockGroup",
    "variables": [
        "income",
        "population"
    ]
};
census.APIRequest(request, function (response) {
    console.log(response);
});

