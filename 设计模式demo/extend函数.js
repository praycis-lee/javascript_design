// extend funtion
function extends(subClass,superClass){

	var F = function(){};

	F.prototype = superClass.prototype;

	subClass.prototype = new F();

	subClass.prototype.constructor = subClass;

}

//类式继承.js继承的改造
// class person
function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){
	return this.name;
}
//class author
function Author(name,books){
	Person.call(this,name);
	this.books = books;
}

extends(Author,Person);

Author.prototype.getBooks = function(){
	return this.books;
}
