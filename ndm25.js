var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
      	dbo.collection("studentmarks").find({$or:[{name:"Aruli"},{name: "Kala"}]},{maths_marks:1, science_marks:1}).toArray(function(err, result) {
	if (err) throw err;
	console.log(result);
	db.close();
  });
});
