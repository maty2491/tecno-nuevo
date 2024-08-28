import React from 'react';
import logo from "../assets/logo-blanco.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Servicios = () => {

  return (
    <>

      <footer className='fondo-footer'>
        <img src={logo} className='img-fluid d-block mx-auto' alt="" />
      </footer>

      <div className='container-fluid'>
        <div className='row text-center fondo'>
          <div className='col-lg-4'></div>
          <div className='col-lg-4'>

            <h3>Menú</h3>
            <h3>Home</h3>
            <h3>Nosotros</h3>
            <h3>¿Qué hacemos?</h3>

          </div>
          <div className='col-lg-4'></div>
          <div className='row'>
            <div className='col-lg-12'>
            <h2 className='mt-5 mb-4 fw-bold'>CONTACTO</h2>
            <h2 className='mb-4'>info@tecnosustrato.com.ar</h2>            
            <FontAwesomeIcon icon={faInstagram} className='icono'/>
            <FontAwesomeIcon icon={faLinkedin} className='icono'/>

            </div>
           

          </div>



        </div>


      </div>

    </>
  );
}

export default Servicios;