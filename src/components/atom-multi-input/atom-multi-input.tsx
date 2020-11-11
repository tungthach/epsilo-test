import React from "react";
import AtomInput, { Atom, setAtomsFn } from "../atom-input/atom-input";

export type MultiInputProps = {
  atoms: Atom[];
  setAtoms: setAtomsFn;
};

export default function AtomMultiInput({ atoms, setAtoms }: MultiInputProps) {
  return (
    <React.Fragment>
      <button
        className="pure-button"
        onClick={() =>
          setAtoms([
            ...atoms,
            {
              name: `Atom ${atoms.length + 1}`,
              config: { eSize: 3, velocity: 30, color: "#f47b20" },
            },
          ])
        }
      >
        Add an Atom
      </button>

      {atoms.map((atom, index) => (
        <AtomInput
          key={index}
          index={index}
          atom={atom}
          setAtoms={setAtoms}
          atoms={atoms}
        />
      ))}
    </React.Fragment>
  );
}
