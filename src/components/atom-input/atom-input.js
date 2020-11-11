import React, { useEffect, useState, useRef } from "react";

export default function AtomInput({ atom, index, atoms, setAtoms }) {
  const { eSize, velocity, color } = atom.config;
  const [localConfig, setLocalConfig] = useState({ eSize, velocity, color });
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      atoms.splice(index, 1, { ...atom, config: localConfig });
      setAtoms([...atoms]);
    } else {
      firstRender.current = false;
    }
  }, [localConfig]);

  const updateConfig = (key, value) => {
    setLocalConfig((state) => ({ ...state, [key]: value }));
  };

  // Do not render deleted item
  if (localConfig.isDelete) {
    return null;
  }

  return (
    <form className="pure-form">
      <fieldset>
        <legend>Config of atom #{index + 1}</legend>
        <label>
          Electron size
          <input
            defaultValue={3}
            onChange={(event) => updateConfig("eSize", event.target.value)}
            type="number"
          />
        </label>{" "}
        <label>
          Electron velocity
          <input
            defaultValue={30}
            onChange={(event) => updateConfig("velocity", event.target.value)}
            type="number"
          />
        </label>{" "}
        <label>
          Electron color
          <input
            defaultValue={"#f47b20"}
            onChange={(event) => updateConfig("color", event.target.value)}
            type="color"
          />
        </label>
        <button onClick={() => updateConfig("isDelete", true)}>Remove</button>
      </fieldset>
    </form>
  );
}
