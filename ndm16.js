
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myquery = {};
  var newvalues = {$set: {Average: ""}};
  dbo.collection("studentmarks").updateMany(myquery, newvalues, function(err, res) {
	if (err) throw err;
	console.log("Average inputed");
	db.close();
  });
});
