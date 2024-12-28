import '../styles/Servicios.css'
import logo from "../assets/teceos.png"
import satelite from "../assets/7.png"
import ParallaxServ from './ParallaxServ'
import { useEffect, useRef } from 'react'

const ServGab = () => {
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
            <div  className='fondo-servgab mt-5 '>
                <div className='container margin-b'>
                    <h1 className='text-orange fw-bold text-center mb-5'>GABINETE GIS</h1>
                    <div className='text-center'>
                        <h2 className=' text-start mx-auto text-box mb-5'>
                            En una <span className='fw-bold'>alianza con EOS Data Analytics</span>, nuestro servicio GIS (Sistema de Información Geográfica, por sus siglas en inglés) es una plataforma que permite el acceso y la gestión de <span className='fw-bold'>datos geoespaciales</span>.
                        </h2>
                    </div>

                    <div className='row '>
                        <div className='col-12 mb-4'>
                            <img src={logo} alt="Logo" className='img-fluid d-block mx-auto mb-5' />
                        </div>
                        <div className='col-lg-4 mb-4'>
                            <img src={satelite} alt="" className='img-fluid d-block mx-auto rounded-5' />

                        </div>
                        <div className='col-lg-6'>
                            <ul className="mb-4">
                                <li>Utilizamos tecnología GIS para gestionar, analizar y visualizar datos que están relacionados con las condiciones de los suelos, sus bioambientes y los niveles de compactación. </li>
                                <li>También ofrecemos un servicio de seguimiento de cultivos durante el desarrollo de la campaña. Elaboramos reportes quincenales que nos permiten realizar el monitoreo permanente del estado del cultivo, mediante el análisis de variables basados en Índices de Vegetación en sus diferentes parámetros.</li>
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
    )
}

export default ServGab