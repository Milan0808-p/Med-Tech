import React, { useContext } from 'react';
import { DoctorDataContext } from '../context/DoctorContext';
import Navbar from '../components/Navbar';

const DoctorHomePage = () => {
  const { doctor } = useContext(DoctorDataContext);

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
        <p>Name: {doctor?.fullname.firstname} {doctor?.fullname.lastname}</p>
        <p>Email: {doctor?.email}</p>
        <p>Specialty: {doctor?.specialty}</p>
        <p>License Number: {doctor?.licenseNumber}</p>
        <p>Phone Number: {doctor?.phoneNumber}</p>
      </div>
    </div>
  );
};

export default DoctorHomePage;