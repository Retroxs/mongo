var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

var book = new Book({
		name:"web developer",
		author:'sun',
		publishTime:new Date()
});


book.save(function (err) {
	console.log('save status:',err? 'fail' : 'success');
})