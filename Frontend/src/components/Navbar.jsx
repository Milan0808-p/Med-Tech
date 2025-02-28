import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ doctor }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        {doctor ? (
          <>
            <h2 className="text-xl font-bold">{doctor.fullname.firstname} {doctor.fullname.lastname}</h2>
            <p>{doctor.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <nav className="flex-grow p-4">
        <ul>
          <li className="mb-2">
            <Link to="/doctor" className="text-white">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/doctor/messages" className="text-white">Messages</Link>
          </li>
          <li className="mb-2">
            <Link to="/doctor/appointments" className="text-white">Appointments</Link>
          </li>
          <li className="mb-2">
            <Link to="/doctor/profile" className="text-white">Profile</Link>
          </li>
          <li className="mb-2">
            <Link to="/doctor/patients" className="text-white">Patients</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;