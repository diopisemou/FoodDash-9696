import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from '../components/MenuItem';

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

export default function Restaurant() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Restaurant Menu</h1>
      <div className="space-y-4">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}