import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gradient-to-r from-teal-500 to-blue-600 shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold text-white">Med-Tech</h1>
          <div className="space-x-4">
            <Link to="/doctor/login" className="text-white hover:text-gray-200 transition duration-300">Doctor Login</Link>
            <Link to="/user/login" className="text-white hover:text-gray-200 transition duration-300">User Login</Link>
            {/* <Link to="/doctor/signup" className="text-white hover:text-gray-200 transition duration-300">Doctor Signup</Link>
            <Link to="/user/signup" className="text-white hover:text-gray-200 transition duration-300">User Signup</Link> */}
          </div>
        </div>
      </nav>
      <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/medicine-healthcare-people-concept-female-600nw-2188588635.jpg')" }}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 bg-opacity-50">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Med-Tech</h1>
          <p className="text-2xl text-white mb-6">Your one-stop solution for medical consultations and services.</p>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Started</h2>
            <div className="space-y-4">
              <Link to="/doctor/signup" className="block w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Doctor Signup
              </Link>
              <Link to="/user/signup" className="block w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
                User Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Med-Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Start;