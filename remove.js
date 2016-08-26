var mongoose = require ('mongoose');
require('./model.js');

var Book = mongoose.model('Book');
Book.findOne({author:'hello'},function (err,doc) {
	// body...
	if (err) {
		console.log('err',err);
		return;
	}

	if(doc){
		doc.remove();
	}
})