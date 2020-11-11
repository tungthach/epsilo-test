import React, { useEffect, useState, useRef } from "react";

export default function AtomInput({atom, index, atoms, setAtoms }) {
  const [localConfig, setLocalConfig] = useState({
    eSize: 3,
    velocity: 30,
    color: "#f47b20",
  });
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      atoms.splice(index, 1, { ...atom, config: localConfig })
      setAtoms([...atoms]);
    } else {
      firstRender.current = false;
    }
  }, [localConfig]);

  return (
    <form className="pure-form">
      <fieldset>
        <legend>Config of atom #{index + 1}</legend>
        <label>
          Electron size
          <input
            defaultValue={3}
            onChange={(event) => {
              let val = event.target.value;
              setLocalConfig((state) => ({ ...state, eSize: val }));
            }}
            type="number"
          />
        </label>{" "}
        <label>
          Electron velocity
          <input
            defaultValue={30}
            onChange={(event) => {
              let val = event.target.value;
              setLocalConfig((state) => ({ ...state, velocity: val }));
            }}
            type="number"
          />
        </label>{" "}
        <label>
          Electron color
          <input
            defaultValue={"#f47b20"}
            onChange={(event) => {
              let val = event.target.value;
              setLocalConfig((state) => ({ ...state, color: val }));
            }}
            type="color"
          />
        </label>
      </fieldset>
    </form>
  );

}
