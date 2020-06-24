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
        
        this.props.history.push({ pathname: `/categories/${categoryId}/books/${id}/edit`, state: this.state.book });
    }

    


    render() {
        const { id, title, author, rating, img2_url, link, description, created_at, owner } = this.state.book;
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
                                created_at={created_at}
                                owner={owner}
                            />
                            <button onClick={() => this.deleteBook(this.state.book.id)}>Delete</button>
                            <button onClick={() => this.editBook(this.state.categoryId, this.state.book.id)}>Edit </button>

                            <ReviewIndexPage id={id} />
                            
                        </>
                        : null

                }
            </div>
        )


    }


}
export default BookShowPage

