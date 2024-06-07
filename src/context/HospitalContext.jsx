import React, { createContext, useContext, useState } from "react";
import { ApiHospital } from "../service/ApiHospital";

const HospitalContext = createContext();

const useHospital = () => useContext(HospitalContext);

const HospitalProvider = ({ children }) => {
  const hospital = ApiHospital();
  const [especialidad, setEspecialidad] = useState(hospital.especialidad);

  return (
    <HospitalContext.Provider
      value={{ ...hospital, especialidad, setEspecialidad }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export { useHospital, HospitalProvider };
