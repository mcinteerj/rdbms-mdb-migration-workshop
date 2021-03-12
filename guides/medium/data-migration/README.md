Return to the root of the medium guide [here](..).

# Overview

The goal of this section is to migrate data from MySQL to MongoDB Atlas and ensure that the data is transformed through the migration process into an data model optimised for MongoDB.

There are many commercial ETL tools provided by third parties which can be used for this purpose. For this exercise, we will use a simple, open source tool known as [MongoSyphon](https://github.com/johnlpage/MongoSyphon) which is available on GitHub. 

**Disclaimer:** MongoSyphon is an Open Source tool that is not supported (officially and otherwise) by MongoDB. Information contained in this readme may not reflect the full process behind the program or any enhancements that may be made to it by its contributors in the future.

## Steps
This exercise is broken into three sections:

### 1. Introduction to MongoSyphon
In this section, we will introduce the MongoSyphon tool and teach you the basics of how to use it. 

Click **[here](intro-mongosyphon.md)** to get started with MongoSyphon.

### 2. Building Your MongoSyphon Config
In this section, you will build your own MongoSyphon Config which will be used to extract, transform and load data from MySQL into MongoDB. 

Click **[here](build-mongosyphon-config.md)** to build your MongoSyphon Config file.

### 3. Execute Your Migration
In this section, you will run MongoSyphon with your template in order to migrate the data from MySQL to your MongoDB Atlas cluster. 

Click **[here](execute-migration.md)** to migrate the data to your cluster.

## Next Step

Once you have migrated the data to your MongoDB Atlas cluster, you're ready to head to the next step: [MongoDB Aggregations](../aggregations/).