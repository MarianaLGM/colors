//- `BoxColor.jsx`: Aquí irá el componente del cuadrado de color.

import React, { useState, useEffect, useRef } from "react";

function BoxColour({ colour, value }) {
  const boxValue = useRef(null);  // Ref al div de la BOX
  const [sameColour, setSameColour] = useState(false);  // ESTADO verifica si coincide

  useEffect(() => {
    
    if (value.toLowerCase() === colour) {// Comparamos el valor del input con el color de la caja
      setSameColour(true);  
    } else {
      setSameColour(false); 
    }
  }, [value, colour]);  // Se ejecuta cada vez que el valor del input o el color cambian

  if (sameColour) {
    return (
      <div 
        className={`box ${colour}`} 
        style={{ backgroundColor: colour }} 
        ref={boxValue}
      >
        {`¡Soy el color ${value}!`}
      </div>
    );
  } else {
    return (
      <div 
        className={`box ${colour}`} 
        style={{ backgroundColor: 'white' }}  // fondo blanco por defecto
        ref={boxValue}
      >
        {`No soy el color ${value}`}
      </div>
    );
  }
}


export default BoxColour;






