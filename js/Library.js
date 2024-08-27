export function Library(books=[]) {
    this.books = Array.from(books);
};

Library.prototype.addBook = function(book) {
    this.books.push(book);
};

Library.prototype.removeBook = function(idx) {
    if (idx >= 0 && idx < this.books.length) {
        this.books.splice(idx, 1);
    }
};

export function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};