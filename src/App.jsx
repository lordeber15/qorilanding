import "./App.css";
import Inicio from "./componentes/inicio/inicio";
import Producto from "./componentes/productos/productos";
import Nosotros from "./componentes/nosotros/nosotros";
import Contactanos from "./componentes/contactanos/contactanos";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componentes/navbar/navbar";
import Footer from "./componentes/footer/footer";
import Misionvision  from "./componentes/misionvision/misionvision";
import Valores from "./componentes/valores/valores"
import Politicas from "./componentes/politicas/politicas"
import Calidad from "./componentes/calidad/calidad"
function App() {
  return (
    <div>
      {/* {locationNow.pathname !== "/" && <NavBar />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/producto" element={<Producto />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/contactanos" element={<Contactanos />}></Route>
        <Route path="/misionvision" element={<Misionvision />}></Route>
        <Route path="/valores" element={<Valores />}></Route>
        <Route path="/politicas" element={<Politicas />}></Route>
        <Route path="/gestiondecalidad" element={<Calidad />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
