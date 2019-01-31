
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = { Songname: "ammu kuttyee", flim: "jemikaneshanum surilirajan", Musicdirector: "Ilaiyaraja", Singer: "Hariharan"};
  dbo.collection("songdetails").insertOne(myobj, function(err, res) {
	if (err) throw err;
	console.log("1 document inserted");
	db.close();
  });
});
