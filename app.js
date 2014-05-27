// Archivo principal del Backend, configuración del servidor
// y otras opciones
var express = require('express'); // Express: Framework HTTP para Node.js
var routes = require('./routes'); // Dónde tenemos la configuración de las rutas
var path = require('path');
var jsdom  = require('jsdom');
var fs     = require('fs');
var jsdom = require('jsdom');
var http = require('http');
var usuario;
var pass;
var resultado;
var passport = require('passport');
var connections = require('./connections');
var identification = require('./identification');
/*var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;*/

// Importamos el modelo usuario y la configuración de passport
//importar el modulo para trabajar con la consola del sistema
require('shelljs/global');
// Conexión a la base de datos de MongoDB que tenemos en local
/*mongoose.connect('mongodb://localhost:27017/passport-example', function(err, res) {
  if(err) throw err;
  console.log('Conectado con éxito a la BD');
});
*/
// Iniciamos la aplicación Express

var app = express();

// Configuración (Puerto de escucha, sistema de plantillas, directorio de vistas,...)
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));

// Middlewares de Express que nos permiten enrutar y poder
// realizar peticiones HTTP (GET, POST, PUT, DELETE)
app.use(express.cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.methodOverride());
app.use(express.bodyParser());

// Ruta de los archivos estáticos (HTML estáticos, JS, CSS,...)
app.use(express.static(path.join(__dirname, 'public')));
// Indicamos que use sesiones, para almacenar el objeto usuario
// y que lo recuerde aunque abandonemos la página
app.use(express.session({ secret: 'lollllo' }));

// Configuración de Passport. Lo inicializamos
// y le indicamos que Passport maneje la Sesión

app.use(app.router);

  dom = require('express-jsdom')(app);
// Si estoy en local, le indicamos que maneje los errores
// y nos muestre un log más detallado
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/* Rutas de la aplicación */
// Cuando estemos en http://localhost:puerto/ (la raiz) se ejecuta el metodo index
// del modulo 'routes'
app.get('/', routes.index);

app.post('/login',connections.login);
app.get('/login', routes.dashboard);
/* Rutas de Passport */
// Ruta para desloguearse
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get('/deviceStatus',function (req,res){
	console.log(identification.statusdevice());
});
app.get('/hero/:name', routes.salida);
// Ruta para autenticarse con Facebook (enlace de login)

// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'

// Inicio del servidor
app.listen(app.get('port'), function (req,res){

});

function adb(req,res){

exec('adb devices', function(code, output) {
  console.log('Exit code:', code);
    console.log('output code:', output);
res.render('index',{
title: 'test',
user: req.user,
consola: '',
adb: output});
});
//res.json(output);
};
function DB(req ,res){
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
  }
connection.query('USE dtb', function(err, rows, fields) {
  if (err) throw err;
connection.query('SELECT idusuarios from usuarios where nombre="'+usuario+'" and password="'+pass+'"', function(error, result) {
  if (error){  
  console.log('error no hay nadie');
  }
  else{
   if(result.length > 0){
            console.log('Registro encontrado');
            
         }else{
            resultado=result.length;
            console.log('Registro no encontrado');
         }
}
});
});
});
};