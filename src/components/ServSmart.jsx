import ParallaxServ from './ParallaxServ'
import logo from '../assets/logo-texto.png';
import suelo from '../assets/5.png';
import '../styles/Servicios.css'
import { useEffect, useRef } from 'react'

const ServSmart = () => {
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
                <div className="fondo-servsmart">
                    <div className="container">
                        <h1 className='text-orange fw-bold text-center mb-5 mt-5'>SMART SOIL</h1>
                        <div className='text-center'>
                            <h2 className=' text-start mx-auto text-box mb-5'>
                                Desarrollamos un sensor de suelo para poder medir en tiempo real diversas variables que nos ayudan a analizar el estado de conservación del suelo.
                            </h2>
                        </div>
                        <div className='row '>
                            <div className='col-12 mb-4'>
                                <img src={logo} alt="Logo" className='img-fluid d-block mx-auto mb-5' width="404" />
                            </div>
                            <div className='col-lg-4 mb-4 '>
                                <img src={suelo} alt="" className='img-fluid d-block mx-auto rounded-5' />

                            </div>
                            <div className='col-lg-6'>
                                <h3 className='fondo-b text-center fw-bold'>INFORMACIÓN QUE RELEVA EL SENSOR:</h3>
                                <div className='row mt-4'>
                                    <div className='col-lg-6'>
                                        <ul className='mb-4'>
                                            <li>Huemedad</li>
                                            <li>Conductividad eléctrica</li>
                                            <li>Temperatura </li>
                                            <li>Nitrógeno total</li>
                                            <li>Fósforo total</li>
                                            <li>Potasio total</li>
                                            <li>PH</li>
                                            <li>CO2</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h3 className="mb-4">
                                            El sensor se conecta a través de WiFi con un smartphone o tablet que disponga de la aplicación Android o un navegador de internet para registrar y descargar las mediciones in situ
                                        </h3>
                                    </div>
                                </div>
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
    )
}

export default ServSmart