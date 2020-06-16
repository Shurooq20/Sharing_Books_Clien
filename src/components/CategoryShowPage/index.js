import React, { Component } from 'react'
import CategoryDetails from '../CategoryDetails';

import { Category }from '../../requests'


class CategoryShowPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
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

    render() {
        const { id, name, img_url} = this.state.category;
        return (
            <main className='page'>
                {
        
                    id ?
                    <CategoryDetails 
                        id={id}
                        name={name}
                        img_url={img_url}                       
                    
                    /> :null
                
                }            
            </main>
        )


    }


}
export default CategoryShowPage