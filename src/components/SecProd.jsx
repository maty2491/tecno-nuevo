import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "../styles/SecProd.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const SecProd = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    fetch("/datos.json")
      .then((response) => response.json())
      .then((data) => {
        // Si hay menos productos que las diapositivas necesarias, ajustamos slidesPerView
        const requiredSlides = slidesPerView * 2;
        if (data.length < requiredSlides) {
          setSlidesPerView(Math.max(1, Math.floor(data.length / 2)));
        }
        setProducts(data);
      })
      .catch((error) => console.error("Error al cargar los datos", error));
  }, [slidesPerView]);

  const handleViewProduct = (id) => {
    navigate(`/productos/${id}`);
  };

  return (
    <div className="container secprod-swiper mt-5">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={products.length >= slidesPerView * 2} // Solo habilitar loop si hay suficientes productos
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 2,
          depth: 100,
          modifier: 3.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container secprod-swiper"
        slidesPerView={slidesPerView}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: slidesPerView, // Ajuste dinámico de acuerdo con el tamaño de la pantalla
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card secprod-card shadow-lg rounded-4 mt-5 mb-5">
              <div className="card-img-wrapper">
                <img
                  src={product.image}
                  className="secprod-card-img-top rounded-top img-fluid"
                  alt={`Imagen de ${product.title}`}
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <button
                  className="btn-plus"
                  onClick={() => handleViewProduct(product.id)}
                >
                  +
                </button>
              </div>
              <div className="secprod-card-body">
                <h5 className="secprod-card-title">{product.title}</h5>
                <p className="secprod-card-text">{product.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="linea-separadora"></div>
    </div>
  );
};

export default SecProd;

