class EntityGlobalConfig{
    constructor(rawData){
        this.PartitionKey = rawData.PartitionKey || '';
        this.RowKey  = rawData.RowKey || '';
        this.ID_Config = rawData.ID_Config || '';
        this.Data_Source = rawData.Data_Source || '';
        this.Data_Base_Motor = rawData.Data_Base_Motor || '';
        this.Initial_Catalog = rawData.Initial_Catalog || '';
        this.UserName= rawData.UserName || '';
        this.Password= rawData.Password || '';
        this.Lenguage= rawData.Lenguage || '';
        this.Licence= rawData.Name_Place || '';
        this.Name_Place = rawData.Name_Place || '';
        this.Zone = rawData.Zone || '';
        this.Region = rawData.Region || '';
        this.Country= rawData.Country || '';
        this.City = rawData.City || '';
        this.Point_Latitude = rawData.Point_Latitude || '';
        this.Point_Longitude = rawData.Point_Longitude || '';
        this.Optimal_Time = rawData.Optimal_Time || '';
        this.Average_Time = rawData.Average_Time || '';
        this.Critical_Time = rawData.Critical_Time || '';
        this.Export_Path = rawData.Export_Path || '';
        this.Session_Time = rawData.Session_Time || '';
        this.Port_COM = rawData.Port_COM || '';
        this.Place = rawData.Place || '';
        this.Pais = rawData.Pais || '';
        this.ID_Pais = rawData.ID_Pais || '';
    }
    GlobalConfigMod(){
        return strMErge(
            this.PartitionKey  	  	,	
            this.RowKey  			,	
            this.ID_Config          ,
            this.Data_Source        ,
            this.Data_Base_Motor    ,
            this.Initial_Catalog    ,
            this.UserName           ,
            this.Password           ,
            this.Lenguage           ,
            this.Licence            ,
            this.Name_Place         ,
            this.Zone               ,
            this.Region             ,
            this.Country            ,
            this.City               ,
            this.Point_Latitude     ,
            this.Point_Longitude    ,
            this.Optimal_Time       ,
            this.Average_Time       ,
            this.Critical_Time      ,
            this.Export_Path        ,
            this.Session_Time       ,
            this.Port_COM           ,
            this.Place 				,	
            this.Pais 				,	
            this.ID_Pais 			           
            )
    }
}

module.exports = EntityGlobalConfig;