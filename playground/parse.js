var https = require("https");
var username = 'KeenanKunzelman';

var extractedRepos = [];

var options = {
  host: 'api.github.com',
  path: '/users/' + username + '/repos',
  method: 'GET',
  headers: {'user-agent': 'node.js'}
};

var request = https.request(options, function(response){
  var body = '';
  response.on("data", function(chunk){
      body += chunk.toString('utf8');
});

response.on("end", function(){
    body = JSON.parse(body);
    for (var i = 0; i < body.length; i++) {
      extractedRepos.push({
        name: body[i].name,
        description: body[i].description,
        url: body[i].html_url,
        language: body[i].language

      });
    }
    console.log(extractedRepos);
    });

});



request.end();
