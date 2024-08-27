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

    const books = library.books.map((book, idx) => {
        return Card(book, idx);
    });
    libraryContainer.innerHTML = books.join('');

    let removalIcons = Array.from(libraryContainer.getElementsByClassName("icon"));
    removalIcons.forEach(icon => {
        icon.addEventListener("click", e => {removeCardBtnClicked(e, library)});
    });
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

function removeCardBtnClicked(e, library) {
    const idx = e.target.dataset.index;
    library.removeBook(idx);
    populateLibrary(library);
}

function formAddBookBtnClicked(e, library) {
    const addBookForm = document.getElementById("addBookForm");
    if (addBookForm.checkValidity()) { e.preventDefault(); }
    else { return; }

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = Number(document.getElementById("pages").value);
    const book = new Book(title, author, pages);
    library.addBook(book);

    populateLibrary(library);

    // Clear the form inputs
    let inputs = document.querySelectorAll(".addBookDialog input");
    inputs.forEach(input => {
        input.value = "";
    });

    const dialog = document.querySelector(".addBookDialog");
    dialog.close();
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

    let pagesInput = document.querySelector('#pages');
    pagesInput.addEventListener("keypress", handlePagesInputChange);

    let formAddBookBtn = document.getElementById("formAddBookBtn");
    formAddBookBtn.addEventListener("click", (e) => {
        formAddBookBtnClicked(e, library)
    });
};

init(TEST_PARAMS);