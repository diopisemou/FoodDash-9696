import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function ReviewCard({ review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-4 mb-4"
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <FaUser className="text-gray-500" />
        </div>
        <div className="ml-3">
          <h4 className="font-semibold">{review.userName}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-4 h-4 ${
                  index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-500">
          {format(new Date(review.date), 'MMM d, yyyy')}
        </span>
      </div>
      <p className="text-gray-600">{review.comment}</p>
    </motion.div>
  );
}