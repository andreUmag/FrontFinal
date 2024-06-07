import React from "react";

const CardCitaOfertada = ({ fecha, hora, doctor, sede }) => {
  return (
    <a
      href="#"
      class="flex flex-col text-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <section>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          fecha de la cita {fecha}
        </h5>
        <p class="font-normal text-gray-700">Hora {hora}</p>
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
          doctor{doctor}
        </h5>
        <p class="font-normal text-gray-700">sede {sede}</p>
      </section>
      <button className="btn btn-outline mt-5 btn-info">Agendar</button>
    </a>
  );
};

export default CardCitaOfertada;
