import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaUtensils, FaBiking, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { id: 1, title: 'Order Confirmed', icon: FaShoppingBag, time: '12:30 PM' },
  { id: 2, title: 'Preparing', icon: FaUtensils, time: '12:45 PM' },
  { id: 3, title: 'On the Way', icon: FaBiking, time: '1:00 PM' },
  { id: 4, title: 'Delivered', icon: FaCheckCircle, time: '1:15 PM' }
];

export default function OrderTracking() {
  const currentStep = 2; // This would come from your state management

  return (
    <div className="max-w-2xl mx-auto px-4 pt-20 pb-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>
        
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div 
            className="absolute left-6 top-0 w-0.5 bg-orange-500 transition-all duration-500"
            style={{ height: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-center"
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 
                    ${index < currentStep ? 'bg-orange-500 text-white' : 
                      index === currentStep ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                  whileHover={{ scale: 1.1 }}
                >
                  <step.icon className="text-xl" />
                </motion.div>
                
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <span className="text-sm text-gray-500">{step.time}</span>
                  </div>
                  
                  {index === currentStep && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-orange-600 mt-1"
                    >
                      In Progress...
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estimated Time */}
        <div className="mt-8 pt-6 border-t">
          <div className="text-center">
            <p className="text-gray-600">Estimated Delivery Time</p>
            <p className="text-2xl font-bold text-orange-600">1:15 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}