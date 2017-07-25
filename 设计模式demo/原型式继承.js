//person prototype object
var Person = {
	name: 'default name',
	getName: function(){
		return this.name;
	}
}


function clone(object, name){
	var F = function(){};
	F.prototype = object;
	object.name = name;
	return new F();
}

var a = clone(Person, 'zhangsan');

console.log(a.getName());