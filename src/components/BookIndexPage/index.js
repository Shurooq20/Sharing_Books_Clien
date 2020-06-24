import React, { Component } from 'react';
import BookDetails from '../BookDetails';

import { Link } from 'react-router-dom';
import { Book } from '../../requests';

class BookIndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [] 
        }
        
    }

    componentDidMount() {
        Book.all(this.props.categoryId).then((books) => {
            this.setState({
               books: books
            })
        }) 
    }

    

    render() {
        console.log('books', this.state.books)
        return(
            <main className='page'>
             
                { this.state.books.map((book) => {
                    return(
                        <Link key={book.id} to={`/categories/${book.category.id}/books/${book.id}`}>
                        <BookDetails {...book} deletebook={this.deletebook}/>
                        
                        </Link>
                    )
                })}

            </main>
        )
            
    }
}

export default BookIndexPage