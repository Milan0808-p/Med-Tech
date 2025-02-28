import React, { useContext } from 'react';
import { DoctorDataContext } from '../context/DoctorContext';
import Navbar from '../components/Navbar';

const DoctorHomePage = () => {
  const { doctor } = useContext(DoctorDataContext);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow p-8 bg-white shadow-lg rounded-lg m-8">
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
            {doctor?.fullname.firstname.charAt(0)}{doctor?.fullname.lastname.charAt(0)}
          </div>
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-gray-800">{doctor?.fullname.firstname} {doctor?.fullname.lastname}</h1>
            <p className="text-gray-600">{doctor?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Professional Details</h2>
            <p className="text-gray-700"><strong>Specialty:</strong> {doctor?.specialty}</p>
            <p className="text-gray-700"><strong>License Number:</strong> {doctor?.licenseNumber}</p>
            <p className="text-gray-700"><strong>Phone Number:</strong> {doctor?.phoneNumber}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Professional Background</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHomePage;