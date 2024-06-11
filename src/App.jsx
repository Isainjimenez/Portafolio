import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cpp from './pages/Cpp';
import Java from './pages/Java';
import Python from './pages/Python';
import Matlab from './pages/Matlab';
import Arduino from './pages/Arduino';
import Contact from './pages/Contact';
import ReactPage from './pages/ReactPage';
//----------------------------------------------------------------------//
import homeIcon from './assets/home.png';
import cppIcon from './assets/cpp.png';
import javaIcon from './assets/java.png';
import pythonIcon from './assets/python.png';
import matlabIcon from './assets/matlab.png';
import arduinoIcon from './assets/arduino.png';
import contactIcon from './assets/contact.png';
import reactIcon from './assets/react.png';
//----------------------------------------------------------------------//
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-red-100 to-yellow-100 p-1 shadow-md">
        <header className="bg-gradient-to-r from-red-200 to-yellow-200 text-white p-1 shadow-md">
          <div className="container mx-auto flex justify-between items-center ">
            <nav className="mt-2 flex w-full">
              
              <Link className="flex-grow flex flex-col items-center hover:text-gray-300" to="/python">
                <img src={pythonIcon} alt="Python" className="w-6 h-6" />
                <span>Python</span>
              </Link>
              <Link className="flex-grow flex flex-col items-center hover:text-gray-300" to="/matlab">
                <img src={matlabIcon} alt="Matlab" className="w-6 h-6" />
                <span>Matlab</span>
              </Link>
              <Link className="flex-grow flex flex-col items-center hover:text-gray-300" to="/arduino">
                <img src={arduinoIcon} alt="Arduino" className="w-6 h-6" />
                <span>Arduino</span>
              </Link>
              <Link className="flex-grow flex flex-col items-center hover:text-gray-300" to="/react">
                <img src={reactIcon} alt="React" className="w-6 h-6" />
                <span>React</span>
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow ">
          <div className="container mx-auto p-4 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cpp" element={<Cpp />} />
              <Route path="/java" element={<Java />} />
              <Route path="/python" element={<Python />} />
              <Route path="/matlab" element={<Matlab />} />
              <Route path="/arduino" element={<Arduino />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/react" element={<ReactPage />} /> 
            </Routes>
          </div>
        </main>
        <footer className="bg-gray-400 text-white p-1 fixed bottom-0 w-full">
          <div className="container mx-auto flex justify-around">
            <Link className="flex flex-col items-center" to="/">
              <span>Inicio</span>
            </Link>
            <Link className="flex flex-col items-center" to="/contact">
              <span>Contacto</span>
            </Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
