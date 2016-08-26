var mongoose = require ('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

var cond = {
	$or:[
		{author:'sun'},
		{author:'hello'}
	]
}

Book.find(cond,function (err,docs) {
	// body...
	if(err){
	console.log('err',err);
	return;
}
console.log(docs);
})