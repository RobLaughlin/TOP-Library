import { Book, Library } from "./Library.js";
import { generateTestBooks } from "./Library-test.js";
import { Card } from "./Card.js";

const TEST_PARAMS = {
    test: true,
    numBooks: 50,
    titleCharRange: [50, 50],
    authorCharRange: [50, 50]
};

function populateLibrary(library) {
    let libraryContainer = document.querySelector('.libraryContainer');
    // console.log(library.books);
    const books = library.books.map(Card);
    libraryContainer.innerHTML = books.join('');

    // library.books.forEach(book => {
    //     let card = document.createElement("div");
    //     card.classList.add("card");

    //     let title = document.createElement("p");
    //     title.classList.add("title");
    //     // title.appendChild(document.createElement("strong"))
    //     title.innerText = book.title;

    //     let author = document.createElement("p");
    //     author.classList.add("author");
    //     author.innerText = book.author;

    //     let pages = document.createElement("p");
    //     pages.classList.add("pages");
    //     pages.innerText = book.pages;

    //     card.appendChild(title);
    //     card.appendChild(author);
    //     card.appendChild(pages);

    //     libraryContainer.appendChild(card);
    // });
};

function init(testParams) {
    let library = new Library();

    if (testParams.test) {
        const books = generateTestBooks(testParams.numBooks, testParams.titleCharRange, testParams.authorCharRange);
        books.forEach(book => {
            library.addBook(book);
        });
    }

    populateLibrary(library);
};

init(TEST_PARAMS);