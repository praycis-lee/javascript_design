//类声明的简单实例
//创建实例属性要使用关键字this,类的方法则被添加到prototype对象中。
function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){
	return this.name;
}

//创建person的实例
var p1 = new Person('lixiaoyong');
p1.getName();

//创建继承person的类(原型链继承)
function Author(name, books){
	Person.call(this,name);
	this.books = books;
}

Author.prototype = new Person();
Author.prototype.constructor = Author;
Author.prototype.getBooks = function(){
	return this.books;
}

//原型讲解
//每一个对象都有一个原型对象（__proto__），他指向了构造函数的prototype所指向的对象，但是构造函数本身也是一个对象，他的原型是Function,所以构造函数的原型对象实际上是Function.prototype