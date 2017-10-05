class EntityRegInnings{
    constructor(rawData){
        this.PartitionKey 		= rawData.PartitionKey || '';
        this.RowKey  			= rawData.RowKey || '';
        this.ID_Ins				= rawData.ID_Consecutive || '';
        this.Name_Schedule    	= rawData.Date_Reg || '';
        this.Week_Days    		= rawData.Company || '';
        this.Start_Schedule    	= rawData.Process || '';
        this.End_Schedule		= rawData.Objective || '';
        this.Place              = rawData.Place || '';
        this.Pais               = rawData.Pais || '';
        this.ID_Pais            = rawData.ID_Pais || '';
    }
    RegInningsMod(){
        return strMErge(
            this.PartitionKey 	,
            this.RowKey  		,
            this.ID_Ins			,
            this.Name_Schedule  ,
            this.Week_Days    	,
            this.Start_Schedule ,
            this.End_Schedule	,
            this.Place          ,
            this.Pais           ,
            this.ID_Pais         
        )
    }
}

module.exports = EntityRegInnings;