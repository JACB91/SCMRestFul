class EntityUsers{
    constructor(rawData){
        this.PartitionKey            = rawData.PartitionKey || '';
        this.RowKey                  = rawData.RowKey || '';
        this.ID_User				 = rawData.PartitionKey || '';
        this.Code_User  		     = rawData.PartitionKey || '';
        this.Profile_User  		     = rawData.PartitionKey || '';
        this.Username  			     = rawData.PartitionKey || '';
        this.Name_User  		     = rawData.PartitionKey || '';
        this.Password_User  	     = rawData.PartitionKey || '';
        this.Permissions_User  	     = rawData.PartitionKey || '';
        this.Name_Place			     = rawData.PartitionKey || '';
        this.Place                   = rawData.Place || '';
        this.Pais                    = rawData.Pais || '';
        this.ID_Pais                 = rawData.ID_Pais || '';
    }
    ButtonMod(){
        return strMErge(
            this.PartitionKey  	  	,	
            this.RowKey  			,	
            this.ID_User			,
            this.Code_User  		,
            this.Profile_User  		,
            this.Username  			,
            this.Name_User  		,
            this.Password_User  	,
            this.Permissions_User  	,
            this.Name_Place			,            
            this.Place              ,
            this.Pais               ,
            this.ID_Pais         			
            )
    }
}

module.exports = EntityUsers;