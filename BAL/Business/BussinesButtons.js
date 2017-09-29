'use strict'
var repository = require('../../DAL/TableStorage/Repository/Class/Buttons');
var async = require('async');
class BussinesButtons{
    constructor(parameters){
        this.parameters = parameters;
     }
     insertButton(parameters){
        return new repository().insertButton(parameters);
     }
     deleteButton(parameters){
        return new repository().deleteButton(parameters);
     }
     updateOneByIdForPlace(parameters){
        return new repository().updateOneByIdForPlace(parameters);
     }
     getOneByIdForPlace(parameters){
        return new repository().getOneByIdForPlace(parameters);
     }
     getAllForPlace(){
        return new Promise(function(resolve, reject){
            resolve(new repository().getAllForPlace());
        });
     }
}
module.exports = BussinesButtons;