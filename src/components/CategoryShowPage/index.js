import React, { Component } from 'react'
import CategoryDetails from '../CategoryDetails';
import BookIndexPage from '../BookIndexPage';
import { NavLink } from 'react-router-dom';

import { Category }from '../../requests'


class CategoryShowPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
        this.deleteCategry = this.deleteCategory.bind(this);
    }

    componentDidMount(){
        Category.one(this.props.match.params.id).then((category) => {
            console.log(category)
            this.setState((state) => {
                return {
                    category
                }
            })
        })
    }

    deleteCategory(id) {
        Category.delete(id).then(() => {
          this.setState({ category: {} });
          this.props.history.push("/categories");
        });
      }

    renderCreateBook(id) {
        this.props.history.push(`/categories/${id}/books/new`);
    }


    render() {
        const { id, name, img_url} = this.state.category;
        return (
            <main className='category_show_page'>
                {
        
                    id ?
                    <>
                    <div className='category_show'>
                    <h2 className='category_show_header'>{ name }</h2>
      
                    <img src={img_url}/>
                   

{/*                    
                    <button
                    onClick={() => this.deleteCategory(this.state.category.id)}
                    >Delete </button>
                <p></p> */}
                    <button className='books_addBtn'onClick={() => this.renderCreateBook(this.state.category.id)}>Share your Book</button>
                    </div>

                        <BookIndexPage categoryId={ id }/>
                       
                        </>
                        :null
                    
                    
                                   
                
                }     
                       
            </main>
        )

    }


}
export default CategoryShowPage