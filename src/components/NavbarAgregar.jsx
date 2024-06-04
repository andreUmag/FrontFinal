import React from "react";

const NavbarAgregar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-xl text-gray-400">Nueva Cita</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <button className="btn btn-outline  btn-info">Agendar</button> */}
        </ul>
      </div>
    </div>
  );
};

export default NavbarAgregar;
