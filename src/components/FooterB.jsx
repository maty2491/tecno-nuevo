import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


const FooterB = () => {
    return (
        <footer className="img-footer container-fluid" id="contacto">
            <div className="container mt-5">
                <div className="row text-center text-lg-start mb-5 ">
                    {/* Primera columna: Teléfonos, correo y "Trabajá con nosotros" */}
                    <div className="col-lg-4 mb-4 mt-2">
                        <h2 className="text-white fw-bold mb-4">Contacto</h2>
                        <p className="text-white fs-3">
                            <FontAwesomeIcon icon={faWhatsapp} className='me-2 fs-3' /> (03492) 15668089
                        </p>
                        <p className="text-white fs-3">
                            <FontAwesomeIcon icon={faPhone} className='me-2 fs-3' />(03492) 532197
                        </p>
                        <p className="text-white fs-3">
                            <FontAwesomeIcon icon={faEnvelope} className='me-2 fs-3' /> info@tecnosustrato.com.ar
                        </p>
                        <p className='text-white fs-3'>
                            <a href="https://forms.gle/DGhYTqEA6FbgbQbPA" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBriefcase} className='me-2 fs-3' />Trabajá con nosotros
                            </a>

                        </p>
                    </div>

                    {/* Segunda columna: Iconos de redes sociales */}
                    <div className="col-lg-4 mt-2 ">
                        <h2 className="text-white fw-bold mb-4">Nuestras redes</h2>
                        <div className='d-flex justify-content-center align-items-center'>
                            <a href="https://www.instagram.com/tecnosustrato/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className='social-icono me-5 fa-4x' />
                            </a>
                            <a href="https://www.facebook.com/people/Tecnosustrato/100092585825860/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className='social-icono me-5 fa-4x' />
                            </a>
                            <a href="https://www.youtube.com/@tecnosustrato" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} className='social-icono me-5 fa-4x' />
                            </a>
                        </div>
                    </div>

                    {/* Tercera columna: Domicilios */}
                    <div className="col-lg-4 mb-4 mt-3">
                        <h2 className="text-white fw-bold  mb-4">Domicilios</h2>
                        <p className="text-white fs-3">
                            <FontAwesomeIcon icon={faLocationDot} className='fs-3' /> Area de Investigación y Desarrollo<br />
                            Julio A. Roca 374, Lehmann, Santa Fe
                        </p>
                        <p className="text-white fs-3">
                            <FontAwesomeIcon icon={faLocationDot} className='fs-3' /> Departamento Comercial, Administración y Finanzas<br />
                            Dorrego 73, Rafaela, Santa Fe
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-center text-white fw-bold mt-5 fs-4">
                    © 2021-2024 TecnoSustrato - Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
};

export default FooterB;