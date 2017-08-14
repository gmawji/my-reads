import React from "react";
import { Link } from 'react-router-dom'
import Book from "./Book";

function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {props.shelfTitle}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book =>
            <li key={book.id + book.title}>
              <Book
                book={book}
                getBookshelf={props.getBookshelf}
                changeBookshelf={props.changeBookshelf}
              />
            </li>
          )}
        </ol>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Bookshelf;
