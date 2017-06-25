//原始数据按值传递，其他类型按引用传递

//Class Person
function Person(name, age){

	this.name = name;

	this.age = age;
}

Person.prototype = {

	getName:function(){
		return this.name
	},

	getAge: function(){
		return this.age;
	}
}

//instance of Person

var alice = new Person('Alice', 93);

var bill = new Person('bill', 30);

//modify Person

//即使先创建了alice实例，但是getGreeting方法在alice实例中依然可以使用，由于prototype的工作机制
Person.prototype.getGreeting = function(){
	return 'Hi ' + this.getName() + '!';
}

alice.displayGreeting = function(){
	alert(this.getGreeting);
}