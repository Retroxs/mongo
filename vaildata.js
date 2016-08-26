var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo')

var OrderSchema = mongoose.Schema({
	counts:{
		type:Number,
		required:true,
		max:999,
		min:99
	},
	status:{
		type:String,
		enum:['craeated','failed','success']
	},
	desc:{
		type:String,
		match:/book/g,
		validate:function(desc){
			return desc.length>=10
		}
	}
})

var Order = mongoose.model('Order',OrderSchema)
var order =  new Order()
order.counts=100
order.status='success'
order.desc='this a great book'
order.save(function (err) {
	if(err){
		return console.log('show error',err)
	}
	console.log('success')
})