import React from 'react';
import ReviewCard from './ReviewCard';

export default function ReviewsList({ reviews }) {
  return (
    <div className="space-y-4">
      {reviews.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No reviews yet</p>
      ) : (
        reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))
      )}
    </div>
  );
}