import React from "react";
import Navbar from "../components/Navbar";
import "../pages/Home.css";
import CardMisCitas from "../components/CardMisCitas";
import NavbarAgregar from "../components/NavbarAgregar";
import NavbarFiltrar from "../components/NavbarFiltrar";
import CardNewCita from "../components/CardNewCita";

function Home() {
  return (
    <>
      <Navbar username="Jaime" />
      <section className="home-ouput flex flex-row gap-1">
        <div className="w-3/4 h-full rounded-lg p-4 border border-gray-100">
          <NavbarFiltrar />
          <div>
            <div className="h-full gap-4 grid grid-cols-2 content-start">
              <CardMisCitas
                tipoConsulta="Consulta General"
                fechaConsulta="Febrero-14-2023"
                horaConsulta="3:00 PM"
              />
              <CardMisCitas
                tipoConsulta="Consulta Odontologica"
                fechaConsulta="Febrero-14-2023"
                horaConsulta="3:00 PM"
              />
              <CardMisCitas
                tipoConsulta="Examen de Sangre"
                fechaConsulta="Febrero-14-2023"
                horaConsulta="3:00 PM"
              />
              <CardMisCitas
                tipoConsulta="Consulta Pre-Natal"
                fechaConsulta="Febrero-14-2023"
                horaConsulta="3:00 PM"
              />
            </div>
            <div className="join pt-3">
              <button className="join-item btn">«</button>
              <button className="join-item btn">Page 1</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full rounded-lg p-4 border border-gray-100 block">
          <NavbarAgregar />
          <div>
            <CardNewCita />
          </div>
          <div className="join join-vertical"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
