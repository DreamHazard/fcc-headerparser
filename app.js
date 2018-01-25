var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var ua = require('express-useragent')

//set up port for use on hosted or local systems
const port = process.env.PORT || 3000;

//initialise modules to be used within the app
var app = module.imports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(ua.express());

app.get('/', function(req, res, next){
  var lang = req.acceptsLanguages();
  var soft = "OS: " + req.useragent.os;
  soft += ", Browser: " + req.useragent.browser;
  var ip = req.headers['x-forwarded-for'];
  ip = ip.substring(0, ip.indexOf(','));

  res.json({'ip':ip, 'lang':lang[0], 'soft':soft});
})


//start listen server
app.listen(port, function(){
});
