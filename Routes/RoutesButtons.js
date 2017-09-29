var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var azure = require('azure-storage');
var async = require('async');
var businessIntelligent = require('../DAL/TableStorage/Repository/Class/Buttons')
app.get('/test', function(req, res){
    async.times(2,(i, callback)=>{
        var GetOneByIdButton = new repositoryButtons(model).getAll(model);
        console.log(GetOneByIdButton);
    });
      request((error,response, body) =>{
        var resultO = json.parse(body);
      });
    
        // res.json({'itworks': 'yes'});
        
    });