import React, { Component } from "react";
// import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from './components/ListBooks'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        <ListBooks/>
      </div>
    )
  }
}

export default BooksApp;
