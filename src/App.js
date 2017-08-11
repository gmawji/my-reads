import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from './components/ListBooks'

class BooksApp extends Component {
  state = {
    books: [],

    // TODO: use url for routing
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      // Check to make sure we setState properly.
      console.log(this.state.books.map(books => books))
    })
  }

  render() {
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp;
