var buttonModel = require('../Entity/EntityButtons');
var model = new buttonModel({
    PartitionKey        : String('000100A-003x'),
    RowKey              : String('Btn3'),
    ID_Reference 		: String('000100A-003x'),
    ID_Caller 			: String('000100A-0032'),
    ID_Service 		    : String('000100A-0031'),
    ID_Close 			: String('000100A-0020'),
    Ini_Date_Service 	: new Date(Date.now()),
    Ini_Date_Caller 	: new Date(Date.now()),
    End_Date_Service 	: new Date(Date.now()),
    End_Date_Caller 	: new Date(Date.now()),
    ActiveService 		: Boolean(false),
    ActiveCaller 		: Boolean(false),
    Innings 			: String('Turno 3'),
    Zone 				: String('Zona 3'),
    Place 				: String('Cinema De Prueba Perú'),
    Pais 				: String('Perú'),
    ID_Pais 			: Number(1),
    ReCall_Call 		: Number(0),
    ReCall_Service 	    : Number(0),
    Liable 			    : String('Usuario de prueba'),
    Type_Close_Call     : Number(0)
});

module.exports = model;