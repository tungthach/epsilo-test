import React, { useState } from "react";
import AtomMultiInput from "../atom-multi-input/atom-multi-input";
import { BeAtom } from "../atom/atom";
import { Atom } from "../atom-input/atom-input";

export default function App() {
  const [atoms, setAtoms] = useState<Atom[]>([]);

  return (
    <div style={{ padding: 36 }}>
      <div style={{ marginBottom: 36 }}>
        <AtomMultiInput atoms={atoms} setAtoms={setAtoms} />
      </div>

      <div>
        {atoms.map((atom) => (
          <div key={atom.name}>
            <div>{atom.name}</div>
            <div style={{ width: 400, height: 200 }}>
              <BeAtom />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
