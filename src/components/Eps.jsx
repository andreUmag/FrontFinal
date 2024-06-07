import React from "react";
import { useHospital } from "../context/HospitalContext";

function Eps({ value, onSelectEpsUser }) {
  const { eps } = useHospital();

  const onSelectTipo = (event) => {
    const SelectTipoName = event.target.value;
    const TipoE = eps.find((tipo) => tipo.name === SelectTipoName);
    onSelectEpsUser(TipoE);
  };
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={onSelectTipo}
      value={value}
    >
      {eps
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((tipo, indice) => (
          <option key={indice}>{tipo.name}</option>
        ))}
    </select>
  );
}

export { Eps };
