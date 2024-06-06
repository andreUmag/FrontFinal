import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import NuevaCita from "./pages/NuevaCita";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerCita from "./pages/VerCita";
import HomeDoctor from "./pages/HomeDoctor.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeDoctor />
      {/* <VerCita /> */}
      {/* <Home/> */}
      {/* <NuevaCita/> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </>
  );
}

export default App;
