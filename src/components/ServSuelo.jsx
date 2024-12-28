import radar from '../assets/radar.png';
import logo from '../assets/logo-texto.png';
import '../styles/Servicios.css'
import ParallaxServ from './ParallaxServ'
import { useEffect, useRef } from 'react'

const ServSuelo = () => {
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
                <div className="fondo-sistema">
                    <div className="container">
                        <h1 className='text-orange fw-bold text-center mb-5 mt-5'>SISTEMATIZACIÓN DE SUELOS</h1>
                        <div className='text-center'>
                            <h2 className=' text-start mx-auto text-box mb-5'>
                                Las curvas de nivel son líneas que conectan puntos de igual altitud y se utilizan para determinar la forma y la inclinación del terreno.
                                Desarrollamos curvas de nivel en el campo para ayudar a prevenir la erosión del suelo y a gestionar de manera más eficiente el agua y la humedad.
                            </h2>
                        </div>
                        <div className='row '>
                            <div className='col-12 mb-4'>
                                <img src={logo} alt="Logo" className='img-fluid d-block mx-auto mb-5' width="404" />
                            </div>
                            <div className='col-lg-12 mb-4 '>
                                <img src={radar} alt="" className='img-fluid d-block mx-auto rounded-5' />

                            </div>
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

        </>
    )
}

export default ServSuelo