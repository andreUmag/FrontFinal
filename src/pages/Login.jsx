import React from "react";
import "../pages/Login.css";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <section className="home-ouput flex justify-center gap-1 p-10">
        <div className="w-96 h-72 p-3 bg-white border border-gray-200 rounded-lg shadow mt-12">
          <form class="max-w-sm mx-auto">
            <div class="mb-5">
              <label
                for="email"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Documento de Identidad
              </label>
              <input
                type="cc"
                id="cc"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1023024025"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="flex items-start mb-5">
              <a
                for="remember"
                class=" font-light text-blue-400"
                href="#"
              >
              Registrarme
              </a>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ingresar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
