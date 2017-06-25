//鸭式辩型模仿接口

//interface

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);

var FormItem = new Interface('FormItem', ['save']);

//CompositeForm class

var CompositeForm = function(id, method, action){
	//...
}

function addForm(formInstance) {

	ensureImplements(formInstace, Composite, FormItem);

	//This function will throw an error if a required method is not implemented...

	//...

}