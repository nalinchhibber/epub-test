//External libraries
var express = require('express');
var port = process.env.PORT || 3000;

//Init Express app
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
