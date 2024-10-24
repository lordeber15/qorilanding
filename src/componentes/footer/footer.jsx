import style from "./footer.module.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import imgfooter from "../../assets/footerimagen-min.webp";
import facebook from "../../assets/facebook.svg";
import twiterx from "../../assets/twitterx.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";
function footer() {
  const scrolltop = (e)=>{
    console.log(e.targe.value)
  }
  return (
    <div className={style.footer}>
      <img src={imgfooter} className={style.imagefooter} />
      <div className={style.footergeneral}>
        <div>
          <img src={logo} className={style.logofooter} />
        </div>
        <div>
          <div className={style.titlefooter}>Nuestra Pagina</div>
          <Link to="/"  onClick={scrolltop}>
            <div className={style.btnfooter}>Inicio</div>
          </Link>
          <Link to="/nosotros" onClick={scrolltop}>
            <div className={style.btnfooter}>Nosotros</div>
          </Link>
          <Link to="/producto" onClick={scrolltop}>
            <div className={style.btnfooter}>Productos</div>
          </Link>
          <Link to="/contactanos" onClick={scrolltop}>
            <div className={style.btnfooter}>Contacto</div>
          </Link>
          <Link to="/misionvision" onClick={scrolltop}>
            <div className={style.btnfooter}>Mision y Vision</div>
          </Link>
          <Link to="/gestiondecalidad" onClick={scrolltop}>
            <div className={style.btnfooter}>Gestion de Calidad</div>
          </Link>
        </div>
        <div>
          <div className={style.titlefooter}>Link Extra</div>

          <Link to="/politicas" onClick={scrolltop} >
            <div className={style.btnfooter}>Politicas</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Preguntas Frecuentes</div>
          </Link>
          <Link to={"https://wa.link/acpe5d"}>
            <div className={style.btnfooter}>Atencion al Cliente</div>
          </Link>
          <Link to="/contactanos" onClick={scrolltop}>
            <div className={style.btnfooter}>Informacion de Contacto</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Terminos y condiciones</div>
          </Link>
          <Link to="/valores" onClick={scrolltop}>
            <div className={style.btnfooter}>Valores</div>
          </Link>
        </div>
        <div>
          <div className={style.titlefooter}>Contacto</div>
          <Link to={"mailto:qorifood@qorifood"}>
            <div className={style.correofooter}>Qorifood@qorifoodss.com</div>
          </Link>
          <Link to={"https://wa.link/acpe5d"}>
            <div className={style.numerofooter}>+51 967 616 881</div>
          </Link>
          <Link>
            <div className={style.numerofooter}>+51 66 614604</div>
          </Link>
          <div className={style.direcfooter}>
            Jr. 24 de Junio N 164 San Juan Bautista
          </div>
        </div>
      </div>
      <div className={style.copy}>
        <span>© 2024 Qurifood | All Rights Reserved</span>
        <ul className={style.redessociales}>
          <Link>
            <li>
              <img className={style.redes} src={whatsapp} />
            </li>
          </Link>
          <Link>
            <li>
              <img className={style.redes} src={facebook} />
            </li>
          </Link>
          <Link>
            <li>
              <img className={style.redes} src={twiterx} />
            </li>
          </Link>
          <Link>
            <li>
              <img className={style.redes} src={instagram} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default footer;
