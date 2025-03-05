import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaMinus, FaPlus, FaLock } from 'react-icons/fa';

export default function Cart({ items = [] }) {
  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const updateQuantity = (itemId, delta) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, prev[itemId] + delta)
    }));
  };

  const total = items.reduce((sum, item) => 
    sum + (item.price * quantities[item.id]), 0
  );

  const tax = total * 0.1;
  const deliveryFee = total > 50 ? 0 : 5.99;
  const finalTotal = total + tax + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </motion.button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-4 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-orange-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <FaMinus className="text-gray-600" />
                  </button>
                  <span className="w-8 text-center">{quantities[item.id]}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <FaPlus className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, -quantities[item.id])}
                    className="p-2 hover:bg-red-100 rounded ml-2"
                  >
                    <FaTrash className="text-red-500" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
              >
                <FaLock className="text-sm" />
                <span>Proceed to Checkout</span>
              </motion.button>

              {finalTotal >= 50 && (
                <p className="text-green-600 text-sm text-center mt-4">
                  You've qualified for free delivery! 🎉
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}