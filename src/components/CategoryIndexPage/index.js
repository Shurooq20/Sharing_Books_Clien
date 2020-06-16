import React, { Component } from 'react';
import CategoryDetails from '../CategoryDetails';

import { Link } from 'react-router-dom';
import { Category } from '../../requests';

class CategoryIndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.deleteCategory = this.deleteCategory.bind(this);
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

    render() {
        return(
            <main className='page'>
             
                { this.state.categories.map((category) => {
                    return(
                        <Link key={category.id} to={`/categories/${category.id}`}>
                        <CategoryDetails {...category} deleteCategory={this.deleteCategory}/>
                        
                        </Link>
                    )
                })}

            </main>
        )
            
    }
}

export default CategoryIndexPage