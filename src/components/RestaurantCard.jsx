import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RestaurantCard({ restaurant }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/restaurant/${restaurant.id}`}>
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
          <p className="text-gray-600">{restaurant.cuisine}</p>
          <div className="flex items-center mt-2">
            <span className="text-orange-600">⭐ {restaurant.rating}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-600">{restaurant.deliveryTime} mins</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}