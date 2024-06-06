import React from "react";
import Navbar from "../components/Navbar";

function Register() {
  return (
    <>
      <Navbar/>
      <section className="home-ouput flex justify-center gap-1 p-10">
        <div className="w-auto h-auto p-10 bg-white border border-gray-200 rounded-2xl shadow">
          <form class="max-w-sm mx-auto grid grid-cols-2 gap-4">
            <div>
              <label
                for="email"
                class="flex mb-2 text-sm font-medium text-gray-900 "
              >
                Documento de Identidad
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                EPS
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
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
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="flex mb-2 text-sm font-medium text-gray-900 "
              >
                Nombre y Apellido
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
            <div>
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirmar Contraseña
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
              Ingresar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
