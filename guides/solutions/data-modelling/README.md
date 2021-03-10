# Data Modelling Solution
The code block below shows a JSON document the represents the relational data provided on the [Data Modelling Exercise](../easy/data-modelling/) page. See below for an explanation of each main component.

```
{
   "subscriber_id": "S000000999",
   "gender": "F",
   "name": "Jane Doe",
   "email": "jane123@gmail.com",
   "phone_number":"0534 052 0241",
   "date_of_birth": "1921-03-29",
   "address":{
       "street": "570 Earhart Trail",
       "zip":"VL7M 7ZG",
       "city":"Bury",
       "country_code":"UK"
   },
   "calls": [{
       "call_id": "C000000001",
       "call_duration":"790",
       "date":"2020-03-29 20:40:16",
       "rate_plan_id":{
           "rate_plan_id": "RP00000001",
           "description":"Phone calls only",
           "type":"A"
       },
       "connected_party_number":"0534 052 0241"
   },
   {
       "call_id": "C000000002",
       "call_duration":"1061",
       "date":"2020-04-13 18:32:24",
       "rate_plan_id":{
           "rate_plan_id": "RP00000001",
           "description":"Phone calls only",
           "type":"A"
       },
       "connected_party_number":"0220 381 9343"
   }]
 }
```
## Explanation

### Customer Table
The customer table maps nearly directly to the JSON structure, most columns from the Customer Table are simply top-level fields in the JSON document:
```
{
   "subscriber_id": "S000000999",
   "gender": "F",
   "name": "Jane Doe",
   "email": "jane123@gmail.com",
   "phone_number":"0534 052 0241",
   "date_of_birth": "1921-03-29"
   ...
}
```

The only exception is the address for which we have created an `address` field which contains an object containing all of the address details. This takes advantage of MongoDB's rich document structure and provides more context to the data being stored (without compromising on queryability or any other aspect).
```
{
    ...
    "address":{
       "street": "570 Earhart Trail",
       "zip":"VL7M 7ZG",
       "city":"Bury",
       "country_code":"UK"
    },
    ...
}
```

### Calls & Rate Plans Tables
There is a One-to-Many relationship between a `Customer` and the `Calls` they have made - rather than inefficiently storing these in different places (i.e. tables/collections) as a relational database forces you to, in MongoDB we can take advantage of the rich document structure and store these calls in an array field.

There is a Many-to-One relationship from a `Call` to a `Rate Plan`. In these scenarios for MongoDB, we simply embed the child (`Rate Plan`) data in the parent (`Call`) object in MongoDB. This results in some data duplication, but storage is very cheap and the improved performance and ease-of-use almost always makes it worthwhile. 
```
{
    ...
    "calls": [{
        "call_id": "C000000001",
        "call_duration":"790",
        "date":"2020-03-29 20:40:16",
        "rate_plan_id":{
            "rate_plan_id": "RP00000001",
            "description":"Phone calls only",
            "type":"A"
        },
        "connected_party_number":"0534 052 0241"
    },
    {
        "call_id": "C000000002",
        "call_duration":"1061",
        "date":"2020-04-13 18:32:24",
        "rate_plan_id":{
            "rate_plan_id": "RP00000001",
            "description":"Phone calls only",
            "type":"A"
        },
        "connected_party_number":"0220 381 9343"
    }]
 }
```
**Note:** For the purposes of this exercise, we have assumed a maximum of 50 calls per customer record. If the number of calls was unbounded, then this could lead to extremely large array sizes which is an anti-pattern and strongly discouraged. For more details see [this blog post on the Massive Array Anti-Pattern](https://developer.mongodb.com/article/schema-design-anti-pattern-massive-arrays/), and also consider using other data modelling patterns such as the [Subset Pattern](https://www.mongodb.com/blog/post/building-with-patterns-the-subset-pattern). 