var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongo');

var userSchema = mongoose.Schema({

	nickname:{
		type:String,
		default:'new user'
	}

})

var User = mongoose.model('User',userSchema);

var user = new User();

console.log('user',user);