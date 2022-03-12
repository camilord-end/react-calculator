import React from "react";
import DATA from "./dat/data.js";
import { Key } from "./Key.jsx";
import { Display } from "./Display.jsx";

export const Keyboard = ({ input, output, handleInput }) => {
  return (
    <>
      <Display input={input} output={output}/>
      {DATA.map((key) => (
        <Key key={key.id} keyData={key} handleInput={handleInput} />
      ))}
    </>
  );
};
