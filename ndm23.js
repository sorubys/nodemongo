
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myquery = { name:"John" };
  var newvalues = { $rename: {english_marks: "science_marks"} };
  dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
	if (err) throw err;
	console.log("document updated");
	db.close();
  });
});
