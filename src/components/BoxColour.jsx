//- `BoxColor.jsx`: Aquí irá el componente del cuadrado de color.

import React, { useState, useEffect, useRef } from "react";

function BoxColour({ colour, value }) {
  const boxValue = useRef(null);  // Ref al div de la BOX
  const [sameColour, setSameColour] = useState(false);  // ESTADO verifica si coincide

useEffect(() => {
  if (value.toLowerCase() === colour) {//input vs BOX
    setSameColour(true);  
  } else {
    setSameColour(false); 
  }
}, [value, colour]);  // se ejecuta cuando el valor del input o el color cambian

useEffect(() => {
  if (boxValue.current) {
    if (sameColour) {
      boxValue.current.style.backgroundColor = colour;  
    } else {
      boxValue.current.style.backgroundColor = "antiquewhite";  
    }
  }
}, [sameColour, colour]);  


  if (sameColour) {
    return (
      <div 
        className={`box ${colour}`} 
        ref={boxValue}
      >
        {`¡Soy el color ${value}!`}
      </div>
    );
  } else {
    return (
      <div 
        className={`box ${colour}`} 
        ref={boxValue}
      >
        {`No soy el color ${value}`}
      </div>
    );
  }
}


export default BoxColour;






