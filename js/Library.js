export class Library {
    constructor(books=[]) {
        this.books = Array.from(books);
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(idx) {
        if (idx >= 0 && idx < this.books.length) {
            this.books.splice(idx, 1);
        }
    }
}

export class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}