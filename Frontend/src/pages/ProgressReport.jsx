import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4000/medical-reports/progress', {
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
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Progress Reports</h2>
        {reports.length > 0 ? (
          <ul>
            {reports.map((report) => (
              <li key={report._id} className="border-b border-gray-200 py-4">
                <p><strong>Report:</strong> {report.report}</p>
                <p><strong>Progress:</strong> {report.progress}</p>
                <p><strong>Uploaded At:</strong> {new Date(report.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reports found.</p>
        )}
      </div>
    </div>
  );
};

export default ProgressReport;