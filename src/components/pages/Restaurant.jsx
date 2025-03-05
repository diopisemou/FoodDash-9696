import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from '../MenuItem';
import ReviewForm from '../ReviewForm';
import ReviewsList from '../ReviewsList';

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "100% beef patty with fresh lettuce, tomato, and special sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, and basil on our signature crust",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500"
  }
];

const initialReviews = [
  {
    id: 1,
    userName: "John Doe",
    rating: 4,
    comment: "Great food and quick delivery!",
    date: "2024-03-10T10:00:00Z"
  },
  {
    id: 2,
    userName: "Jane Smith",
    rating: 5,
    comment: "Best burgers in town!",
    date: "2024-03-09T15:30:00Z"
  }
];

export default function Restaurant() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [reviews, setReviews] = useState(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleSubmitReview = (reviewData) => {
    const newReview = {
      id: reviews.length + 1,
      userName: "Guest User",
      ...reviewData,
      date: new Date().toISOString()
    };
    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Restaurant Menu</h1>
      
      <div className="space-y-4 mb-8">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
          {!showReviewForm && (
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Write a Review
            </button>
          )}
        </div>

        {showReviewForm && (
          <div className="mb-8">
            <ReviewForm onSubmit={handleSubmitReview} />
          </div>
        )}

        <ReviewsList reviews={reviews} />
      </div>
    </div>
  );
}