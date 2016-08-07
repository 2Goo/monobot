ddg = require('ddg');

ddg.query('human', function (err, data) {
    results = data.RelatedTopics;
    console.log(results[0].Text);
});
