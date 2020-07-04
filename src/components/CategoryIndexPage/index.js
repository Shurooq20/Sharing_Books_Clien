import React, { Component } from 'react';
import CategoryDetails from '../CategoryDetails';

import { Link, Redirect } from 'react-router-dom';
import { Category, Book } from '../../requests';
import Logo2 from '../../Iamges/Logo 2.png';





class CategoryIndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isRedirect: false, 
            book: {}
        }
        this.deleteCategory = this.deleteCategory.bind(this);
        this.searchBook = this.searchBook.bind(this);
    }

    componentDidMount() {
        Category.all().then((categories) => {
            this.setState({
                categories: categories
            })
        })
    }

    deleteCategory(id){
        console.log(id);
        this.setState((state) => {
            return {
                categories: state.categories.filter((category) => {
                    return category.id !== id;
                })
            }
        })


    }
        
        searchBook(){
            const title = document.querySelector('#search').value
                console.log(title)
            Book.searchTitle(title).then((result) => { 
                if (result){
                    this.setState({ isRedirect: true, book: result})
                }else {
                    console.log('book dosnt exist')
                }
                
            })
            
        }
            render(){
                    if (this.state.isRedirect){
                    if (this.state.book) {
                        return (<Redirect to={`/categories/${this.state.book.category.id}/books/${this.state.book.id}`}/>)
                    }
                } else {

                    return(
                        <main className='categories_page'>

                        <img className='Logo2'   src={Logo2} className='Logo2'></img>{' '}

                        <input type='text' id='search' placeholder='enter book title'></input>
                        <button onClick={ this.searchBook }>Search</button>
                        
                            { this.state.categories.map((category) => {
                                return(
                                    <div key={category.id} className='category_card'>

                                        
                                    <Link  to={`/categories/${category.id}`}>
                                    <CategoryDetails {...category} deleteCategory={this.deleteCategory}/>
                                    
                                    </Link>
                                    </div>
                                )
                            })}

                        </main>
                    )
                }   
            
    }
}

export default CategoryIndexPage