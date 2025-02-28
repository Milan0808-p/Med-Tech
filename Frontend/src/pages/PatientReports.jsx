import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const PatientReports = () => {
  const { patientId } = useParams();
  const [reports, setReports] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleFeedbackSubmit = async (reportId, feedback, form) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:4000/medical-reports/feedback/${reportId}`, { feedback }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Clear the feedback field
      form.reset();
      // Show success message
      setSuccessMessage('Feedback submitted successfully!');
      // Refresh the reports after submitting feedback
      fetchReports();
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow p-8 ml-64">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Progress Reports</h2>
          {successMessage && (
            <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
              {successMessage}
            </div>
          )}
          <div className="space-y-6">
            {reports.length > 0 ? (
              reports.map((report) => (
                <div key={report._id} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-800"><strong>Report:</strong> {report.report}</p>
                  <p className="text-gray-600"><strong>Progress:</strong> {report.progress}</p>
                  <p className="text-gray-600"><strong>Feedback:</strong> {report.feedback}</p>
                  <p className="text-gray-600"><strong>Uploaded At:</strong> {new Date(report.createdAt).toLocaleString()}</p>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const feedback = e.target.elements.feedback.value;
                    handleFeedbackSubmit(report._id, feedback, e.target);
                  }}>
                    <textarea name="feedback" placeholder="Enter feedback" className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm"></textarea>
                    <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">Submit Feedback</button>
                  </form>
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