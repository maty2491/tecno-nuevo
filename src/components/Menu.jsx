import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-texto.png';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Función para manejar la navegación y desplazamiento suave
  const handleSectionClick = (section) => {
    navigate('/');  // Navegar a la página de inicio sin recargar
    setActiveSection(section);
    // Después de la navegación, desplazarse suavemente a la sección con offset
    setTimeout(() => {
      const target = document.querySelector(`#${section}`);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,  // Ajuste de desplazamiento (100px arriba de la sección)
          behavior: 'smooth',
        });
      }
    }, 100); // Pequeño retraso para asegurar que la navegación se complete antes del desplazamiento
    handleClose();
  };
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
            <span
              className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
              onClick={() => handleSectionClick('inicio')}
              style={{ cursor: 'pointer' }}
            >
              Inicio
            </span>
            <span
              className={`nav-link ${activeSection === 'productos' ? 'active' : ''}`}
              onClick={() => handleSectionClick('productos')}
              style={{ cursor: 'pointer' }}
            >
              Productos
            </span>
            <span
              className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
              onClick={() => handleSectionClick('servicios')}
              style={{ cursor: 'pointer' }}
            >
              Servicios
            </span>
            <span
              className={`nav-link ${activeSection === 'nosotros' ? 'active' : ''}`}
              onClick={() => handleSectionClick('nosotros')}
              style={{ cursor: 'pointer' }}
            >
              Nosotros
            </span>
            <span
              className={`nav-link ${activeSection === 'ensayos' ? 'active' : ''}`}
              onClick={() => handleSectionClick('ensayos')}
              style={{ cursor: 'pointer' }}
            >
              Ensayos
            </span>
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
