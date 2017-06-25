//在javascript中，只有函数具有作用域。私有属性的本质就是在对象外部无法访问。

//这个例子说明了javascript中作用域的特点
// function foo(){
// 	var a = 10;
// 	function bar(){
// 		a*=2;
// 		return a;
// 	}

// 	bar();

// 	console.log(a);
// }
// foo(); //a: 20

// //如果bar在foo外部被调用
// function foo(){
// 	var a = 10;

// 	function bar(){
// 		a*=2;
// 		return a;
// 	}

// 	return bar;
// }

// var baz = foo();

// baz();// 20
// baz();// 40
// baz();// 80
// 
