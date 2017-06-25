//接口提供了一种用以说明一个对象应该具有哪些方法的手段。
//method1    用注释描述接口
/*
interface Composite {
	function add(child);
	function remove(child);
	function getChild(index);
}

interface FormItem {
	function save();
}
 */
//定义构造函数  
var CompositeForm = function(id, method, action){
	//implements Composite, FormItem...
}

//Implement the Composite interface
CompositeFrom.prototype.add = funtion(child){
	//...
}

CompositeForm.prototype.remove = function(child){
	//...
}

Composite.prototype.getChild = function(index){
	//...
}

//Implement the FormItem interface

CompositeForm.prototype.save = function(){
	//...
}

