import React from "react";

const NavbarFiltrar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
      <a className="text-xl text-gray-400">Mis Citas</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Mostrar</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Vencidas</a>
                </li>
                <li>
                  <a>Pendientes</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarFiltrar;
