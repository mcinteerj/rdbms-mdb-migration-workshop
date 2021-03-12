Return to the root of the easy guide [here](..).

# National Telecom Config
Now that you have an understanding of the config file, we can start making one for this exercise.

Download this [sample/skeleton config template](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/resources/template-config.json) and use it as the basis to build your own configuration for this exercise. 

In the following step, you will run MongoSyphon with your config file in order to migrate the data to your cluster.

The steps below go through how to set up each section of the configuration file. 

## Source
The first section of the template is already completed for you as follows:
```
"source": {
    "uri": "jdbc:mysql://database-1.cb7xvxwyioz4.eu-west-3.rds.amazonaws.com:3306/telecom?useUnicode=true&useServerPrepStmts=true&useSSL=false",
    "user": "bt-hack",
    "password": "btgameday123!march2021"
}
```

This specifies the required parameters to connect to the MySQL server that you will be extracting data from. We have provided all of the required credentials and connection parameters - **you do not need to edit this**.

## Target
The next section of the template is the `target` section which specifies the parameters required to connect to your Atlas Cluster:
```
"target": {
    "mode": "insert",
    "uri":"mongodb+srv://appUser:AtlasW0rkshop!@DATABASEURI?retryWrites=true&w=majority",
    "namespace": "hackathon.customers"
}
```

The `mode` field can be left to it's current value of `insert` as we will be inserting data into MongoDB. 

The `uri` field needs the MongoDB Connection string to be added, including your credentials. If you already have a MongoDB Atlas cluster running (e.g. that have previously used as part of this workshop), you should use it for this exercise - otherwise you will need to create your own. 

To find your connection string, you will have to go to your cluster's page and click on the "Connect" button:

> <img src="./images/connect.png" height="150">

"Connect your application" choose the Java driver for the 3.6 version (which is used by MongoSyphon). 

> <img src="./images/connectapp.png" height="400">

At this point, you can click on the copy button and put it in the uri field being **careful to change the <user> and <password> value** to `appUser:AtlasW0rkshop!`.

> <img src="./images/uri.png" height="300">

Finally, you will need to adjust the `namespace` field in order to set the database and collection name you wish to use for this data. You could use 'hackathon' as the DB name and 'customers' as the collection name, like so:
```
    "namespace": "hackathon.customers"
```

## Template

The next section to complete is the `template` section. This specifies the target document structure which will match the data model you defined in the earlier exercise. 

You will be able to copy in the sample document you create during the data modelling exercise and then update it to use placeholders for the relevant columns in the RDBMs. You can set these placeholders using the format `$column_name`

See the following example template:

```
template: {
      "subscriber_id": "$subscriber_id",
      "gender": "$gender",
      "name": "$name",
      "email": "$email",
      "phone_number":"$phone_number",
      "date_of_birth": "$date_of_birth",
      "address": {
          "street": "$street",
          "zip":"$zip", 
          "city":"$city", 
          "country_code":"$country_code"
      }
}
```

Output:
```
{
    "_id":"S000000100",
    "gender": "M",
    "name": "Alexander Hodges",
    "email": "deermeat1961@protonmail.com",
    "phone_number": "056 2126 1927",
    "date_of_birth": "1929-09-12",
    "address": {
        "street": "426 Estate Walk",
        "zip": "DL8Z 0ST",
        "city": "Monmouth",
        "country_code": "UK"
    }
}
```

## Query

For this exercise in the start section the query will be `'SELECT * FROM customers'` because we want to build our MongoDB Database with one document per Customer. This query will return all of the values contained in the customers table.

```
  query: {
      sql: 'SELECT * FROM customers ORDER by subscriber_id DESC'
  }
```
**For performance, we will order the subscriber_id in DESC order**

You can try the query on your MySQL shell to see what the data looks like.

Now that leaves us with the following problem:

> How can we get values from the other tables?

## Sections
To generate data in the schema we want, we need to get the calls and embed them to the right suscriber's document.

That's where the sections come in. MongoSyphon enables you to get a field's value from a section where you can give another template and another query.

