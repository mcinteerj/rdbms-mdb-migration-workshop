# Troubleshooting

If you encounter issues when attempting to run MongoSyphon and migrate the data to your MongoDB cluster, there could be a number of possible reasons. 

Some errors will be printed to `stdout` and will be immediately visible to you (you can search below for such errors), but other times MongoSyphon may appear to freeze or hang (i.e. not do anything). This would look like this:

```
> java -jar MongoSyphon.jar -c config.js
> 
```

There are many possible causes of this behaviour, and to find out what's happening you can read the `MongoSyphon.log` which is located in the directory where you put the MongoSyphon files. Look for the [ERROR] line and then search below to find the solution for your error.

## Most Common Errors

- [MongoSyphon Errors](#MongoSyphon-Errors)
	- [MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)
	- [No $find section defined](#no-find-section-defined)
	- [Expected a ',' or '}'](#expected-a--or-)
	- [JobDescription:26](#jobdescription26)
	- [Failed to parse command line option](#failed-to-parse-command-line-option)
	- [Cannot find section named](#cannot-find-section-named)
	- [Unable to connect to RDBMS](#unable-to-connect-to-rdbms)
	- [Communications link failure](#communications-link-failure)
	- [Don't know how to handle connection uri](#dont-know-how-to-handle-connection-uri)
	- [JSONObject must end with '}'](#jsonobject-must-end-with-)
	- [Timed out aftrer 30000ms](#timed-out-aftrer-30000ms)
	- [Duplicate key error](#duplicate-key-error)
	- [Access denied](#access-denied)
	- [Unknown column](#unknown-column)
	- [MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)
	- [Column is ambiguous](#column-is-ambiguous)
- [Data Does Not Look Right In Your Cluster](#Data Does Not Look Right In Your Cluster)
	- [All the calls are in the first document](#all-the-calls-are-in-the-first-document)
	- [There is only have one call per subscriber](#there-is-only-have-one-call-per-subscriber)

## MongoSyphon Errors

### No $find section defined
```
12:01:24.612 [main] ERROR c.j.mongosyphon.MongoBulkWriter:78 - No $find section defined
```

You have used another method than `insert` for the destination. For the `upsert` or the `update` method you need to write the pipeline in the `template` to parse the documents already present in the database.:

```
template: {
	  "$find" : { ... },
	  "$set" : { ... },
	  "$inc" : { ... },
	  "$push" : {...}
	}
```

You should not need to use `upsert` or `update` for the exercises in this workshop. 


### Expected a ',' or '}'
```
12:09:45.099 [main] ERROR c.j.mongosyphon.JobDescription:39 - Expected a ',' or '}' at 72 [character 7 line 6]
```

Your JSON is misformed and there is a missing `,` or `}` at the line 72.

### JobDescription:26
```
11:18:07.934 [main] ERROR c.j.mongosyphon.JobDescription:26 - ./configs/config.js**cd**
```

There is an error in the command you are running.

### Failed to parse command line option
```
13:37:35.906 [main] ERROR c.johnlpage.mongosyphon.MongoSyphon:30 - Failed to parse command line options
```

There is an error in the command line options for the command you are running.

### Cannot find section named
```
08:49:32.876 [main] ERROR c.j.mongosyphon.DocumentGenerator:41 - Cannot find section named 'null' in config - aborting
```

The section `null` is not declared as it should.

### Unable to connect to RDBMS
```
08:50:55.559 [main] ERROR c.j.mongosyphon.RDBMSConnection:84 - Unable to connect to RDBMS
```

There is an error in the RDBMS connection string that you have configured, or you do not have connectivity with the RDBMS.

## Communications link failure
```
08:50:55.559 [main] ERROR c.j.mongosyphon.RDBMSConnection:85 - Communications link failure
```

There is an error in the RDBMS connection string that you have configured, or you do not have connectivity with the RDBMS.

### Don't know how to handle connection uri
```
09:02:40.106 [main] ERROR c.j.mongosyphon.DocumentGenerator:136 - Don't know how to handle connection uri mysql://rdmbs.rds.amazonaws.com:3306/employees?useUnicode=true&useServerPrepStmts=true&useSSL=false
```

There is an error in the declaration of the uri. It should have `jdbc:mysql://` at the beginning.

### JSONObject must end with '}'
```
11:24:18.270 [main] ERROR c.j.mongosyphon.JobDescription:39 - A JSONObject text must end with '}' at 451 [character 1 line 22]
```

Your JSON is misformed and there is a missing `}` in your config file.

### Timed out aftrer 30000ms
```
11:33:23.680 [main] ERROR c.j.mongosyphon.MongoBulkWriter:127 - Error: Timed out after 30000 ms while waiting to connect. Client view of cluster state is {type=UNKNOWN, servers=[{address=yourcluster.mongodb.net:27017, type=UNKNOWN, state=CONNECTING, exception={com.mongodb.MongoSocketException: yourcluster.mongodb.net}, caused by {java.net.UnknownHostException: yourcluster.mongodb.net}}]
```


There is an error in the Atlas Cluster URI you have configured, or you do not have network connectivity to your Atlas cluster (check the IP Access List).

### Duplicate key error
```
11:41:40.385 [main] WARN  c.j.mongosyphon.MongoBulkWriter:115 - E11000 duplicate key error collection: test.employees index: _id_ dup key: { _id: 10001 }
```

The documents you are trying to insert are already present in your Cluster. You should drop the collection before retrying to migrate your data (or you could look at using `upsert` or `update` modes). 

### Access denied
```
08:55:56.580 [main] ERROR c.j.mongosyphon.RDBMSConnection:85 - Access denied for user 'admin'@'localhost' (using password: YES)
```

The user or password provided for the RDBMS is not correct.

### Unknown column
```
08:21:21.185 [main] ERROR c.j.mongosyphon.RDBMSConnection:173 - Unknown column <something> in 'order clause'
```

The column you tried to call in your query is not the right one. Check for typos in your config.

### Column is ambiguous
```
18:09:15.870 [main] ERROR c.j.mongosyphon.RDBMSConnection:173 - Column <something> in on clause is ambiguous
```

The Column you tried to call in your query is present in another table used. Be careful to use `table.column` in your query.


## Data Does Not Look Right In Your Cluster

### All the calls are in the first document

If you are using mergeon, be mindful you need to order the two tables by the **same value** and the **same order**.

If you are not using mergeon, but rather the parameters, the parameter given is not the right one and therefore the query to the calls table is returning the wrong documents. 

### There is only have one call per subscriber

Your call section in the main template is called as an `Object` instead of an `Array```. Use brackets `[]` to force the type.