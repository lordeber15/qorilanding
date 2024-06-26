import style from "./inicio.module.css";
import fideos from "../../assets/inicio.png";
import { Link } from "react-router-dom";
import Cardproducto from "../cardproducto/cardproducto";
import Certificaciones from "../certificaciones/certificaciones";
function inicio() {
  return (
    <div className={style.contenedor}>
      <div className={style.imagen}>
        <div>
          <img src={fideos} className={style.fideos} />
        </div>
      </div>
      <div className={style.botoncompra}>
        <Link to={"https://wa.link/5c58b2"} className={style.boton}>
          ¡Compra Ahora!
        </Link>
      </div>
      <div className={style.ceo}>
        <div className={style.imagenceo} />
        <span className={style.textceo}>
          <h1 className={style.titleceo}>
            <span>CEO-</span>
            <span className={style.fundador}> FUNDADOR</span>
          </h1>
          <p>
            Anibal Prado Condori, nacido en Andahuaylas Peru , el año 1986, de
            profesión Ing. Agroindustrial, de la Universidad Nacional San
            Cristobal de Huamanga.
          </p>
          <p>
            Este proyecto nace a causa de un problema que tuvo su esposa cuando
            estuvo en un estado de gestación, una mala alimentación le causo
            ANEMIA SEVERA 9.2, Anibal Prado Condori preocupado por el estado de
            su esposa, decide hacer algo, en un almuerzo familiar nace esta idea
            de crear una formula de unas pastas hechas a base de QUINUA, CUY y
            ATACCO, el cual fue inicio de esta oportunidad ante un problema.
          </p>
          Emprendimiento el 12 de Octubre del 2019.
        </span>
      </div>
      <div className={style.pastasgeneral}>
        <div className={style.cardproducto}>
          <Cardproducto />
        </div>
        <div className={style.pasta} />
      </div>
      <Certificaciones />
    </div>
  );
}

export default inicio;
