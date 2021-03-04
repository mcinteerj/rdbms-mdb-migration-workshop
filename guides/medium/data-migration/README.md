# Overview

In this section we will migrate the data from the Relationnal Database through MongoSyphon.
The goal is to come up with the config.js file that applies the schema.

Disclaimer: The following instructions are taken from the MongoSyphon GitHub.
MongoSyphon is an Open Source tool that is not supported (officially and otherwise) by MongoDB.
Information contained in this readme may be inacurate or not reflect the full process behind the program.

## [Config.js](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/resources/MongoSyphonRessources/configs/Hackathon.js) template and how it works

The follwing example comes from the official MongoSyphon GitHub.

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

As we can see the template is fairly intuitive.
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
      uri:"mongodb+srv://<user>:<pass>@yourURI?retryWrites=true&w=majority",
      namespace: "hackathon.customers"
    }
```

## Query

The query is the query made on the source Database. For this exercises they will be done in sql.

```
  query: {
      sql:'SELECT * FROM customers'
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
The type of the value will depend on the data source but you are able to force a field to be either an [array,] or an {object:object,}.
This is useful to follow the wanted schema and for the one to many relations.

# Our schema
## Connection

Now that you have more informations about the config file, we will start making the one for our exemple.
The first step is the connection.

For this step, you will have to go to your cluster's page and click on the "Connect" button,

> <img src="./images/connect.png" height="300">
                                                                                                                                    
"Connect your application" choose the Java driver for the 3.6 version. 

> <img src="./images/connectapp.png" height="500">

At this point, you can click on the copy button and put it in the uri field being careful to change the <user> and <password> value.

> <img src="./images/connectapp.png" height="500">

## Query

For this exercise in the start section the query will be **'SELECT * FROM customers'** because we want to build our MongoDB Database with one document per Customer.
This query will return all of the values countained in the customers table.
You can try the query on your MySQL shell to see what the data looks like.

## Template

From our schema we can see that the Customer table has 10 Columns:

```
Customers

subscriber_id | gender | name | email | phone_number | date_of_birth | street | zip | city | country_code
---------------------------------------------------------------------------------------------------------
```

From the example above you can already see how you can make it work.

Now that leaves us with the following problem:
How can we get values from the other tables?
To realize the schema we want to get the calls and embed them to the right suscriber's document.
That's where the sections come in.
MongoSyphon enables you to get a field's value from a section where you can give another template and another query like the ``` petsection ```.
To this end, we are making the "@callssection" where we will query the calls and put them into the right document.
You can query the calls table in your MySQL shell if you want to see what the data look like.

```
Calls

subscriber_id | rate_plan_id | connected_party_num | call_duration | date_time_stamp
------------------------------------------------------------------------------------
```

Now, thinking about it you may ask yourself: What makes MongoSyphon put the right calls into the right document?
That's where the parameter is useful as you can see in the ```speciessection```.
With that fucntionality you can make MongoSyphon use the parameter for each ```subscriber_id``` to give us all their calls.
To call that section, you simply put another field in your start section's template as seen in the example.
Now there is only the rate_plan left. Our Relational Database has another table which is linked to the calls' one.
For that, we can use the previously learned function **nested** in the callssection.
You can query the calls table in your MySQL shell if you want to see what the data look like.
```
rate_plan

rate_plan_id | description | type |
-----------------------------------
```

You are now all set to make the migration.
You can head to your shell in the MongoSyphon's directory and make the following command:

```
java -jar MongoSyphon.jar -c Hackathon.js
```

You should see after a little less than a minute the following message:

```
100 records converted in 29 seconds at an average of 3 records/s
```

You are done!
Your data is now on your cluster with the right schema to go through the next step.
