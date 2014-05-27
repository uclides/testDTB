var express = require('express');
var mysql = require('mysql');
var jsdom = require("jsdom");
var http = require("http");
var app = express();
app.use(express.cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.session({ secret: 'lollllo' }));

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : ''
    });


exports.login = function(req,res){
  var user = req.body.email;
  var pass = req.body.password;
  connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
  }
connection.query('USE dtb', function(err, rows, fields) {
  if (err) throw err;
connection.query('SELECT idusuarios from usuarios where nombre="'+user+'" and password="'+pass+'"', function(error, result, fila) {
 if(!error) {
      console.log(result.length);
      if(result.length > 0){
        req.session.user = req.body.user;
        res.redirect('/login');
      }else{
        //res.send('El usuario no existe o sus datos son incorrectos.');
      res.render('login',{
        out: 'datos incorrectos'
      });
      }
    }else{
      console.log('Error');
    }
});
});
});
};

