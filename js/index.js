import { Book, Library } from "./Library.js";
import { generateTestBooks } from "./Library-test.js";
import { Card } from "./Card.js";

const TEST_PARAMS = {
    test: true,
    numBooks: 5,
    titleCharRange: [50, 50],
    authorCharRange: [50, 50]
};

function populateLibrary(library) {
    let libraryContainer = document.querySelector('.libraryContainer');

    const books = library.books.map(Card);
    libraryContainer.innerHTML = books.join('');
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