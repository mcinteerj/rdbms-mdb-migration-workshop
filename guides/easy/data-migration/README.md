# Overview

In this section we will migrate your data from the Relationnal Database through MongoSyphon.
The goal is to come up with your config.js file that applies your schema.
Disclaimer: The following instructions are taken from the MongoSyphon GitHub and my own experience.
Information contained in it may be inacurate or not reflect the full process behind the program.

## Config.js template and how it works

The follwing example comes from the official MongoSyphon GitHub.

'''
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
>java -jar ../bin/MongoSyphon.jar -c owners.js 
2 records converted in 0 seconds at an average of 7 records/s
>mongo -uroot -ppassword
> use sdemo
switched to db sdemo
> db.owners.find().pretty()
{
	"_id" : 1,
	"name" : "John",
	"address" : "22 Accacia Avenue",
	"pets" : [
		{
			"petid" : 1,
			"name" : "Brea",
			"species" : "Dog"
		},
		{
			"petid" : 2,
			"name" : "Harvest",
			"species" : "Dog"
		}
	]
}
{
	"_id" : 2,
	"name" : "Sarah",
	"address" : "19 Main Street",
	"pets" : [
		{
			"petid" : 3,
			"name" : "Mittens",
			"species" : "Cat"
		}
	]
}
>exit
'''

As you can see the template is fairly intuitive.
You have your section which is "start" for the first one and then whichever you choose.
In this exemple we can see the other 2 added sections are petsection and speciessection.

## Source 

The source is the connection string and values to your source Database. In our case it is a MySQL Database made for this event.

## Target

The target is the connection string and values to your MongoDB Database. You will have to put your connection string in the uri field.
The namespace field correspond to the database.

## Query

The query is the query made on the source Database. For our exercises they will be done in sql.

## Template

Each section has a template which is written following this syntax:


template:{
 "one-filed":"$value"
}


As you can see each field has a name and his value. Both of which have to be in between "".
For the values, you have two possibilities: either the $ sign to get the value of the field named or the @ sign that gets the value from the section called.
The type of the value will depend on the data source but you are able to force a field to be either an [array,] or an {object:object,}.
This is useful to follow your schema and for the one to many relations.

## Our schema
### Connection

Now that you have more informations about the config file, we will start making the one for our exemple.
The first step is the connection.

For this step, you will have to go to your cluster's page and click on the "Connect" button, "Connect your application" choose the Java driver for the 3.6 version. At this point, you can click on the copy button and put it in the uri field being careful to change the <user> and <password> value.
    
------screenshot------

### Query

For our exemple in the start section the query will be 'SELECT * FROM customers' because we want to build our MongoDB Database with one document per Customer.
This query will return all of the values countained in the customers table.
You can try the query on your MySQL shell to see what the data looks like.
------mysqlShell--------

### Template

From our schema we can see that the Customer table has 10 Columns:


Customers

subscriber_id | gender | name | email | phone_number | date_of_birth | street | zip | city | country_code
---------------------------------------------------------------------------------------------------------



This gives you the following template:


  template: {
      "_id": "$subscriber_id",
      "gender": "$gender",
      "name": "$name",
      "email": "$email",
      "phone_number":"$phone_number",
      "date_of_birth": "$date_of_birth",
      "address":{"street": "$street", "zip":"$zip", "city":"$city", "country_code":"$country_code"},
    }


Output:

,

{
    "_id":"S000000100",
    "address":{
        "street":"426 Estate Walk"
        "zip":"DL8Z 0ST"
        "city":"Monmouth"
        "country_code":"UK"
        },   
    "date_of_birth":"1929-09-12",
    "email": "deermeat1961@protonmail.com",
    "gender": "M",
    "name": "Alexander Hodges",
    "phone_number": 056 2126 1927,
    
}
