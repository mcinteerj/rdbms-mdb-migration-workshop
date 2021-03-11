Return to the root of the easy guide [here](..).

# Aggregation Pipeline

In this exercise, you will use MongoDB’s powerful Aggregation Pipeline to run analytics queries on the collection(s) you created in the previous exercise. 

# Your Task
***You have received the following requests from your marketing team:***

1. Find out the **average call duration by Gender** across all subscribers

2. Find out the **Peak Calling Hour** by analysing the total number of calls made per hour by all subscribers (Note: Group the data by hour, starting from 00 to 23)

*Note: There are some useful stages, operators and docs links at the end of this page if you're looking for more guidance*

## Instructions:

In order to build out your aggregation pipeline, you can use the following ways:
1. Navigate to the ‘Aggregation’ tab under ‘Collections’ in your cluster 

> <img src="./images/Aggregation.png" height="300">

   - Click on the ‘Add Stage’ button and start building out your aggregation pipeline stage-by-stage. You can also preview a sample of the aggregated results on the side. You can continue to add more stages by using the ‘Add Stage’ button.

2. Alternatively, you can utilise MongoDB Compass for the same. Navigate to the ‘Aggregations’ tab once you’re inside your collection

> <img src="./images/Aggregation2.png" height="500">

   - Click on the ‘Add Stage’ button and start building out your aggregation pipeline stage-by-stage. You can also preview a sample of the aggregated results on the side. You can continue to add more stages by using the ‘Add Stage’ button.

## Useful Operators:

**Aggregation Stages**

> [$unwind](https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/) - Used to unwind array fields (i.e. work with array values on an individual basis)

> [$project](https://docs.mongodb.com/manual/reference/operator/aggregation/project/) - Used to include/exclude/alter specific fields

> [$set](https://docs.mongodb.com/manual/reference/operator/aggregation/set/index.html) - Used to add new fields to documents and output documents that contain all existing fields from the input documents and newly added fields

> [$group](https://docs.mongodb.com/manual/reference/operator/aggregation/group/) - Used to group or summarise data (e.g. generate a count value)

> [$sort](https://docs.mongodb.com/manual/reference/operator/aggregation/sort/) - Used to sort all input documents and return them to the pipeline in sorted order

> [$limit](https://docs.mongodb.com/manual/reference/operator/aggregation/limit/) - Used to limit the number of documents passed to the next stage in the pipeline

**Aggregation Operators**

> [$dateFromString](https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromString/) - Used to create a date value from a string

> [$dateToParts](https://docs.mongodb.com/manual/reference/operator/aggregation/dateToParts/) - Used to separate a date value into its parts (e.g. day, hour, minute etc)

> [$sum](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/) - Used to add multiple number values together

> [$substr](https://docs.mongodb.com/manual/reference/operator/aggregation/substr/index.html) - Used to return the substring of a string

> [$avg](https://docs.mongodb.com/manual/reference/operator/aggregation/avg/) - Used to get an average of number values

## Useful Links:
1. SQL to MongoDB Mapping Chart: https://docs.mongodb.com/manual/reference/sql-comparison/
2. SQL to Aggregation Mapping Chart: https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/ 
3. Aggregation Pipeline Quick Reference: https://docs.mongodb.com/manual/meta/aggregation-quick-reference/

## Solutions
Once finished you can compare your result with the solutions:
* [Aggregation 1](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/aggregations/agg-1.md)
* [Aggregation 2](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/aggregations/agg-2.md)

## Next Step

Once you have completed both aggregations, you're ready to head to the next step: [MongoDB Charts](../charts/).
