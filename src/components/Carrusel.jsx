import React from 'react';
import SemiBg from './SemiBg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../assets/res-1.png';
import slide_image_2 from '../assets/res-2.png';
import slide_image_3 from '../assets/res-3.png';
import slide_image_4 from '../assets/res-3.png'; // Cambié el nombre de la imagen para evitar duplicación


const Carrusel = () => {
  return (
    <>
    <div className="container-2 mt-5">
   <SemiBg />
      <div className="">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          spaceBetween={20}         
          coverflowEffect={{
            rotate: 0,
            stretch: 2,
            depth: 100,
            modifier: 3.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}

          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className='slide-contenido'>
              <h2 className='slide-titulo'>
                Lo que nos <span className="text-orange">diferencia</span>
              </h2>
              <img src={slide_image_1} className="slide-imagen" alt="Slide 1" />
              <h3 className='slide-descripcion'>La gelificación es un desarrollo patentado de <span className='fw-bold'>TECNOSUSTRATO</span> </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide-contenido'>
              <h2 className='slide-titulo'>
                Nuestros <span className="text-orange">productos</span>
              </h2>
              <img src={slide_image_2} className="slide-imagen" alt="Slide 2" />
              <h3 className='slide-descripcion'>Nuestros bioinsumos <span className='text-orange fw-bold'>reactivan la vida</span> del suelo y evitan el <span className='fw-bold'>estrés de la planta</span>.</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide-contenido'>
              <h3 className='mb-5'>
                Nuestros <span className="text-orange">servicios</span>
              </h3>
              <img src={slide_image_3} className="slide-imagen" alt="Slide 3" />
              <h3 className='slide-descripcion'>Detectamos problemas, <span className='text-orange fw-bold'>diseñamos soluciones a medida</span> y optimizamos <span className='fw-bold'>toda la cadena de valor</span>.</h3>
            </div>
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        <div className='linea-separadora'></div>
        </Swiper>
      </div>
    </div>
</>
  );
};

export default Carrusel;