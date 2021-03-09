var books = document.querySelectorAll('#books-list li .name');

Array.from(books).forEach(function(books){
    books.textContent +='(book title)';
});

const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';