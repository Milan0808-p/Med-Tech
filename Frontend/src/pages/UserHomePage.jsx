import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserNavbar from '../components/UserNavbar';

const UserHomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:4000/users/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserNavbar user={user} />
      <div className="flex-grow p-8 bg-white shadow-lg rounded-lg m-8">
        {user ? (
          <>
            <div className="flex items-center mb-8">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                {user.fullname.firstname.charAt(0)}{user.fullname.lastname.charAt(0)}
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-gray-800">{user.fullname.firstname} {user.fullname.lastname}</h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Details</h2>
                <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UserHomePage;