
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { Musicdirector: "Ilaiyaraja", Singer: "unnikrishnan,Anuradha Sriram" };
  dbo.collection("songdetails").find(query).toArray(function(err, result) {
	if (err) throw err;
	console.log(result);
	db.close();
  });
});
