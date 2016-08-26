var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo');

var BookSchema = mongoose.Schema({
		name:String,
		isbn:Number

})
//静态方法
BookSchema.statics.findByIsbn=function(isbn,cd){
	this.findOne({isbn:isbn},function(err,doc){
		cd(err,doc);
	})
}
//实例方法
BookSchema.methods.print=function(){
	console.log('Book information')
	console.log('\tname',this.name)
	console.log('\tisbn',this.isbn)

}

var Book = mongoose.model('Book',BookSchema)

var book= new Book({

	name : 'web dsingner',
	isbn: 12345
})

book.save(function(err){
	if(err){
		return 	console.log('show err',err)
	}
	Book.findByIsbn(12345,function(err,doc){
		if(err){
			return console.log(err)
		}
		console.log('data',doc)
	})
	book.print();

})
