# Aggregation Pipeline 
This section provides detailed solutions to the second part of Exercise 3. However, please note that there are many different ways of solving these exercises.

## Aggregation 2: Peak Calling Time
In this exercise, you were asked to find out the time of the day at which the maximum number of calls were made, by analysing the total number of calls made per hour, across all subscribers.

The Aggregation Pipeline for this exercise can be found below: 

```
db.customers.aggregate(
[{$unwind: {
  path: "$calls"
}}, 
{$project: {
"dateasdate":
{"$dateFromString":
{dateString:"$calls.date"}}
}}, {$project: {
  "dateasparts":{"$dateToParts":{date:"$dateasdate"}}
}}, {$group: {
  _id: "$dateasparts.hour",
  count: {
    $sum:1
  }
}}]
)
```

