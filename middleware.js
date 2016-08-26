var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo');

var OrderSchema = mongoose.Schema({
	address:String
});

OrderSchema.post('save',function(next){
		console.log('this a post middleware');
});

var Order = mongoose.model('Order',OrderSchema);

var order= new Order({
	address:"1001"
});

order.save();