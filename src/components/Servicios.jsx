import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/SecServ.css"
import ParallaxServ from "../components/ParallaxServ";
import img from "../assets/20.png"
import logo from "../assets/teceos.png"

const Servicios = () => {
    const { id } = useParams();
    const [servicio, setServicio] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/datos.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar los datos");
                }
                return response.json();
            })
            .then((data) => {
                const foundService = data.servicios.find((s) => s.id === parseInt(id));
                if (foundService) {
                    setServicio(foundService);
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true));
    }, [id]);

    if (error) {
        return <div>Servicio no encontrado</div>;
    }

    if (!servicio) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <ParallaxServ />
            {/* Sección principal con título y descripción */}
            <div
                className="container mt-5 d-flex flex-column justify-content-center align-items-center text-center"

            >
                {/* Título centrado */}
                <h1
                    className="fw-bold text-uppercase text-orange"
                    style={{
                        fontSize: '4rem', // Tamaño del texto
                        color: '#ff8945', // Color principal
                        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)', // Sombra sutil para resaltar
                    }}
                >
                    {servicio.title}
                </h1>

                {/* Primer párrafo centrado */}
                <h2
                    className="mt-5 text-start"
                    style={{
                        color: '#333', // Color del texto
                        maxWidth: '900px', // Limita el ancho del párrafo
                        marginBottom: '100px'
                    }}
                >
                    {servicio.otherDescription.paragraph1}
                </h2>
                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <img src={logo} alt="" />
                    </div>

                </div>
            </div>

            {/* Sección con dos columnas: Imagen a la izquierda y párrafos a la derecha */}
<div className="container mt-5 mb-5">
    <div className="row align-items-center text-center text-lg-start">
        {/* Columna con la imagen */}
        <div className="col-lg-4 col-md-12 col-sm-12 mb-4 mb-lg-0">
            <img
                src={servicio.img3}
                alt={`Imagen de ${servicio.title}`}
                className="img-fluid rounded-5 mx-auto d-block"
            />
        </div>

        {/* Columna con los párrafos */}
        <div className="col-lg-8">
            <ul className="list-unstyled">
                <li className="logo-item mb-5 d-flex align-items-center justify-content-center justify-content-lg-start">
                    <img src={img} className="logo-img me-3" alt="" />
                    <span>{servicio.otherDescription.paragraph2}</span>
                </li>
                <li className="logo-item d-flex align-items-center justify-content-center justify-content-lg-start">
                    <img src={img} className="logo-img me-3" alt="" />
                    <span>{servicio.otherDescription.paragraph3}</span>
                </li>
            </ul>
            <div className="text-center mt-4">
                <h3 className="fw-bold mt-5 mb-4">
                    Toda nuestra tecnología <br />
                    al servicio de tu producción
                </h3>
                <button className="btn btn-success">SOLICITAR COTIZACIÓN</button>
            </div>
        </div>
    </div>
</div>

        </>
    );
};
export default Servicios;

