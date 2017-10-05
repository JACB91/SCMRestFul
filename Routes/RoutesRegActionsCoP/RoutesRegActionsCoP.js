var express = require('express');
var buttonModel = require('../../DAL/Entity/EntityButtons');
var BALButtons = require('../../BAL/Business/BusinessRegActionsCoP');
var router = express.Router();


router.get('/api/Insert/:PartitionKey/:RowKey/:ID_Reference/:ID_Caller/:ID_Service/:ID_Close/:Ini_Date_Service/:Ini_Date_Caller/:End_Date_Service/:End_Date_Caller/:ActiveService/:ActiveCaller/:Innings/:Zone/:Place/:Pais/:ID_Pais/:ReCall_Call/:ReCall_Service/:Liable/:Type_Close_Call', function(req, res){
    var parameters = new buttonModel({
      PartitionKey      : String(req.params.PartitionKey),
      RowKey            : String(req.params.RowKey),
      ID_Reference 		  : String(req.params.ID_Reference),
      ID_Caller 			  : String(req.params.ID_Caller),
      ID_Service 		    : String(req.params.ID_Service),
      ID_Close 			    : String(req.params.ID_Close),
      Ini_Date_Service 	: new Date(Date.parse(req.params.Ini_Date_Service)),
      Ini_Date_Caller 	: new Date(Date.parse(req.params.Ini_Date_Caller)),
      End_Date_Service 	: new Date(Date.parse(req.params.End_Date_Service)),
      End_Date_Caller 	: new Date(Date.parse(req.params.End_Date_Caller)),
      ActiveService 		: Boolean(req.params.ActiveService),
      ActiveCaller 		  : Boolean(req.params.ActiveCaller),
      Innings 			    : String(req.params.Innings),
      Zone 				      : String(req.params.Zone),
      Place 				    : String(req.params.Place),
      Pais 				      : String(req.params.Pais),
      ID_Pais 			    : Number(req.params.ID_Pais),
      ReCall_Call 		  : Number(req.params.ReCall_Call),
      ReCall_Service 	  : Number(req.params.ReCall_Service),
      Liable 			      : String(req.params.Liable),
      Type_Close_Call   : Number(req.params.Type_Close_Call)
    });
    new BALButtons(parameters).insert(parameters).then(function(result){
      var reslp = JSON.parse(result);
      res.send(reslp);
    }).catch(function(error){
      console.log('Ups.... a ocurrido un error.');
      res.sendFile('Ups.... a ocurrido un error.');
    });
});

router.get('/api/Delete/:ID_Pais/:Place/:ID_Reference', function(req, res){
  var parameters = new buttonModel({
    Place               : String(req.params.Place),
    ID_Pais 	          : Number(req.params.ID_Pais),
    ID_Reference        : String(req.params.ID_Reference)
  });
  new BALButtons(parameters).delete(parameters).then(function(result){
    var reslp = JSON.parse(result);
    res.send(reslp);
  }).catch(function(error){
    console.log('Ups.... a ocurrido un error.');
    res.sendFile('Ups.... a ocurrido un error.');
  });
});

router.get('/api/UpdateOneByIdForPlace/:ID_Pais/:Place', function(req, res){
  var parameters = new buttonModel({
    PartitionKey      : String(req.params.PartitionKey),
    RowKey            : String(req.params.RowKey),
    ID_Reference 		  : String(req.params.ID_Reference),
    ID_Caller 			  : String(req.params.ID_Caller),
    ID_Service 		    : String(req.params.ID_Service),
    ID_Close 			    : String(req.params.ID_Close),
    Ini_Date_Service 	: new Date(Date.parse(req.params.Ini_Date_Service)),
    Ini_Date_Caller 	: new Date(Date.parse(req.params.Ini_Date_Caller)),
    End_Date_Service 	: new Date(Date.parse(req.params.End_Date_Service)),
    End_Date_Caller 	: new Date(Date.parse(req.params.End_Date_Caller)),
    ActiveService 		: Boolean(req.params.ActiveService),
    ActiveCaller 		  : Boolean(req.params.ActiveCaller),
    Innings 			    : String(req.params.Innings),
    Zone 				      : String(req.params.Zone),
    Place 				    : String(req.params.Place),
    Pais 				      : String(req.params.Pais),
    ID_Pais 			    : Number(req.params.ID_Pais),
    ReCall_Call 		  : Number(req.params.ReCall_Call),
    ReCall_Service 	  : Number(req.params.ReCall_Service),
    Liable 			      : String(req.params.Liable),
    Type_Close_Call   : Number(req.params.Type_Close_Call)
  });
  new BALButtons(parameters).updateOneByIdForPlace(parameters).then(function(result){
    var reslp = JSON.parse(result);
    res.send(reslp);
  }).catch(function(error){
    console.log('Ups.... a ocurrido un error.');
    res.sendFile('Ups.... a ocurrido un error.');
  });
});

router.get('/api/GetOneByIdForPlace/:ID_Pais/:Place/:ID_Reference', function(req, res){
  var parameters = new buttonModel({
    Place             : String(req.params.Place),
    ID_Pais 	        : Number(req.params.ID_Pais),
    ID_Reference      : String(req.params.ID_Reference)
  });
  new BALButtons(parameters).getOneByIdForPlace(parameters).then(function(result){
    var reslp = JSON.parse(result);
    res.send(reslp);
  }).catch(function(error){
    console.log('Ups.... a ocurrido un error.');
    res.sendFile('Ups.... a ocurrido un error.');
  });
});

router.get('/api/GetAllForPlace/:ID_Pais/:Place', function(req, res){
  var parameters = new buttonModel({
    Place     : String(req.params.Place),
    ID_Pais 	: Number(req.params.ID_Pais)
  });
  new BALButtons(parameters).getAllForPlace(parameters).then(function(result){
    var reslp = JSON.parse(result);
    res.send(reslp);
  }).catch(function(error){
    console.log('Ups.... a ocurrido un error.');
    res.sendFile('Ups.... a ocurrido un error.');
  });
});
module.exports = router;