import { createContext, useState } from 'react';

export const DoctorDataContext = createContext();

const DoctorContext = ({ children }) => {
  const [doctor, setDoctor] = useState(null);

  return (
    <DoctorDataContext.Provider value={{ doctor, setDoctor }}>
      {children}
    </DoctorDataContext.Provider>
  );
};

export default DoctorContext;