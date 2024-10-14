"use client"; // This tells Next.js to treat this as a Client Component

import { useState, useEffect } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <header className="p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
        <button onClick={toggleSidebar} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className='text-center'>
          <h2 className="text-[30px] text-textColor dark:text-white font-semibold">Shipment Dashboard</h2>
        </div>

        <button 
  onClick={toggleDarkMode} 
  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
>
  {darkMode ? (
    <svg
      className="w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform duration-500 ease-in-out transform rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3.23a9 9 0 100 17.54 9 9 0 000-17.54z"
      />
    </svg>
  ) : (
    <svg
      className="w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform duration-500 ease-in-out transform rotate-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.24-7.76l-1.42 1.42M7.76 7.76L6.34 6.34m11.32 11.32l-1.42 1.42M7.76 16.24l-1.42-1.42"
      />
    </svg>
  )}
</button>

      </header>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-md transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">Menu</h2>
            <button onClick={closeSidebar} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="space-y-8">
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Menu
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Operations
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Sub Contact
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              MFG Metrics
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Daily Flash
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Decision Support
            </a>
            <a href="/" className="block bg-[#1a222c] py-3 px-2 !text-[#FFF] dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Shipping
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Receiving
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Deductions
            </a>
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              EDM Archive
            </a>
          </nav>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
