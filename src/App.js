import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";

class BooksApp extends Component {
  state = {
    books: []
  };

  getBookshelf = book => {
    const currentBook = this.state.books.find(d => d.id === book);
    if (currentBook) return currentBook.shelf;
    return "none";
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      // Check to make sure we setState properly.
      console.log(this.state.books.map(books => books));
    });
  }

  changeBookshelf = (e, book) => {
    BooksAPI.update(book, e).then(() => {
      book.shelf = e;

      this.setState(state => ({
        books: state.books.filter(d => d.id !== book.id).concat([book])
      }));
    });
  };

  render() {
    const currentlyReading = this.state.books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToRead = this.state.books.filter(
      book => book.shelf === "wantToRead"
    );
    const read = this.state.books.filter(book => book.shelf === "read");
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
          currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          read={read}
          getBookshelf={this.getBookshelf}
          changeBookshelf={this.changeBookshelf}
        />
      </div>
    );
  }
}

export default BooksApp;
