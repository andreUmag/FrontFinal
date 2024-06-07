import axios from "axios";
import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";

function ApiHospital() {
  const urlBase = "http://localhost:8080/api/v1";
  const [user, setUser] = useState();
  const [citasDisponibles, setCitasDisponibles] = useState([]);
  const [citasPaciente, setCitasPaciente] = useState([]);
  const [tipoDocumento, setTipoDocumento] = useState([]);
  const [eps, setEps] = useState([]);

  useEffect(() => {
    getAppointmentsAvailable();
    getScheduledAppointment();
    getTiposDocumento();
    getEps();
  }, []);

  const auth = async (email, password, setSession) => {
    console.log(email);
    try {
      const {
        data: { session },
      } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setSession(session);
    } catch (error) {
      console.log(email);
      console.error(error);
    }
  };

  const register = async (email, password) => {
    try {
      await supabase.auth.signUp({
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const authState = (setSession) => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return { data };
  };

  const getData = async (endPoint, setters) => {
    try {
      const datosObt = await axios.get(`${urlBase}/${endPoint}`);
      setters(datosObt.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataId = async (endPoint, id) => {
    try {
      const datosObt = await axios.get(`${urlBase}/${endPoint}/${id}`);
      return datosObt.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getDataIdCard = async (endPoint, idCard) => {
    try {
      const datosObt = await axios.get(`${urlBase}/${endPoint}/${idCard}`);
      return datosObt.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const postData = async (endPoint, data) => {
    try {
      await axios.post(`${urlBase}/${endPoint}`, data);
    } catch (error) {
      console.error("Error al insertar datos:", error.message);
    }
  };

  const putData = async (endPoint, id, data) => {
    try {
      await axios.put(`${urlBase}/${endPoint}/${id}`, data);
    } catch (error) {
      console.error("Error al insertar datos:", error.message);
    }
  };

  const deleteData = async (endPoint, id) => {
    try {
      await axios.delete(`${urlBase}/${endPoint}/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const getCitasPorEspecialidad = async (especialidad) => {
    try {
      const response = await axios.get("/specialization", {
        params: {
          specialization: especialidad,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching citas:", error);
      return [];
    }
  };

  //Usuarios
  const saveUser = (user) => postData("users", user);
  const putUser = (id, user) => putData("users", id, user);
  const deleteUser = (id) => deleteData("users", id);
  const getuserById = (id) => getDataId("users", id);
  const getuserByIdCard = (idCard) => getDataIdCard("users/card", idCard);

  //CitasDisponibles
  const getAppointmentsAvailable = () =>
    getData("appointments-available", setCitasDisponibles);
  const saveAppointmentsAvailable = (appointmentsAvailable) =>
    postData("appointments-available", appointmentsAvailable);
  const putAppointmentsAvailable = (id, appointmentsAvailable) =>
    putData("appointments-available", id, appointmentsAvailable);
  const deleteAppointmentsAvailable = (id) =>
    deleteData("appointments-available", id);

  //CitasPacientes
  const getScheduledAppointment = () =>
    getData("scheduled_appointment", setCitasPaciente);
  const saveCitasPaciente = (citasPaciente) =>
    postData("scheduled_appointment", citasPaciente);
  const putCitasPaciente = (id, citasPaciente) =>
    putData("scheduled_appointment", id, citasPaciente);
  const deleteCitasPaciente = (id) => deleteData("scheduled_appointment", id);

  //TipoDocumento
  const getTiposDocumento = () => getData("document-type", setTipoDocumento);

  //Eps
  const getEps = () => getData("eps", setEps);

  return {
    register,
    auth,
    authState,
    user,
    setUser,
    citasDisponibles,
    citasPaciente,
    getAppointmentsAvailable,
    eps,
    tipoDocumento,
    saveUser,
    putUser,
    deleteUser,
    getuserById,
    getuserByIdCard,
    saveAppointmentsAvailable,
    putAppointmentsAvailable,
    deleteAppointmentsAvailable,
    saveCitasPaciente,
    putCitasPaciente,
    deleteCitasPaciente,
    getCitasPorEspecialidad,
  };
}

export { ApiHospital };
