//***********************************************************
var Anim = function(){};

Anim.prototype.start = function(){};

Anim.prototype.stop = function(){};

//Usage

var myAnim = new Anim();

myAnim.start();

myAnim.stop();

//***********************************************************
var Anim = function(){};

Anim.prototype = {

	start: function(){},

	stop: function(){}

};

//***********************************************************
Function.prototype.method = function(name,fn){
	this.prototype[name] = fn;
	return this;
}

var Anim = function(){};

Anim.method('start', function(){}).
		method('stop', function(){});
