/*常用语必须加载大量数据的单体，在需要被加载的时候加载，并且在加载前判断该单体时候被实例化，如果没有，那么将会创建并返回实例，如果已经被实例化，将返回现有实例*/

// 惰性加载单体的例子
// step1: 未做任何修改
MyNameSpace.Singletion = (function() {
    //private members.
    var privateAttributes1 = false;
    var privateAttributes2 = [1, 2, 3];

    function privateMethod1() {

    };

    function privateMethod2() {

    };

    // public members.
    return {
        publicAttribute1: true,
        publicAttribute2: 10,
        publicMethod1: function() {},
        publicMethod2: function() {}.
    }
})();

//step2: 转化工作的第一步是把单体的所有代码移动到一个constructor方法中,并且返回一个getInstance方法控制constructor的调用时机

MyNameSpace.Singletion = (function() {
    function constructor() {
        //private members.
        var privateAttributes1 = false;
        var privateAttributes2 = [1, 2, 3];

        function privateMethod1() {

        };

        function privateMethod2() {

        };
        // public members.
        return {
            publicAttribute1: true,
            publicAttribute2: 10,
            publicMethod1: function() {},
            publicMethod2: function() {}.
        }
    }

    return {
        getInstance: function() {
            //control code goes here...
        }
    }
})()

/*step3: 编写控制单体类实例化时机的代码，它需要做两件事，1.必须知道该实例是否被实例化过，2.如果已经实例化过，返回这个实例*/
MyNameSpace.Singletion = (function() {
    var uniqueInstance;

    function constructor(){
    	//...
    };

    return {
    	getInstance: function(){
    		if(!uniqueInstance){
    			uniqueInstance = constructor();
    		}

    		return uniqueInstance;
    	}
    }

})()
