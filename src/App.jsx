import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import SecProd from './components/SecProd'; // Este componente mostrará la lista de productos
import Productos from './components/Productos'; // Este componente mostrará los detalles de un producto

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />  {/* Ruta para la página de inicio */}
        <Route path="/productos" element={<SecProd />} />  {/* Ruta para la lista de productos */}
        <Route path="/productos/:id" element={<Productos />} />  {/* Ruta para los detalles de un producto */}
        {/* Puedes agregar una ruta para página no encontrada en el futuro */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;