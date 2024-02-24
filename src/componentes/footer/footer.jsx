import style from "./footer.module.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import imgfooter from "../../assets/footer-tiyapuy-3_danzantes-2.webp";
import facebook from "../../assets/facebook.svg";
import twiterx from "../../assets/twitterx.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";
function footer() {
  return (
    <div className={style.footer}>
      <img src={imgfooter} className={style.imagefooter} />
      <div className={style.footergeneral}>
        <div>
          <img src={logo} className={style.logofooter} />
        </div>
        <div>
          <div className={style.titlefooter}>Nuestra Pagina</div>
          <Link>
            <div className={style.btnfooter}>Inicio</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Nosotros</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Productos</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Contacto</div>
          </Link>
        </div>
        <div>
          <div className={style.titlefooter}>Link Extra</div>

          <Link>
            <div className={style.btnfooter}>Politicas de Privacidad</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Preguntas Frecuentes</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Aviso Legal</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Informacion de Contacto</div>
          </Link>
          <Link>
            <div className={style.btnfooter}>Terminos y condiciones</div>
          </Link>
        </div>
        <div>
          <div className={style.titlefooter}>Contacto</div>
          <Link to={"mail:qorifood@qorifood"}>
            <div className={style.correofooter}>Qorifood@qorifood.com</div>
          </Link>
          <Link to={"https://wa.link/5c58b2"}>
            <div className={style.numerofooter}>+51 990 779 050</div>
          </Link>
          <div className={style.titlefooter}>Av. 26 de Enero</div>
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
