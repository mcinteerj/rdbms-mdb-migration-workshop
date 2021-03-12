Return to the root of the easy guide [here](..).

## Executing the Migration
Download the MongoSyphon.jar file from [here](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/raw/main/resources/MongoSyphon.jar).

Assuming that the jar file is in the same directory as your config file you can execute the following command in order to execute the migration:

```
java -jar ./MongoSyphon.jar -c ./config.json
```

After some time (possibly up to ~1 min depending on your network latency) the data will be migrated and you will see a message similar to the following:

```
100 records converted in 29 seconds at an average of 13 records/s
```

***Note:** If you do run into issues, it may be worth adding a `LIMIT 2` to the query for the customers table in your template. This will run the migration on a smaller subset of the data which will execute faster and may be helpful for troubleshooting. Just make sure you remove this limit when you do the actual migration!*

If you hit any issues at this point, please see [Troubleshooting: Common Issues](../../../troubleshooting/) or ask for help.

Make sure you delete all data from the target collection before running the migration - this is important to ensure you end up with exactly the right number of documents (which will be important for the next steps).

You are done! Your data is now on your cluster with the right schema to go through the next step.

## Next Step

Once you have migrated the data to your MongoDB Atlas cluster, you're ready to head to the next step: [MongoDB Aggregations](../aggregations/).