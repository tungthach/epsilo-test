import React, { useState } from "react";
import AtomMultiInput from "./atom-multi-input";
import {BeAtom} from "./atom";

export default function App() {
  const [atoms, setAtoms] = useState([]);

  return (
    <div style={{ padding: 36 }}>
      <div style={{ marginBottom: 36 }}>
        <AtomMultiInput atoms={atoms} setAtoms={setAtoms} />
      </div>

      <div>
        {atoms.map((atom) => {
          const { eSize, velocity, color, isDelete } = atom.config;
          // Do not render delete atom
          if (isDelete) return null;

          return (
            <div key={atom.name}>
              <div>{atom.name}</div>
              <div style={{ width: 400, height: 200 }}>
                <BeAtom eSize={eSize} velocity={velocity} color={color} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
