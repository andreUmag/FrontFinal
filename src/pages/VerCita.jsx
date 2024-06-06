import React from "react";
import Navbar from "../components/Navbar";
import NavbarFiltrar from "../components/NavbarFiltrar";

function VerCita() {
  return (
    <>
      <Navbar />
      <section className="home-ouput flex flex-col gap-1">
        <div className="w-auto h-screen p-5 bg-white border border-gray-200 rounded-2xl shadow">
          <header className="flex justify-between mt-5">
            <h1 className="text-2xl text-left ml-10 font-bold text-blue-400">Mi Cita</h1>
            <button className="btn mr-5 bg-blue-300 hover:bg-blue-400">Volver</button>
          </header>
          <div className="flex p-5 space-x-10 justify-start">
            <div className="text-left p-5">
              <h5 className="text-2xl text-left font-bold tracking-tight">
                Febrero - 15 - 2020
              </h5>
              <h3 className="text-xl mt-2 font-mono">14:00 PM</h3>
              <h3 className="text-xl mt-2">Sede los cabineros</h3>
            </div>
            <div className="text-left p-5">
              <h5 className="text-2xl text-left font-bold tracking-tight">
                Consulta General
              </h5>
              <h3 className="text-xl mt-2 ">Doctor Orlando Mejia</h3>
              <h2 className="text-xl text-left font-bold tracking-tight mt-2">
                Paciente
              </h2>
              <h3 className="text-xl mt-2 ">Juan jacinto perez</h3>
              <h3 className="text-xl mt-2">1002003004</h3>
            </div>
          </div>
          <div className="justify-end flex mt-10 mr-5 gap-5">
          <a href="" className="translate-y-3 hover:text-blue-600">Cancelar cita</a>
          <button className="btn hover:bg-blue-400 ">PENDIENTE</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default VerCita;
