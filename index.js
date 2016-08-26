//索引
var BookSchema = mongoose.Schema({
	isbn:{
	type:Number,
	unique:true
	},
	name:{
	type:String,
	index:true
	}


})