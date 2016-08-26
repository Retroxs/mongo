var mongoose = require ('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

Book.findOne({author:'sun'},function (err,doc) {
	// body...
	if (err) {
		console.log('err:',err);
		retuen;
	}
	doc.author="hello";
	doc.save();
	console.log('findOne result:',doc);
})