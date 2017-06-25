//所有属性和方法都是公开的，可访问的。这些公用属性需要使用this关键字创建
//isbn没有类型检查
var Book = function(isbn, title, author) {

	if(isbn === undefined){

		throw new Error('Book constructor requires an isbn');


	}

	this.isbn = isbn;

	this.title = title || 'No title specified';

	this.author = author || 'No anthor specified';

}


Book.prototype.display = function() {

	//...

}

//为isbn添加类型检查

var Book = function(isbn, title, author) {

	if(!this.checkIsbn(isbn)){

		throw new Error('Book: Invalid ISBN.');

	}

	this.isbn = isbn;

	this.title = title || 'No title specified';

	this.author = author || 'No author specified';

}

Book.prototype = {

	checkIsbn:function(isbn){

		if(isbn === undefined || typeof isbn !== 'string'){

			return false;

		}

	}

}



//为每个属性提供取值器和赋值器，可以在把一个新值赋值给属性之前进行各种检验。

var Book = function(isbn, title, author) {

	this.setIsbn(isbn);

	this.setTitle(title);

	this.setAuthor(author);

}

Book.prototype = {

	checkIsbn: function(isbn) {

		//...

	},

	getIsbn: function() {

		return this.isbn;

	},

	setIsbn: function() {

		if(!this.checkIsbn(isbn)){
			throw new Error('Book: Invalid ISBN');
		}
		this.isbn = isbn;

	},

	getTitle: function(){
		return this.title;
	},
	setTile: function(title){
		this.title = title || 'No title specified';
	},
	getAuthor: function(){
		return this.author;
	},
	setAuthor: function(author){
		this.author = author || 'No author specified';
	},

	display: function(){
		//...
	}

};












































