import React, { createContext, useContext } from "react";
import { ApiHospital } from "../service/ApiHospital";

const HospitalContext = createContext();

const useHospital = () => useContext(HospitalContext);

const HospitalProvider = ({ children }) => {
  const hospital = ApiHospital();

  return (
    <HospitalContext.Provider value={hospital}>
      {children}
    </HospitalContext.Provider>
  );
};

export { useHospital, HospitalProvider };
