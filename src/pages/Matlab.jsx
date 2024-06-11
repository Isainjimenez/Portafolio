import React from 'react';

const Matlab = () => {
  return (
    <div className="card">
      <h2>Matlab</h2>
      
      <div className="section bg-gradient-to-r from-blue-100 to-green-100">
        <h3 className="section-title">combinaciones multiplicaciones sumas potencias</h3>
        <div className="flex items-center">
          <a href="https://github.com/Isainjimenez/combinacionesmultiplicaciones-sumaspotencias-en-matlab" target="_blank" rel="noopener noreferrer">
            <img src="src/img/matlab.png" alt="C++" className="mr-4" />
          </a>
          <p className="description">
         <p> Este algoritmo en MATLAB realiza cálculos relacionados con combinaciones, multiplicaciones, sumas y potencias. Permíteme explicarte paso a paso lo que hace:
         <p>Entrada de datos:
         <p>El usuario ingresa el número de combinaciones (variable g) y el valor de la potencia (variable w).
         <p>Luego, se inicia un bucle for que se ejecuta g veces.
         <p>Dentro del bucle for:
         <p>El usuario ingresa los valores de X e Y.
         <p>Se calcula la multiplicación de X e Y (variable q).
         <p>Se calcula X elevado a la potencia establecida (variable p).
         <p>Se actualizan las sumas acumulativas de X, Y, XY y x^n.
         <p>Resultados:
         <p>Después de salir del bucle, se imprimen las sumas de X, Y, XY y x^n.
         <p>Se calcula el valor de M y se muestra.
         <p>Finalmente, se calcula el valor de B y se muestra.
          </p></p></p></p></p></p></p></p></p></p></p></p></p></p>
        </div>
      </div>
    </div>
  );
}

export default Matlab;
