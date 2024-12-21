import card1 from '../assets/c-2.png';
import card2 from '../assets/c-3.png';
import card3 from '../assets/c-5.jpg';
import card4 from '../assets/c-4.png';

const Diferencias = () => {
    return (
        <>
            <div className='container'>
                <div className='row mb-5'>
                    <h2 className='text-center mt-5 mb-5'>
                        Lo que nos <span className='text-orange'>diferencia</span>
                    </h2>

                    {/* Cards ajustadas para pantallas grandes, medianas y pequeñas */}
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-5'>
                        <div className='custom-card-image'>
                            <div className="overlay-text">DOSIS MÍNIMAS</div>
                            <img src={card1} alt="Imagen de ejemplo" />
                        </div>
                        <div className='custom-card-text'>
                            <div className='card-content'>
                                <h5>
                                    Por el alto grado de concentración en el formulado,{' '}
                                    <span className='fw-bold'>se necesitan dosis mínimas</span> de
                                    aplicación.
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12 mb-5'>
                        <div className='custom-card-image'>
                            <div className="overlay-text">AHORRO</div>
                            <img src={card2} alt="Imagen de ejemplo" />
                        </div>
                        <div className='custom-card-text'>
                            <div className='card-content'>
                                <h5>
                                    Con la prestación en gel,{' '}
                                    <span className='fw-bold'>se ahorra en transporte, almacenamiento y logística</span>
                                    .
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12 mb-5'>
                        <div className='custom-card-image'>
                            <div className="overlay-text">PRACTICIDAD</div>
                            <img src={card3} alt="Imagen de ejemplo" />
                        </div>
                        <div className='custom-card-text'>
                            <div className='card-content'>
                                <h5>
                                    Por el alto grado de concentración en el formulado,{' '}
                                    <span className='fw-bold'>se necesitan dosis mínimas</span> de
                                    aplicación.
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12 mb-5'>
                        <div className='custom-card-image'>
                            <div className="overlay-text">SALUD</div>
                            <img src={card4} alt="Imagen de ejemplo" />
                        </div>
                        <div className='custom-card-text'>
                            <div className='card-content'>
                                <h5>
                                    Por el alto grado de concentración en el formulado,{' '}
                                    <span className='fw-bold'>se necesitan dosis mínimas</span> de
                                    aplicación.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='linea-separadora'></div>
        </>
    );
};

export default Diferencias;

