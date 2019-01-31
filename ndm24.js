var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("studentmarks").deleteOne(myquery, function(err, obj) {
	if (err) throw err;
	console.log("document deleted");
	db.close();
  });
});
