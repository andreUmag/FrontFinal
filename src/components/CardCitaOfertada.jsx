import React from "react";
import { format } from "date-fns";

const CardCitaOfertada = ({
  cita,
  setCitaSeleccionada,
  user,
  setCitaEditada,
}) => {
  const handleCitaClick = () => {
    const citaEditada = { ...cita, available: false };
    setCitaEditada(citaEditada);
    const nuevaCitaSeleccionada = {
      dateTime: cita.dateTime,
      doctor: cita.doctor,
      status: { id: 1 },
      patient: user,
    };
    setCitaSeleccionada(nuevaCitaSeleccionada);
  };

  return (
    <a className="flex flex-col text-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <section>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Fecha de la cita:{" "}
          {format(new Date(cita.dateTime), "dd/MM/yyyy HH:mm")}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Doctor: {cita.doctor.name + " " + cita.doctor.lastName}
        </h5>
      </section>
      <button
        className="btn btn-outline mt-5 btn-info"
        onClick={() => handleCitaClick()}
      >
        Agendar
      </button>
    </a>
  );
};

export default CardCitaOfertada;
