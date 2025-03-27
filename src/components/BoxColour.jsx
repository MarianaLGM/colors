//- `BoxColor.jsx`: Aquí irá el componente del cuadrado de color.

import React from "react";
import { useEffect, useRef, useState } from "react";


function BoxColour ({colour, value}) {
  const boxValue = useRef (null);
  const [sameColour, setSameColour] = useState(false)


  useEffect (()=>{
    const input= value;
    if (input === colour) {
      setSameColour(true); // Si coincide, establecemos el estado a true
      if (boxValue.current) {
        //boxValue.current.style.backgroundColor = colour; // Cambiamos el color de fondo
        boxValue.current.innerText = '¡Soy el color!'; // Cambiamos el texto dentro de la caja
      }
    } else {
      setSameColour(false); // Si no coincide, mantenemos el estado como false
      if (boxValue.current) {
       // boxValue.current.style.backgroundColor = ''; // Eliminamos el fondo
        boxValue.current.innerText = 'No soy el color'; // Cambiamos el texto a "No soy el color"
      }
    }
  }, [value, colour]); // El efecto depende de value y colour

  return (
    <div id="container">
      <div className={`box ${colour}`}></div>
      {sameColour ? '¡Soy el color!' : 'No soy el color'}
    </div>
  )
}

export default BoxColour;  



