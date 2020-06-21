import React, { Component } from 'react';
import ReviewForm from '../ReviewForm';
import { Review } from '../../requests';

class NewReviewPage extends Component {
  constructor(props) {
    super(props);
    this.createReview = this.createReview.bind(this);
  }

  createReview(params) {

    
    Review.create(params, this.props.match.params.Id).then((review) => {
    //   console.log(review)
        this.props.history.push(`${review.id}`);
    })
  }
//   http://localhost:8080/categories/252/books/categories/252/books/234
  render() {
    return(
      <main>
        <h1> Add your Review</h1>
        <ReviewForm createBook={ this.createReview }/>
      </main>
    )
  }
}

export default NewReviewPage