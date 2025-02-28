import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorHomePage from './pages/DoctorHomePage';
import Start from './pages/Start';
import DoctorSignup from './pages/DoctorSignup';
import UserSignup from './pages/UserSignup';
import DoctorLogin from './pages/DoctorLogin';
import UserLogin from './pages/UserLogin';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/doctor" element={<DoctorHomePage />} />
        <Route path="/doctor/signup" element={<DoctorSignup />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
  );
};

export default App;