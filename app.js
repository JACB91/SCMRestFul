'use strict'
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var RouterChat = require('../src/Routes/RouteChat/RouteChat');
var RouterButtons = require('../src/Routes/RoutesButtons/RoutesButtons');
var RoutesConfigurateInnings = require('../src/Routes/RoutesConfigurateInnings/RoutesConfigurateInnings');
var RoutesGlobalConfig = require('../src/Routes/RoutesGlobalConfig/RoutesGlobalConfig');
var RoutesPerfilUsers = require('../src/Routes/RoutesPerfilUsers/RoutesPerfilUsers');
var RoutesRegActionsCoP = require('../src/Routes/RoutesRegActionsCoP/RoutesRegActionsCoP');
var RoutesRegInnings = require('../src/Routes/RoutesRegInnings/RoutesRegInnings');
var RoutesRegisterCaller = require('../src/Routes/RoutesRegisterCaller/RoutesRegisterCaller');
var RoutesUsers = require('../src/Routes/RoutesUsers/RoutesUsers');

app.use('/Chat',RouterChat);
app.use('/Buttons',RouterButtons);
app.use('/ConfigurateInnings',RoutesConfigurateInnings);
app.use('/GlobalConfig',RoutesGlobalConfig);
app.use('/PerfilUsers',RoutesPerfilUsers);
app.use('/RegActionsCoP',RoutesRegActionsCoP);
app.use('/RegInnings',RoutesRegInnings);
app.use('/RegisterCaller',RoutesRegisterCaller);
app.use('/Users',RoutesUsers);

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
});

io.emit('some event', { for: 'everyone' });

http.listen(3000, function(){
  console.log('listening on *:3000');
});