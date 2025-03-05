import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReceipt, FaHistory, FaSpinner } from 'react-icons/fa';

export default function Refunds() {
  const [activeTab, setActiveTab] = useState('request');
  const [reason, setReason] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const refundHistory = [
    {
      id: 1,
      orderNumber: 'ORD123456',
      amount: 24.99,
      status: 'approved',
      date: '2024-03-15',
      reason: 'Missing items in delivery'
    },
    {
      id: 2,
      orderNumber: 'ORD123457',
      status: 'pending',
      amount: 32.50,
      date: '2024-03-14',
      reason: 'Food quality issue'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setReason('');
    setOrderNumber('');
    setActiveTab('history');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('request')}
            className={`flex-1 py-4 text-center font-medium ${
              activeTab === 'request'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Request Refund
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-4 text-center font-medium ${
              activeTab === 'history'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Refund History
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'request' ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  placeholder="Enter your order number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Refund
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="missing-items">Missing Items</option>
                  <option value="quality">Food Quality Issue</option>
                  <option value="late-delivery">Late Delivery</option>
                  <option value="wrong-order">Wrong Order</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  'Submit Refund Request'
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {refundHistory.map((refund) => (
                <motion.div
                  key={refund.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <FaReceipt className="text-gray-400 mr-2" />
                      <span className="font-medium">{refund.orderNumber}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        refund.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {refund.status.charAt(0).toUpperCase() + refund.status.slice(1)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div className="flex justify-between mb-1">
                      <span>Amount:</span>
                      <span>${refund.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Date:</span>
                      <span>{refund.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reason:</span>
                      <span>{refund.reason}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}