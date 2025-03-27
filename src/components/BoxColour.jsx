//- `BoxColor.jsx`: Aquí irá el componente del cuadrado de color.

import React from "react";

function BoxColour ({colour, value}) {

  const matchedColour= value === colour; 

  return (
    <div

      style={{ backgroundColor: matchedColour ? colour : "transparent" }}>
      <h2 className={`box ${colour}`}>1</h2>
      <h2 className={`box ${colour}`}>2</h2>
      <h2 className={`box ${colour}`}>3</h2>
      <h2 className={`box ${colour}`}>4</h2>
      <h2 className={`box ${colour}`}>5</h2>
      <h2 className={`box ${colour}`}>6</h2>
      <h2 className={`box ${colour}`}>7</h2>
      <h2 className={`box ${colour}`}>8</h2>
      <h2 className={`box ${colour}`}>9</h2>

  
      <h2>{matchedColour ? `¡Yes, I am  ${colour} colour!` : colour}</h2>
  
    </div>
  )
};

export default BoxColour;  




