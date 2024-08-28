import logo from '../assets/logo-texto.png'
/* import { Link } from "react-router-dom" */

const Menu = () => {
    const handleInicioClick = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">
                        <img src={logo}
                        className='d-inline-block align-text-top'
                        width="230"                        
                        alt="Logo-tecnosustrato" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fs-1"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-end fs-4">
                            <a className="nav-link " aria-current="page" to="/" onClick={handleInicioClick}>Inicio</a>
                            <a className="nav-link" to="/">Nosotros</a>
                            <a className="nav-link" to="/">¿Qué hacemos?</a>
                            
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Menu