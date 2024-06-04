import React from "react";

const Navbar = ({username}) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img
            className="size-20 mr-4"
          alt="Tailwind CSS Navbar component"
          src="https://acortar.link/WS0CCn"
        />
        <p className="text-xl">ESE Alejandro Próspero Reverend</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control text-lg">
            <p className="flex gap-2"><p className="text-cyan-400">!HOLA!</p>{username}</p>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://acortar.link/oHBE9q"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Perfil
                {/* <span className="badge">New</span> */}
              </a>
            </li>

            <li>
              <a>Salir</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
