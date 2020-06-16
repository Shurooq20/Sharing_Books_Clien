import React, { Component } from 'react'
import BookDetails from '../BookDetails';

import { Book }from '../../requests'


class BookShowPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {} 
        }
    }

    componentDidMount(){
        const { categoryId, id } = this.props.match.params
        Book.one(categoryId, id ).then((book) => {
            // console.log(book)
            this.setState((state) => {
                return {
                    book
                }
            })
        })
    }

    render() {
        const { id, title, author, rating, img2_url, link, description} = this.state.book;
        return (
            <main className='page'>
                {
        
                    id ?
                    <BookDetails 
                        id={id}
                        title={title}
                        author={author}
                        rating={rating}
                        img2_url={img2_url}
                        link={link} 
                        description={description}                    
                    
                    /> :null
                
                }            
            </main>
        )


    }


}
export default BookShowPage

