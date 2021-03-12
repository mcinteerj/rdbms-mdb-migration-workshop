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

## Want to Understand More About Each Section?

The Easy Guide has a more thorough explanation of each section of the configuration file. You could navigate [here](../../easy/data-migration/intro-mongosyphon.md#explanation-of-each-section) to see that explanation and then return to the remainder of the Medium Guide if you wish.

## Next Step

Now that you have a good understanding of MongoSyphon, you're ready to head to the next step: [Build Your MongoSyphon Config](build-mongosyphon-config.md).