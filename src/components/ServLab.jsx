
import lab from '../assets/21.png';
import logo from '../assets/logo-texto.png';
import '../styles/Servicios.css'
import ParallaxServ from './ParallaxServ'
import { useEffect, useRef } from 'react'

const ServLab = () => {
    const servicioRef = useRef(null);

    // Desplazarse al inicio del componente cuando se cargue la página
    useEffect(() => {
        if (servicioRef.current) {
            servicioRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <div ref={servicioRef}>
                <ParallaxServ />
                <div className="fondo-servlab">
                    <div className="container">
                        <h1 className='text-orange fw-bold text-center mb-5 mt-5'>LABORATORIO CUALITATIVO</h1>
                        <div className='text-center'>
                            <h2 className=' text-start mx-auto text-box mb-5'>
                                Contamos con un laboratorio en donde realizamos análisis de nutricionales básicos disponibles (NPK), propiedades fisicoquímicas (pH, CE , STD), respiración del suelo, poder germinativo y cromatografías de suelo y plantas.
                            </h2>
                        </div>
                        <div className='row '>
                            <div className='col-12 mb-4'>
                                <img src={logo} alt="Logo" className='img-fluid d-block mx-auto mb-5' width="404" />
                            </div>
                            <div className='col-lg-4 mb-4 '>
                                <img src={lab} alt="" className='img-fluid d-block mx-auto rounded-5' />

                            </div>
                            <div className='col-lg-6'>
                                <ul className="mb-4">
                                    <li>Nos posibilita interpretar las condiciones biológicas y físicas del sustrato de una manera cualitativa, permitiéndonos establecer la salud de un suelo y poder reconocer si el suelo está bien estructurado, si los minerales presentes están disponibles para las plantas y si existe una buena integración entre las diferentes fases del suelo que lo hacen fértil.</li>
                                    <li>Permite <span className='fw-bold'>evaluar la capacidad de las semillas</span> para germinar y convertirse en plantas viables (PG y vigor). Es muy importante para determinar la calidad de las semillas y planificar la siembra de manera más efectiva.</li>
                                    <li>A través de cromatografías vegetales podemos analizar diferentes componentes de las plantas como: clorofilas, carotenoides, alcaloides, flavonoides y terpenos, entre otros. Estos compuestos indican el nivel nutricional y la sanidad de las plantas, permitiéndo hacer un seguimiento del desarrollo de los cultivos.</li>
                                </ul>
                                <div className="text-center mt-4">
                                    <h3 className="fw-bold mt-5 mb-4">
                                        Toda nuestra tecnología <br />
                                        al servicio de tu producción
                                    </h3>
                                    <button className="btn btn-success mb-5 ">SOLICITAR COTIZACIÓN</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServLab;

