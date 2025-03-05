import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, review });
    setRating(0);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <motion.button
              type="button"
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl mr-1"
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              <FaStar 
                className={`${
                  ratingValue <= (hover || rating) 
                    ? 'text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            </motion.button>
          );
        })}
      </div>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Share your experience..."
        className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        rows="4"
        required
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
        disabled={!rating || !review}
      >
        Submit Review
      </motion.button>
    </form>
  );
}