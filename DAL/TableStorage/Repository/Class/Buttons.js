var azure = require('azure-storage');
var accountName = 'vscodetest';
var accountKey = 'TVHpH9j2ZQsWdnnoiXe50zfJjezEw4WWRZri9qzN9XE+SroY8XSaUQH31rcxV5w2vdYLyp42uB/BMCxduQcy1A==';
var tableServiceButtons = azure.createTableService(accountName, accountKey);

class button{
    constructor(parameters){
        this.parameters = parameters
    }
    
    insertButtons(parameters){
        return insertButtonsFun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }
    deleteButtons(parameters){
        return deleteButtonsFun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }

    getOneByIdForPlace(parameters){
        return getOneByIdForPlaceFun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }

    getAllForPlace(parameters){
        return getAllForPlacefun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }
    updateOneByIdForPlace(parameters){
        return updateOneByIdForPlacefun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }
}
module.exports = button;

/* ------------------------------------------------ Funciones operacionales -------------------------------------------------- */

function getAllForPlacefun(parameters){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery() .where('ID_Pais == ? && Place == ?',
            parameters.ID_Pais,
            parameters.Place
            );    
            tableServiceButtons.queryEntities('Buttons',Query, null, function(error, result, response){
                if(!error){
                   return resolve(result.entries);
                }else{
                   return reject(error);
                }
            });
    });
}

function getOneByIdForPlaceFun(parameters){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery()
            .where('ID_Pais == ? && Place == ? && ID_Reference == ?',
            parameters.ID_Pais,
            parameters.Place,
            parameters.ID_Reference
            );
            tableServiceButtons.queryEntities('Buttons',Query, null, function(error,result,response){
                if(error){
                    return resolve(result.entries);
                }else{
                    return reject(error);
                }
            });
    });
}

function insertButtonsFun(parameters){
    return new Promise(function(resolve, reject){
        tableServiceButtons.createTableIfNotExists('Buttons', function(error,result, response){
            if(!error){
                tableServiceButtons.insertEntity('Buttons', parameters, function(error, result, response){
                    if(error){
                        return resolve(result.entries);
                    }else{
                        return reject(error);
                     }
                });
            }
        });
    });
}

function deleteButtonsFun(parameters){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery() .where('ID_Pais == ? && Place == ? && ID_Reference == ?',
            parameters.ID_Pais,
            parameters.Place,
            parameters.ID_Reference
            );    
            tableServiceButtons.deleteEntity('Buttons',Query, null, function(error,result,response){
                if(!error){
                   return resolve(result.entries);
                }else{
                   return reject(error);
                }
            });
    });
}

function updateOneByIdForPlacefun(parameters){
    return new Promise(function(resolve, reject){
            tableServiceButtons.replaceEntity('Buttons',parameters, null, function(error,result,response){
                if(!error){
                   return resolve(result.entries);
                }else{
                   return reject(error);
                }
            });
    });
}

