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
3. Install [MongoDB Compass](https://www.mongodb.com/products/compass) - the GUI for MongoDB
4. A shell (i.e. terminal on Mac or Powershell on Windows)
5. Java (Version XXX)

## Pre-Requisites
* Have a MongoDB Atlas cluster available to migrate to (head to https://cloud.mongodb.com/ to spin up your own free tier cluster if you don't already have one)

# Overview
‘National Telecom’ is a leading telecom provider in the UK. They have decided to revamp their Customer Billing System as the current system is unable to perform well with the increasing amount of data related to customer calls. In addition, the company is currently unable to send targeted information about rate plans and services to customers based on their usage, due to which it is losing market share to competitors.  

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

# Resources
The following links are to external pages which contain further reading and resources for some of the key topics covered in this lab:

## MongoDB Docs
* [MongoDB Atlas](https://docs.atlas.mongodb.com/)
* [MongoDB Schema Design Best Practices](https://developer.mongodb.com/article/mongodb-schema-design-best-practices/)

## Other Docs
* [MongoSyphon](https://github.com/johnlpage/MongoSyphon)

# Maintainers
* [Charles Van Parys](https://github.com/cvpmdb/)
* [Snehal Batia](https://github.com/snehal08/)
* [Chris Dowling](https://github.com/chrismarydowling/)
* [Jake McInteer](https://github.com/mcinteerj/)