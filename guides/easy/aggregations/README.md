# Aggregation Pipeline

In this exercise, you will use MongoDB’s powerful Aggregation Pipeline to run analytics queries on the collection(s) you created in the previous exercise. 

**You have received the following requests from your marketing team: **
```
 Find out the average call duration by Gender across all subscribers (Assume that the data contains only two types of genders: ‘Male’ and ‘Female’).
 Find out the ‘Peak Calling Time’ by analysing the total number of calls made per hour by all subscribers (Note: Group the data by hour, starting from 00 to 23
```

## Useful Operators:

For Aggregation Exercise (a):

```
$unwind
$group
$avg
$sum
```

For Aggregation Exercise (b):

```
$unwind
$project
$dateFromString
$dateToParts
$sum
```

## Useful Links:
1. SQL to MongoDB Mapping Chart: https://docs.mongodb.com/manual/reference/sql-comparison/
2. SQL to Aggregation Mapping Chart: https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/ 
3. Aggregation Pipeline Quick Reference: https://docs.mongodb.com/manual/meta/aggregation-quick-reference/


## Instructions:

In order to build out your aggregation pipeline, you can use the following ways:
1. Navigate to the ‘Aggregation’ tab under ‘Collections’ in your cluster 

> <img src="./images/Aggregation.png" height="300">

   - Click on the ‘Add Stage’ button and start building out your aggregation pipeline stage-by-stage. You can also preview a sample of the aggregated results on the side. You can continue to add more stages by using the ‘Add Stage’ button.

2. Alternatively, you can utilise MongoDB Compass for the same. Navigate to the ‘Aggregations’ tab once you’re inside your collection

> <img src="./images/Aggregation2.png" height="500">

   - Click on the ‘Add Stage’ button and start building out your aggregation pipeline stage-by-stage. You can also preview a sample of the aggregated results on the side. You can continue to add more stages by using the ‘Add Stage’ button.

### Once finished you can compare your result with the [Solution](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/Aggregation1.md) for the aggregation A and the [Solution](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/Aggregation2.md) for the aggregation B
