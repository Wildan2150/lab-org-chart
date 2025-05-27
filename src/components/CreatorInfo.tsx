import React from 'react';

export const CreatorInfo: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg max-w-2xl mx-auto mt-12 fade-in transform hover:scale-105 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Disusun Oleh:</h2>
      <ol className="list-decimal list-inside text-left space-y-2 text-gray-700 dark:text-gray-300">
        <li className="transform hover:translate-x-2 transition-transform duration-200">
          Irfandita Khoirul Rosyidi (220331603406)
        </li>
        <li className="transform hover:translate-x-2 transition-transform duration-200">
          Muhammad Wildan Nashihin (220331603112)
        </li>
        <li className="transform hover:translate-x-2 transition-transform duration-200">
          Putri Zanuantika Dea Firnanda (220331600095)
        </li>
        <li className="transform hover:translate-x-2 transition-transform duration-200">
          Surya Ady Pratama (220331603782)
        </li>
      </ol>
    </div>
  );
};