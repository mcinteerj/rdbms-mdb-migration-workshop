# Troubleshooting

## MongoSyphon does not do anything

```
> java -jar MongoSyphon.jar -c config.js
> 
```

Solution

Something went wrong, watch the MongoSyphon.log for the [ERROR] line.

# Index

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

[MongoSyphon does not do anything](#MongoSyphon-does-not-do-anything)

# Errors

## No $find section defined
```
12:01:24.612 [main] ERROR c.j.mongosyphon.MongoBulkWriter:78 - No $find section defined
```
Solution
## Expected a ',' or '}'
```
12:09:45.099 [main] ERROR c.j.mongosyphon.JobDescription:39 - Expected a ',' or '}' at 72 [character 7 line 6]
```
Solution
## JobDescription:26
```
11:18:07.934 [main] ERROR c.j.mongosyphon.JobDescription:26 - ./configs/config.js**cd**
```
Solution
## There is an error in the command
```
13:37:35.906 [main] ERROR c.johnlpage.mongosyphon.MongoSyphon:30 - Failed to parse command line options
```
Solution
## Cannot find section named
```
08:49:32.876 [main] ERROR c.j.mongosyphon.DocumentGenerator:41 - Cannot find section named 'null' in config - aborting
```
Solution
## Unable connect to the RDBMS
```
08:50:55.559 [main] ERROR c.j.mongosyphon.RDBMSConnection:84 - Unable to connect to RDBMS
```
Solution
## Communications link failure
```
08:50:55.559 [main] ERROR c.j.mongosyphon.RDBMSConnection:85 - Communications link failure
```
Solution
## Don't know how to handle connection uri
```
09:02:40.106 [main] ERROR c.j.mongosyphon.DocumentGenerator:136 - Don't know how to handle connection uri mysql://rdmbs.rds.amazonaws.com:3306/employees?useUnicode=true&useServerPrepStmts=true&useSSL=false
```
Solution
## JSONObject must end with '}'
```
11:24:18.270 [main] ERROR c.j.mongosyphon.JobDescription:39 - A JSONObject text must end with '}' at 451 [character 1 line 22]
```
Solution
## Timed out aftrer 30000ms
```
11:33:23.680 [main] ERROR c.j.mongosyphon.MongoBulkWriter:127 - Error: Timed out after 30000 ms while waiting to connect. Client view of cluster state is {type=UNKNOWN, servers=[{address=yourcluster.mongodb.net:27017, type=UNKNOWN, state=CONNECTING, exception={com.mongodb.MongoSocketException: yourcluster.mongodb.net}, caused by {java.net.UnknownHostException: yourcluster.mongodb.net}}]
```
Solution
## Duplicate key error
```
11:41:40.385 [main] WARN  c.j.mongosyphon.MongoBulkWriter:115 - E11000 duplicate key error collection: test.employees index: _id_ dup key: { _id: 10001 }
```
Solution
## Access denied
```
08:55:56.580 [main] ERROR c.j.mongosyphon.RDBMSConnection:85 - Access denied for user 'admin'@'localhost' (using password: YES)
```
Solution
## Unknown column
```
08:21:21.185 [main] ERROR c.j.mongosyphon.RDBMSConnection:173 - Unknown column <something> in 'order clause'
```
Solution
## Column is ambiguous
```
18:09:15.870 [main] ERROR c.j.mongosyphon.RDBMSConnection:173 - Column <something> in on clause is ambiguous
```
Solution
