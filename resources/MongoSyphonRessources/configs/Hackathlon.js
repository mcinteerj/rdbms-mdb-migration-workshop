{

start: {
  template: {
      "subscriber_id": "$subscriber_id",
      "gender": "$gender",
      "name": "$name",
      "email": "$email",
      "phone_number":"$phone_number",
      "date_of_birth": "$date_of_birth",
      "address":{"street": "$street", "zip":"$zip", "city":"$city", "country_code":"$country_code"},
      "calls": ["@callssection"]
    },
    source: {
        uri:  "jdbc:mysql://database-1.cb7xvxwyioz4.eu-west-3.rds.amazonaws.com:3306/telecom?useUnicode=true&useServerPrepStmts=true&useSSL=false",
        user: "bt-hack",
        password: "H@ckathlon1",
    },
    target : {
      mode: "insert",
      uri:"mongodb://<user>:<pass>@sandbox-shard-00-00.rtgvt.mongodb.net:27017,sandbox-shard-00-01.rtgvt.mongodb.net:27017,sandbox-shard-00-02.rtgvt.mongodb.net:27017/test?ssl=true&replicaSet=atlas-cv4zo0-shard-0&authSource=admin&retryWrites=true&w=majority",
      namespace: "hackathlon.test"
    },
  query: {
      sql:'SELECT * FROM customers order by subscriber_id DESC'
  }
},
callssection:{
    template:{
        "call_duration":"$call_duration",
        "date":"$date_time_stamp",
        "rate_plan_id":"@rateplansection",
        "connected_party_number":"$connected_party_id"
    },
    query: {
        sql:'SELECT * FROM calls where subscriber_id=?'
    },params:["subscriber_id"]
},
rateplansection:{
    template:{
        "description":"$description",
        "type":"$type"
    },
    query:{
        sql:'SELECT * FROM rate_plan where rate_plan_id=?'
    },params:["rate_plan_id"]
},
}
