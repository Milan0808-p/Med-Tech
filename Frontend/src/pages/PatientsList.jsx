import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const PatientsList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4000/doctors/patients', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Patients List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.length > 0 ? (
              patients.map((patient) => (
                <div key={patient._id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {patient.fullname.firstname} {patient.fullname.lastname}
                  </h3>
                  <p className="text-gray-600"><strong>Email:</strong> {patient.email}</p>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">No patients found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsList;