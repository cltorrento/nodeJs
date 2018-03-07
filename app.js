var express = require('express'); 
var app = express();

const hostname = '127.0.0.1';
const port = 3000;
 
app.set('views', './views');
app.set('view engine', 'jade');
 
app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
