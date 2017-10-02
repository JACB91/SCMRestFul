var azure = require('azure-storage');
var accountName = 'vscodetest';
var accountKey = 'TVHpH9j2ZQsWdnnoiXe50zfJjezEw4WWRZri9qzN9XE+SroY8XSaUQH31rcxV5w2vdYLyp42uB/BMCxduQcy1A==';
var tableService = azure.createTableService(accountName, accountKey);

class PerfilUsers{
    constructor(parameters){
        this.parameters = parameters
    }
    
    insert(parameters){
        return insertFun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }
    delete(parameters){
        return deleteFun(parameters).then(function(response){
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
module.exports = PerfilUsers;

/* ------------------------------------------------ Funciones operacionales -------------------------------------------------- */

function getAllForPlacefun(parameters){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery() .where('ID_Pais == ? && Place == ?',
            parameters.ID_Pais,
            parameters.Place
            );    
            tableService.queryEntities('PerfilUsers',Query, null, function(error, result, response){
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
            tableService.queryEntities('PerfilUsers',Query, null, function(error,result,response){
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
        tableService.createTableIfNotExists('PerfilUsers', function(error,result, response){
            if(!error){
                tableService.insertEntity('PerfilUsers', parameters, function(error, result, response){
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
            tableService.deleteEntity('PerfilUsers',Query, null, function(error,result,response){
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
        tableService.replaceEntity('PerfilUsers',parameters, null, function(error,result,response){
                if(!error){
                   return resolve(result.entries);
                }else{
                   return reject(error);
                }
            });
    });
}

