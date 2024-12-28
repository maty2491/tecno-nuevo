import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import SecProd from './components/SecProd'; // Lista de productos
import Productos from './components/Productos'; // Detalles de productos
import SecServ from './components/SecServ'; // Lista de servicios
import ServGab from './components/ServGab'; // Gabinete GIS
import ServLab from './components/ServLab'; // Laboratorio Cualitativo
import ServSmart from './components/ServSmart'; // Smart Soil
import ServSuelo from './components/ServSuelo'; // Sistematización de suelos

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* Página de inicio */}
        <Route path="/productos" element={<SecProd />} /> {/* Lista de productos */}
        <Route path="/productos/:id" element={<Productos />} /> {/* Detalles de productos */}
        <Route path="/servicios" element={<SecServ />} /> {/* Lista de servicios */}
        <Route path="/servicios/gabinete" element={<ServGab />} /> {/* Gabinete GIS */}
        <Route path="/servicios/laboratorio" element={<ServLab />} /> {/* Laboratorio Cualitativo */}
        <Route path="/servicios/smart" element={<ServSmart />} /> {/* Smart Soil */}
        <Route path="/servicios/suelo" element={<ServSuelo />} /> {/* Sistematización de suelos */}
        {/* Ruta para página no encontrada (opcional en el futuro) */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

