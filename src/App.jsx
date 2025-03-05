import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Restaurant from './components/pages/Restaurant';
import Cart from './components/pages/Cart';
import Rewards from './components/pages/Rewards';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Refunds from './components/pages/Refunds';
import OrderTracking from './components/pages/OrderTracking';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/cart" element={<Cart items={cartItems} />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/track-order" element={<OrderTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;