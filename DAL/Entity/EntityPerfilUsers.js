class EntityPerfilUsers{
    constructor(rawData){
        this.PartitionKey = rawData.PartitionKey || '';
        this.RowKey  = rawData.RowKey || '';
        this.Perfil_Name = rawData.RowKey || '';
        this.P_view = rawData.RowKey || '';
        this.P_Edit = rawData.RowKey || '';
        this.P_Create = rawData.RowKey || '';
        this.Id_Profile = rawData.RowKey || '';
        this.Place = rawData.Place || '';
        this.Pais = rawData.Pais || '';
        this.ID_Pais = rawData.ID_Pais || '';
    }
    PerfilUsersMod(){
        return strMErge(
            this.PartitionKey  	  	,	
            this.RowKey             ,
            this.Perfil_Name        ,
            this.P_view             ,
            this.P_Edit             ,
            this.P_Create           ,
            this.Id_Profile     	,
            this.Place              ,	
            this.Pais 				,	
            this.ID_Pais 				
            )
    }
}

module.exports = EntityPerfilUsers;