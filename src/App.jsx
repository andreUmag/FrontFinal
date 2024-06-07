import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import NuevaCita from "./pages/NuevaCita";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerCita from "./pages/VerCita";
import HomeDoctor from "./pages/HomeDoctor.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HospitalProvider } from "./context/HospitalContext.jsx";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <HospitalProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={session ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={<Login session={session} setSession={setSession} />}
          />
        </Routes>
        <Routes>
          <Route path="/registro" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/nueva-cita" element={<NuevaCita />} />
        </Routes>

        {/* <VerCita /> */}
        {/* <Home/> */}
        {/* <NuevaCita/> */}
      </BrowserRouter>
    </HospitalProvider>
  );
}

export default App;
