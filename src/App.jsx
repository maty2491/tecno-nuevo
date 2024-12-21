import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Productos from './components/Productos';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />       
        <Route path="/productos/:id" element={<Productos />} />
        {/* Ejemplo de ruta para página no encontrada */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;