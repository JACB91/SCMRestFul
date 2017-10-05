class EntityConfigurateInnings{
    constructor(rawData){
        this.PartitionKey = rawData.PartitionKey || '';
        this.RowKey  = rawData.RowKey || '';
        this.Name_Innings = rawData.Name_Innings || '';
        this.Users_Innings = rawData.Users_Innings || '';
        this.Name_Place_Innings = rawData.Name_Place_Innings || '';
        this.ID_Turno = rawData.ID_Turno || '';
        this.ID_User = rawData.ID_User || '';
        this.ID_Innings = rawData.ID_Innings || '';
        this.Place = rawData.Place || '';
        this.Pais = rawData.Pais || '';
        this.ID_Pais = rawData.ID_Pais || ''; this.Place = rawData.Place || '';
        this.Pais = rawData.Pais || '';
        this.ID_Pais = rawData.ID_Pais || '';
    }
    ConfigurateInningsMod(){
        return strMErge(
            this.PartitionKey  	  	,	
            this.RowKey  			,
            this.Name_Innings       ,
            this.Users_Innings      ,
            this.Name_Place_Innings ,
            this.ID_Turno           ,
            this.ID_User            ,
            this.ID_Innings         ,
            this.Place 				,	
            this.Pais 				,	
            this.ID_Pais 			,
            )
    }
}

module.exports = EntityConfigurateInnings;