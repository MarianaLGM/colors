import React, { useState } from "react";
import BoxColour from "./BoxColour";

function MyFormChallenge() {
  const colours = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [value, setValue] = useState("");  // maneja el valor del input

  const handleChange = (e) => {
    setValue(e.target.value);  // act. el estado con el valor del input
  };

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="Escribe el color"
        onChange={handleChange} // al cambiar el valor del input, actualizamos el estado
      />
      {console.log(value)} {/* Muestra el valor actual del input*/}

      <div className="container">
        {colours.map((colour) => (
          <BoxColour 
            key={colour} 
            colour={colour} 
            value={value} //valor del input
          />
        ))}
      </div>
    </>
  );
}

export default MyFormChallenge;

