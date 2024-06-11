import React from 'react';

const Arduino = () => {
  return (
    <div className="card">
      <h2>Arduino</h2>
      
      <div className="section bg-gradient-to-r from-blue-100 to-green-100">
        <h3 className="section-title">La cucaracha</h3>
        <div className="flex items-center">
          <a href="https://github.com/Isainjimenez/CucarachaArduino" target="_blank" rel="noopener noreferrer">
            <img src="/img/bot.png" alt="C++" className="mr-4" />
          </a>
          <p className="description">
          Este código en formato .ino es un programa para Arduino que reproduce la melodía de “La Cucaracha” utilizando un buzzer o altavoz conectado al pin 3. Permíteme explicarte cómo funciona:
          <p> Declaración de notas y duraciones:
          <p>Las variables Do, Re, Mi, Fa, Sol, La, Si, DoS y ReS representan las frecuencias de las notas musicales.
          <p>Las variables t1, t2 y t3 definen las duraciones de las notas en milisegundos.
          <p>Configuración inicial:
          <p> La función setup() configura el pin 3 como salida para controlar el buzzer o altavoz.
          <p> Bucle principal (loop()):
          <p> El programa reproduce la melodía de “La Cucaracha” en cuatro líneas.
          <p>Cada línea está compuesta por una secuencia de notas y pausas.
          <p> La función playNote() toca una nota en el pin 3 con la frecuencia y duración especificadas.
          <p>La función pause() introduce una pausa entre las notas.
          </p></p></p></p></p></p></p></p></p></p></p>
        </div>
      </div>
    </div>
  );
}

export default Arduino;
