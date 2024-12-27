import { useState, useEffect } from 'react';
import logo from '../assets/logo-texto.png';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Función genérica para manejar el desplazamiento suave hacia una sección
  const handleSectionClick = (section) => {
    window.location.href = `/#${section}`; // Navega al inicio y hace scroll hacia la sección
    setActiveSection(section);
    handleClose();
  };

  // Desplazamiento manual hacia la sección cuando la URL cambia
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [window.location.hash]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            className="d-inline-block align-text-top"
            width="230"
            alt="Logo-tecnosustrato"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon fs-1"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
          <div className="navbar-nav text-center fs-4">
            {/* Inicio */}
            <span
              className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
              onClick={() => handleSectionClick('inicio')}
              style={{ cursor: 'pointer' }}
            >
              Inicio
            </span>

            {/* Productos */}
            <span
              className={`nav-link ${activeSection === 'productos' ? 'active' : ''}`}
              onClick={() => handleSectionClick('productos')}
              style={{ cursor: 'pointer' }}
            >
              Productos
            </span>

            {/* Servicios */}
            <span
              className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
              onClick={() => handleSectionClick('servicios')}
              style={{ cursor: 'pointer' }}
            >
              Servicios
            </span>

            {/* Nosotros */}
            <span
              className={`nav-link ${activeSection === 'nosotros' ? 'active' : ''}`}
              onClick={() => handleSectionClick('nosotros')}
              style={{ cursor: 'pointer' }}
            >
              Nosotros
            </span>

            {/* Ensayos */}
            <span
              className={`nav-link ${activeSection === 'ensayos' ? 'active' : ''}`}
              onClick={() => handleSectionClick('ensayos')}
              style={{ cursor: 'pointer' }}
            >
              Ensayos
            </span>

            {/* Contacto */}
            <span
              className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}
              onClick={() => handleSectionClick('contacto')}
              style={{ cursor: 'pointer' }}
            >
              Contacto
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;









