import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Med-Tech</h1>
        <p className="text-gray-600 mb-6">Your one-stop solution for medical consultations and services.</p>
        <div className="space-y-4">
          <Link to="/doctor/signup" className="block w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Doctor Signup
          </Link>
          <Link to="/user/signup" className="block w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
            User Signup
          </Link>
          <Link to="/doctor/login" className="block w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-300">
            Doctor Login
          </Link>
          <Link to="/user/login" className="block w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
            User Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;