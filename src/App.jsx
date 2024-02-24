import "./App.css";
import Inicio from "./componentes/inicio/inicio";
import Producto from "./componentes/productos/productos";
import Nosotros from "./componentes/nosotros/nosotros";
import Contactanos from "./componentes/contactanos/contactanos";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componentes/navbar/navbar";
import Footer from "./componentes/footer/footer";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
