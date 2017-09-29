var azure = require('azure-storage');
var ModelButton = require('../../../Entity/EntityButtons');
var repository = require('../../../../BAL/Business/BussinesButtons');
var accountName = 'vscodetest';
var async = require('async');
var accountKey = 'TVHpH9j2ZQsWdnnoiXe50zfJjezEw4WWRZri9qzN9XE+SroY8XSaUQH31rcxV5w2vdYLyp42uB/BMCxduQcy1A==';
var tableServiceButtons = azure.createTableService(accountName, accountKey);

class button{
    constructor(parameters){
        this.parameters = parameters
    }
    
    insertButtons(parameters){
        tableServiceButtons.createTableIfNotExists('Buttons', function(error,result, response){
            if(!error)
            {
                tableServiceButtons.insertEntity('Buttons', parameters, function(error, result, response){
                    if(error)
                    {
                        console.log('Result', response);
                    }
                });
            }
        });
    }

    deleteButtons(parameters){
        var task = {
                PartitionKey: {'_': this.parameters.PartitionKey},
                RowKey: {'_': this.parameters.RowKey},
                Pais:{'_': this.parameters.Pais},
                Place:{'_': this.parameters.Place}
                };

        tableServiceButtons.createTableIfNotExists('Buttons', function(error,result, response){
            if(!error)
                {
                    tableServiceButtons.deleteEntity('Buttons', task, function(error, result, response){
                        if(!error) {
                            console.log('Result : ', result);
                        }
                });
            }
        });
    }

    getOneByIdForPlace(parameters){

        var Query = new azure.TableQuery()
        .where('PartitionKey == ? && ID_Pais == ? && Place == ? && ID_Reference == ?',
        this.parameters.PartitionKey,
        this.parameters.ID_Pais,
        this.parameters.Place,
        this.parameters.ID_Reference
        );
        tableServiceButtons.queryEntities('Buttons',Query, null, function(error,result,response){
            if(!error){
                var rt = result.entries;
                console.log('Result : ', rt);
                return result.entries;
                
            }
        });
    }
    
    getAllForPlace(){
        return getAllForPlacefun().then(function(response){
            return Promise.resolve(response);
        }).catch(function(error){
            console.log(error);
        });
    }
    updateOneByIdForPlace(parameters){
        
    }
}
module.exports = button;

function getAllForPlacefun(){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery();    
            tableServiceButtons.queryEntities('Buttons',Query, null, function(error,result,response){
                if(!this.error){
                    resolve(JSON.stringify(result.entries));
                }else{
                    reject(this.error);
                }
            });
    });
}