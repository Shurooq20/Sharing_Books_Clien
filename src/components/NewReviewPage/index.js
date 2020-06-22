// import React, { Component } from 'react';
// import ReviewForm from '../ReviewForm';
// import { Review } from '../../requests';

// class NewReviewPage extends Component {
//   constructor(props) {
//     super(props);
//     this.createReview = this.createReview.bind(this);
//   }

//   createReview(params) {

    
//     Review.create(params, this.props.match.params.bookId).then((review) => {
//       console.log(review)
//         this.props.history.push(`${review.id}`);
//     })
//   }
//   render() {
//     return(
//       <main>
//         <h1> Add your Review</h1>
//         <ReviewForm createReview={ this.createReview }/>
//       </main>
//     )
//   }
// }

// export default NewReviewPage