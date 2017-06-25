//单利模式
// function Person(name) {
//     // body...
//     this.name = name;
// }

Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
}



var mySingletonSpace = {};

mySingletonSpace.singleton = (function() {
    var singleton = null;

    function Person(name) {
    	if(!this instanceof Person){
    		return new Person();
    	}
        this.name = name || 'lixiaoyong';
        console.log('created');
    }

    Person.method('getName', function() {
        return this.name });

    function getInstance(name) {

        if (!singleton) {

            singleton = new Person(name);

        }

        return singleton;

    }

    return  {
    	getInstance: getInstance
    }


})();


var singleton = mySingletonSpace.singleton.getInstance('zhangsan');
console.log(singleton.name);
console.log(singleton.getName());