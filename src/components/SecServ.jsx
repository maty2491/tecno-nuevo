import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SecServ.css';

const SecServ = () => {
  const [servicios, setServicios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/datos.json")
      .then((response) => response.json())        
      .then((data) => {
        const foundServices = data.servicios; // Asegúrate de acceder a 'servicios'
        if (foundServices && foundServices.length > 0) {
          setServicios(foundServices); // Guardamos los servicios en el estado
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleButtonClick = (id) => {
    switch (id) {
      case 1:
        navigate("/servicios/gabinete");
        break;
      case 2:
        navigate("/servicios/laboratorio");
        break;
      case 3:
        navigate("/servicios/smart");
        break;
      case 4:
        navigate("/servicios/suelo");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <div className="container" >
        <div className="row mb-5 mt-5">
          {servicios.length > 0 ? (
            servicios.map((card) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-5" key={card.id}>
                <div className="custom-card-image">
                  <img src={card.img1} alt={card.title} />
                  <button
                    className="btn-plus-top-right"
                    onClick={() => handleButtonClick(card.id)} // Pasar el id del servicio
                  >
                    +
                  </button>
                </div>
                <div className="custom-card-text">
                  <div className="card-content">
                    <h4 className="fw-bold">{card.title}</h4>
                    <h5>{card.description}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron servicios disponibles.</p>
          )}
        </div>
      </div>
      <div className="linea-separadora"></div>
    </>
  );
};

export default SecServ;

