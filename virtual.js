var mongoose = require('mongoose');

var PersonSchems = mongoose.Schema({
	firstname:String,
	lastname:String

})

PersonSchems.virtual('fullname').get(function(){

	return this.firstname+" "+this.lastname;
})
//返回JSON时加入fullname
PersonSchems.set('toJSON',{getters:true,virtual:true})

var Person = mongoose.model('Person',PersonSchems)

var person = new Person({
	firstname:'sun',
	lastname:'chenhui'

})

console.log('fullname:',person.fullname)
console.log('JSON',JSON.stringify(person))