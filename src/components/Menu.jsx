import logo from '../assets/logo-texto.png';
import { useState, useEffect } from 'react';
import '../styles/Menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(''); // Estado para controlar las secciones activas

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // Función para manejar el desplazamiento suave hacia el inicio
    const handleInicioClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Desplazamiento suave
        });
        setActiveSection('inicio'); // Activamos 'Inicio'
        handleClose(); // Cerrar el menú móvil si está abierto
    };

    const handleProductosClick = () => {
        const productosSection = document.getElementById("productos");
        if (productosSection) {
            productosSection.scrollIntoView({ behavior: "smooth" });
        }
        setActiveSection('productos'); // Activamos 'Productos'
        handleClose();
    };

    const handleServiciosClick = () => {
        const serviciosSection = document.getElementById("servicios");
        if (serviciosSection) {
            serviciosSection.scrollIntoView({ behavior: "smooth" });
        }
        setActiveSection('servicios'); // Activamos 'Servicios'
        handleClose();
    };

    // Función que maneja el cambio de sección activa en función del scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sections = ['productos', 'servicios'];
        let currentSection = '';

        // Si estamos en la parte superior de la página, activamos "Inicio"
        if (scrollPosition === 0) {
            setActiveSection('inicio');
            return;
        }

        // Recorremos las secciones y verificamos si están visibles
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element && scrollPosition >= element.offsetTop - 100) {
                currentSection = section; // Marcamos la sección visible
            }
        });

        // Actualizamos la sección activa
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Añadir evento de scroll

        return () => {
            window.removeEventListener('scroll', handleScroll); // Limpiar el evento
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src={logo}
                            className='d-inline-block align-text-top'
                            width="230"
                            alt="Logo-tecnosustrato"
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
                        <span className="navbar-toggler-icon fs-1"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
                        <div className="navbar-nav text-center fs-4">
                            {/* Inicio */}
                            <span
                                className={`nav-link ${activeSection === "inicio" ? "active" : ""}`}
                                onClick={handleInicioClick}
                                style={{ cursor: "pointer" }}
                            >
                                Inicio
                            </span>

                            {/* Productos */}
                            <span
                                className={`nav-link ${activeSection === "productos" ? "active" : ""}`}
                                onClick={handleProductosClick}
                                style={{ cursor: "pointer" }}
                            >
                                Productos
                            </span>

                            {/* Servicios */}
                            <span
                                className={`nav-link ${activeSection === "servicios" ? "active" : ""}`}
                                onClick={handleServiciosClick}
                                style={{ cursor: "pointer" }}
                            >
                                Servicios
                            </span>
                            <span
                                className={`nav-link ${activeSection === "nosotros" ? "active" : ""}`}
                                onClick={handleServiciosClick}
                                style={{ cursor: "pointer" }}
                            >
                                Nosotros
                            </span>
                            <span
                                className={`nav-link ${activeSection === "ensayos" ? "active" : ""}`}
                                onClick={handleServiciosClick}
                                style={{ cursor: "pointer" }}
                            >
                                Ensayos
                            </span>
                            <span
                                className={`nav-link ${activeSection === "contacto" ? "active" : ""}`}
                                onClick={handleServiciosClick}
                                style={{ cursor: "pointer" }}
                            >
                                Contacto
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Menu;










