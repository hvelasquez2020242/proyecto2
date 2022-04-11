import React from "react";
import '../style-sheets/Fondo.css'

function asignarColor({text, cambiarColorFondo}){

    return(
        
        <button onClick={cambiarColorFondo}
        >
            {text}
            

        </button>

    );

}
export default asignarColor;
