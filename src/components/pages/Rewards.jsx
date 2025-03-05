import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGift, FaMedal } from 'react-icons/fa';

export default function Rewards() {
  const points = 450; // This would come from user's state/backend
  const tier = points >= 500 ? "Gold" : points >= 250 ? "Silver" : "Bronze";
  
  const rewards = [
    { id: 1, name: "Free Delivery", points: 100, icon: FaGift },
    { id: 2, name: "15% Off Next Order", points: 200, icon: FaStar },
    { id: 3, name: "Buy 1 Get 1 Free", points: 300, icon: FaGift },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Rewards</h1>
            <p className="text-lg">Current Points: {points}</p>
          </div>
          <div className="text-center">
            <FaMedal className="text-4xl mb-2" />
            <p className="font-semibold">{tier} Member</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <reward.icon className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{reward.name}</h3>
            <p className="text-gray-600 mb-4">{reward.points} points required</p>
            <button
              className={`w-full py-2 rounded-lg ${
                points >= reward.points
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              } transition-colors`}
              disabled={points < reward.points}
            >
              {points >= reward.points ? "Redeem" : "Not Enough Points"}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Earn Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Place Orders</h3>
            <p className="text-gray-600">Earn 10 points for every $1 spent</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Write Reviews</h3>
            <p className="text-gray-600">Earn 50 points per review</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Refer Friends</h3>
            <p className="text-gray-600">Earn 100 points per referral</p>
          </div>
        </div>
      </div>
    </div>
  );
}