### Calls Section
To this end, we are making the `"@callssection"` where we will query the calls and put them into the right document. You can query the calls table in your MySQL shell if you want to see what the data look like.

```
Calls

call_id | subscriber_id | rate_plan_id | connected_party_num | call_duration | date_time_stamp
----------------------------------------------------------------------------------------------
```

Our callssection following the table will be like this:

```
"callssection": {
    "template": {
        "call_id": "$call_id",
        "call_duration": "$call_duration",
        "date": "$date_time_stamp",
        "connected_party_num": "$connected_party_num"
    },
    "query": {
        "sql": 'SELECT * FROM calls where subscriber_id=?'
    },
    "params": [ "subscriber_id" ]
}
```

For the keen eye, you will observe that we used a **parameter**. That is because we want to make the link between the customer and the calls.

With that query MongoSyphon will use the parameter for each `subscriber_id` will give us all their calls.

To call that section, you simply put another field in your start section's template as following:

```
template: {
      "subscriber_id": "$subscriber_id",
      "gender": "$gender",
      "name": "$name",
      "email": "$email",
      "phone_number":"$phone_number",
      "date_of_birth": "$date_of_birth",
      "address": {
          "street": "$street",
          "zip":"$zip", 
          "city":"$city", 
          "country_code":"$country_code"
      },
      "calls": [ "@callssection" ]
    }
```

Output:

```
{
    "_id":"S000000100",
    "gender": "M",
    "name": "Alexander Hodges",
    "email": "deermeat1961@protonmail.com",
    "phone_number": "056 2126 1927",
    "date_of_birth": "1929-09-12",
    "address": {
        "street": "426 Estate Walk",
        "zip": "DL8Z 0ST",
        "city": "Monmouth",
        "country_code": "UK"
    }
    "calls": [ {
        "call_id": "C000000001",
        "call_duration": "3",
        "date": "1926-10-01 04:12:20",
        "connected_party_num": "01093 136241"
    },    
    {
        "call_id": "C000000002",
        "call_duration": "229",
        "date": "1928-03-25 02:15:39",
        "connected_party_num": "019337 08684"
    },
    {
        "call_id": "C000000003",
        "call_duration": "900",
        "date": "1930-02-22 02:26:34",
        "connected_party_num": "0303 864 8723"
    }, ...]
}
```

### Rate Plan Section
Now there is only the rate_plan left. Our Relational Database has another table which is linked to the calls' one.

For that we can use the previously learned function **nested** in the `callssection`.

Here is our `callssection`:

```
"callssection": {
    "template": {
        "call_id": "$call_id",
        "call_duration": "$call_duration",
        "date": "$date_time_stamp",
        "rate_plan_id": "@rateplansection",
        "connected_party_num": "$connected_party_num"
    },
    "query": {
        "sql":'SELECT * FROM calls ORDER by subscriber_id DESC'
    },
    "mergeon":"subscriber_id"
}
```
**To optimize the template we will use the mergeon method: In the query we will order the calls by subscriber_id in DESC order and merge the table with the ```Customers'``` one on the field ```subscriber_id``` like a JOIN operation in SQL. This will limit the trips with the Database and by doing so shorten the worktime.**

Now that you are used to all of the main elements here is the `rateplansection`, as previously, you can query the rate_plan table from your MySQL shell to see what the data looks like:

```
"rateplansection": {
    "template": {
        "description":"$description",
        "type":"$type"
    },
    "query": {
        "sql":'SELECT * FROM rate_plan where rate_plan_id=?'
    },
    "params": [ "rate_plan_id" ],
    "cached": true
}
```
**To optimize the template we used the ```cached``` fuction to cache the rate_plan table and by doing so limit the trips to the Database**

You are now all set to do the migration.
If you are unsure about your file, you can review the [Solution here](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/blob/main/guides/solutions/data-migration/data-migration-solution.json).

## Next Step

Now that you have built your MongoSyphon template, you're ready to head to the next step: [Execute Your Migration](execute-migration.md).