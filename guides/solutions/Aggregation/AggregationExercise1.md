# Aggregation Pipeline 
This section provides detailed solutions to the first part of Exercise 3. However, please note that there are many different ways of solving these exercises.

## Aggregation 1: Average Call Duration by Gender 
In this exercise, you were asked to find out the average value of the field 'call_duration' across all subscribers, categorized by the two values for the field 'gender' in our database (i.e. 'M', for Male and 'F' for 'Female'). 

The Aggregation Pipeline for this exercise can be found below: 

```
db.customers.aggregate(
[{$unwind: 
{path: "$calls",}}, 
{$group: {
  _id: "$gender",
  avg_duration: {
    $avg: "$calls.call_duration"
  },
  count:{$sum:1}
}}]
)
```

