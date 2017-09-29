class EntityButtons{
    constructor(rawData){
        this.PartitionKey = rawData.PartitionKey || '';
        this.RowKey  = rawData.RowKey || '';
        this.ID_Reference = rawData.ID_Reference || '';
        this.ID_Caller = rawData.ID_Caller || '';
        this.ID_Service = rawData.ID_Service || '';
        this.ID_Close = rawData.ID_Close || '';
        this.Ini_Date_Service = rawData.Ini_Date_Service || '';
        this.Ini_Date_Caller = rawData.Ini_Date_Caller || '';
        this.End_Date_Service = rawData.End_Date_Service || '';
        this.End_Date_Caller = rawData.End_Date_Caller || '';
        this.ActiveService = rawData.ActiveService || '';
        this.ActiveCaller = rawData.ActiveCaller || '';
        this.Innings = rawData.Innings || '';
        this.Zone = rawData.Zone || '';
        this.Place = rawData.Place || '';
        this.Pais = rawData.Pais || '';
        this.ID_Pais = rawData.ID_Pais || '';
        this.ReCall_Call = rawData.ReCall_Call || '';
        this.ReCall_Service = rawData.ReCall_Service || '';
        this.Liable = rawData.Liable || '';
        this.Type_Close_Call = rawData.Type_Close_Call || '';
    }
    ButtonMod(){
        return strMErge(
            this.PartitionKey  	  	,	
            this.RowKey  			,	
            this.ID_Reference 		,	
            this.ID_Caller 			,	
            this.ID_Service 		,	
            this.ID_Close 			,	
            this.Ini_Date_Service 	,	
            this.Ini_Date_Caller 	,	
            this.End_Date_Service 	,	
            this.End_Date_Caller 	,	
            this.ActiveService 		,	
            this.ActiveCaller 		,	
            this.Innings 			,	
            this.Zone 				,	
            this.Place 				,	
            this.Pais 				,	
            this.ID_Pais 			,	
            this.ReCall_Call 		,	
            this.ReCall_Service 	,	
            this.Liable 	        ,
            this.Type_Close_Call			
            )
    }
}

module.exports = EntityButtons;