import React, { Component } from 'react'
import BookDetails from '../BookDetails';

import { Book }from '../../requests'


class BookShowPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {} 
        }
        this.deleteBook = this.deleteBook.bind(this);
    }

    componentDidMount(){
        const { categoryId, id } = this.props.match.params
        Book.one(categoryId, id ).then((book) => {
            // console.log(book)
            this.setState((state) => {
                return {
                    book,
                    categoryId
                }
            })
        })
    }

    deleteBook(categoryId,id) {
        Book.delete(categoryId, id).then(() => {
          this.setState({ book: {} });
          this.props.history.push("/books");
        });
      }

    render() {
        const { id, title, author, rating, img2_url, link, description} = this.state.book;
        console.log(this.state.book.id, this.state.categoryId)
        return (
            <main className='page'>
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
                        /><button
            
                        onClick={() => this.deleteBook(this.state.categoryId, this.state.book.id)}
                            >Delete </button>
                            </>                 
                    
                         :null
                
                }            
            </main>
        )


    }


}
export default BookShowPage

