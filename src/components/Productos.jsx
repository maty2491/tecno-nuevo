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

        <h1 className="text-center fw-bold">{product.title}</h1>

        <div className="row">
          
          <div className="col-lg-4 mt-5 text-start">
            <div className="full-description mt-5">
              {product.fullDescription.map((desc, index) => (
                <h2 key={index}>{desc}</h2>
              ))}
            </div>
          </div>
          <div className="col-lg-8">
            <img
              src={product.image}
              alt={`Imagen de ${product.title}`}
              className="img-fluid d-block mx-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Footer con puntos */}
        <div className="row mt-5">
          <div className="col-lg-6">           
              {product.footer.pointsDescription.map((point, index) => (
                <ul>
                  <li key={index}>{point}</li>
                </ul>
              ))}            
          </div>

          <div className="col-lg-6">           
              {product.footer.otherPoints.map((point, index) => (
                <ul>
                  <li key={index}>{point}</li>
                </ul>
              ))}
            
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
