// Code MovieReviews Here
import React from 'react';

const Review = ({byline, headline, summary_short}) => {
  return (
    <div className='review'>
      <li>
      <h3>{headline}</h3>
      <h4>By: {byline}</h4>
      <p>{summary_short}</p>
      </li>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list'>
      <ul>
      {reviews.map(review =>
        <div className="review">
          <li>
          <h3>{review.headline}</h3>
          <h4>{review.byline}</h4>
          <p>{review.summary_short}</p>
          </li>
        </div>
      )
    }
      </ul>
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: []
}
