//鸭式辩型模仿接口与注释混合

//interfaces

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);

var FormItem = new Interface('FormItem', ['save']);

//CompositeForm class

var CompositeForm = function(id, method, action) {

	//implements Composite, FormItem...

}

function addForm(formInstance) {

	Interface.ensureImplements(formInstance, Composite, FormItem);

	//This function will throw an new error if a required method is not implemented,
	//halting execution of the function
	//all code beneath this line will be executed only if the checks pass...
}

