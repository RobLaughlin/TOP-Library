export function Library(books=[]) {
    this.books = Array.from(books);
};

Library.prototype.addBook = function(book) {
    this.books.push(book);
};

export function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};