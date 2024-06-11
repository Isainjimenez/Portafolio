import React from 'react';

const Python = () => {
  return (
    <div className="card">
      <h2>Python</h2>
      <div className="section bg-gradient-to-r from-green-100 to-blue-100">
        <h3 className="section-title">Cesar</h3>
        <div className="flex items-center">
          <a href="https://github.com/Isainjimenez/metodos_de_encriptacion_cesar" target="_blank" rel="noopener noreferrer">
            <img src="src/img/cesar.png" alt="C++" className="mr-4" />
          </a>
          <p className="description">
          <p>Descripción del Código:
          <p> El código que proporcionaste implementa el cifrado y descifrado utilizando el cifrado César.
          <p> El cifrado César es una técnica de sustitución simple en la que cada letra en el mensaje original se reemplaza por una letra que está un número fijo de posiciones más adelante en el alfabeto.
          <p> En tu código, tienes dos funciones: cifrar y descifrar.
          <p> Función cifrar:
          <p>Esta función toma un mensaje y una clave como entrada.
          <p> Itera a través de cada letra en el mensaje:
          <p>Encuentra la posición de la letra en el alfabeto.
          <p>Agrega la clave al índice de la letra.
          <p>Calcula el módulo de la suma para asegurarse de que el resultado esté dentro del rango del alfabeto.
          <p>Agrega la letra encriptada al resultado.
          <p>Devuelve el mensaje encriptado.
          <p>Función descifrar:
          <p>Similar a la función cifrar, pero resta la clave en lugar de sumarla.
          <p>Devuelve el mensaje descifrado.
          <p>Uso del Código:
          <p>El usuario ingresa un mensaje y una clave (un número entero).
          <p>El mensaje se cifra o descifra según la función seleccionada.
          <p>El resultado se muestra en la consola.
          </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>
        </div>
      </div>

      <div className="section mt-8 bg-gradient-to-r from-blue-100 to-green-100">
        <h3 className="section-title">Encriptado-Orden</h3>
        <div className="flex items-center">
          <p className="description">
         <p> Encriptado:
         <p>El mensaje se divide en filas y se organiza en una matriz.
         <p>Se crea una clave que determina el orden de las columnas en la matriz.
         <p> Las letras se reorganizan según el orden de la clave.
         <p> El resultado es el mensaje encriptado.
         <p> Descifrado:
         <p> Se utiliza la misma clave para reorganizar las columnas de la matriz.
         <p>Las letras se leen por filas para obtener el mensaje original.
         <p> Ejemplo de Uso:
         <p>Se proporciona un ejemplo de encriptado con la frase “la clave secreta” y la clave “rcipto”.
         <p> El resultado encriptado se muestra en la consola.
          </p></p></p></p></p></p></p></p></p></p></p></p>
          <a href="https://github.com/Isainjimenez/Encriptado-Orden" target="_blank" rel="noopener noreferrer">
            <img src="src/img/orden.png" alt="C++" className="ml-4" />
          </a>
        </div>
      </div>

      <div className="section mt-8 bg-gradient-to-r from-green-100 to-blue-100">
        <h3 className="section-title">Matrices-y-Clave</h3>
        <div className="flex items-center">
          <a href="https://github.com/Isainjimenez/Matrices-y-Clave" target="_blank" rel="noopener noreferrer">
            <img src="src/img/clave.png" alt="" className="mr-4" />
          </a>
          <p className="description">
          <p>Encriptado:
          <p>El mensaje se divide en filas y se organiza en una matriz.
          <p>Se crea una clave que determina el orden de las columnas en la matriz.
          <p>Las letras se reorganizan según el orden de la clave.
          <p>El resultado es el mensaje encriptado.
          <p>Descifrado:
          <p>Se utiliza la misma clave para reorganizar las columnas de la matriz.
          <p>Las letras se leen por filas para obtener el mensaje original.
          <p>Ejemplo de Uso:
          <p>Se proporciona un ejemplo de encriptado con la frase “la clave secreta” y la clave “rcipto”.
          <p>El resultado encriptado se muestra en la consola.
          </p></p></p></p></p></p></p></p></p></p></p></p>
        </div>
      </div>

      <div className="section mt-8 bg-gradient-to-r from-blue-100 to-green-100">
        <h3 className="section-title">Series de Números</h3>
        <div className="flex items-center">
          <p className="description">
          <p>Encriptado:
          <p>El mensaje se organiza utilizando una serie de números específica.
          <p>El usuario puede elegir entre números pares, números primos y números múltiplos de 4.
          <p>Se crea un orden único a partir de las series seleccionadas.
          <p>El resultado es el mensaje encriptado.
          <p> Descifrado:
          <p> Se utiliza el mismo orden para reconstruir el mensaje original.
          <p> Las letras se recuperan según el orden especificado.
          <p> Ejemplo de Uso:
          <p> Se proporciona un ejemplo de encriptado con una frase de muestra y un orden personalizado.
          <p>El resultado encriptado se muestra en la consola.
          </p></p></p></p></p></p></p></p></p></p></p></p>
          <a href="https://github.com/Isainjimenez/Series-de-N-meros" target="_blank" rel="noopener noreferrer">
            <img src="src/img/num.png" alt="" className="ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Python;
