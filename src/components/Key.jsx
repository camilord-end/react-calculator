import React from "react";

export const Key = ({ keyData: { id, value }, handleInput }) => {
  return (
    <div id={id} className={`padButton ${value}`} onClick={() => handleInput(value)}>
      {value}
    </div>
  );
};
