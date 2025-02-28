import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = ({ user }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`h-screen bg-gray-800 text-white flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 flex justify-between items-center">
        {user && !isCollapsed && (
          <>
            <div>
              <h2 className="text-xl font-bold">{user.fullname.firstname} {user.fullname.lastname}</h2>
              <p>{user.email}</p>
            </div>
          </>
        )}
        <button onClick={toggleNavbar} className="text-white">
          {isCollapsed ? '>' : '<'}
        </button>
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
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;