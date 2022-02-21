import AwesomeBooks from './booksData.js';

const books = new AwesomeBooks();
const booksSection = document.getElementById('booksSection');
const form = document.getElementById('bookForm');

const createBookElements = () => {
  booksSection.replaceChildren();
  if (books.books.length > 0) {
    const booksList = document.createElement('ul');
    booksList.className = 'books-list';
    booksList.style.listStyleType = 'none';
    books.books.map((b) => {
      const bookCard = document.createElement('li');
      const titleElement = document.createElement('h4');
      titleElement.style.padding = '0';
      titleElement.style.margin = '0';

      const titleText = document.createTextNode(`"${b.title}" by ${b.author}`);
      titleElement.appendChild(titleText);
      bookCard.appendChild(titleElement);
      const removeBtn = document.createElement('button');
      removeBtn.id = 'removeBtn';
      const btnText = document.createTextNode('Remove');
      removeBtn.onclick = () => {
        books.removeBook(b.id);
        books.saveBooks();
        createBookElements();
      };
      removeBtn.appendChild(btnText);
      bookCard.appendChild(removeBtn);
      booksList.appendChild(bookCard);

      return bookCard;
    });
    booksSection.appendChild(booksList);
  } else {
    const noBooks = document.createElement('h3');
    noBooks.style.color = '#000';
    noBooks.style.backgroundColor = '#fff';
    noBooks.style.textAlign = 'center';
    noBooks.style.opacity = '0.6';
    noBooks.style.padding = '10px';
    noBooks.style.borderRadius = '15px';
    noBooks.style.width = '100%';
    const noBooksText = document.createTextNode('No books available!');
    noBooks.appendChild(noBooksText);
    booksSection.appendChild(noBooks);
  }
};

const getAddedBook = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.addBook(title, author);
  createBookElements();
  form.reset();
};

const initStorage = () => {
  if (localStorage.getItem('books')) {
    books.getStoredBooks();
    createBookElements();
  } else {
    createBookElements();
  }
};

export {
  initStorage, getAddedBook, booksSection, form,
};