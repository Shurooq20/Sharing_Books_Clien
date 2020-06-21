import React, { Component } from 'react';
import BookForm from '../BookForm';
import { Book } from '../../requests';

class NewBookPage extends Component {
  constructor(props) {
    super(props);
    this.createBook = this.createBook.bind(this);
  }

  createBook(params) {

    
    Book.create(params, this.props.match.params.categoryId).then((book) => {
      console.log(book)
        this.props.history.push(`${book.id}`);
    })
  }
//   http://localhost:8080/categories/252/books/categories/252/books/234
  render() {
    return(
      <main>
        <h1> Post your Book</h1>
        <BookForm createBook={ this.createBook }/>
      </main>
    )
  }
}

export default NewBookPage