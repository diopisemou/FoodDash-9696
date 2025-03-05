import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main St, City, Country'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // TODO: Implement profile update logic
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pt-20 pb-10">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </motion.button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <textarea
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="3"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Save Changes
              </motion.button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center">
              <FaUser className="text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{profile.name}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{profile.address}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}