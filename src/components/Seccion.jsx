import React from 'react';

const Seccion = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div id="carouselExampleIndicators" className="carousel slide p-2 mt-5" data-bs-ride="carousel" data-bs-interval="4000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-2'></div>
                                        <div className='col-sm-8 mt-5'>
                                            <h3 className='text-center'>
                                                Queremos acompañar al productor hacia un nuevo paradigma productivo <span className='fw-bold'>biológicamente sustentable.</span> Estamos juntos en esto. <span className='text-orange fw-bold'>¿Te sumás?</span>
                                            </h3>
                                            <div className='text-center mt-4'>
                                                <button className='btn btn-success'>CONTACTANOS</button>
                                            </div>
                                        </div>
                                        <div className='col-sm-2'></div>
                                        <div className="linea-separadora"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-2'></div>
                                        <div className='col-sm-8 mt-5'>
                                            <h3 className='text-center'>
                                                Desarrollamos un sistema integral de productos y servicios para la <span className='fw-bold'>bioregeneración del suelo</span> y el manejo biológico de los cultivos.
                                            </h3>
                                            <div className='text-center mt-5'>
                                                <button className='btn btn-success'>VER PRODUCTOS Y SERVICIOS</button>
                                            </div>
                                        </div>
                                        <div className='col-sm-2'></div>
                                        <div className="linea-separadora"></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Seccion;