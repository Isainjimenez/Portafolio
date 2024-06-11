import React from 'react';

const ReactPage = () => {
  return (
    <div className='card'>
      <h2>React</h2>

      <div className="section bg-gradient-to-r from-green-100 to-blue-100 ">
        <h3 className="section-title">Pokedex</h3>
        <div className="flex items-center">
          <a href="https://github.com/Isainjimenez/pokeapi" target="_blank" rel="noopener noreferrer">
            <img src="src/img/poke.png" alt="React" className="mr-4" />
          </a>
          <p className="description">
          <p> Funcionalidad:
          <p> La aplicación permite buscar información sobre Pokémon.
          <p> Los usuarios pueden buscar Pokémon por nombre, número o tipo.
          <p> Muestra detalles como habilidades, estadísticas, evoluciones y más.
          <p> Componentes:
          <p> Barra de búsqueda: Permite a los usuarios ingresar el nombre o número del Pokémon.
          <p> Tarjeta de Pokémon: Muestra la información relevante del Pokémon seleccionado.
          <p> Lista de Pokémon: Muestra una lista paginada de Pokémon.
          <p>  Tecnologías Utilizadas:
          <p>  React: Para construir la interfaz de usuario.
          <p> Axios: Para realizar peticiones a la PokeAPI1.
          <p> Pasos para Crearla:
          <p>Inicializa un nuevo proyecto React con create-react-app.
          <p> Crea componentes para la barra de búsqueda, la lista de Pokémon y las tarjetas de detalle.
          <p> Utiliza Axios para hacer llamadas a la PokeAPI y mostrar los datos.
          </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>
        </div>
      </div>

      <div className="section mt-8 bg-gradient-to-r from-blue-100 to-green-100">
        <h3 className="section-title">Hola Mundo</h3>
        <div className="flex items-center">
          <p className="description">
            <p>Asegúrate de tener Node.js instalado en tu computadora.
            <p> Abre una terminal y ejecuta el siguiente comando para crear un nuevo proyecto de React:               
            <p> npx create-react-app mi-hola-mundo

            <p> Luego, navega al directorio del proyecto:
            <p> cd mi-hola-mundo

            <p> Crea un Componente:
            <p> React se basa en componentes. Abre el archivo src/App.js.
          </p></p></p></p></p></p></p></p>

          <a href="https://github.com/Isainjimenez/Primer-programa-en-react" target="_blank" rel="noopener noreferrer">
            <img src="src/img/hello.png" alt="C++" className="ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReactPage;