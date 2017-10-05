class EntityRegisterCaller{
    constructor(rawData){
        this.PartitionKey 		     = rawData.PartitionKey || '';
        this.RowKey  			     = rawData.RowKey || '';
        this.ID_Ref					 = rawData.PartitionKey || '';
        this.ID_Close                = rawData.PartitionKey || '';
        this.Act_Caller              = rawData.PartitionKey || '';
        this.Act_Service             = rawData.PartitionKey || '';
        this.Date_Caller             = rawData.PartitionKey || '';
        this.Date_Caller_Close       = rawData.PartitionKey || '';
        this.Date_Service            = rawData.PartitionKey || '';
        this.Date_Service_Close      = rawData.PartitionKey || '';
        this.Name_Place              = rawData.PartitionKey || '';
        this.Region                  = rawData.PartitionKey || '';
        this.Zone                    = rawData.PartitionKey || '';
        this.ID_Caller               = rawData.PartitionKey || '';
        this.ID_Service              = rawData.PartitionKey || '';
        this.ReCall_Call             = rawData.PartitionKey || '';
        this.ReCall_Service          = rawData.PartitionKey || '';
        this.Liable                  = rawData.PartitionKey || '';
        this.Type_Close_Call         = rawData.PartitionKey || '';
        this.Point_Latitude          = rawData.PartitionKey || '';
        this.Point_Longitude         = rawData.PartitionKey || '';
        this.ID_Register             = rawData.PartitionKey || '';
        this.Place                   = rawData.Place || '';
        this.Pais                    = rawData.Pais || '';
        this.ID_Pais                 = rawData.ID_Pais || '';
    }
    ButtonMod(){
        return strMErge(
            this.PartitionKey 	    ,
            this.RowKey  		    ,
            this.ID_Ref				,
            this.ID_Close           ,
            this.Act_Caller         ,
            this.Act_Service        ,
            this.Date_Caller        ,
            this.Date_Caller_Close  ,
            this.Date_Service       ,
            this.Date_Service_Close ,
            this.Name_Place         ,
            this.Region             ,
            this.Zone               ,
            this.ID_Caller          ,
            this.ID_Service         ,
            this.ReCall_Call        ,
            this.ReCall_Service     ,
            this.Liable             ,
            this.Type_Close_Call    ,
            this.Point_Latitude     ,
            this.Point_Longitude    ,
            this.ID_Register        ,
            this.Place              ,
            this.Pais               ,
            this.ID_Pais         
                    
            )
    }
}

module.exports = EntityRegisterCaller;