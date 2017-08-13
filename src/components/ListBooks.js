import React from "react";
import Bookshelf from './Bookshelf'


function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf 
            books={props.books}
          />
        </div>
      </div>
    </div>
  );
}

export default ListBooks;
