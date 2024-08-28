import React, { useState, useEffect } from 'react';

const Header = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <header className='img-fluid mx-auto d-block'>
            <div className='borde'>
                <h1 className={`fw-bold ${visible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}>
                    SOLUCIONES BIOTECNOLÓGICAS APLICADAS AL <span className='text-orange'>AGRO</span>
                </h1>
            </div>
        </header>
    );
}

export default Header;