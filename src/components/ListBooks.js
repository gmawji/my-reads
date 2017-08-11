import React from "react";
import Bookshelf from './Bookshelf'


function ListBooks() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf />
        </div>
      </div>
    </div>
  );
}

export default ListBooks;
