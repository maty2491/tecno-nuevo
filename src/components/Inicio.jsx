
import FooterB from './Footer';
import Seccion from './Seccion';
import Header from './Header';
import Carrusel from './Carrusel';
import Espaciado from './Espaciado';
import Parallax from './Parallax';
import Diferencias from './Diferencias';
import SecProd from './SecProd';
import ParallaxServ from './ParallaxServ';
import SecServ from './SecServ';


const Inicio = () => {
  return (
    <>        
      <Header />
      <Seccion />
      <Espaciado />
      <Carrusel />
      <Espaciado />
      <Diferencias />
      <Espaciado />
      <Parallax />
      <SecProd />
      {/* <Productos /> */}
      <Espaciado />
      <ParallaxServ/>
      <SecServ/>
      <Espaciado />
      <FooterB /> 
    </>
  );
}

export default Inicio;
