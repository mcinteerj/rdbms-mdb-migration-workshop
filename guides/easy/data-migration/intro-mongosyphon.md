Return to the root of the easy guide [here](..).

# MongoSyphon
In this section we will migrate the data from the Relational Database through MongoSyphon to MongoDB Atlas.

You can find the MongoSyphon.jar file and Config.js template in the [Resources Folder](../../../resources/). The detail below explains how to configure and run MongoSyphon in order to migrate your data. 

Your goal is to create a config.js file which MongoSyphon can use to extract data from  MySQL and transforms it inflight in order to load the data into MongoDB in the data model you created in the [Data Modelling Exercise](../data-modelling/). 

## Config File and How It Works

The follwing examples/explanation comes from the official [MongoSyphon GitHub](https://github.com/johnlpage/MongoSyphon) where you can also find more detailed documentation. 

```
>cat owners.js
{
	start: {
		source: {
			uri:  "jdbc:mysql://localhost:3306/sdemo?useSSL=false",
			user: "root",
			password: "password"
		},
		target: {
			mode: "insert",
			uri: "mongodb://localhost:27017/",
			namespace: "sdemo.owners"
		},
		template: {
			_id: "$ownerid",
			name: "$name",
			address : "$address",
			pets : [ "@petsection" ]
		},
		query:{
		   sql: 'SELECT * FROM owner'
		}
	},

	petsection: {
		template: {
			petid: "$petid",
			name: "$name",
			species : "@speciessection"
		},
		query:{
			sql: 'SELECT * FROM pet where owner = ?'
		},
		params: [ "ownerid" ]
	},

	speciessection: {
		template: {
			_value : "$species"
		},
		query: {
			sql: 'SELECT * from species where speciesid = ?'
		},
		params : [ "species" ]
	}
}
```

As we can see the template is self-describing and therefore quite intuitive to understand.

There is the first section which is "start" and then whichever you need.

In this exemple we can see the other 2 added sections are petsection and speciessection.

## Source 

The source is the connection string and values to your source Database. In this case it is a MySQL Database made for this exercise.

```
source: {
        uri:  "jdbc:mysql://database",
        user: "user",
        password: "pass",
    }
```

## Target

The target is the connection string and values to your MongoDB Database. You will have to replace the value with your connection string in the uri field.
The namespace field correspond to the database.

```
    target : {
      mode: "insert",
      uri:"mongodb+srv://appUser:AtlasW0rkshop!@yourURI?retryWrites=true&w=majority",
      namespace: "<db_name>.<collection_name>"
    }
```

## Query

The query is the query made on the source Database. For this exercises they will be done in sql.

```
  query: {
      sql:'SELECT * FROM owner'
  }
```

## Template

Each section has a template which is written following this syntax:

```
template:{
 "one-field":"$value"
}
```

As we can see each field has a name and his value. Both of which have to be in between "".
For the values, there are two possibilities: either the $ sign to get the value of the field named or the @ sign that gets the value from the section called.
The type of the value will depend on the data source but you are able to force a field to be either an `[array]` or an `{object:object}`.
This is useful to follow the wanted schema and for the one to many relations.

## Next Step

Now that you have a good understanding of MongoSyphon, you're ready to head to the next step: [Build Your MongoSyphon Config](build-mongosyphon-config.md).