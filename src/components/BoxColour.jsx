//- `BoxColor.jsx`: Aquí irá el componente del cuadrado de color.

import React from "react";

function BoxColour ({colour, value}) {

  const matchedColour = value === colour; 

  return (
    <div
      className={`box ${colour}`}
      style={{ backgroundColor: matchedColour ? colour : "transparent" }}>
      <h2>{matchedColour ? `¡Soy el ${colour}!` : colour}</h2>
  
    </div>
  );
};

export default BoxColour;  




