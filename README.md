***Note: The MySQL database referred to in this repository is no longer operational. We have left the repo available for future reference.***

# RDBMS to MongoDB Migration
**Time to Complete:** 2.5 Hours

This is a workshop in which you will learn key aspects of re-modelling relational data for optimal performance in MongoDB. We will use the example of a Telco organisation migrating customer billing system from their legacy MySQL Database to MongoDB Atlas. The MySQL Database is all set up for you and connection parameters will be provided. You should already have your own MongoDB Atlas cluster ready and available to migrate to. 

Through this tutorial, you will learn:
1. How to model relational data in a document model using the concept of embedding
2. How to use a simple open source tool to extract, transform and load data from MySQL to MongoDB
3. How to run aggregations in order to ask more complex business queries of data
4. How to visualise data in your cluster using MongoDB Charts

This tutorial is intended to be completed as part of a digital workshop run by [MongoDB](https://www.mongodb.com).

# Technology
**Technical Complexity:** Intermediate

This tutorial is set out in a way that most people with a hands-on technical background should be able to complete it without too much trouble, however familiarity with some of the following concepts would be beneficial:

* MongoDB
* SQL Generally (MySQL Specifically)
* NoSQL Data Modelling
* MongoDB Aggregation Framework
* MongoDB Charts

## Software Requirements
1. A modern web browser such as [Google Chrome](https://chrome.google.com) or [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/)
2. A text or code editor to alter a javascript application (Notepad (Windows) or TextEdit (OS X) will work fine, although we use [Visual Studio Code](https://code.visualstudio.com/download))
3. [MongoDB Compass](https://www.mongodb.com/products/compass) - the GUI for MongoDB
4. A shell (e.g. terminal on Mac or Powershell on Windows)
5. Java

### Optional Software Tools
1. A MySQL client (either Command Line or Workbench/GUI)

## Pre-Requisites
* Have a MongoDB Atlas cluster available to migrate to (head to https://cloud.mongodb.com/ to spin up your own free tier cluster if you don't already have one)

# Overview
*National Telecom* is a leading telecom provider in the United Kingdom. They have decided to revamp their Customer Billing System as the current system is unable to perform well with the increasing amount of data related to customer calls. In addition, the company is currently unable to send targeted information about rate plans and services to customers based on their usage, due to which it is losing market share to competitors.  

You are in charge of: 
* Designing a document data model based on the existing relational schema
* Migrating data from the existing relational database to MongoDB
* Supporting the marketing team by running analytical queries to study customer usage trends 
* Presenting these results in a visual format for the business team’s perusal  


## List of Guides
We have set this workshop up to cater for a range of skill and experience levels with MongoDB. Specifically we have three guides available for you to choose from:

1. [Easy Guide](guides/easy) - Allows for those who are new to MongoDB by providing step-by-step instructions of what to do for each stage
2. [Medium Guide](guides/medium) - Allows for those who have limited MongoDB experience, providing some hints/guidance but leaving it up to the student to solve each problem
3. [Hard Guide](guides/hard) - Sets out only the higher level problem statement for each exercise and leaves it up to the student to work out exactly how to solve the problem

# Site Map
The list below has links to all of the major pages/sections in this repository and can be used for easy navigation:
* [Guides](./guides/)
    * [Easy](./guides/easy/)
        * [Exercise 1: Data Modelling](./guides/easy/data-modelling/)
        * [Exercise 2: Data Migration](./guides/easy/data-migration/)
            * [Introduction to MongoSyphon](./guides/easy/data-migration/intro-mongosyphon.md)
            * [Build MongoSyphon Config](./guides/easy/data-migration/build-mongosyphon-config.md)
            * [Execute Migration](./guides/easy/data-migration/execute-migration.md)
        * [Exercise 3: Aggregation Framework](./guides/easy/aggregations/)
        * [Exercise 4: MongoDB Charts](./guides/easy/charts/)
    * [Medium](./guides/medium/)
        * [Exercise 1: Data Modelling](./guides/medium/data-modelling/)
        * [Exercise 2: Data Migration](./guides/medium/data-migration/)
            * [Introduction to MongoSyphon](./guides/medium/data-migration/intro-mongosyphon.md)
            * [Build MongoSyphon Config](./guides/medium/data-migration/build-mongosyphon-config.md)
            * [Execute Migration](./guides/medium/data-migration/execute-migration.md)
        * [Exercise 3: Aggregation Framework](./guides/medium/aggregations/)
        * [Exercise 4: MongoDB Charts](./guides/medium/charts/)
    * [Hard](./guides/hard/)
    * [Solutions](./guides/solutions/)
        * [Exercise 1: Data Modelling](./guides/solutions/data-modelling/)
        * [Exercise 2: Data Migration](./guides/solutions/data-migration/)
        * [Exercise 3: Aggregation Framework](./guides/solutions/aggregations/)
        * [Exercise 4: MongoDB Charts](./guides/solutions/charts/)
* [Resources](./resources/)
* [Troubleshooting](./troubleshooting/)

# Resources
The following links are to external pages which contain further reading and resources for some of the key topics covered in this lab:

## MongoDB Docs
* [MongoDB Atlas](https://docs.atlas.mongodb.com/)
* [MongoDB Schema Design Best Practices](https://developer.mongodb.com/article/mongodb-schema-design-best-practices/)

## Other Docs
* [MongoSyphon](https://github.com/johnlpage/MongoSyphon)

# Maintainers
* [Charles Van Parys](https://github.com/cvpmdb/)
* [Snehal Bhatia](https://github.com/snehal08/)
* [Chris Dowling](https://github.com/chrismarydowling/)
* [Jake McInteer](https://github.com/mcinteerj/)
