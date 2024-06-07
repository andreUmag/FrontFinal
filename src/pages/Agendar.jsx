import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardCitaOfertada from "../components/CardCitaOfertada";
import { useHospital } from "../context/HospitalContext";
import { useNavigate } from "react-router-dom";

function Agendar({ especialidad, user }) {
  const {
    getCitasPorEspecialidad,
    saveCitasPaciente,
    putAppointmentsAvailable,
  } = useHospital();
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [citaEditada, setCitaEditada] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        setLoading(true);
        setError(null);
        const citasObtenidas = await getCitasPorEspecialidad(especialidad);
        const citasDisponibles = citasObtenidas.filter(
          (cita) => cita.available
        );
        setCitas(citasDisponibles);
      } catch (error) {
        setError("Error fetching citas");
        setCitas([]);
      } finally {
        setLoading(false);
      }
    };

    if (especialidad) {
      fetchCitas();
    }
  }, [especialidad, getCitasPorEspecialidad]);

  useEffect(() => {
    const saveCitaSeleccionada = async () => {
      if (citaSeleccionada && citaEditada) {
        try {
          await saveCitasPaciente(citaSeleccionada);
          await putAppointmentsAvailable(citaEditada.id, citaEditada);
          console.log("Cita seleccionada y guardada:", citaSeleccionada);
          console.log("Cita Editada:", citaEditada);
          navigate("/");
        } catch (error) {
          console.error("Error saving cita:", error);
        }
      }
    };

    saveCitaSeleccionada();
  }, [citaSeleccionada, saveCitasPaciente, citaEditada]);

  return (
    <>
      <Navbar />
      <section className="home-ouput flex flex-col gap-1 p-10">
        <h5 className="text-2xl text-start font-semibold">{especialidad}</h5>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="h-full h-max-[200px] gap-4 grid grid-cols-3 content-start p-4">
            {Array.isArray(citas) &&
              citas.map((cita, index) => (
                <CardCitaOfertada
                  cita={cita}
                  key={index}
                  setCitaSeleccionada={setCitaSeleccionada}
                  user={user}
                  setCitaEditada={setCitaEditada}
                />
              ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Agendar;
