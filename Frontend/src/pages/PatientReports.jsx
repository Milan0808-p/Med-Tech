import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const PatientReports = () => {
  const { patientId } = useParams();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:4000/medical-reports/progress/${patientId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching progress reports:', error);
      }
    };

    fetchReports();
  }, [patientId]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Progress Reports</h2>
          <div className="space-y-6">
            {reports.length > 0 ? (
              reports.map((report) => (
                <div key={report._id} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-800"><strong>Report:</strong> {report.report}</p>
                  <p className="text-gray-600"><strong>Progress:</strong> {report.progress}</p>
                  <p className="text-gray-600"><strong>Uploaded At:</strong> {new Date(report.createdAt).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p className="text-center">No reports found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReports;