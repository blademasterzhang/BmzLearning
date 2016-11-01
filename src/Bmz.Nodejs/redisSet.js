var client = require("./client")

/*
Object.prototype.toString=function(){
	return JSON.stringify(this);
};
client.set('world',{a:1,b:2,c:4});

client.get("world",function(err,v){
	console.log("redis get world err,v:",err,v, typeof v);
})



client.rpush("testList",'a');
client.rpush("testList",'b');
client.rpush("testList",'c');
client.rpush("testList",1);
client.lpush('testList'	,2);
client.lpop('testList',function(err,v){
	console.log('client.lpop,err,v',err,v)
})

client.lrange("testList",0,-1,function(err,lists){
	console.log('client.lrange,err,lists',err,lists);
})

*/
client.sadd('testSet',1);
client.sadd('testSet','a');
client.sadd('testSet',1);

client.smembers('testSet',function(err,v){
	console.log('client.smembers err,v:',err,v);
})




