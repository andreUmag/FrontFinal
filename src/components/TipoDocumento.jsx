import React from "react";
import { useHospital } from "../context/HospitalContext";

function TipoDocumento({ value, onSelectTipoUser }) {
  const { tipoDocumento } = useHospital();

  const onSelectTipo = (event) => {
    const SelectTipoName = event.target.value;
    const TipoE = tipoDocumento.find((tipo) => tipo.name === SelectTipoName);
    onSelectTipoUser(TipoE);
  };
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={onSelectTipo}
      value={value}
    >
      {tipoDocumento
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((tipo, indice) => (
          <option key={indice}>{tipo.name}</option>
        ))}
    </select>
  );
}

export { TipoDocumento };
