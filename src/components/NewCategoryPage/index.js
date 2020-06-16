import React, { Component } from 'react';
import CategoryForm from '../CategoryForm';
import { Category } from '../../requests';

class NewCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.createCategory = this.createCategory.bind(this);
  }

  createCategory(params) {
    Category.create(params).then((category) => {
      this.props.history.push(`/categories/${category.id}`);
    })
  }

  render() {
    return(
      <main>
        <h1> Category New Page</h1>
        <CategoryForm createCategory={ this.createCategory }/>
      </main>
    )
  }
}

export default NewCategoryPage