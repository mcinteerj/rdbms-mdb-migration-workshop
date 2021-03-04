Return to the workshop overview page [here](..).
# Medium Guide
Welcome to the 'Medium' guide for the RDBMS to MongoDB Migration workshop. This guide is meant for people who have used MongoDB, but are still relatively new. It provides guidance to complete the workshop exercises. 

The workshop involves migrating a database from MySQL to MongoDB and involves re-modelling the data as well as additional steps to build aggregation pipelines and charts. 

The workshop is split into four clear sections. You'll need to complete each section complete before moving on to the next section as they are dependent and build on one another.

## 1. Design Your Target MongoDB Data Model
In this section, you will analyse the data model in the legacy relational database as well as get a better understanding of the workload/application which uses the data. Based on this, you will create a document data model that is optimised for MongoDB.

Click **[here](data-modelling)** to get started with data modelling.
## 2. Migrate Data From MySQL to MongoDB (including transforming the data)
In this section, you will be introduced to a basic open source ETL tool which can be used to extract data from legacy relational databases and load it into MongoDB. You will create a complex configuration file for the ETL tool which you will then run in order to migrate data from the MySQL database to MongoDB.

Click **[here](data-migration)** to get started with data migration.
## 3. Aggregation Framework for Analytics
In this section, you will use MongoDB's powerful Aggregation Framework to run analytical queries on the data you loaded into your MongoDB Atlas cluster in the previous step (step 2). The Aggregation Framework can be used to answer more complex and analytical questions of your data.

Click **[here](aggregations)** to get started with the Aggregation Framework.
## 4. Visualising Data Using MongoDB Charts
In this section, you will use MongoDB Charts in order to build analytical visualisations of the data you mgirated to your MongoDB Atlas cluster in step 2. 

Click **[here](charts)** to get started with MongoDB Charts.

# List of Guides
* [Design Your Target MongoDB Data Model](data-modelling)
* [Migrate Data From MySQL to MongoDB (including transforming the data)](data-migration)
* [Aggregation Framework for Analytics](aggregations)
* [Visualising Data Using MongoDB Charts](charts)
