var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo');

var User =  mongoose.model('User',{
	nickname:{
		type:String,
		trim:true
	},
	blog:{
		type:String,
		get:function(url){
			if(!url) return url;
			if(0 !==url.indexOf("http://") && 0 !==url.indexOf("https://")) 
				url = "http://"+url;

				return url;
						
		}
	}
})

var user = new User ({
	nickname:'    sunchenhui  ',
	blog:'ifuncc.com'
	})

user.save(function(err){
	if(err){
		return console.log('show err ',err);
	}
console.log('user:',user);
console.log('blog:',user.blog)
})
