Return to the root of the easy guide [here](..).

## Executing the Migration
Download the MongoSyphon.jar file from [here](https://github.com/mcinteerj/rdbms-mdb-migration-workshop/raw/main/resources/MongoSyphon.jar).

To run MongoSyphon, you simply call it with the java command. For example, in order to print the 'help' information for MongoSyphon, you could run:
```
java -jar ./MongoSyphon.jar --help
```

Assuming that the jar file is in the same directory as your config file you can execute the following command in order to execute the migration:

```
java -jar ./MongoSyphon.jar -c ./config.json
```

After some time (<1 min) you should see the following message:

```
100 records converted in 29 seconds at an average of 3 records/s
```

If you hit any issues at this point, please see [Troubleshooting: Common Issues](../../../troubleshooting/) or ask for help.

You are done! Your data is now on your cluster with the right schema to go through the next step.

## Next Step

Once you have migrated the data to your MongoDB Atlas cluster, you're ready to head to the next step: [MongoDB Aggregations](../aggregations/).