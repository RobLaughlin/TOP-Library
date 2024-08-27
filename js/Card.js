export const Card = (book, idx) => {
    return DOMPurify.sanitize(`
        <div class="card" data-index="${idx}">
            <p><strong class="title">Title: </strong>${book.title}</p>
            <p><strong class="author">Author: </strong>${book.author}</p>
            <p><strong class="pages">Pages: </strong>${book.pages}</p>
            <p><strong class="pages">Read: </strong>${book.read === false ? "No" : "Yes"}</p>
            <div class="iconContainer">
                <img src="icons/close.svg" alt="Red x icon, click to remove this book" class="removeIcon icon" data-index="${idx}">
                <img src="icons/eye.svg" alt="Eye icon, click to toggle the read status for this book" class="toggleReadIcon icon" data-index="${idx}">
            </div>
        </div>
    `);
};