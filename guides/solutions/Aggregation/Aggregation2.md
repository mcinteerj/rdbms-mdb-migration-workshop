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
