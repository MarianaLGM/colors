//- `MyFormChallenge.jsx`: Aquí crearemos el formulario e importaremos las BoxColor para pasarle `props`.
import {useState} from "react"
import BoxColour from "./BoxColour";

//con el REF podemos acceder a elementos del DOM y PODER SACAR sus atributos

function MyFormChallenge() {
  const colours = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [inputValue, setInputValue]= useState("");
  

  const handleChange = (e) => {
    setInputValue(e.target.value);  // actualizamos el estado del input
  };
  
  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="Escribe el color"
        onChange={handleChange} // aquí llama a handleChange cuando cambia el valor
      />
      <div className="container">
        {colours.map((colour) => (
          <BoxColour
            key={colour}
            colour={colour}
            inputValue={inputValue} 
          />
        ))}
      </div>
    </>
  );
}


export default MyFormChallenge;

