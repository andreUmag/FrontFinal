import React from "react";
import "../components/CardMisCitas.css";

const CardMisCitas = ({ cita }) => {
  return (
    <a
      href="#"
      class="max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-sky-50 content-center"
    >
      <section>
        <h5 class="mb-2 mt-4 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
          {cita.doctor}
        </h5>
        <div className="grid grid-rows-2">
          <div>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {cita.dateTime}
            </p>
            <p class="font-normal text-cyan-400 dark:text-gray-400">
              {cita.status}
            </p>
          </div>
          <div>
            <div>Pendiente</div>
          </div>
        </div>
      </section>
    </a>
  );
};

export default CardMisCitas;
