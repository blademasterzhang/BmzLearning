var mongoose = require("mongoose");

var uri = 'mongodb://username:password@hostname:port/databasename';
uri="mongodb://localhost/part9";

mongoose.connect(uri);

var BookSchema = new mongoose.Schema({
	name:String,
	author:String,
	publishTime:Date
});

mongoose.model('Book',BookSchema);

var Book = mongoose.model("Book");

// var book = new Book({
// 	name:'mao he laoshu',
// 	author:'zhangxl',

// });

// book .publishTime = new Date();

// book.save(function(err){
// 		console.log('save status:',err?'failed':"success");
// });

// Book.find({},function(err,docs){
// 	console.log("result:",JSON.stringify(docs)," err:",err)
// })

var cond = {$or:[{author:'lifeng'},{name:'zhangxl'}]}

Book.findOne(cond,function(err,doc){
	if(err)
	{
		console.log("err:",err);
		return;
	}
	if(doc)
	{
		doc.publishTime= new Date();
		doc.save();

		//doc.remove()
	}
	console.log("result:",JSON.stringify(doc));
})