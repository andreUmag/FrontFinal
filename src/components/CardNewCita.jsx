import React, { useEffect } from "react";
import { useHospital } from "../context/HospitalContext";
import { Link } from "react-router-dom";

const CardNewCita = ({ setEspecialidad }) => {
  const { citasDisponibles, getAppointmentsAvailable } = useHospital();

  const especialidadesMostradas = new Set();

  let citasMostradas = 0;

  useEffect(() => {
    getAppointmentsAvailable();
  }, []);

  const handleClickEspecialidad = (especialidad) => {
    setEspecialidad(especialidad);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          {citasDisponibles.map((cita, index) => {
            if (!especialidadesMostradas.has(cita.doctor.specialization.name)) {
              especialidadesMostradas.add(cita.doctor.specialization.name);

              citasMostradas++;
              return (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cita.doctor.specialization.name}
                  </th>
                  <td className="px-6 py-4">
                    <Link
                      to="/agendar"
                      className="font-medium text-cyan-400 dark:text-blue-500 hover:underline"
                      onClick={() =>
                        handleClickEspecialidad(cita.doctor.specialization.name)
                      }
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              );
            }

            if (citasMostradas === 5) {
              return null;
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CardNewCita;
