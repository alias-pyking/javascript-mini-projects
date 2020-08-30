// Book Constructor

class Book{
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}

}

class UI{
	addBookToList(book) {
		const bookList = document.getElementById('book-list');
		const row = document.createElement('tr');
		row.innerHTML = `<td>${book.title}</td>
						<td>${book.author}</td>
						<td>${book.isbn}</td>
						<td><a href='#' id='delete-book'>X</a></td>`;
		bookList.appendChild(row);
	}

	showAlert(message, className) {
		const div = document.createElement('div');
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const bookForm = document.getElementById('book-form');
		container.insertBefore(div, bookForm);
	
		setTimeout(() => {
			document.querySelector('.alert').remove();
		},2000)
	}

	deleteBookFromList(target) {
		console.log(target);
		if (target.id === 'delete-book') {
			this.showAlert('Book removed successfully', 'success');
			target.parentElement.parentElement.remove();
		}
	}
	
	clearFields(){
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
	
}




// eventListners

const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', (event) => {
	event.preventDefault();
	// Getting the form values
	const title = document.getElementById('title');
	const author = document.getElementById('author');
	const isbn = document.getElementById('isbn');

	const book = new Book(title.value, author.value, isbn.value);
	const ui = new UI();
	// Validate inputs
	if (title.value === '' || author.value === '' || isbn.value === '') {
		ui.showAlert('Please fill in all fields', 'error');
		ui.clearFields();
	} else {
		ui.addBookToList(book);
		ui.showAlert('Book Added successfully', 'success');
		ui.clearFields();
	}
});

// Delegating event to booklist for deleting the book

const bookList = document.getElementById('book-list');

bookList.addEventListener('click', event => {
	const ui = new UI();
	ui.deleteBookFromList(event.target);
	
	event.preventDefault();
})