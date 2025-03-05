import React from 'react';
import { motion } from 'framer-motion';

export default function Cart({ items = [] }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-orange-600">${item.price}</p>
              </div>
            </div>
          ))}
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl text-orange-600">${total.toFixed(2)}</span>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}