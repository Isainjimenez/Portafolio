import React from 'react';

const Cpp = () => {
  return (
    <div className="card">
      <h2>C++</h2>
      
      <div className="section">
        <h3 className="section-title">Código 1</h3>
        <div className="flex items-center">
          <a href="https://github.com/tu-usuario/cpp-repo" target="_blank" rel="noopener noreferrer">
            <img src="path/to/cpp-image.jpg" alt="C++" className="mr-4 w-32" />
          </a>
          <p className="description">
            Descripción
          </p>
        </div>
      </div>

      <div className="section mt-8">
        <h3 className="section-title">Código 2</h3>
        <div className="flex items-center">
          <p className="description">
            Descripción
          </p>
          <a href="https://github.com/tu-usuario/cpp-repo" target="_blank" rel="noopener noreferrer">
            <img src="path/to/cpp-image.jpg" alt="C++" className="ml-4 w-32" />
          </a>
        </div>
      </div>

      <div className="section mt-8">
        <h3 className="section-title">Código 3</h3>
        <div className="flex items-center">
          <a href="https://github.com/tu-usuario/cpp-repo" target="_blank" rel="noopener noreferrer">
            <img src="path/to/cpp-image.jpg" alt="C++" className="mr-4 w-32" />
          </a>
          <p className="description">
            Descripción
          </p>
        </div>
      </div>

      <div className="section mt-8">
        <h3 className="section-title">Código 4</h3>
        <div className="flex items-center">
          <p className="description">
            Descripción
          </p>
          <a href="https://github.com/tu-usuario/cpp-repo" target="_blank" rel="noopener noreferrer">
            <img src="path/to/cpp-image.jpg" alt="C++" className="ml-4 w-32" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cpp;
