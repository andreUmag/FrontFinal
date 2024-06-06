import React from "react";
import Navbar from "../components/Navbar";
import "../pages/Home.css";
import CardMisCitas from "../components/CardMisCitas";
import NavbarAgregar from "../components/NavbarAgregar";
import NavbarFiltrar from "../components/NavbarFiltrar";
import CardNewCita from "../components/CardNewCita";

function HomeDoctor() {
  return (
    <>
      <Navbar username="Jaime" />
      <section className="home-ouput flex flex-row gap-1">
        <NavbarFiltrar/>
        <div className="h-full gap-4 grid grid-cols-3 content-start">
          aqui se van caregando las tarjetas CardMisCitas
        </div>
      </section>
    </>
  );
}

export default HomeDoctor;
