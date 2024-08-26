import { Book, Library } from "./Library.js";
import { generateTestBooks } from "./Library-test.js";
import { Card } from "./Card.js";

const MAX_PAGES_LENGTH = 4;

const TEST_PARAMS = {
    test: true,
    numBooks: 6,
    titleCharRange: [50, 50],
    authorCharRange: [50, 50]
};

function populateLibrary(library) {
    let libraryContainer = document.querySelector('.libraryContainer');

    const books = library.books.map(Card);
    libraryContainer.innerHTML = books.join('');
};

function addBookBtnClicked() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

function handlePagesInputChange(e) {
    const disallowedChars = new Set(['e', '+', '-', '.']);
    const newInput = e.target.value + e.key;

    // Must be an allowed character, be below the max length, and be a positive integer.
    if (disallowedChars.has(e.key) || newInput.length > MAX_PAGES_LENGTH || isNaN(newInput) || Number(newInput) <= 0) {
        e.preventDefault();
    }
}

function init(testParams) {
    let library = new Library();

    if (testParams.test) {
        const books = generateTestBooks(testParams.numBooks, testParams.titleCharRange, testParams.authorCharRange);
        books.forEach(book => {
            library.addBook(book);
        });
    }

    populateLibrary(library);

    let addBookBtn = document.querySelector('.addBookBtn');
    addBookBtn.addEventListener("click", addBookBtnClicked);

    let pagesInput = document.querySelector('.pagesInput');
    pagesInput.addEventListener("keypress", handlePagesInputChange);
};

init(TEST_PARAMS);