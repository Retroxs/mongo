var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo')

var User = mongoose.model('User',{
	username:String
})

var News = mongoose.model('News',{
	title:String,
	author:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	}

})

var user = new User({
	username:'sunchenhui'
})

var news = new News({

	title:'happy development',
	author:user
})

user.save(function (err) {
	if (err) {
		return console.log('fail',err)
	}
	news.save(function(err){
		if (err) {
			return console.log('fail',err)
		}

		News.findOne().populate('author').exec(function(err,doc){
			console.log('result',err,doc)
		})
	})
})