import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import DoctorContext from './context/DoctorContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DoctorContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </DoctorContext>
  </StrictMode>,
);