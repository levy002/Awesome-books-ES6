import AwesomeBooks from './booksData.js';

const books = new AwesomeBooks();
const booksSection = document.getElementById('booksSection');
const form = document.getElementById('bookForm');

const createBookElements = () => {
  booksSection.replaceChildren();
  if (books.books.length > 0) {
    const booksList = document.createElement('ul');
    booksList.style.listStyleType = 'none';
    booksList.style.margin = '0';
    booksList.style.padding = '0';
    books.books.map((b) => {
      const bookCard = document.createElement('li');
      const titleElement = document.createElement('h4');
      titleElement.style.padding = '0';
      titleElement.style.margin = '0';
      const titleText = document.createTextNode(`"${b.title}" by ${b.author}`);
      titleElement.appendChild(titleText);
      bookCard.appendChild(titleElement);
      const removeBtn = document.createElement('button');
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
    const noBooksText = document.createTextNode('There are no books available');
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