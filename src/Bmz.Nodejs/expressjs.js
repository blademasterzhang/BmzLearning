var express = require('express');

var mongoose = require('./config/mongoose.js');
var db = mongoose();

var User = db.model('User');
var app = express();

app.get('/category',function(req,res){
	res.status(200);
	res.json({
		Python:12,
		c:89,
		nodejs:3
	});
});

var questions = [{
		id:1,
		title:'t1',
		asker:'you',
		course:'nodejs',
		'last-reply':Date.now(),
		reply:1,
		state:'resolved'
	},{
		id:2,
		title:'t2',
		asker:'you2',
		course:'nodejs2',
		'last-reply':Date.now(),
		reply:2,
		state:'unresolved'

	}];

app.get('/user',function(req,res){
	var user = new User({
		uid:1,
		userName:'zhangxl'
	});
	user.save(function(err){
		if(err){
			res.end('Error');
			return next();
		}
		User.find({},function(err,docs){
			if(err){
			   res.end('Error');
			   return next();
		    }
		    res.json(docs);
	    })
	})
	
});

app.get('/questions/all',function(req,res){
	res.status(200);
	res.json(questions);
});



app.get('/questions/resolved',function(req,res){
	res.status(200);
	res.json(questions.filter(function(q){
		return q&&q.state==="resolved";
	}));
});

app.get('/questions/unresolved',function(req,res){
	res.status(200);
	res.json(questions.filter(function(q){
		return q&&q.state==="unresolved";
	}));
});

app.listen(3006,function(){
		console.log('run site on port : 3006')
	});