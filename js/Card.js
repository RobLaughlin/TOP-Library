export const Card = book => {
    return DOMPurify.sanitize(`
        <div class="card">
            <p><strong class="title">Title: </strong>${book.title}</p>
            <p><strong class="author">Author: </strong>${book.author}</p>
            <p><strong class="pages">Pages: </strong>${book.pages}</p>
        </div>
    `);
};