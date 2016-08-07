var NYT = require('nyt');

var keys = {
    'article-search': 'bba42cb897b84e4588479cfd8e6f4aea'
};

var nyt = new NYT(keys);

nyt.article.search({ 'q': 'common core' }, function (response) {
    data = JSON.parse(response);
    console.log(data.response.docs[0].headline.main);
});

