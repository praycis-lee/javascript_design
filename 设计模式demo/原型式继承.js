//person prototype object
var Person = {
	name: 'default name',
	getName: function(){
		return this.name;
	}
}


function clone(object){
	var F = function(){};
	F.prototype = object;
	return new F();
}

var a = clone(Person);