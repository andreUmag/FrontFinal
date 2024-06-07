import React from "react";
import "../components/CardMisCitas.css";
import { format } from "date-fns";

const CardMisCitas = ({ cita }) => {
  return (
    <a
      href="#"
      class="max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-sky-50 content-center"
    >
      <section>
        <h5 class="mb-2 mt-4 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
          Doctor: {cita.doctor.name + " " + cita.doctor.lastName}
        </h5>
        <div className="grid grid-rows-2">
          <div>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {format(new Date(cita.dateTime), "dd/MM/yyyy HH:mm")}
            </p>
            <p class="font-normal text-black-400 dark:text-gray-400">
              {cita.doctor.specialization.name}
            </p>
            <p class="font-normal text-cyan-400 dark:text-gray-400">
              {cita.status.name}
            </p>
          </div>
        </div>
      </section>
    </a>
  );
};

export default CardMisCitas;
