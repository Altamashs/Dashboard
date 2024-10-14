'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Calendar.css'; 

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const orders = [
    {
      date: '2024-10-12',
      orders: [
        { number: 'SO000470', status: 'Pending', shipping: 'Express', items: 3 },
      ]
    },
    {
        date: '2024-10-13',
        orders: [
          { number: 'SO000471', status: 'Shipped', shipping: 'Standard', items: 2 },
        ]
      },
      
    {
      date: '2024-10-14',
      orders: [
        { number: 'SO000473', status: 'Pending', shipping: 'Standard', items: 1 },
      ]
    },
    {
      date: '2024-10-15',
      orders: [
        { number: 'SO000475', status: 'Processing', shipping: 'Overnight', items: 2 }
      ]
    },
    {
        date: '2024-10-16',
        orders: [
          { number: 'SO000472', status: 'Processing', shipping: 'Overnight', items: 5 }
        ]
      },
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getOrdersForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const orderInfo = orders.find((o) => o.date === dateString);
    return orderInfo ? orderInfo.orders : [];
  };

  return (
    <div className="calendar-container p-5 w-[35%] bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="text-lg text-textColor dark:text-white font-semibold text-center pb-5">
        <h2>Orders to Ship</h2>
        <p>{selectedDate.toDateString()}</p>
      </div>
      <div className="calendar-grid">
        {Array.from({ length: 30 }).map((_, index) => {
          const date = new Date();
          date.setDate(index + 1);
          return (
            <motion.div
              key={index}
              className={`calendar-cell ${date.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleDateClick(date)}
            >
              <span>{date.getDate()}</span>
            </motion.div>
          );
        })}
      </div>
      <div className="orders-list">
        <h3 className='text-lg text-textColor font-semibold'>Orders for {selectedDate.toDateString()}</h3>
        {getOrdersForDate(selectedDate).length > 0 ? (
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {getOrdersForDate(selectedDate).map((order, idx) => (
              <motion.li key={idx} whileHover={{ scale: 1.05 }} className="order-item">
                <div className='!text-[#FFF]'><strong>Order Number:</strong> {order.number}</div>
                <div className='!text-[#FFF]'><strong>Status:</strong> {order.status}</div>
                <div className='!text-[#FFF]'><strong>Shipping:</strong> {order.shipping}</div>
                <div className='!text-[#FFF]'><strong>Items:</strong> {order.items}</div>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <p className='text-lg text-textColor font-semibold'>No orders for this date.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
