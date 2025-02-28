import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorHomePage from './pages/DoctorHomePage';
import Start from './pages/Start';
import DoctorSignup from './pages/DoctorSignup';
import UserSignup from './pages/UserSignup';
import DoctorLogin from './pages/DoctorLogin';
import UserLogin from './pages/UserLogin';
import UploadReport from './pages/UploadReport';
import ProgressReport from './pages/ProgressReport';
import UserHomePage from './pages/UserHomePage';
import UserProtectWrapper from './pages/UserProtectWrapper';
import DoctorProtectWrapper from './pages/DoctorProtectWrapper';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/doctor" element={<DoctorProtectWrapper><DoctorHomePage /></DoctorProtectWrapper>} />
      <Route path="/doctor/signup" element={<DoctorSignup />} />
      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user" element={<UserProtectWrapper><UserHomePage /></UserProtectWrapper>} />
      <Route path="/upload-report" element={<UserProtectWrapper><UploadReport /></UserProtectWrapper>} />
      <Route path="/progress-report" element={<UserProtectWrapper><ProgressReport /></UserProtectWrapper>} />
    </Routes>
  );
};

export default App;