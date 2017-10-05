class EntityRegActionsCoP{
    constructor(rawData){
        this.PartitionKey 		= rawData.PartitionKey || '';
        this.RowKey  			= rawData.RowKey || '';
        this.ID_Consecutive		= rawData.ID_Consecutive || '';
        this.Date_Reg           = rawData.Date_Reg || '';
        this.Company            = rawData.Company || '';
        this.Process            = rawData.Process || '';
        this.Objective			= rawData.Objective || '';
        this.User_Father        = rawData.User_Father || '';
        this.User_Child         = rawData.User_Child || '';
        this.ID_User            = rawData.ID_User || '';
        this.ID_Config			= rawData.ID_Config || '';
        this.Place              = rawData.Place || '';
        this.Pais               = rawData.Pais || '';
        this.ID_Pais            = rawData.ID_Pais || '';
    }
    RegActionsCoPMod(){
        return strMErge(
            this.PartitionKey   ,		
            this.RowKey  		,	
            this.ID_Consecutive	,	
            this.Date_Reg       ,   
            this.Company        ,   
            this.Process        ,   
            this.Objective	    ,	
            this.User_Father    ,    
            this.User_Child     ,    
            this.ID_User        ,    
            this.ID_Config	    ,		
            this.Place          ,    
            this.Pais           ,    
            this.ID_Pais            
            )
    }
}

module.exports = EntityRegActionsCoP;