import React from 'react';
import logo from "../assets/logo-blanco.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';



const Servicios = () => {

  return (
    <>
      <footer className='fondo-footer'>
        <img src={logo} className='img-fluid d-block mx-auto' alt="" />
      </footer>

      <div className='container-fluid'>
        <div className='row fondo'> 
          <div className='col-lg-2'></div>         
          {/* PRIMERA COLUMNA */}
          <div className='col-lg-2 text-lg-start text-md-center text-center'>
            <h2 className="text-white fw-bold mb-4 mt-3">CONTACTO</h2>
            <p className="text-white">
              <FontAwesomeIcon icon={faWhatsapp} className='me-1 fs-4' /> (03492) 15668089
            </p>
            <p className="text-white">
              <FontAwesomeIcon icon={faWhatsapp} className='me-1 fs-4' /> (03492) 532197
            </p>
            <p className="text-white">
              <FontAwesomeIcon icon={faEnvelope} className='me-1 fs-4' />info@tecnosustrato.com.ar
            </p>
            <p className='text-white'>
              <a href="https://forms.gle/DGhYTqEA6FbgbQbPA" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBriefcase} className='me-1 fs-4' /> Trabajá con nosotros
              </a>
            </p>
          </div>

          {/* SEGUNDA COLUMNA */}
          <div className='col-lg-4 text-center'>
            <h2 className="text-white fw-bold mb-4 mt-3">NUESTRAS REDES</h2>
            <div className='d-flex justify-content-center'>
              <a href="https://www.instagram.com/tecnosustrato/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className='social-icono me-3 fa-4x' />
              </a>
              <a href="https://www.facebook.com/people/Tecnosustrato/100092585825860/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className='social-icono me-3 fa-4x' />
              </a>
              <a href="https://www.youtube.com/@tecnosustrato" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className='social-icono fa-4x' />
              </a>
            </div>
          </div>
          {/* TERCERA COLUMNA */}
          <div className='col-lg-2 text-lg-start text-md-center text-center'>
            <h2 className="text-white fw-bold mb-4 mt-3">DOMICILIO</h2>
            <p className="text-white">
              <FontAwesomeIcon icon={faLocationDot} className='fs-3' /> Área de Investigación y Desarrollo<br />
              Julio A. Roca 374, Lehmann, Santa Fe
            </p>
          </div>
          {/* Copyright */}
        <h3 className="text-center text-white fw-bold mt-5">
          © 2021-2024 TecnoSustrato - Todos los derechos reservados
        </h3>
        </div>        
      </div>

    </>
  );
}

export default Servicios;