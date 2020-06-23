import React, { Component } from 'react';
import ReviewDetails from '../ReviewDetails';
import ReviewForm from '../ReviewForm';


// import { Link } from 'react-router-dom';
import { Review } from '../../requests';

class ReviewIndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
        this.deleteReview = this.deleteReview.bind(this);
        this.createReview = this.createReview.bind(this);
        
    }

    componentDidMount() {
        Review.all(this.props.id).then((reviews) => {
            // console.log(reviews)
            this.setState({
               reviews: reviews
            })
        })
    }

    deleteReview(id) {
        Review.delete(id).then(() => {
            this.setState({
                reviews: this.state.reviews.filter(review => review.id !== id)
            })
        });
    }

    createReview(params) {

    
        console.log(this.props, ' this from review')
        Review.create(params, this.props.id).then((review) => {
          
            this.setState({ reviews: review });
        })
      }
    

    render() {
        // console.log(this.state)
        return(
            <main className='review'>
             
                <ReviewForm createReview={ this.createReview } />
                { this.state.reviews.map((review, index) => {
                    return(
                        <div key={index} to={`/books/${review.book_id}/reviews/${review.id}`}>

                            <ReviewDetails {...review} deletereview={this.deletereview}/>
                            <button onClick={() => this.deleteReview(review.id)}>Delete</button>

                        </div>
                    )
                })}

            </main>
        )
            
    }
}

export default ReviewIndexPage