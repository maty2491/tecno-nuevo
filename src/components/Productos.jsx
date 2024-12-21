import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        const foundProduct = data.find((p) => p.id === parseInt(id));
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
    <div className="container mt-5">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={`Imagen de ${product.title}`}
        className="img-fluid rounded"
        style={{ maxHeight: "400px", objectFit: "contain" }}
      />
      <p className="mt-3">{product.fullDescription}</p>
    </div>
  );
};

export default Productos;
