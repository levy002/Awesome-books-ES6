export default class AwesomeBooks {
    books = [];

    saveBooks() {
      const booksList = JSON.stringify(this.books);
      localStorage.setItem('books', booksList);
    }

    addBook(title, author) {
      const book = {
        title,
        author,
        id: Date.now(),
      };
      this.books.unshift(book);
      this.saveBooks();
    }

    removeBook(id) {
      this.books = this.books.filter((a) => a.id !== id);
      this.saveBooks();
    }

    getStoredBooks() {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
}