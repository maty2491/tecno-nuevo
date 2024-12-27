import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bannerImage from '../assets/3.png';
import Espaciado from "../components/Espaciado"
import "../styles/Productos.css";

const Productos = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
        const foundProduct = data.productos.find((p) => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return <div>Producto no encontrado</div>;
  }

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div>
        {/* Banner */}
        <div className="productos-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className="productos-banner-text">
            <h1 className="fw-bold">NUESTROS <span className='text-orange'>PRODUCTOS</span></h1>
          </div>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="container mt-5">
        {/* Título del producto */}
        <h1 className="text-center fw-bold">{product.title}</h1>

        <div className="row align-items-center">
          {/* Columna para la descripción completa */}

          <div className="col-lg-6">
            <div className="full-description mt-5">
              {product.fullDescription.map((desc, index) => (
                <h5 key={index}>{desc}</h5>
              ))}
            </div>
          </div>

          {/* Columna para la imagen del producto */}
          <div className="col-lg-6">
            <img
              src={product.image}
              alt={`Imagen de ${product.title}`}
              className="img-fluid rounded"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>


        {/* Footer con puntos */}
        <div className="row mt-5">
          <div className="col-lg-6">
            <h5>
              {product.footer.pointsDescription.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </h5>
          </div>

          <div className="col-lg-6">
            <h5>
              {product.footer.otherPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </h5>
          </div>
        </div>
        <div className='text-center mt-4'>
          <button className='btn btn-success'>SOLICITAR COTIZACIÓN</button>
        </div>
        <div className="linea-separadora"></div>
        <Espaciado />
      </div >
    </>
  );
};

export default Productos;
