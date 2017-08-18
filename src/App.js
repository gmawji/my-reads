import React, { Component } from "react";
import { Route } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";
import Search from './components/Search'

class BooksApp extends Component {
  state = {
    books: [],
    bookSearch: []
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
      // console.log(this.state.books.map(books => books));
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

  searchBooks = (event) => {
    let query = event.target.value
    if (query) {
      BooksAPI.search(query, 20).then((bookSearch) => {
        this.setState({bookSearch})
        console.log(this.state.bookSearch.map(books => books));
      })
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

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
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            getBookshelf={this.getBookshelf}
            changeBookshelf={this.changeBookshelf}
          />
        )}>
        </Route>
        <Route exact path="/search" render={() => (
          <Search 
            books={this.state.bookSearch}
            getBookshelf={this.getBookshelf}
            changeBookshelf={this.changeBookshelf}
            searchBooks={this.searchBooks}
          />
        )} > 
        </Route>
      </div>
    );
  }
}

export default BooksApp;
