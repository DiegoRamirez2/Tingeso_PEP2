import './App.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import AcopioUploadComponent from './components/AcopioUploadComponent';
import AcopioInformationComponent from './components/AcopioInformationComponent';
import ProveedorComponent from './components/ProveedorComponent';
import LaboratorioUploadComponent from './components/LaboratorioUploadComponent';
import LaboratorioInformationComponent from './components/LaboratorioInformationComponent';
import CalcularPagosComponent from './components/CalcularPagosComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/subir-acopio" element={<AcopioUploadComponent />} />
          <Route path="/info-acopio" element={<AcopioInformationComponent />} />
          <Route path="/lista-proveedores" element={<ProveedorComponent />} />
          <Route path="/subir-laboratorio" element={<LaboratorioUploadComponent />} />
          <Route path="/info-laboratorio" element={<LaboratorioInformationComponent />} />
          <Route path="/calcular-pagos" element={<CalcularPagosComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
