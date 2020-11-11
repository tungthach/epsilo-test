import React from "react";
import { render } from "react-dom";
import App from "./components/app/app";
import README from "../README.md";
import { BeAtom } from "./components/atom/atom";

function Introduction() {
  return (
    <div className="app-wrapper">
      <div className="introduction">
        <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
        <div>This is an atom 👉</div>
        <div style={{ width: 200, height: 100 }}>
          <BeAtom />
        </div>
        </div>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: README }}></div>
      </div>
      <div className="app">
        <h2 style={{marginLeft: 30}}>Your frontend application start here</h2>
        <App />
      </div>
    </div>
  );
}

const $el = document.getElementById("root");
$el.removeChild($el.firstChild);
render(<Introduction />, $el);
