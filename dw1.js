var express = require('express');
var aplw  =  express();	
var path = require('path');
//var session = require('express-session');
var bodyParser  = require('body-parser');
var db1;
var vl = 0;
//var mongoclient = require('mongodb').MongoClient;

var mongoose = require('mongoose');
var port = process.env.PORT || 8084;
mongoose.connect('mongodb://dwql4:dwql456@ds231207.mlab.com:31207/dwql2',{useNewUrlParser: true} , function(err,dbjw){

if(err)
{
return console.log(err);
}
console.log("no error");
db1 = dbjw;

aplw.listen(process.env.PORT , function(err , kq8){
if(err)
{
	console.log(err);
}
console.log("connect1");	
});
});

aplw.use(bodyParser.urlencoded({extended:true}));
aplw.use(bodyParser.json());                                    
aplw.use(bodyParser.json({ type: 'application/vnd.api+json' }));
var model1  = mongoose.model('Todo' , {

	text : String
});

aplw.get('/api/q' , function(req,res){

		model1.find(function(err,kq1)
		{
				if(err)
				{
					res.send(err);
				}
				
				res.json(kq1);
		});

});

aplw.post('/api/q' , function(req,res)
{
		model1.create({
			text : req.body.text,
			done : false

		} , function(err,kq2){
			if(err)
			{
					res.send(err);
			}	
				model1.find(function(err , kq4)
				{
						if(err)
						{
					       res.send(err);			
						}
						res.json(kq4);
				});
		});



});

aplw.delete('/api/q/:id1' , function(req,res){

	model1.deleteOne({
		_id : req.params.id1
	} , function(err , kq5){
		if(err)
		{
				res.send(err);
		}	
			model1.find(function(err , kq6){
					if(err)
					{
						res.send(err);
					}	
					res.json(kq6);
			});
	});
});

aplw.get('/' , function(req,res){
	res.sendFile(__dirname + '/kq4/index.html');
	console.log("get1");	
});
