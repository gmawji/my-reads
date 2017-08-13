import React from "react";
import Book from "./Book";

function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <li key={book.id + book.title}>
              <Book 
                book={book}
                getBookshelf={props.getBookshelf}
              />
            </li>
          ))}
        </ol>
      </div>
      <div className="open-search">
        {/* TODO: Change to Link to */}
        <a onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </a>
      </div>
    </div>
  )
}

export default Bookshelf