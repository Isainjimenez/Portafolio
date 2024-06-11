import React from 'react';
import ph from '../img/photo.jpg';

const Home = () => {
  return (
    <div className="card p-4 text-center">
      <h2>Isain Jimenez Martinez</h2>
      <div className="flex flex-col items-center">
        <img src={ph} alt="Desarrollador" className="w-32 h-32 rounded-full mb-5" />
        <div className="description text-left">
          <p>Soy Isain, un estudiante de programación apasionado en desarrollo de software.</p>
          <p>He trabajado en una variedad de proyectos que abarcan desde aplicaciones web hasta sistemas embebidos.</p>
          <p>Mis principales lenguajes de programación incluyen Java, Python, Matlab, C++, tengo trabajos en React en JavaScript y también he trabajado en proyectos con Arduino y tengo un poco de experiencia en redes.</p>
          <p>Disfruto resolver problemas complejos y siempre estoy buscando nuevos desafíos que me permitan mejorar mis habilidades y aprender nuevas tecnologías.</p>
          <p>En mi tiempo libre, me gusta jugar videojuegos y documentarme sobre temas que aún desconozco.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
