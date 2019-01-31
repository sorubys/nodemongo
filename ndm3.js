var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
	{

   	 Songname : "Thaniye Thananthaniye",
   	 flim : "Rhythm",
   	 Musicdirector: "A.R.Rahman",
  	Singer : "Shankar mahadevan"
	},
	{
   	 Songname : "Evano oruvan",
   	 flim : "Alai payuthe",
   	 Musicdirector : "A.R.Rahman",
   	 Singer : "Swarnalatha"
	},
	{
   	 Songname : "Roja poonthooddam",
   	 flim : "Kannukkul nilavu",
   	 Musicdirector: "Ilaiyaraja",
   	 Singer: "unnikrishnan,Anuradha Sriram"
	},
	{
   	 Songname : "Vennilave venilave vinnaithaandi",
   	 flim : "Minsarak kanavu",
   	 Musicdirector: "A.R.Rahman",
   	 Singer: "Hariharan,Sadhana Sargam"
	},
	{
   	 Songname: "Sollamal thottu chellum thendral",
   	 flim: "Dheena",
   	 Musicdirector: "Yuvan Shankar Raja",
   	 Singer: "Hariharan"
	}


  ];

  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
	if (err) throw err;
	console.log("Number of documents inserted: " + res.insertedCount);
	db.close();
  });
});
