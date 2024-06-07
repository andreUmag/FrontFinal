import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useHospital } from "../context/HospitalContext";
import { TipoDocumento } from "../components/TipoDocumento";
import { Eps } from "../components/Eps";

function Register() {
  const { register, saveUser } = useHospital();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    identityDocumentType: { id: 1 },
    idCard: "",
    email: "",
    password: "",
    role: { id: 3 },
    eps: { id: 3 },
  });

  const {
    name,
    lastName,
    identityDocumentType,
    idCard,
    email,
    password,
    role,
    eps,
  } = user;

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSelectTipoUser = (selectedTipo) => {
    setUser({ ...user, identityDocumentType: selectedTipo });
  };

  const onSelectEpsUser = (selectedTipo) => {
    setUser({ ...user, eps: selectedTipo });
  };

  const registrar = async (e) => {
    e.preventDefault();

    try {
      await saveUser(user);
      await register(email, password);
      navegacion("/login");
    } catch (err) {
      console.log("Error during authentication. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="home-ouput flex justify-center gap-1 p-10">
        <div className="w-auto h-auto p-10 bg-white border border-gray-200 rounded-2xl shadow">
          <form
            class="max-w-sm mx-auto grid grid-cols-2 gap-4"
            onSubmit={registrar}
          >
            <div>
              <label
                for="tipoDocumento"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipo Documento
              </label>
              <TipoDocumento onSelectTipoUser={onSelectTipoUser} />
            </div>
            <div>
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                EPS
              </label>
              <Eps onSelectEpsUser={onSelectEpsUser} />
            </div>
            <div>
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Numero de Documento
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
                name="idCard"
                value={idCard}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correo
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="flex mb-2 text-sm font-medium text-gray-900 "
              >
                Nombre
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="flex mb-2 text-sm font-medium text-gray-900 "
              >
                Apellido
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div>
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Numero de telefono
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Registrar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
