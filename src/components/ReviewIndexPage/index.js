import React, { Component } from 'react';
import ReviewDetails from '../ReviewDetails';

// import { Link } from 'react-router-dom';
import { Review } from '../../requests';

class ReviewIndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        Review.all(this.props.id).then((reviews) => {
            this.setState({
               reviews: reviews
            })
        })
    }

    

    render() {
        return(
            <main className='review'>
             
                { this.state.reviews.map((review) => {
                    return(
                        <div key={review.id} to={`/books/${review.book_id}/reviews/${review.id}`}>
                            <ReviewDetails {...review} deletereview={this.deletereview}/>
                        </div>
                    )
                })}

            </main>
        )
            
    }
}

export default ReviewIndexPage