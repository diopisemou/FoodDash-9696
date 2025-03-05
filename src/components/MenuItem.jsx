import React from 'react';
import { motion } from 'framer-motion';

export default function MenuItem({ item, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <p className="text-orange-600 font-semibold mt-2">${item.price}</p>
      </div>
      {item.image && (
        <img 
          src={item.image} 
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg ml-4"
        />
      )}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => onAddToCart(item)}
        className="ml-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
      >
        Add to Cart
      </motion.button>
    </div>
  );
}