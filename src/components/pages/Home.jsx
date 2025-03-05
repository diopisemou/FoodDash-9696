import React from 'react';
import RestaurantCard from '../RestaurantCard';

const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: 30,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500"
  },
  {
    id: 2,
    name: "Pizza Heaven",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: 35,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
  },
  {
    id: 3,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: 40,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500"
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Popular Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}