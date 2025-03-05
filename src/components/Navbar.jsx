import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaStar, FaReceipt, FaBiking } from 'react-icons/fa';

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-orange-600">
            FoodExpress
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/track-order" className="relative">
              <FaBiking className="text-2xl text-gray-700" />
            </Link>
            <Link to="/rewards" className="relative">
              <FaStar className="text-2xl text-gray-700" />
            </Link>
            <Link to="/refunds" className="relative">
              <FaReceipt className="text-2xl text-gray-700" />
            </Link>
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login">
              <FaUser className="text-2xl text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}