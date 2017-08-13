import React from "react";
import Bookshelf from "./Bookshelf";

function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            books={props.currentlyReading}
            shelfTitle="Currently Reading"
            getBookshelf={props.getBookshelf}
            changeBookshelf={props.changeBookshelf}
          />
          <Bookshelf
            books={props.wantToRead}
            shelfTitle="Want To Read"
            getBookshelf={props.getBookshelf}
            changeBookshelf={props.changeBookshelf}
          />
          <Bookshelf
            books={props.read}
            shelfTitle="Read"
            getBookshelf={props.getBookshelf}
            changeBookshelf={props.changeBookshelf}
          />
        </div>
      </div>
    </div>
  );
}

export default ListBooks;
