//- `MyFormChallenge.jsx`: Aquí crearemos el formulario e importaremos las BoxColor para pasarle `props`.
import { useState, useRef} from "react"
import BoxColour from "./BoxColour";

//con el REF podemos acceder a elementos del DOM y PODER SACAR sus atributos

function MyFormChallenge() {
  const colours = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [classList, setClassList]= useState("");// Aquí almacenaremos el classList
  const inputRef=useRef(null);//lo llmamos como queremos inputRef


  const handleChange = () => {  // función para manejar el cambio en el input
    const inputColour = inputRef.current.value; // Accedemos al valor del input a través del ref

  
    if (colours.includes(inputColour)) {  // comprueb si el color ingresado esta en la lista de colores indicado
      setClassList(inputColour);
    } else {
      setClassList(""); // Si hay coincidencia resetea
    }
  };

  return (
    <>
      <input
        id="name"
        type="text"
        placeholder="Choose a colour"
        className="inputClass"
        onChange={handleChange} // Llamamos a handleChange cuando cambia el valor
        ref={inputRef} // Asignamos el ref al input
      />
      <div>{inputRef.current?.value}</div> 

      <div className="container">
        {colours.map((colour, index) => (
          <BoxColour
            key={index}
            colour={colour}
            classList={classList} // Pasamos el classList como prop
          />
        ))}
      </div>
    </>
  );
}


export default MyFormChallenge;

