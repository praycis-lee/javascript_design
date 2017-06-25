// 最基本的单体模式类型
// Basic Singletion
var Singletion = {
	attribute1: true,
	attribute2: 10,
	method1: function(){

	},
	method2: function(){

	}
}

//单体是一个用来划分命名空间并将一批相关方法和属性组织在一起的对象，如果他可以被实例化，那么只能被实例化一次


//用namespace避免无意中改写变量，用单体对象将代码放在命名空间中
var myNameSpace = {
	findProduce: function(id){

	}
}

//拥有私有成员的单体对象（下划线表示法）
var GiantCorp = window.GiantCorp || {};

GiantCorp.DataParser = {
	/*private methods*/
	_stripWhitespace: function(str){
		return str.replace(/\s+/, '');
	},
	_stringSplit: function(str,delimiter){
		return str.split(delimiter);
	},

	/*public methods*/
	stringToArray: function(str,delimiter,stripWS){
		if(stripWS){
			str = this._strioWhitespace(str);
		}
		var outputArray = this._stringSplit(str,delimiter);
		return outputArray
	}
}


//拥有私有成员的单体对象（使用闭包,）

//这是一个使用闭包创建私有变量的例子
var MyNameSpace = {};//创建一个命名空间

MyNameSpace.singletion = (function(){
	//private members
	var privateAttribute1 = false;
	var privateAttribute2 = [1, 2, 3];
	function privateMethod1 = function(){};
	function privateMethod2 = function(){};

	return {
		//Public members
		publicAttribute1: true,
		publicAttribute2: 10,
		publicMethod1: function(){},
		publicMethod2: function(){}
	}

})() //这种单体模式被称为模块模式


//用闭包实现带有私有成员的DataParser单体对象，不需要添加下划线作为标识，而是把方法定义在闭包中

GiantCorp.DataParser = (function(){
	//private attributes.
	var whitespaceRegex = /\s+/;
	//private methods.
	function stripWhiteSpace(str){
		return str.replace(whitespaceRegex, '')
	};
	function stringSplit(str,delimiter){
		return str.split(delimiter)
	};

	return {
		//public methods.
		stringToArray: function(str, delimiter, stripWS){
			if(stripWS){
				str = stripWhiteSpace(str)
			}
			var outputArray = stringSplit(str, delimiter);
			return outputArray;
		}
	}

})()



































