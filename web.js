var express = require('express'),
    jade = require('jade'), 
    main = require('./controllers/main');

var app = express.createServer(express.logger());

/**
 * General Configuration
 */
app.configure(function() { 
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
});

/**
 * Root URL
 */

app.get('/', main.index);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("express-template now listening on port " + port);
});