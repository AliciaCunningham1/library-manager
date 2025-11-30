class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.updateBookList();
    }

    updateBookList() {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';

        this.books.forEach(book => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = book.getDetails();
            bookList.appendChild(li);
        });
    }
}

const library = new Library();

document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const newBook = new Book(title, author);
    library.addBook(newBook);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});
