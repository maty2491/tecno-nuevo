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

  // Función para manejar el desplazamiento suave hacia el inicio
  const handleInicioClick = () => {
    window.location.href = '/#inicio'; // Esto lleva al inicio y hace scroll hacia la sección de inicio
    setActiveSection('inicio');
    handleClose();
  };

  const handleProductosClick = () => {
    window.location.href = '/#productos'; // Esto navega a la página de inicio y hace scroll hacia la sección de productos
    setActiveSection('productos');
    handleClose();
  };

  const handleServiciosClick = () => {
    window.location.href = '/#servicios'; // Esto navega a la página de inicio y hace scroll hacia la sección de servicios
    setActiveSection('servicios');
    handleClose();
  };

  const handleNosotrosClick = () => {
    window.location.href = '/#nosotros'; // Esto navega a la página de inicio y hace scroll hacia la sección de nosotros
    setActiveSection('nosotros');
    handleClose();
  };

  const handleEnsayosClick = () => {
    window.location.href = '/#ensayos'; // Esto navega a la página de inicio y hace scroll hacia la sección de ensayos
    setActiveSection('ensayos');
    handleClose();
  };

  const handleContactoClick = () => {
    window.location.href = '/#contacto'; // Esto navega a la página de inicio y hace scroll hacia la sección de contacto
    setActiveSection('contacto');
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
              onClick={handleInicioClick}
              style={{ cursor: 'pointer' }}
            >
              Inicio
            </span>

            {/* Productos */}
            <span
              className={`nav-link ${activeSection === 'productos' ? 'active' : ''}`}
              onClick={handleProductosClick}
              style={{ cursor: 'pointer' }}
            >
              Productos
            </span>

            {/* Servicios */}
            <span
              className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
              onClick={handleServiciosClick}
              style={{ cursor: 'pointer' }}
            >
              Servicios
            </span>

            {/* Nosotros */}
            <span
              className={`nav-link ${activeSection === 'nosotros' ? 'active' : ''}`}
              onClick={handleNosotrosClick}
              style={{ cursor: 'pointer' }}
            >
              Nosotros
            </span>

            {/* Ensayos */}
            <span
              className={`nav-link ${activeSection === 'ensayos' ? 'active' : ''}`}
              onClick={handleEnsayosClick}
              style={{ cursor: 'pointer' }}
            >
              Ensayos
            </span>

            {/* Contacto */}
            <span
              className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}
              onClick={handleContactoClick}
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








