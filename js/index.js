import { Book, Library } from "./Library.js";
import { generateTestBooks } from "./Library-test.js";

const TEST_PARAMS = {
    test: true,
    numBooks: 50,
    titleCharRange: [1, 50],
    authorCharRange: [1, 50]
};

function init(testParams) {
    let library = new Library();

    if (testParams.test) {
        const books = generateTestBooks(testParams.numBooks, testParams.titleCharRange, testParams.authorCharRange);
        books.forEach(book => {
            library.addBook(book);
        });
    }

    console.log(library);
}

init(TEST_PARAMS);