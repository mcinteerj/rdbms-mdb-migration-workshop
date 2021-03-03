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
