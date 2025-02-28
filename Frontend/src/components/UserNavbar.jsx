import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = ({ user }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        {user ? (
          <>
            <h2 className="text-xl font-bold">{user.fullname.firstname} {user.fullname.lastname}</h2>
            <p>{user.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <nav className="flex-grow p-4">
        <ul>
          <li className="mb-2">
            <Link to="/user" className="text-white">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/upload-report" className="text-white">Upload Report</Link>
          </li>
          <li className="mb-2">
            <Link to="/progress-report" className="text-white">Progress Report</Link>
          </li>
          <li className="mb-2">
            <Link to="/user/profile" className="text-white">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;