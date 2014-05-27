// Rutas de la aplicación
var http = require('http');
var express = require('express');
var backbone = require('backbone');
var _ = require('underscore');
require('shelljs/global');

var consola = [
  { 
    out: 'no disponible' 
}
];

var cmd=function(output){
console.log("la puta salida de la consola es: "+ output);
};

exports.index = function(req, res){

  // Renderiza la plantilla 'login' cuando en el navegador
  // nos encontremos en la raiz '/' --> http://localhost:puerto/
  res.render('login', {
    // Enviamos como variables un título
    // y objeto 'user' que contiene toda
    // la información del usuario y viaja en el 'request'
    title: 'login',
    //user: req.user
  });
};

exports.salida = function(req, res) {
  var facts = _(consola).detect(function (p) { 
    return p.out == req.params.out;
  }).facts;
  res.json(facts);
};

exports.dashboard = function(req, res){
  
  // Renderiza la plantilla 'index' cuando ha realizado el acceso correctamente
  var outs = consola.map(function(p) { return p.out; });

  res.render('index', {
    title: 'test'
   // user: req.user,
   // consola: outs,
   // adb: 'ninguno'
  });

};
