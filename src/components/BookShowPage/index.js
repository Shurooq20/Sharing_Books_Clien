import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import BookDetails from '../BookDetails';
import ReviewIndexPage from '../ReviewIndexPage'
// import ReviewForm from '../ReviewForm'
import { Review } from '../../requests';


import { Book } from '../../requests'


class BookShowPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
        this.deleteBook = this.deleteBook.bind(this);
        // this.createReview = this.createReview.bind(this);
    
    }

    componentDidMount() {
        const { id } = this.props.match.params
        Book.one(id).then((book) => {
            // console.log(book)
            this.setState((state) => {
                return {
                    book,
                }
            })
        })
    }

    deleteBook(id) {
        Book.delete(id).then(() => {
            this.setState({ book: {} });
            this.props.history.push("/books");
        });
    }

    editBook(categoryId, id) {
        //   return <Redirect to={`/categories/${categoryId}/books/${id}/edit`}/>
        // console.log(categoryId, id)
        this.props.history.push({ pathname: `/categories/${categoryId}/books/${id}/edit`, state: this.state.book });
    }

    
  createReview(params) {

    
    Review.create(params, this.props.match.params.id).then((review) => {
      console.log(review)
        // this.props.history.push(`${review.book_id}`);
        console.log(this.state.book)
        // this.setState({ book: review.book});
    })
  }

    render() {
        const { id, title, author, rating, img2_url, link, description } = this.state.book;
        console.log(this.state.book.id, this.state.categoryId)
        return (
            <div className="show">
                {

                    id ?

                        <>
                            <BookDetails
                                id={id}
                                title={title}
                                author={author}
                                rating={rating}
                                img2_url={img2_url}
                                link={link}
                                description={description}
                            />
                            <button onClick={() => this.deleteBook(this.state.book.id)}>Delete</button>
                            <button onClick={() => this.editBook(this.state.categoryId, this.state.book.id)}>Edit </button>

                            {/* <ReviewForm createReview={ this.createReview } /> */}
                            <ReviewIndexPage id={id} />
                            
                        </>
                        : null

                }
            </div>
        )


    }


}
export default BookShowPage

