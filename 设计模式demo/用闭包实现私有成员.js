var Book = function(newIsbn, newTitle, newAuthor){
	//private attributes.
	var isbn, title, author;

	//private method.
	function checkIsbn(isbn){
		//...
	}

	//privileged methods.
	this.getIsbn = function(){
		return isbn;
	};
	this.setIsbn = function(newIsbn){
		if(!checkIsbn(newIsbn)){
			throw new Error('Book: invalid newIsbn');
		}
		isbn = new isbn;
	};

	//...
	//Constructor code.
	this.setIsbn(newIsbn);
	this.setTitle(newTile);
	this.setAuthor(newAuthor);


};

Book.prototype = {
	display: function(){
		//...
	}
}