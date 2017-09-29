'use strict'
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var async = require('async');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var BALButtons = require('../src/BAL/Business/BussinesButtons');
var parameters = require('./DAL/Model/Buttons');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/GetAllForPlace', function(req, res){
    var result = new BALButtons().getAllForPlace();
    console.log(result);
    res.send(result);
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
      //io.emit('chat message', resultOut);
    });
});

io.emit('some event', { for: 'everyone' });

http.listen(3000, function(){
  console.log('listening on *:3000');
});

