import React, { Component } from 'react'
import EditBookForm from '../EditBookForm'
import { Book } from '../../requests'

class EditBookPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: null,
    }
    this.editBook = this.editBook.bind(this);
  }
  // console.log(params)
  editBook(params) {
    Book.update(
      // this.props.match.params.categoryId,
      this.props.match.params.id,
      params
    ).then((book) => {
      console.log(book)
      this.props.history.push(`${book.id}`)
    })
  }

  componentWillMount() {
    Book.one(
      // this.props.match.params.categoryId,
      this.props.match.params.id
    ).then((book) => {
      this.setState({
        book,
      })
    })
  }

  render() {
    return (
      <main>
        <h1> Edit your Book Page </h1>
        <EditBookForm editBook={this.editBook} book={this.state.book} />
      </main>
    )
  }
}

export default EditBookPage
