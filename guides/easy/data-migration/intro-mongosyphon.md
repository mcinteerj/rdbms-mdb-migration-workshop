Return to the root of the easy guide [here](..).

# MongoSyphon
[MongoSyphon](https://github.com/johnlpage/MongoSyphon) is an Open Source tool used for migrating data from relational databases to MongoDB. It performs transformation of data in-flight to ensure that data being loaded into MongoDB can be optimised in a document format. 

You can find the `MongoSyphon.jar` file and `Config.js` template in the [Resources Folder](../../../resources/). The detail below explains how to configure and run MongoSyphon in order to migrate your data. 

This section gives an introduction to MongoSyphon and explains how it works. You can also see the official [MongoSyphon GitHub](https://github.com/johnlpage/MongoSyphon) which has a more detailed explanation. 

## Config File and How It Works

The following examples come from the official [MongoSyphon GitHub](https://github.com/johnlpage/MongoSyphon) where you can also find more detailed documentation. 

### Example Config File

```
{
	"start": {
		"source": {
			"uri":  "jdbc:mysql://localhost:3306/sdemo?useSSL=false",
			"user": "root",
			"password": "password"
		},
		"target": {
			"mode": "insert",
			"uri": "mongodb://localhost:27017/",
			"namespace": "sdemo.owners"
		},
		"template": {
			"_id": "$ownerid",
			"name": "$name",
			"address" : "$address",
			"pets" : [ "@petsection" ]
		},
		"query":{
		   "sql": 'SELECT * FROM owner'
		}
	},

	"petsection": {
		"template": {
			"petid": "$petid",
			"name": "$name",
			"species" : "@speciessection"
		},
		"query":{
			"sql": 'SELECT * FROM pet where owner = ?'
		},
		"params": [ "ownerid" ]
	},

	"speciessection": {
		"template": {
			"_value" : "$species"
		},
		"query": {
			"sql": 'SELECT * from species where speciesid = ?'
		},
		"params" : [ "species" ]
	}
}
```

As we can see the config file is self-describing and therefore quite intuitive to understand.

There is the first section which is "start" which is the root of the JSON document to be generated, and then subequent sections can be used to embed additional data within your documents. 

In this exemple we can see the other 2 added sections are petsection and speciessection. In this example, the Owner owns one or more pets (meaning the pets field is an array), while each pet has a specific species (meaning the species field is an embedded object). 

The config above would generate documents which look like this:
```
{
	"_id": 000976,
	"name": "Charles,
	"address" : "16 Hatfields, London",
	"pets" : [
		{
			"petid": 0012,
			"name": Mia,
			"species": {
				"speciesid": 001,
				"speciesname": "dog"
			}
		},
		{
			"petid": 0013,
			"name": Macavity,
			"species": {
				"speciesid": 002,
				"speciesname": "cat"
			}
		}
	]
}
```

## Explanation of Each Section

The following sections give examples of each individual part of the config file. Each of the sections below would fall into the `start` section of the config document. 

### Source 

The source is the connection string and values to your source Database. For this exercise, the database is a MySQL Database which we will provide you the connection parameters for in the next part of the exercise. 

```
"source": {
        "uri":  "jdbc:mysql://database",
        "user": "username",
        "password": "password",
    }
```

### Target

The target is the connection string and values to your MongoDB Database. You will have to replace the value with your connection string in the uri field. The namespace field corresponds to the target database and collection.

```
    "target" : {
      "mode": "insert",
      "uri":"mongodb+srv://username:password@DATABASEURI?retryWrites=true&w=majority",
      "namespace": "<db_name>.<collection_name>"
    }
```

### Query

The query is the query made on the source Database and is a query written in SQL.

```
  "query": {
      "sql": 'SELECT * FROM tableName'
  }
```

### Template

Each section has a template which is written following this syntax:

```
"template": {
	"field_one": "$my_col",
	"field_two: [ "@section_A" ],
	"field_three: "@section_B"
}
```

As we can see each field has a name and a value. Both of which have to be in between `"quotation marks"`.

For the values, there are two possibilities, either:
1. A `$` sign to get the value of a named column (in the case above it is the `my_col` column)
2. An `@` sign to get the value from another section (in the case above, `field_two` is an array made up of values from another section (`section_a`) and `field_three` is an object constructed from another section (`section_b`) - niether `section_a` nor `section_b` are shown, but you can refer to the owners/pets/species example from earlier)

The type of the value will depend on the data source but you are able to force a field to be either an `[array]` or an `{object:object}`. This is useful to follow the wanted schema and for the one to many relations.

## Next Step

Now that you have a good understanding of MongoSyphon, you're ready to head to the next step: [Build Your MongoSyphon Config](build-mongosyphon-config.md).