import { Book } from "./Library.js";

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function generateRandomString(len) {
    let str = "";
    for (let i = 0; i < len; i++) {
        const charIdx = getRandomArbitrary(0, CHARACTERS.length);
        str += CHARACTERS.charAt(charIdx);
    }

    return str;
}

export function generateTestBooks(numBooks, titleCharRange, authorCharRange) {
    let books = []
    for (let i = 0; i < numBooks; i++) {
        const titleCharLen = getRandomArbitrary(titleCharRange[0], titleCharRange[1]);
        const authorCharLen = getRandomArbitrary(authorCharRange[0], authorCharRange[1]);
        const title = generateRandomString(titleCharLen);
        const author = generateRandomString(authorCharLen);
        const pages = Math.floor(Math.random() * 1500);
        books.push(new Book(title, author, pages, false));
    }

    return books;
};