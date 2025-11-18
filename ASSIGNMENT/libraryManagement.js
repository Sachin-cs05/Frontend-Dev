class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      return true;
    }
    return false; 
  }

  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      return true;
    }
    return false;
  }
}

const books = [
  new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"),
  new Book("1984", "George Orwell", "978-0-452-28423-4"),
  new Book("Pride and Prejudice", "Jane Austen", "978-0-14-143951-8"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5"),
  new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "978-0-439-70818-8")
];

function displayAvailableBooks() {
  const availableBooks = books.filter(book => !book.isIssued);
  console.log("Available Books:");
  availableBooks.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
  });
}

function issueBookByISBN(isbn) {
  const book = books.find(book => book.isbn === isbn);
  if (book) {
    if (book.issueBook()) {
      console.log(`Successfully issued: ${book.title}`);
      return true;
    } else {
      console.log(`Book "${book.title}" is already issued.`);
      return false;
    }
  } else {
    console.log("Book not found with the given ISBN.");
    return false;
  }
}

displayAvailableBooks();

issueBookByISBN("978-0-439-70818-8");

console.log("\nAfter issuing a book:");
displayAvailableBooks();