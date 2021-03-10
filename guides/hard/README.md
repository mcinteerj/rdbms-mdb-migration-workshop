Return to the workshop overview page [here](..).

# Hard Guide
Welcome to the 'Hard' guide for the RDBMS to MongoDB Migration workshop. This guide is meant for people who are confident with relational systems, ETL's and MongoDB. 

The workshop involves migrating a database from MySQL to MongoDB and involves re-modelling the data as well as additional steps to build aggregation pipelines and charts. 

This guide will give you minimal guidance on exactly how to complete this activity, but we recommend using the following high level steps:

1. Connect to the source (MySQL) database to understand the source schema
2. Define a new schema for use in MongoDB
3. Migrate data from MySQL to MongoDB using a tool of your choice
4. Use aggregations to answer some questions for your marketing team
5. Use MongoDB Charts to visualise some aggregate data

The source database (MySQL) connection details are:
```
{
    "uri": "jdbc:mysql://database-1.cb7xvxwyioz4.eu-west-3.rds.amazonaws.com:3306/telecom?useUnicode=true&useServerPrepStmts=true&useSSL=false",
    "user": "bt-hack",
    "password": "btgameday123!march2021"
}
```

The target database (MongoDB) is an Atlas cluster that you already have set up or you need to create. 

## 1. Design Your Target MongoDB Data Model

First, analyse the data model in the legacy relational database and design a document data model that is optimised for MongoDB.

Keep in mind that the application will primarily query based on `subscriber_id` and expect all call data for a given customer to be returned in a single query. 

You can safely assume that no subscriber will have more than 50 calls for this exercise (i.e. if your data model uses and arary of calls, it will be bounded).

If you are struggling it may be worth reverting to the [Medium Guide](../medium/data-modelling/) for more detailed instructions.

If you want to check your data model, you can compare it against [this best practice solution](../solutions/data-modelling).

## 2. Migrate Data From MySQL to MongoDB (including transforming the data)

Next, you will need to extract data from the MySQL database and load it into MongoDB in the format you have designed. You could use a number of different approaches for this migration:

1. Extract data from MySQL
2. Transform the data into your Document Data Model
3. Load it into MongoDB - If you are using your own ETL the [mongoimport](https://docs.mongodb.com/database-tools/mongoimport/) command can be useful.

***Note:*** You may prefer to reverse the order of 2/3 and use the MongoDB Aggregation Framework to transform the data once it is loaded into MongoDB.

There are multiple possible approaches for this step, such as:
1. Manually extracting data from MySQL and transforming the records on your machine before uploading to MongoDB
2. Extracting data from MySQL and loading it into MongoDB and transforming it in palce
3. Using a third party tool to perform this ETL function (an Open Source option recommended in the Easy/Medium guides is [MongoSyphon](https://github.com/johnlpage/MongoSyphon))

If you use MongoSyphon, you can compare your approach to the solution specified [here](../solutions/data-migration/data-migration-solution.json). 

## 3. Aggregation Framework for Analytics

Now that you have your data loaded into MongoDB, you Marketing team have some interesting analytical questions about the data:

***You have received the following requests from your marketing team:***
> 1. Find out the **average call duration by Gender** across all subscribers

> 2. Find out the **Peak Calling Hour** by analysing the total number of calls made per hour by all subscribers (Note: Group the data by hour, starting from 00 to 23

Use MongoDB's powerful Aggregation Framework to run analytical queries on the data you loaded into your MongoDB Atlas cluster in the previous step (step 2) in order to answer these questions. 

You can see example solutions (depending on your data model) here:
* [Aggregation 1](../solutions/aggregations/agg-exercise-1.md)
* [Aggregation 2](../solutions/aggregations/agg-exercise-2.md)

## 4. Visualising Data Using MongoDB Charts
In this final section, you should use MongoDB Charts (provided with your MongoDB Atlas cluster) to create visual versions of the aggregations you created in step 3 (Aggregation Framework). 

You can see example solution charts for this exercise [here](../solutions/charts).

# List of Guides
* [Design Your Target MongoDB Data Model](data-modelling)
* [Migrate Data From MySQL to MongoDB (including transforming the data)](data-migration)
* [Aggregation Framework for Analytics](aggregations)
* [Visualising Data Using MongoDB Charts](charts)