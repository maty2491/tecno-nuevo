import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import SecProd from './components/SecProd'; // Lista de productos
import Productos from './components/Productos'; // Detalles de productos
import SecServ from './components/SecServ'; // Lista de servicios
import Servicios from './components/Servicios'; // Detalles de servicios

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* Página de inicio */}
        <Route path="/productos" element={<SecProd />} /> {/* Lista de productos */}
        <Route path="/productos/:id" element={<Productos />} /> {/* Detalles de productos */}
        <Route path="/servicios" element={<SecServ />} /> {/* Lista de servicios */}
        <Route path="/servicios/:id" element={<Servicios />} /> {/* Detalles de servicios */}
        {/* Ruta para página no encontrada (opcional en el futuro) */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
